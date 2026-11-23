
# GoSimplify360 – AWS IAM and Least Privilege Security

## 1. Project Objective

Document a secure AWS Identity and Access Management (IAM) design for the proposed GoSimplify360 architecture.

The objective is to understand how IAM controls access to AWS resources and how least privilege reduces security risks.

This is a local learning and architecture documentation project. No AWS IAM resources have been created or deployed.

## 2. What is AWS IAM?

AWS Identity and Access Management (IAM) is a service that controls authentication and authorization for AWS resources.

IAM helps organizations manage:
- Who can access AWS resources.
- Which actions users and services can perform.
- Which resources they can access.
- Under what conditions access is permitted or denied.

## 3. Core IAM Components

### IAM Users
An IAM user represents an identity with specific AWS permissions.

Example: A developer who needs access to approved development resources.

### IAM Groups
IAM groups organize users with similar responsibilities and permissions.

Examples:
- Developers
- Monitoring Team
- Administrators

### IAM Roles
IAM roles provide temporary credentials to trusted users, applications, or AWS services.

Example: An authorized deployment workflow assuming a role with limited permissions.

### IAM Policies
IAM policies are JSON documents that define permissions.

A policy specifies:
- Effect
- Action
- Resource
- Condition (optional)

## 4. Principle of Least Privilege

The Principle of Least Privilege means granting only the permissions necessary to perform a specific task.

Benefits:
- Reduces unauthorized access risks.
- Limits the impact of compromised identities.
- Improves security and compliance.
- Prevents unnecessary administrative permissions.

## 5. IAM Policy Structure

Example policy for reading objects from a specific S3 bucket:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::gosimplify360-bucket/*"
    }
  ]
}
```

Policy explanation:

| Field | Purpose |
|---|---|
| Effect | Allows the specified action |
| Action | Allows reading S3 objects |
| Resource | Limits access to objects in the specified bucket |
| Condition | Optional additional access requirements |

This example does not grant upload or delete permissions.

## 6. Proposed IAM Access Design

| Role | Required access |
|---|---|
| Developer | Only approved development operations |
| Monitoring Engineer | Read-only access to required monitoring information |
| Administrator | Controlled administrative permissions |
| Deployment Workflow | Only approved deployment permissions |

These are proposed access responsibilities, not deployed IAM identities.

## 7. S3 Permission Security

For the proposed GoSimplify360 architecture:

- Use `s3:GetObject` when object download access is required.
- Use `s3:PutObject` only when uploading objects is required.
- Avoid granting `s3:DeleteObject` unless deletion is necessary.
- Restrict resource permissions to the required bucket and objects.
- Avoid unrestricted `s3:*` permissions.

## 8. CloudWatch Permission Security

For monitoring responsibilities:

- Grant only the required metric-reading permissions.
- Use `cloudwatch:GetMetricData` to retrieve metric data.
- Use `cloudwatch:ListMetrics` to list available metrics.
- Grant alarm-management permissions only when necessary.
- Avoid unrestricted `cloudwatch:*` permissions.

Note: IAM permissions should be checked against the exact monitoring task and AWS service requirements.

## 9. IAM Security Best Practices

- Follow the Principle of Least Privilege.
- Prefer IAM roles and temporary credentials where appropriate.
- Avoid sharing credentials.
- Enable multi-factor authentication (MFA) for human access.
- Review permissions periodically.
- Remove unused identities and permissions.
- Monitor access using AWS CloudTrail.
- Avoid hardcoding credentials in source code.
- Use explicit Deny statements when appropriate.

## 10. Sample Security Review Scenario

Scenario:

A developer has received permission to delete objects from the production S3 bucket, but their job requires only reading website files.

Recommended response:

1. Review the IAM policy.
2. Identify unnecessary delete permissions.
3. Remove permissions that are not required.
4. Retain the necessary read permissions.
5. Review relevant CloudTrail events.
6. Document the change.

## 11. Implementation and Validation Status

| Component | Status |
|---|---|
| IAM architecture design | Documented |
| Least privilege concepts | Studied |
| Sample IAM policy | Documented |
| S3 access design | Documented |
| CloudWatch access design | Documented |
| Live IAM configuration | Not performed |
| AWS deployment | Not performed |

## 12. Learning Outcomes

- Understanding IAM users, groups, roles and policies.
- Reading and interpreting IAM JSON policies.
- Applying least privilege principles.
- Understanding S3 and CloudWatch permissions.
- Identifying overly broad permissions.
- Designing secure AWS access controls.

## 13. Project Scope

This documentation is part of the GoSimplify360 AWS Cloud Architecture Learning Project.

It demonstrates AWS security concepts and policy analysis using local examples. No live AWS infrastructure or IAM permissions have been configured or tested.
