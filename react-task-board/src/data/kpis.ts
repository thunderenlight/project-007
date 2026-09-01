// ---------------------------------------------------------------------------
// data/kpis.ts — mock data.
// Separating DATA from COMPONENTS is a key learning point: the Dashboard
// component doesn't hard-code any numbers — it just maps over this array.
// Swap this file for a real API call later and NOTHING in the UI changes.
// ---------------------------------------------------------------------------
import type { Kpi } from "../types";

export const KPIS: Kpi[] = [
  { id: "total",     label: "Total Tasks",   value: "24",   delta: 8,   icon: "📋" },
  { id: "open",      label: "Open Tasks",    value: "9",    delta: -12, icon: "🟡" },
  { id: "done",      label: "Completed",     value: "15",   delta: 20,  icon: "✅" },
  { id: "rate",      label: "Completion",    value: "62%",  delta: 5,   icon: "📈" },
];
