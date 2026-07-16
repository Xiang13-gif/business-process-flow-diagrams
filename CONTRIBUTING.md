# Contributing

Thanks for helping make this diagram library clear, useful, and safe to discuss.

## Local setup

Use Node.js 22 or later and pnpm 11.7.0.

```bash
pnpm install
pnpm run check
pnpm run render:diagrams
```

`check` checks formatting, validates links and accessibility metadata, renders every Mermaid source, and confirms that each committed preview carries the current Mermaid-source hash. `render:diagrams` updates the committed previews; include those updates in the same pull request as a diagram change.

## Adding or changing a diagram

1. For a new process, begin with the [process diagram brief template](templates/process-diagram-brief.md) to define scope and review needs.
2. Put the Mermaid source in the relevant `diagrams/<domain>/` folder with a concise kebab-case name.
3. Add `accTitle` and `accDescr`, follow the [diagram design guide](docs/diagram-design-guide.md), and keep labels short.
4. Add or update a companion guide, the [diagram catalog](docs/diagram-catalog.md), and—when decisions or exceptions matter—the [control and exception matrix](docs/control-and-exception-matrix.md).
5. Use illustrative, generic language where possible. Do not imply that a named organisation's current process is represented exactly.
6. Remove customer data, internal identifiers, credentials, confidential links, and unverified policy claims.
7. Run the checks and commit the generated SVG preview.

## Pull requests

Keep each pull request focused. Explain the scenario, changed decisions or exception paths, source/review basis for factual claims, and any open questions. A reviewer should be able to compare the Mermaid source, preview, and companion guide without guessing what changed.

## Conduct

Please follow the standards in [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Security-sensitive findings belong in the private reporting path described in [SECURITY.md](SECURITY.md), not a public issue.
