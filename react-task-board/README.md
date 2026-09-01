# React Task Board — Dashboard + Reusable Components (Learning Edition)

A pure **frontend** React app (no backend, no database) built to teach
**components and reusable elements**. It has two sections:

- **Dashboard** — a grid of reusable **KPI cards**
- **Task Board** — add / check-off / delete tasks

---

## Two ways to see it

### 1. Instant preview (no install, renders anywhere)
Open **`standalone.html`** — a single self-contained file (no CDN, no internet,
no build). It uses plain-JS "component functions" that mirror the React
components 1:1, so you can *see* the UI immediately.

### 2. The real thing in VS Code (recommended for learning)
```bash
npm install
npm run dev      # http://localhost:5173 (opens automatically)
```
Then open the folder in VS Code and read the files in this order 👇

---

## Read the code in this order (the component hierarchy)

```
src/App.tsx                    ← start here: composes the 2 sections
│
├─ src/data/kpis.ts            ← mock DATA (kept separate from UI)
│
├─ src/components/Dashboard.tsx← maps KPI data → a grid of KpiCards
│   └─ KpiCard.tsx             ← ONE reusable metric tile (all via props)
│        └─ Card.tsx           ← the generic reusable container (children)
│
└─ src/components/TaskBoard.tsx← owns task state; composes the pieces below
    ├─ AddTaskForm.tsx         ← input with LOCAL state; "lifts" value up
    ├─ TaskItem.tsx            ← ONE reusable task row
    └─ Card.tsx                ← reused again here
```

`src/types.ts` holds shared `Task` and `Kpi` types used everywhere.

---

## The 4 reuse lessons to notice

1. **`Card` is used by KpiCard, the task list, and the form.** Write the box
   once, reuse it everywhere (composition via the `children` prop).
2. **`KpiCard` and `TaskItem` are rendered in loops** (`.map`). One component
   definition → many instances. Add data, not markup.
3. **Data lives in `data/kpis.ts`, not in components.** Swap it for an API
   later and the UI doesn't change.
4. **"State down, events up".** `TaskBoard` owns the list; children receive
   data as props and report actions back through callback props
   (`onAdd`, `onToggle`, `onRemove`).

### Try it yourself
- Add a 5th object to `KPIS` in `src/data/kpis.ts` → a new card appears, no UI edits.
- Change a KPI's `delta` to negative → the arrow/colour flips (see `KpiCard.tsx`).

---

## Commands
```bash
npm run dev      # dev server with hot reload
npm run build    # type-check (tsc) + production build to /dist
npm run preview  # serve the built app
```

## Stack
Vite 6 · React 19 · TypeScript 5 · plain CSS. Frontend only — no server, no DB.
