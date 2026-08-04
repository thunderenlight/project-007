# Skill: Portfolio Recommender

## When to Invoke
Use this skill when the user asks:
- "What should I build next?"
- "Recommend a portfolio project"
- "What projects demonstrate [skill]?"
- "How do I show AWS / React / AI experience on my portfolio?"
- "What can I build to prepare for [role]?"

---

## Process

### Step 1 — Assess Current Portfolio
Check `portfolio/` directory. Identify:
- What has already been built (avoid suggesting duplicates)
- What tech stacks are already represented
- Gaps in the portfolio narrative (what story does it currently tell?)

### Step 2 — Identify Portfolio Gaps
Based on Tier 1 target roles from MODEL_NOTES.md, identify what is missing:

| Evidence Type | Current Status |
|---------------|---------------|
| AWS hands-on project | Check portfolio/ |
| React/TypeScript app | Check portfolio/ |
| AI integration (not governance) | Check portfolio/ |
| Full-stack application | Check portfolio/ |
| API design and deployment | Check portfolio/ |
| Agent/LLM application | Check portfolio/ |

### Step 3 — Match to Career Trajectory
For each recommended project, identify:
- Which Tier 1 or Tier 2 target roles it unlocks or strengthens
- Which evaluation dimensions it would improve if this was a scored opportunity
- What a hiring manager or recruiter sees when they encounter it

### Step 4 — Rank by Impact
Rank recommended projects by:
1. Highest impact on Tier 1 roles
2. Most achievable given current skill level
3. Best tech stack alignment (AWS + React + AI)
4. Most differentiated (not a generic tutorial clone)

---

## Project Quality Criteria

A strong portfolio project for this career path:

**Technical Signal:**
- Uses at least 2 target technologies (AWS, React, Python, FastAPI, Claude)
- Is deployed (live URL is 10x better than localhost screenshot)
- Has a clean GitHub repository with a meaningful README

**Business Signal:**
- Solves a real problem, even a small one
- Can be described in one sentence to a non-technical person
- Demonstrates product thinking alongside technical execution

**Narrative Signal:**
- Connects directly to a target role (mirrors what that role does)
- Shows progression (each project should be more complex than the previous)
- Can be discussed confidently for 5 minutes in an interview

---

## Output Format

```
## Portfolio Recommendations

**Date:** [YYYY-MM-DD]

---

### Current Portfolio Status

Built so far:
- [List from portfolio/ directory, or "Nothing yet — this is the starting point"]

Missing from portfolio:
- [ ] AWS hands-on project
- [ ] React/TypeScript application
- [ ] AI integration (not governance)
- [ ] Full-stack deployed application
- [ ] Agent or LLM-powered tool

---

### Recommended Projects

---

#### Project 1: [Name] — Highest Priority ⭐

**One-line description:**
"[What it does, in plain English, in one sentence]"

**Why this project:**
- Tier 1 roles it strengthens: [Role 1, Role 2]
- Technical skills it demonstrates: [skill list]
- What makes it non-generic: [the differentiating characteristic]

**Tech Stack:**
- Front End: [React + TypeScript + TailwindCSS / or N/A]
- Back End: [FastAPI + Python / or N/A]
- Cloud: [AWS Lambda + API Gateway + DynamoDB + S3]
- AI: [Claude API / Bedrock / LangChain]

**Scope:**

MVP (2 weeks):
- [Core feature 1]
- [Core feature 2]
- [Core feature 3]

Full version (6–8 weeks):
- [Extended feature 1]
- [Extended feature 2]
- [Extended feature 3]

**GitHub README positioning:**
"[Draft of the first paragraph of the README — positions the project for target roles]"

**Interview talking point:**
"I built [X] to solve [Y problem]. I used [Z stack]. The hardest challenge was [challenge], which I solved by [solution]."

---

#### Project 2: [Name]

[Same format as Project 1]

---

#### Project 3: [Name]

[Same format as Project 1]

---

### Portfolio Narrative in 6 Months

After building these 3 projects, your GitHub demonstrates:
- [AWS capability]
- [React/TypeScript capability]
- [AI/agent capability]
- [Full-stack deployment capability]

Target roles you are now competitive for: [Tier 1 and Tier 2 roles]

Interview-ready answer to "What have you built?":
"[2–3 sentence answer that references all 3 projects coherently]"
```
