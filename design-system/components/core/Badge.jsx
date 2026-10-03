import React from "react";

const TONE = { neutral: "var(--fg-muted)", accent: "var(--accent)", success: "var(--success)", danger: "var(--danger-fg)", "heat-1": "var(--heat-1)", "heat-2": "var(--heat-2)", "heat-3": "var(--heat-3)", "heat-4": "var(--heat-4)", "heat-5": "var(--heat-5)" };

export function Badge({ tone = "neutral", variant = "soft", dot = false, icon, children, style }) {
  const c = TONE[tone] || TONE.neutral;
  const V = {
    soft: { background: "color-mix(in srgb," + c + " 14%,transparent)", color: c, border: "1px solid color-mix(in srgb," + c + " 22%,transparent)" },
    outline: { background: "transparent", color: c, border: "1px solid color-mix(in srgb," + c + " 45%,transparent)" },
    solid: { background: c, color: "var(--on-accent)", border: "1px solid transparent" },
  }[variant];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, height: 20, padding: "0 7px", boxSizing: "border-box", borderRadius: 999, fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, letterSpacing: "0.01em", whiteSpace: "nowrap", ...V, ...style }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: variant === "solid" ? "currentColor" : c, boxShadow: "0 0 6px " + c }}></span>}
      {icon}
      {children}
    </span>
  );
}
