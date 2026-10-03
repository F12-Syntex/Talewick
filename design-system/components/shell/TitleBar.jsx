import React from "react";
import { WindowControls } from "./WindowControls.jsx";
import { Wordmark } from "../arcana/Wordmark.jsx";
import { Kbd } from "../core/Kbd.jsx";
import { Icon } from "../core/Icon.jsx";

function SearchPill({ placeholder, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={() => onClick && onClick()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ WebkitAppRegion: "no-drag", display: "flex", alignItems: "center", gap: 8, width: "min(360px, 100%)", height: 24, padding: "0 4px 0 9px", boxSizing: "border-box", borderRadius: 7, border: "1px solid " + (hover ? "var(--border-strong)" : "var(--border)"), background: hover ? "var(--surface-hover)" : "color-mix(in srgb,var(--background) 60%,transparent)", color: hover ? "var(--fg-muted)" : "var(--fg-subtle)", fontFamily: "var(--font-sans)", fontSize: 12, cursor: "pointer", boxShadow: hover ? "0 0 0 3px color-mix(in srgb,var(--accent) 10%,transparent)" : "inset 0 1px 2px rgba(0,0,0,.2)", transition: "background var(--dur-base), border-color var(--dur-base), box-shadow var(--dur-base), color var(--dur-base)" }}>
      <Icon name="search" size={13} />
      <span style={{ flex: 1, textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{placeholder}</span>
      <Kbd keys={["⌘", "K"]} />
    </button>
  );
}

export function TitleBar({ title = "Talewick", platform = "win32", variant = "classic", maximized = false, showControls = true, context, search, onSearch, actions, progress, onMinimize, onToggleMaximize, onClose }) {
  const isMac = platform === "darwin";
  const controls = showControls && !isMac && <WindowControls variant={variant === "arcane" ? "pill" : "classic"} maximized={maximized} onMinimize={onMinimize} onToggleMaximize={onToggleMaximize} onClose={onClose} />;

  if (variant !== "arcane") {
    return (
      <header style={{ WebkitAppRegion: "drag", display: "flex", height: "var(--titlebar-height)", flexShrink: 0, alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--border)", background: "var(--surface)", userSelect: "none", boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontFamily: "var(--font-sans)", fontSize: "var(--text-xs)", lineHeight: "var(--text-xs-lh)", fontWeight: 500, letterSpacing: "var(--tracking-wide)", color: "var(--fg-muted)", paddingLeft: isMac ? "var(--titlebar-pad-mac)" : "var(--titlebar-pad-x)" }}>{title}</div>
        {controls}
      </header>
    );
  }

  const pct = progress == null ? null : Math.max(0, Math.min(1, progress)) * 100;
  return (
    <header style={{ WebkitAppRegion: "drag", position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,auto) minmax(0,1fr)", alignItems: "center", gap: 12, height: "var(--titlebar-height)", flexShrink: 0, background: "linear-gradient(180deg, var(--surface-raised), var(--surface))", userSelect: "none", boxSizing: "border-box", fontFamily: "var(--font-sans)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0, paddingLeft: isMac ? "var(--titlebar-pad-mac)" : 14 }}>
        <Wordmark size={12} />
        {context && (
          <>
            <span aria-hidden="true" style={{ width: 4, height: 4, flexShrink: 0, transform: "rotate(45deg)", background: "var(--ornament)", opacity: 0.8 }}></span>
            <span style={{ minWidth: 0, fontSize: 12, color: "var(--fg-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{context}</span>
          </>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center", minWidth: 0 }}>
        {search && <SearchPill placeholder={search} onClick={onSearch} />}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6, height: "100%", minWidth: 0 }}>
        {actions && <div style={{ WebkitAppRegion: "no-drag", display: "flex", alignItems: "center", gap: 2 }}>{actions}</div>}
        {actions && controls && <span aria-hidden="true" style={{ width: 1, height: 14, background: "var(--border-strong)", margin: "0 4px" }}></span>}
        {controls}
        {!controls && <span style={{ width: 8 }}></span>}
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 1, background: "linear-gradient(90deg, var(--border), var(--border-strong) 30%, color-mix(in srgb,var(--ornament) 60%,var(--border)) 50%, var(--border-strong) 70%, var(--border))" }}></div>
      {pct != null && (
        <div aria-hidden="true" style={{ position: "absolute", left: 0, bottom: 0, height: 1, width: pct + "%", background: "linear-gradient(90deg, transparent, var(--accent-lo) 20%, var(--accent-hi))", boxShadow: "0 0 8px var(--accent-glow)", transition: "width var(--dur-slower) var(--ease-out-expo)" }}>
          <span style={{ position: "absolute", right: -3, top: -2.5, width: 5, height: 5, transform: "rotate(45deg)", background: "var(--accent-hi)", boxShadow: "0 0 8px var(--accent)" }}></span>
        </div>
      )}
    </header>
  );
}
