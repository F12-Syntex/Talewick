import React from "react";

export function Sidebar({ items = [], activeId, onSelect, header, footer, width = 232, glass = false }) {
  const refs = React.useRef({});
  const [ind, setInd] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  React.useLayoutEffect(() => {
    const el = refs.current[activeId];
    setInd(el ? { top: el.offsetTop, height: el.offsetHeight } : null);
  }, [activeId, items.length]);
  return (
    <nav style={{ display: "flex", flexDirection: "column", width, flexShrink: 0, height: "100%", boxSizing: "border-box", padding: 10, borderRight: "1px solid var(--border)", background: glass ? "var(--surface-glass)" : "var(--surface)", backdropFilter: glass ? "blur(var(--blur-glass))" : undefined, WebkitBackdropFilter: glass ? "blur(var(--blur-glass))" : undefined, fontFamily: "var(--font-sans)" }}>
      {header && <div style={{ padding: "4px 6px 12px" }}>{header}</div>}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 1, flex: 1, minHeight: 0, overflow: "auto" }}>
        {ind && <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: ind.top, height: ind.height, borderRadius: 8, background: "var(--surface-hover)", boxShadow: "inset 0 0 0 1px var(--border-strong), var(--shadow-inset-top)", transition: "top var(--dur-slow) var(--ease-out-expo), height var(--dur-slow) var(--ease-out-expo)" }}></span>}
        {items.map((it, i) => {
          if (it.section) return <div key={"s" + i} style={{ padding: (i ? "14px" : "4px") + " 10px 6px", fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 600, letterSpacing: "var(--tracking-rune)", textTransform: "uppercase", color: "var(--fg-subtle)" }}>{it.section}</div>;
          const on = it.id === activeId, hv = hover === it.id;
          return (
            <button key={it.id} ref={(el) => (refs.current[it.id] = el)} type="button" onClick={() => onSelect && onSelect(it.id)} onMouseEnter={() => setHover(it.id)} onMouseLeave={() => setHover(null)}
              style={{ position: "relative", display: "flex", alignItems: "center", gap: 10, height: 32, padding: "0 10px", border: 0, borderRadius: 8, background: !on && hv ? "color-mix(in srgb,var(--surface-hover) 60%,transparent)" : "transparent", color: on || hv ? "var(--fg)" : "var(--fg-muted)", fontFamily: "inherit", fontSize: 13, fontWeight: on ? 500 : 400, textAlign: "left", cursor: "pointer", transition: "color var(--dur-base), background var(--dur-base)" }}>
              <span style={{ display: "grid", color: on ? "var(--accent)" : "inherit", filter: on ? "drop-shadow(0 0 6px var(--accent-glow))" : "none", transition: "color var(--dur-base)" }}>{it.icon}</span>
              <span style={{ flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.label}</span>
              {it.badge != null && <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-subtle)" }}>{it.badge}</span>}
            </button>
          );
        })}
      </div>
      {footer && <div style={{ paddingTop: 10, borderTop: "1px solid var(--border)", marginTop: 10 }}>{footer}</div>}
    </nav>
  );
}
