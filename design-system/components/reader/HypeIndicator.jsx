import React from "react";

const LABELS = ["Unknown", "Calm", "Simmer", "Heated", "Intense", "Wild"];

export function HypeIndicator({ level = 0, variant = "bars", showLabel = false, size = "md", animated = true }) {
  const lv = Math.max(0, Math.min(5, Math.round(level || 0)));
  const c = lv ? "var(--heat-" + lv + ")" : "var(--fg-subtle)";
  const sm = size === "sm";
  const title = "Hype: " + LABELS[lv] + (lv ? " (" + lv + "/5)" : "");
  const label = showLabel && <span style={{ fontFamily: "var(--font-sans)", fontSize: sm ? 11 : 12, fontWeight: 500, color: c, letterSpacing: "0.01em" }}>{LABELS[lv]}</span>;

  if (variant === "meter") {
    return (
      <span title={title} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        <span style={{ position: "relative", width: sm ? 48 : 64, height: sm ? 4 : 6, borderRadius: 999, background: "var(--surface-hover)" }}>
          <span style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: (lv / 5) * 100 + "%", borderRadius: 999, background: "linear-gradient(90deg,var(--heat-1)," + c + ")", boxShadow: lv >= 4 ? "0 0 10px " + c : "none", transition: "width var(--dur-slower) var(--ease-out-expo)" }}></span>
        </span>
        {label}
      </span>
    );
  }
  if (variant === "pill") {
    return (
      <span title={title} style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 20, padding: "0 8px 0 6px", borderRadius: 999, background: "color-mix(in srgb," + c + " 13%,transparent)", border: "1px solid color-mix(in srgb," + c + " 28%,transparent)", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 500, color: c, boxShadow: lv >= 4 ? "0 0 14px -4px " + c : "none" }}>
        <Bars lv={lv} c={c} h={10} w={2} animated={animated} />
        {LABELS[lv]}
      </span>
    );
  }
  return (
    <span title={title} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <Bars lv={lv} c={c} h={sm ? 12 : 16} w={sm ? 3 : 4} animated={animated} />
      {label}
    </span>
  );
}

function Bars({ lv, c, h, w, animated }) {
  return (
    <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "flex-end", gap: w > 2 ? 2 : 1.5, height: h }}>
      {[0, 1, 2, 3, 4].map((i) => {
        const on = i < lv;
        return (
          <span key={i} style={{ width: w, height: ((i + 1) / 5) * h, borderRadius: 1.5, background: on ? c : "var(--border-strong)", boxShadow: on && lv >= 4 ? "0 0 6px " + c : "none", transformOrigin: "bottom", animation: on && animated && lv >= 4 ? "tw-flicker " + (lv === 5 ? 0.7 : 1.1) + "s ease-in-out infinite" : "none", animationDelay: i * 0.12 + "s", transition: "background var(--dur-base)" }}></span>
        );
      })}
    </span>
  );
}
