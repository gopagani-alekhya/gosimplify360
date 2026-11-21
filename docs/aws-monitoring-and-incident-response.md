
# GoSimplify360 – AWS Monitoring and Incident Response

## 1. Objective

Design a monitoring and incident-response approach for the proposed AWS hosting architecture of GoSimplify360.

## 2. Monitoring Services

### Amazon CloudWatch

Proposed monitoring areas:

- CloudFront request count.
- CloudFront HTTP 4xx errors.
- CloudFront HTTP 5xx errors.
- Origin availability.
- S3 storage and request metrics.
- Build and deployment failures.

### Amazon CloudTrail

Purpose:

- Record AWS account activity.
- Review API activity.
- Support security investigations.
- Identify changes to AWS resources.

## 3. Monitoring Dashboard Design

The proposed dashboard includes:

| Metric | Purpose |
|---|---|
| Requests | Understand website traffic |
| 4xx errors | Identify client-side request issues |
| 5xx errors | Identify server or origin-side issues |
| Cache hit rate | Understand caching performance |
| Origin errors | Investigate origin availability |

## 4. Sample Incident Scenario

### Incident: Website Returns HTTP 403 Errors

Scenario:

Users report that GoSimplify360 is not loading correctly and receive HTTP 403 responses.

### Investigation Steps

1. Confirm the reported issue.
2. Check whether the issue affects all users.
3. Review CloudFront response metrics.
4. Investigate S3 origin access configuration.
5. Review bucket policy and CloudFront OAC configuration.
6. Identify the cause of the access denial.
7. Recommend a corrective action.
8. Verify website availability after correction.

### Possible Root Cause

The CloudFront distribution may not have the required permission to access the private S3 origin.

### Recommended Resolution

Review the CloudFront Origin Access Control configuration and S3 bucket policy. Ensure that the intended CloudFront distribution has the required read permission.

## 5. Incident Management Process

Detection
    |
    v
Initial Investigation
    |
    v
Log and Metric Analysis
    |
    v
Root Cause Identification
    |
    v
Corrective Action
    |
    v
Service Verification
    |
    v
Incident Documentation

## 6. Sample Incident Report

Incident ID: GOS-001

Application: GoSimplify360

Issue: HTTP 403 access errors

Severity: Medium (illustrative)

Status: Simulated investigation

Possible cause: Incorrect origin access permissions.

Investigation: Review CloudFront OAC and S3 bucket policy.

Recommended action: Correct the origin access configuration.

Validation: Confirm successful content delivery.

## 7. Implementation Status

Monitoring architecture and incident scenarios documented locally.

The incident is simulated using a hypothetical scenario. No live AWS monitoring or incident investigation has been performed.

## 9. Local Monitoring Implementation

A PowerShell-based monitoring script was developed to analyse sample website access logs.

### Features

- Reads CSV-based website access logs.
- Groups and identifies HTTP errors.
- Classifies errors into HIGH, MEDIUM, and LOW priorities.
- Generates alerts for HIGH-priority errors.
- Displays affected endpoints and error messages.

### Technologies Used

- PowerShell
- CSV log analysis
- HTTP status codes
- VS Code

### Validation Results

| HTTP Status | Priority | Result |
|---|---|---|
| 403 | MEDIUM | Detected |
| 404 | LOW | Detected |
| 500 | HIGH | Alert generated |

### Implementation Scope

The monitoring script runs locally using simulated log data. It is not connected to Amazon CloudWatch or a live AWS environment.
