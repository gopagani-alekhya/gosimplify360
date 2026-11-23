# GoSimplify360

A responsive web application providing useful everyday tools, built with React and Vite.

## Project Overview

GoSimplify360 brings multiple productivity utilities together in one simple, accessible interface.

## Features

- Word Counter
- Age Calculator
- QR Code Generator
- Unit Converter
- Password Generator
- Percentage Calculator
- Responsive user interface

## Technology Stack

- React
- JavaScript
- Vite
- HTML5
- CSS3
- Git and GitHub

## Local Development

Prerequisites: Node.js and npm.

1. Clone the repository:

   ```bash
   git clone https://github.com/gopagani-alekhya/gosimplify360.git
   ```

2. Enter the project directory:

   ```bash
   cd gosimplify360
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Build the application:

   ```bash
   npm run build
   ```

## AWS Architecture and Cloud Learning

This project includes an AWS-ready architecture design covering:

- Amazon S3 for private static website storage
- Amazon CloudFront for content delivery
- Origin Access Control (OAC)
- IAM least-privilege access design
- CloudWatch monitoring concepts
- CloudTrail audit planning
- AWS cost optimization strategy
- Incident response documentation

These AWS components are documented as a proposed architecture. The application has not been deployed to AWS.

## CI/CD

A GitHub Actions workflow is configured to:

- Install project dependencies
- Build the React application
- Validate builds on pushes and pull requests to `main`

The CI workflow has been successfully executed.

## Local Monitoring Project

A PowerShell script analyzes fictional sample website access logs, classifies HTTP errors, and produces a monitoring summary.

## Project Status

- React application: locally built and tested
- GitHub Actions CI: implemented and tested
- AWS architecture: designed and documented
- AWS deployment: not yet performed

## Author

Alekhya Gopagani