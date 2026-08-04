# Learning Roadmap — Kilima Glenn

**Goal:** Cloud + AI + Product Leader
**Starting Point:** Business Architecture / Analytics / AI Governance
**Last Updated:** 2026-07-27
**Commitment:** ~10 hours/week (evenings + weekends)

---

## Philosophy

You already have the hardest skills to learn: business judgment, stakeholder communication, product thinking, and AI strategy. Those take years. What you are adding is technical depth — and that takes months, not years, when you already know the domain.

**Rule 1:** Every learning module connects to building this agent or a portfolio project.
**Rule 2:** Breadth before depth in the first 3 months. You need to know what exists before you deep-dive.
**Rule 3:** Ship something every month, no matter how small.
**Rule 4:** Your GitHub profile is your proof of work — start it in Week 1.

---

## Your Starting Advantages

You already have:
- ✅ SQL — foundation for all data work, transfers directly
- ✅ Power BI — data modeling and visualization instincts
- ✅ REST API Concepts — you understand what APIs do
- ✅ AWS Fundamentals — you are not starting from zero
- ✅ AI Enablement experience — you understand what AI products do and who they serve

You are filling specific gaps, not starting over.

---

## 8-Track Overview

| Track | Timeline | Priority | Portfolio Outcome |
|-------|----------|----------|-------------------|
| Track 1: Developer Foundations | Month 1 | Critical | GitHub profile + first repo |
| Track 2: React + TypeScript | Month 2–3 | Critical | Opportunity evaluation UI |
| Track 3: Python + FastAPI | Month 3–4 | High | Scoring API endpoint |
| Track 4: AWS Cloud (Deeper) | Month 4–5 | High | Deployed API on Lambda |
| Track 5: Claude Code + Agents | Month 5–6 | High | Full navigator agent with memory |
| Track 6: Full-Stack Integration | Month 6–8 | High | Deployed full-stack app |
| Track 7: LLMOps + RAG | Month 8–10 | Medium | RAG-enabled agent |
| Track 8: Advanced Agent Systems | Month 10–12 | Medium | Multi-agent system |

---

## Track 1 — Developer Foundations
**Timeline:** Month 1
**Daily time:** 45–60 minutes
**Why first:** These are the tools every engineer uses every day. Without them, everything else is harder. Git alone unlocks the ability to work on a team, show your work, and build a portfolio.

---

### Module 1.1: Git + GitHub (Week 1–2)

**What you will learn:**
- Why version control exists — think of it as "undo" for entire projects, across teams
- `git init` — start tracking a folder
- `git add` + `git commit` — save a snapshot of your work with a message
- `git push` — upload to GitHub
- Branches — why teams work in parallel without breaking each other
- Pull requests — the mechanism for code review

**Why this matters for target roles:**
Every AI PM, AI Platform Lead, and technical delivery role expects Git. Recruiters at tech companies look at your GitHub profile. It is your proof of work. It is also where this project lives.

**Exercises:**
1. Create a GitHub account (if not already done)
2. Create a repository called `career-opportunity-navigator`
3. Push this entire project to GitHub as your first commit
4. Create a branch called `feature/first-reflection`, add your first weekly reflection, merge it back to main

**Portfolio outcome:** A clean GitHub profile with your first real repository — this one.

**Resources:**
- Pro Git Book — free at git-scm.com/book, Chapters 1–3 only to start
- GitHub's "Hello World" guide at docs.github.com

---

### Module 1.2: Command Line / Terminal (Week 1–2, alongside Git)

**What you will learn:**
- `cd` — change directory
- `ls` — list files in a directory
- `pwd` — where am I in the file system?
- `mkdir` — create a folder
- `touch` — create a file
- Running scripts: `python script.py`, `npm run dev`

**Why this matters:**
Every cloud tool, AI framework, and deployment process runs through the terminal. AWS CLI, Git, Python, Node — all terminal-first. Being comfortable here removes friction from everything else.

**Exercise:** Navigate your entire computer using only the terminal for 30 minutes. No Finder, no Explorer.

---

### Module 1.3: Python Basics (Week 3–4)

