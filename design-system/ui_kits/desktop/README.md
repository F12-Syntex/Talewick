# Desktop app UI kit

Recreation of the Talewick Electron window as of v0.2.3. Source: `src/app/page.tsx`, `src/components/shell/*` in F12-Syntex/Talewick.

- `index.html` — the main window: 36px title bar + empty main area with faint "TALEWICK". Window buttons are live (maximize toggles the restore glyph; minimize/close hide the window with a reopen button). The bottom-right switcher (not part of the product) previews win32 / linux / darwin chrome.
- `Window.jsx` — `HomeScreen`, `TalewickWindow`, composed from the `AppShell` and `TitleBar` components.

No other screens exist yet (library, reader, wiki etc. are spec-only), so none are recreated. macOS traffic lights are native OS chrome and are not drawn; the 80px gap is where they sit.
