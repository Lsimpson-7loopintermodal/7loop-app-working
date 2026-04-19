import { C } from "../theme"

export default function PieChart({
  data,
  size = 180,
  strokeWidth = 26,
  centerLabel = "",
  centerValue = "",
}) {
  if (!data || data.length === 0) return null

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const total = data.reduce((sum, d) => sum + d.value
