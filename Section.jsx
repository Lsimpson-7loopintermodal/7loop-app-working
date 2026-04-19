import { C } from "../theme"

export default function Section({ title, subtitle = "", children, style = {} }) {
  return (
    <div style={{ marginBottom: 40, ...style }}>
      {/* Title */}
      <div
        style={{
          fontSize: 22,
          fontWeight: 800,
          marginBottom: subtitle ? 4 : 14,
          color: C.text,
          letterSpacing: -0.5,
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div
          style={{
            fontSize: 13,
            color: C.muted,
            marginBottom: 14,
            letterSpacing: 0.2,
          }}
        >
          {subtitle}
        </div>
      )}

      {/* Content */}
      <div>{children}</div>
    </div>
  )
}
