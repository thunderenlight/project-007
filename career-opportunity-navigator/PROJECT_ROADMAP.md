# Project Roadmap — Career Opportunity Navigator

**Version:** v0.1
**Last Updated:** 2026-07-27

---

## Vision

A full-stack AI application that helps Kilima Glenn make data-driven career decisions.

**Final Architecture:**
- React/Next.js front end — visual evaluation UI and dashboards
- FastAPI back end — scoring engine and AI reasoning
- AWS deployment — Lambda + API Gateway + DynamoDB + S3 + CloudFront
- Claude AI reasoning — evaluation, roadmap generation, portfolio planning
- GitHub Actions CI/CD — automated test and deploy

**Why build it this way?**
Each phase teaches you the exact skills you need for target roles. You are not building an agent in order to use it — you are building it in order to become someone who builds things like this.

---

## Phase 1 — Foundation
**Status:** ✅ Complete
**Goal:** Establish the reasoning architecture and core memory files.

**What we built:**
The "brain and memory" of the agent — files that define mission, preferences, and reasoning rules.

**Deliverables:**
- [x] AGENT.md — agent constitution
- [x] MODEL_NOTES.md — persistent preferences and memory
- [x] README.md — project overview
- [x] PROJECT_ROADMAP.md — this file
- [x] LEARNING_ROADMAP.md — personalized learning plan
- [x] skills/ — core skill files (evaluator, roadmap generator, portfolio recommender)
- [x] templates/ — evaluation and reflection templates
- [x] preferences/hard-rules.md — non-negotiable decision rules
- [x] examples/ — sample evaluation (AWS AI PM, 86/100)
- [x] architecture/system-overview.md — current and target architecture with ADRs

**What you learn in Phase 1:**
- How AI agents are structured (constitution + memory + skills)
- Why context files matter in Claude Code
- Architecture Decision Records (ADRs) — how real teams document why, not just what
- Project structure for AI systems

---

## Phase 2 — Skills Engine
**Status:** 🔄 Next
**Goal:** Test and refine the evaluation and roadmap skills with real data.

**What we're building:**
The "real-world test" — running the evaluation skill on actual opportunities and improving the scoring rubric based on results.

**Deliverables:**
- [ ] Evaluate 5 real opportunities using `skills/opportunity-evaluator.md`
- [ ] Save each to `opportunities/` (one file per evaluation, named YYYY-MM-DD-[org]-[role].md)
- [ ] Identify where the scoring is too generous, too harsh, or missing signal
- [ ] Refine scoring rubrics based on feedback
- [ ] Add 3 complete worked examples to `examples/`
- [ ] Complete first weekly reflection using `templates/weekly-reflection.md`
- [ ] Push entire project to GitHub (Module 1.1 from LEARNING_ROADMAP.md)

**What you learn in Phase 2:**
- Prompt engineering (why phrasing changes results)
- How to evaluate AI output quality (is the recommendation actually accurate?)
- Iteration discipline — software improves through testing, not through planning
- Git and GitHub for the first real commit

---

## Phase 3 — Memory System
**Status:** ⬜ Planned
**Goal:** Add persistent structured memory that improves with each session.

**What we're building:**
The "long-term learning" — structured JSON files that accumulate preference data and improve recommendations over time.

**Deliverables:**
- [ ] `memory/preference-log.json` — timestamped preference updates
- [ ] `memory/opportunity-history.json` — all evaluations in structured format
- [ ] `memory/reflection-log.md` — weekly reflection history
- [ ] Pattern detection logic added to AGENT.md reflection protocol

**What you learn in Phase 3:**
- JSON data structure design
- Memory architectures for AI agents (files → database → vector store — the evolution path)
- How production AI products handle user preferences
- Schema design (what fields do you need to answer future questions?)

---

## Phase 4 — API Integration
**Status:** ⬜ Planned
**Goal:** Connect to external data sources and build your first real API.

**What we're building:**
The "data pipeline" — your first FastAPI endpoint, your first real HTTP call, and connections to external services.

