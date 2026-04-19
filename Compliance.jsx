import Section from "../components/Section"
import Card from "../components/Card"
import KPI from "../components/KPI"
import PieChart from "../components/PieChart"
import Table from "../components/Table"

import { complianceItems } from "../data/compliance"
import { C } from "../theme"

export default function Compliance() {
  const pass = complianceItems.filter((d) => d.status === "pass").length
  const warning = complianceItems.filter((d) => d.status === "warning").length
  const fail = complianceItems.filter((d) => d.status === "fail").length

  const score = Math.round(
    (pass * 1 + warning * 0.6 + fail * 0.2) /
      complianceItems.length *
      100
  )

  const pieData = [
    { label: "Pass", value: pass, color: C.green },
    { label: "Warning", value: warning, color: C.gold },
    { label: "Fail", value: fail, color: C.red },
  ]

  return (
    <Section title="Compliance" subtitle="Safety, documentation, and operational compliance readiness">
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
          label="Compliance Score"
          value={`${score}%`}
          color={score > 85 ? C.green : C.gold}
        />

        <KPI label="Pass" value={pass} color={C.green} />
        <KPI label="Warnings" value={warning} color={C.gold} />
        <KPI label="Fails" value={fail} color={C.red} />
      </div>

      {/* Pie Chart */}
      <Card title="Compliance Status Mix">
        <PieChart
          data={pieData}
          centerLabel="Score"
          centerValue={`${score}%`}
        />
      </Card>

      {/* Compliance Table */}
      <Card title="Compliance Checklist">
        <Table
          columns={[
            { label: "Item", key: "label" },
            { label: "Status", key: "status" },
            { label: "Pct", key: "pct", right: true },
          ]}
          rows={complianceItems.map((d) => ({
            ...d,
            pct: `${d.pct}%`,
          }))}
          cellStyle={(row) => ({
            color:
              row.status === "pass"
                ? C.green
                : row.status === "warning"
                ? C.gold
                : C.red,
          })}
        />
      </Card>

      {/* Compliance Alerts */}
      <Card title="Compliance Alerts">
        <ul style={{ margin: 0, paddingLeft: 18, color: C.text }}>
          <li>Two items require immediate corrective action</li>
          <li>Annual safety audit scheduled for next month</li>
          <li>Driver documentation updates pending</li>
        </ul>
      </Card>

      {/* Audit Notes */}
      <Card title="Audit Notes">
        <ul style={{ margin: 0, paddingLeft: 18, color: C.text }}>
          <li>FMCSA documentation up to date</li>
          <li>Insurance certificates verified</li>
          <li>Safety training logs complete</li>
        </ul>
      </Card>
    </Section>
  )
}
