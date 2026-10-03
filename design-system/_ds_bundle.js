/* @ds-bundle: {"format":4,"namespace":"TalewickDesignSystem_fc8a08","components":[{"name":"MoteField","sourcePath":"components/arcana/MoteField.jsx"},{"name":"Ornament","sourcePath":"components/arcana/Ornament.jsx"},{"name":"OrnateFrame","sourcePath":"components/arcana/OrnateFrame.jsx"},{"name":"THEMES","sourcePath":"components/arcana/ThemePicker.jsx"},{"name":"ThemePicker","sourcePath":"components/arcana/ThemePicker.jsx"},{"name":"Wordmark","sourcePath":"components/arcana/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"ShaderBackground","sourcePath":"components/effects/ShaderBackground.jsx"},{"name":"SpotlightCard","sourcePath":"components/effects/SpotlightCard.jsx"},{"name":"NOISE","sourcePath":"components/effects/shader.js"},{"name":"DotPulse","sourcePath":"components/feedback/DotPulse.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"TextScramble","sourcePath":"components/feedback/TextScramble.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"WickLoader","sourcePath":"components/feedback/WickLoader.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"},{"name":"BookCover","sourcePath":"components/reader/BookCover.jsx"},{"name":"ChapterRow","sourcePath":"components/reader/ChapterRow.jsx"},{"name":"HypeIndicator","sourcePath":"components/reader/HypeIndicator.jsx"},{"name":"AppShell","sourcePath":"components/shell/AppShell.jsx"},{"name":"TitleBar","sourcePath":"components/shell/TitleBar.jsx"},{"name":"WindowControls","sourcePath":"components/shell/WindowControls.jsx"}],"sourceHashes":{"components/arcana/MoteField.jsx":"2ca1bbdd8c60","components/arcana/Ornament.jsx":"29ce02881caa","components/arcana/OrnateFrame.jsx":"b5ae58b1db67","components/arcana/ThemePicker.jsx":"ff71f98c4236","components/arcana/Wordmark.jsx":"80640b303970","components/core/Badge.jsx":"7431f9fe37c6","components/core/Button.jsx":"98f110fba49d","components/core/Icon.jsx":"6182129a5a0d","components/core/IconButton.jsx":"689044ef4c12","components/core/Kbd.jsx":"fb2287f23e95","components/core/useInteract.js":"22dd88587131","components/effects/ShaderBackground.jsx":"82a8aef165f7","components/effects/SpotlightCard.jsx":"d69662aba155","components/effects/shader.js":"ede82729682e","components/feedback/DotPulse.jsx":"2d59898c0f2d","components/feedback/ProgressBar.jsx":"465d0ee21cbe","components/feedback/Skeleton.jsx":"8730dc876325","components/feedback/Spinner.jsx":"1b97f9fe2e3b","components/feedback/TextScramble.jsx":"7f938d667f1d","components/feedback/Toast.jsx":"0006491097a3","components/feedback/WickLoader.jsx":"49a70ebb9f52","components/forms/Input.jsx":"2d5354733c89","components/forms/SegmentedControl.jsx":"57277a7de409","components/forms/Slider.jsx":"143e8419a2db","components/forms/Switch.jsx":"275582a037b1","components/navigation/Sidebar.jsx":"6f29a27baedc","components/overlay/Dialog.jsx":"5ea80d14f14c","components/overlay/Tooltip.jsx":"a31f1acdfadb","components/reader/BookCover.jsx":"61509c0cc530","components/reader/ChapterRow.jsx":"9b65e00b3295","components/reader/HypeIndicator.jsx":"cdd50e45f224","components/shell/AppShell.jsx":"204b9f34b1d2","components/shell/TitleBar.jsx":"04d44322515c","components/shell/WindowControls.jsx":"bfff877c5d7f","ui_kits/desktop/Library.jsx":"d5eed960d17c","ui_kits/desktop/Window.jsx":"23a0bbfff486"},"inlinedExternals":[],"unexposedExports":[{"name":"colorVec","sourcePath":"components/effects/shader.js"},{"name":"useInteract","sourcePath":"components/core/useInteract.js"},{"name":"useShader","sourcePath":"components/effects/shader.js"},{"name":"useThemeKey","sourcePath":"components/effects/shader.js"}]} */

(() => {

const __ds_ns = (window.TalewickDesignSystem_fc8a08 = window.TalewickDesignSystem_fc8a08 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/arcana/Ornament.jsx
try { (() => {
function Diamond({
  size = 6,
  filled = false,
  glow = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      transform: "rotate(45deg)",
      border: "1px solid var(--ornament)",
      background: filled ? "var(--accent)" : "transparent",
      boxShadow: glow ? "0 0 10px var(--accent-glow)" : "none",
      boxSizing: "border-box"
    }
  });
}
function Ornament({
  label,
  glow = true,
  width = "100%",
  style
}) {
  const line = dir => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      minWidth: 12,
      height: 1,
      background: "linear-gradient(" + dir + ",transparent,var(--ornament))",
      opacity: 0.7
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width,
      ...style
    }
  }, line("90deg"), /*#__PURE__*/React.createElement(Diamond, {
    size: 4
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "var(--tracking-rune)",
      textTransform: "uppercase",
      color: "var(--ornament)",
      whiteSpace: "nowrap",
      textShadow: glow ? "0 0 12px var(--accent-glow)" : "none"
    }
  }, label) : /*#__PURE__*/React.createElement(Diamond, {
    size: 7,
    filled: true,
    glow: glow
  }), /*#__PURE__*/React.createElement(Diamond, {
    size: 4
  }), line("270deg"));
}
Object.assign(__ds_scope, { Ornament });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/arcana/Ornament.jsx", error: String((e && e.message) || e) }); }

// components/arcana/OrnateFrame.jsx
try { (() => {
function OrnateFrame({
  children,
  size = 14,
  offset = -1,
  color = "var(--ornament)",
  glow = false,
  crest = false,
  style
}) {
  const b = "1px solid " + color;
  const corner = pos => {
    const s = {
      position: "absolute",
      width: size,
      height: size,
      pointerEvents: "none",
      filter: glow ? "drop-shadow(0 0 4px var(--accent-glow))" : "none"
    };
    if (pos[0] === "t") {
      s.top = offset;
      s.borderTop = b;
    } else {
      s.bottom = offset;
      s.borderBottom = b;
    }
    if (pos[1] === "l") {
      s.left = offset;
      s.borderLeft = b;
    } else {
      s.right = offset;
      s.borderRight = b;
    }
    s.borderRadius = pos === "tl" ? "4px 0 0 0" : pos === "tr" ? "0 4px 0 0" : pos === "bl" ? "0 0 0 4px" : "0 0 4px 0";
    return /*#__PURE__*/React.createElement("span", {
      key: pos,
      "aria-hidden": "true",
      style: s
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...style
    }
  }, children, ["tl", "tr", "bl", "br"].map(corner), crest && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: offset - 4,
      left: "50%",
      width: 7,
      height: 7,
      marginLeft: -3.5,
      transform: "rotate(45deg)",
      background: "var(--background)",
      border: b,
      boxShadow: glow ? "0 0 10px var(--accent-glow)" : "none",
      pointerEvents: "none"
    }
  }));
}
Object.assign(__ds_scope, { OrnateFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/arcana/OrnateFrame.jsx", error: String((e && e.message) || e) }); }

// components/arcana/ThemePicker.jsx
try { (() => {
const THEMES = [{
  id: "ember",
  name: "Ember",
  note: "Candlelit gold",
  motes: "up"
}, {
  id: "arcane",
  name: "Arcane",
  note: "Violet starlight",
  motes: "drift"
}, {
  id: "verdant",
  name: "Verdant",
  note: "Elderwood moss",
  motes: "drift"
}, {
  id: "frost",
  name: "Frost",
  note: "Moonlit ice",
  motes: "down"
}, {
  id: "bloodmoon",
  name: "Bloodmoon",
  note: "Crimson night",
  motes: "up"
}, {
  id: "parchment",
  name: "Parchment",
  note: "Scholar's vellum",
  motes: "drift"
}];
function Tile({
  t,
  on,
  onPick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-theme": t.id,
    "aria-pressed": on,
    onClick: () => onPick(t.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: 12,
      textAlign: "left",
      borderRadius: 12,
      cursor: "pointer",
      background: "var(--background)",
      border: "1px solid " + (on ? "var(--accent)" : hover ? "var(--border-strong)" : "var(--border)"),
      boxShadow: on ? "0 0 0 3px color-mix(in srgb,var(--accent) 20%,transparent), 0 0 24px -6px var(--accent-glow)" : "none",
      transform: hover && !on ? "translateY(-1px)" : "none",
      transition: "border-color var(--dur-base), box-shadow var(--dur-base), transform var(--dur-base) var(--ease-out)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "var(--tracking-display)",
      color: "var(--fg)"
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      transform: "rotate(45deg)",
      border: "1px solid var(--ornament)",
      background: on ? "var(--accent)" : "transparent",
      boxShadow: on ? "0 0 8px var(--accent)" : "none"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: 8,
      borderRadius: 8,
      background: "var(--surface)",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 14,
      flex: 1,
      borderRadius: 4,
      background: "linear-gradient(180deg,var(--accent-hi),var(--accent) 55%,var(--accent-lo))",
      boxShadow: "0 0 10px -2px var(--accent-glow)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: "var(--accent-2)",
      boxShadow: "0 0 8px var(--accent-2-glow)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 4,
      background: "var(--surface-hover)",
      border: "1px solid var(--border-strong)",
      boxSizing: "border-box"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--fg-muted)"
    }
  }, t.note));
}
function ThemePicker({
  value = "ember",
  onChange,
  themes = THEMES,
  columns = 3
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(" + columns + ", minmax(0,1fr))",
      gap: 10
    }
  }, themes.map(t => /*#__PURE__*/React.createElement(Tile, {
    key: t.id,
    t: t,
    on: t.id === value,
    onPick: id => onChange && onChange(id)
  })));
}
Object.assign(__ds_scope, { THEMES, ThemePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/arcana/ThemePicker.jsx", error: String((e && e.message) || e) }); }

// components/arcana/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 20,
  glow = true,
  color = "var(--fg)",
  text = "Talewick"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size,
      lineHeight: 1,
      fontWeight: 600,
      letterSpacing: "0.08em",
      color,
      textShadow: glow ? "0 0 " + Math.round(size * 0.9) + "px var(--accent-glow)" : "none",
      whiteSpace: "nowrap"
    }
  }, text);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/arcana/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONE = {
  neutral: "var(--fg-muted)",
  accent: "var(--accent)",
  success: "var(--success)",
  danger: "var(--danger-fg)",
  "heat-1": "var(--heat-1)",
  "heat-2": "var(--heat-2)",
  "heat-3": "var(--heat-3)",
  "heat-4": "var(--heat-4)",
  "heat-5": "var(--heat-5)"
};
function Badge({
  tone = "neutral",
  variant = "soft",
  dot = false,
  icon,
  children,
  style
}) {
  const c = TONE[tone] || TONE.neutral;
  const V = {
    soft: {
      background: "color-mix(in srgb," + c + " 14%,transparent)",
      color: c,
      border: "1px solid color-mix(in srgb," + c + " 22%,transparent)"
    },
    outline: {
      background: "transparent",
      color: c,
      border: "1px solid color-mix(in srgb," + c + " 45%,transparent)"
    },
    solid: {
      background: c,
      color: "var(--on-accent)",
      border: "1px solid transparent"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: 20,
      padding: "0 7px",
      boxSizing: "border-box",
      borderRadius: 999,
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.01em",
      whiteSpace: "nowrap",
      ...V,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: variant === "solid" ? "currentColor" : c,
      boxShadow: "0 0 6px " + c
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const pascal = s => String(s || "").split(/[-_\s]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");

// Renders a Lucide icon from window.lucide (load lucide UMD from CDN on the page).
function Icon({
  name,
  size = 16,
  strokeWidth = 1.5,
  color = "currentColor",
  style
}) {
  const L = typeof window !== "undefined" ? window.lucide : null;
  let node = L && L.icons ? L.icons[pascal(name)] : null;
  if (!node) return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flexShrink: 0
    }
  });
  if (node[0] === "svg") node = node[2];
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    }
  }, node.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
