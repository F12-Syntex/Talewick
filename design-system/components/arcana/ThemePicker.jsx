import React from "react";

export const THEMES = [
  { id: "ember", name: "Ember", note: "Candlelit gold", motes: "up" },
  { id: "arcane", name: "Arcane", note: "Violet starlight", motes: "drift" },
  { id: "verdant", name: "Verdant", note: "Elderwood moss", motes: "drift" },
  { id: "frost", name: "Frost", note: "Moonlit ice", motes: "down" },
  { id: "bloodmoon", name: "Bloodmoon", note: "Crimson night", motes: "up" },
  { id: "parchment", name: "Parchment", note: "Scholar's vellum", motes: "drift" },
];

function Tile({ t, on, onPick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" data-theme={t.id} aria-pressed={on} onClick={() => onPick(t.id)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: "relative", display: "flex", flexDirection: "column", gap: 10, padding: 12, textAlign: "left", borderRadius: 12, cursor: "pointer", background: "var(--background)", border: "1px solid " + (on ? "var(--accent)" : hover ? "var(--border-strong)" : "var(--border)"), boxShadow: on ? "0 0 0 3px color-mix(in srgb,var(--accent) 20%,transparent), 0 0 24px -6px var(--accent-glow)" : "none", transform: hover && !on ? "translateY(-1px)" : "none", transition: "border-color var(--dur-base), box-shadow var(--dur-base), transform var(--dur-base) var(--ease-out)", fontFamily: "var(--font-sans)" }}>
      <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600, letterSpacing: "var(--tracking-display)", color: "var(--fg)" }}>{t.name}</span>
        <span style={{ width: 7, height: 7, transform: "rotate(45deg)", border: "1px solid var(--ornament)", background: on ? "var(--accent)" : "transparent", boxShadow: on ? "0 0 8px var(--accent)" : "none" }}></span>
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 6, padding: 8, borderRadius: 8, background: "var(--surface)", border: "1px solid var(--border)" }}>
        <span style={{ height: 14, flex: 1, borderRadius: 4, background: "linear-gradient(180deg,var(--accent-hi),var(--accent) 55%,var(--accent-lo))", boxShadow: "0 0 10px -2px var(--accent-glow)" }}></span>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--accent-2)", boxShadow: "0 0 8px var(--accent-2-glow)" }}></span>
        <span style={{ width: 14, height: 14, borderRadius: 4, background: "var(--surface-hover)", border: "1px solid var(--border-strong)", boxSizing: "border-box" }}></span>
      </span>
      <span style={{ fontSize: 11, color: "var(--fg-muted)" }}>{t.note}</span>
    </button>
  );
}

export function ThemePicker({ value = "ember", onChange, themes = THEMES, columns = 3 }) {
  return (
    <div role="radiogroup" style={{ display: "grid", gridTemplateColumns: "repeat(" + columns + ", minmax(0,1fr))", gap: 10 }}>
      {themes.map((t) => <Tile key={t.id} t={t} on={t.id === value} onPick={(id) => onChange && onChange(id)} />)}
    </div>
  );
}
