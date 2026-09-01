# AI Tooling Transition Guide

**Purpose:** Continue this career navigator project if Claude Code access ends.
**Written:** 2026-08-31
**Author:** Kilima Glenn

This document is self-contained. Everything needed to resume this work on another platform is described here or referenced by file path in this repo.

---

## What This Project Is

A structured career intelligence system for navigating a role search targeting Cloud + AI Product Leader in 3 years. It contains:

- **Opportunity evaluations** — scored 10-dimension assessments with oracle stress-testing
- **Skills tracking** — react-sensei learning tool, skill gap analysis
- **Career intelligence dashboard** — HTML artifact at `portfolio/career-intelligence-dashboard.html`
- **Session logs** — timestamped conversation logs that preserve every decision and finding
- **Memory files** — persistent profile, preferences, project context

The methodology is fully documented in the files. Any AI can run it with the right context.

---

## What You Had With Claude Code (and What Replaces It)

| Claude Code capability | Replacement approach |
|------------------------|---------------------|
| Auto-loading skills (`/react-sensei`) | Paste the skill guide manually at session start |
| Memory system (persists across sessions) | Paste `memory/` files + most recent session log |
| File read/write/bash in one tool | Copilot Enterprise in VS Code for code; manual for files |
| Long autonomous sessions | Shorter manual sessions with context restoration block |
| Oracle methodology via skill | Paste oracle-scales SKILL.md in full; Gemini handles the full length |

---

## Do This Before Access Ends

Run these commands to ensure everything is backed up in the repo:

```bash
# Navigate to repo
cd "/Users/kilima.glenn/Sites/AI/agent 007"

# Back up react-sensei skill (source of truth is ~/.claude/skills/)
cp ~/.claude/skills/react-sensei/SKILL.md \
   "career-opportunity-navigator/skills/react-sensei.md"

# Back up oracle-scales skill
cp ~/.claude/skills/oracle-scales/SKILL.md \
   "career-opportunity-navigator/skills/oracle-scales.md" 2>/dev/null || echo "copy manually"

# Back up learning progress if it exists
cp ~/.claude/react_coach_progress.md \
   "career-opportunity-navigator/skills/react-coach-progress.md" 2>/dev/null || echo "not yet created"

# Back up Claude memory files
mkdir -p "career-opportunity-navigator/memory-backup"
cp ~/.claude/projects/-Users-kilima-glenn-Sites-AI-agent-007/memory/*.md \
   "career-opportunity-navigator/memory-backup/"

# Confirm and push everything
git add -A
git status
# Then: git commit -m "Transition backup — all skill and memory files" && git push
```

After this, every file needed to resume on another platform is in the GitHub repo.

---

## Key Files Reference

| File | What it is | Use when |
|------|-----------|----------|
| `memory/user_kilima_background.md` | Full profile — skills, history, honest self-assessment | Paste at start of every session |
| `memory/MEMORY.md` | Index of all memory entries | Paste with background for fast context |
| `memory/project_career_navigator.md` | Current project goals and roadmap | Paste when discussing career strategy |
| `conversations/2026-08-21-session-01.md` | First full session log | Historical context |
| `conversations/2026-08-24-session-02.md` | Second session log (react-sensei, BofA interview) | Most recent context |
| `opportunities/2026-08-21-application-support-engineer-frontend.md` | BofA App Support Engineer evaluation | Paste when discussing that role |
| `skills/react-sensei.md` | Full react-sensei skill (451 lines) | Paste to activate react-sensei on any platform |
| `skills/react-sensei-guide.md` | How-to-use guide (Kilima-specific) | Shorter — use this instead of full skill for quick sessions |
| `skills/oracle-scales.md` | Oracle detached judgment methodology | Paste to activate oracle assessment on any platform |
| `portfolio/career-intelligence-dashboard.html` | Career dashboard | Open in any browser — no AI needed |
| `TRANSITION.md` | This file | Platform-switching reference |

---

