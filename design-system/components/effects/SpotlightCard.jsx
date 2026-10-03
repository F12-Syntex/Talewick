import React from "react";

export function SpotlightCard({ children, padding = 20, radius = "var(--radius-lg)", glow = "var(--accent)", onClick, style }) {
  const ref = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px");
    el.style.setProperty("--my", e.clientY - r.top + "px");
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => onClick && onClick()}
      style={{ position: "relative", borderRadius: radius, padding: 1, background: "var(--border)", cursor: onClick ? "pointer" : "default", boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)", transition: "box-shadow var(--dur-slow) var(--ease-out)", ...style }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, borderRadius: radius, background: "radial-gradient(360px circle at var(--mx,50%) var(--my,0px), color-mix(in srgb," + glow + " 70%,transparent), transparent 60%)", opacity: hover ? 1 : 0, transition: "opacity var(--dur-slow) var(--ease-out)", pointerEvents: "none" }}></div>
      <div style={{ position: "relative", height: "100%", boxSizing: "border-box", borderRadius: "calc(" + radius + " - 1px)", padding, background: "var(--surface)", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(480px circle at var(--mx,50%) var(--my,0px), color-mix(in srgb," + glow + " 9%,transparent), transparent 55%)", opacity: hover ? 1 : 0, transition: "opacity var(--dur-slow) var(--ease-out)", pointerEvents: "none" }}></div>
        <div style={{ position: "relative", height: "100%" }}>{children}</div>
      </div>
    </div>
  );
}
