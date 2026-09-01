// ---------------------------------------------------------------------------
// KpiCard.tsx — a REUSABLE presentational component.
// It receives ALL its data through props and renders one metric tile.
// Because it's driven entirely by props, the Dashboard can render four of
// them (or forty) just by looping over data — this is the core lesson.
// ---------------------------------------------------------------------------
import Card from "./Card";
import type { Kpi } from "../types";

// The props are exactly the fields of a Kpi. We reuse the Kpi type here so
// the data file and this component can never drift out of sync.
type KpiCardProps = Kpi;

export default function KpiCard({ label, value, delta, icon }: KpiCardProps) {
  const isUp = delta >= 0;
  return (
    <Card className="kpi">
      <div className="kpi-top">
        <span className="kpi-icon">{icon}</span>
        <span className={`kpi-delta ${isUp ? "up" : "down"}`}>
          {isUp ? "▲" : "▼"} {Math.abs(delta)}%
        </span>
      </div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-label">{label}</div>
    </Card>
  );
}
