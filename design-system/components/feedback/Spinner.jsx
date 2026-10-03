import React from "react";

export function Spinner({ size = 16, color = "var(--accent)", thickness, speed = 0.8 }) {
  const t = thickness || Math.max(1.5, size / 9);
  const mask = "radial-gradient(farthest-side, transparent calc(100% - " + t + "px), #000 calc(100% - " + t + "px + 0.5px))";
  return (
    <span role="status" aria-label="Loading" style={{ display: "inline-block", width: size, height: size, borderRadius: "50%", color, background: "conic-gradient(from 0deg, transparent 0deg, currentColor 300deg, transparent 360deg)", WebkitMask: mask, mask, animation: "tw-spin " + speed + "s linear infinite", flexShrink: 0 }}></span>
  );
}
