# react-sensei — How to Use

*A guide written specifically for Kilima's return to React after a 1-year gap.*

---

## What It Is

react-sensei is a Claude Code skill that teaches React and TypeScript by making you think before giving you answers. It does not write your components. It does not fix your bugs. It asks you questions until you can do it yourself — then it tells you what you got right and wrong.

This matters because the gap in your React skills was caused by AI over-reliance (generator mode). react-sensei runs in explainer mode by default. The difference: generator mode produces code you can use; explainer mode produces understanding you can keep.

---

## How to Invoke It

In any Claude Code session, type the skill name before your question:

```
/react-sensei I don't understand why my useEffect runs every render
/react-sensei explain useState vs useReducer
/react-sensei check my component — does this look right? [paste code]
```

Or trigger it naturally — it activates when you say "react-sensei", "teach me", "explain this React concept", or "why isn't this working" (without wanting the fix).

---

## The Four Moves — What Happens With Each Request

Every request is classified before the skill responds. Knowing the move tells you what to expect.

### CONCEPT — "What is X?" / "Explain X" / "How does X work?"
The skill explains the concept using a **parallel example** — never your actual code. A different UI, different domain, same React pattern. Then it asks you a prediction question before you go try it.

**You get:** Mental model + parallel example + "what do you think happens if...?"
**You don't get:** Your component written for you

### DEBUG — "Why is this broken?" / "This isn't working"
First question is always: *"What do you think is causing it?"* You answer first.

If you're right: skill confirms and names the React concept behind it.
If you're wrong or stuck: you get a one-sentence category hint ("this is a stale closure issue") — not the line number or the fix.

**You get:** A frame for diagnosing it yourself
**You don't get:** The corrected code (unless you unlock it explicitly)

### BUILD — "Build X" / "Write me a component that..."
The gate is hardest here. Expect: *"What data does this component need to track? What events does it respond to?"*

If you walk through the structure: "Write what you think it looks like — even if it's wrong."
If you push back: you're offered a skeleton (component name + props + one useState line). Writing the skeleton IS still learning — it's not an escape hatch.

**You get:** Scaffolded thinking, not a finished component
**You don't get:** The implementation (unless you use an unlock phrase)

### REVIEW — "Does this look right?" / "Check my code"
This one opens up. The skill reviews what you wrote like a senior engineer would: names what works and why, names each issue as a category, asks "what would need to change?" It does not rewrite the broken section.

**You get:** A code review
**You don't get:** A rewrite

---

## Unlocking Code Completion

If you're genuinely stuck and need the answer, say one of these phrases exactly:

- `"write this for me"`
- `"just build it"`
- `"complete this"`
- `"I give up on this part"`
- `"skip the lesson on this one"`
- `"just show me the full code"`

When you unlock, the skill builds it **and** appends a two-line lesson: what concept you skipped and what to look for next time. The unlock is also logged in your session file. Two unlocks on the same concept across three sessions = the skill switches to deliberate CONCEPT mode on that topic before re-gating.

**The unlock is a tool, not a failure.** Use it when you're blocked on something you've already tried to work through. Don't use it as the first move.

---

## TypeScript — How It's Handled

TypeScript is woven into every React concept, not a separate track. The skill has three TypeScript tiers:

| Tier | What it covers |
|------|---------------|
| TS-BASIC | Type annotations, basic inference, interfaces, union literals, optional fields |
| TS-REACT | Typed props, `useState<T>`, typed event handlers, typed useRef/useReducer, typed custom hooks |
| TS-ADVANCED | Generic components `<T,>`, utility types (Partial/Omit/Pick), discriminated unions, conditional types |

**Mental model the skill teaches:** TypeScript interfaces are **contracts**, not annotations. A contract says "the compiler rejects any caller that doesn't match this shape before the browser ever sees it." Treat type errors as design signals, not annoyances. Never silence them with `as any`.

When you ask about a React concept + TypeScript together, the skill responds at different depths for each layer. Your React level and your TypeScript level are tracked separately — you can be Practitioner on `useState` and Novice on `TS-REACT`.

---

## Your Level System

The skill tracks your mastery per concept, not globally. You can be Level 3 on JSX and Level 1 on `useReducer` at the same time.

| Level | What it looks like |
|-------|--------------------|
| Novice | Full concept explanation + parallel example + prediction question |
| Apprentice | Short explanation + partial example with a blank to fill in |
| Practitioner | Concept name + one-line hint + "where would you look first?" |
| Independent | Concept name + relevant docs link + "what does your mental model say?" |

Levels advance when you demonstrate mastery signals — correctly predicting behavior before running code, naming the concept unprompted, spotting your own bug before being asked. Not from self-reporting.

---

## Session File — Where Your Progress Lives

The skill writes to `~/.claude/react_coach_progress.md` after every session. This file holds your current level for every concept you've touched. At the start of each new session, the skill reads it and resumes from where you left off.

If you lose Claude session context mid-session (context compacted), the skill re-reads the file and announces: *"Resuming — you are at [levels]. Last concept worked on: [X]."*

**Keep this file.** If you lose it, you lose your level history and the skill starts fresh.

---

## What NOT to Do

These are failure modes specific to your profile:

**Don't use BUILD as the first move on something you haven't tried.** The BUILD gate is designed for this. If you ask "write me a counter component" before trying anything, you'll get questions instead of code — and that's working correctly.

**Don't use AI generator mode during fundamentals refresh.** react-sensei teaches you. A separate AI session that writes the component you're learning kills that. If you want help outside of react-sensei, use it in explainer mode only: "explain what this pattern does and why" — never "write this for me."

**Don't over-rely on the oracle history.** If the session file says you're Apprentice on `useState`, that's a snapshot. Verify it by trying something — don't assume the level is still accurate after a gap.

---

## Recommended Starting Point (Your Specific Roadmap)

Based on where you are now (solid junior, 1-year gap, AI over-reliance), the recommended sequence from the skill:

1. JSX syntax + expressions
2. Props — passing data into components
3. Conditional rendering
4. Lists and keys
5. `useState` — internal state and re-rendering
6. Controlled inputs (forms tied to state)
7. Event handlers
8. Lifting state
9. `useEffect` and the dependency array
10. Component composition
11. **TypeScript basics** — type annotations, inference (TS-BASIC)
12. **Typed props interfaces** (TS-REACT)
13. **Typed useState + typed event handlers** (TS-REACT)
14. Custom hooks
15. `useReducer`
16. Context API
...

Don't skip steps 8 (lifting state) or 9 (useEffect dependencies) — they're the prerequisites for `useReducer` and Context. The session file tracks where you are in the sequence.

---

## Files

| File | Location |
|------|----------|
| Skill source | `~/.claude/skills/react-sensei/SKILL.md` |
| Repo copy (this) | `career-opportunity-navigator/skills/react-sensei.md` |
| Session progress file | `~/.claude/react_coach_progress.md` |
| This guide | `career-opportunity-navigator/skills/react-sensei-guide.md` |

The skill source in `~/.claude/` is the active version Claude Code loads. The repo copy is for preservation and GitHub. If you update the skill, copy the updated version to the repo to keep them in sync.
