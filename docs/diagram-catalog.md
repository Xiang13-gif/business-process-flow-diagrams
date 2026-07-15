# Diagram catalog

This catalog is the canonical map of the library. Every entry links to its Mermaid source, committed SVG preview, and companion explanation where one exists.

> **Scope:** Each flow is illustrative. Validate terminology, controls, thresholds, channels, and regulatory treatment with the relevant process owner before using it outside a workshop or portfolio discussion.

## Lending

### Loan lifecycle

End-to-end generic loan flow from pre-qualification through servicing, default management, and closure.

- [Mermaid source](../diagrams/lending/loan-lifecycle.mmd)
- [SVG preview](../assets/previews/lending/loan-lifecycle.svg)
- [Companion guide](explanations/lending/loan-lifecycle.md)

### Retail credit application

Retail credit application from inquiry and data capture to multilevel credit approval, offer acceptance, and account activation.

- [Mermaid source](../diagrams/lending/retail-credit-application.mmd)
- [SVG preview](../assets/previews/lending/retail-credit-application.svg)
- [Companion guide](explanations/lending/retail-credit-application.md)

### Auto-financing application

Illustrative vehicle-financing flow covering applicant and vehicle information, credit assessment, underwriting, offer acceptance, and servicing setup.

- [Mermaid source](../diagrams/lending/auto-financing-application.mmd)
- [SVG preview](../assets/previews/lending/auto-financing-application.svg)
- [Companion guide](explanations/lending/auto-financing-application.md)

### Credit-application workflow

Portfolio creation, prescreening, document review, multi-tier credit approval, and conditional offer issuance.

- [Mermaid source](../diagrams/lending/credit-application-workflow.mmd)
- [SVG preview](../assets/previews/lending/credit-application-workflow.svg)
- [Companion guide](explanations/lending/credit-application-workflow.md)

### Loan origination to servicing

Illustrative handoff from loan origination and underwriting into account setup, servicing, collections, and closure.

- [Mermaid source](../diagrams/lending/loan-origination-to-servicing.mmd)
- [SVG preview](../assets/previews/lending/loan-origination-to-servicing.svg)
- [Companion guide](explanations/lending/loan-origination-to-servicing.md)

## Identity and security

### KYC onboarding

Customer onboarding with data collection, document verification, screening, enhanced due diligence, risk classification, and ongoing monitoring.

- [Mermaid source](../diagrams/identity/kyc-onboarding.mmd)
- [SVG preview](../assets/previews/identity/kyc-onboarding.svg)
- [Companion guide](explanations/identity/kyc-onboarding.md)

### Digital-token activation

Illustrative step-up verification and device-binding journey for activation of a mobile digital token.

- [Mermaid source](../diagrams/security/digital-token-activation.mmd)
- [SVG preview](../assets/previews/security/digital-token-activation.svg)
- [Companion guide](explanations/security/digital-token-activation.md)

## Payments

### Corporate bulk payment

File-based corporate payments from upload and validation through maker-checker approval, screening, routing, settlement, and reporting.

- [Mermaid source](../diagrams/payments/corporate-bulk-payment.mmd)
- [SVG preview](../assets/previews/payments/corporate-bulk-payment.svg)
- [Companion guide](explanations/payments/corporate-bulk-payment.md)

### Corporate single payment

Manual corporate payment from payee entry through maker-checker approval, screening, payment-network processing, and reporting.

- [Mermaid source](../diagrams/payments/corporate-single-payment.mmd)
- [SVG preview](../assets/previews/payments/corporate-single-payment.svg)
- [Companion guide](explanations/payments/corporate-single-payment.md)

## SME banking

### SME digital-banking journey

A high-level SME digital-banking landscape covering onboarding plus distinct payment, collection, financing, trade-finance, and servicing journeys.

- [Mermaid source](../diagrams/sme/sme-digital-banking-journey.mmd)
- [SVG preview](../assets/previews/sme/sme-digital-banking-journey.svg)
- [Companion guide](explanations/sme/sme-digital-banking-journey.md)

## How to work with a diagram

1. Start with the **SVG preview** for a quick visual reading.
2. Open the **Mermaid source** when you need to revise steps, branches, or layout.
3. Use the **companion guide** as contextual commentary, but verify its factual claims and citations before operational use.
4. Update the source, its catalog entry, any companion guide, and generated preview together. Run `pnpm run check` and `pnpm run render:diagrams` before opening a pull request.