function Kbd({
  keys,
  children
}) {
  const list = keys || [children];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 3
    }
  }, list.map((k, i) => /*#__PURE__*/React.createElement("kbd", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 18,
      height: 18,
      padding: "0 5px",
      boxSizing: "border-box",
      borderRadius: 5,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      lineHeight: 1,
      color: "var(--fg-muted)",
      background: "linear-gradient(180deg,var(--surface-hover),var(--surface-raised))",
      border: "1px solid var(--border-strong)",
      boxShadow: "inset 0 -1px 0 rgba(0,0,0,.45)"
    }
  }, k)));
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/core/useInteract.js
try { (() => {
function useInteract(disabled) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  return [{
    hover: hover && !disabled,
    press: press && !disabled,
    focus
  }, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: e => setFocus(!!(e.target.matches && e.target.matches(":focus-visible"))),
    onBlur: () => setFocus(false)
  }];
}
Object.assign(__ds_scope, { useInteract });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/useInteract.js", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 28,
  md: 34,
  lg: 42
};
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  active = false,
  disabled = false,
  onClick,
  style
}) {
  const d = SIZES[size] || SIZES.md;
  const [st, on] = __ds_scope.useInteract(disabled);
  const V = {
    ghost: {
      background: active ? "color-mix(in srgb,var(--accent) 14%,transparent)" : st.hover ? "var(--surface-hover)" : "transparent",
      color: active ? "var(--accent)" : st.hover ? "var(--fg)" : "var(--fg-muted)",
      border: "1px solid transparent"
    },
    secondary: {
      background: st.hover ? "var(--surface-hover)" : "var(--surface-raised)",
      color: active ? "var(--accent)" : "var(--fg)",
      border: "1px solid " + (st.hover ? "var(--border-strong)" : "var(--border)"),
      boxShadow: "var(--shadow-inset-top)"
    },
    primary: {
      background: "linear-gradient(180deg,var(--accent-hi),var(--accent) 55%,var(--accent-lo))",
      color: "var(--on-accent)",
      border: "1px solid color-mix(in srgb,var(--accent-hi) 55%,transparent)",
      boxShadow: st.hover ? "0 0 0 1px var(--accent-glow), 0 8px 22px -6px var(--accent-glow)" : "inset 0 1px 0 rgba(255,255,255,.3)"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    "aria-pressed": active || undefined,
    disabled: disabled,
    onClick: e => onClick && onClick(e)
  }, on, {
    style: {
      display: "grid",
      placeItems: "center",
      width: d,
      height: d,
      padding: 0,
      borderRadius: size === "sm" ? 8 : size === "lg" ? 12 : 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: st.press ? "scale(0.92)" : "scale(1)",
      transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base)",
      outline: st.focus ? "2px solid var(--accent)" : "none",
      outlineOffset: 2,
      flexShrink: 0,
      ...V,
      ...style
    }
  }), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/effects/SpotlightCard.jsx
