import { access, readdir, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");
const skippedDirectories = new Set([".git", "assets", "node_modules"]);
const markdownLink = /!?\[[^\]]*\]\(([^)\s]+)(?:\s+[^)]*)?\)/g;
const htmlLink = /\b(?:href|src)=["']([^"']+)["']/g;

async function findMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        return skippedDirectories.has(entry.name)
          ? []
          : findMarkdownFiles(path);
      }
      return entry.isFile() && path.endsWith(".md") ? [path] : [];
    }),
  );

  return files.flat().sort();
}

function localTarget(rawTarget) {
  const target = rawTarget.replace(/^<|>$/g, "");
  if (
    target === "" ||
    target.startsWith("#") ||
    /^(?:[a-z][a-z+.-]*:|\/\/)/i.test(target)
  ) {
    return null;
  }

  return decodeURIComponent(target.split("#", 1)[0]);
}

const markdownFiles = await findMarkdownFiles(repositoryRoot);
const missing = [];

for (const markdownFile of markdownFiles) {
  const content = await readFile(markdownFile, "utf8");
  for (const pattern of [markdownLink, htmlLink]) {
    for (const match of content.matchAll(pattern)) {
      const target = localTarget(match[1]);
      if (!target) continue;

      const absolutePath = resolve(dirname(markdownFile), target);
      try {
        await access(absolutePath, constants.F_OK);
      } catch {
        missing.push(`${markdownFile}: ${match[1]}`);
      }
    }
  }
}

if (missing.length > 0) {
  throw new Error(`Broken local Markdown links:\n${missing.join("\n")}`);
}

console.log(`Validated local links in ${markdownFiles.length} Markdown files.`);
