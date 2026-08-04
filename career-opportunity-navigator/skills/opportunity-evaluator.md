# Skill: Opportunity Evaluator

## When to Invoke
Use this skill when the user provides a job description, project brief, role description, or any career opportunity for evaluation. Also invoke when the user mentions an opportunity by name with context ("6-month AWS project, mostly governance").

---

## Input
Any description of a project, role, or opportunity:
- Full job description (paste the whole thing)
- Project brief from a manager or staffing team
- Role title with context
- Summary from a recruiter conversation

If the description is vague, ask 2–3 clarifying questions before scoring.

---

## Evaluation Process

### Step 1 — Parse the Opportunity
Extract from the description:
- Role type (technical, product, governance, hybrid)
- Organization or client (if known)
- Primary responsibilities
- Technologies explicitly mentioned
- Duration (if applicable)
- Team context (who you would be working with)

### Step 2 — Score Each Dimension (0–10)

Score based only on what is described. If information is missing, default to 3 (unknown, assume low).

**Cloud Exposure**
- 9–10: Building and deploying on AWS daily (Lambda, API Gateway, DynamoDB, etc.)
- 6–8: Using AWS services with some hands-on work
- 3–5: Cloud mentioned but primarily adjacent or observational
- 0–2: No cloud work described

**AI Exposure**
- 9–10: Building or configuring AI systems (Bedrock, Claude, LLM integration, agent development)
- 6–8: Integrating or evaluating AI tools, prompt engineering at depth
- 3–5: AI governance, oversight, or enablement without implementation
- 0–2: No meaningful AI work

**React / Front-End Opportunity**
- 9–10: Writing React code or leading front-end development
- 6–8: Contributing to front-end decisions, reviewing front-end PRs
- 3–5: Specifying front-end requirements, working with the team
- 0–2: No front-end involvement

**Engineering Proximity**
- 9–10: On the engineering team — sprints, PRs, standups
- 6–8: Daily collaboration with engineers, technical reviews
- 3–5: Occasional engineering contact, mostly mediated through tickets
- 0–2: Separate track, no engineering collaboration

**Product Ownership**
- 9–10: Full product ownership — roadmap, backlog, strategy, prioritization authority
- 6–8: Significant PM responsibilities, strong influence on roadmap
- 3–5: Requirements gathering and documentation role
- 0–2: Pure delivery coordination or admin

**Learning Potential**
- 9–10: Multiple new technical domains, hands-on exposure
- 6–8: One to two significant new skills
- 3–5: Incremental growth in familiar areas
- 0–2: Repetitive of past work with no growth path

**Marketability**
- 9–10: High demand skills (AI PM, Cloud Engineer, Agent Builder) — transferable widely
- 6–8: Good market demand, strong resume value
- 3–5: Niche or commoditized — limited differentiation
- 0–2: Declining relevance or easily automated

**Portfolio Value**
- 9–10: Public GitHub repos, live deployments, reusable frameworks
- 6–8: Internal portfolio artifacts, architecture diagrams, documented case studies
- 3–5: Process documentation only, no technical artifacts
- 0–2: Confidential and non-shareable, no transferable portfolio value

**Leadership Opportunity**
- 9–10: Leading a team or major initiative with clear ownership
- 6–8: Influencing outcomes, leading a workstream or sub-team
- 3–5: Individual contributor with mentoring or coordination responsibilities
- 0–2: Pure support or execution role

**Compensation Potential**
- 9–10: Experience with high salary trajectory (AI PM, Cloud Architect, senior technical roles)
- 6–8: Good trajectory — building toward higher compensation
- 3–5: Lateral — neither advancing nor declining compensation trajectory
- 0–2: Declining trajectory — experience less valued over time

### Step 3 — Calculate Total and Recommendation

Sum all 10 scores.

| Total | Recommendation |
|-------|---------------|
| 75–100 | Pursue Aggressively |
| 60–74 | Pursue |
| 45–59 | Consider |
| 30–44 | Low Priority |
| 0–29 | Avoid |

### Step 4 — Identify Top 3 Strengths

Select the 3 highest-scoring dimensions. For each, explain:
- Why this is a strength
- How it specifically advances the target career trajectory
- What to leverage from it

### Step 5 — Identify Top 3 Risks

Select the 3 lowest-scoring dimensions. For each, explain:
- What this means practically in the role
- Whether it can be mitigated (side projects, negotiation, internal moves)
- Whether it is a dealbreaker given the hard rules in `preferences/hard-rules.md`

### Step 6 — Identify Skill Gaps

Based on the opportunity's requirements, list skills not yet present in MODEL_NOTES.md. Classify each as:
1. **Blocking** — cannot perform the role without this
2. **Differentiating** — significantly increases fit if addressed
3. **Supporting** — helpful but not critical

### Step 7 — Generate Learning Plan

For the top 3 blocking/differentiating gaps:
- Specific topic to learn
- Best resource (name it — not "search online")
- Realistic time estimate to functional competency
- A hands-on exercise to apply the learning immediately

### Step 8 — Suggest Portfolio Project

Recommend one project that:
- Uses 2+ technologies from the opportunity's tech stack
- Can be built in 2–4 weeks (MVP scope)
- Produces a GitHub repository
- Mirrors what this role actually does (so you can speak to it in interviews)

---

## Output Format

```
## Opportunity Evaluation: [Role Title]

**Date:** [YYYY-MM-DD]
**Source:** [Where it came from]

---

### Quick Summary
[2–3 sentences describing what this role involves]

---

### Scores

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Cloud Exposure | X/10 | [Why] |
| AI Exposure | X/10 | [Why] |
| React / Front-End | X/10 | [Why] |
| Engineering Proximity | X/10 | [Why] |
| Product Ownership | X/10 | [Why] |
| Learning Potential | X/10 | [Why] |
| Marketability | X/10 | [Why] |
| Portfolio Value | X/10 | [Why] |
| Leadership Opportunity | X/10 | [Why] |
| Compensation Potential | X/10 | [Why] |
| **TOTAL** | **XX/100** | |

---

### Recommendation: [Category]

---

### Top 3 Strengths
1. **[Dimension]** — [Why it matters for target career]
2. **[Dimension]** — [Why it matters for target career]
3. **[Dimension]** — [Why it matters for target career]

---

### Top 3 Risks
1. **[Dimension]** — [What this means. Mitigation?]
2. **[Dimension]** — [What this means. Mitigation?]
3. **[Dimension]** — [What this means. Mitigation?]

---

### Skill Gaps

| Gap | Type | Time to Close | Resource |
|-----|------|---------------|----------|
| [Skill] | Blocking / Differentiating | [X weeks] | [Specific resource] |

---

### 30/60/90-Day Learning Plan

**30 days:** [Specific actions]
**60 days:** [Next layer]
**90 days:** [Integration milestone]

---

### Portfolio Project Recommendation

**Project:** [Name]
**Tech Stack:** [Technologies]
**What You Build:** [2–3 sentences]
**MVP Time Estimate:** [X weeks]
**Why It Matters:** [How it mirrors this role and serves as interview evidence]
```
