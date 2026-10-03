import React from "react";

const H = { sm: 28, md: 34, lg: 40 };

export function Input({ value, defaultValue, onChange, onKeyDown, placeholder, icon, trailing, size = "md", disabled = false, type = "text", autoFocus, width = "100%", style }) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return (
    <label onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "flex", alignItems: "center", gap: 8, width, height: H[size] || 34, padding: "0 " + (size === "sm" ? 9 : 11) + "px", boxSizing: "border-box", borderRadius: size === "sm" ? 8 : 10, background: "var(--surface-raised)", border: "1px solid " + (focus ? "color-mix(in srgb,var(--accent) 70%,transparent)" : hover ? "var(--border-strong)" : "var(--border)"), boxShadow: focus ? "var(--ring-focus)" : "inset 0 1px 2px rgba(0,0,0,.25)", opacity: disabled ? 0.5 : 1, cursor: "text", transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)", ...style }}>
      {icon && <span style={{ display: "grid", color: focus ? "var(--accent)" : "var(--fg-subtle)", transition: "color var(--dur-base)" }}>{icon}</span>}
      <input type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled} autoFocus={autoFocus}
        onChange={(e) => onChange && onChange(e.target.value)} onKeyDown={(e) => onKeyDown && onKeyDown(e)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ flex: 1, minWidth: 0, height: "100%", padding: 0, border: 0, outline: "none", background: "transparent", color: "var(--fg)", fontFamily: "var(--font-sans)", fontSize: size === "lg" ? 14 : 13, caretColor: "var(--accent)" }} />
      {trailing && <span style={{ display: "inline-flex", alignItems: "center", color: "var(--fg-subtle)" }}>{trailing}</span>}
    </label>
  );
}
