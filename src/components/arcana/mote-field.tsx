"use client";

import { useEffect, useRef } from "react";
import { colorVec, prefersReducedMotion, useThemeKey } from "@/components/effects/shader";

export type MoteMode = "up" | "down" | "drift";

interface Mote {
  x: number;
  y: number;
  r: number;
  v: number;
  ph: number;
  sw: number;
  alt: boolean;
}

/** Floating motes in theme colours: embers rise (up), snow falls (down), fireflies drift. */
export function MoteField({
  density = 36,
  mode = "up",
  color = "var(--accent)",
  color2 = "var(--accent-2)",
  speed = 1,
  size = 1.6,
  paused = false,
}: {
  density?: number;
  mode?: MoteMode;
  color?: string;
  color2?: string;
  speed?: number;
  size?: number;
  paused?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeKey = useThemeKey();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const toRgb = (v: number[]) => v.map((x) => Math.round(x * 255)).join(",");
    const bg = colorVec("var(--background)", canvas);
    const rgbA = toRgb(colorVec(color, canvas));
    const rgbB = toRgb(colorVec(color2, canvas));
    // Additive glow on dark themes, normal blending on light ones (parchment).
    const lightTheme = 0.2126 * bg[0] + 0.7152 * bg[1] + 0.0722 * bg[2] > 0.5;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = prefersReducedMotion();
    let width = 0;
    let height = 0;
    let raf = 0;
    let motes: Mote[] = [];

    const spawn = (anywhere: boolean): Mote => ({
      x: Math.random() * width,
      y: anywhere ? Math.random() * height : mode === "down" ? -10 : height + 10,
      r: size * (0.5 + Math.random()),
      v: (0.15 + Math.random() * 0.45) * speed,
      ph: Math.random() * 6.28,
      sw: 0.3 + Math.random() * 0.8,
      alt: Math.random() < 0.35,
    });

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((density * width * height) / 300000) + 4;
      motes = Array.from({ length: count }, () => spawn(true));
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    let t = 0;
    const frame = () => {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = lightTheme ? "source-over" : "lighter";
      for (const m of motes) {
        if (mode === "up") {
          m.y -= m.v;
          m.x += Math.sin(t * m.sw + m.ph) * 0.25;
        } else if (mode === "down") {
          m.y += m.v * 0.8;
          m.x += Math.sin(t * m.sw + m.ph) * 0.35;
        } else {
          m.x += Math.cos(t * m.sw + m.ph) * 0.3;
          m.y += Math.sin(t * m.sw * 0.8 + m.ph * 2) * 0.3;
        }
        if (m.y < -12 || m.y > height + 12 || m.x < -12 || m.x > width + 12) Object.assign(m, spawn(mode === "drift"));
        const alpha = mode === "drift" ? Math.max(0, Math.sin(t * 1.4 * m.sw + m.ph)) : 0.45 + 0.55 * Math.sin(t * 2 * m.sw + m.ph);
        const rgb = m.alt ? rgbB : rgbA;
        const gradient = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 5);
        gradient.addColorStop(0, `rgba(${rgb},${0.9 * alpha})`);
        gradient.addColorStop(0.25, `rgba(${rgb},${0.35 * alpha})`);
        gradient.addColorStop(1, `rgba(${rgb},0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * 5, 0, 6.283);
        ctx.fill();
      }
      if (!reduce && !paused) raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [themeKey, density, mode, color, color2, speed, size, paused]);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 block size-full" />;
}
