import React from "react";

export function Skeleton({ width = "100%", height = 14, radius = "var(--radius-sm)", lines, style }) {
  const block = (w, h, k) => (
    <span key={k} style={{ display: "block", width: w, height: h, borderRadius: radius, background: "linear-gradient(90deg, var(--surface-raised) 0%, var(--surface-hover) 40%, var(--surface-raised) 80%)", backgroundSize: "200% 100%", animation: "tw-shimmer 1.8s linear infinite", ...style }}></span>
  );
  if (lines) {
    return (
      <span style={{ display: "flex", flexDirection: "column", gap: 8, width }}>
        {Array.from({ length: lines }, (_, i) => block(i === lines - 1 && lines > 1 ? "62%" : "100%", height, i))}
      </span>
    );
  }
  return block(width, height);
}
