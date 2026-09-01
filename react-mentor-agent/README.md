# React Mentor & Builder — an adaptive teaching agent 🧑‍🏫

Not just an app-builder — an **agent that teaches React and builds it with the learner**,
adjusting depth and difficulty to their progress. Built on the reusable-component patterns
from the Dashboard + Task Board project (Card → KpiCard/TaskItem → data-driven → hooks).

## What makes it a *teacher*, not a generator
- **Explains at the learner's level** — same concept, three depths (ELI5 → Standard → Deep),
  chosen automatically from the learner's level.
- **Builds to *see* it** — scaffolds a self-contained, runnable preview (no build/CDN, works
  anywhere) **plus** the real React `.jsx` to study side-by-side.
- **Challenges, not answers** — each concept ends with a starter + "done" checklist; the
  solution is withheld until asked twice.
- **Adapts to progress** — two wins in a row → level up + harder framing; two misses → level
  down + simpler re-explanation. Mastery is tracked per concept (0–100).
- **Recommends the next step** — unlocks concepts only when prerequisites are mastered.

## Two parts

### 1. The agent brain (deployable) — `agent/SYSTEM_PROMPT.md`
Drop this into Copilot, Claude, or Amethyst Studio to get the teaching persona, the
response shape (Hook → Explain → Show → Do → Check), the adaptivity rules, and guardrails.
`agent/curriculum.json` is the machine-readable skill tree (concepts, tiers, examples, challenges).

### 2. The working engine (runnable now) — `src/`
A dependency-free Node CLI that *demonstrates* the agent behavior locally.

```bash
node src/mentor.js map                 # see the whole skill tree
node src/mentor.js assess 2            # placement: set starting level (0-5)
node src/mentor.js next                # what to learn next
node src/mentor.js learn usestate      # explained at YOUR level + example + challenge
node src/mentor.js scaffold usestate   # generate a live preview + real .jsx to study
node src/mentor.js submit usestate pass# record result -> agent adapts difficulty
node src/mentor.js status              # progress dashboard with mastery bars
```

Try the guided tour:
```bash
bash demo.sh
```

## How adaptivity works (the model)
- `mastery[concept]`: +35 on pass, −15 on miss (0–100). ≥80 = mastered → unlocks dependents.
- `streak`: 2 consecutive passes ⇒ **level +1**; 2 consecutive misses ⇒ **level −1**.
- `tierFor(level)`: 0–1 → ELI5, 2–3 → Standard, 4–5 → Deep.
- `recommendNext`: the unlocked, not-yet-mastered concept closest to the learner's level.

State persists in `.learner-profile.json` (git-ignored).

## Curriculum spine (compounding, anchored on one project)
Components → Props → Children/Composition → Lists & Keys → useState → Events/Forms →
Lifting State → Data-Driven UI → Derived/Conditional → useEffect → localStorage Persistence
→ Custom Hooks. Every concept references the **Card / KpiCard / TaskItem** patterns so ideas
build on each other instead of resetting.

## Files
```
react-mentor-agent/
├─ agent/
│  ├─ SYSTEM_PROMPT.md     # the deployable teaching persona + rules
│  └─ curriculum.json      # skill tree: concepts, tiers, examples, challenges
├─ src/
│  ├─ mentor.js            # CLI agent (status/next/learn/scaffold/submit/…)
│  ├─ curriculum.js        # loads + queries the tree; unlock + recommend logic
│  ├─ profile.js           # learner memory + mastery model + adaptivity
│  └─ scaffolder.js        # generates runnable previews + real .jsx per concept
├─ workspace/              # generated examples land here (per concept)
├─ demo.sh                 # 60-second scripted tour
└─ package.json
```

## Extend it
- Add a concept: append to `agent/curriculum.json` (id, level, prereqs, tiered explain,
  example, challenge) and, optionally, a preview in `scaffolder.js`'s `PREVIEWS`.
- Wire the brain to a real LLM: feed `SYSTEM_PROMPT.md` + the learner profile + the target
  `concept` object as context, and let the model teach conversationally while the engine
  tracks mastery.
- Frontend-only by design — no backend, no DB.
