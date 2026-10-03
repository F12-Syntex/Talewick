import React from "react";

export function Kbd({ keys, children }) {
  const list = keys || [children];
  return (
    <span style={{ display: "inline-flex", gap: 3 }}>
      {list.map((k, i) => (
        <kbd key={i} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 18, height: 18, padding: "0 5px", boxSizing: "border-box", borderRadius: 5, fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1, color: "var(--fg-muted)", background: "linear-gradient(180deg,var(--surface-hover),var(--surface-raised))", border: "1px solid var(--border-strong)", boxShadow: "inset 0 -1px 0 rgba(0,0,0,.45)" }}>{k}</kbd>
      ))}
    </span>
  );
}
