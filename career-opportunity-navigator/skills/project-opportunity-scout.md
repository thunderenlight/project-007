# Skill: Project Opportunity Scout

## When to Invoke
Invoke this skill whenever the user pastes ANY of the following:
- An internal Accenture role description or staffing request
- A job posting (LinkedIn, company careers page, recruiter email)
- A project brief or SOW excerpt
- A role title with context ("6-month engagement at a bank, AWS + AI governance")
- A recruiter summary or verbal opportunity description

This skill runs a complete 5-part analysis automatically. No additional prompting needed.

---

## Input Detection

Before running the analysis, identify the input type:
- **Internal Accenture role / staffing request** — look for: Accenture, practice names, CID/engagement codes, internal grade references
- **External job posting** — company name, apply link, external JD format
- **Project brief** — SOW language, deliverables list, client name
- **Recruiter summary** — informal language, "my client," "looking for someone who"

Note the type in the output header. It affects how Networking Contacts are framed.

---

## 5-Part Analysis Process

---

### Part 1 — Fit Score

Run the full 10-dimension scoring framework from `skills/opportunity-evaluator.md`.

Score each dimension 0–10:

| Dimension | Scoring Anchor |
|-----------|---------------|
| Cloud Exposure | 9–10: building on AWS daily. 6–8: AWS involved. 3–5: adjacent. 0–2: none. |
| AI Exposure | 9–10: building/configuring AI. 6–8: integrating/evaluating AI. 3–5: governance only. 0–2: none. |
| React / Front-End | 9–10: writing React code. 6–8: front-end decisions. 3–5: specifying. 0–2: none. |
| Engineering Proximity | 9–10: on the engineering team. 6–8: daily collaboration. 3–5: occasional. 0–2: separate track. |
| Product Ownership | 9–10: full roadmap authority. 6–8: strong PM role. 3–5: requirements only. 0–2: coordination. |
| Learning Potential | 9–10: multiple new technical domains. 6–8: 1–2 new skills. 3–5: incremental. 0–2: repetitive. |
| Marketability | 9–10: high demand skills. 6–8: good market value. 3–5: niche/commodity. 0–2: declining. |
| Portfolio Value | 9–10: public GitHub artifacts. 6–8: internal portfolio. 3–5: docs only. 0–2: nothing shareable. |
| Leadership Opportunity | 9–10: leading team/initiative. 6–8: influencing outcomes. 3–5: IC with influence. 0–2: support. |
| Compensation Potential | 9–10: top-quartile trajectory. 6–8: strong trajectory. 3–5: lateral. 0–2: declining. |

Calculate total. Apply decision threshold:

| Total | Recommendation |
|-------|---------------|
| 75–100 | Pursue Aggressively |
| 60–74 | Pursue |
| 45–59 | Consider |
| 30–44 | Low Priority |
| 0–29 | Avoid |

Also check against the 6 hard rules in `preferences/hard-rules.md`. Flag any violations.

---

### Part 2 — Skill Gap Analysis

Compare the role's requirements against current skills in MODEL_NOTES.md.

For each identified gap, classify:
- **Blocking** — cannot credibly interview or perform the role without this
- **Differentiating** — having this skill significantly increases chance of selection
- **Supporting** — useful context that improves performance in role

Present as a table:

| Skill Gap | Type | Estimated Time to Close | Evidence of Gap |
|-----------|------|------------------------|-----------------|
| [skill] | Blocking / Differentiating / Supporting | [X weeks] | [What in the JD requires this] |

Flag if any blocking gaps exist — these need to be addressed before pursuing aggressively.

---

### Part 3 — Networking Action Plan

Identify the 3–5 most valuable connections to make for this specific opportunity.

