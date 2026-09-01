// ---------------------------------------------------------------------------
// types.ts — shared TypeScript types used across components.
// Keeping types in one place is a reusability pattern: every component that
// deals with a "Task" or a "Kpi" imports the SAME shape from here.
// ---------------------------------------------------------------------------

/** A single to-do item shown in the Task Board. */
export interface Task {
  id: number;
  text: string;
  done: boolean;
}

/** A single KPI metric shown as a card in the Dashboard. */
export interface Kpi {
  id: string;
  label: string;      // e.g. "Open Tasks"
  value: string;      // e.g. "12"  (string so we can show "94%", "$1.2k", etc.)
  delta: number;      // percentage change vs. last period; sign drives the color
  icon: string;       // an emoji so we need zero icon libraries
}
