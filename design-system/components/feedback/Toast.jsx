import React from "react";

const TONE = { neutral: "var(--fg-muted)", accent: "var(--accent)", success: "var(--success)", danger: "var(--danger-fg)", info: "var(--heat-1)" };

export function Toast({ title, description, tone = "neutral", icon, action, onClose, duration, style }) {
  const c = TONE[tone] || TONE.neutral;
  return (
    <div role="status" style={{ position: "relative", display: "flex", alignItems: "flex-start", gap: 12, width: 340, boxSizing: "border-box", padding: "12px 12px 12px 14px", borderRadius: "var(--radius-lg)", background: "var(--surface-glass)", backdropFilter: "blur(var(--blur-glass)) saturate(140%)", WebkitBackdropFilter: "blur(var(--blur-glass)) saturate(140%)", border: "1px solid var(--border-glass)", boxShadow: "var(--shadow-lg), var(--shadow-inset-top)", overflow: "hidden", fontFamily: "var(--font-sans)", animation: "tw-toast-in 420ms var(--ease-out-expo)", ...style }}>
      {icon && <span style={{ display: "grid", placeItems: "center", width: 28, height: 28, flexShrink: 0, borderRadius: 8, color: c, background: "color-mix(in srgb," + c + " 14%,transparent)" }}>{icon}</span>}
      <div style={{ flex: 1, minWidth: 0, paddingTop: icon ? 1 : 0 }}>
        <div style={{ fontSize: 13, lineHeight: "18px", fontWeight: 500, color: "var(--fg)" }}>{title}</div>
        {description && <div style={{ marginTop: 2, fontSize: 12, lineHeight: "17px", color: "var(--fg-muted)" }}>{description}</div>}
      </div>
      {action && <div style={{ flexShrink: 0, alignSelf: "center" }}>{action}</div>}
      {onClose && (
        <button type="button" aria-label="Dismiss" onClick={() => onClose()} style={{ display: "grid", placeItems: "center", width: 22, height: 22, flexShrink: 0, border: 0, borderRadius: 6, background: "transparent", color: "var(--fg-subtle)", cursor: "pointer" }}>
          <svg width="9" height="9" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M1 1l9 9M10 1l-9 9" /></svg>
        </button>
      )}
      {duration && <div style={{ position: "absolute", left: 0, bottom: 0, height: 2, background: c, opacity: 0.6, animation: "tw-deplete " + duration + "ms linear forwards" }}></div>}
    </div>
  );
}
