# api/

## Purpose
API design patterns, FastAPI implementation notes, authentication references, and integration documentation.

## Why This Exists
APIs are the connective tissue of modern software. Everything in this project communicates through APIs — React talks to FastAPI, FastAPI talks to Claude, FastAPI talks to DynamoDB. Understanding API design well makes every integration faster and more reliable.

## Industry Parallel
Engineering teams maintain API documentation (OpenAPI specs, Postman collections, integration guides). This is your personal API reference — patterns you have used and validated, not just copied from a tutorial.

## Recommended Structure

```
api/
├── design/
│   ├── rest-patterns.md       ← HTTP methods, status codes, URL conventions
│   ├── openapi-spec.md        ← How to read and write OpenAPI specifications
│   └── error-handling.md      ← Consistent error response patterns
├── fastapi/
│   ├── getting-started.md     ← First endpoint, Pydantic models, running locally
│   ├── patterns.md            ← Common FastAPI patterns for this project
│   └── deployment.md          ← FastAPI + Mangum + Lambda deployment
├── authentication/
│   ├── api-keys.md            ← API key patterns (for Claude API, etc.)
│   ├── jwt.md                 ← How JWT tokens work end-to-end
│   └── cognito-flow.md        ← AWS Cognito → API Gateway → Lambda auth flow
└── integrations/
    ├── anthropic-claude.md    ← Claude API patterns, streaming, tool use
    ├── aws-bedrock.md         ← Bedrock integration for production
    └── github-api.md          ← GitHub API for portfolio tracking
```

## First API to Build
```
POST /evaluate
Request:  { "description": "job description text" }
Response: { "scores": {...}, "total": 86, "recommendation": "Pursue Aggressively" }
```

This single endpoint is the core of the Phase 4 deliverable. Everything else is built around it.

## Key REST Concepts for This Project

| Method | Use | Example |
|--------|-----|---------|
| GET | Retrieve data | GET /opportunities |
| POST | Create / process | POST /evaluate |
| PUT | Update entire record | PUT /opportunities/123 |
| PATCH | Update partial record | PATCH /preferences |
| DELETE | Remove | DELETE /opportunities/123 |

Status codes to know: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Server Error).