For each connection type:
- **Who to find:** Role, title, relationship to this opportunity
- **Why they matter:** What they can offer (referral, intel, introduction, advice)
- **Where to find them:** LinkedIn search terms, Accenture internal networks, communities of practice
- **What to ask for:** Specific, reasonable request (30-min informational call, introduction to hiring manager, insight on team culture)
- **Outreach message draft:** A specific, short message tailored to this role

Connection types to consider:
- People currently in this role or similar roles at this company
- Hiring manager or their direct reports (if identifiable)
- Internal Accenture contacts with this client or in this practice
- Former colleagues who have transitioned to this type of role
- Community members (AI PM communities, AWS user groups, agent builder communities)

**For internal Accenture roles:** Frame networking as internal relationship building, not job hunting. Focus on learning about the engagement, expressing interest through the right channels.

**For external postings:** Frame networking as research and relationship building before applying.

---

### Part 4 — Learning Plan

Based on the skill gaps from Part 2, create a targeted 30/60/90-day plan.

Structure:

**Immediate (Days 1–7):**
What to start today. One specific action per day. No more than 1 hour per day. Focus on blocking gaps only.

**30-Day Sprint:**
One coherent learning track. Specific module from LEARNING_ROADMAP.md if applicable. Tie to a hands-on exercise that produces a visible artifact.

**60-Day Extension:**
Second layer — differentiating gaps. Deepens the 30-day foundation.

**90-Day Goal:**
An integration milestone. Something you can demonstrate, deploy, or discuss in an interview.

For each learning item:
- Specific topic
- Best free resource (name it specifically)
- Hands-on exercise
- Estimated hours

Connect at least one item to the career navigator project or a portfolio project recommendation.

---

### Part 5 — Interview Prep Kit

Generate a complete interview preparation package for this specific role.

**5a — Likely Interview Questions**

Categorize by type:

*Product/Strategy Questions:*
Generate 5 questions likely asked for this role type. For each, provide a 2-sentence answer framework using Glenn's current experience.

*Technical Depth Questions:*
Generate 3–5 technical questions appropriate for this role. For AI/Cloud roles, these test fluency — not coding ability. Provide talking points for each.

*Behavioral Questions (STAR format):*
Generate 4 behavioral questions specific to this role type. For each, identify which story from Glenn's background is the strongest fit.

*Case/Scenario Questions:*
Generate 2–3 scenario questions ("How would you approach...") likely for this role. Provide a structured response framework.

**5b — Your Strongest Talking Points**

Based on MODEL_NOTES.md, identify the 5 most relevant things from Glenn's background for this specific role. Frame each as a concise talking point:

"When I [did X at Y], I [learned/built/led Z], which directly applies to [this role's requirement]."

**5c — Portfolio Stories to Mention**

From `portfolio/` (or in-progress projects), identify the 1–3 most relevant portfolio items to reference. For each, draft the 2-sentence interview version:

"I built [X] using [tech stack]. It [what it does and why it matters for this role]."

If no portfolio items exist yet that are relevant, flag this and recommend which project to build before interviewing.

**5d — Questions to Ask the Interviewer**

Generate 5 high-quality questions to ask at the end of the interview. These should:
- Demonstrate genuine interest and research
- Surface information you actually need (team culture, technical stack, role definition)
- Position Glenn as a thoughtful, strategic candidate

**5e — Red Flags to Investigate**

Based on the job description and scoring, list 2–3 things to clarify in the interview before accepting an offer. These protect against the risks identified in Part 1.

---

## Output Format

