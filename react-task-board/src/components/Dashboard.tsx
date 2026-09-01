// ---------------------------------------------------------------------------
// Dashboard.tsx — a CONTAINER component.
// Its only job is layout: take a list of KPIs and render a grid of <KpiCard>.
// Notice there is NO copy-pasted markup — one <KpiCard> definition is reused
// for every item via .map(). Add a 5th KPI in data/kpis.ts and it appears
// here automatically. That is the payoff of reusable components.
// ---------------------------------------------------------------------------
import KpiCard from "./KpiCard";
import type { Kpi } from "../types";

interface DashboardProps {
  kpis: Kpi[];
}

export default function Dashboard({ kpis }: DashboardProps) {
  return (
    <section>
      <h2 className="section-title">Dashboard</h2>
      <div className="kpi-grid">
        {kpis.map((kpi) => (
          // `key` helps React track each item efficiently in a list.
          // We spread the whole kpi object as props: {...kpi} === label=.. value=.. etc.
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </div>
    </section>
  );
}
