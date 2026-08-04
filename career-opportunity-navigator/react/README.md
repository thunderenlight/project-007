# react/

## Purpose
React and TypeScript learning notes, component patterns, project architecture decisions, and UI references.

## Why This Exists
React has a large surface area. Without organized notes, you will re-learn the same patterns repeatedly. This directory is your personal React pattern library — built as you encounter real problems in real projects.

## Industry Parallel
Front-end teams maintain component libraries and design system documentation. Some companies publish these publicly (Airbnb, Spotify, Shopify). This is your lightweight equivalent — patterns that work, documented by you.

## Recommended Structure

```
react/
├── fundamentals/
│   ├── components.md          ← Component composition patterns
│   ├── hooks.md               ← useState, useEffect, useContext, custom hooks
│   └── state-management.md    ← Local state vs. Context vs. external stores
├── typescript/
│   ├── react-typescript.md    ← Typing components, props, events, hooks
│   └── interfaces.md          ← Common interface patterns for this project
├── patterns/
│   ├── data-fetching.md       ← fetch, Axios, loading states, error handling
│   ├── forms.md               ← Controlled inputs, validation, submission
│   └── routing.md             ← React Router patterns
├── nextjs/
│   └── app-router.md          ← Next.js App Router patterns
└── projects/
    └── career-navigator-ui/   ← Component architecture for this project's UI
```

## Start Here
When you begin Track 2 (React + TypeScript) from LEARNING_ROADMAP.md, create `fundamentals/components.md`. Document each React concept with a short code example as you learn it. Your own examples stick better than documentation you copied.

## Key Mental Model for React

```
App
├── EvaluationForm (takes user input)
│   ├── DescriptionTextarea (controlled input)
│   └── SubmitButton (triggers API call)
│
├── ScoreDashboard (displays evaluation results)
│   ├── ScoreTable (10 dimensions)
│   ├── RadarChart (visual score summary)
│   └── Recommendation (colored badge)
│
└── LearningTracker (progress visualization)
    ├── TrackList (8 tracks)
    └── ProgressBar per track
```

Each box above is a React component. Build them one at a time.
