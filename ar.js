import { C } from "../theme"

export const arData = [
  { name: "FedEx Freight", amount: 84200, days: 97, status: "critical" },
  { name: "KLLM Transport", amount: 31000, days: 45, status: "warning" },
  { name: "DLG Petroleum", amount: 18500, days: 14, status: "ok" },
  { name: "Echo Global", amount: 12400, days: 28, status: "ok" },
  { name: "Coyote Logistics", amount: 5200, days: 21, status: "ok" },
]

// Total AR
export const arTotal = arData.reduce((sum, d) => sum + d.amount, 0)

// Critical AR only
export const arCritical = arData
  .filter((d) => d.status === "critical")
  .reduce((sum, d) => sum + d.amount, 0)

// Color helper
export const scAR = (status) =>
  status === "critical"
    ? C.red
    : status === "warning"
    ? C.gold
    : C.green
