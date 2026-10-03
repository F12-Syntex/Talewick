import React from "react";

export function Dialog({ open, onClose, title, description, children, footer, width = 440, contained = false }) {
  React.useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div style={{ position: contained ? "absolute" : "fixed", inset: 0, zIndex: 50, display: "grid", placeItems: "center", fontFamily: "var(--font-sans)" }}>
      <div onClick={() => onClose && onClose()} style={{ position: "absolute", inset: 0, background: "var(--backdrop)", backdropFilter: "blur(var(--blur-backdrop))", WebkitBackdropFilter: "blur(var(--blur-backdrop))", animation: "tw-fade-in var(--dur-base) var(--ease-out)" }}></div>
      <div role="dialog" aria-modal="true" aria-label={typeof title === "string" ? title : undefined}
        style={{ position: "relative", width, maxWidth: "calc(100% - 32px)", boxSizing: "border-box", padding: 20, borderRadius: "var(--radius-xl)", background: "var(--surface-glass)", backdropFilter: "blur(var(--blur-glass)) saturate(140%)", WebkitBackdropFilter: "blur(var(--blur-glass)) saturate(140%)", border: "1px solid var(--border-glass)", boxShadow: "var(--shadow-xl)", animation: "tw-dialog-in var(--dur-slow) var(--ease-out-expo)" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 24, right: 24, height: 1, background: "linear-gradient(90deg,transparent,var(--ornament),transparent)", opacity: 0.6 }}></div>
        <div aria-hidden="true" style={{ position: "absolute", top: -4, left: "50%", width: 7, height: 7, marginLeft: -3.5, transform: "rotate(45deg)", background: "var(--surface-raised)", border: "1px solid var(--ornament)", boxShadow: "0 0 10px var(--accent-glow)" }}></div>
        {title && <div style={{ fontFamily: "var(--font-display)", fontSize: 17, lineHeight: "24px", fontWeight: 600, letterSpacing: "var(--tracking-display)", color: "var(--fg)" }}>{title}</div>}
        {description && <div style={{ marginTop: 6, fontSize: 13, lineHeight: "20px", color: "var(--fg-muted)" }}>{description}</div>}
        {children && <div style={{ marginTop: 16 }}>{children}</div>}
        {footer && <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end", gap: 8 }}>{footer}</div>}
      </div>
    </div>
  );
}
