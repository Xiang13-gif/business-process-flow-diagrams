# Diagram design guide

This guide keeps independently maintained Mermaid files visually consistent, readable, and safe to reuse in workshops.

## Source-of-truth model

- Mermaid files in `diagrams/` are the source of truth.
- SVG files in `assets/previews/` are generated previews. Never hand-edit them; run `pnpm run render:diagrams` instead.
- Explanations in `docs/explanations/` provide context, not normative policy.

## Required source metadata

Every `.mmd` file must include:

1. The shared visual configuration at the top of the file.
2. An `accTitle` that identifies the flow in one short phrase.
3. An `accDescr` that describes the key journey and outcomes in plain language.

The validation script enforces the accessibility metadata and renders every file to catch Mermaid syntax errors.

## Modeling conventions

| Element         | Convention                                          | Why it matters                                             |
| --------------- | --------------------------------------------------- | ---------------------------------------------------------- |
| Action          | Rectangle, such as `A[Validate documents]`          | Makes a task distinguishable from a decision.              |
| Decision        | Diamond, such as `B{Documents complete?}`           | Every outgoing branch should have a short, explicit label. |
| Start/end       | Clearly labelled start or terminal node             | Avoids dangling paths and ambiguous exits.                 |
| Exception       | Explicit reject, hold, manual-review, or retry node | Do not hide negative outcomes in an unlabeled loop.        |
| System boundary | `subgraph` named for a phase, actor, or system      | Keeps handoffs and ownership legible.                      |

Keep labels concise, place detailed discussion in the companion guide, and never rely on colour alone to convey an outcome.

## Content standards

- Use generic terms unless a named product or platform is essential to the example.
- Mark examples as illustrative and avoid claiming that a named organisation's live process works exactly as shown.
- Cite primary sources for factual regulatory, scheme, product, or policy statements. Do not leave bare `[1]` markers without a maintained bibliography.
- Remove personal, customer, account, and confidential operational data before committing.
- Record a review date and owner when a diagram becomes a maintained internal artifact.

## Before submitting a change

```bash
pnpm run check
pnpm run render:diagrams
git diff -- assets/previews
```

Check that every decision has a meaningful outcome, every exception reaches a defined state, and the diagram still fits a practical reading path. For dense processes, prefer a high-level overview plus separate drill-down diagrams instead of a single oversized graph.
