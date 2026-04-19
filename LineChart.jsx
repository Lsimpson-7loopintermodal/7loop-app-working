import { C } from "../theme"

export default function BarChart({
  data,
  xKey = "w",
  yKey = "value",
  color = C.accent,
  height = 160,
  max = null,
}) {
  if (!data || data.length === 0) return null

  const maxVal = max || Math.max(...data.map((d) => d[yKey]))

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <svg width="100%" height={height}>
        {data.map((d, i) => {
          const barWidth = 100 / data.length
          const barHeight = (d[yKey] / maxVal) * (height - 30)

          return (
            <g key={i} transform={`translate(${i * barWidth}%, 0)`}>
              <rect
                x="20%"
                y={height - barHeight - 20}
                width="60%"
                height={barHeight}
                rx="4"
                fill={color}
              />

              <text
                x="50%"
                y={height - 4}
                textAnchor="middle"
                fontSize="11"
                fill={C.muted}
              >
                {d[xKey]}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
