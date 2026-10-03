import React from "react";

export function SegmentedControl({ options = [], value, defaultValue, onChange, size = "md", fullWidth = false }) {
  const opts = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  const [inner, setInner] = React.useState(defaultValue == null ? opts[0] && opts[0].value : defaultValue);
  const cur = value == null ? inner : value;
  const refs = React.useRef({});
  const wrap = React.useRef(null);
  const [ind, setInd] = React.useState(null);
  React.useLayoutEffect(() => {
    const measure = () => { const el = refs.current[cur]; if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth }); };
    measure();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro && wrap.current) ro.observe(wrap.current);
    return () => ro && ro.disconnect();
  }, [cur, options.length]);
  const h = size === "sm" ? 26 : 30;
  return (
    <div ref={wrap} role="tablist" style={{ position: "relative", display: fullWidth ? "flex" : "inline-flex", padding: 3, gap: 2, borderRadius: 10, background: "var(--background)", border: "1px solid var(--border)", boxShadow: "inset 0 1px 2px rgba(0,0,0,.3)" }}>
      {ind && <span aria-hidden="true" style={{ position: "absolute", top: 3, bottom: 3, left: ind.left, width: ind.width, borderRadius: 7, background: "var(--surface-hover)", border: "1px solid var(--border-strong)", boxSizing: "border-box", boxShadow: "0 1px 2px rgba(0,0,0,.4), var(--shadow-inset-top)", transition: "left var(--dur-slow) var(--ease-out-expo), width var(--dur-slow) var(--ease-out-expo)" }}></span>}
      {opts.map((o) => {
        const on = o.value === cur;
        return (
          <button key={o.value} ref={(el) => (refs.current[o.value] = el)} type="button" role="tab" aria-selected={on}
            onClick={() => { if (value == null) setInner(o.value); onChange && onChange(o.value); }}
            style={{ position: "relative", zIndex: 1, flex: fullWidth ? 1 : "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, height: h, padding: "0 12px", border: 0, borderRadius: 7, background: "transparent", color: on ? "var(--fg)" : "var(--fg-muted)", fontFamily: "var(--font-sans)", fontSize: size === "sm" ? 12 : 13, fontWeight: 500, cursor: "pointer", transition: "color var(--dur-base) var(--ease-out)" }}>
            {o.icon}{o.label}
          </button>
        );
      })}
    </div>
  );
}
