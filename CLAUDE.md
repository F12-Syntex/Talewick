# Talewick

Advanced desktop book reader. Electron + Next.js (App Router, static export) + React 19 + Tailwind v4 + TypeScript.

## Commands

Package manager is yarn (v1). Never use npm or commit a `package-lock.json`.

- `yarn dev`: `scripts/dev.mjs` starts Next dev on the first free port from 3000 and Electron pointed at it (`--dev`, URL via `TALEWICK_DEV_URL`). F12 toggles DevTools in dev only.
- `yarn build`: `next build` to `out/`, then esbuild bundles `electron/` to `dist-electron/`.
- `yarn start`: run the production build in Electron.
- `yarn dist`: package installers into `release/` (electron-builder).
- `yarn typecheck` / `yarn lint`: run both before every commit.
- `yarn snap` / `yarn snap:dev`: screenshot the real Electron app (production build / dev mode) into `.snapshots/`. See Verifying UI below.

## Structure

- `electron/`: main process. `main.ts` boots the app, `window.ts` creates the frameless window, `protocol.ts` serves `out/` under `app://talewick/`, `ipc/` holds one file per IPC domain, registered from `ipc/index.ts`.
- `electron/preload.ts`: the only bridge. Exposes `window.talewick` (typed by `TalewickApi`).
- `shared/`: code used by both processes. `shared/ipc.ts` is the IPC contract (channel names plus API types).
- `src/app/`: Next routes. `src/components/shell/`: app chrome (title bar, window controls). `src/lib/`: renderer utilities (`useBridge()`).
- New features go in `src/features/<feature>/` (components, hooks, state), with matching `electron/ipc/<feature>.ts` when they need the main process.

## Conventions

- Renderer never touches Node or Electron directly. Add a channel to `shared/ipc.ts`, a handler in `electron/ipc/`, then expose it in `preload.ts`.
- Keep the window sandboxed (`contextIsolation`, `sandbox`, no `nodeIntegration`).
- No menu bar, no Next dev indicator (`devIndicators: false`), custom title bar only.
- Static export only: no server actions, API routes or dynamic SSR. Data comes through IPC.
- Colours come from CSS tokens in `src/app/globals.css` (`bg-surface`, `text-fg-muted`, etc.), not hard-coded hex.

## Git workflow

After each completed, working change, always commit and push to `origin/main` automatically. Never ask for permission and never leave committing or pushing to the user.

### Commit message format

Conventional Commits, with the new version appended to the subject:

```
<type>(<scope>): <short imperative description> (vMAJOR.MINOR.PATCH)
```

Examples:

```
feat(editor): add chapter outline panel (v0.2.0)
fix(auth): handle expired session token (v0.2.1)
chore(deps): bump react to 19.1 (v0.2.2)
feat(api)!: replace story schema with v2 format (v1.0.0)
```

- Types: `feat`, `fix`, `perf`, `refactor`, `docs`, `style`, `test`, `build`, `ci`, `chore`, `revert`.
- Scope: short lowercase area of the codebase (`editor`, `auth`, `deps`, `claude`). Required.
- Description: imperative mood, lowercase start, no trailing period, subject under ~72 chars.
- Body (optional): explain why, wrapped at 72 chars.
- Breaking change: add `!` after the scope and a `BREAKING CHANGE:` footer.
- One logical change per commit. Never commit secrets, `.env` files or build output.

### Versioning

Semantic versioning, `MAJOR.MINOR.PATCH`. The current version lives in `VERSION` at the repo root (one line, e.g. `0.1.0`). Every commit bumps it:

| Change | Bump | Example |
|---|---|---|
| Breaking change (`!`) | MAJOR, reset minor and patch | 0.4.2 → 1.0.0 |
| `feat` | MINOR, reset patch | 0.4.2 → 0.5.0 |
| Anything else | PATCH | 0.4.2 → 0.4.3 |

Steps for each commit:

1. Read `VERSION`, compute the new version from the commit type.
2. Write the new version to `VERSION` (and `package.json` `version` or other manifests once they exist, kept in sync).
3. Stage the change plus the version file(s) in the same commit.
4. Commit with the version in the subject.
5. Push to `origin/main`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
- Call bridge functions through a wrapper (`onClick={() => api.close()}`), never pass them directly as handlers. React would pass its event object, which contextBridge cannot clone ("An object could not be cloned").

## Design system

- `design-system/` is the source of truth for UI: tokens, 6 themes (`data-theme` on `<html>`, default `ember`), components, guidelines, voice. Load the `talewick-design` skill before any UI work.
- `src/app/globals.css` imports `design-system/tokens/*.css` directly, so token edits apply to the app. Fonts are self-hosted with next/font (Geist, Geist Mono, Newsreader, Cinzel), not the Google Fonts link in `tokens/fonts.css`.
- Design system tokens override Tailwind defaults where names match: `rounded-lg` is 14px, `text-xl` is 22px, `shadow-*` and `ease-out` are the system's values.
- Components in `design-system/components/` are reference `.jsx`. Port to TSX + Tailwind in `src/components/` only when needed. Ported so far: shell (TitleBar `arcane`, WindowControls `pill`), Wordmark, ui (Button, IconButton, Input, Kbd, SegmentedControl, ProgressBar, Tooltip), navigation (Sidebar), reader (BookCover, HypeIndicator), effects (ShaderBackground), arcana (Ornament, OrnateFrame, MoteField).
- Icons: `lucide-react`, `strokeWidth={1.5}`, 14-16px.
- Library data comes from `useLibrary()` in `src/features/library/use-library.ts`. It returns `sample-library.ts` until import exists; replace it there, not in components.
- The design system is not linted and not part of the build. Do not import its `.jsx` into the app.

## Verifying UI (required)

Every UI change must be looked at in the running app before it is committed. Typecheck and lint passing is not enough.

1. Run both `yarn snap` (production build) and `yarn snap:dev` (dev mode). Dev mode runs React StrictMode, which mounts every effect twice; bugs that only show there (e.g. a WebGL canvas going blank) are invisible in production.
2. Open the PNGs in `.snapshots/` and actually inspect them. Add `--hover "<selector>"` for hover states.
3. Both runs must report `console: clean`. They exit 1 on console errors or warnings.
4. For interactions (clicks, typing, keyboard shortcuts), write a short script using `withApp()` from `scripts/lib/electron-harness.mjs`.
5. If the user's `yarn dev` is already running, use `yarn snap:dev --url http://localhost:3000` instead of starting a second dev server. The harness uses its own temporary profile (`TALEWICK_USER_DATA`), so it works next to an open Talewick window.

Never run `yarn add` / `yarn install` while a Talewick window is open. Windows locks Electron's files, the install aborts halfway and leaves `node_modules/electron/dist` and `node_modules/.bin` broken. Ask the user to close the app first.

Effects must survive StrictMode's mount, unmount, mount cycle: clean up listeners and animation frames, but never destroy something the next mount reuses (for example, do not call `WEBGL_lose_context` on a canvas).

## Design preferences

- No cursor-following glows (spotlight cards, glare that tracks the mouse). The user finds them too much. Hover feedback is a shadow, colour or border change. The 3D tilt on book covers is fine.