try { (() => {
function SpotlightCard({
  children,
  padding = 20,
  radius = "var(--radius-lg)",
  glow = "var(--accent)",
  onClick,
  style
}) {
  const ref = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  const onMove = e => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px");
    el.style.setProperty("--my", e.clientY - r.top + "px");
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseMove: onMove,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => onClick && onClick(),
    style: {
      position: "relative",
      borderRadius: radius,
      padding: 1,
      background: "var(--border)",
      cursor: onClick ? "pointer" : "default",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transition: "box-shadow var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: radius,
      background: "radial-gradient(360px circle at var(--mx,50%) var(--my,0px), color-mix(in srgb," + glow + " 70%,transparent), transparent 60%)",
      opacity: hover ? 1 : 0,
      transition: "opacity var(--dur-slow) var(--ease-out)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      boxSizing: "border-box",
      borderRadius: "calc(" + radius + " - 1px)",
      padding,
      background: "var(--surface)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(480px circle at var(--mx,50%) var(--my,0px), color-mix(in srgb," + glow + " 9%,transparent), transparent 55%)",
      opacity: hover ? 1 : 0,
      transition: "opacity var(--dur-slow) var(--ease-out)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%"
    }
  }, children)));
}
Object.assign(__ds_scope, { SpotlightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/effects/SpotlightCard.jsx", error: String((e && e.message) || e) }); }

// components/effects/shader.js
try { (() => {
const VERT = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
const NOISE = `
float tw_h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float tw_n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(tw_h(i),tw_h(i+vec2(1.,0.)),f.x),mix(tw_h(i+vec2(0.,1.)),tw_h(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*tw_n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
`;

// Resolve "#hex" or "var(--token)" to a [r,g,b] 0-1 vector.
function colorVec(c, el) {
  let v = c || "#000";
  if (v.startsWith("var(")) {
    const name = v.slice(4, -1).trim();
    v = getComputedStyle(el || document.documentElement).getPropertyValue(name).trim() || "#000";
  }
  if (v.startsWith("rgb")) {
    const n = v.match(/[\d.]+/g).map(Number);
    return [n[0] / 255, n[1] / 255, n[2] / 255];
  }
  let h = v.replace("#", "");
  if (h.length === 3) h = h.split("").map(x => x + x).join("");
  const n = parseInt(h.slice(0, 6), 16);
  return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
}

// Increments whenever any data-theme attribute changes, so canvases can re-read token colours.
function useThemeKey() {
  const [k, setK] = React.useState(0);
  React.useEffect(() => {
    const mo = new MutationObserver(() => setK(x => x + 1));
    mo.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ["data-theme"]
    });
    return () => mo.disconnect();
  }, []);
  return k;
}

// Minimal fullscreen-triangle WebGL runner. uniformsRef.current() returns {name: number|vec}.
function useShader(canvasRef, frag, uniformsRef, opts = {}) {
  React.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const gl = c.getContext("webgl", {
      premultipliedAlpha: true,
      alpha: true,
      antialias: false
    });
    if (!gl) return;
    const sh = (t, s) => {
      const o = gl.createShader(t);
      gl.shaderSource(o, s);
      gl.compileShader(o);
      if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) console.warn(gl.getShaderInfoLog(o));
      return o;
    };
    const pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, "precision highp float;uniform vec2 uRes;uniform float uTime;uniform vec2 uMouse;\n" + frag));
    gl.linkProgram(pr);
    gl.useProgram(pr);
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const cache = {};
    const U = n => n in cache ? cache[n] : cache[n] = gl.getUniformLocation(pr, n);
    const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, opts.maxDpr || 1.5);
    let raf,
      mouse = [0.5, 0.5],
      sm = [0.5, 0.5];
    const t0 = performance.now();
    const onMove = e => {
      const r = c.getBoundingClientRect();
      mouse = [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height];
    };
    window.addEventListener("pointermove", onMove);
    const frame = () => {
      const w = Math.max(1, Math.round(c.clientWidth * dpr)),
        h = Math.max(1, Math.round(c.clientHeight * dpr));
      if (c.width !== w || c.height !== h) {
        c.width = w;
        c.height = h;
        gl.viewport(0, 0, w, h);
      }
      sm = [sm[0] + (mouse[0] - sm[0]) * 0.06, sm[1] + (mouse[1] - sm[1]) * 0.06];
      gl.uniform2f(U("uRes"), w, h);
      gl.uniform1f(U("uTime"), (performance.now() - t0) / 1000 * (opts.speed == null ? 1 : opts.speed));
      gl.uniform2f(U("uMouse"), sm[0], sm[1]);
      const u = uniformsRef && uniformsRef.current ? uniformsRef.current() : {};
      for (const k in u) {
        const v = u[k];
        if (typeof v === "number") gl.uniform1f(U(k), v);else if (v.length === 2) gl.uniform2fv(U(k), v);else gl.uniform3fv(U(k), v);
      }
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduce && !opts.paused) raf = requestAnimationFrame(frame);
    };
    frame();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      const ext = gl.getExtension("WEBGL_lose_context");
      if (ext) ext.loseContext();
    };
  }, [frag, opts.paused, opts.speed]);
}
Object.assign(__ds_scope, { NOISE, colorVec, useThemeKey, useShader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/effects/shader.js", error: String((e && e.message) || e) }); }

// components/arcana/MoteField.jsx
try { (() => {
// Floating motes: embers (up), snow (down) or fireflies (drift). Canvas 2D, additive glow.
function MoteField({
  density = 36,
  mode = "up",
  color = "var(--accent)",
  color2 = "var(--accent-2)",
  speed = 1,
  size = 1.6,
  paused = false,
  style
}) {
  const ref = React.useRef(null);
  const tk = __ds_scope.useThemeKey();
  const cols = React.useRef(null);
  React.useEffect(() => {
    cols.current = null;
  }, [tk, color, color2]);
  React.useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0,
      H = 0,
      raf,
      parts = [];
    const spawn = anywhere => ({
      x: Math.random() * W,
      y: anywhere ? Math.random() * H : mode === "down" ? -10 : H + 10,
      r: size * (0.5 + Math.random()),
      v: (0.15 + Math.random() * 0.45) * speed,
      ph: Math.random() * 6.28,
      sw: 0.3 + Math.random() * 0.8,
      two: Math.random() < 0.35
    });
    const resize = () => {
      W = c.clientWidth;
      H = c.clientHeight;
      c.width = W * dpr;
      c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(density * W * H / 300000) + 4;
      parts = Array.from({
        length: n
      }, () => spawn(true));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(c);
    const toRgb = v => v.map(x => Math.round(x * 255)).join(",");
    let t = 0;
    const frame = () => {
      if (!cols.current) {
        const bg = __ds_scope.colorVec("var(--background)", c);
        cols.current = [toRgb(__ds_scope.colorVec(color, c)), toRgb(__ds_scope.colorVec(color2, c)), 0.2126 * bg[0] + 0.7152 * bg[1] + 0.0722 * bg[2] > 0.5];
      }
      t += 0.016;
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = cols.current[2] ? "source-over" : "lighter";
      for (const p of parts) {
        if (mode === "up") {
          p.y -= p.v;
          p.x += Math.sin(t * p.sw + p.ph) * 0.25;
        } else if (mode === "down") {
          p.y += p.v * 0.8;
          p.x += Math.sin(t * p.sw + p.ph) * 0.35;
        } else {
          p.x += Math.cos(t * p.sw + p.ph) * 0.3;
          p.y += Math.sin(t * p.sw * 0.8 + p.ph * 2) * 0.3;
        }
        if (p.y < -12 || p.y > H + 12 || p.x < -12 || p.x > W + 12) Object.assign(p, spawn(mode === "drift"));
        const a = mode === "drift" ? Math.max(0, Math.sin(t * 1.4 * p.sw + p.ph)) : 0.45 + 0.55 * Math.sin(t * 2 * p.sw + p.ph);
        const rgb = p.two ? cols.current[1] : cols.current[0];
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, "rgba(" + rgb + "," + 0.9 * a + ")");
        g.addColorStop(0.25, "rgba(" + rgb + "," + 0.35 * a + ")");
        g.addColorStop(1, "rgba(" + rgb + ",0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, 6.283);
        ctx.fill();
      }
      if (!reduce && !paused) raf = requestAnimationFrame(frame);
    };
    frame();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density, mode, speed, size, paused, color, color2]);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      display: "block",
      ...style
    }
  });
}
Object.assign(__ds_scope, { MoteField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/arcana/MoteField.jsx", error: String((e && e.message) || e) }); }

// components/effects/ShaderBackground.jsx
try { (() => {
const FRAG = `uniform vec3 uA;uniform vec3 uB;uniform vec3 uBase;uniform float uIntensity;uniform float uInteractive;
${__ds_scope.NOISE}
void main(){
  vec2 uv=gl_FragCoord.xy/uRes;
  vec2 p=uv*vec2(uRes.x/uRes.y,1.)*1.6;
  float t=uTime*.045;
  vec2 q=vec2(fbm(p+t),fbm(p+vec2(5.2,1.3)-t));
  vec2 r=vec2(fbm(p+3.*q+vec2(1.7,9.2)+t*.6),fbm(p+3.*q+vec2(8.3,2.8)-t*.4));
  float f=fbm(p+2.5*r);
  vec3 col=mix(uBase,uA,smoothstep(.42,.95,f)*.7);
  col=mix(col,uB,smoothstep(.6,1.1,length(r)*f*1.4)*.45);
  float m=1.-distance(uv,uMouse)*1.3;
  col+=uA*pow(max(m,0.),3.)*.12*uInteractive;
  float vig=smoothstep(1.25,.25,distance(uv,vec2(.5,.6)));
  col=mix(uBase,col,uIntensity*vig);
  col+=(tw_h(gl_FragCoord.xy+fract(uTime))-.5)*.012;
  gl_FragColor=vec4(col,1.);
}`;
function ShaderBackground({
  colorA = "var(--accent)",
  colorB = "var(--accent-2)",
  base = "var(--background)",
  intensity = 0.6,
  speed = 1,
  interactive = true,
  paused = false,
  style,
  children
}) {
  const ref = React.useRef(null);
  const uni = React.useRef(null);
  const tk = __ds_scope.useThemeKey();
  const cache = React.useRef({});
  const key = tk + "|" + colorA + "|" + colorB + "|" + base;
  uni.current = () => {
    if (cache.current.key !== key) {
      const el = ref.current;
      cache.current = {
        key,
        a: __ds_scope.colorVec(colorA, el),
        b: __ds_scope.colorVec(colorB, el),
        base: __ds_scope.colorVec(base, el)
      };
    }
    const c = cache.current;
    return {
      uA: c.a,
      uB: c.b,
      uBase: c.base,
      uIntensity: intensity,
      uInteractive: interactive ? 1 : 0
    };
  };
  __ds_scope.useShader(ref, FRAG, uni, {
    speed,
    paused,
    maxDpr: 1
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      background: base,
      ...style
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block"
    }
  }), children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%"
    }
  }, children));
}
Object.assign(__ds_scope, { ShaderBackground });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/effects/ShaderBackground.jsx", error: String((e && e.message) || e) }); }

// components/feedback/DotPulse.jsx
try { (() => {
function DotPulse({
  size = 6,
  color = "var(--accent)",
  gap
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": "Loading",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: gap == null ? size * 0.7 : gap
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      boxShadow: "0 0 " + size * 1.5 + "px " + color,
      animation: "tw-dot 1.2s var(--ease-in-out) infinite",
      animationDelay: i * 0.16 + "s"
    }
  })));
}
Object.assign(__ds_scope, { DotPulse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/DotPulse.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
const TONES = {
  accent: ["var(--accent-lo)", "var(--accent-hi)", "var(--accent)"],
  fg: ["var(--fg-muted)", "var(--fg)", "var(--fg)"],
  success: ["color-mix(in srgb,var(--success) 60%,#000)", "var(--success)", "var(--success)"]
};
function ProgressBar({
  value = 0,
  indeterminate = false,
  tone = "accent",
  height = 4,
  glow = true,
  style
}) {
  const [lo, hi, c] = TONES[tone] || TONES.accent;
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": indeterminate ? undefined : Math.round(pct),
    style: {
      position: "relative",
      width: "100%",
      height,
      borderRadius: 999,
      background: "var(--surface-hover)",
      overflow: "visible",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 999,
      overflow: "hidden"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "35%",
      borderRadius: 999,
      background: "linear-gradient(90deg, transparent, " + hi + ", transparent)",
      animation: "tw-indeterminate 1.4s var(--ease-in-out) infinite"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: pct + "%",
      borderRadius: 999,
      background: "linear-gradient(90deg," + lo + "," + hi + ")",
      transition: "width var(--dur-slower) var(--ease-out-expo)"
    }
  })), glow && !indeterminate && pct > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: pct + "%",
      width: height * 2,
      height: height * 2,
      marginLeft: -height,
      marginTop: -height,
      borderRadius: "50%",
      background: hi,
      boxShadow: "0 0 " + height * 3 + "px " + height + "px " + c,
      opacity: 0.9,
      transition: "left var(--dur-slower) var(--ease-out-expo)",
      pointerEvents: "none"
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  width = "100%",
  height = 14,
  radius = "var(--radius-sm)",
  lines,
  style
}) {
  const block = (w, h, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: "block",
      width: w,
      height: h,
      borderRadius: radius,
      background: "linear-gradient(90deg, var(--surface-raised) 0%, var(--surface-hover) 40%, var(--surface-raised) 80%)",
      backgroundSize: "200% 100%",
      animation: "tw-shimmer 1.8s linear infinite",
      ...style
    }
  });
  if (lines) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width
      }
    }, Array.from({
      length: lines
    }, (_, i) => block(i === lines - 1 && lines > 1 ? "62%" : "100%", height, i)));
  }
  return block(width, height);
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function Spinner({
  size = 16,
  color = "var(--accent)",
  thickness,
  speed = 0.8
}) {
  const t = thickness || Math.max(1.5, size / 9);
  const mask = "radial-gradient(farthest-side, transparent calc(100% - " + t + "px), #000 calc(100% - " + t + "px + 0.5px))";
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": "Loading",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "50%",
      color,
      background: "conic-gradient(from 0deg, transparent 0deg, currentColor 300deg, transparent 360deg)",
      WebkitMask: mask,
      mask,
      animation: "tw-spin " + speed + "s linear infinite",
      flexShrink: 0
    }
  });
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 28,
    px: 10,
    fs: 12,
    r: 8,
    gap: 6
  },
  md: {
    h: 34,
    px: 14,
    fs: 13,
    r: 10,
    gap: 8
  },
  lg: {
    h: 42,
    px: 18,
    fs: 14,
    r: 12,
    gap: 8
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  type = "button",
  style
}) {
  const s = SIZES[size] || SIZES.md;
  const [st, on] = __ds_scope.useInteract(disabled || loading);
  const V = {
    primary: {
      background: "linear-gradient(180deg,var(--accent-hi),var(--accent) 55%,var(--accent-lo))",
      color: "var(--on-accent)",
      border: "1px solid color-mix(in srgb,var(--accent-hi) 55%,transparent)",
      boxShadow: st.hover ? "inset 0 1px 0 rgba(255,255,255,.35), 0 0 0 1px var(--accent-glow), 0 10px 28px -8px var(--accent-glow)" : "inset 0 1px 0 rgba(255,255,255,.3), 0 1px 2px rgba(0,0,0,.4)",
      filter: st.hover ? "brightness(1.06)" : "none"
    },
    secondary: {
      background: st.hover ? "var(--surface-hover)" : "var(--surface-raised)",
      color: "var(--fg)",
      border: "1px solid " + (st.hover ? "var(--border-strong)" : "var(--border)"),
      boxShadow: "var(--shadow-inset-top), var(--shadow-sm)"
    },
    ghost: {
      background: st.hover ? "var(--surface-hover)" : "transparent",
      color: st.hover ? "var(--fg)" : "var(--fg-muted)",
      border: "1px solid transparent"
    },
    danger: {
      background: "color-mix(in srgb,var(--danger) " + (st.hover ? 28 : 16) + "%,transparent)",
      color: "var(--danger-fg)",
      border: "1px solid color-mix(in srgb,var(--danger) 40%,transparent)"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: e => onClick && onClick(e)
  }, on, {
    style: {
      position: "relative",
      flexShrink: 0,
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      height: s.h,
      padding: "0 " + s.px + "px",
      borderRadius: s.r,
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      fontWeight: 500,
      whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : loading ? "progress" : "pointer",
      opacity: disabled ? 0.45 : 1,
      overflow: "hidden",
      transform: st.press ? "scale(0.97)" : "scale(1)",
      transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), filter var(--dur-base)",
      outline: st.focus ? "2px solid var(--accent)" : "none",
      outlineOffset: 2,
      ...V,
      ...style
    }
  }), variant === "primary" && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "45%",
      left: st.hover ? "130%" : "-60%",
      background: "linear-gradient(100deg,transparent,rgba(255,255,255,.4),transparent)",
      transition: st.hover ? "left 750ms var(--ease-out)" : "none",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: s.gap,
      opacity: loading ? 0 : 1
    }
  }, icon, children, iconRight), loading && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Spinner, {
    size: s.fs + 2,
    color: "currentColor"
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TextScramble.jsx
try { (() => {
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#%&*+=<>/";
function TextScramble({
  text = "",
  duration = 900,
  loop = false,
  pause = 1400,
  mono = true,
  style
}) {
  const [state, setState] = React.useState({
    done: text,
    rest: ""
  });
  React.useEffect(() => {
    let raf,
      timer,
      alive = true;
    const run = () => {
      const t0 = performance.now();
      const step = now => {
        if (!alive) return;
        const k = Math.min(1, (now - t0) / duration);
        const n = Math.floor(k * text.length);
        let rest = "";
        for (let i = n; i < text.length; i++) rest += text[i] === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        setState({
          done: text.slice(0, n),
          rest
        });
        if (k < 1) raf = requestAnimationFrame(step);else if (loop) timer = setTimeout(run, pause);
      };
      raf = requestAnimationFrame(step);
    };
    run();
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [text, duration, loop, pause]);
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": text,
    style: {
      fontFamily: mono ? "var(--font-mono)" : "inherit",
      whiteSpace: "pre",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, state.done), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--accent)",
      opacity: 0.8
    }
  }, state.rest));
}
Object.assign(__ds_scope, { TextScramble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TextScramble.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONE = {
  neutral: "var(--fg-muted)",
  accent: "var(--accent)",
  success: "var(--success)",
  danger: "var(--danger-fg)",
  info: "var(--heat-1)"
};
function Toast({
  title,
  description,
  tone = "neutral",
  icon,
  action,
  onClose,
  duration,
  style
}) {
  const c = TONE[tone] || TONE.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      position: "relative",
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      width: 340,
      boxSizing: "border-box",
      padding: "12px 12px 12px 14px",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-glass)) saturate(140%)",
      WebkitBackdropFilter: "blur(var(--blur-glass)) saturate(140%)",
      border: "1px solid var(--border-glass)",
      boxShadow: "var(--shadow-lg), var(--shadow-inset-top)",
      overflow: "hidden",
      fontFamily: "var(--font-sans)",
      animation: "tw-toast-in 420ms var(--ease-out-expo)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: 28,
      height: 28,
      flexShrink: 0,
      borderRadius: 8,
      color: c,
      background: "color-mix(in srgb," + c + " 14%,transparent)"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      paddingTop: icon ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: "18px",
      fontWeight: 500,
      color: "var(--fg)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 12,
      lineHeight: "17px",
      color: "var(--fg-muted)"
    }
  }, description)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      alignSelf: "center"
    }
  }, action), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: () => onClose(),
    style: {
      display: "grid",
      placeItems: "center",
      width: 22,
      height: 22,
      flexShrink: 0,
      border: 0,
      borderRadius: 6,
      background: "transparent",
      color: "var(--fg-subtle)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l9 9M10 1l-9 9"
  }))), duration && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      height: 2,
      background: c,
      opacity: 0.6,
      animation: "tw-deplete " + duration + "ms linear forwards"
    }
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/WickLoader.jsx
try { (() => {
const FRAG = `uniform vec3 uCore;uniform vec3 uEdge;uniform float uHeat;
${__ds_scope.NOISE}
void main(){
  vec2 uv=gl_FragCoord.xy/uRes;
  vec2 p=vec2((uv.x-.5)*uRes.x/uRes.y,uv.y-.2);
  float t=uTime;
  float y=p.y;
  float nz=fbm(vec2(p.x*4.,y*3.-t*2.2));
  float sway=sin(t*1.7+y*4.)*.03*y+(nz-.5)*.14*y;
  float x=p.x-sway;
  float h=.6*(.85+.2*uHeat);
  float w=.16*sqrt(clamp(y+.05,0.,1.))*clamp(1.-y/h,0.,1.)*(1.+.25*uHeat);
  float f=1.-smoothstep(w*.3,w+.003,abs(x));
  f*=smoothstep(-.06,0.,y);
  f*=.75+.5*nz;
  f=clamp(f,0.,1.);
  float core=smoothstep(.5,1.,f)*(1.-smoothstep(0.,h*.65,y));
  vec3 col=mix(uEdge,uCore,core);
  float g=exp(-length(vec2(x,(y-.14)*.8))*7.)*.42*(.8+.4*uHeat);
  float wick=(1.-smoothstep(.006,.012,abs(p.x)))*step(-.09,y)*step(y,.01);
  vec3 c=col*f+uEdge*g*(1.-f);
  float a=max(f,g);
  c=mix(c,vec3(.14,.13,.15),wick*(1.-f));
  a=max(a,wick);
  gl_FragColor=vec4(c,a);
}`;
function WickLoader({
  size = 48,
  heat = 0.3,
  core = "#fff4dc",
  edge = "var(--accent)",
  label,
  paused = false
}) {
  const ref = React.useRef(null);
  const uni = React.useRef(null);
  const tk = __ds_scope.useThemeKey();
  const cache = React.useRef({});
  const key = tk + "|" + core + "|" + edge;
  uni.current = () => {
    if (cache.current.key !== key) cache.current = {
      key,
      c: __ds_scope.colorVec(core, ref.current),
      e: __ds_scope.colorVec(edge, ref.current)
    };
    return {
      uCore: cache.current.c,
      uEdge: cache.current.e,
      uHeat: heat
    };
  };
  __ds_scope.useShader(ref, FRAG, uni, {
    paused
  });
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-label": label || "Loading",
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    style: {
      width: size,
      height: size * 1.25,
      display: "block"
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { WickLoader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/WickLoader.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const H = {
  sm: 28,
  md: 34,
  lg: 40
};
function Input({
  value,
  defaultValue,
  onChange,
  onKeyDown,
  placeholder,
  icon,
  trailing,
  size = "md",
  disabled = false,
  type = "text",
  autoFocus,
  width = "100%",
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width,
      height: H[size] || 34,
      padding: "0 " + (size === "sm" ? 9 : 11) + "px",
      boxSizing: "border-box",
      borderRadius: size === "sm" ? 8 : 10,
      background: "var(--surface-raised)",
      border: "1px solid " + (focus ? "color-mix(in srgb,var(--accent) 70%,transparent)" : hover ? "var(--border-strong)" : "var(--border)"),
      boxShadow: focus ? "var(--ring-focus)" : "inset 0 1px 2px rgba(0,0,0,.25)",
      opacity: disabled ? 0.5 : 1,
      cursor: "text",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      color: focus ? "var(--accent)" : "var(--fg-subtle)",
      transition: "color var(--dur-base)"
    }
  }, icon), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    autoFocus: autoFocus,
    onChange: e => onChange && onChange(e.target.value),
    onKeyDown: e => onKeyDown && onKeyDown(e),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      padding: 0,
      border: 0,
      outline: "none",
      background: "transparent",
      color: "var(--fg)",
      fontFamily: "var(--font-sans)",
      fontSize: size === "lg" ? 14 : 13,
      caretColor: "var(--accent)"
    }
  }), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      color: "var(--fg-subtle)"
    }
  }, trailing));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  size = "md",
  fullWidth = false
}) {
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const [inner, setInner] = React.useState(defaultValue == null ? opts[0] && opts[0].value : defaultValue);
  const cur = value == null ? inner : value;
  const refs = React.useRef({});
  const wrap = React.useRef(null);
  const [ind, setInd] = React.useState(null);
  React.useLayoutEffect(() => {
    const measure = () => {
      const el = refs.current[cur];
      if (el) setInd({
        left: el.offsetLeft,
        width: el.offsetWidth
      });
    };
    measure();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
    if (ro && wrap.current) ro.observe(wrap.current);
    return () => ro && ro.disconnect();
  }, [cur, options.length]);
  const h = size === "sm" ? 26 : 30;
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    role: "tablist",
    style: {
      position: "relative",
      display: fullWidth ? "flex" : "inline-flex",
      padding: 3,
      gap: 2,
      borderRadius: 10,
      background: "var(--background)",
      border: "1px solid var(--border)",
      boxShadow: "inset 0 1px 2px rgba(0,0,0,.3)"
    }
  }, ind && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 3,
      bottom: 3,
      left: ind.left,
      width: ind.width,
      borderRadius: 7,
      background: "var(--surface-hover)",
      border: "1px solid var(--border-strong)",
      boxSizing: "border-box",
      boxShadow: "0 1px 2px rgba(0,0,0,.4), var(--shadow-inset-top)",
      transition: "left var(--dur-slow) var(--ease-out-expo), width var(--dur-slow) var(--ease-out-expo)"
    }
  }), opts.map(o => {
    const on = o.value === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      ref: el => refs.current[o.value] = el,
      type: "button",
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        if (value == null) setInner(o.value);
        onChange && onChange(o.value);
      },
      style: {
        position: "relative",
        zIndex: 1,
        flex: fullWidth ? 1 : "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        height: h,
        padding: "0 12px",
        border: 0,
        borderRadius: 7,
        background: "transparent",
        color: on ? "var(--fg)" : "var(--fg-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: size === "sm" ? 12 : 13,
        fontWeight: 500,
        cursor: "pointer",
        transition: "color var(--dur-base) var(--ease-out)"
      }
    }, o.icon, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function Slider({
  value,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  showValue = true,
  format,
  disabled = false,
  width = "100%"
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const [drag, setDrag] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);
  const v = value == null ? inner : value;
  const pct = (v - min) / (max - min);
  const set = nv => {
    const c = Math.min(max, Math.max(min, Math.round(nv / step) * step));
    if (value == null) setInner(c);
    onChange && onChange(c);
  };
  const fromX = x => {
    const r = ref.current.getBoundingClientRect();
    set(min + (x - r.left) / r.width * (max - min));
  };
  const fmt = format || (n => String(n));
  const active = drag || hover;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      padding: "0 7px",
      boxSizing: "border-box",
      opacity: disabled ? 0.45 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "slider",
    tabIndex: disabled ? -1 : 0,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": v,
    onPointerDown: e => {
      if (disabled) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      setDrag(true);
      fromX(e.clientX);
    },
    onPointerMove: e => drag && fromX(e.clientX),
    onPointerUp: () => setDrag(false),
    onPointerCancel: () => setDrag(false),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onKeyDown: e => {
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        set(v + step);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();
        set(v - step);
      }
    },
    style: {
      position: "relative",
      height: 20,
      cursor: disabled ? "not-allowed" : "pointer",
      outline: "none",
      touchAction: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -7,
      right: -7,
      top: 8,
      height: 4,
      borderRadius: 999,
      background: "var(--surface-hover)",
      boxShadow: "inset 0 1px 1px rgba(0,0,0,.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -7,
      top: 8,
      height: 4,
      width: "calc(" + pct * 100 + "% + 7px)",
      borderRadius: 999,
      background: "linear-gradient(90deg,var(--accent-lo),var(--accent-hi))",
      boxShadow: active ? "0 0 10px var(--accent-glow)" : "none",
      transition: drag ? "none" : "width var(--dur-base) var(--ease-out), box-shadow var(--dur-base)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 3,
      left: pct * 100 + "%",
      width: 14,
      height: 14,
      marginLeft: -7,
      borderRadius: "50%",
      background: "var(--knob)",
      boxShadow: active ? "0 0 0 5px color-mix(in srgb,var(--accent) 22%,transparent), 0 0 16px var(--accent-glow)" : "0 1px 3px rgba(0,0,0,.5)",
      transform: drag ? "scale(1.15)" : "scale(1)",
      transition: drag ? "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base)" : "left var(--dur-base) var(--ease-out), transform 420ms var(--ease-spring), box-shadow var(--dur-base)"
    }
  }, showValue && drag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 22,
      left: "50%",
      transform: "translateX(-50%)",
      padding: "3px 7px",
      borderRadius: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg)",
      background: "var(--surface-glass)",
      backdropFilter: "blur(12px)",
      border: "1px solid var(--border-glass)",
      whiteSpace: "nowrap",
      animation: "tw-pop-in 160ms var(--ease-out)"
    }
  }, fmt(v)))));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  size = "md"
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const [press, setPress] = React.useState(false);
  const on = checked == null ? inner : checked;
  const W = size === "sm" ? 28 : 34,
    Ht = size === "sm" ? 16 : 20,
    K = Ht - 4;
  const kw = press ? K + 4 : K;
  const toggle = () => {
    if (disabled) return;
    if (checked == null) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--fg)",
      userSelect: "none"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    style: {
      position: "relative",
      width: W,
      height: Ht,
      padding: 0,
      flexShrink: 0,
      borderRadius: 999,
      border: "1px solid " + (on ? "transparent" : "var(--border-strong)"),
      background: on ? "linear-gradient(180deg,var(--accent-hi),var(--accent))" : "var(--surface-hover)",
      boxShadow: on ? "0 0 14px -3px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,.25)" : "inset 0 1px 2px rgba(0,0,0,.35)",
      cursor: "inherit",
      transition: "background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 1,
      left: 1,
      width: kw,
      height: K,
      borderRadius: 999,
      background: on ? "var(--knob)" : "var(--fg-muted)",
      boxShadow: "0 1px 3px rgba(0,0,0,.45)",
      transform: "translateX(" + (on ? W - 4 - kw : 0) + "px)",
      transition: "transform 460ms var(--ease-spring), width var(--dur-base) var(--ease-out), background var(--dur-base)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function Sidebar({
  items = [],
  activeId,
  onSelect,
  header,
  footer,
  width = 232,
  glass = false
}) {
  const refs = React.useRef({});
  const [ind, setInd] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  React.useLayoutEffect(() => {
    const el = refs.current[activeId];
    setInd(el ? {
      top: el.offsetTop,
      height: el.offsetHeight
    } : null);
  }, [activeId, items.length]);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      width,
      flexShrink: 0,
      height: "100%",
      boxSizing: "border-box",
      padding: 10,
      borderRight: "1px solid var(--border)",
      background: glass ? "var(--surface-glass)" : "var(--surface)",
      backdropFilter: glass ? "blur(var(--blur-glass))" : undefined,
      WebkitBackdropFilter: glass ? "blur(var(--blur-glass))" : undefined,
      fontFamily: "var(--font-sans)"
    }
  }, header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 6px 12px"
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      flex: 1,
      minHeight: 0,
      overflow: "auto"
    }
  }, ind && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: ind.top,
      height: ind.height,
      borderRadius: 8,
      background: "var(--surface-hover)",
      boxShadow: "inset 0 0 0 1px var(--border-strong), var(--shadow-inset-top)",
      transition: "top var(--dur-slow) var(--ease-out-expo), height var(--dur-slow) var(--ease-out-expo)"
    }
  }), items.map((it, i) => {
    if (it.section) return /*#__PURE__*/React.createElement("div", {
      key: "s" + i,
      style: {
        padding: (i ? "14px" : "4px") + " 10px 6px",
        fontFamily: "var(--font-display)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "var(--tracking-rune)",
        textTransform: "uppercase",
        color: "var(--fg-subtle)"
      }
    }, it.section);
    const on = it.id === activeId,
      hv = hover === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      ref: el => refs.current[it.id] = el,
      type: "button",
      onClick: () => onSelect && onSelect(it.id),
      onMouseEnter: () => setHover(it.id),
      onMouseLeave: () => setHover(null),
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 32,
        padding: "0 10px",
        border: 0,
        borderRadius: 8,
        background: !on && hv ? "color-mix(in srgb,var(--surface-hover) 60%,transparent)" : "transparent",
        color: on || hv ? "var(--fg)" : "var(--fg-muted)",
        fontFamily: "inherit",
        fontSize: 13,
        fontWeight: on ? 500 : 400,
        textAlign: "left",
        cursor: "pointer",
        transition: "color var(--dur-base), background var(--dur-base)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "grid",
        color: on ? "var(--accent)" : "inherit",
        filter: on ? "drop-shadow(0 0 6px var(--accent-glow))" : "none",
        transition: "color var(--dur-base)"
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, it.label), it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--fg-subtle)"
      }
    }, it.badge));
  })), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 10,
      borderTop: "1px solid var(--border)",
      marginTop: 10
    }
  }, footer));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  width = 440,
  contained = false
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: contained ? "absolute" : "fixed",
      inset: 0,
      zIndex: 50,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onClose && onClose(),
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--backdrop)",
      backdropFilter: "blur(var(--blur-backdrop))",
      WebkitBackdropFilter: "blur(var(--blur-backdrop))",
      animation: "tw-fade-in var(--dur-base) var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    style: {
      position: "relative",
      width,
      maxWidth: "calc(100% - 32px)",
      boxSizing: "border-box",
      padding: 20,
      borderRadius: "var(--radius-xl)",
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-glass)) saturate(140%)",
      WebkitBackdropFilter: "blur(var(--blur-glass)) saturate(140%)",
      border: "1px solid var(--border-glass)",
      boxShadow: "var(--shadow-xl)",
      animation: "tw-dialog-in var(--dur-slow) var(--ease-out-expo)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 24,
      right: 24,
      height: 1,
      background: "linear-gradient(90deg,transparent,var(--ornament),transparent)",
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: -4,
      left: "50%",
      width: 7,
      height: 7,
      marginLeft: -3.5,
      transform: "rotate(45deg)",
      background: "var(--surface-raised)",
      border: "1px solid var(--ornament)",
      boxShadow: "0 0 10px var(--accent-glow)"
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      lineHeight: "24px",
      fontWeight: 600,
      letterSpacing: "var(--tracking-display)",
      color: "var(--fg)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 13,
      lineHeight: "20px",
      color: "var(--fg-muted)"
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      justifyContent: "flex-end",
      gap: 8
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  side = "top",
  delay = 250,
  shortcut,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const t = React.useRef(null);
  const show = () => {
    clearTimeout(t.current);
    t.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(t.current);
    setOpen(false);
  };
  React.useEffect(() => () => clearTimeout(t.current), []);
  const pos = side === "bottom" ? {
    top: "calc(100% + 8px)"
  } : side === "right" ? {
    left: "calc(100% + 8px)",
    top: "50%"
  } : side === "left" ? {
    right: "calc(100% + 8px)",
    top: "50%"
  } : {
    bottom: "calc(100% + 8px)"
  };
  const tr = side === "left" || side === "right" ? "translateY(-50%)" : "translateX(-50%)";
  const horiz = side === "top" || side === "bottom";
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 60,
      left: horiz ? "50%" : pos.left,
      ...pos,
      transform: tr,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "5px 8px",
      borderRadius: 8,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--fg)",
      background: "var(--surface-tooltip)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid var(--border-glass)",
      boxShadow: "var(--shadow-md)",
      animation: "tw-pop-in 160ms var(--ease-out)",
      transformOrigin: side === "bottom" ? "top center" : "bottom center"
    }
  }, content, shortcut && /*#__PURE__*/React.createElement(__ds_scope.Kbd, {
    keys: shortcut
  }))));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/reader/BookCover.jsx
