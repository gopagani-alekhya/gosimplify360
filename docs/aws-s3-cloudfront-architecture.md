
# GoSimplify360 – AWS S3 and CloudFront Architecture

## 1. Project Objective

Design a secure and scalable static website hosting architecture for GoSimplify360 using Amazon S3 and Amazon CloudFront.

This is an AWS architecture design and learning project. No AWS infrastructure has been deployed.

## 2. Architecture Overview

The proposed architecture uses:

- Amazon S3 for storing static website files.
- Amazon CloudFront for global content delivery.
- Origin Access Control (OAC) for secure access between CloudFront and S3.
- AWS IAM and bucket policies for access management.
- HTTPS for secure communication.

## 3. Architecture Flow

Developer Workstation
        |
        v
GitHub Repository
        |
        v
GitHub Actions CI Pipeline
        |
        v
Production Build (Vite)
        |
        v
Private Amazon S3 Bucket
        |
        v
CloudFront Distribution
        |
        v
Website Visitors

Note: Automated CI validation is implemented using GitHub Actions. AWS deployment is not implemented.

## 4. Amazon S3 Storage Design

Amazon S3 is proposed as the storage service for website production files.

The Vite production build generates a dist directory containing:

- index.html
- JavaScript assets
- CSS assets
- Images and other static files

These files would be stored as S3 objects.

### S3 Security Configuration

- Enable S3 Block Public Access.
- Keep the bucket private.
- Apply least-privilege access policies.
- Use bucket policies to authorize CloudFront access.
- Enable encryption at rest.

## 5. Amazon CloudFront Design

CloudFront is proposed as the Content Delivery Network (CDN).

Benefits:

- Global content delivery.
- Reduced origin requests through caching.
- Improved website performance.
- HTTPS support.
- Integration with private S3 origins.

## 6. Origin Access Control (OAC)

OAC provides secure access from CloudFront to a private S3 origin.

Proposed configuration:

1. Create a CloudFront distribution.
2. Configure the S3 bucket as the origin.
3. Configure Origin Access Control.
4. Configure the S3 bucket policy to allow the intended CloudFront distribution.
5. Keep S3 Block Public Access enabled.

OAC prevents the need to make the S3 bucket publicly accessible.

## 7. CloudFront Caching

CloudFront caches frequently requested content at edge locations.

Important concepts:

- Cache Hit: Content is served from cache.
- Cache Miss: Content is retrieved from the origin.
- TTL: Defines how long an object can remain cached.
- Cache Invalidation: Removes selected cached objects when updated content must be retrieved.

For GoSimplify360, the HTML entry point and versioned static assets should have appropriate cache policies.

## 8. Security Considerations

- S3 bucket remains private.
- CloudFront uses OAC.
- IAM follows least-privilege principles.
- HTTPS is used for viewer connections.
- S3 encryption at rest is enabled.
- Access permissions are reviewed periodically.

## 9. Implementation and Validation Status

| Component | Status |
|---|---|
| React and Vite application | Implemented locally |
| Production build | Successfully tested locally |
| GitHub repository | Implemented |
| GitHub Actions CI | Implemented and tested |
| S3 architecture | Designed only |
| CloudFront architecture | Designed only |
| OAC configuration | Designed only |
| AWS deployment | Not performed |

## 10. Learning Outcomes

- Understanding Amazon S3 object storage.
- Understanding private bucket security.
- Understanding CloudFront CDN architecture.
- Understanding Origin Access Control.
- Understanding cache hits, misses, TTL and invalidation.
- Designing a secure static website hosting architecture.

## 11. Project Scope

This project demonstrates local application development, automated CI validation, AWS architecture design and security planning.

No live AWS resources have been created or deployed.
