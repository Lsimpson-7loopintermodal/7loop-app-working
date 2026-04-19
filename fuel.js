export const fuelData = [
  { w: "Wk 1", spend: 4820 },
  { w: "Wk 2", spend: 5140 },
  { w: "Wk 3", spend: 4960 },
  { w: "Wk 4", spend: 5300 },
  { w: "Wk 5", spend: 5210 },
  { w: "Wk 6", spend: 5640 },
  { w: "Wk 7", spend: 5480 },
  { w: "Wk 8", spend: 5700 },
]

// Total fuel spend (used in Overview KPIs)
export const totalFuel = fuelData.reduce((sum, d) => sum + d.spend, 0)
