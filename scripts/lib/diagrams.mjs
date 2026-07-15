import { spawn } from "node:child_process";
import { access, mkdir, readdir, readFile, rm, stat } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
export const repositoryRoot = resolve(scriptDirectory, "../..");
export const diagramDirectory = join(repositoryRoot, "diagrams");
const puppeteerConfig = join(
  repositoryRoot,
  "scripts",
  "puppeteer-config.json",
);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return walk(path);
      return entry.isFile() && path.endsWith(".mmd") ? [path] : [];
    }),
  );

  return files.flat().sort();
}

export async function findDiagrams() {
  const files = await walk(diagramDirectory);
  if (files.length === 0) {
    throw new Error("No Mermaid sources were found in diagrams/.");
  }

  return files;
}

export async function readDiagram(path) {
  return readFile(path, "utf8");
}

export function outputPathFor(sourcePath, outputDirectory) {
  const sourceRelativePath = relative(diagramDirectory, sourcePath);
  return join(outputDirectory, sourceRelativePath.replace(/\.mmd$/, ".svg"));
}

function mmdcPath() {
  const executable = process.platform === "win32" ? "mmdc.cmd" : "mmdc";
  return join(repositoryRoot, "node_modules", ".bin", executable);
}

async function run(command, args) {
  await new Promise((resolvePromise, rejectPromise) => {
    const process = spawn(command, args, {
      cwd: repositoryRoot,
      stdio: "inherit",
    });

    process.on("error", rejectPromise);
    process.on("exit", (code) => {
      if (code === 0) resolvePromise();
      else rejectPromise(new Error(`${command} exited with code ${code}.`));
    });
  });
}

export async function renderDiagrams({ outputDirectory, clean = false }) {
  const renderer = mmdcPath();
  await access(renderer, constants.X_OK);

  if (clean) {
    await rm(outputDirectory, { force: true, recursive: true });
  }

  const sources = await findDiagrams();
  const outputs = [];

  for (const source of sources) {
    const output = outputPathFor(source, outputDirectory);
    await mkdir(dirname(output), { recursive: true });
    await run(renderer, [
      "-i",
      source,
      "-o",
      output,
      "-b",
      "transparent",
      "-p",
      puppeteerConfig,
    ]);

    const renderedFile = await stat(output);
    if (renderedFile.size === 0) {
      throw new Error(`Mermaid rendered an empty file for ${source}.`);
    }
    outputs.push(output);
  }

  return outputs;
}
