import React from "react";
import { HypeIndicator } from "./HypeIndicator.jsx";

export function ChapterRow({ number, title, meta, hype, state = "unread", trailing, onClick }) {
  const [hover, setHover] = React.useState(false);
  const read = state === "read", cur = state === "current";
  return (
    <div role="button" tabIndex={0} onClick={() => onClick && onClick()} onKeyDown={(e) => e.key === "Enter" && onClick && onClick()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "grid", gridTemplateColumns: "40px minmax(0,1fr) auto auto", alignItems: "center", gap: 12, height: 48, padding: "0 12px", borderRadius: 10, cursor: "pointer", fontFamily: "var(--font-sans)", background: cur ? "color-mix(in srgb,var(--accent) 8%,transparent)" : hover ? "var(--surface-hover)" : "transparent", boxShadow: cur ? "inset 0 0 0 1px color-mix(in srgb,var(--accent) 22%,transparent)" : "none", transition: "background var(--dur-base) var(--ease-out)", outline: "none" }}>
      <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 12, color: cur ? "var(--accent)" : "var(--fg-subtle)" }}>
        {cur && <span style={{ width: 6, height: 6, transform: "rotate(45deg)", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}></span>}
        {number}
      </span>
      <span style={{ minWidth: 0, opacity: read ? 0.5 : 1 }}>
        <span style={{ display: "block", fontSize: 13, lineHeight: "18px", fontWeight: cur ? 500 : 400, color: "var(--fg)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
        {meta && <span style={{ display: "block", fontSize: 11, lineHeight: "14px", color: "var(--fg-muted)" }}>{meta}</span>}
      </span>
      <span>{hype != null && <HypeIndicator level={hype} size="sm" animated={!read} />}</span>
      <span style={{ display: "inline-flex", color: "var(--fg-subtle)" }}>{trailing}</span>
    </div>
  );
}
