import React from "react";

export function Switch({ checked, defaultChecked = false, onChange, disabled = false, label, size = "md" }) {
  const [inner, setInner] = React.useState(defaultChecked);
  const [press, setPress] = React.useState(false);
  const on = checked == null ? inner : checked;
  const W = size === "sm" ? 28 : 34, Ht = size === "sm" ? 16 : 20, K = Ht - 4;
  const kw = press ? K + 4 : K;
  const toggle = () => { if (disabled) return; if (checked == null) setInner(!on); onChange && onChange(!on); };
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg)", userSelect: "none" }}>
      <button type="button" role="switch" aria-checked={on} disabled={disabled} onClick={toggle} onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} onMouseLeave={() => setPress(false)}
        style={{ position: "relative", width: W, height: Ht, padding: 0, flexShrink: 0, borderRadius: 999, border: "1px solid " + (on ? "transparent" : "var(--border-strong)"), background: on ? "linear-gradient(180deg,var(--accent-hi),var(--accent))" : "var(--surface-hover)", boxShadow: on ? "0 0 14px -3px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,.25)" : "inset 0 1px 2px rgba(0,0,0,.35)", cursor: "inherit", transition: "background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base)" }}>
        <span style={{ position: "absolute", top: 1, left: 1, width: kw, height: K, borderRadius: 999, background: on ? "var(--knob)" : "var(--fg-muted)", boxShadow: "0 1px 3px rgba(0,0,0,.45)", transform: "translateX(" + (on ? W - 4 - kw : 0) + "px)", transition: "transform 460ms var(--ease-spring), width var(--dur-base) var(--ease-out), background var(--dur-base)" }}></span>
      </button>
      {label}
    </label>
  );
}
