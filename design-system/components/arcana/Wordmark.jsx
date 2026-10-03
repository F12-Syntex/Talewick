import React from "react";

export function Wordmark({ size = 20, glow = true, color = "var(--fg)", text = "Talewick" }) {
  return (
    <span style={{ fontFamily: "var(--font-display)", fontSize: size, lineHeight: 1, fontWeight: 600, letterSpacing: "0.08em", color, textShadow: glow ? "0 0 " + Math.round(size * 0.9) + "px var(--accent-glow)" : "none", whiteSpace: "nowrap" }}>{text}</span>
  );
}
