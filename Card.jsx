import { C } from "../theme"

export default function Card({ title, children, style = {} }) {
  return (
    <div
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        borderRadius: 10,
        padding: 18,
        marginBottom: 20,
        boxShadow: "0 2px 4px rgba(0,0,0,0.25)",
        ...style,
      }}
    >
      {title && (
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 12,
            color: C.text,
            letterSpacing: -0.2,
          }}
        >
          {title}
        </div>
      )}

      {children}
    </div>
  )
}
