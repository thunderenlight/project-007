# Claude Code Build Prompt — Settlement Ops Practice Dashboard


## Where to Build This

**Create a new standalone git repo** — do not build inside the career navigator repo.

```bash
mkdir ~/Sites/AI/settlement-ops-dashboard
cd ~/Sites/AI/settlement-ops-dashboard
git init
```

This project is a portfolio artifact and should be its own public GitHub repo, deployable independently to Vercel (frontend) or Railway (full stack with the API).

**Use Claude Code (Sonnet) for most phases.** Switch to Opus (`/fast` in Claude Code, or start a session with opus) for Phase 1 (SQL architecture decisions) and Phase 6 (architectural reflection). The complexity of keyset pagination design and the micro-frontend analysis benefits from the deeper reasoning.

---

## Project Goal

Build a small but realistic **React admin dashboard practice project** that mirrors an enterprise "Ops Workbench" settlements dashboard. The purpose is skill-building for a real project that uses React, SQL Server (on-prem, not cloud/DynamoDB), and Cypress for TDD-style testing. Prioritize correctness, clean component architecture, and testability over visual polish.

Build this incrementally in phases (defined below). After each phase, pause, summarize what was built, and wait for confirmation before continuing to the next phase.

---

## Tech Stack

### Frontend
- **React 18+**, TypeScript (strict mode), Vite
- **React Router v6** (Data Mode — `createBrowserRouter`)
- **Tailwind CSS** for styling
- **tailwind-merge + clsx** for conditional class composition (required for badge/status variant components)
- **Recharts** for charts
- **TanStack Query v5 (React Query)** for all server state — no manual `useEffect` fetch loops. Use `useQuery` for single-page data, `useInfiniteQuery` for cursor-based pagination.
- **date-fns** for date formatting

### Backend / API
- **Node.js + Express** REST API
- **better-sqlite3** (synchronous SQLite driver — simpler than async drivers for this practice project). Write all SQL in SQL Server–compatible syntax (`OFFSET/FETCH`, keyset `WHERE` tuple comparisons, `TOP`). Add a comment anywhere the syntax would differ in real SQL Server.
- **Zod** for API input validation — parse and type all query params with a Zod schema before they reach the query layer

### Testing
- **Cypress** for component tests (Phase 3) and E2E tests (Phase 5)
- **Vitest** for pure unit tests — query builder functions, formatters, Zod schemas. Vitest runs in the same Vite pipeline and is faster than Jest for this setup.

### Data
- **@faker-js/faker** seed script producing ~50,000 `SettlementWorkItems` rows with realistic skewed distributions (most P2–P4, some P1; most Settled/Matched, some Failed)

---

## Domain Model

Table: `SettlementWorkItems`

| Column | Type | Notes |
|---|---|---|
| `WorkItemId` | string, PK | e.g., `WI-1001` |
| `Title` | string | e.g., "Pair-offs/Nettings" |
| `Description` | string | |
| `Priority` | enum: P1, P2, P3, P4 | |
| `Status` | enum: Available, Claimed, Snoozed, Resolved | |
| `SettlementStatus` | enum: Failed, Pending, Matched, Settled | |
| `Market` | string | US, UK, Singapore |
| `RootCause` | enum: SystemDefined, ClientDefined, CounterpartyDefined | |
| `Owner` | string, nullable | |
| `RiskOwner` | string, nullable | |
| `SettlementDate` | date | |
| `Amount` | decimal | for currency KPI examples |
| `CreatedAt` | datetime | |

---

## Phase 1 — SQL Layer & Pagination

1. Create the schema and seed script (~50,000 rows).
2. Write and comment two query implementations in a `queries/` folder:
   - `getWorkItemsOffset(pageNumber, pageSize, filters)` — `ORDER BY ... OFFSET ... FETCH NEXT ... ROWS ONLY`
   - `getWorkItemsKeyset(cursor, pageSize, filters)` — composite indexed key comparison: `WHERE (SettlementDate, WorkItemId) < (@lastDate, @lastId)`
