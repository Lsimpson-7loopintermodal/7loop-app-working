import Section from "../components/Section"
import Card from "../components/Card"
import KPI from "../components/KPI"
import Trend from "../components/Trend"
import BarChart from "../components/BarChart"
import PieChart from "../components/PieChart"
import Table from "../components/Table"

import { outreach } from "../data/outreach"
import { pipelineData, pipTotal } from "../data/pipeline"
import { brokerVsDirect } from "../data/brokerVsDirect"
import { C } from "../theme"

export default function Sales() {
  const totalOutreach = outreach.reduce((s, d) => s + d.value, 0)
  const brokerTotal = brokerVsDirect.broker
  const directTotal = brokerVsDirect.direct
  const convRate = Math.round((directTotal / (brokerTotal + directTotal)) * 100)

  return (
    <Section title="Sales & Business Development" subtitle="Pipeline, outreach, and conversion performance">
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
          label="Outreach (8w)"
          value={totalOutreach}
          right={<Trend value="+12%" up={true} />}
        />

        <KPI
          label="Pipeline Value"
          value={`$${pipTotal.toLocaleString()}`}
          right={<Trend value="+6.4%" up={true} />}
        />

        <KPI
          label="Broker %"
          value={`${Math.round((brokerTotal / (brokerTotal + directTotal)) * 100)}%`}
          color={C.gold}
        />

        <KPI
          label="Conversion Rate"
          value={`${convRate}%`}
          color={convRate > 50 ? C.green : C.gold}
        />
      </div>

      {/* Outreach Activity */}
      <Card title="Outreach Activity (8 Weeks)">
        <BarChart data={outreach} xKey="w" yKey="value" color={C.accent} />
      </Card>

      {/* Broker vs Direct */}
      <Card title="Broker vs Direct Mix">
        <PieChart
          data={[
            { label: "Broker", value: brokerTotal, color: C.gold },
            { label: "Direct", value: directTotal, color: C.green },
          ]}
          centerLabel="Total"
          centerValue={brokerTotal + directTotal}
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
          cellStyle={(row) => ({
            color:
              row.stage === "active"
                ? C.green
                : row.stage === "negotiating"
                ? C.gold
                : row.stage === "prospect"
                ? C.accent
                : C.muted,
          })}
        />
      </Card>

      {/* Broker vs Direct Summary */}
      <Card title="Broker vs Direct Summary">
        <Table
          columns={[
            { label: "Category", key: "label" },
            { label: "Value", key: "value", right: true },
          ]}
          rows={[
            { label: "Broker", value: brokerTotal },
            { label: "Direct", value: directTotal },
          ].map((d) => ({
            ...d,
            value: d.value.toLocaleString(),
          }))}
          cellStyle={(row) => ({
            color: row.label === "Broker" ? C.gold : C.green,
          })}
        />
      </Card>
    </Section>
  )
}
