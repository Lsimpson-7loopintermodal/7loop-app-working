import { C } from "../theme"

export default function KPI({
  label,
  value,
  color = C.text,
  right = null,
  style = {},
}) {
  return (
    <div
      style={{
        background: C.s2,
        border: `1px solid ${C.border}`,
        borderRadius: 10,
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
        ...style,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 12,
            color: C.muted,
            marginBottom: 4,
            letterSpacing: 0.3,
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>

        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color,
            letterSpacing: -0.5,
          }}
        >
          {value}
        </div>
      </div>

      {right && <div>{right}</div>}
    </div>
  )
}
