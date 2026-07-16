# Control and exception matrix

This guide is a reusable way to record the control intent, exception paths, and evidence behind an illustrative process diagram. It is a discussion aid, not an approved policy, control standard, or regulatory interpretation. Adapt the language, roles, thresholds, and evidence to the organisation and jurisdiction that own the real process.

## How to use this matrix

1. Start with a defined process boundary: a clear trigger, outcome, and owner.
2. For each meaningful handoff or decision, state the risk or failure the activity is intended to address.
3. Describe the normal control activity and the observable evidence it leaves behind.
4. Give every exception a named trigger, an accountable route, and a defined outcome.
5. Have the relevant process, risk, operations, and technology owners review the completed matrix before relying on it.

Do not copy generic examples into a live process without validating the actual systems, approval authorities, information-handling rules, and escalation arrangements.

## Illustrative matrix

| Process point                  | Control intent                                                                       | Illustrative activity                                                           | Exception trigger                                                       | Illustrative route and outcome                                                      | Evidence to retain or inspect                                    |
| ------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Request intake                 | Capture a complete, traceable request                                                | Assign a reference and record the initiator, channel, and submitted information | A required field or supporting item is absent                           | Return the request for completion; do not progress it as complete                   | Request record, timestamp, and resubmission history              |
| Data validation                | Reduce avoidable input and format errors                                             | Apply format, range, and duplicate checks before the next stage                 | A value is invalid, inconsistent, or duplicated                         | Present the failed field to the maker or route to a review queue                    | Validation result and corrected value history                    |
| Eligibility or risk assessment | Apply the agreed decision criteria consistently                                      | Evaluate the request against the currently approved business rules              | The result is outside the normal decision path or cannot be determined  | Hold, decline, or refer to an authorised reviewer according to the local process    | Decision result, rule version, and reviewer record               |
| Approval                       | Keep initiation and approval responsibilities distinct where the process requires it | Route the request to an appropriate approving role                              | The approver declines, requests clarification, or lacks authority       | Return for rework, escalate, or end the request with a recorded reason              | Approval record, comments, role, and timestamp                   |
| Instruction release            | Release only the final approved instruction                                          | Compare the release candidate with the approved request                         | The instruction differs from the approved request or its status changes | Stop release and investigate or recreate the instruction                            | Comparison result, release status, and operator record           |
| Downstream response            | Identify incomplete or failed completion                                             | Record the receiving system or counterparty response                            | A response is missing, rejected, delayed, or ambiguous                  | Place the item in an exception queue and notify the accountable team                | Response message, queue status, and follow-up log                |
| Reconciliation and closure     | Confirm the intended outcome is reflected in the record of account                   | Compare expected and observed outcomes at an appropriate cadence                | A mismatch remains after initial investigation                          | Keep the case open, assign an owner, and document resolution or write-off treatment | Reconciliation report, investigation notes, and closure approval |

The rows above are intentionally broad. A real matrix may need additional rows for access management, change management, data retention, customer communication, or third-party handoffs.

## Mapping controls to a diagram

Keep the diagram readable by showing only the action, decision, exception route, and terminal outcome. Put detailed control logic in this matrix or a companion guide.

| Diagram element                        | Matrix detail to capture                                                   |
| -------------------------------------- | -------------------------------------------------------------------------- |
| Action node                            | Owner, input, expected output, and evidence                                |
| Decision node                          | Decision basis, possible outcomes, and accountable role                    |
| Retry loop                             | Entry condition, limit or review point, and exit condition                 |
| Manual-review node                     | Reason for referral, reviewer authority, and expected resolution           |
| Reject, hold, or cancellation endpoint | Customer or stakeholder communication, record status, and closure evidence |
| System handoff                         | Sending record, receiving acknowledgement, and reconciliation method       |

## Questions for an exception review

- Is the trigger observable and unambiguous?
- Does the exception have an owner and a target outcome?
- Can an exception remain open indefinitely, and if so, who reviews it?
- Does the route distinguish retryable errors from decisions that require a human review?
- Does the evidence identify what happened without exposing unnecessary personal, customer, or confidential information?
- Is the exception route represented in the diagram where a reader needs it to understand the process?

## Review record

For a maintained process, record the diagram version, matrix version, review date, reviewer roles, assumptions, unresolved questions, and the next review trigger. Keep organisation-specific implementation details in the appropriate internal system rather than this public library.

For a fill-in version, use [the control-and-exception matrix template](../templates/control-and-exception-matrix.md).
