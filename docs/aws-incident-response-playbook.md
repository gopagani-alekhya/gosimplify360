
# AWS Incident Response Playbook – GoSimplify360

**Project:** GoSimplify360  
**Author:** Alekhya Gopagani  
**Environment:** Local simulation and proposed AWS architecture  
**Document Type:** Incident Response Playbook

---

## 1. Purpose

This playbook documents a structured approach to detecting, investigating, responding to, and recovering from common cloud and application incidents.

It covers three practice scenarios using simulated evidence.

## 2. Incident Response Lifecycle

1. Detection – Identify an alert or unusual activity.
2. Investigation – Review logs and gather evidence.
3. Containment – Limit potential impact using approved procedures.
4. Recovery – Restore normal operations.
5. Documentation – Record findings and preventive actions.

---

## 3. Scenario One – HTTP 500 Application Errors

### Incident Description

The application monitoring script detects repeated HTTP 500 Internal Server Errors on an application endpoint.

### Detection

- Review application monitoring alerts.
- Identify HTTP 500 responses.
- Check error frequency and affected endpoints.

### Investigation

- Review application logs around the incident timestamp.
- Identify affected endpoints.
- Examine error messages and available diagnostic information.
- Check recent application changes.

### Response

- Notify the responsible application support team.
- Follow the approved incident escalation process.
- Avoid making unverified production changes.

### Recovery

- Apply an approved application fix.
- Validate the affected endpoint.
- Monitor subsequent requests.

### Preventive Actions

- Improve application error handling.
- Configure suitable monitoring metrics.
- Establish alert thresholds.
- Maintain application troubleshooting documentation.

---

## 4. Scenario Two – Unexpected IAM Policy Change

### Incident Description

An unexpected IAM policy modification is identified during a security audit.

### Detection

- Review AWS CloudTrail events.
- Identify unexpected IAM API activity.
- Check relevant security notifications.

### Investigation

Review relevant CloudTrail event details:

- eventTime
- eventName
- userIdentity
- sourceIPAddress
- requestParameters
- errorCode

Determine which identity performed the action and what permissions changed.

### Response

- Escalate the finding to the authorized security or cloud administration team.
- Assess whether excessive permissions were introduced.
- Follow the organization's approved access-management procedures.
- Preserve relevant audit evidence.

### Recovery

- Have an authorized administrator restore the approved IAM permissions if necessary.
- Validate the resulting policy.
- Review related access activity.

### Preventive Actions

- Apply least-privilege permissions.
- Review IAM policies regularly.
- Monitor sensitive IAM changes.
- Maintain an audit trail.

---

## 5. Scenario Three – Suspicious Access Attempts

### Incident Description

Monitoring identifies repeated unsuccessful access attempts followed by unusual successful access activity.

### Detection

- Review authentication logs.
- Identify unusual login patterns.
- Examine relevant security alerts.

### Investigation

- Establish the event timeline.
- Identify the affected account.
- Review available source IP and authentication information.
- Check for unusual account or permission changes.
- Correlate relevant audit events.

### Response

- Escalate the activity to the authorized security team.
- Follow approved account-protection procedures.
- Preserve relevant logs.
- Avoid assuming that failed attempts alone prove account compromise.

### Recovery

- Verify account security with the authorized administrator.
- Restore approved access if required.
- Monitor for recurring suspicious activity.

### Preventive Actions

- Enforce appropriate authentication controls.
- Review account permissions.
- Monitor unusual login activity.
- Maintain an incident escalation process.

---

## 6. AWS Services Used in the Proposed Architecture

| AWS Service | Purpose |
|---|---|
| Amazon CloudWatch | Metrics, logs and alarms |
| AWS CloudTrail | AWS API activity auditing |
| AWS IAM | Identity and access management |
| Amazon SNS | Incident notifications |
| Amazon S3 | Object storage |

These services are proposed components. No live AWS infrastructure has been deployed for this project.

---

## 7. Incident Documentation Template

For each incident, record:

| Field | Description |
|---|---|
| Incident ID | Unique incident reference |
| Detection Time | When the issue was identified |
| Severity | Assigned incident priority |
| Affected Component | Application or cloud service |
| Evidence | Relevant logs and events |
| Investigation | Findings and analysis |
| Actions Taken | Approved response steps |
| Recovery Status | Current service condition |
| Lessons Learned | Preventive improvements |

---

## 8. Project Implementation Status

| Component | Status |
|---|---|
| Local PowerShell log analyzer | Implemented and tested |
| Simulated application logs | Implemented |
| Incident investigation report | Documented |
| Incident response playbook | Documented |
| AWS CloudWatch integration | Not implemented |
| AWS CloudTrail integration | Not implemented |
| Live incident response | Not performed |

---

## 9. Key Learning Outcomes

- Understand cloud incident response fundamentals.
- Distinguish monitoring from auditing.
- Analyze application and audit log evidence.
- Apply IAM least-privilege principles.
- Document findings and corrective actions.
- Understand incident escalation and recovery workflows.
