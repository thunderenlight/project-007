# System Architecture — Career Opportunity Navigator

**Version:** v0.1
**Last Updated:** 2026-07-27

---

## Current Architecture — Phase 1 (File-Based)

The current system is entirely file-based. Claude Code loads these files as context and uses them to reason about opportunities, generate roadmaps, and recommend portfolio projects.

```
Claude Code Session
│
├── Reads AGENT.md              ← Mission, rules, evaluation framework, protocols
├── Reads MODEL_NOTES.md        ← Preferences, career history, anti-patterns
├── Reads skills/[skill].md     ← Step-by-step reasoning instructions
│
└── Outputs to:
    ├── opportunities/          ← Saved evaluations (one file per opportunity)
    ├── memory/                 ← Updated preferences and reflection logs
    ├── portfolio/              ← Project tracking
    └── LEARNING_ROADMAP.md     ← Progress updates
```

**Why start with files?**
This is how real AI systems are actually built by thoughtful engineers. You define the reasoning logic and memory schema first, then upgrade the storage layer when the use case is proven. Starting with a database before you understand your data is premature optimization. Starting with files lets you iterate on the *what* before spending time on the *how*.

This also teaches an important principle: the conceptual architecture — agent + memory + skills — is the same whether the storage is a markdown file, a JSON document, a DynamoDB table, or a vector store. The infrastructure changes. The pattern stays constant.

---

## Target Architecture — Phase 6 (Full-Stack Cloud)

```
User Browser
    │
    ▼
CloudFront (CDN + HTTPS)
    │
    ▼
S3 (React/Next.js static files — HTML, CSS, JavaScript)
    │
    [React App]
    ├── Opportunity Evaluation Form
    ├── Score Dashboard (radar + bar charts)
    ├── Learning Progress Tracker
    └── Portfolio Project Board
    │
    ▼
API Gateway (HTTPS + CORS + JWT authorization)
    │
    ├── POST /evaluate           ← Scores an opportunity
    ├── POST /learning-roadmap   ← Generates a learning plan
    ├── POST /portfolio          ← Recommends portfolio projects
    ├── POST /reflect            ← Processes weekly reflection
    ├── GET  /opportunities      ← Returns evaluation history
    └── GET  /preferences        ← Returns current MODEL_NOTES state
    │
    ▼
AWS Lambda (Python / FastAPI via Mangum adapter)
    │
    ├── opportunity_evaluator.py
    ├── roadmap_generator.py
    ├── portfolio_recommender.py
    └── preference_updater.py
    │
    ├── ──── Claude API (Anthropic SDK or AWS Bedrock)
    │
    ▼
DynamoDB
    ├── opportunities        ← All scored opportunities
    ├── preferences          ← Current MODEL_NOTES state
    ├── memory               ← Preference update log
    └── users                ← Cognito user profiles
    │
AWS Cognito
    └── User pools → JWT tokens → API Gateway authorizer

GitHub Actions CI/CD
    └── Push to main → Tests → CDK deploy to AWS
```

---

## Architecture Evolution by Phase

| Phase | Storage | Interface | AI Layer |
|-------|---------|-----------|---------|
| 1 — Now | Markdown files | Claude Code chat | Direct context loading |
| 3 | JSON files in git | Claude Code chat | Direct context loading |
| 4 | FastAPI locally | REST API (curl / Postman) | Anthropic Python SDK |
| 5 | FastAPI locally | React app (localhost) | Anthropic Python SDK |
| 6 | DynamoDB on AWS | React app on CloudFront | Claude via Bedrock |
| 7 | DynamoDB + vector store | React + multi-agent UI | LangGraph orchestration |

**Key insight:** The intelligence of the system does not change dramatically between phases. The reasoning in AGENT.md works identically whether it is loaded as Claude Code context or as a system prompt via the Claude API. What changes is how users interact with the system, how data is persisted, and how it scales.

---

## Architecture Decision Records (ADRs)

ADRs are a professional practice. They document *why* a decision was made, not just *what* was decided. This matters because decisions made in Month 1 are often questioned in Month 6 by people who were not in the room. The ADR is the answer.

---

### ADR-001: Why DynamoDB instead of PostgreSQL?

**Date:** 2026-07-27
**Status:** Accepted

