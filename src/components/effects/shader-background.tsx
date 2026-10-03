"use client";

import { useEffect, useRef } from "react";
import { colorVec, NOISE, useShader, useThemeKey, type Uniforms } from "./shader";

const FRAG = `uniform vec3 uA;uniform vec3 uB;uniform vec3 uBase;uniform float uIntensity;uniform float uInteractive;
${NOISE}
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

/** Ambient domain-warped smoke in accent tones. Keep behind headers at intensity 0.6 or less. */
export function ShaderBackground({
  colorA = "var(--accent)",
  colorB = "var(--accent-2)",
  base = "var(--background)",
  intensity = 0.6,
  speed = 1,
  interactive = true,
  paused = false,
}: {
  colorA?: string;
  colorB?: string;
  base?: string;
  intensity?: number;
  speed?: number;
  interactive?: boolean;
  paused?: boolean;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const uniforms = useRef<() => Uniforms>(() => ({}));
  const themeKey = useThemeKey();

  // Re-resolve token colours when the theme or inputs change; the render loop reads this ref.
  useEffect(() => {
    const el = canvas.current;
    const resolved = { uA: colorVec(colorA, el), uB: colorVec(colorB, el), uBase: colorVec(base, el) };
    uniforms.current = () => ({ ...resolved, uIntensity: intensity, uInteractive: interactive ? 1 : 0 });
  }, [themeKey, colorA, colorB, base, intensity, interactive]);

  useShader(canvas, FRAG, uniforms, { speed, paused, maxDpr: 1 });

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: base }}>
      <canvas ref={canvas} aria-hidden className="absolute inset-0 block size-full" />
    </div>
  );
}
