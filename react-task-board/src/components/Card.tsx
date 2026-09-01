// ---------------------------------------------------------------------------
// Card.tsx — the most REUSABLE component in the whole app.
// It knows nothing about tasks or KPIs. It's just a styled box that renders
// whatever you put inside it (via the special `children` prop).
//
// This is "composition": KpiCard, the Task list, and the AddTaskForm all wrap
// themselves in <Card> instead of repeating the same border/padding CSS.
// ---------------------------------------------------------------------------
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;   // anything rendered between <Card> ... </Card>
  className?: string;    // optional extra classes for one-off tweaks
}

export default function Card({ children, className = "" }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>;
}
