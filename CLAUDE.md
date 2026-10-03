# Talewick

Advanced desktop book reader. Electron + Next.js (App Router, static export) + React 19 + Tailwind v4 + TypeScript.

## Commands

- `npm run dev`: Next dev server on :3000 plus Electron pointed at it (`--dev`). F12 toggles DevTools in dev only.
- `npm run build`: `next build` to `out/`, then esbuild bundles `electron/` to `dist-electron/`.
- `npm start`: run the production build in Electron.
- `npm run dist`: package installers into `release/` (electron-builder).
- `npm run typecheck` / `npm run lint`: run both before every commit.

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
