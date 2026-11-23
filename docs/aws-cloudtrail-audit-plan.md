
# GoSimplify360 – AWS CloudTrail Audit and Monitoring Plan

## 1. Project Objective

Design an AWS CloudTrail auditing plan for the proposed GoSimplify360 cloud architecture.

The objective is to understand how AWS account activity can be recorded, reviewed and investigated to support security and operational monitoring.

This is an architecture and learning exercise. No AWS CloudTrail resources have been deployed.

## 2. What is AWS CloudTrail?

AWS CloudTrail is an AWS service that records account activity and API events.

It helps identify:
- Who performed an action.
- What action was performed.
- When the action occurred.
- Which resource was affected.
- Whether an API request succeeded or failed.

CloudTrail supports security auditing, compliance investigations and operational troubleshooting.

## 3. CloudTrail Event Types

### Management Events

Management events record control-plane operations involving AWS resources.

Examples:
- Creating or deleting IAM users.
- Updating IAM policies.
- Modifying S3 bucket configurations.
- Changing security group rules.
- Creating or deleting AWS resources.

### Data Events

Data events record supported resource-level operations.

Examples:
- Reading an S3 object.
- Uploading an S3 object.
- Deleting an S3 object.
- Invoking a supported Lambda function.

Data events generally require explicit configuration and may incur additional charges.

## 4. Proposed CloudTrail Audit Architecture

For GoSimplify360, CloudTrail would support auditing of the proposed AWS environment.

Proposed architecture:

AWS Account Activity
        |
        v
AWS CloudTrail
        |
        v
CloudTrail Event Records
        |
        v
Amazon S3 Log Storage
        |
        v
Security Review and Investigation

Note: This is a proposed architecture. No AWS resources or log collection have been configured.

## 5. Important CloudTrail Fields

| Field | Purpose |
|---|---|
| eventTime | Time the event occurred |
| eventName | API operation performed |
| eventSource | AWS service that generated the event |
| userIdentity | Identity associated with the request |
| sourceIPAddress | Source IP address recorded for the request |
| awsRegion | AWS Region associated with the event |
| requestParameters | Request details, when recorded |
| errorCode | Error information, when present |
| errorMessage | Additional error details, when present |

The available fields depend on the event type and service.

## 6. GoSimplify360 Security Monitoring Scenarios

### Scenario 1: IAM Policy Modification

Situation:
An IAM policy is unexpectedly modified.

Investigation:
1. Search CloudTrail for IAM policy modification events.
2. Review the event timestamp.
3. Identify the associated user or role.
4. Review the event details.
5. Compare the change with the approved configuration.
6. Document the investigation.

### Scenario 2: S3 Bucket Configuration Change

Situation:
The S3 bucket's access configuration changes unexpectedly.

Investigation:
1. Review relevant S3 management events.
2. Identify the API operation.
3. Review the identity associated with the request.
4. Check the recorded request parameters.
5. Review the change against the security baseline.
6. Escalate suspicious activity.

### Scenario 3: Unexpected S3 Object Access

Situation:
An unexpected user accesses a website object.

Investigation:
1. Confirm that the required S3 object-level data events were configured.
2. Search the relevant CloudTrail records.
3. Review the identity and event time.
4. Identify the affected object.
5. Compare the activity with expected usage.
6. Document the findings.

Note: S3 object-level data events are not automatically included in basic CloudTrail Event History.

## 7. CloudTrail Investigation Workflow

1. Identify the suspicious activity.
2. Determine the affected AWS service and resource.
3. Search the relevant CloudTrail event records.
4. Review the event name and timestamp.
5. Identify the requesting user or role.
6. Review the source IP address and request details where available.
7. Determine whether the activity was authorized.
8. Escalate or recommend corrective action.
9. Document the findings.

## 8. Security Best Practices

- Enable appropriate CloudTrail logging for the AWS environment.
- Configure required management and data events.
- Store audit logs in an appropriately protected S3 bucket.
- Apply least-privilege access to audit records.
- Protect log integrity.
- Define appropriate log retention requirements.
- Review suspicious activity regularly.
- Use CloudWatch or other approved monitoring solutions for alerting where appropriate.

## 9. Implementation and Validation Status

| Component | Status |
|---|---|
| CloudTrail concepts | Studied |
| Audit architecture | Designed |
| Investigation scenarios | Documented |
| Event fields | Documented |
| CloudTrail configuration | Not performed |
| Live AWS audit investigation | Not performed |
| AWS deployment | Not performed |

## 10. Learning Outcomes

- Understanding AWS CloudTrail.
- Differentiating management events and data events.
- Understanding AWS API activity records.
- Investigating IAM policy changes.
- Reviewing S3 access activity.
- Designing an AWS audit investigation workflow.
- Applying security monitoring best practices.

## 11. Project Scope

This document is part of the GoSimplify360 AWS Cloud Architecture Learning Project.

It demonstrates AWS auditing concepts, security investigation workflows and monitoring design using local documentation.

No live AWS infrastructure, CloudTrail trails or log collection have been configured or tested.
