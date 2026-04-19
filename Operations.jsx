import Section from "../components/Section"
import Card from "../components/Card"
import KPI from "../components/KPI"
import Trend from "../components/Trend"
import BarChart from "../components/BarChart"
import LineChart from "../components/LineChart"
import Table from "../components/Table"

import { loads } from "../data/loads"
import { fuel } from "../data/fuel"
import { driverRows } from "../data/drivers"
import { C } from "../theme"

export default function Operations() {
  const totalLoads = loads.reduce((s, d) => s + d.value, 0)
  const totalFuel = fuel.reduce((s, d) => s + d.value, 0)
  const avgOnTime = Math.round(
    driverRows.reduce((s, d) => s + d.onTime, 0) / driverRows.length
  )
  const avgHOS = Math.round(
    driverRows.reduce((s, d) => s + d.hos, 0) / driverRows.length
  )

  return (
    <Section title="Operations" subtitle="Performance, drivers, and fuel metrics">
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
          label="Loads (8w)"
          value={totalLoads}
          right={<Trend value="+3.1%" up={true} />}
        />

        <KPI
          label="On-Time %"
          value={`${avgOnTime}%`}
          color={avgOnTime > 90 ? C.green : C.gold}
        />

        <KPI
          label="Fuel Spend (8w)"
          value={`$${totalFuel.toLocaleString()}`}
          color={C.red}
          right={<Trend value="-2.8%" up={false} />}
        />

        <KPI
          label="Driver HOS Score"
          value={`${avgHOS}%`}
          color={avgHOS > 85 ? C.green : C.gold}
        />
      </div>

      {/* Load Volume */}
      <Card title="Load Volume (8 Weeks)">
        <BarChart data={loads} xKey="w" yKey="value" color={C.green} />
      </Card>

      {/* Fuel Spend Trend */}
      <Card title="Fuel Spend Trend (8 Weeks)">
        <LineChart data={fuel} xKey="w" yKey="value" color={C.red} />
      </Card>

      {/* Driver Summary */}
      <Card title="Driver Performance Snapshot">
        <Table
          columns={[
            { label: "Driver", key: "name" },
            { label: "Market", key: "market" },
            { label: "On-Time", key: "onTime", right: true },
            { label: "Miles", key: "miles", right: true },
            { label: "Loads", key: "loads", right: true },
            { label: "HOS", key: "hos", right: true },
          ]}
          rows={driverRows.map((d) => ({
            ...d,
            onTime: `${d.onTime}%`,
            hos: `${d.hos}%`,
          }))}
          cellStyle={(row) => ({
            color:
              row.status === "warning"
                ? C.gold
                : row.status === "critical"
                ? C.red
                : C.text,
          })}
        />
      </Card>

      {/* Ops Alerts */}
      <Card title="Operational Alerts">
        <ul style={{ margin: 0, paddingLeft: 18, color: C.text }}>
          <li>Driver James W. below HOS threshold</li>
          <li>Fuel spend trending above seasonal average</li>
          <li>DFW market showing increased load volatility</li>
        </ul>
      </Card>
    </Section>
  )
}
