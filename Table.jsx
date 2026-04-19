import { C } from "../theme"

export default function Table({
  columns = [],
  rows = [],
  rowStyle = () => ({}),
  cellStyle = () => ({}),
}) {
  return (
    <div
      style={{
        width: "100%",
        border: `1px solid ${C.border}`,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
          background: C.s2,
          borderBottom: `1px solid ${C.border}`,
          padding: "10px 12px",
          fontSize: 12,
          fontWeight: 700,
          color: C.muted,
          textTransform: "uppercase",
          letterSpacing: 0.3,
        }}
      >
        {columns.map((c, i) => (
          <div key={i} style={{ textAlign: c.right ? "right" : "left" }}>
            {c.label}
          </div>
        ))}
      </div>

      {/* Rows */}
      {rows.map((row, r) => (
        <div
          key={r}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
            padding: "12px 12px",
            fontSize: 13,
            color: C.text,
            borderBottom:
              r === rows.length - 1 ? "none" : `1px solid ${C.border}`,
            ...rowStyle(row),
          }}
        >
          {columns.map((c, i) => (
            <div
              key={i}
              style={{
                textAlign: c.right ? "right" : "left",
                ...cellStyle(row, c),
              }}
            >
              {row[c.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
