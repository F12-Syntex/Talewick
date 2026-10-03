import React from "react";
import { useShader, colorVec, useThemeKey, NOISE } from "../effects/shader.js";

const FRAG = `uniform vec3 uCore;uniform vec3 uEdge;uniform float uHeat;
${NOISE}
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

export function WickLoader({ size = 48, heat = 0.3, core = "#fff4dc", edge = "var(--accent)", label, paused = false }) {
  const ref = React.useRef(null);
  const uni = React.useRef(null);
  const tk = useThemeKey();
  const cache = React.useRef({});
  const key = tk + "|" + core + "|" + edge;
  uni.current = () => {
    if (cache.current.key !== key) cache.current = { key, c: colorVec(core, ref.current), e: colorVec(edge, ref.current) };
    return { uCore: cache.current.c, uEdge: cache.current.e, uHeat: heat };
  };
  useShader(ref, FRAG, uni, { paused });
  return (
    <div role="status" aria-label={label || "Loading"} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <canvas ref={ref} style={{ width: size, height: size * 1.25, display: "block" }}></canvas>
      {label && <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)" }}>{label}</span>}
    </div>
  );
}
