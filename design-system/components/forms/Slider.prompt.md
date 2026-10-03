Draggable range slider with glowing thumb and value bubble; for zoom, TTS speed, radius.

~~~jsx
<Slider min={0.5} max={3} step={0.1} defaultValue={1.4} format={v => v.toFixed(1) + "×"} />
~~~

- Arrow keys step the value.
