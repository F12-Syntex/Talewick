import React from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#%&*+=<>/";

export function TextScramble({ text = "", duration = 900, loop = false, pause = 1400, mono = true, style }) {
  const [state, setState] = React.useState({ done: text, rest: "" });
  React.useEffect(() => {
    let raf, timer, alive = true;
    const run = () => {
      const t0 = performance.now();
      const step = (now) => {
        if (!alive) return;
        const k = Math.min(1, (now - t0) / duration);
        const n = Math.floor(k * text.length);
        let rest = "";
        for (let i = n; i < text.length; i++) rest += text[i] === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        setState({ done: text.slice(0, n), rest });
        if (k < 1) raf = requestAnimationFrame(step);
        else if (loop) timer = setTimeout(run, pause);
      };
      raf = requestAnimationFrame(step);
    };
    run();
    return () => { alive = false; cancelAnimationFrame(raf); clearTimeout(timer); };
  }, [text, duration, loop, pause]);
  return (
    <span aria-label={text} style={{ fontFamily: mono ? "var(--font-mono)" : "inherit", whiteSpace: "pre", ...style }}>
      <span aria-hidden="true">{state.done}</span>
      <span aria-hidden="true" style={{ color: "var(--accent)", opacity: 0.8 }}>{state.rest}</span>
    </span>
  );
}
