"use client";

import { useEffect, useState } from "react";

export type Vec3 = [number, number, number];
export type Uniforms = Record<string, number | Vec3 | [number, number]>;

const VERT = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";

/** Shared GLSL helpers: hash, value noise and 5-octave fbm. */
export const NOISE = `
float tw_h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float tw_n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(tw_h(i),tw_h(i+vec2(1.,0.)),f.x),mix(tw_h(i+vec2(0.,1.)),tw_h(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*tw_n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
`;

/** Resolves "#hex", "rgb(...)" or "var(--token)" to an [r, g, b] vector in 0..1. */
export function colorVec(color: string, el?: Element | null): Vec3 {
  let value = color || "#000";
  if (value.startsWith("var(")) {
    const name = value.slice(4, -1).trim();
    value = getComputedStyle(el ?? document.documentElement).getPropertyValue(name).trim() || "#000";
  }
  if (value.startsWith("rgb")) {
    const n = (value.match(/[\d.]+/g) ?? ["0", "0", "0"]).map(Number);
    return [n[0] / 255, n[1] / 255, n[2] / 255];
  }
  let hex = value.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map((x) => x + x).join("");
  const n = parseInt(hex.slice(0, 6), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

/** Changes whenever any data-theme attribute changes, so canvases can re-read token colours. */
export function useThemeKey() {
  const [key, setKey] = useState(0);
  useEffect(() => {
    const observer = new MutationObserver(() => setKey((k) => k + 1));
    observer.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);
  return key;
}

export function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

/**
 * Minimal fullscreen-triangle WebGL runner. `uniforms.current()` is read every frame,
 * so callers can update it from effects without restarting the loop.
 */
export function useShader(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  frag: string,
  uniforms: React.RefObject<() => Uniforms>,
  { speed = 1, paused = false, maxDpr = 1.5 }: { speed?: number; paused?: boolean; maxDpr?: number } = {},
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.warn(gl.getShaderInfoLog(shader));
      return shader;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(
      program,
      compile(gl.FRAGMENT_SHADER, "precision highp float;uniform vec2 uRes;uniform float uTime;uniform vec2 uMouse;\n" + frag),
    );
    gl.linkProgram(program);
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const locations = new Map<string, WebGLUniformLocation | null>();
    const loc = (name: string) => {
      if (!locations.has(name)) locations.set(name, gl.getUniformLocation(program, name));
      return locations.get(name)!;
    };

    const reduce = prefersReducedMotion();
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    const start = performance.now();
    let raf = 0;
    let mouse: [number, number] = [0.5, 0.5];
    let smooth: [number, number] = [0.5, 0.5];

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = [(event.clientX - rect.left) / rect.width, 1 - (event.clientY - rect.top) / rect.height];
    };
    window.addEventListener("pointermove", onMove);

    const frame = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      smooth = [smooth[0] + (mouse[0] - smooth[0]) * 0.06, smooth[1] + (mouse[1] - smooth[1]) * 0.06];
      gl.uniform2f(loc("uRes"), w, h);
      gl.uniform1f(loc("uTime"), ((performance.now() - start) / 1000) * speed);
      gl.uniform2f(loc("uMouse"), smooth[0], smooth[1]);
      for (const [name, value] of Object.entries(uniforms.current())) {
        if (typeof value === "number") gl.uniform1f(loc(name), value);
        else if (value.length === 2) gl.uniform2fv(loc(name), value);
        else gl.uniform3fv(loc(name), value);
      }
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduce && !paused) raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [canvasRef, frag, uniforms, speed, paused, maxDpr]);
}
