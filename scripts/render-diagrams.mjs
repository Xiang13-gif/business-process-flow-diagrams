import { join } from "node:path";
import { renderDiagrams, repositoryRoot } from "./lib/diagrams.mjs";

const outputDirectory = join(repositoryRoot, "assets", "previews");
const outputs = await renderDiagrams({ outputDirectory, clean: true });

console.log(`Rendered ${outputs.length} diagrams into assets/previews/.`);
