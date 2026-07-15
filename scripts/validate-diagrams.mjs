import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, relative, sep } from "node:path";
import {
  findDiagrams,
  readDiagram,
  repositoryRoot,
  renderDiagrams,
} from "./lib/diagrams.mjs";

const requiredAccessibilityMetadata = ["accTitle:", "accDescr:"];
const diagrams = await findDiagrams();
const catalogPath = join(repositoryRoot, "docs", "diagram-catalog.md");
const catalog = await readFile(catalogPath, "utf8");

for (const diagram of diagrams) {
  const source = await readDiagram(diagram);
  const missingMetadata = requiredAccessibilityMetadata.filter(
    (item) => !source.includes(item),
  );
  if (missingMetadata.length > 0) {
    throw new Error(
      `${diagram} is missing Mermaid accessibility metadata: ${missingMetadata.join(", ")}`,
    );
  }

  const catalogLink = relative(dirname(catalogPath), diagram)
    .split(sep)
    .join("/");
  if (!catalog.includes(`](${catalogLink})`)) {
    throw new Error(`${diagram} is not linked from docs/diagram-catalog.md.`);
  }
}

const outputDirectory = await mkdtemp(
  join(tmpdir(), "business-process-diagrams-"),
);
try {
  const outputs = await renderDiagrams({ outputDirectory });
  console.log(`Validated ${outputs.length} Mermaid diagrams.`);
} finally {
  await rm(outputDirectory, { force: true, recursive: true });
}
