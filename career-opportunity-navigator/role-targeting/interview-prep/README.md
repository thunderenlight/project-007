# role-targeting/interview-prep/

## Purpose
Company-specific and role-specific interview preparation materials — generated from scout reports and refined through practice.

## Why This Exists
Interview preparation is most effective when it is specific, not generic. "Tell me about yourself" advice is everywhere. What matters is having *your* specific talking points, *this* company's likely questions, and *this* role's technical depth requirements — all in one place before you walk in.

## Structure

```
interview-prep/
├── general/
│   ├── star-stories.md        ← Your reusable STAR stories, indexed by theme
│   ├── technical-primers.md   ← Quick-review cards for technical concepts
│   └── positioning-statement.md ← Your 2-minute "tell me about yourself"
│
└── [company-role]/            ← One folder per active opportunity
    ├── prep-notes.md          ← Full prep from the scout report
    ├── practice-log.md        ← Mock interview practice notes
    └── post-interview.md      ← What happened, lessons learned
```

---

## general/star-stories.md — Start Here

Before any interview, you need a library of STAR stories (Situation, Task, Action, Result) indexed by theme. Create this file when you begin active interviewing.

**Themes to cover:**
- Leading through ambiguity
- Influencing without authority
- Delivering AI / technology results
- Handling stakeholder conflict
- Making a decision with incomplete information
- Driving adoption of a new tool or process
- Recovering from a project failure or setback

**STAR Story Format:**
```markdown
## [Story Title]

**Theme tags:** [ambiguity / leadership / AI / stakeholder / decision / etc.]

**Situation:** [1–2 sentences — what was the context?]

**Task:** [1 sentence — what were you specifically responsible for?]

**Action:** [2–4 sentences — what did you specifically do?]

**Result:** [1–2 sentences — what was the measurable outcome?]

**Best fit roles:** [Which target roles this story most supports]

**Variations:** [How to adapt this story for different questions]
```

---

## general/positioning-statement.md — Critical

Your 2-minute response to "Tell me about yourself" — tailored for AI PM and Cloud + AI roles.

**Structure:**
1. Where you are now (1 sentence — current role + key strength)
2. What you've built toward (2 sentences — AI and technical growth)
3. What you're targeting and why (1–2 sentences — where you're heading and why this role)
4. Why this company / role specifically (1 sentence — what makes this particular opportunity compelling)

Draft this once, refine it after every interview where you use it.

---

## general/technical-primers.md

Quick-review cards for technical concepts likely to come up in AI PM and Cloud AI interviews.

**Topics to cover:**
- What is RAG and how does it work? (2-minute version)
- What is a vector database and why does it matter?
- How does a Lambda function work?
- What is API Gateway and why does it exist?
- What is the difference between fine-tuning and prompt engineering?
- How would you evaluate whether an AI model is performing well?
- What is an agent and how does it differ from a chatbot?
- What is MCP and why does it matter for agentic systems?

Each primer: 3–5 bullet points. Enough to discuss fluently, not enough to become a textbook.

---

## How to Create a Company-Specific Prep Folder

1. Run `skills/project-opportunity-scout.md` on the opportunity
2. Copy Part 5 (Interview Prep Kit) from the scout report into a new folder here
3. Add a `practice-log.md` to track mock interview sessions
4. After the interview, fill in `post-interview.md` immediately while the memory is fresh

## After Every Interview

Complete `post-interview.md` within 2 hours:
- What questions were asked (write them down verbatim if possible)
- How you answered each one
- What feedback you received or inferred
- What you would answer differently
- What you learned about the role and company

This practice turns every interview — win or lose — into a data point that makes the next one better.
