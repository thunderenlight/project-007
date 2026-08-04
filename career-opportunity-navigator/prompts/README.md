# prompts/

## Purpose
Stores prompt engineering experiments, refined prompts, versioned prompt templates, and test cases for the agent's reasoning tasks.

## Why This Exists
Good prompts are engineering artifacts, not afterthoughts. The difference between a prompt that produces a structured 10-dimension evaluation and one that produces a vague paragraph is in the wording. Version-controlling prompts lets you see what improved evaluation quality and why — and reproduce it.

## Industry Parallel
Professional AI teams maintain prompt libraries, A/B test prompt variants, and track prompt performance in tools like LangSmith, PromptLayer, or Braintrust. This is the file-system equivalent. When you reach Phase 7 (LLMOps), these files will feed into a proper prompt management system.

## Recommended Structure

```
prompts/
├── opportunity-evaluator/
│   ├── v1.md              ← First version of the evaluation prompt
│   ├── v2.md              ← Revised after testing on real opportunities
│   └── test-cases.md      ← Input/expected output pairs for testing
├── roadmap-generator/
│   ├── v1.md
│   └── test-cases.md
├── portfolio-recommender/
│   ├── v1.md
│   └── test-cases.md
└── experiments/
    └── notes.md           ← What you tried and what you learned
```

## Prompt Versioning Practice

When you revise a prompt, do not overwrite the old one. Create a new version file (v2.md, v3.md). In each version file, document:
- What changed from the previous version
- Why you changed it (what problem were you solving)
- What improvement you observed

This is how you develop prompt engineering instincts — through deliberate iteration with documented results.

## Test Case Format

```markdown
## Test Case 1

**Input:**
[The opportunity description or question you gave the agent]

**Expected Output:**
[What a good response should contain]

**Actual Output:**
[What the agent actually produced]

**Assessment:** Pass / Partial / Fail

**Notes:**
[What to improve]
```

## Key Insight
The skill files in `skills/` are themselves prompts — they contain instructions that Claude follows. When you improve a skill file, document the change here so you understand what drove the improvement.
