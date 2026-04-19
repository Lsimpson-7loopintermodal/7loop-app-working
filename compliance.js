import { C } from "../theme"

export const complianceItems = [
  { label: "DOT Inspections Current", status: "pass", pct: 100 },
  { label: "Driver Med Certs", status: "pass", pct: 100 },
  { label: "ELD Compliance", status: "pass", pct: 96 },
  { label: "HOS Violations (30d)", status: "warning", pct: 82 },
  { label: "IFTA Q1 Filing", status: "warning", pct: 60 },
  { label: "SAM.gov Registration", status: "active", pct: 75 },
]

// Color helper for compliance statuses
export const scCompliance = (status) =>
  status === "pass"
    ? C.green
    : status === "warning"
    ? C.gold
    : status === "active"
    ? C.accent
    : C.red
