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

### Loan origination to servicing handoff drill-down

Detailed control-focused view of the approved-application handoff: conditions, documentation, booking, reconciliation, disbursement release, and servicing activation.

- [Mermaid source](../diagrams/lending/loan-origination-to-servicing-handoff-drilldown.mmd)
- [SVG preview](../assets/previews/lending/loan-origination-to-servicing-handoff-drilldown.svg)
- [Parent flow](../diagrams/lending/loan-origination-to-servicing.mmd)
- [Control and exception matrix](control-and-exception-matrix.md)

### Collections and hardship management

Illustrative arrears-management journey covering early identification, customer engagement, affordability review, relief or recovery routes, monitoring, and closure.

- [Mermaid source](../diagrams/lending/collections-and-hardship-management.mmd)
- [SVG preview](../assets/previews/lending/collections-and-hardship-management.svg)
- [Related lifecycle](../diagrams/lending/loan-lifecycle.mmd)
- [Control and exception matrix](control-and-exception-matrix.md)

## Accounts

### Retail account opening and activation

Generic retail-account journey from application and due diligence through account setup, first funding, channel enrolment, and activation.

- [Mermaid source](../diagrams/accounts/retail-account-opening-and-activation.mmd)
- [SVG preview](../assets/previews/accounts/retail-account-opening-and-activation.svg)
- [Related KYC flow](../diagrams/identity/kyc-onboarding.mmd)
- [Control and exception matrix](control-and-exception-matrix.md)

### Account maintenance and closure

Generic account-servicing flow for a customer request, entitlement checks, final-balance handling, closure controls, confirmation, and records retention.

- [Mermaid source](../diagrams/accounts/account-maintenance-and-closure.mmd)
- [SVG preview](../assets/previews/accounts/account-maintenance-and-closure.svg)
- [Control and exception matrix](control-and-exception-matrix.md)

## Cards

### Credit-card application and activation

Generic card journey from application and assessment through account setup, card delivery, secure activation, and exception routes.

- [Mermaid source](../diagrams/cards/credit-card-application-and-activation.mmd)
- [SVG preview](../assets/previews/cards/credit-card-application-and-activation.svg)
- [Related credit application](../diagrams/lending/retail-credit-application.mmd)
- [Control and exception matrix](control-and-exception-matrix.md)

## Identity and security

### KYC onboarding

Customer onboarding with data collection, document verification, screening, enhanced due diligence, risk classification, and ongoing monitoring.

- [Mermaid source](../diagrams/identity/kyc-onboarding.mmd)
- [SVG preview](../assets/previews/identity/kyc-onboarding.svg)
- [Companion guide](explanations/identity/kyc-onboarding.md)

### KYC screening and enhanced due-diligence drill-down

Detailed case flow for data remediation, screening-match triage, enhanced due diligence, risk acceptance, and documented closure.

- [Mermaid source](../diagrams/identity/kyc-screening-and-edd-drilldown.mmd)
- [SVG preview](../assets/previews/identity/kyc-screening-and-edd-drilldown.svg)
- [Parent flow](../diagrams/identity/kyc-onboarding.mmd)
- [Control and exception matrix](control-and-exception-matrix.md)

### Digital-token activation

Illustrative step-up verification and device-binding journey for activation of a mobile digital token.

- [Mermaid source](../diagrams/security/digital-token-activation.mmd)
- [SVG preview](../assets/previews/security/digital-token-activation.svg)
- [Companion guide](explanations/security/digital-token-activation.md)

### Fraud-alert investigation and resolution

Generic fraud-alert case flow from detection through triage, customer contact, evidence review, protective action, decision, remediation, and closure.

- [Mermaid source](../diagrams/security/fraud-alert-investigation-and-resolution.mmd)
- [SVG preview](../assets/previews/security/fraud-alert-investigation-and-resolution.svg)
- [Control and exception matrix](control-and-exception-matrix.md)

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

### Maker-checker payment approval drill-down

Detailed dual-control view of payment preparation, independent review, approval limits, expiry, escalation, and controlled release.

