import React from "react";

const VERT = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";

export const NOISE = `
float tw_h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float tw_n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(tw_h(i),tw_h(i+vec2(1.,0.)),f.x),mix(tw_h(i+vec2(0.,1.)),tw_h(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*tw_n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
`;

// Resolve "#hex" or "var(--token)" to a [r,g,b] 0-1 vector.
export function colorVec(c, el) {
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
  if (h.length === 3) h = h.split("").map((x) => x + x).join("");
  const n = parseInt(h.slice(0, 6), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

// Increments whenever any data-theme attribute changes, so canvases can re-read token colours.
export function useThemeKey() {
  const [k, setK] = React.useState(0);
  React.useEffect(() => {
    const mo = new MutationObserver(() => setK((x) => x + 1));
    mo.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);
  return k;
}

// Minimal fullscreen-triangle WebGL runner. uniformsRef.current() returns {name: number|vec}.
export function useShader(canvasRef, frag, uniformsRef, opts = {}) {
  React.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const gl = c.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false });
    if (!gl) return;
    const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) console.warn(gl.getShaderInfoLog(o)); return o; };
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
    const U = (n) => (n in cache ? cache[n] : (cache[n] = gl.getUniformLocation(pr, n)));
    const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, opts.maxDpr || 1.5);
    let raf, mouse = [0.5, 0.5], sm = [0.5, 0.5];
    const t0 = performance.now();
    const onMove = (e) => { const r = c.getBoundingClientRect(); mouse = [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height]; };
    window.addEventListener("pointermove", onMove);
    const frame = () => {
      const w = Math.max(1, Math.round(c.clientWidth * dpr)), h = Math.max(1, Math.round(c.clientHeight * dpr));
      if (c.width !== w || c.height !== h) { c.width = w; c.height = h; gl.viewport(0, 0, w, h); }
      sm = [sm[0] + (mouse[0] - sm[0]) * 0.06, sm[1] + (mouse[1] - sm[1]) * 0.06];
      gl.uniform2f(U("uRes"), w, h);
      gl.uniform1f(U("uTime"), ((performance.now() - t0) / 1000) * (opts.speed == null ? 1 : opts.speed));
      gl.uniform2f(U("uMouse"), sm[0], sm[1]);
      const u = uniformsRef && uniformsRef.current ? uniformsRef.current() : {};
      for (const k in u) { const v = u[k]; if (typeof v === "number") gl.uniform1f(U(k), v); else if (v.length === 2) gl.uniform2fv(U(k), v); else gl.uniform3fv(U(k), v); }
      gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduce && !opts.paused) raf = requestAnimationFrame(frame);
    };
    frame();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", onMove); const ext = gl.getExtension("WEBGL_lose_context"); if (ext) ext.loseContext(); };
  }, [frag, opts.paused, opts.speed]);
}
