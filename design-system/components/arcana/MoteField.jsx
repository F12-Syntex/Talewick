import React from "react";
import { colorVec, useThemeKey } from "../effects/shader.js";

// Floating motes: embers (up), snow (down) or fireflies (drift). Canvas 2D, additive glow.
export function MoteField({ density = 36, mode = "up", color = "var(--accent)", color2 = "var(--accent-2)", speed = 1, size = 1.6, paused = false, style }) {
  const ref = React.useRef(null);
  const tk = useThemeKey();
  const cols = React.useRef(null);
  React.useEffect(() => { cols.current = null; }, [tk, color, color2]);
  React.useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, raf, parts = [];
    const spawn = (anywhere) => ({
      x: Math.random() * W, y: anywhere ? Math.random() * H : mode === "down" ? -10 : H + 10,
      r: size * (0.5 + Math.random()), v: (0.15 + Math.random() * 0.45) * speed, ph: Math.random() * 6.28, sw: 0.3 + Math.random() * 0.8, two: Math.random() < 0.35,
    });
    const resize = () => {
      W = c.clientWidth; H = c.clientHeight; c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round((density * W * H) / 300000) + 4;
      parts = Array.from({ length: n }, () => spawn(true));
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(c);
    const toRgb = (v) => v.map((x) => Math.round(x * 255)).join(",");
    let t = 0;
    const frame = () => {
      if (!cols.current) { const bg = colorVec("var(--background)", c); cols.current = [toRgb(colorVec(color, c)), toRgb(colorVec(color2, c)), 0.2126 * bg[0] + 0.7152 * bg[1] + 0.0722 * bg[2] > 0.5]; }
      t += 0.016;
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = cols.current[2] ? "source-over" : "lighter";
      for (const p of parts) {
        if (mode === "up") { p.y -= p.v; p.x += Math.sin(t * p.sw + p.ph) * 0.25; }
        else if (mode === "down") { p.y += p.v * 0.8; p.x += Math.sin(t * p.sw + p.ph) * 0.35; }
        else { p.x += Math.cos(t * p.sw + p.ph) * 0.3; p.y += Math.sin(t * p.sw * 0.8 + p.ph * 2) * 0.3; }
        if (p.y < -12 || p.y > H + 12 || p.x < -12 || p.x > W + 12) Object.assign(p, spawn(mode === "drift"));
        const a = mode === "drift" ? Math.max(0, Math.sin(t * 1.4 * p.sw + p.ph)) : 0.45 + 0.55 * Math.sin(t * 2 * p.sw + p.ph);
        const rgb = p.two ? cols.current[1] : cols.current[0];
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, "rgba(" + rgb + "," + 0.9 * a + ")");
        g.addColorStop(0.25, "rgba(" + rgb + "," + 0.35 * a + ")");
        g.addColorStop(1, "rgba(" + rgb + ",0)");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 5, 0, 6.283); ctx.fill();
      }
      if (!reduce && !paused) raf = requestAnimationFrame(frame);
    };
    frame();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [density, mode, speed, size, paused, color, color2]);
  return <canvas ref={ref} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", display: "block", ...style }}></canvas>;
}
