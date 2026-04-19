import Section from "../components/Section"
import Card from "../components/Card"
import KPI from "../components/KPI"
import Trend from "../components/Trend"
import LineChart from "../components/LineChart"
import PieChart from "../components/PieChart"
import Table from "../components/Table"

import { revenue } from "../data/revenue"
import { fuel } from "../data/fuel"
import { arData, arTotal, arCritical } from "../data/ar"
import { C } from "../theme"

export default function Finance() {
  const totalRevenue = revenue.reduce((s, d) => s + d.value, 0)
  const totalFuel = fuel.reduce((s, d) => s + d.value, 0)

  // Simple margin estimate (Revenue - Fuel) / Revenue
  const margin = Math.round(((totalRevenue - totalFuel) / totalRevenue) * 100)

  // AR aging buckets
  const aging = [
    {
      label: "0-30",
      value: arData.filter((d) => d.days <= 30).reduce((s, d) => s + d.amount, 0),
      color: C.green,
    },
    {
      label: "31-60",
      value: arData.filter((d) => d.days > 30 && d.days <= 60).reduce((s, d) => s + d.amount, 0),
      color: C.accent,
    },
    {
      label: "61-90",
      value: arData.filter((d) => d.days > 60 && d.days <= 90).reduce((s, d) => s + d.amount, 0),
      color: C.gold,
    },
    {
      label: "90+",
      value: arData.filter((d) => d.days > 90).reduce((s, d) => s + d.amount, 0),
      color: C.red,
    },
  ]

  return (
    <Section title="Finance" subtitle="Revenue, AR, fuel, and margin performance">
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
          value={`$${totalRevenue.toLocaleString()}`}
          right={<Trend value="+4.2%" up={true} />}
        />

        <KPI
          label="AR Outstanding"
          value={`$${arTotal.toLocaleString()}`}
          color={arCritical > 0 ? C.red : C.green}
        />

        <KPI
          label="Fuel Spend (8w)"
          value={`$${totalFuel.toLocaleString()}`}
          color={C.red}
          right={<Trend value="-2.8%" up={false} />}
        />

        <KPI
          label="Margin Estimate"
          value={`${margin}%`}
          color={margin > 20 ? C.green : C.gold}
        />
      </div>

      {/* Revenue Trend */}
      <Card title="Revenue Trend (8 Weeks)">
        <LineChart data={revenue} xKey="w" yKey="value" color={C.accent} />
      </Card>

      {/* Fuel Spend Trend */}
      <Card title="Fuel Spend Trend (8 Weeks)">
        <LineChart data={fuel} xKey="w" yKey="value" color={C.red} />
      </Card>

      {/* AR Aging */}
      <Card title="AR Aging Distribution">
        <PieChart
          data={aging}
          centerLabel="Total"
          centerValue={`$${arTotal.toLocaleString()}`}
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

      {/* Finance Alerts */}
      <Card title="Financial Alerts">
        <ul style={{ margin: 0, paddingLeft: 18, color: C.text }}>
          <li>AR over 90 days exceeds threshold</li>
          <li>Fuel spend trending above seasonal average</li>
          <li>Margin compression risk in Midwest market</li>
        </ul>
      </Card>
    </Section>
  )
}
