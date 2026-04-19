import { C } from "../theme"

export const revenueData = [
  { w: "Wk 1", dfw: 38200, kc: 14800, socal: 9400 },
  { w: "Wk 2", dfw: 41500, kc: 17200, socal: 11800 },
  { w: "Wk 3", dfw: 36900, kc: 19400, socal: 14200 },
  { w: "Wk 4", dfw: 44100, kc: 21000, socal: 12800 },
  { w: "Wk 5", dfw: 47300, kc: 22800, socal: 16400 },
  { w: "Wk 6", dfw: 43700, kc: 24100, socal: 18000 },
  { w: "Wk 7", dfw: 51200, kc: 26400, socal: 21300 },
  { w: "Wk 8", dfw: 53800, kc: 28700, socal: 23000 },
]

// Total revenue (used in Overview KPIs)
export const totalRevenue = revenueData.reduce(
  (sum, d) => sum + d.dfw + d.kc + d.socal,
  0
)
