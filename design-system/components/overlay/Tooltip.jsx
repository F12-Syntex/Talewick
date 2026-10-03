import React from "react";
import { Kbd } from "../core/Kbd.jsx";

export function Tooltip({ content, side = "top", delay = 250, shortcut, children }) {
  const [open, setOpen] = React.useState(false);
  const t = React.useRef(null);
  const show = () => { clearTimeout(t.current); t.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(t.current); setOpen(false); };
  React.useEffect(() => () => clearTimeout(t.current), []);
  const pos = side === "bottom" ? { top: "calc(100% + 8px)" } : side === "right" ? { left: "calc(100% + 8px)", top: "50%" } : side === "left" ? { right: "calc(100% + 8px)", top: "50%" } : { bottom: "calc(100% + 8px)" };
  const tr = side === "left" || side === "right" ? "translateY(-50%)" : "translateX(-50%)";
  const horiz = side === "top" || side === "bottom";
  return (
    <span onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide} style={{ position: "relative", display: "inline-flex" }}>
      {children}
      {open && (
        <span role="tooltip" style={{ position: "absolute", zIndex: 60, left: horiz ? "50%" : pos.left, ...pos, transform: tr, pointerEvents: "none" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 8px", borderRadius: 8, whiteSpace: "nowrap", fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: "16px", color: "var(--fg)", background: "var(--surface-tooltip)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid var(--border-glass)", boxShadow: "var(--shadow-md)", animation: "tw-pop-in 160ms var(--ease-out)", transformOrigin: side === "bottom" ? "top center" : "bottom center" }}>
            {content}
            {shortcut && <Kbd keys={shortcut} />}
          </span>
        </span>
      )}
    </span>
  );
}
