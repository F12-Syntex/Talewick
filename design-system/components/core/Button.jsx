import React from "react";
import { useInteract } from "./useInteract.js";
import { Spinner } from "../feedback/Spinner.jsx";

const SIZES = { sm: { h: 28, px: 10, fs: 12, r: 8, gap: 6 }, md: { h: 34, px: 14, fs: 13, r: 10, gap: 8 }, lg: { h: 42, px: 18, fs: 14, r: 12, gap: 8 } };

export function Button({ variant = "primary", size = "md", icon, iconRight, loading = false, disabled = false, fullWidth = false, children, onClick, type = "button", style }) {
  const s = SIZES[size] || SIZES.md;
  const [st, on] = useInteract(disabled || loading);
  const V = {
    primary: { background: "linear-gradient(180deg,var(--accent-hi),var(--accent) 55%,var(--accent-lo))", color: "var(--on-accent)", border: "1px solid color-mix(in srgb,var(--accent-hi) 55%,transparent)", boxShadow: st.hover ? "inset 0 1px 0 rgba(255,255,255,.35), 0 0 0 1px var(--accent-glow), 0 10px 28px -8px var(--accent-glow)" : "inset 0 1px 0 rgba(255,255,255,.3), 0 1px 2px rgba(0,0,0,.4)", filter: st.hover ? "brightness(1.06)" : "none" },
    secondary: { background: st.hover ? "var(--surface-hover)" : "var(--surface-raised)", color: "var(--fg)", border: "1px solid " + (st.hover ? "var(--border-strong)" : "var(--border)"), boxShadow: "var(--shadow-inset-top), var(--shadow-sm)" },
    ghost: { background: st.hover ? "var(--surface-hover)" : "transparent", color: st.hover ? "var(--fg)" : "var(--fg-muted)", border: "1px solid transparent" },
    danger: { background: "color-mix(in srgb,var(--danger) " + (st.hover ? 28 : 16) + "%,transparent)", color: "var(--danger-fg)", border: "1px solid color-mix(in srgb,var(--danger) 40%,transparent)" },
  }[variant] || {};
  return (
    <button type={type} disabled={disabled || loading} onClick={(e) => onClick && onClick(e)} {...on}
      style={{ position: "relative", flexShrink: 0, display: fullWidth ? "flex" : "inline-flex", width: fullWidth ? "100%" : undefined, alignItems: "center", justifyContent: "center", height: s.h, padding: "0 " + s.px + "px", borderRadius: s.r, fontFamily: "var(--font-sans)", fontSize: s.fs, fontWeight: 500, whiteSpace: "nowrap", cursor: disabled ? "not-allowed" : loading ? "progress" : "pointer", opacity: disabled ? 0.45 : 1, overflow: "hidden", transform: st.press ? "scale(0.97)" : "scale(1)", transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), filter var(--dur-base)", outline: st.focus ? "2px solid var(--accent)" : "none", outlineOffset: 2, ...V, ...style }}>
      {variant === "primary" && (
        <span aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, width: "45%", left: st.hover ? "130%" : "-60%", background: "linear-gradient(100deg,transparent,rgba(255,255,255,.4),transparent)", transition: st.hover ? "left 750ms var(--ease-out)" : "none", pointerEvents: "none" }}></span>
      )}
      <span style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: s.gap, opacity: loading ? 0 : 1 }}>{icon}{children}{iconRight}</span>
      {loading && <span style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}><Spinner size={s.fs + 2} color="currentColor" /></span>}
    </button>
  );
}
