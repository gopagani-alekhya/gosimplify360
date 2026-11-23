
# AWS Cost Optimization Plan – GoSimplify360

**Project:** GoSimplify360  
**Author:** Alekhya Gopagani  
**Target Role:** AWS Cloud Engineer  
**Document Type:** Cost Optimization Strategy

---

## 1. Objective

The objective of this document is to define a cost-conscious AWS architecture for GoSimplify360.

The plan focuses on resource efficiency, cost visibility, budget monitoring, and avoiding unnecessary cloud expenditure.

## 2. Proposed AWS Architecture

The proposed website architecture includes:

- Amazon S3 for static website asset storage.
- Amazon CloudFront for content delivery.
- AWS IAM for access control.
- Amazon CloudWatch for monitoring.
- AWS CloudTrail for account activity auditing.

This architecture is a design proposal. No AWS resources have been deployed.

## 3. AWS Cost Management Services

| AWS Service | Purpose |
|---|---|
| AWS Budgets | Create spending budgets and alerts |
| AWS Cost Explorer | Analyze historical spending |
| AWS Pricing Calculator | Estimate service costs |
| Cost and Usage Reports | Access detailed cost and usage information |

## 4. Cost Optimization Strategies

### Amazon S3

- Store only required application assets.
- Review storage usage regularly.
- Select suitable storage classes based on access requirements.
- Remove obsolete objects when appropriate.

### Amazon CloudFront

- Configure suitable cache policies.
- Use appropriate cache TTL values.
- Reduce unnecessary origin requests.
- Review data transfer and request usage.

### IAM

- Apply least-privilege permissions.
- Avoid unnecessary identities and credentials.
- Review access policies periodically.

### Amazon CloudWatch

- Monitor only relevant metrics and logs.
- Define useful retention periods.
- Avoid unnecessary high-volume logging.
- Review monitoring and alerting costs.

## 5. Budget Alert Strategy

Example of a hypothetical monthly budget:

| Threshold | Example Amount | Notification |
|---|---:|---|
| 50% | $5 | Early warning |
| 80% | $8 | Cost warning |
| 100% | $10 | Budget threshold reached |

These values are illustrative only.

AWS Budgets alerts provide visibility. They do not automatically guarantee that resources will stop or spending will be prevented.

## 6. Cost Monitoring Process

1. Review AWS Budgets notifications.
2. Analyze service-level spending using Cost Explorer.
3. Identify unexpected cost increases.
4. Investigate resource usage.
5. Recommend optimization actions.
6. Document cost trends and findings.

## 7. Zero-Cost Local Development Strategy

For this portfolio project:

- Develop the React application locally.
- Use Vite for local builds.
- Use PowerShell for log analysis.
- Use Git and GitHub for version control.
- Use GitHub Actions for build validation.
- Avoid activating paid AWS infrastructure.
- Keep the existing live website and hosting configuration unchanged.

## 8. Cost Optimization Checklist

- [ ] Review resource requirements before deployment.
- [ ] Estimate costs before provisioning.
- [ ] Define budget thresholds.
- [ ] Monitor service-level spending.
- [ ] Review storage usage.
- [ ] Optimize caching policies.
- [ ] Remove unused resources through approved procedures.
- [ ] Review logging retention.
- [ ] Document cost optimization findings.

## 9. Implementation Status

| Component | Status |
|---|---|
| Cost optimization strategy | Documented |
| Budget alert design | Documented |
| AWS Pricing Calculator study | Learning |
| AWS Budgets configuration | Not configured |
| Cost Explorer analysis | Not performed |
| AWS infrastructure deployment | Not performed |

## 10. Conclusion

Cost optimization is an important responsibility of an AWS Cloud Engineer.

A well-designed cost management strategy improves resource efficiency, provides spending visibility, and reduces unnecessary expenditure.

This document represents an architecture and learning exercise, not a record of live AWS cost-management operations.

---

**Project:** GoSimplify360 – AWS Cloud Engineering Portfolio  
**Author:** Alekhya Gopagani