try { (() => {
const hash = s => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) | 0;
  return Math.abs(h);
};
function BookCover({
  src,
  title = "",
  author,
  progress,
  width = 148,
  tilt = true,
  showMeta = true,
  onClick
}) {
  const ref = React.useRef(null);
  const [m, setM] = React.useState(null);
  const h = Math.round(width * 1.5);
  const hue = hash(title) % 360;
  const onMove = e => {
    if (!tilt) return;
    const r = ref.current.getBoundingClientRect();
    setM({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height
    });
  };
  const rx = m ? (0.5 - m.y) * 10 : 0,
    ry = m ? (m.x - 0.5) * 12 : 0;
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onClick && onClick(),
    style: {
      width,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      cursor: onClick ? "pointer" : "default",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      perspective: 800
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseMove: onMove,
    onMouseLeave: () => setM(null),
    style: {
      position: "relative",
      width,
      height: h,
      borderRadius: "4px 10px 10px 4px",
      overflow: "hidden",
      transform: "rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(" + (m ? -4 : 0) + "px)",
      transition: m ? "transform 90ms linear, box-shadow var(--dur-base)" : "transform var(--dur-slower) var(--ease-out-expo), box-shadow var(--dur-slow)",
      boxShadow: m ? "var(--shadow-lg), 0 0 0 1px rgba(255,255,255,.07)" : "var(--shadow-md), 0 0 0 1px rgba(255,255,255,.04)",
      background: "linear-gradient(160deg, hsl(" + hue + " 28% 24%), hsl(" + (hue + 30) % 360 + " 32% 9%))"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: width * 0.1 + "px " + width * 0.1 + "px " + width * 0.09 + "px " + width * 0.14 + "px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: Math.max(13, width * 0.12),
      lineHeight: 1.1,
      fontWeight: 500,
      color: "hsl(" + hue + " 40% 88%)",
      textWrap: "balance"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: Math.max(8, width * 0.058),
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "hsl(" + hue + " 20% 66%)"
    }
  }, author)), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 10,
      background: "linear-gradient(90deg, rgba(0,0,0,.4), rgba(255,255,255,.1) 45%, transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: m ? "radial-gradient(circle at " + m.x * 100 + "% " + m.y * 100 + "%, rgba(255,255,255,.2), transparent 55%)" : "none",
      opacity: m ? 1 : 0,
      transition: "opacity var(--dur-base)",
      pointerEvents: "none"
    }
  }), progress != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 3,
      background: "rgba(0,0,0,.55)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: Math.max(0, Math.min(1, progress)) * 100 + "%",
      background: "linear-gradient(90deg,var(--accent-lo),var(--accent-hi))",
      boxShadow: "0 0 8px var(--accent-glow)"
    }
  })))), showMeta && title && /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: "17px",
      fontWeight: 500,
      color: "var(--fg)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), author && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--fg-muted)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, author)));
}
Object.assign(__ds_scope, { BookCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reader/BookCover.jsx", error: String((e && e.message) || e) }); }

// components/reader/HypeIndicator.jsx
try { (() => {
const LABELS = ["Unknown", "Calm", "Simmer", "Heated", "Intense", "Wild"];
function HypeIndicator({
  level = 0,
  variant = "bars",
  showLabel = false,
  size = "md",
  animated = true
}) {
  const lv = Math.max(0, Math.min(5, Math.round(level || 0)));
  const c = lv ? "var(--heat-" + lv + ")" : "var(--fg-subtle)";
  const sm = size === "sm";
  const title = "Hype: " + LABELS[lv] + (lv ? " (" + lv + "/5)" : "");
  const label = showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: sm ? 11 : 12,
      fontWeight: 500,
      color: c,
      letterSpacing: "0.01em"
    }
  }, LABELS[lv]);
  if (variant === "meter") {
    return /*#__PURE__*/React.createElement("span", {
      title: title,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        width: sm ? 48 : 64,
        height: sm ? 4 : 6,
        borderRadius: 999,
        background: "var(--surface-hover)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: lv / 5 * 100 + "%",
        borderRadius: 999,
        background: "linear-gradient(90deg,var(--heat-1)," + c + ")",
        boxShadow: lv >= 4 ? "0 0 10px " + c : "none",
        transition: "width var(--dur-slower) var(--ease-out-expo)"
      }
    })), label);
  }
  if (variant === "pill") {
    return /*#__PURE__*/React.createElement("span", {
      title: title,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 20,
        padding: "0 8px 0 6px",
        borderRadius: 999,
        background: "color-mix(in srgb," + c + " 13%,transparent)",
        border: "1px solid color-mix(in srgb," + c + " 28%,transparent)",
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 500,
        color: c,
        boxShadow: lv >= 4 ? "0 0 14px -4px " + c : "none"
      }
    }, /*#__PURE__*/React.createElement(Bars, {
      lv: lv,
      c: c,
      h: 10,
      w: 2,
      animated: animated
    }), LABELS[lv]);
  }
  return /*#__PURE__*/React.createElement("span", {
    title: title,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Bars, {
    lv: lv,
    c: c,
    h: sm ? 12 : 16,
    w: sm ? 3 : 4,
    animated: animated
  }), label);
}
function Bars({
  lv,
  c,
  h,
  w,
  animated
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "flex-end",
      gap: w > 2 ? 2 : 1.5,
      height: h
    }
  }, [0, 1, 2, 3, 4].map(i => {
    const on = i < lv;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: w,
        height: (i + 1) / 5 * h,
        borderRadius: 1.5,
        background: on ? c : "var(--border-strong)",
        boxShadow: on && lv >= 4 ? "0 0 6px " + c : "none",
        transformOrigin: "bottom",
        animation: on && animated && lv >= 4 ? "tw-flicker " + (lv === 5 ? 0.7 : 1.1) + "s ease-in-out infinite" : "none",
        animationDelay: i * 0.12 + "s",
        transition: "background var(--dur-base)"
      }
    });
  }));
}
Object.assign(__ds_scope, { HypeIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reader/HypeIndicator.jsx", error: String((e && e.message) || e) }); }

// components/reader/ChapterRow.jsx
try { (() => {
function ChapterRow({
  number,
  title,
  meta,
  hype,
  state = "unread",
  trailing,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const read = state === "read",
    cur = state === "current";
  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: () => onClick && onClick(),
    onKeyDown: e => e.key === "Enter" && onClick && onClick(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "40px minmax(0,1fr) auto auto",
      alignItems: "center",
      gap: 12,
      height: 48,
      padding: "0 12px",
      borderRadius: 10,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      background: cur ? "color-mix(in srgb,var(--accent) 8%,transparent)" : hover ? "var(--surface-hover)" : "transparent",
      boxShadow: cur ? "inset 0 0 0 1px color-mix(in srgb,var(--accent) 22%,transparent)" : "none",
      transition: "background var(--dur-base) var(--ease-out)",
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: cur ? "var(--accent)" : "var(--fg-subtle)"
    }
  }, cur && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      transform: "rotate(45deg)",
      background: "var(--accent)",
      boxShadow: "0 0 8px var(--accent)"
    }
  }), number), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      opacity: read ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 13,
      lineHeight: "18px",
      fontWeight: cur ? 500 : 400,
      color: "var(--fg)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 11,
      lineHeight: "14px",
      color: "var(--fg-muted)"
    }
  }, meta)), /*#__PURE__*/React.createElement("span", null, hype != null && /*#__PURE__*/React.createElement(__ds_scope.HypeIndicator, {
    level: hype,
    size: "sm",
    animated: !read
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--fg-subtle)"
    }
  }, trailing));
}
Object.assign(__ds_scope, { ChapterRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reader/ChapterRow.jsx", error: String((e && e.message) || e) }); }

// components/shell/WindowControls.jsx
try { (() => {
function ControlButton({
  label,
  onClick,
  danger,
  pill,
  children
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const bg = hover ? danger ? "var(--danger)" : "var(--surface-hover)" : "transparent";
  const color = hover ? danger ? "var(--on-danger)" : "var(--fg)" : "var(--fg-muted)";
  const size = pill ? {
    width: 28,
    height: 28,
    borderRadius: 8
  } : {
    width: "var(--window-control-width)",
    height: "100%"
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    onClick: () => onClick && onClick(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "grid",
      placeItems: "center",
      padding: 0,
      border: 0,
      background: bg,
      color,
      cursor: "default",
      transform: pill && press ? "scale(0.9)" : "none",
      boxShadow: pill && hover && danger ? "0 0 14px -2px color-mix(in srgb,var(--danger) 70%,transparent)" : "none",
      transition: "color var(--duration-fast) var(--ease-standard), background-color var(--duration-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base)",
      ...size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: pill ? 10 : 11,
    height: pill ? 10 : 11,
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: pill ? 1.2 : 1
  }, children));
}
function WindowControls({
  maximized = false,
  variant = "classic",
  onMinimize,
  onToggleMaximize,
  onClose
}) {
  const pill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      gap: pill ? 2 : 0,
      paddingRight: pill ? 6 : 0,
      WebkitAppRegion: "no-drag"
    }
  }, /*#__PURE__*/React.createElement(ControlButton, {
    pill: pill,
    label: "Minimize",
    onClick: onMinimize
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5.5h9"
  })), /*#__PURE__*/React.createElement(ControlButton, {
    pill: pill,
    label: maximized ? "Restore" : "Maximize",
    onClick: onToggleMaximize
  }, maximized ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 1.5h6.5V8"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "3",
    width: "6.5",
    height: "6.5",
    rx: "0.5"
  })) : /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "9",
    height: "9",
    rx: pill ? 1.5 : 0.5
  })), /*#__PURE__*/React.createElement(ControlButton, {
    pill: pill,
    label: "Close",
    onClick: onClose,
    danger: true
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l9 9M10 1l-9 9"
  })));
}
Object.assign(__ds_scope, { WindowControls });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/WindowControls.jsx", error: String((e && e.message) || e) }); }

