import React from "react";

function ControlButton({ label, onClick, danger, pill, children }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const bg = hover ? (danger ? "var(--danger)" : "var(--surface-hover)") : "transparent";
  const color = hover ? (danger ? "var(--on-danger)" : "var(--fg)") : "var(--fg-muted)";
  const size = pill ? { width: 28, height: 28, borderRadius: 8 } : { width: "var(--window-control-width)", height: "100%" };
  return (
    <button type="button" aria-label={label} title={label} onClick={() => onClick && onClick()}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }} onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ display: "grid", placeItems: "center", padding: 0, border: 0, background: bg, color, cursor: "default", transform: pill && press ? "scale(0.9)" : "none", boxShadow: pill && hover && danger ? "0 0 14px -2px color-mix(in srgb,var(--danger) 70%,transparent)" : "none", transition: "color var(--duration-fast) var(--ease-standard), background-color var(--duration-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base)", ...size }}>
      <svg width={pill ? 10 : 11} height={pill ? 10 : 11} viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth={pill ? 1.2 : 1}>{children}</svg>
    </button>
  );
}

export function WindowControls({ maximized = false, variant = "classic", onMinimize, onToggleMaximize, onClose }) {
  const pill = variant === "pill";
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%", gap: pill ? 2 : 0, paddingRight: pill ? 6 : 0, WebkitAppRegion: "no-drag" }}>
      <ControlButton pill={pill} label="Minimize" onClick={onMinimize}><path d="M1 5.5h9" /></ControlButton>
      <ControlButton pill={pill} label={maximized ? "Restore" : "Maximize"} onClick={onToggleMaximize}>
        {maximized ? (<><path d="M3 1.5h6.5V8" /><rect x="1" y="3" width="6.5" height="6.5" rx="0.5" /></>) : (<rect x="1" y="1" width="9" height="9" rx={pill ? 1.5 : 0.5} />)}
      </ControlButton>
      <ControlButton pill={pill} label="Close" onClick={onClose} danger><path d="M1 1l9 9M10 1l-9 9" /></ControlButton>
    </div>
  );
}
