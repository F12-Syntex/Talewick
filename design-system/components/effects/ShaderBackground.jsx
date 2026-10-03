import React from "react";
import { useShader, colorVec, useThemeKey, NOISE } from "./shader.js";

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

export function ShaderBackground({ colorA = "var(--accent)", colorB = "var(--accent-2)", base = "var(--background)", intensity = 0.6, speed = 1, interactive = true, paused = false, style, children }) {
  const ref = React.useRef(null);
  const uni = React.useRef(null);
  const tk = useThemeKey();
  const cache = React.useRef({});
  const key = tk + "|" + colorA + "|" + colorB + "|" + base;
  uni.current = () => {
    if (cache.current.key !== key) { const el = ref.current; cache.current = { key, a: colorVec(colorA, el), b: colorVec(colorB, el), base: colorVec(base, el) }; }
    const c = cache.current;
    return { uA: c.a, uB: c.b, uBase: c.base, uIntensity: intensity, uInteractive: interactive ? 1 : 0 };
  };
  useShader(ref, FRAG, uni, { speed, paused, maxDpr: 1 });
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: base, ...style }}>
      <canvas ref={ref} aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      {children != null && <div style={{ position: "relative", height: "100%" }}>{children}</div>}
    </div>
  );
}
