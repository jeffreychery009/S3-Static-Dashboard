# Static Website Hosting on AWS

## Overview

This project is a **static website hosted on AWS**, built using a simple, reliable, and production-proven architecture.  
The website leverages **Amazon S3** for static asset storage, **Amazon CloudFront** as a global Content Delivery Network (CDN), and **Amazon Route 53** for DNS management.

This setup prioritizes performance, scalability, security, and cost efficiency—following traditional AWS best practices for static web hosting.

---

## Architecture

### AWS Services Used

- **Amazon S3**
  - Stores static assets (HTML, CSS, JavaScript, images)
  - Acts as the origin for CloudFront

- **Amazon CloudFront**
  - Distributes content globally with low latency
  - Caches assets at edge locations
  - Provides HTTPS and performance optimization

- **Amazon Route 53**
  - Manages DNS records
  - Routes user traffic to the CloudFront distribution

### High-Level Flow


---

## Features

- Global content delivery via CloudFront
- Highly durable and scalable storage using S3
- Custom domain support with Route 53
- Serverless architecture (no EC2 or backend servers)
- Secure access to S3 through CloudFront

---

## Prerequisites

- AWS account
- AWS CLI configured
- Registered domain (Route 53 or external registrar)
- Basic familiarity with AWS IAM and S3 permissions

---

## S3 Bucket Configuration

- Bucket used exclusively for static assets
- Public access **disabled**
- Access granted through CloudFront (OAC or OAI)
- Assets uploaded to the bucket root
- Example files:
  - `index.html`
  - `styles.css`
  - `main.js`

---

## CloudFront Configuration

- S3 bucket configured as the origin
- Default root object set (e.g. `index.html`)
- HTTPS enforced using an ACM certificate
- Caching enabled for static assets
- Connected to a custom domain

---

## Route 53 Configuration

- Hosted zone created for the domain
- Alias record pointing to the CloudFront distribution
- Supports root domain and subdomains

---

## Deployment Process

1. Build or update static files locally
2. Upload files to the S3 bucket
3. (Optional) Invalidate CloudFront cache
4. CloudFront propagates changes globally

---

## Local Development

This is a static website and does not require a backend server.

You can preview the site locally using any static file server:

```bash
npx serve .