```
# Opportunity Scout Report: [Role Title]

**Date:** [YYYY-MM-DD]
**Input Type:** Internal Role / External Posting / Project Brief / Recruiter Summary
**Organization:** [Name]

---

## Part 1 — Fit Score

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

**Recommendation:** [Category]

**Hard Rules Check:**
- Rule 1 (Build Test): [Pass / Fail — reason]
- Rule 2 (3-Year Test): [Pass / Fail — reason]
- Rule 3 (Anti-Pattern Limit): [Pass / N/A]
- Rule 4 (Technology Filter): [Pass / Fail — which technologies present]
- Rule 5 (Positioning Test): [Pass / Fail]
- Rule 6 (Engineering Credibility): [Pass / Fail]

---

## Part 2 — Skill Gap Analysis

| Skill Gap | Type | Time to Close | Evidence from JD |
|-----------|------|--------------|-----------------|
| [skill] | Blocking | [X weeks] | "[quote or reference]" |

**Summary:** [X blocking gaps, Y differentiating gaps. Ready to pursue? Yes / Not yet — address [gap] first.]

---

## Part 3 — Networking Action Plan

### Contact 1: [Role/Title Type]
**Why they matter:** [What they can offer]
**Where to find them:** [LinkedIn search: "[search string]" / Accenture internal / Community]
**What to ask for:** [Specific, reasonable request]
**Outreach message:**
> [Draft message — 3–5 sentences, specific and human]

### Contact 2: [Role/Title Type]
[Same format]

### Contact 3: [Role/Title Type]
[Same format]

---

## Part 4 — Learning Plan

### Immediate (Days 1–7)
[Day-by-day actions for blocking gaps only]

### 30-Day Sprint
**Goal:** [What you can do at the end of 30 days]

Week 1: [Topic + Resource + Exercise]
Week 2: [Topic + Resource + Exercise]
Week 3: [Topic + Resource + Exercise]
Week 4: [Portfolio project]

### 60-Day Extension
[Next layer]

### 90-Day Goal
[Integration milestone — what you can demonstrate in an interview]

---

## Part 5 — Interview Prep Kit

### 5a — Likely Interview Questions

**Product/Strategy:**
1. Q: [Question] → Framework: [2-sentence answer using Glenn's background]
2. Q: [Question] → Framework: [2-sentence answer]
3. Q: [Question] → Framework: [2-sentence answer]
4. Q: [Question] → Framework: [2-sentence answer]
5. Q: [Question] → Framework: [2-sentence answer]

**Technical Depth:**
1. Q: [Question] → Talking points: [What to cover]
2. Q: [Question] → Talking points: [What to cover]
3. Q: [Question] → Talking points: [What to cover]

**Behavioral (STAR):**
1. Q: [Question] → Best story from background: [Experience + what to highlight]
2. Q: [Question] → Best story: [Experience]
3. Q: [Question] → Best story: [Experience]
4. Q: [Question] → Best story: [Experience]

**Scenarios:**
1. Q: [Question] → Response framework: [How to structure the answer]
2. Q: [Question] → Response framework: [How to structure the answer]

### 5b — Strongest Talking Points
1. "When I [X], I [Y], which applies here because [Z]."
2. "When I [X], I [Y], which applies here because [Z]."
3. "When I [X], I [Y], which applies here because [Z]."
4. "When I [X], I [Y], which applies here because [Z]."
5. "When I [X], I [Y], which applies here because [Z]."

### 5c — Portfolio Stories
[If portfolio items exist:]
- "[Project name]: I built [X] using [tech stack]. It [what it does and why it matters for this role]."

[If no relevant portfolio items yet:]
- **Gap flagged:** No portfolio items currently demonstrate [skill]. Build [recommended project] before interviewing.

### 5d — Questions to Ask the Interviewer
1. [Question that surfaces technical stack details]
2. [Question about team culture and engineering collaboration]
3. [Question about AI strategy ownership vs. coordination]
4. [Question about success metrics for this role in 90 days]
5. [Question that demonstrates strategic thinking]

### 5e — Red Flags to Investigate
1. [Risk from Part 1 — what to probe in interview]
2. [Risk from Part 1 — what to probe in interview]
3. [Anything in the JD that warrants clarification]

---

## Recommended Next Action

[One clear sentence: what to do in the next 24 hours based on the score and gaps.]

Save this file to: `role-targeting/evaluations/YYYY-MM-DD-[org]-[role-slug].md`
```
