import { useState } from "react"
import { C } from "./theme"
import { TABS } from "./data/tabs"

// Section imports (each will be created later)
import Overview from "./sections/overview/Overview.jsx"
import Operations from "./sections/operations/Operations.jsx"
import Drivers from "./sections/drivers/Drivers.jsx"
import Finance from "./sections/finance/Finance.jsx"
import Sales from "./sections/sales/Sales.jsx"
import Gov from "./sections/gov/Gov.jsx"
import Fleet from "./sections/fleet/Fleet.jsx"
import Team from "./sections/team/Team.jsx"
import HR from "./sections/hr/HR.jsx"
import Compliance from "./sections/compliance/Compliance.jsx"

export default function App() {
  const [tab, setTab] = useState("overview")

  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
        color: C.text,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: C.s1,
          borderBottom: `1px solid ${C.border}`,
          padding: "14px 20px",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              background: C.accent,
              borderRadius: 6,
            }}
          />
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: -0.3 }}>
              7Loop
            </div>
            <div style={{ color: C.muted, fontSize: 10, letterSpacing: 1 }}>
              INTERMODAL
            </div>
          </div>
        </div>
      </div>

      {/* TAB BAR */}
      <div
        style={{
          background: C.s1,
          borderBottom: `1px solid ${C.border}`,
          padding: "10px 0",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            gap: 6,
            overflowX: "auto",
          }}
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                background: tab === t.id ? C.accent : "none",
                border: `1px solid ${
                  tab === t.id ? C.accent : C.border
                }`,
                color: tab === t.id ? "#fff" : C.muted,
                padding: "6px 14px",
                borderRadius: 5,
                cursor: "pointer",
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                transition: "all 0.12s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION CONTENT */}
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {tab === "overview" && <Overview />}
        {tab === "operations" && <Operations />}
        {tab === "drivers" && <Drivers />}
        {tab === "finance" && <Finance />}
        {tab === "sales" && <Sales />}
        {tab === "gov" && <Gov />}
        {tab === "fleet" && <Fleet />}
        {tab === "team" && <Team />}
        {tab === "hr" && <HR />}
        {tab === "compliance" && <Compliance />}
      </div>
    </div>
  )
}
