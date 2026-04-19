import Section from "../components/Section"
import Card from "../components/Card"
import KPI from "../components/KPI"
import Table from "../components/Table"
import { driverRows } from "../data/drivers"
import { C } from "../theme"

export default function Drivers() {
  const totalDrivers = driverRows.length
  const avgOnTime = Math.round(
    driverRows.reduce((s, d) => s + d.onTime, 0) / totalDrivers
  )
  const avgHOS = Math.round(
    driverRows.reduce((s, d) => s + d.hos, 0) / totalDrivers
  )
  const avgMiles = Math.round(
    driverRows.reduce((s, d) => s + d.miles, 0) / totalDrivers
  )

  return (
    <Section title="Drivers" subtitle="Performance, compliance, and operational readiness">
      {/* KPIs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          marginBottom: 30,
        }}
      >
        <KPI label="Total Drivers" value={totalDrivers} />

        <KPI
          label="Avg On-Time %"
          value={`${avgOnTime}%`}
          color={avgOnTime > 90 ? C.green : C.gold}
        />

        <KPI
          label="Avg HOS Score"
          value={`${avgHOS}%`}
          color={avgHOS > 85 ? C.green : C.gold}
        />

        <KPI
          label="Avg Miles / Driver"
          value={avgMiles.toLocaleString()}
          color={C.accent}
        />
      </div>

      {/* Driver Table */}
      <Card title="Driver Performance">
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
            miles: d.miles.toLocaleString(),
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

      {/* Driver Alerts */}
      <Card title="Driver Alerts">
        <ul style={{ margin: 0, paddingLeft: 18, color: C.text }}>
          <li>Driver James W. below HOS threshold</li>
          <li>Driver Maria R. trending below on-time target</li>
          <li>Driver Kevin T. showing inconsistent mileage patterns</li>
        </ul>
      </Card>

      {/* Market Snapshot */}
      <Card title="Market Distribution Snapshot">
        <ul style={{ margin: 0, paddingLeft: 18, color: C.text }}>
          <li>DFW: 6 drivers</li>
          <li>Houston: 4 drivers</li>