**What you will learn:**
- Variables, strings, numbers, booleans
- Lists and dictionaries (these become JSON — the data format of the internet)
- Functions (reusable blocks of logic)
- If/else and loops
- Reading and writing files
- Installing packages with `pip`

**Why Python first, not JavaScript?**
Python is the dominant language in AI and ML. FastAPI, LangChain, LangGraph, the Anthropic SDK — all Python. Python also reads more like English, which makes it more approachable.

**Why dictionaries matter — they become your data:**
```python
opportunity = {
    "title": "AWS AI PM",
    "cloud_score": 9,
    "ai_score": 9,
    "total": 86,
    "recommendation": "Pursue Aggressively"
}
```
This is exactly the data structure you will use when building the scoring API in Track 3.

**Exercises:**
1. Write a Python script that prints your name, current role, and 3 learning goals
2. Write a function that takes a list of 10 scores (0–10) and returns the total and recommendation category
3. Write a script that reads `MODEL_NOTES.md` and prints the Career Mission section

**Resources:**
- "Automate the Boring Stuff with Python" — free at automatetheboringstuff.com, Chapters 1–6
- Python.org official tutorial, first 5 sections

---

## Track 2 — React + TypeScript
**Timeline:** Month 2–3
**Daily time:** 60–90 minutes
**Why:** React is the dominant front-end framework for AI product dashboards and enterprise SaaS. TypeScript is standard in professional engineering teams.

---

### Module 2.1: JavaScript Fundamentals (Week 1–2)

**What you will learn:**
- Variables: `let` (can change) and `const` (cannot change)
- Functions and arrow functions: `const score = (x) => x * 2`
- Arrays and objects (same concept as Python lists and dicts)
- Destructuring: `const { title, score } = opportunity`
- Spread operator: `[...items, newItem]`
- `async/await` — how JavaScript waits for API responses without freezing

**Why JavaScript before React?**
React IS JavaScript with added structure. Skipping JS fundamentals means React feels like magic — and magic breaks without warning. Understanding JS means React makes sense.

**Resource:** javascript.info — the best free JavaScript reference, Chapters 1–6

---

### Module 2.2: React Core (Week 3–4)

**What you will learn:**
- Components — the building blocks of React UIs (reusable, composable)
- JSX — writing HTML-like syntax inside JavaScript
- Props — passing data into a component (inputs)
- `useState` — making a component remember and update data (internal state)
- `useEffect` — running code when data changes (like loading from an API)
- Event handling — what happens when a user clicks a button or submits a form

**Mental model for Product Managers:**
Think of components like user stories. Each component has:
- **Inputs** (props) — what data it receives from the parent
- **State** — what it manages internally
- **Output** (rendered UI) — what the user sees

**First React project:** An Opportunity Score Card component that takes 10 scores as props and displays them in a table with color-coded cells (green for 8+, yellow for 5–7, red for below 5).

**Resource:** react.dev — the official React docs (redesigned in 2023, excellent for beginners)

---

### Module 2.3: TypeScript Basics (Week 5–6)

**What you will learn:**
- What TypeScript is — JavaScript with type annotations that catch bugs before they run
- Type annotations: `const score: number = 9`
- Interfaces — defining the shape of your data

```typescript
interface Opportunity {
  title: string;
  cloudScore: number;
  aiScore: number;
  total: number;
  recommendation: "Pursue Aggressively" | "Pursue" | "Consider" | "Low Priority" | "Avoid";
}
```

**Why TypeScript matters for target roles:**
Every serious React codebase in enterprise uses TypeScript. It signals professional-grade engineering. It also catches the exact bugs that cause AI product demos to fail in front of clients.

---

### Module 2.4: React Patterns (Week 7–8)

**What you will learn:**
- Fetching data from an API using `fetch` and handling loading/error states
- React Router — building multi-page apps without full page reloads
- Component composition — building complex UIs from simple pieces
- Lifting state — how parent and child components share data

**Portfolio project from this track:**
Build the Opportunity Evaluation Form — a React + TypeScript UI where you paste a description, submit it, and see 10 dimension scores displayed in a chart. This becomes Phase 5 of the project roadmap.

---

## Track 3 — Python + FastAPI
**Timeline:** Month 3–4
**Daily time:** 60 minutes
**Why:** FastAPI is the fastest path from idea to deployed API. Python is the language of AI. You will use both together for every back-end feature of this project.

