import React from "react";

const pascal = (s) => String(s || "").split(/[-_\s]/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");

// Renders a Lucide icon from window.lucide (load lucide UMD from CDN on the page).
export function Icon({ name, size = 16, strokeWidth = 1.5, color = "currentColor", style }) {
  const L = typeof window !== "undefined" ? window.lucide : null;
  let node = L && L.icons ? L.icons[pascal(name)] : null;
  if (!node) return <span aria-hidden="true" style={{ display: "inline-block", width: size, height: size, flexShrink: 0 }}></span>;
  if (node[0] === "svg") node = node[2];
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: 0, ...style }}>
      {node.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}
