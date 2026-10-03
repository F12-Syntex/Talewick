Windows/Linux caption buttons (minimize, maximize/restore, close) for Talewick's frameless title bar; used inside TitleBar, not on macOS.

```jsx
<WindowControls maximized={false} onMinimize={() => api.minimize()} onToggleMaximize={() => api.toggleMaximize()} onClose={() => api.close()} />
```

- `maximized` swaps the maximize square for the two-square restore glyph.
- Hover: neutral buttons go to `--surface-hover` + `--fg`; close goes to `--danger` + white.
- Always wrap bridge calls in arrow functions.
