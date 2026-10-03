import React from "react";

const TONES = { accent: ["var(--accent-lo)", "var(--accent-hi)", "var(--accent)"], fg: ["var(--fg-muted)", "var(--fg)", "var(--fg)"], success: ["color-mix(in srgb,var(--success) 60%,#000)", "var(--success)", "var(--success)"] };

export function ProgressBar({ value = 0, indeterminate = false, tone = "accent", height = 4, glow = true, style }) {
  const [lo, hi, c] = TONES[tone] || TONES.accent;
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={indeterminate ? undefined : Math.round(pct)} style={{ position: "relative", width: "100%", height, borderRadius: 999, background: "var(--surface-hover)", overflow: "visible", ...style }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 999, overflow: "hidden" }}>
        {indeterminate ? (
          <div style={{ position: "absolute", top: 0, bottom: 0, width: "35%", borderRadius: 999, background: "linear-gradient(90deg, transparent, " + hi + ", transparent)", animation: "tw-indeterminate 1.4s var(--ease-in-out) infinite" }}></div>
        ) : (
          <div style={{ height: "100%", width: pct + "%", borderRadius: 999, background: "linear-gradient(90deg," + lo + "," + hi + ")", transition: "width var(--dur-slower) var(--ease-out-expo)" }}></div>
        )}
      </div>
      {glow && !indeterminate && pct > 0 && (
        <div style={{ position: "absolute", top: "50%", left: pct + "%", width: height * 2, height: height * 2, marginLeft: -height, marginTop: -height, borderRadius: "50%", background: hi, boxShadow: "0 0 " + height * 3 + "px " + height + "px " + c, opacity: 0.9, transition: "left var(--dur-slower) var(--ease-out-expo)", pointerEvents: "none" }}></div>
      )}
    </div>
  );
}
