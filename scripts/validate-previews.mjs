import { access, readdir, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { join, relative } from "node:path";
import {
  findDiagrams,
  outputPathFor,
  repositoryRoot,
  sourceHashForFile,
} from "./lib/diagrams.mjs";

const previewDirectory = join(repositoryRoot, "assets", "previews");
const sourceHashComment = /^<!-- source-sha256: ([a-f0-9]{64}) -->/;

async function findSvgFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return findSvgFiles(path);
      return entry.isFile() && path.endsWith(".svg") ? [path] : [];
    }),
  );

  return files.flat().sort();
}

const diagrams = await findDiagrams();
const expectedPreviews = new Set();
const errors = [];

for (const diagram of diagrams) {
  const preview = outputPathFor(diagram, previewDirectory);
  expectedPreviews.add(preview);
  try {
    await access(preview, constants.F_OK);
  } catch {
    errors.push(`Missing preview for ${relative(repositoryRoot, diagram)}.`);
    continue;
  }

  const svg = await readFile(preview, "utf8");
  const match = svg.match(sourceHashComment);
  const expectedHash = await sourceHashForFile(diagram);
  if (!match || match[1] !== expectedHash) {
    errors.push(`Preview is stale for ${relative(repositoryRoot, diagram)}.`);
  }
  if (!svg.includes("<title") || !svg.includes("<desc")) {
    errors.push(
      `Preview is missing accessibility metadata for ${relative(repositoryRoot, diagram)}.`,
    );
  }
}

for (const preview of await findSvgFiles(previewDirectory)) {
  if (!expectedPreviews.has(preview)) {
    errors.push(
      `Preview has no Mermaid source: ${relative(repositoryRoot, preview)}.`,
    );
  }
}

if (errors.length > 0) {
  throw new Error(`Preview validation failed:\n${errors.join("\n")}`);
}

console.log(`Validated ${expectedPreviews.size} committed SVG previews.`);
