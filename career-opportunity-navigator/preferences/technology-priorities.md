# Technology Priorities

Priority order for learning investments and opportunity evaluation. Updated based on market signals and personal progress.

**Last Updated:** 2026-07-27

---

## Tier 1 — Learn First (Highest Market Impact)

### React + TypeScript
**Why:** Dominant front-end framework for AI product dashboards and enterprise SaaS. TypeScript is the standard in every serious React codebase. React skills appear in 80%+ of AI PM and technical product role descriptions at companies building AI.

**Target competency:** Build a multi-page React + TypeScript application that fetches from a REST API and displays structured data with interactive charts.

### AWS Serverless (Lambda + API Gateway + DynamoDB)
**Why:** Most AI products in enterprise run on AWS serverless. It reduces operational overhead and is the entry point for cloud AI engineers. Lambda + API Gateway + DynamoDB appears as the core pattern in nearly every AWS-hosted AI product.

**Target competency:** Deploy a FastAPI endpoint as a Lambda function secured behind API Gateway, reading and writing to DynamoDB.

---

## Tier 2 — Learn in Parallel (High Market Impact)

### Python + FastAPI
**Why:** Python is the language of AI. FastAPI is the fastest path from idea to deployed API. Every major AI framework — LangChain, LangGraph, Anthropic SDK — is Python-first.

**Target competency:** Build and run a FastAPI endpoint locally that calls the Claude API and returns structured JSON. Deploy it as a Lambda function.

### Git + GitHub + GitHub Actions
**Why:** Every engineering team uses Git. GitHub is your portfolio and your proof of work. GitHub Actions is CI/CD — the standard for automated testing and deployment.

**Target competency:** Push to GitHub daily, create branches and pull requests, run a GitHub Actions workflow that tests and deploys on merge to main.

---

## Tier 3 — Build Toward (Medium-Term)

### Claude Code + Agent Architecture
**Why:** Claude Code is the emerging standard for AI-assisted development. Agent architecture knowledge differentiates an AI PM who can specify from one who can design and evaluate. MCP is the emerging standard for agent tool integration.

**Target competency:** Build and deploy an agent with persistent memory and at least 3 invokable skills. Understand how to evaluate agent output quality.

### LLMOps + Evaluation
**Why:** Production AI fails most often due to lack of evaluation. AI PMs who understand eval frameworks — precision, recall, faithfulness, coherence — are dramatically more effective at guiding model improvements than those who rely on vibes.

**Target competency:** Design and run an evaluation suite for a prompt or agent. Use LangSmith or Langfuse to trace and analyze outputs.

---

## Tier 4 — Advanced (Long-Term)

### LangGraph
**Why:** Production multi-step agent workflows with complex branching and stateful execution. Required for senior AI engineering roles and advanced AI Platform Product positions.

### RAG Architecture
**Why:** Most enterprise AI applications are RAG-based (retrieval-augmented generation). Understanding chunking, embedding, retrieval, and reranking is required for AI Platform Product roles and any role owning a knowledge AI system.

### Knowledge Graphs + Neo4j
**Why:** Emerging for structured knowledge AI and GraphRAG. Not yet mainstream — build toward this in Year 2 when the market for it matures.

---

## Technologies to Monitor (Not Yet Priority)

- Rust — emerging in AI inference tooling, not relevant for this career path yet
- Kubernetes — useful if moving toward MLOps engineering or platform infrastructure
- GraphQL — useful for complex API scenarios, but REST is sufficient for now
- Web3 — not relevant to target roles

---

## De-Prioritized (Maintain but Do Not Invest In)

- Power BI — already strong; maintain for current roles, no further investment
- SharePoint — functional; no further investment needed
- Tableau — not on target stack for AI product roles
- ServiceNow — not relevant to target trajectory
