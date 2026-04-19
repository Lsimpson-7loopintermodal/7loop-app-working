import { C } from "../theme"

export const govRequirements = [
  {
    label: "SAM.gov Registration",
    status: "complete",
    pct: 100,
  },
  {
    label: "UEI Number",
    status: "complete",
    pct: 100,
  },
  {
    label: "CAGE Code",
    status: "complete",
    pct: 100,
  },
  {
    label: "NAICS Codes Updated",
    status: "complete",
    pct: 100,
  },
  {
    label: "Past Performance Docs",
    status: "in-progress",
    pct: 65,
  },
  {
    label: "Capability Statement",
    status: "in-progress",
    pct: 55,
  },
  {
    label: "DOT Safety Score",
    status: "good",
    pct: 92,
  },
  {
    label: "Insurance Requirements",
    status: "good",
    pct: 100,
  },
]

// Color helper
export const scGov = (status) =>
  status === "complete"
    ? C.green
    : status === "in-progress"
    ? C.gold
    : status === "good"
    ? C.accent
    : C.red
