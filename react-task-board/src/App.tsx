// ---------------------------------------------------------------------------
// App.tsx — the ROOT component. It just COMPOSES the two big sections.
// Read this file first, then follow the imports downward:
//   App → Dashboard → KpiCard → Card
//   App → TaskBoard → AddTaskForm / TaskItem → Card
// That import tree IS the component hierarchy.
// ---------------------------------------------------------------------------
import Dashboard from "./components/Dashboard";
import TaskBoard from "./components/TaskBoard";
import { KPIS } from "./data/kpis";

export default function App() {
  return (
    <div className="wrap">
      <header>
        <h1>🗂️ Task Board</h1>
        <p className="sub">
          Vite + React 19 + TypeScript — reusable components, no backend, no DB.
        </p>
      </header>

      {/* Dashboard is DATA-DRIVEN: we feed it the KPIS array as a prop. */}
      <Dashboard kpis={KPIS} />

      {/* TaskBoard manages its own state internally. */}
      <TaskBoard />
    </div>
  );
}