// components/shell/TitleBar.jsx
try { (() => {
function SearchPill({
  placeholder,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onClick && onClick(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      WebkitAppRegion: "no-drag",
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: "min(360px, 100%)",
      height: 24,
      padding: "0 4px 0 9px",
      boxSizing: "border-box",
      borderRadius: 7,
      border: "1px solid " + (hover ? "var(--border-strong)" : "var(--border)"),
      background: hover ? "var(--surface-hover)" : "color-mix(in srgb,var(--background) 60%,transparent)",
      color: hover ? "var(--fg-muted)" : "var(--fg-subtle)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      cursor: "pointer",
      boxShadow: hover ? "0 0 0 3px color-mix(in srgb,var(--accent) 10%,transparent)" : "inset 0 1px 2px rgba(0,0,0,.2)",
      transition: "background var(--dur-base), border-color var(--dur-base), box-shadow var(--dur-base), color var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "left",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, placeholder), /*#__PURE__*/React.createElement(__ds_scope.Kbd, {
    keys: ["⌘", "K"]
  }));
}
function TitleBar({
  title = "Talewick",
  platform = "win32",
  variant = "classic",
  maximized = false,
  showControls = true,
  context,
  search,
  onSearch,
  actions,
  progress,
  onMinimize,
  onToggleMaximize,
  onClose
}) {
  const isMac = platform === "darwin";
  const controls = showControls && !isMac && /*#__PURE__*/React.createElement(__ds_scope.WindowControls, {
    variant: variant === "arcane" ? "pill" : "classic",
    maximized: maximized,
    onMinimize: onMinimize,
    onToggleMaximize: onToggleMaximize,
    onClose: onClose
  });
  if (variant !== "arcane") {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        WebkitAppRegion: "drag",
        display: "flex",
        height: "var(--titlebar-height)",
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
        userSelect: "none",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        lineHeight: "var(--text-xs-lh)",
        fontWeight: 500,
        letterSpacing: "var(--tracking-wide)",
        color: "var(--fg-muted)",
        paddingLeft: isMac ? "var(--titlebar-pad-mac)" : "var(--titlebar-pad-x)"
      }
    }, title), controls);
  }
  const pct = progress == null ? null : Math.max(0, Math.min(1, progress)) * 100;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      WebkitAppRegion: "drag",
      position: "relative",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,auto) minmax(0,1fr)",
      alignItems: "center",
      gap: 12,
      height: "var(--titlebar-height)",
      flexShrink: 0,
      background: "linear-gradient(180deg, var(--surface-raised), var(--surface))",
      userSelect: "none",
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      minWidth: 0,
      paddingLeft: isMac ? "var(--titlebar-pad-mac)" : 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 12
  }), context && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 4,
      height: 4,
      flexShrink: 0,
      transform: "rotate(45deg)",
      background: "var(--ornament)",
      opacity: 0.8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      fontSize: 12,
      color: "var(--fg-muted)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, context))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      minWidth: 0
    }
  }, search && /*#__PURE__*/React.createElement(SearchPill, {
    placeholder: search,
    onClick: onSearch
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 6,
      height: "100%",
      minWidth: 0
    }
  }, actions && /*#__PURE__*/React.createElement("div", {
    style: {
      WebkitAppRegion: "no-drag",
      display: "flex",
      alignItems: "center",
      gap: 2
    }
  }, actions), actions && controls && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 1,
      height: 14,
      background: "var(--border-strong)",
      margin: "0 4px"
    }
  }), controls, !controls && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 1,
      background: "linear-gradient(90deg, var(--border), var(--border-strong) 30%, color-mix(in srgb,var(--ornament) 60%,var(--border)) 50%, var(--border-strong) 70%, var(--border))"
    }
  }), pct != null && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      height: 1,
      width: pct + "%",
      background: "linear-gradient(90deg, transparent, var(--accent-lo) 20%, var(--accent-hi))",
      boxShadow: "0 0 8px var(--accent-glow)",
      transition: "width var(--dur-slower) var(--ease-out-expo)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -3,
      top: -2.5,
      width: 5,
      height: 5,
      transform: "rotate(45deg)",
      background: "var(--accent-hi)",
      boxShadow: "0 0 8px var(--accent)"
    }
  })));
}
Object.assign(__ds_scope, { TitleBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/TitleBar.jsx", error: String((e && e.message) || e) }); }

// components/shell/AppShell.jsx
try { (() => {
function AppShell({
  children,
  titleBar,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      overflow: "hidden",
      background: "var(--background)",
      color: "var(--fg)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, titleBar !== undefined ? titleBar : /*#__PURE__*/React.createElement(__ds_scope.TitleBar, null), /*#__PURE__*/React.createElement("main", {
    style: {
      position: "relative",
      minHeight: 0,
      flex: 1,
      overflow: "auto"
    }
  }, children));
}
Object.assign(__ds_scope, { AppShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop/Library.jsx
try { (() => {
// Talewick Library — CONCEPT screen (not in the repo yet). Composes DS components only.
const TW = window.TalewickDesignSystem_fc8a08;
const BOOKS = [{
  id: 1,
  title: "The Ashen Lantern",
  author: "M. Ravel",
  progress: 0.42,
  ch: 213,
  total: 520
}, {
  id: 2,
  title: "Hollow Crown Ascendant",
  author: "Kei Doran",
  progress: 0.08,
  ch: 31,
  total: 380
}, {
  id: 3,
  title: "Saltglass",
  author: "Ines Kort",
  progress: 0.9,
  ch: 88,
  total: 97
}, {
  id: 4,
  title: "A Cartography of Small Gods",
  author: "T. Wren",
  progress: 0,
  ch: 0,
  total: 64
}, {
  id: 5,
  title: "Nightwick",
  author: "Ada Sorrel",
  progress: 0.61,
  ch: 140,
  total: 230
}, {
  id: 6,
  title: "Ironbloom",
  author: "J. Halloway",
  progress: 0.23,
  ch: 47,
  total: 205
}, {
  id: 7,
  title: "The Ninth Bell",
  author: "Oren Vale",
  progress: 1,
  ch: 120,
  total: 120
}];
const CHAPTERS = [[209, "Smoke Over Calder", "16 min", 2, "read"], [210, "A Debt in Silver", "12 min", 1, "read"], [211, "What the River Kept", "19 min", 3, "read"], [212, "Ash on the Water", "14 min", 2, "read"], [213, "The Bell Tolls Twice", "18 min · 41%", 4, "current"], [214, "Nine Lanterns Burning", "22 min", 5, "unread"], [215, "Aftermath", "11 min", 1, "unread"], [216, "The Quiet Ledger", "15 min", 2, "unread"]];
function LibraryView({
  onOpen,
  motes
}) {
  const {
    SegmentedControl,
    Input,
    Kbd,
    Icon,
    Button,
    IconButton,
    Tooltip,
    BookCover,
    SpotlightCard,
    ProgressBar,
    HypeIndicator,
    ShaderBackground,
    MoteField,
    OrnateFrame,
    Ornament
  } = TW;
  const [q, setQ] = React.useState("");
  const list = BOOKS.filter(b => b.title.toLowerCase().includes(q.toLowerCase()));
  const cur = BOOKS[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: 360,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(ShaderBackground, {
    intensity: 0.45,
    interactive: false
  }), /*#__PURE__*/React.createElement(MoteField, {
    mode: motes,
    density: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, transparent 30%, var(--background))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "28px 36px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      flexShrink: 0,
      fontFamily: "var(--font-display)",
      fontSize: 24,
      lineHeight: "28px",
      fontWeight: 600,
      letterSpacing: "var(--tracking-display)",
      textShadow: "0 0 22px var(--accent-glow)"
    }
  }, "Library"), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "sm",
    options: ["Bookshelf", "Series", "Comic"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement(Input, {
    width: "auto",
    style: {
      flex: "0 1 260px",
      minWidth: 90
    },
    value: q,
    onChange: setQ,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 15
    }),
    placeholder: "Search library",
    trailing: /*#__PURE__*/React.createElement(Kbd, {
      keys: ["⌘", "K"]
    })
  }), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Scan folders",
    side: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    label: "Scan folders",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "folder-open",
      size: 16
    })
  })), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 15
    }),
    style: {
      flexShrink: 0
    }
  }, "Import")), /*#__PURE__*/React.createElement(OrnateFrame, {
    crest: true,
    glow: true,
    offset: -6,
    size: 16,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(SpotlightCard, {
    padding: 18,
    onClick: () => onOpen(cur)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(BookCover, {
    width: 84,
    title: cur.title,
    author: cur.author,
    showMeta: false,
    tilt: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "var(--tracking-rune)",
      textTransform: "uppercase",
      color: "var(--ornament)"
    }
  }, "Continue reading"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-serif)",
      fontSize: 26,
      lineHeight: "30px",
      color: "var(--fg)"
    }
  }, cur.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 12,
      color: "var(--fg-muted)"
    }
  }, "Chapter 213 \xB7 The Bell Tolls Twice ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-subtle)"
    }
  }, "\xB7"), " Next: ", /*#__PURE__*/React.createElement(HypeIndicator, {
    level: 5,
    variant: "pill"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      maxWidth: 420,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: cur.progress
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-muted)"
    }
  }, "42%"))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }),
    onClick: () => onOpen(cur)
  }, "Resume")))), /*#__PURE__*/React.createElement(Ornament, {
    label: "Bookshelf · " + list.length,
    style: {
      marginTop: 34,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))",
      gap: "26px 22px"
    }
  }, list.map(b => /*#__PURE__*/React.createElement(BookCover, {
    key: b.id,
    width: 132,
    title: b.title,
    author: b.author,
    progress: b.progress || undefined,
    onClick: () => onOpen(b)
  })))));
}
function BookView({
  book,
  onBack,
  onFormat,
  formatting
}) {
  const {
    Button,
    IconButton,
    Icon,
    BookCover,
    ChapterRow,
    Badge,
    ProgressBar,
    HypeIndicator
  } = TW;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      animation: "tw-fade-up 360ms var(--ease-out-expo)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      flexShrink: 0,
      padding: "24px 28px",
      borderRight: "1px solid var(--border)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-left",
      size: 15
    }),
    onClick: onBack
  }, "Library"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(BookCover, {
    width: 180,
    title: book.title,
    author: book.author,
    showMeta: false,
    progress: book.progress
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: "var(--font-serif)",
      fontSize: 24,
      lineHeight: "28px"
    }
  }, book.title), /*#__PURE__*/React.createElement(TW.Ornament, {
    style: {
      marginTop: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 13,
      color: "var(--fg-muted)"
    }
  }, book.author), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "EPUB"), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, "Reading")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: book.progress
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--fg-muted)",
      whiteSpace: "nowrap"
    }
  }, book.ch, "/", book.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "book-open",
      size: 15
    })
  }, "Read"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    label: "Listen",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "headphones",
      size: 16
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: "24px 28px",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "var(--tracking-display)"
    }
  }, "Chapters"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "var(--fg-muted)"
    }
  }, "Hype ", /*#__PURE__*/React.createElement(HypeIndicator, {
    level: 3,
    size: "sm",
    animated: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    loading: formatting,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 14
    }),
    onClick: onFormat
  }, "Format next chapter")), CHAPTERS.map(([n, t, m, h, s]) => /*#__PURE__*/React.createElement(ChapterRow, {
    key: n,
    number: n,
    title: t,
    meta: m,
    hype: h,
    state: s,
    trailing: s === "current" ? /*#__PURE__*/React.createElement(Icon, {
      name: "bookmark",
      size: 15,
      color: "var(--accent)"
    }) : null
  }))));
}
function SettingsDialog({
  open,
  onClose,
  theme,
  setTheme
}) {
  const {
    Dialog,
    Switch,
    Slider,
    ThemePicker,
    Button
  } = TW;
  const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: "10px 0",
    borderTop: "1px solid var(--border)",
    fontSize: 13
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    contained: true,
    open: open,
    onClose: onClose,
    title: "Appearance",
    description: "Changes apply to every window.",
    width: 540,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "Done"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement(ThemePicker, {
    value: theme,
    onChange: setTheme,
    columns: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", null, "Glass surfaces"), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement("span", null, "Ambient shader"), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, "Corner radius"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    min: 0,
    max: 20,
    defaultValue: 10,
    format: v => v + "px"
  }))));
}
function FormattingOverlay() {
  const {
    WickLoader,
    TextScramble,
    ProgressBar
  } = TW;
  const [p, setP] = React.useState(0.05);
  React.useEffect(() => {
    const i = setInterval(() => setP(x => Math.min(1, x + 0.09)), 160);
    return () => clearInterval(i);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 24,
      bottom: 24,
      width: 300,
      padding: 18,
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-glass))",
      border: "1px solid var(--border-glass)",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      gap: 14,
      alignItems: "center",
      animation: "tw-toast-in 420ms var(--ease-out-expo)",
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(WickLoader, {
    size: 30,
    heat: 0.8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TextScramble, {
    text: "Formatting chapter 214",
    loop: true,
    style: {
      fontSize: 12,
      color: "var(--fg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: p
  }))));
}
function TalewickApp() {
  const {
    AppShell,
    TitleBar,
    Sidebar,
    Icon,
    Button,
    Toast,
    Wordmark,
    THEMES
  } = TW;
  const [theme, setThemeState] = React.useState(localStorage.getItem("tw-theme") || "ember");
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("tw-theme", theme);
  }, [theme]);
  const motes = ((THEMES || []).find(t => t.id === theme) || {
    motes: "up"
  }).motes;
  const [nav, setNav] = React.useState("library");
  const [book, setBook] = React.useState(null);
  const [settings, setSettings] = React.useState(false);
  const [formatting, setFormatting] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [max, setMax] = React.useState(false);
  const format = () => {
    setFormatting(true);
    setTimeout(() => {
      setFormatting(false);
      setToast(Date.now());
      setTimeout(() => setToast(null), 4200);
    }, 2200);
  };
  const items = [{
    section: "Read"
  }, {
    id: "library",
    label: "Library",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "library"
    }),
    badge: BOOKS.length
  }, {
    id: "reading",
    label: "Reading now",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "book-open"
    })
  }, {
    id: "quotes",
    label: "Quotes",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "quote"
    }),
    badge: 42
  }, {
    id: "downloads",
    label: "Downloads",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download"
    })
  }, {
    section: "AI"
  }, {
    id: "wiki",
    label: "Wiki",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "network"
    })
  }, {
    id: "buddy",
    label: "Buddy",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles"
    })
  }, {
    id: "stats",
    label: "Stats",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "activity"
    })
  }];
  const content = nav === "library" ? book ? /*#__PURE__*/React.createElement(BookView, {
    book: book,
    onBack: () => setBook(null),
    onFormat: format,
    formatting: formatting
  }) : /*#__PURE__*/React.createElement(LibraryView, {
    onOpen: setBook,
    motes: motes
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      height: "100%",
      fontSize: 13,
      color: "var(--fg-subtle)"
    }
  }, "Not designed yet");
  return /*#__PURE__*/React.createElement(AppShell, {
    titleBar: /*#__PURE__*/React.createElement(TitleBar, {
      variant: "arcane",
      platform: "win32",
      maximized: max,
      onToggleMaximize: () => setMax(m => !m),
      context: book ? book.title + " · Ch. " + book.ch : "Library",
      search: "Search books, chapters, wiki",
      progress: book ? book.progress : undefined,
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TW.IconButton, {
        size: "sm",
        label: "Buddy",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "sparkles",
          size: 14
        })
      }), /*#__PURE__*/React.createElement(TW.IconButton, {
        size: "sm",
        label: "Appearance",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "palette",
          size: 14
        }),
        onClick: () => setSettings(true)
      }))
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    items: items,
    activeId: nav,
    onSelect: id => {
      setNav(id);
      if (id === "library") setBook(null);
    },
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      fullWidth: true,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "settings",
        size: 15
      }),
      onClick: () => setSettings(true),
      style: {
        justifyContent: "flex-start"
      }
    }, "Settings")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      minWidth: 0
    }
  }, content, formatting && /*#__PURE__*/React.createElement(FormattingOverlay, null), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 24,
      bottom: 24,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    key: toast,
    tone: "success",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }),
    title: "Chapter 214 formatted",
    description: "Nine Lanterns Burning is ready to read.",
    duration: 4000,
    onClose: () => setToast(null)
  })))), /*#__PURE__*/React.createElement(SettingsDialog, {
    open: settings,
    onClose: () => setSettings(false),
    theme: theme,
    setTheme: setThemeState
  }));
}
Object.assign(window, {
  TalewickApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop/Library.jsx", error: String((e && e.message) || e) }); }

// ui_kits/desktop/Window.jsx
try { (() => {
// Talewick main window, recreated from src/app/page.tsx + app-shell.tsx.
function HomeScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      height: "100%",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Talewick"));
}
function TalewickWindow({
  platform,
  maximized,
  setMaximized,
  onMinimize,
  onClose
}) {
  const {
    AppShell,
    TitleBar
  } = window.TalewickDesignSystem_fc8a08;
  return /*#__PURE__*/React.createElement(AppShell, {
    titleBar: /*#__PURE__*/React.createElement(TitleBar, {
      platform: platform,
      maximized: maximized,
      onMinimize: () => onMinimize(),
      onToggleMaximize: () => setMaximized(m => !m),
      onClose: () => onClose()
    })
  }, /*#__PURE__*/React.createElement(HomeScreen, null));
}
Object.assign(window, {
  HomeScreen,
  TalewickWindow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/desktop/Window.jsx", error: String((e && e.message) || e) }); }

__ds_ns.MoteField = __ds_scope.MoteField;

__ds_ns.Ornament = __ds_scope.Ornament;

__ds_ns.OrnateFrame = __ds_scope.OrnateFrame;

__ds_ns.THEMES = __ds_scope.THEMES;

__ds_ns.ThemePicker = __ds_scope.ThemePicker;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.ShaderBackground = __ds_scope.ShaderBackground;

__ds_ns.SpotlightCard = __ds_scope.SpotlightCard;

__ds_ns.NOISE = __ds_scope.NOISE;

__ds_ns.DotPulse = __ds_scope.DotPulse;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.TextScramble = __ds_scope.TextScramble;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.WickLoader = __ds_scope.WickLoader;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.BookCover = __ds_scope.BookCover;

__ds_ns.ChapterRow = __ds_scope.ChapterRow;

__ds_ns.HypeIndicator = __ds_scope.HypeIndicator;

__ds_ns.AppShell = __ds_scope.AppShell;

__ds_ns.TitleBar = __ds_scope.TitleBar;

__ds_ns.WindowControls = __ds_scope.WindowControls;

})();
