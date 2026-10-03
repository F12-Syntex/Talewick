import React from "react";

export function Slider({ value, defaultValue = 50, min = 0, max = 100, step = 1, onChange, showValue = true, format, disabled = false, width = "100%" }) {
  const [inner, setInner] = React.useState(defaultValue);
  const [drag, setDrag] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);
  const v = value == null ? inner : value;
  const pct = (v - min) / (max - min);
  const set = (nv) => { const c = Math.min(max, Math.max(min, Math.round(nv / step) * step)); if (value == null) setInner(c); onChange && onChange(c); };
  const fromX = (x) => { const r = ref.current.getBoundingClientRect(); set(min + ((x - r.left) / r.width) * (max - min)); };
  const fmt = format || ((n) => String(n));
  const active = drag || hover;
  return (
    <div style={{ width, padding: "0 7px", boxSizing: "border-box", opacity: disabled ? 0.45 : 1 }}>
      <div ref={ref} role="slider" tabIndex={disabled ? -1 : 0} aria-valuemin={min} aria-valuemax={max} aria-valuenow={v}
        onPointerDown={(e) => { if (disabled) return; e.currentTarget.setPointerCapture(e.pointerId); setDrag(true); fromX(e.clientX); }}
        onPointerMove={(e) => drag && fromX(e.clientX)} onPointerUp={() => setDrag(false)} onPointerCancel={() => setDrag(false)}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        onKeyDown={(e) => { if (e.key === "ArrowRight" || e.key === "ArrowUp") { e.preventDefault(); set(v + step); } if (e.key === "ArrowLeft" || e.key === "ArrowDown") { e.preventDefault(); set(v - step); } }}
        style={{ position: "relative", height: 20, cursor: disabled ? "not-allowed" : "pointer", outline: "none", touchAction: "none" }}>
        <div style={{ position: "absolute", left: -7, right: -7, top: 8, height: 4, borderRadius: 999, background: "var(--surface-hover)", boxShadow: "inset 0 1px 1px rgba(0,0,0,.4)" }}></div>
        <div style={{ position: "absolute", left: -7, top: 8, height: 4, width: "calc(" + pct * 100 + "% + 7px)", borderRadius: 999, background: "linear-gradient(90deg,var(--accent-lo),var(--accent-hi))", boxShadow: active ? "0 0 10px var(--accent-glow)" : "none", transition: drag ? "none" : "width var(--dur-base) var(--ease-out), box-shadow var(--dur-base)" }}></div>
        <div style={{ position: "absolute", top: 3, left: pct * 100 + "%", width: 14, height: 14, marginLeft: -7, borderRadius: "50%", background: "var(--knob)", boxShadow: active ? "0 0 0 5px color-mix(in srgb,var(--accent) 22%,transparent), 0 0 16px var(--accent-glow)" : "0 1px 3px rgba(0,0,0,.5)", transform: drag ? "scale(1.15)" : "scale(1)", transition: drag ? "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base)" : "left var(--dur-base) var(--ease-out), transform 420ms var(--ease-spring), box-shadow var(--dur-base)" }}>
          {showValue && drag && (
            <span style={{ position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)", padding: "3px 7px", borderRadius: 6, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg)", background: "var(--surface-glass)", backdropFilter: "blur(12px)", border: "1px solid var(--border-glass)", whiteSpace: "nowrap", animation: "tw-pop-in 160ms var(--ease-out)" }}>{fmt(v)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