3. Add a composite index matching the keyset sort order.
4. Write a benchmarking script (`scripts/benchmark.ts`) that times both approaches at page 1, page 100, and the last page, printing actual millisecond timings to the console. The performance gap must be visible in the output — not just described.
5. Write `PAGINATION.md` explaining:
   - Why keyset avoids the duplicate/skip problem under concurrent writes
   - When offset pagination is still acceptable (small tables, requirement for exact page numbers in the UI)
   - The actual benchmark numbers from step 4 (fill these in after running the script)

Write Vitest unit tests for the query builder functions (not the DB calls themselves — test the SQL string construction and parameter binding logic in isolation).

---

## Phase 2 — API Layer

1. `GET /api/work-items` supporting:
   - Query params parsed and validated with a **Zod schema**: `status`, `priority`, `market`, `rootCause`, `q` (text search on Title/Description), `after` (keyset cursor, base64-encoded JSON of `{ date, id }`), `pageSize` (default 50, max 200)
   - Response: `{ items: WorkItem[], nextCursor: string | null, totalMatching: number }`
   - `totalMatching` uses a COUNT query with the same filters — note in a comment that this is expensive at scale and would be omitted or cached in production
2. `GET /api/kpis` returning: Failed Settlements (count), Failed Settlement Rate (%), Pending DVP (count), Average Age of Fails (days), High-Priority Open Items (count P1+P2 where Status != Resolved)
3. `POST /api/work-items/claim` and `POST /api/work-items/snooze` — accept `{ ids: string[] }`, update status, return updated items
4. Separate query functions from route handlers — query functions are pure (take a db instance + params, return data). Route handlers only parse input (Zod), call query functions, and serialize output. Write Vitest unit tests against the query functions directly.

---

## Phase 3 — Component Library (Cypress TDD-first)

**Rule:** Write the Cypress component test before implementing the component. The test file must exist and describe expected behavior before the implementation file is created.

**Cypress selector rule (applies to every component):** All interactive elements and meaningful rendered outputs must have a `data-testid` attribute. Cypress tests must select exclusively via `cy.get('[data-testid="..."]')` — never by CSS class, tag name, or text content alone. This mirrors enterprise testing standards where class names change during refactors.

Build components in this order:

### 1. `KpiTile`
Props: `label: string`, `value: string | number`, `valueFormat: 'currency' | 'percentage' | 'integer' | 'ratio' | 'duration'`, `variance: number`, `comparisonLabel: string`, `status: 'positive' | 'negative' | 'neutral' | 'critical'`, `onDrillDown: () => void`

Test:
- Renders `data-testid="kpi-tile"`, `data-testid="kpi-value"`, `data-testid="kpi-label"`, `data-testid="kpi-variance"`
- `valueFormat="currency"` renders value with `$` prefix and comma separators
- `valueFormat="percentage"` renders value with `%` suffix
- `valueFormat="ratio"` renders value as `n/m` — both parts present
- `valueFormat="duration"` renders value with a `d` / `h` suffix
- `status="critical"` applies a visually distinct class (test for the `data-testid` presence, not the CSS class name)
- Click on tile calls `onDrillDown` once

### 2. `StatusBadge`
Props: `kind: 'priority' | 'assignment' | 'risk' | 'workflow'`, `value: string`

Use `clsx` + `tailwind-merge` for variant styling — no inline style objects.

Test:
- `data-testid="status-badge"` present
- `kind="priority"` + `value="P1"` renders distinct visual from `value="P4"` (use a `data-variant` attribute set to the computed variant name — test against that attribute, not classes)
- All four `kind` values render without throwing

### 3. `FilterChip`
Props: `label: string`, `onRemove: () => void`