**Decision:** Use DynamoDB for all structured data storage.

**Why:**
DynamoDB integrates natively with Lambda (no connection pool management required), costs zero at low scale (generous free tier), and scales automatically. PostgreSQL on RDS requires a running instance — always-on cost even when the application is idle.

**Tradeoff:**
DynamoDB is NoSQL — no complex joins or relational queries. For career data (opportunities are independent records, preferences are key-value pairs, reflections are append-only logs), this is perfectly acceptable.

**Revisit when:** Complex reporting across opportunities is needed. At that point, consider Athena over DynamoDB exports or a separate analytics layer.

---

### ADR-002: Why Claude (Anthropic) instead of OpenAI GPT?

**Date:** 2026-07-27
**Status:** Accepted

**Decision:** Claude as the primary AI provider.

**Why:**
Claude Code is the development environment. Claude's models perform consistently well on structured reasoning and evaluation tasks. AWS Bedrock supports Claude natively — simplifying production deployment.

**Tradeoff:**
Some tooling is more mature in the OpenAI ecosystem (Assistants API, function calling examples). Mitigated by using LangChain abstractions when interoperability is needed.

**Revisit when:** A specific capability (e.g., vision, real-time web search) is materially better in another model for a specific feature.

---

### ADR-003: Why React + TypeScript instead of Vue, Svelte, or plain JavaScript?

**Date:** 2026-07-27
**Status:** Accepted

**Decision:** React with TypeScript.

**Why:**
React is the dominant front-end framework in enterprise AI product UIs. TypeScript is required in professional codebases for maintainability at scale. This choice maximizes alignment with target job descriptions.

**Tradeoff:**
Steeper initial learning curve than Vue.js or Svelte. Worth it — Vue and Svelte appear in target role descriptions far less frequently than React. Learning React is also learning employability.

---

### ADR-004: Why FastAPI instead of Express.js?

**Date:** 2026-07-27
**Status:** Accepted

**Decision:** FastAPI with Python for the back end.

**Why:**
Python is the language of AI. Using Python for both the API and the AI logic means one language, one ecosystem, one mental model. FastAPI auto-generates Swagger documentation, which is useful for iteration and learning.

**Tradeoff:**
A JavaScript full-stack (React + Node/Express) would use one language end-to-end. The Python/JavaScript split is the standard real-world pattern for AI products. It is not a weakness — it is the industry norm.

---

### ADR-005: Why file-based architecture in Phase 1?

**Date:** 2026-07-27
**Status:** Accepted

**Decision:** Start with markdown files, not a database or API.

**Why:**
Evolutionary architecture — start simple, evolve when the need is proven. You learn what fields matter, what schema is needed, and what queries you will want. Then you design the database to fit the real use case rather than an imagined one.

**Pattern name:** Walking skeleton — build the thinnest possible end-to-end slice of the system first. Fatten it over time.

---

## Data Schema

### Opportunity Record (Phase 3+ JSON format)

```json
{
  "id": "uuid-v4",
  "title": "AWS AI Product Manager",
  "date": "2026-07-27",
  "source": "Recruiter | Internal | Job Board | Direct",
  "description": "raw description text",
  "scores": {
    "cloud_exposure": 9,
    "ai_exposure": 9,
    "react_frontend": 7,
    "engineering_proximity": 9,
    "product_ownership": 9,
    "learning_potential": 9,
    "marketability": 10,
    "portfolio_value": 7,
    "leadership_opportunity": 8,
    "compensation_potential": 9,
    "total": 86
  },
  "recommendation": "Pursue Aggressively",
  "decision": "Pursuing | Passing | Pending",
  "strengths": ["string1", "string2", "string3"],
  "risks": ["string1", "string2", "string3"],
  "skill_gaps": ["string1", "string2"],
  "portfolio_project": "AI Document Intelligence Demo",
  "notes": "string"
}
```

### Preference Update Record

```json
{
  "id": "uuid-v4",
  "date": "2026-07-27",
  "source": "weekly_reflection | opportunity_evaluation | manual",
  "observation": "Enjoyed API integration work more than governance review",
  "category": "energizer | frustration | skill_interest | anti_pattern | role_preference",
  "strength": "medium | strong | definitive",
  "impact": "Reinforces engineering proximity as a top priority"
}
```
