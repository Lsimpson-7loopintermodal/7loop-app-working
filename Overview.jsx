import Section from "../components/Section"
import Card from "../components/Card"
import KPI from "../components/KPI"
import Trend from "../components/Trend"
import BarChart from "../components/BarChart"
import LineChart from "../components/LineChart"
import PieChart from "../components/PieChart"
import Table from "../components/Table"

import { revenue } from "../data/revenue"
import { loads } from "../data/loads"
import { fuel } from "../data/fuel"
import { outreach } from "../data/outreach"
import { servicesMix } from "../data/servicesMix"
import { arData, arTotal, arCritical } from "../data/ar"
import { pipelineData, pipTotal } from "../data/pipeline"
import { complianceItems } from "../data/compliance"
import { govRequirements } from "../data/govRequirements"
import { C } from "../theme"

export default function Overview() {
  return (
    <Section title="Overview" subtitle="Company-wide performance snapshot">
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
          label="Revenue (8w)"
          value={`$${revenue.reduce((s, d) => s + d.value, 0).toLocaleString()}`}
          right={<Trend value="+4.2%" up={true} />}
        />

        <KPI
          label="Loads (8w)"
          value={loads.reduce((s, d) => s + d.value, 0)}
          right={<Trend value="+3.1%" up={true} />}
        />

        <KPI
          label="Fuel Spend (8w)"
          value={`$${fuel.reduce((s, d) => s + d.value, 0).toLocaleString()}`}
          color={C.red}
          right={<Trend value="-2.8%" up={false} />}
        />

        <KPI
          label="Outreach (8w)"
          value={outreach.reduce((s, d) => s + d.value, 0)}
          right={<Trend value="+12%" up={true} />}
        />

        <KPI
          label="AR Outstanding"
          value={`$${arTotal.toLocaleString()}`}
          color={arCritical > 0 ? C.red : C.green}
        />

        <KPI
          label="Pipeline Value"
          value={`$${pipTotal.toLocaleString()}`}
          right={<Trend value="+6.4%" up={true} />}
        />

        <KPI
          label="Compliance Score"
          value="92%"
          color={C.green}
        />

        <KPI
          label="Gov Readiness"
          value="88%"
          color={C.accent}
        />
      </div>

      {/* Revenue Trend */}
      <Card title="Revenue Trend (8 Weeks)">
        <LineChart data={revenue} xKey="w" yKey="value" color={C.accent} />
      </Card>

      {/* Load Volume */}
      <Card title="Load Volume (8 Weeks)">
        <BarChart data={loads} xKey="w" yKey="value" color={C.green} />
      </Card>

      {/* Outreach Activity */}
      <Card title="Outreach Activity (8 Weeks)">
        <BarChart data={outreach} xKey="w" yKey="value" color={C.gold} />
      </Card>

      {/* Service Mix */}
      <Card title="Service Mix">
        <PieChart
          data={servicesMix}
          centerLabel="Total"
          centerValue={`${servicesMix.reduce((s, d) => s + d.value, 0)}%`}
        />
      </Card>

      {/* AR Table */}
      <Card title="Accounts Receivable">
        <Table
          columns={[
            { label: "Customer", key: "name" },
            { label: "Amount", key: "amount", right: true },
            { label: "Days", key: "days", right: true },
          ]}
          rows={arData.map((d) => ({
            ...d,
            amount: `$${d.amount.toLocaleString()}`,
          }))}
          cellStyle={(row) => ({
            color: row.status === "critical" ? C.red : C.text,
          })}
        />
      </Card>

      {/* Pipeline Table */}
      <Card title="Sales Pipeline">
        <Table
          columns={[
            { label: "Name", key: "name" },
            { label: "Type", key: "type" },
            { label: "Lane", key: "lane" },
            { label: "Stage", key: "stage" },
            { label: "Value", key: "value", right: true },
          ]}
          rows={pipelineData.map((d) => ({
            ...d,
            value: `$${d.value.toLocaleString()}`,
          }))}
        />
      </Card>

      {/* Compliance */}
      <Card title="Compliance Summary">
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

      {/* Gov Readiness */}
      <Card title="Gov Readiness">
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
    </Section>
  )
}
