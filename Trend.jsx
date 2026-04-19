import { C } from "../theme"

export default function Trend({ value, up = true, color }) {
  const col = color || (up ? C.green : C.red)

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: 13,
        fontWeight: 600,
        color: col,
      }}
    >
      <span style={{ marginRight: 4 }}>
        {up ? "▲" : "▼"}
      </span>
      {value}
    </div>
  )
}
