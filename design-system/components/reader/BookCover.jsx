import React from "react";

const hash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); };

export function BookCover({ src, title = "", author, progress, width = 148, tilt = true, showMeta = true, onClick }) {
  const ref = React.useRef(null);
  const [m, setM] = React.useState(null);
  const h = Math.round(width * 1.5);
  const hue = hash(title) % 360;
  const onMove = (e) => { if (!tilt) return; const r = ref.current.getBoundingClientRect(); setM({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }); };
  const rx = m ? (0.5 - m.y) * 10 : 0, ry = m ? (m.x - 0.5) * 12 : 0;
  return (
    <div onClick={() => onClick && onClick()} style={{ width, display: "flex", flexDirection: "column", gap: 10, cursor: onClick ? "pointer" : "default", fontFamily: "var(--font-sans)" }}>
      <div style={{ perspective: 800 }}>
        <div ref={ref} onMouseMove={onMove} onMouseLeave={() => setM(null)}
          style={{ position: "relative", width, height: h, borderRadius: "4px 10px 10px 4px", overflow: "hidden", transform: "rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(" + (m ? -4 : 0) + "px)", transition: m ? "transform 90ms linear, box-shadow var(--dur-base)" : "transform var(--dur-slower) var(--ease-out-expo), box-shadow var(--dur-slow)", boxShadow: m ? "var(--shadow-lg), 0 0 0 1px rgba(255,255,255,.07)" : "var(--shadow-md), 0 0 0 1px rgba(255,255,255,.04)", background: "linear-gradient(160deg, hsl(" + hue + " 28% 24%), hsl(" + ((hue + 30) % 360) + " 32% 9%))" }}>
          {src ? (
            <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: width * 0.1 + "px " + width * 0.1 + "px " + width * 0.09 + "px " + width * 0.14 + "px" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: Math.max(13, width * 0.12), lineHeight: 1.1, fontWeight: 500, color: "hsl(" + hue + " 40% 88%)", textWrap: "balance" }}>{title}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: Math.max(8, width * 0.058), letterSpacing: "0.12em", textTransform: "uppercase", color: "hsl(" + hue + " 20% 66%)" }}>{author}</div>
            </div>
          )}
          <div aria-hidden="true" style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 10, background: "linear-gradient(90deg, rgba(0,0,0,.4), rgba(255,255,255,.1) 45%, transparent)" }}></div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: m ? "radial-gradient(circle at " + m.x * 100 + "% " + m.y * 100 + "%, rgba(255,255,255,.2), transparent 55%)" : "none", opacity: m ? 1 : 0, transition: "opacity var(--dur-base)", pointerEvents: "none" }}></div>
          {progress != null && (
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 3, background: "rgba(0,0,0,.55)" }}>
              <div style={{ height: "100%", width: Math.max(0, Math.min(1, progress)) * 100 + "%", background: "linear-gradient(90deg,var(--accent-lo),var(--accent-hi))", boxShadow: "0 0 8px var(--accent-glow)" }}></div>
            </div>
          )}
        </div>
      </div>
      {showMeta && title && (
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 13, lineHeight: "17px", fontWeight: 500, color: "var(--fg)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</div>
          {author && <div style={{ marginTop: 2, fontSize: 12, lineHeight: "16px", color: "var(--fg-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{author}</div>}
        </div>
      )}
    </div>
  );
}
