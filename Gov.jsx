import Section from "../components/Section"
import Card from "../components/Card"
import KPI from "../components/KPI"
import PieChart from "../components/PieChart"
import Table from "../components/Table"

import { govRequirements } from "../data/govRequirements"
import { C } from "../theme"

export default function Gov() {
  const complete = govRequirements.filter((d) => d.status === "complete").length
  const inProgress = govRequirements.filter((d) => d.status === "in-progress").length
  const good = govRequirements.filter((d) => d.status === "good").length

  const readinessScore = Math.round(
    (complete * 1 + inProgress * 0.6 + good * 0.8) /
      govRequirements.length *
      100
  )

  const pieData = [
    { label: "Complete", value: complete, color: C.green },
    { label: "In Progress", value: inProgress, color: C.gold },
    { label: "Good", value: good, color: C.accent },
  ]

  return (
    <Section title="Government Readiness" subtitle="Federal compliance, registrations, and contracting readiness">
      {/* KPIs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          marginBottom: 30,
        }}
      >
        <KPI
          label="Readiness Score"
          value={`${readinessScore}%`}
          color={readinessScore > 85 ? C.green : C.gold}
        />

        <KPI
          label="Complete"
          value={complete}
          color={C.green}
        />

        <KPI
          label="In Progress"
          value={inProgress}
          color={C.gold}
        />

        <KPI
          label="Good Standing"
          value={good}
          color={C.accent}
        />
      </div>

      {/* Pie Chart */}
      <Card title="Gov Requirement Status Mix">
        <PieChart
          data={pieData}
          centerLabel="Score"
          centerValue={`${readinessScore}%`}
        />
      </Card>

      {/* Gov Requirements Table */}
      <Card title="Government Requirements Checklist">
        <Table
          columns={[
            { label: "Requirement", key: "label" },
            { label: "Status", key: "status" },
            { label: "Pct", key: "pct", right: true },
          ]}
          rows={govRequirements.map((d) => ({
            ...d,
            pct: `${d.pct}%`,
          }))}
          cellStyle={(row) => ({
            color:
              row.status === "complete"
                ? C.green
                : row.status === "in-progress"
                ? C.gold
                : C.accent,
          })}
        />
      </Card>

      {/* Gov Alerts */}
      <Card title="Gov Readiness Alerts">
        <ul style={{ margin: 0, paddingLeft: 18, color: C.text }}>
          <li>Capability statement requires update for FY26</li>
          <li>Past performance documentation incomplete</li>
          <li>DOT safety score trending below federal benchmark</li>
        </ul>
      </Card>

      {/* Notes */}
      <Card title="Federal Contracting Notes">
        <ul style={{ margin: 0, paddingLeft: 18, color: C.text }}>
          <li>SAM.gov registration active</li>
          <li>UEI and CAGE code verified</li>
          <li>Insurance requirements fully met</li>
        </ul>
      </Card>
    </Section>
  )
}
