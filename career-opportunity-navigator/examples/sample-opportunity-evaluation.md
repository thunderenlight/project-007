# Example Evaluation: AWS AI Product Manager — FinTech Client

**Type:** Reference example — shows the full evaluation format
**Purpose:** Calibrates the scoring methodology for a strong-fit opportunity
**Date:** 2026-07-27

---

## Raw Description

> We are looking for an AI Product Manager to join our AWS-native fintech platform team. You will own the roadmap for our AI-powered document processing service, working directly with engineers to deliver features. The team builds on AWS Lambda, API Gateway, DynamoDB, and uses Claude/Bedrock for AI features. You will write technical requirements, participate in sprint planning, review pull requests, and define the AI strategy. You will also own the product roadmap for the React-based front-end team that displays processed documents to end users.

---

## Initial Gut Check

What excites me: Owning a real AI product on AWS. Direct engineering collaboration. React ownership. High market demand for this type of role.

What concerns me: Fintech work is often confidential — portfolio value may be limited. Need to verify "AI strategy" means real implementation, not just governance.

Does this feel like a step forward: Yes — significantly.

Is this aligned with where I want to be in 3 years: Strongly yes.

---

## Scores

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Cloud Exposure | 9/10 | AWS Lambda, API Gateway, DynamoDB daily — core production stack |
| AI Exposure | 9/10 | Owns Claude/Bedrock product, AI strategy, model decisions |
| React / Front-End | 7/10 | Owns React product roadmap but not writing code directly |
| Engineering Proximity | 9/10 | Sprint participation, PR reviews, daily engineering collaboration |
| Product Ownership | 9/10 | Full roadmap ownership for a production AI product |
| Learning Potential | 9/10 | AWS + AI + React + fintech engineering culture simultaneously |
| Marketability | 10/10 | AI PM on AWS in financial services — top of market demand |
| Portfolio Value | 7/10 | Internal fintech work — confidential, but architecture docs possible |
| Leadership Opportunity | 8/10 | Product strategy ownership + team influence |
| Compensation Potential | 9/10 | AI PM in fintech = top-quartile compensation trajectory |
| **TOTAL** | **86/100** | |

---

## Recommendation: Pursue Aggressively

---

## Top 3 Strengths

**1. Cloud + AI at depth, not just at the edges**
Owning a Claude/Bedrock-powered product on AWS serverless infrastructure is the exact intersection of target skills. This is not governance work — it is ownership of a production AI system. That distinction is worth repeating. Rare and highly valuable.

**2. Engineering proximity is genuine**
PR reviews and sprint participation means technical credibility is built through practice, not assumed. Within 6 months you will have real vocabulary and instincts for technical decisions. Interviewers can tell the difference between "I coordinated engineers" and "I reviewed their code."

**3. Market demand is exceptional**
AI PM roles in financial services are among the highest-compensated and most in-demand roles in the current market. This experience directly targets Tier 1 roles at tech companies, banks, and consulting firms. The resume value compounds quickly.

---

## Top 3 Risks

**1. Portfolio constraints from confidentiality**
Fintech work is often under NDA. You may not be able to show code, architecture diagrams, or case studies publicly.
*Mitigation:* Build equivalent personal projects alongside this role. The career navigator app is one. An AI document processing demo would be another.

**2. React ownership versus React development**
Owning the React product roadmap is valuable, but it does not make you a React developer. The gap between "I owned the product" and "I built the product" matters to technical hiring managers.
*Mitigation:* Commit to Track 2 (React + TypeScript) from LEARNING_ROADMAP.md during this role. Two hours per week on a personal React project closes this gap within 3 months.

**3. AI strategy scope is undefined**
"Define the AI strategy" can mean very different things at different companies. At one extreme it is roadmap and vision. At the other it is hands-on model selection, prompt architecture, and evaluation design.
*Mitigation:* In the interview, ask specifically: "Will I be involved in prompt engineering, model evaluation, and Claude API configuration decisions, or primarily in product strategy and requirements?" The answer tells you everything.

---

## Hard Rules Check

- [x] Rule 1 — Build Test: Yes — you own a product that is being actively built
- [x] Rule 2 — 3-Year Test: Yes — AI PM on AWS is highly valued in 3 years
- [x] Rule 3 — Anti-Pattern Limit: N/A — not a consecutive anti-pattern
- [x] Rule 4 — Technology Filter: Yes — AWS, AI, React (3 of 6)
- [x] Rule 5 — Positioning Test: Yes — "I owned an AI document processing product on AWS"
- [x] Rule 6 — Engineering Credibility Test: Yes — PR reviews and sprint participation

No hard rule failures.

---

## Skill Gaps

| Gap | Type | Time to Close | Resource |
|-----|------|---------------|----------|
| AWS Bedrock / Claude API (Python) | Blocking | 2–3 weeks | Anthropic docs + AWS Bedrock developer guide |
| LLM evaluation frameworks | Differentiating | 4–6 weeks | Hamel Husain's LLM evaluation blog + LangSmith docs |
| Document processing AI patterns | Differentiating | 2 weeks | AWS Textract docs + build one personal project |
| React product ownership vocabulary | Supporting | Ongoing | React docs + personal React project |

---

## 30/60/90-Day Learning Plan

**30 days (before starting):**
- Call the Claude API directly from Python — build a small script (CLI tool, simple classifier)
- Complete one AWS Lambda + API Gateway tutorial end-to-end (deploy a "hello world" Lambda)
- Read AWS Bedrock documentation for Claude integration

**60 days (first month in role):**
- Understand the existing architecture end-to-end — draw it yourself on paper, then verify with the team
- Build a personal document processing demo: upload PDF → Claude extracts fields → output JSON (see portfolio recommendation below)
- Review 10 PRs to develop code review vocabulary

**90 days:**
- Own the first AI feature from spec to launch independently
- Build a React UI for the career navigator as a personal side project
- Design an evaluation framework for one of the team's AI features — define the metrics, run the evals

---

## Portfolio Project Recommendation

**Project:** AI Document Intelligence Demo

**Tech Stack:** AWS Lambda + API Gateway + S3 + Claude API + React (TypeScript)

**What You Build:**
A web app where you upload a PDF (invoice, contract, or report). A Lambda function sends it to Claude with a structured extraction prompt. Claude returns JSON with key fields (amounts, dates, parties, terms). A React UI displays the extracted data in a clean table.

**MVP Scope (2–3 weeks):**
- React form with PDF upload button
- Lambda: receive upload, call Claude API, return extracted JSON
- S3: store uploaded files
- React: display extracted fields in a table

**Full Version (6–8 weeks):**
- DynamoDB: save extraction history
- Multiple document types (invoices, contracts, reports) with different extraction schemas
- Confidence scoring on extracted fields
- Export to CSV

**GitHub Repo Naming:** `ai-document-intelligence`

**Why This Project Matters:**
This mirrors the exact architecture of the fintech role. When you walk into the interview and say "I built a document processing pipeline using Lambda + Claude + React," you are not speculating about what the team does — you have done a version of it. That is the difference between a candidate who knows and a candidate who has built.
