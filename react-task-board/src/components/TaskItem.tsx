// ---------------------------------------------------------------------------
// TaskItem.tsx — a reusable ROW component.
// Renders ONE task and exposes two callbacks (toggle/remove) so the parent
// stays the single source of truth for the task list. Reused for every row.
// ---------------------------------------------------------------------------
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TaskItem({ task, onToggle, onRemove }: TaskItemProps) {
  return (
    <li className={task.done ? "done" : ""}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button className="del" onClick={() => onRemove(task.id)}>
        ×
      </button>
    </li>
  );
}
