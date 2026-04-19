import { C } from "../theme"

export const pipelineData = [
  {
    name: "KLLM Transport",
    type: "Direct",
    lane: "DFW Triangle",
    stage: "cold",
    value: 67000,
  },
  {
    name: "Pepsi Logistics",
    type: "Direct",
    lane: "DFW - KC",
    stage: "prospect",
    value: 42000,
  },
  {
    name: "Home Depot Supply",
    type: "Direct",
    lane: "DFW - KC",
    stage: "prospect",
    value: 51000,
  },
  {
    name: "Amazon Logistics",
    type: "Direct",
    lane: "SoCal - DFW",
    stage: "cold",
    value: 89000,
  },
  {
    name: "Echo Global",
    type: "Broker",
    lane: "SoCal Drayage",
    stage: "negotiating",
    value: 76000,
  },
  {
    name: "DLG Petroleum",
    type: "Direct",
    lane: "Alvin TX - FL",
    stage: "active",
    value: 120000,
  },
  {
    name: "Coyote Logistics",
    type: "Broker",
    lane: "KC - SoCal",
    stage: "prospect",
    value: 38000,
  },
  {
    name: "Schneider National",
    type: "Broker",
    lane: "Midwest OTR",
    stage: "cold",
    value: 45000,
  },
]

// Total pipeline value (used in Overview KPI)
export const pipTotal = pipelineData.reduce((sum, d) => sum + d.value, 0)

// Color helper
export const scPipeline = (stage) =>
  ({
    cold: C.muted,
    prospect: C.accent,
    negotiating: C.gold,
    active: C.green,
  }[stage] || C.muted)
