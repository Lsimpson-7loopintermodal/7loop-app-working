export const loadsData = [
  { w: "Wk 1", completed: 22, pending: 4, cancelled: 1 },
  { w: "Wk 2", completed: 26, pending: 3, cancelled: 1 },
  { w: "Wk 3", completed: 24, pending: 5, cancelled: 1 },
  { w: "Wk 4", completed: 29, pending: 4, cancelled: 1 },
  { w: "Wk 5", completed: 31, pending: 6, cancelled: 1 },
  { w: "Wk 6", completed: 28, pending: 3, cancelled: 1 },
  { w: "Wk 7", completed: 34, pending: 5, cancelled: 1 },
  { w: "Wk 8", completed: 37, pending: 4, cancelled: 1 },
]

// Total completed loads (used in Overview KPIs)
export const totalLoads = loadsData.reduce((sum, d) => sum + d.completed, 0)
