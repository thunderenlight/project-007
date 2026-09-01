// ---------------------------------------------------------------------------
// AddTaskForm.tsx — a reusable INPUT component with LOCAL state.
// It owns the text being typed (useState), but it does NOT own the task list.
// When the user submits, it "lifts" the value up to the parent via the
// onAdd callback prop. This "state down, events up" pattern is fundamental.
// ---------------------------------------------------------------------------
import { useState } from "react";

interface AddTaskFormProps {
  onAdd: (text: string) => void;   // parent decides what to do with the text
}

export default function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [draft, setDraft] = useState("");

  const submit = () => {
    const text = draft.trim();
    if (!text) return;
    onAdd(text);   // hand the value to the parent
    setDraft("");  // clear our own local input
  };

  return (
    <div className="row">
      <input
        value={draft}
        placeholder="What needs doing?"
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button onClick={submit}>Add</button>
    </div>
  );
}
