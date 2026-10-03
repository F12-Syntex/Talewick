import React from "react";
import { useInteract } from "./useInteract.js";

const SIZES = { sm: 28, md: 34, lg: 42 };

export function IconButton({ icon, label, variant = "ghost", size = "md", active = false, disabled = false, onClick, style }) {
  const d = SIZES[size] || SIZES.md;
  const [st, on] = useInteract(disabled);
  const V = {
    ghost: { background: active ? "color-mix(in srgb,var(--accent) 14%,transparent)" : st.hover ? "var(--surface-hover)" : "transparent", color: active ? "var(--accent)" : st.hover ? "var(--fg)" : "var(--fg-muted)", border: "1px solid transparent" },
    secondary: { background: st.hover ? "var(--surface-hover)" : "var(--surface-raised)", color: active ? "var(--accent)" : "var(--fg)", border: "1px solid " + (st.hover ? "var(--border-strong)" : "var(--border)"), boxShadow: "var(--shadow-inset-top)" },
    primary: { background: "linear-gradient(180deg,var(--accent-hi),var(--accent) 55%,var(--accent-lo))", color: "var(--on-accent)", border: "1px solid color-mix(in srgb,var(--accent-hi) 55%,transparent)", boxShadow: st.hover ? "0 0 0 1px var(--accent-glow), 0 8px 22px -6px var(--accent-glow)" : "inset 0 1px 0 rgba(255,255,255,.3)" },
  }[variant] || {};
  return (
    <button type="button" aria-label={label} title={label} aria-pressed={active || undefined} disabled={disabled} onClick={(e) => onClick && onClick(e)} {...on}
      style={{ display: "grid", placeItems: "center", width: d, height: d, padding: 0, borderRadius: size === "sm" ? 8 : size === "lg" ? 12 : 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, transform: st.press ? "scale(0.92)" : "scale(1)", transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base)", outline: st.focus ? "2px solid var(--accent)" : "none", outlineOffset: 2, flexShrink: 0, ...V, ...style }}>
      {icon}
    </button>
  );
}