**Deliverables:**
- [ ] Python virtual environment setup
- [ ] `POST /evaluate` FastAPI endpoint locally
- [ ] Anthropic Claude API integration (Python SDK)
- [ ] Swagger documentation working at `/docs`
- [ ] LinkedIn job data strategy documented in `api/`
- [ ] GitHub API for portfolio tracking

**What you learn in Phase 4:**
- FastAPI: routes, request/response models, Pydantic validation
- HTTP methods (GET, POST, PUT, DELETE) and status codes
- API authentication (API keys, Bearer tokens)
- How to call the Claude API programmatically (not via UI)
- Environment variables and secrets management (.env files)

---

## Phase 5 — React Front End
**Status:** ⬜ Planned
**Goal:** Build a visual interface for the agent.

**What we're building:**
The "cockpit" — a React + TypeScript dashboard for opportunity evaluation, learning tracking, and portfolio management.

**Deliverables:**
- [ ] React project setup (Vite + TypeScript + TailwindCSS)
- [ ] Opportunity evaluation form (input description → receive scored output)
- [ ] Score visualization (radar or bar chart for 10 dimensions)
- [ ] Learning progress tracker (checklist per track in LEARNING_ROADMAP)
- [ ] Portfolio project board (Kanban: Idea → In Progress → Complete)
- [ ] Connect React front end to FastAPI back end

**What you learn in Phase 5:**
- React components, props, state (useState, useEffect)
- TypeScript in React (interfaces, type annotations)
- Data visualization in React (chart libraries)
- Connecting a front end to a REST API (fetch, Axios, CORS)
- Component architecture patterns

---

## Phase 6 — AWS Deployment
**Status:** ⬜ Planned
**Goal:** Deploy the complete system to production on AWS.

**What we're building:**
The "production system" — moving from localhost to a real cloud application accessible anywhere.

**Deliverables:**
- [ ] DynamoDB tables (opportunities, preferences, memory, users)
- [ ] Lambda functions wrapping FastAPI endpoints (via Mangum adapter)
- [ ] API Gateway configuration (routes, CORS, authorizers)
- [ ] S3 + CloudFront for React app hosting
- [ ] Cognito for user authentication (login/signup)
- [ ] CDK stack — deploy the entire infrastructure with one command
- [ ] GitHub Actions CI/CD pipeline

**What you learn in Phase 6:**
- AWS serverless architecture (Lambda + API Gateway + DynamoDB)
- Infrastructure as Code with AWS CDK
- CI/CD pipelines with GitHub Actions
- Production security (IAM roles, HTTPS, Cognito JWT)
- How real companies deploy AI products

---

## Phase 7 — Multi-Agent Enhancement
**Status:** ⬜ Planned
**Goal:** Add specialized sub-agents for deeper tasks.

**What we're building:**
A "team of agents" — each specialist handling one type of task, coordinated by the main navigator.

**Deliverables:**
- [ ] Resume targeting agent — tailors resume language to each opportunity
- [ ] Interview prep agent — generates role-specific questions and answers
- [ ] Networking outreach agent — drafts LinkedIn messages
- [ ] Market intelligence agent — tracks AI job market trends

**What you learn in Phase 7:**
- Multi-agent architecture patterns
- LangGraph for stateful agent workflows
- Agent orchestration and handoffs
- Production multi-agent systems

---

## Milestone Tracker

| Milestone | Target | Status |
|-----------|--------|--------|
| Phase 1 complete | Week 1 | ✅ Done |
| First opportunity evaluated | Week 2 | ⬜ |
| 5 opportunities in history | Week 4 | ⬜ |
| First weekly reflection completed | End of Week 1 | ⬜ |
| Project pushed to GitHub | Week 2 | ⬜ |
| First Python script written | Month 2 | ⬜ |
| FastAPI endpoint running locally | Month 2 | ⬜ |
| React UI prototype | Month 3 | ⬜ |
| Deployed to AWS | Month 4–5 | ⬜ |
| Multi-agent version | Month 6–8 | ⬜ |
