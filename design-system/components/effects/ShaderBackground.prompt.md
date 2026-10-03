Ambient WebGL smoke/aurora field in accent tones, reacting to the cursor; fills its positioned parent.

~~~jsx
<div style={{position:"relative",height:300}}><ShaderBackground intensity={0.5} /></div>
~~~

- Colours accept hex or var(--token). Keep intensity ≤ 0.6 behind text.
