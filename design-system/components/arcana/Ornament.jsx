import React from "react";

function Diamond({ size = 6, filled = false, glow = false }) {
  return <span aria-hidden="true" style={{ width: size, height: size, flexShrink: 0, transform: "rotate(45deg)", border: "1px solid var(--ornament)", background: filled ? "var(--accent)" : "transparent", boxShadow: glow ? "0 0 10px var(--accent-glow)" : "none", boxSizing: "border-box" }}></span>;
}

export function Ornament({ label, glow = true, width = "100%", style }) {
  const line = (dir) => <span aria-hidden="true" style={{ flex: 1, minWidth: 12, height: 1, background: "linear-gradient(" + dir + ",transparent,var(--ornament))", opacity: 0.7 }}></span>;
  return (
    <div role="separator" style={{ display: "flex", alignItems: "center", gap: 8, width, ...style }}>
      {line("90deg")}
      <Diamond size={4} />
      {label ? (
        <span style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 600, letterSpacing: "var(--tracking-rune)", textTransform: "uppercase", color: "var(--ornament)", whiteSpace: "nowrap", textShadow: glow ? "0 0 12px var(--accent-glow)" : "none" }}>{label}</span>
      ) : (
        <Diamond size={7} filled glow={glow} />
      )}
      <Diamond size={4} />
      {line("270deg")}
    </div>
  );
}
