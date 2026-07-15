# Contributing

Thanks for helping make this diagram library clear, useful, and safe to discuss.

## Local setup

Use Node.js 22 or later and pnpm 11.7.0.

```bash
pnpm install
pnpm run check
pnpm run render:diagrams
```

`check` formats supported files, confirms accessibility metadata, and renders every Mermaid source. `render:diagrams` updates the committed previews; include those updates in the same pull request as a diagram change.

## Adding or changing a diagram

1. Put the Mermaid source in the relevant `diagrams/<domain>/` folder with a concise kebab-case name.
2. Add `accTitle` and `accDescr`, follow the [diagram design guide](docs/diagram-design-guide.md), and keep labels short.
3. Add or update a companion guide and the [diagram catalog](docs/diagram-catalog.md).
4. Use illustrative, generic language where possible. Do not imply that a named organisation's current process is represented exactly.
5. Remove customer data, internal identifiers, credentials, confidential links, and unverified policy claims.
6. Run the checks and commit the generated SVG preview.

## Pull requests

Keep each pull request focused. Explain the scenario, changed decisions or exception paths, source/review basis for factual claims, and any open questions. A reviewer should be able to compare the Mermaid source, preview, and companion guide without guessing what changed.

## Conduct

Please follow the standards in [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Security-sensitive findings belong in the private reporting path described in [SECURITY.md](SECURITY.md), not a public issue.