Test:
- `data-testid="filter-chip"` renders the label text
- `data-testid="filter-chip-remove"` button calls `onRemove` on click

### 4. `SearchInput`
Props: `value: string`, `onChange: (value: string) => void`

Debounce: 300ms internally using `useRef` + `setTimeout` — do not use an external debounce library for this; implement it directly so the mechanism is understood.

Test:
- `data-testid="search-input"` present
- Typing three characters in rapid succession fires `onChange` **once**, not three times (use `cy.clock()` and `cy.tick(350)` to control time in the test)
- After debounce window, `onChange` is called with the current input value

### 5. `WorkItemRow`
Props: `item: WorkItem`, `isSelected: boolean`, `onSelect: (id: string) => void`, `onClaim: (id: string) => void`, `onSnooze: (id: string) => void`

Test:
- `data-testid="work-item-row"` renders Priority and Status badges
- `data-testid="work-item-checkbox"` when clicked calls `onSelect` with the item id
- `data-testid="claim-btn"` calls `onClaim` with item id
- `data-testid="snooze-btn"` calls `onSnooze` with item id
- `isSelected=true` applies a selected visual state (test via `data-selected="true"` attribute on the row)

### 6. `WorkItemTable`
Props: `items: WorkItem[]`, `selectedIds: string[]`, `onSelectItem: (id: string) => void`, `onLoadMore: () => void`, `hasMore: boolean`, `isLoading: boolean`

Test:
- Renders one `WorkItemRow` per item
- `data-testid="load-more-btn"` visible when `hasMore=true`, absent when `false`
- `data-testid="loading-state"` visible when `isLoading=true`
- `data-testid="empty-state"` visible when `items` is empty and `isLoading=false`

### 7. `BulkActionMenu`
Props: `selectedCount: number`, `onClaim: () => void`, `onSnooze: () => void`, `onReassign: () => void`

Test:
- `data-testid="bulk-claim"`, `data-testid="bulk-snooze"`, `data-testid="bulk-reassign"` all disabled (aria-disabled) when `selectedCount === 0`
- When `selectedCount > 0`, each button calls its handler on click
- Renders `data-testid="selection-count"` showing the count

---

## Phase 4 — Dashboard Pages & Routing

1. Set up `createBrowserRouter` with routes: `/` (Overview), `/work-items` (Work View), `/risk` (Risk View — placeholder is fine)

2. `OverviewPage`:
   - Uses `useQuery` (TanStack Query) to fetch `/api/kpis`
   - Renders a `KpiTile` row for each KPI
   - Clicking a tile navigates to `/work-items` with matching filter query params pre-applied (e.g., "Failed Settlements" → `/work-items?settlementStatus=Failed`)

3. `WorkViewPage`:
   - Reads all filters from `useSearchParams` — filters live in the URL, not in `useState`. Changing a filter calls `setSearchParams`, which updates the URL and re-triggers the query.
   - Uses `useInfiniteQuery` (TanStack Query) with `getNextPageParam` returning the `nextCursor` from the API response. Pages are appended on "Load more" click — do not replace the list.
   - **Cursor reset rule:** Applying any new filter must clear the cursor back to the first page. Implement this by including the filter params as part of the `queryKey` — TanStack Query resets automatically when the key changes. Write a comment explaining this mechanism.
   - `SearchInput` value is read from and written to `useSearchParams` with the debounce delay.
   - Bulk actions (Claim, Snooze) use TanStack Query `useMutation` with **optimistic updates**:
     - `onMutate`: snapshot current query data, apply optimistic status change to the cache immediately
     - `onError`: roll back to the snapshot
     - `onSettled`: invalidate the query to refetch fresh data
     - Write a comment on the mutation explaining each of the three callbacks

---

## Phase 5 — Cypress End-to-End Tests

Use `cy.intercept()` to assert on network behavior — not just UI state. Every test that cares about a specific request must assert on the request, not only the response.

Write E2E specs:

1. Visiting `/` renders KPI tiles with non-zero values from the seeded data (`data-testid="kpi-value"` content is not "0" or empty)
2. Clicking "Failed Settlements" tile navigates to `/work-items?settlementStatus=Failed` and the table contains only rows whose status badge shows "Failed"
3. Typing in the search input:
   - Assert via `cy.intercept` that the request to `/api/work-items` includes the `q` param
   - Assert it is **not** fired on every keystroke — use `cy.clock()` to verify debounce behavior
4. "Load more" appends a second page:
   - Assert the second request includes an `after` cursor param
   - Assert previously loaded rows are still in the DOM (not replaced)
5. Applying a new filter while on page 2 resets pagination:
   - Load page 2, then change the Priority filter
   - Assert the next request to `/api/work-items` does **not** include an `after` param
6. Selecting two rows and clicking "Claim":
   - Assert `POST /api/work-items/claim` is called with the correct ids
   - Assert both rows update their status badge in the UI without a full page reload
7. A filter combination returning zero results shows `data-testid="empty-state"` — not a blank screen or error

---

## Phase 6 — Shared Library Extract & Retro

### Deliverable 1 — Shared component extraction
Move `KpiTile`, `StatusBadge`, and `FilterChip` into `src/shared/` with a barrel `index.ts` export:
```
src/
  shared/
    KpiTile/
      KpiTile.tsx
      KpiTile.cy.tsx     ← Cypress component test moves here too
      index.ts
    StatusBadge/
    FilterChip/
    index.ts             ← barrel: export * from './KpiTile', etc.
```
Update all imports across the app to use `import { KpiTile } from '@/shared'`.

### Deliverable 2 — NOTES.md
Write a `NOTES.md` covering:
- **Pagination decision:** Why keyset was chosen for the Work Items queue. Include the actual benchmark millisecond numbers from Phase 1.
- **TDD findings:** Which component tests caught something before the implementation was complete (if any). Be specific — "the debounce test caught that onChange was firing on every keystroke before I added the ref" is useful; "tests helped" is not.
- **Shared vs domain-specific boundary:** Explain which components are in `src/shared/` (presentational, no domain knowledge, reusable across features) and which stay domain-specific (WorkItemRow, WorkItemTable, BulkActionMenu — they know about the WorkItem type and the domain verbs). This is the micro-frontend split line: shared goes in the design system package; domain-specific stays in the settlements micro-frontend.
- **What you would add next:** One concrete next step (e.g., "add React Query DevTools", "add MSW for offline development", "add AG Grid to replace the hand-rolled table").

---

## Constraints & Style

- TypeScript strict mode everywhere — `"strict": true` in `tsconfig.json`
- All event handlers explicitly typed — no implicit `any` on `e`. Use `React.ChangeEvent<HTMLInputElement>`, `React.MouseEvent<HTMLButtonElement>`, `React.FormEvent<HTMLFormElement>` as appropriate. This is not optional.
- No component exceeds ~150 lines. Extract subcomponents or custom hooks when it grows past that.
- Prefer deriving values during render over `useEffect` + extra state. Only use `useMemo`/`useCallback` where there is a real reason (memoized child, expensive derivation). Add a comment when you use either explaining why.
- Every component gets a co-located Cypress component test file (`.cy.tsx`) before or alongside its implementation.
- All interactive and meaningful DOM elements have a `data-testid`. Cypress tests select via `data-testid` only.
- Use `clsx` + `tailwind-merge` for all conditional className logic — no template literal class construction.
- Commits should be small and messaged by phase/step: `phase-1: schema and seed script`, `phase-3: KpiTile component + test`, etc.

---

## Start Here

Begin with Phase 1. Output:
1. The schema SQL
2. The seed script
3. Both pagination query implementations with comments
4. The benchmark script structure (populate numbers after running)

Do not begin Phase 2 until I confirm Phase 1 output.
