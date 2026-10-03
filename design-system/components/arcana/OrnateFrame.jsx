import React from "react";

export function OrnateFrame({ children, size = 14, offset = -1, color = "var(--ornament)", glow = false, crest = false, style }) {
  const b = "1px solid " + color;
  const corner = (pos) => {
    const s = { position: "absolute", width: size, height: size, pointerEvents: "none", filter: glow ? "drop-shadow(0 0 4px var(--accent-glow))" : "none" };
    if (pos[0] === "t") { s.top = offset; s.borderTop = b; } else { s.bottom = offset; s.borderBottom = b; }
    if (pos[1] === "l") { s.left = offset; s.borderLeft = b; } else { s.right = offset; s.borderRight = b; }
    s.borderRadius = pos === "tl" ? "4px 0 0 0" : pos === "tr" ? "0 4px 0 0" : pos === "bl" ? "0 0 0 4px" : "0 0 4px 0";
    return <span key={pos} aria-hidden="true" style={s}></span>;
  };
  return (
    <div style={{ position: "relative", ...style }}>
      {children}
      {["tl", "tr", "bl", "br"].map(corner)}
      {crest && <span aria-hidden="true" style={{ position: "absolute", top: offset - 4, left: "50%", width: 7, height: 7, marginLeft: -3.5, transform: "rotate(45deg)", background: "var(--background)", border: b, boxShadow: glow ? "0 0 10px var(--accent-glow)" : "none", pointerEvents: "none" }}></span>}
    </div>
  );
}
