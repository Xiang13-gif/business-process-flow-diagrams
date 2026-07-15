# Banking business-process flow diagrams

[![Validate diagrams](https://github.com/Xiang13-gif/business-process-flow-diagrams/actions/workflows/validate-diagrams.yml/badge.svg)](https://github.com/Xiang13-gif/business-process-flow-diagrams/actions/workflows/validate-diagrams.yml)

A curated library of **illustrative** banking-process diagrams, maintained as Mermaid source. It is designed for business analysts, product teams, consultants, and system designers who need a clear starting point for discussing workflows—not a substitute for a bank's approved procedures.

<p align="center">
  <img src="assets/diagram-library-banner.svg" width="760" alt="Banking process diagram library banner showing lending, identity and security, payments, and SME banking domains.">
</p>

## Start here

- Browse every diagram and preview in the [diagram catalog](docs/diagram-catalog.md).
- Read the [diagram design guide](docs/diagram-design-guide.md) before changing a flow.
- See the [migration map](docs/migration.md) if you used the previous root-level paths.
- Review [sources, scope, and content-review expectations](docs/sources-and-review.md) before treating a diagram as factual.

## Diagram library

| Domain      | Diagram                                                                             | Focus                                                               | Companion guide                                                      |
| ----------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Lending     | [Loan lifecycle](diagrams/lending/loan-lifecycle.mmd)                               | Origination through servicing, collections, and closure             | [Guide](docs/explanations/lending/loan-lifecycle.md)                 |
| Lending     | [Retail credit application](diagrams/lending/retail-credit-application.mmd)         | Retail application, credit assessment, approval, and disbursement   | [Guide](docs/explanations/lending/retail-credit-application.md)      |
| Lending     | [Auto-financing application](diagrams/lending/auto-financing-application.mmd)       | Vehicle-finance application and underwriting journey                | [Catalog notes](docs/diagram-catalog.md#auto-financing-application)  |
| Lending     | [Credit-application workflow](diagrams/lending/credit-application-workflow.mmd)     | Portfolio, prescreening, analysis, and multi-tier approval          | [Catalog notes](docs/diagram-catalog.md#credit-application-workflow) |
| Lending     | [Loan origination to servicing](diagrams/lending/loan-origination-to-servicing.mmd) | Handover from loan origination to account servicing                 | [Guide](docs/explanations/lending/loan-origination-to-servicing.md)  |
| Identity    | [KYC onboarding](diagrams/identity/kyc-onboarding.mmd)                              | Customer due diligence, screening, risk review, and monitoring      | [Guide](docs/explanations/identity/kyc-onboarding.md)                |
| Security    | [Digital-token activation](diagrams/security/digital-token-activation.mmd)          | Step-up verification, device binding, and activation                | [Guide](docs/explanations/security/digital-token-activation.md)      |
| Payments    | [Corporate bulk payment](diagrams/payments/corporate-bulk-payment.mmd)              | File upload, maker-checker approval, bank processing, and reporting | [Guide](docs/explanations/payments/corporate-bulk-payment.md)        |
| Payments    | [Corporate single payment](diagrams/payments/corporate-single-payment.mmd)          | Manual transfer, maker-checker approval, settlement, and reporting  | [Guide](docs/explanations/payments/corporate-single-payment.md)      |
| SME banking | [SME digital-banking journey](diagrams/sme/sme-digital-banking-journey.mmd)         | Onboarding, payments, collections, financing, trade, and servicing  | [Guide](docs/explanations/sme/sme-digital-banking-journey.md)        |

The conceptual [approval-matrix reference](docs/reference/approval-matrix.md) is available separately because it describes a control pattern rather than one diagram.

## View, validate, and render

The committed SVG previews make the library easy to browse on GitHub. Mermaid (`.mmd`) files remain the source of truth.

```bash
pnpm install
pnpm run check
pnpm run render:diagrams
```

`pnpm run check` verifies formatting, required accessibility metadata, and that every Mermaid source renders successfully. `pnpm run render:diagrams` refreshes the committed SVG previews in `assets/previews/`.

## Scope and responsible use

- These are conceptual examples for discussion and analysis. They are **not** official documentation for any bank, provider, product, payment scheme, regulator, or named platform.
- Do not use them as a production procedure, compliance rule, approval authority, or customer instruction without review by the relevant owner.
- Never add real customer data, credentials, account numbers, internal URLs, or confidential process details.
- Names and trademarks belong to their respective owners; their appearance does not imply affiliation or endorsement.

## Contributing and security

Contributions are welcome—start with [CONTRIBUTING.md](CONTRIBUTING.md). Report suspected repository vulnerabilities according to [SECURITY.md](SECURITY.md), not in a public issue.

## License

No license has been selected for this repository yet. Copyright remains with the repository owner by default, so ask for permission before reusing material. A future maintainer may choose an explicit license once the intended reuse terms are agreed.
