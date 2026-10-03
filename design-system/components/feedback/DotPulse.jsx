import React from "react";

export function DotPulse({ size = 6, color = "var(--accent)", gap }) {
  return (
    <span role="status" aria-label="Loading" style={{ display: "inline-flex", alignItems: "center", gap: gap == null ? size * 0.7 : gap }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{ width: size, height: size, borderRadius: "50%", background: color, boxShadow: "0 0 " + size * 1.5 + "px " + color, animation: "tw-dot 1.2s var(--ease-in-out) infinite", animationDelay: i * 0.16 + "s" }}></span>
      ))}
    </span>
  );
}
