# memory/

## Purpose
Stores the agent's long-term memory — preference updates, opportunity history, and weekly reflection logs.

## Why This Exists
AI agents improve when they learn from past interactions. This directory is the file-system version of what, in a production AI system, would be a database with structured records. Starting with files lets you understand the data schema before adding infrastructure.

## Industry Parallel
Production AI products use user preference databases, behavioral logs, and event stores. This directory is the conceptual equivalent — the difference is just the storage layer (file vs. DynamoDB table vs. vector store).

## Files to Create Here

| File | When to Create | Contents |
|------|---------------|----------|
| `preference-log.json` | Phase 3 | Timestamped log of every preference update |
| `opportunity-history.json` | Phase 3 | All evaluated opportunities in structured format |
| `reflection-log.md` | After first weekly reflection | One entry per week, chronological |
| `session-notes.md` | Anytime | Key observations from Claude Code sessions |

## Schema Preview (Phase 3)
Each preference update will look like:
```json
{
  "date": "YYYY-MM-DD",
  "source": "weekly_reflection",
  "observation": "Enjoyed API work more than governance",
  "category": "energizer",
  "impact": "Reinforces engineering proximity priority"
}
```

## Evolution Path
Phase 1: Empty (this README)
Phase 3: JSON files (structured records)
Phase 6: Migrates to DynamoDB (same schema, different storage)