## Context Restoration Block

Paste this at the start of every session on any platform. Fill in the bracketed sections with file contents.

```
=== CONTEXT RESTORATION ===

WHO I AM:
[paste contents of memory/user_kilima_background.md]

PROJECT CONTEXT:
[paste contents of memory/project_career_navigator.md]

MOST RECENT SESSION:
[paste contents of most recent conversations/ log, or the Action Items section only]

ACTIVE ROLE (if applicable):
[paste contents of relevant opportunities/ file]

INSTRUCTION:
You are resuming work on a structured career intelligence project. The methodology,
scoring frameworks, and decisions made so far are in the files above. Continue from
where the session log's Action Items section leaves off. Ask me which task to address
first if it is not clear.
=== END CONTEXT ===
```

**Tip:** The Action Items table at the bottom of each session log is the fastest restore point. Paste just that section if you only have 5 minutes.

---

## Platform Strategies

---

### Gemini Enterprise (Google Workspace — Web)

**Best for:** Oracle evaluations, full context restoration, new role assessments, research.

**Key advantage:** 1M token context window — paste all session logs + memory files + oracle methodology + a JD in one prompt without hitting a limit. No chunking.

**Session workflow:**
1. Open [gemini.google.com](https://gemini.google.com) (or Gemini in Google Workspace)
2. Upload or paste: `user_kilima_background.md` + most recent session log
3. Paste context restoration block
4. Begin

**For oracle assessments:**
```
1. Paste full oracle-scales SKILL.md (Steps 1–7 + format rules — all of it)
2. Paste user_kilima_background.md
3. Paste the job description
4. Say: "Apply the oracle-scales methodology exactly as defined above to this role."
```
Gemini holds the full methodology without truncating it. Other platforms may cut off long system prompts.

**Google Drive option (reduces re-uploading):**
1. Upload all `.md` files from `conversations/`, `opportunities/`, `memory/`, and `skills/` to a Google Drive folder named `Career Navigator`
2. In Gemini chat, reference those Drive files: "Read my Career Navigator folder. Load [filename]. Resume from the action items."
3. Files stay current — update Drive when you update the repo.

**NotebookLM (if included in your plan):**
1. Go to [notebooklm.google.com](https://notebooklm.google.com)
2. Create a notebook: "Career Navigator"
3. Upload all session logs, opportunity evaluations, memory files, and skill guides as sources
4. Query across all of them: "What are all open action items?", "What was the oracle finding on role 6460973?", "What is my current learning sequence?"
5. This is the closest equivalent to Claude Code's memory system — persistent, queryable, no re-pasting.

**Deep Research (for new role research):**
- Before evaluating a new role, use Gemini Deep Research to pull current information on the company, team size, tech stack, Glassdoor feedback, recent news
- Then run oracle-scales with richer evidence

---

### Microsoft Copilot Enterprise (VS Code)

**Best for:** React code work, understanding the BofA codebase once onboarded, writing components, debugging.

**Key advantage:** `@workspace` reads all files open in VS Code without copy-pasting. Open the relevant files and they become context automatically.

**Session workflow:**
1. Open the repo in VS Code
2. Open the files you need: session log, opportunity evaluation, skill guide
3. Open Copilot Chat (sidebar)
4. Start: `@workspace I'm resuming from conversations/2026-08-24-session-02.md. Read that file and tell me what the open action items are.`

**For react-sensei sessions:**
```
1. Open skills/react-sensei-guide.md in VS Code
2. In Copilot Chat:
   "@workspace Read the open file react-sensei-guide.md.
    You are now react-sensei. Apply its rules to everything I ask about React.
    Do not write components for me unless I say one of the unlock phrases
    listed in the guide."
3. Copilot follows this for the session — re-paste at the start of each new session.
```

**For oracle assessments:**
```
1. Open skills/oracle-scales.md in VS Code
2. In Copilot Chat:
   "@workspace Read oracle-scales.md.
    Apply its detached judgment methodology to the following role evaluation."
3. Paste the JD or opportunity file.
```

**Limitation:** No memory across sessions. Re-open the same files and re-issue the instruction each time. `@workspace` reduces the friction significantly.

---

### Perplexity Pro (Personal)

**Best for:** Research — React patterns, TypeScript docs, library comparisons, company research before interviews.

**Key advantage:** Web search synthesis — pulls current documentation, not training-data snapshots. Better than asking any AI from memory for library-specific questions.

**Session workflow — React/TypeScript research:**
```
Just ask directly. Examples:
"How do you type a React.ChangeEvent<HTMLInputElement> in TypeScript?"
"What is the difference between React.FC and function declaration for typed components?"
"How does Webpack 5 Module Federation work — explain for someone new to micro-frontends"
```
Perplexity searches current docs and synthesizes. Use this instead of relying on any AI's training data for library-specific questions.

**Session workflow — new role evaluation:**
1. Upload `memory/user_kilima_background.md` and the opportunity evaluation template as files
2. Upload the job description (as text or file)
3. Prompt: *"Using the scoring framework in the evaluation template, score this role against my background. Apply the 10-dimension framework and Hard Rules check."*

**Session workflow — oracle assessment:**
```
1. Copy-paste the oracle-scales SKILL.md Steps 1–7 section (may need to trim — Perplexity has a shorter context than Gemini)
2. Paste user_kilima_background.md (summary version — first 30 lines)
3. Paste the JD
4. Say: "Apply the oracle methodology above. Run all steps."
```
Note: Perplexity's context is shorter than Gemini's. If the methodology + background + JD is too long, use Gemini instead.

**Choose Claude Sonnet when available** in the model picker — closest behavior to what was used to build this system.

---

### Claude.ai Web (if subscription retained without Code)

**Best for:** Everything in this project — closest to the current workflow. Only loses file system access.

Skills work identically — paste the full SKILL.md content at the start of any chat and it activates as designed. The oracle methodology, react-sensei teaching mechanic, and oracle-weave artifact generation all work in the web interface.

**Session workflow:**
```
1. Open claude.ai
2. Paste context restoration block (see above) with file contents filled in
3. If using react-sensei: paste skills/react-sensei.md in full before starting
4. If running oracle: paste skills/oracle-scales.md in full before starting
5. Work as normal — just manually create or copy files when the AI produces them
```

**Only gap:** When Claude suggests creating or editing a file, you copy the output and paste it into VS Code yourself. Everything else is identical.

---

## Platform Selection — Quick Reference

| I want to... | Use |
|-------------|-----|
| Write and debug React code in VS Code | Copilot Enterprise (`@workspace`) |
| Evaluate a new role with oracle methodology | Gemini Enterprise (full context fits) |
| Research a company before an interview | Perplexity Pro (web search) + Gemini Deep Research |
| Look up a React or TypeScript pattern | Perplexity Pro (current docs) |
| Run a react-sensei learning session | Copilot Enterprise (code-adjacent, paste guide) |
| Restore full session context | Gemini Enterprise (1M window, paste everything) |
| Query past decisions across all sessions | NotebookLM (if available — persistent knowledge base) |
| Generate an HTML artifact (dashboard, report) | Gemini Enterprise or Claude.ai web |
| Oracle-assess a skill or tool | Gemini Enterprise (paste full methodology) |

---

## The Methodology Is in the Files

The single most important thing to understand about this transition:

**The AI is a tool. The methodology is in the Markdown files.**

- The 10-dimension scoring framework is in every opportunity evaluation file
- The oracle-scales methodology is in `skills/oracle-scales.md`
- The react-sensei teaching mechanic is in `skills/react-sensei.md`
- The session context is in `conversations/`
- The profile is in `memory/user_kilima_background.md`

Any AI that can read those files can continue this work. The platform matters less than having the files, having them in GitHub, and knowing which ones to paste first.

As long as the repo is current on GitHub, nothing is lost.