---

### Module 3.1: Python Intermediate (Building on Track 1)

**What you will learn:**
- Classes and objects — why they exist and when to use them
- Error handling with `try/except` — so one failure does not crash everything
- Working with JSON: `json.loads()` (text to dict) and `json.dumps()` (dict to text)
- HTTP requests with the `requests` library: `requests.post(url, json=data)`
- Environment variables: `os.environ.get("ANTHROPIC_API_KEY")`
- `.env` files and `python-dotenv` — storing secrets without committing them to GitHub

---

### Module 3.2: FastAPI

**What you will learn:**
- What FastAPI is — a Python framework for building HTTP APIs (like a restaurant kitchen that accepts orders and returns food)
- Creating your first route: `@app.post("/evaluate")`
- Pydantic models — defining what valid input looks like (FastAPI rejects invalid inputs automatically)
- Running a local server: `uvicorn main:app --reload`
- Swagger UI — FastAPI generates interactive documentation at `/docs` automatically
- Calling the Claude API from your FastAPI endpoint

**First API endpoint you will build:**
```python
@app.post("/evaluate")
async def evaluate_opportunity(request: EvaluationRequest) -> EvaluationResponse:
    # Call Claude API with opportunity description
    # Return structured scores
    pass
```

**Why this is portfolio gold:**
A working API endpoint that calls Claude and returns structured JSON is exactly what companies need and rarely have people who can build end-to-end. This one endpoint tells a complete story in an interview.

**Resource:** fastapi.tiangolo.com — start with "First Steps," then "Request Body," then "Path Parameters"

---

## Track 4 — AWS Cloud (Deeper)
**Timeline:** Month 4–5
**Daily time:** 60–90 minutes
**Why:** AWS is the dominant enterprise cloud platform. Hands-on experience beats certifications alone for credibility.

---

### Module 4.1: Core Services

**Lambda (Serverless Functions)**
Run code without managing a server. You upload a Python function; AWS runs it when triggered.
Exercise: Deploy your FastAPI `/evaluate` endpoint as a Lambda function using the Mangum adapter.

**API Gateway**
The front door to your Lambda functions. Converts HTTP requests into Lambda invocations.
Exercise: Create an API Gateway endpoint that triggers your Lambda function.

**DynamoDB (NoSQL Database)**
Store structured data without managing a database server.
Exercise: Save every opportunity evaluation to a DynamoDB table with `id`, `title`, `scores`, and `date`.

**S3 (Object Storage)**
Store files — HTML, CSS, JavaScript, images, PDFs.
Exercise: Deploy your React app as static files on S3.

**CloudFront (CDN)**
Serve your S3 files globally with HTTPS and low latency.
Exercise: Put CloudFront in front of your S3 React app.

**Cognito (Authentication)**
Managed user login without building auth from scratch.
Exercise: Add a login screen to your React app using the Cognito hosted UI.

---

### Module 4.2: AWS CDK (Infrastructure as Code)

**What it is:** Define your entire AWS architecture as TypeScript code. Deploy with `cdk deploy`.

**Why it matters:**
Click-ops (clicking through the AWS console) does not scale and cannot be versioned. Every serious cloud team uses Infrastructure as Code. CDK means your infrastructure lives in Git — versioned, reviewable, repeatable.

**Exercise:** Write a CDK stack that creates your Lambda, API Gateway, and DynamoDB table. Deploy it in one command.

---

### Module 4.3: Certification (Optional but Valuable)

**AWS Cloud Practitioner (CCP):**
2–3 weeks of study. Proves cloud literacy. Appears in many job descriptions as a minimum expectation for cloud-adjacent roles.

**AWS Solutions Architect Associate (SAA-C03):**
2–3 months. Proves architecture skills. High market value for Cloud AI Product and Solutions Architect roles.

**Recommendation:** Target CCP in Month 4, begin SAA-C03 prep in Month 5–6.

---

## Track 5 — Claude Code + Agent Architecture
**Timeline:** Month 5–6
**Daily time:** 45–60 minutes
**Why:** Claude Code is your primary AI development tool. Understanding agent architecture is core to every Tier 1 target role.

---

