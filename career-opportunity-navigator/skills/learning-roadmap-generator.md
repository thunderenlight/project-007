# Skill: Learning Roadmap Generator

## When to Invoke
Use this skill when the user asks:
- "What should I learn next?"
- "How do I prepare for [role/opportunity]?"
- "Give me a learning plan for [technology]"
- "What are my skill gaps for [target role]?"
- After an opportunity evaluation when a deeper or standalone learning plan is requested

---

## Process

### Step 1 — Anchor to Current Position
Reference MODEL_NOTES.md to confirm:
- Technical skills currently owned (foundation)
- Recent learning from LEARNING_ROADMAP.md progress tracker
- Active track to avoid suggesting already-started work as "new"

### Step 2 — Define the Target
Based on the user's input:
- What specific role, opportunity, or skill is the learning aimed at?
- What is the timeline (days, weeks, months)?
- Is this to prepare before an opportunity, or to grow during one?

### Step 3 — Gap Analysis

Map current skills (MODEL_NOTES.md) against required skills for the target.

Classify each gap:
- **Blocking:** Cannot perform the role without this — highest urgency
- **Differentiating:** Significantly increases fit — high urgency
- **Supporting:** Useful and complementary — medium urgency
- **Advanced:** Expertise-level — long-term build

### Step 4 — Prioritize

Rank gaps by:
1. Impact on the specific opportunity or role
2. Time to useful competency (prefer shorter gaps if equal impact)
3. Availability of high-quality free resources
4. Connection to a buildable portfolio project

### Step 5 — Build the Roadmap

For each prioritized gap:
- **Topic:** Specific thing to learn
- **Why:** How it connects to the target
- **Best free resource:** Name it specifically (title + site)
- **Best paid resource:** Only if meaningfully better than free
- **Hands-on exercise:** What to build or do to apply the learning
- **Time estimate:** Realistic hours to functional competency (not mastery)
- **Success criterion:** How you know you have learned it

### Step 6 — Structure the Timeline

Build a sprint structure:
- **This week (7 days):** What to start immediately
- **30-day sprint:** One coherent learning track with daily rhythm
- **60-day extension:** Second layer building on the 30-day foundation
- **90-day goal:** An integration milestone — something you can demonstrate

### Step 7 — Connect to Portfolio

For each learning track, identify a portfolio project that:
- Applies the new skills in a real, working context
- Builds toward the career navigator app where possible
- Produces a GitHub repository

---

## Output Format

```
## Learning Roadmap: [Target Role or Skill]

**Date:** [YYYY-MM-DD]
**Timeline:** [X weeks/months]

---

### Starting Point
[What you already know that is relevant — start from strength, not scratch]

---

### Gap Summary

**Blocking (do first):**
- [Gap 1] — why it blocks
- [Gap 2] — why it blocks

**Differentiating (do next):**
- [Gap 3] — why it differentiates
- [Gap 4] — why it differentiates

**Supporting (build over time):**
- [Gap 5]
- [Gap 6]

---

### This Week (Days 1–7)

**Goal:** [Specific, completable in 7 days]

**Day 1–2:** [Topic] — [Resource] — [Exercise]
**Day 3–4:** [Topic] — [Resource] — [Exercise]
**Day 5–7:** [Build something small using days 1–4]

---

### 30-Day Sprint

**Goal:** [Measurable outcome — what can you do at the end of 30 days that you cannot do today?]
**Daily commitment:** [X hours]

Week 1: [Topic + Resource + Exercise]
Week 2: [Topic + Resource + Exercise]
Week 3: [Topic + Resource + Exercise]
Week 4: [Portfolio project applying weeks 1–3]

---

### 60-Day Extension
[What deepens or extends the 30-day foundation]

---

### 90-Day Goal
[Integration milestone — what can you build or demonstrate by day 90?]

---

### Resources

| Topic | Free Resource | Paid Option | Time to Competency |
|-------|--------------|-------------|-------------------|
| [Topic] | [Name — site/url] | [Course name] | [X hours] |

---

### Portfolio Projects

| Project | Skills Applied | Time | Connects To |
|---------|---------------|------|-------------|
| [Name] | [Tech stack] | [X weeks] | [Career navigator phase] |
```
