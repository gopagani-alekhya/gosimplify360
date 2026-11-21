
# GoSimplify360 – AWS Architecture Diagram

## 1. Architecture Overview

```mermaid
flowchart TD
    A["Developer Workstation"]
    B["GitHub Repository"]
    C["CI/CD Build and Validation"]
    D["Amazon S3 - Private Bucket"]
    E["Amazon CloudFront - CDN"]
    F["End Users"]

    A --> B
    B --> C
    C -->|Deploy build files| D
    F -->|HTTPS Request| E
    E -->|Fetch website files| D

    G["AWS IAM - Access Control"]
    H["Amazon CloudWatch - Monitoring"]

    G -.->|Permissions| C
    G -.->|Permissions| D
    H -.->|Monitoring| D
    H -.->|Monitoring| E
```

## 2. Component Explanation

### Developer Workstation
Develops and tests the React application locally.

### GitHub Repository
Stores application source code and version history.

### CI/CD Pipeline
Builds and validates the application before deployment.

### Amazon S3
Stores production build files in a private bucket.

### Amazon CloudFront
Delivers website content to users through a CDN.

### AWS IAM
Controls access to AWS services and resources.

### Amazon CloudWatch
Provides monitoring and operational visibility.

## 3. Security Design

- Keep the S3 bucket private.
- Use CloudFront Origin Access Control (OAC).
- Apply least-privilege IAM permissions.
- Use HTTPS for website traffic.
- Never store AWS credentials in source code.

## 4. Implementation Status

Architecture designed and documented locally.

No AWS infrastructure has been deployed.