### Module 5.1: Claude Code Deep Dive

**Topics:**
- How context windows work — why what you give Claude, and in what order, changes the output
- Skills — .md files as invokable instructions (exactly what you built in this project)
- Memory architectures — files → JSON → databases → vector stores (the evolution path)
- MCP (Model Context Protocol) — giving Claude access to external tools, files, and APIs
- Hooks — automating behaviors in Claude Code
- Multi-agent coordination in Claude Code

---

### Module 5.2: Agent Architecture Patterns

**ReAct (Reason + Act):**
The agent reasons about what to do, takes an action, observes the result, reasons again. This is what Claude does when it uses tools.

**Memory Types:**
- In-context: what is in the current conversation (fast, temporary)
- External/file: persisted in files or databases (slower, permanent)
- Semantic/vector: retrieved by meaning, not exact match (Phase 7)

**Multi-Agent Orchestration:**
One orchestrator agent breaks down tasks and delegates to specialist agents. Each specialist does one thing well. This is the architecture for Phase 7 of this project.

---

### Module 5.3: LangChain + LangGraph (Introduction)

**LangChain:** Python framework for chaining AI operations — prompt → model → parse → next step.

**LangGraph:** Framework for stateful, multi-step agent workflows with conditional routing. Think of a flowchart where some nodes are LLM calls.

**When to use which:**
- Simple linear pipelines: LangChain
- Complex multi-step workflows with branching and state: LangGraph
- Maximum control: Anthropic Python SDK directly

---

## Track 6 — Full-Stack Integration
**Timeline:** Month 6–8
**Daily time:** 90 minutes
**Why:** This is where everything connects — React front end + FastAPI back end + AWS deployment = a real, living application.

**Topics:**
- CORS — why the browser blocks cross-origin requests and how to configure it in FastAPI
- Authentication flow — how JWTs move from Cognito through API Gateway to React
- Error handling — what happens when the API fails and the UI needs to respond gracefully
- Docker — packaging the FastAPI app so it runs identically anywhere
- GitHub Actions — automated test and deploy on every push to main

**Portfolio outcome:** A live URL you can share with any recruiter — the career navigator app deployed on AWS.

---

## Track 7 — LLMOps + RAG
**Timeline:** Month 8–10
**Daily time:** 60 minutes

**Topics:**
- Evaluation frameworks — how to know if your AI is working (not just feeling like it is)
- Prompt testing and versioning — treating prompts as code, with tests and history
- Observability — LangSmith or Langfuse for tracing AI calls and debugging
- RAG architecture — giving AI access to your documents via retrieval
- Vector databases — Pinecone, Chroma, pgvector for semantic search
- Chunking and embedding strategies — how you split and index documents matters

**Portfolio project:** Add RAG to the career navigator so the agent retrieves from your `knowledge/` directory when evaluating opportunities.

---

## Track 8 — Advanced Agent Systems
**Timeline:** Month 10–12

**Topics:**
- LangGraph for production multi-step agent workflows
- Agent evaluation and automated test suites
- Knowledge graphs with Neo4j + GraphRAG
- Cost optimization for LLM production systems
- Production agent deployment and monitoring patterns

---

## Weekly Learning Template

**Monday–Friday:** One module segment per day, 45–60 minutes
**Saturday:** Build something with what you learned, 2–3 hours
**Sunday:** Review notes + update progress tracker in this file

---

## Progress Tracker

| Track | Status | Started | Completed | Portfolio Item |
|-------|--------|---------|-----------|----------------|
| Track 1: Developer Foundations | ⬜ | — | — | GitHub profile + repo |
| Track 2: React + TypeScript | ⬜ | — | — | Evaluation UI |
| Track 3: Python + FastAPI | ⬜ | — | — | `/evaluate` API endpoint |
| Track 4: AWS (Deeper) | ⬜ | — | — | Deployed Lambda + DynamoDB |
| Track 5: Claude Code + Agents | ⬜ | — | — | Full navigator agent |
| Track 6: Full-Stack Integration | ⬜ | — | — | Live deployed app |
| Track 7: LLMOps + RAG | ⬜ | — | — | RAG-enabled agent |
| Track 8: Advanced Agents | ⬜ | — | — | Multi-agent system |
