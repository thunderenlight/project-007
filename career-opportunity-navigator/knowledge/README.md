# knowledge/

## Purpose
Reference documents the agent uses as background context — market intelligence, target role definitions, technology overviews, and company research.

## Why This Exists
AI agents perform better with access to specific, relevant reference material rather than relying solely on training data. In production RAG systems, this directory would be indexed into a vector store and retrieved semantically. For now, it is a curated reference library.

## Industry Parallel
This is the "knowledge base" in enterprise AI products. Think of it as the company handbook that the AI reads before answering employee questions. The quality of the knowledge base directly affects the quality of the agent's recommendations.

## Recommended Files to Create

| File | Description |
|------|-------------|
| `target-roles.md` | Detailed breakdown of target role requirements, typical responsibilities, and salary bands |
| `market-landscape.md` | AI and cloud job market trends, most in-demand skills, salary benchmarks |
| `accenture-ai-landscape.md` | Internal AI initiatives, teams, and opportunities at Accenture |
| `technology-primers/` | Quick-reference overviews of each technology on the target stack |
| `companies/` | Research on companies to target for Tier 1 roles |

## How to Use It
When you research a company or a role type, document your findings here. When the agent evaluates an opportunity from that company, it can reference this knowledge to give better-calibrated recommendations.

## Evolution Path
Phase 1: Manual files (this README)
Phase 7: Indexed into a vector store for semantic retrieval (RAG-powered agent)
