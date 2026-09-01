// ---------------------------------------------------------------------------
// TaskBoard.tsx — a CONTAINER that composes smaller components together.
// It owns the task list state and passes data DOWN + callbacks so children
// (AddTaskForm, TaskItem) can send events UP. Compare how little markup lives
// here — it delegates to reusable pieces.
// ---------------------------------------------------------------------------
import { useState } from "react";
import type { Task } from "../types";
import Card from "./Card";
import AddTaskForm from "./AddTaskForm";
import TaskItem from "./TaskItem";

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Open this folder in VS Code", done: true },
    { id: 2, text: "Read the comments in each component", done: false },
    { id: 3, text: "Add a new KPI in src/data/kpis.ts", done: false },
  ]);

  // --- The three "actions" the parent owns and passes down as callbacks ---
  const add = (text: string) =>
    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }]);

  const toggle = (id: number) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const remove = (id: number) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const remaining = tasks.filter((t) => !t.done).length;

  return (
    <section>
      <h2 className="section-title">Task Board</h2>
      <Card>
        <AddTaskForm onAdd={add} />

        {tasks.length === 0 ? (
          <div className="empty">Nothing here yet — add your first task ✨</div>
        ) : (
          <ul>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggle}
                onRemove={remove}
              />
            ))}
          </ul>
        )}

        <div className="stats">
          {remaining} of {tasks.length} remaining
        </div>
      </Card>
    </section>
  );
}
