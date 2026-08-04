# aws/

## Purpose
AWS-specific learning notes, architecture patterns, service references, and hands-on exercises.

## Why This Exists
AWS is a top-priority skill. Dedicated space keeps AWS learning organized as knowledge accumulates across months of study and real project work.

## Industry Parallel
Cloud engineers maintain internal runbooks. Platform teams keep architecture pattern libraries. This is your personal AWS reference library — built incrementally as you learn.

## Recommended Structure

```
aws/
├── services/
│   ├── lambda.md          ← Invocation models, cold starts, limits, patterns
│   ├── api-gateway.md     ← Routes, CORS, authorizers, integration types
│   ├── dynamodb.md        ← Data modeling, query patterns, single-table design
│   ├── s3.md              ← Buckets, policies, static hosting, presigned URLs
│   ├── cloudfront.md      ← Distributions, origins, cache behaviors
│   ├── cognito.md         ← User pools, identity pools, JWT flow
│   └── eventbridge.md     ← Event patterns, rules, targets
├── architecture-patterns/
│   ├── serverless-api.md  ← Lambda + API Gateway + DynamoDB pattern
│   └── spa-deployment.md  ← React + S3 + CloudFront pattern
├── exercises/
│   ├── 01-first-lambda.md ← Step-by-step: deploy a Hello World Lambda
│   ├── 02-api-gateway.md  ← Step-by-step: expose Lambda via API Gateway
│   └── 03-dynamodb.md     ← Step-by-step: read and write to DynamoDB
├── cdk/
│   └── patterns.md        ← Common CDK constructs and deployment patterns
└── certification/
    └── solutions-architect-notes.md
```

## Start Here
When you begin Track 4 (AWS) from LEARNING_ROADMAP.md, create a `services/lambda.md` file and document everything you learn about Lambda in it. Each service gets its own file. After 3 months, you will have a personal AWS reference you understand deeply — not just copied from docs.

## Key Mental Model for AWS Serverless
The core pattern for this project:

```
React App (S3 + CloudFront)
    → API Gateway (HTTPS + auth)
    → Lambda (business logic)
    → DynamoDB (data)
    → Claude API (AI reasoning)
```

Everything in this project flows through this pattern.