- [Mermaid source](../diagrams/payments/maker-checker-payment-approval-drilldown.mmd)
- [SVG preview](../assets/previews/payments/maker-checker-payment-approval-drilldown.svg)
- [Parent flow](../diagrams/payments/corporate-single-payment.mmd)
- [Control and exception matrix](control-and-exception-matrix.md)

### Payment dispute and chargeback management

Generic payment-dispute case flow from intake and evidence collection through eligibility, investigation, representment or chargeback action, outcome notification, and closure.

- [Mermaid source](../diagrams/payments/payment-dispute-and-chargeback-management.mmd)
- [SVG preview](../assets/previews/payments/payment-dispute-and-chargeback-management.svg)
- [Control and exception matrix](control-and-exception-matrix.md)

## Trade finance

### Documentary credit issuance and settlement

Generic documentary-credit journey from applicant request and issuance through shipment-document review, compliant or discrepant handling, settlement, and closure.

- [Mermaid source](../diagrams/trade/documentary-credit-issuance-and-settlement.mmd)
- [SVG preview](../assets/previews/trade/documentary-credit-issuance-and-settlement.svg)
- [Related SME journey](../diagrams/sme/sme-digital-banking-journey.mmd)
- [Control and exception matrix](control-and-exception-matrix.md)

## Architecture and data

### Banking system context and data lineage

Conceptual system view connecting customer channels, business workflows, controls, systems of record, external networks, and operational data products.

- [Mermaid source](../diagrams/architecture/banking-system-context-and-data-lineage.mmd)
- [SVG preview](../assets/previews/architecture/banking-system-context-and-data-lineage.svg)
- [Control and exception matrix](control-and-exception-matrix.md)

## State models

### Credit application state machine

Explicit lifecycle states for drafting, assessment, approval, offer acceptance, account activation, withdrawal, decline, and expiry.

- [Mermaid source](../diagrams/states/credit-application-state-machine.mmd)
- [SVG preview](../assets/previews/states/credit-application-state-machine.svg)
- [Related workflow](../diagrams/lending/credit-application-workflow.mmd)
- [Control and exception matrix](control-and-exception-matrix.md)

### Corporate payment state machine

Explicit lifecycle states for drafting, approval, screening, funding, network processing, settlement, return, failure, and cancellation.

- [Mermaid source](../diagrams/states/corporate-payment-state-machine.mmd)
- [SVG preview](../assets/previews/states/corporate-payment-state-machine.svg)
- [Related workflow](../diagrams/payments/corporate-single-payment.mmd)
- [Control and exception matrix](control-and-exception-matrix.md)

## SME banking

### SME digital-banking journey

A high-level SME digital-banking landscape covering onboarding plus distinct payment, collection, financing, trade-finance, and servicing journeys.

- [Mermaid source](../diagrams/sme/sme-digital-banking-journey.mmd)
- [SVG preview](../assets/previews/sme/sme-digital-banking-journey.svg)
- [Companion guide](explanations/sme/sme-digital-banking-journey.md)

## Process-design resources

- [Control and exception matrix](control-and-exception-matrix.md): document control intent, evidence, and named routes for non-happy-path outcomes.
- [Banking-process glossary](banking-glossary.md): common, illustrative terminology used across the library.
- [Process diagram brief template](../templates/process-diagram-brief.md): frame scope, actors, assumptions, and review needs before drafting a diagram.
- [Control and exception matrix template](../templates/control-and-exception-matrix.md): capture organisation-specific implementation details outside the illustrative library.
- [Companion guide template](../templates/companion-guide.md): record reading notes, assumptions, references, and review status alongside a diagram.

## How to work with a diagram

1. Start with the **SVG preview** for a quick visual reading.
2. Open the **Mermaid source** when you need to revise steps, branches, or layout.
3. Use the **companion guide** as contextual commentary, but verify its factual claims and citations before operational use.
4. For material decisions or exceptions, complete a control matrix and retain references in the relevant internal system.
5. Update the source, its catalog entry, any companion guide, and generated preview together. Run `pnpm run check` and `pnpm run render:diagrams` before opening a pull request.
