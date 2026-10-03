# Talewick Design System

Talewick is an advanced desktop book reader (Electron + Next.js), a remake of the author's earlier app **Codex**. Goals: cleaner code, a better-looking UI, and new features, starting with a per-chapter **hype indicator**. As of v0.2.3 only the app shell exists: a frameless dark window with a custom 36px title bar and an empty main area showing a faint "TALEWICK". Everything else (library, EPUB/PDF reader, TTS, speed reader, AI formatting, AI wiki, Buddy, stats, settings) is spec-only.

**Product surfaces:** one — the desktop app (Windows, macOS, Linux). Future separate windows (wiki, dictionary, quotes, Buddy) are planned.

**Sources**
- GitHub: https://github.com/F12-Syntex/Talewick (branch `main`, read at commit tree 05be3a2). Key files: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/components/shell/{app-shell,title-bar,window-controls}.tsx`, `electron/window.ts`, `CLAUDE.md`.
- Program specification v0.2.3 pasted by the user (vision, Codex feature list, open questions).

Because the product is so early, this system is intentionally thin. It documents what exists; it does not invent a library or reader UI.

## Index
- `styles.css` — entry point; imports only.
- `tokens/` — `colors.css` (Ember/root palette), `typography.css`, `spacing.css` (scale + window chrome), `effects.css` (radius, shadow, blur), `motion.css` (durations, easings, all `tw-*` keyframes), `themes.css` (6 themes), `fonts.css`, `base.css`.
- `guidelines/` — foundation cards (Colors, Type, Spacing, Motion, Brand).
- `components/<group>/` — component source, `.d.ts`, `.prompt.md`, one card per group.
- `ui_kits/desktop/` — `index.html` (real v0.2.3 shell) and `library.html` (v2 concept).
- `thumbnail.html`, `SKILL.md`, `github.md`.

## Direction: the arcane library
Modern, functional desktop UI with a fantasy undertone. The fantasy comes from **colour (themes), type (Cinzel display caps), restrained ornament (diamond studs, corner brackets) and light (glow, motes, shaders)**. Never from textures, parchment scans, dragons or illustrated borders. Functional surfaces (lists, inputs, reading text) stay clean. Ornament goes on headings, featured items and empty space only.

## Themes
Set `data-theme` on `<html>` (or any subtree). `:root` = Ember. Every component reads tokens, so themes need no component changes. Shaders and motes re-read colours when `data-theme` changes.
- **ember**: candlelit gold on near-black, ember orange second hue (default)
- **arcane**: violet starlight, arcane cyan
- **verdant**: elderwood moss green, sunlit gold
- **frost**: moonlit ice blue, aurora teal
- **bloodmoon**: crimson, old gold
- **parchment**: light theme. Sepia ink on vellum, wax-seal red. Lighter shadows and darker heat ramp for contrast.

Each theme defines the same set: background, surface, surface-raised, surface-hover, surface-glass, surface-tooltip, border, border-strong, border-glass, fg, fg-muted, fg-subtle, accent (+hi/lo/glow/on-accent), accent-2 (+glow), knob, backdrop and its own heat ramp. Derived tokens (`--ornament`, `--text-faint`, `--shadow-glow`, `--ring-focus`, aliases) are re-declared under `[data-theme]` so they resolve per scope. To add a theme, copy a block in `tokens/themes.css` and add it to `THEMES` in ThemePicker.jsx.

## Two layers
1. **Recreated from the repo (v0.2.3):** base colours, Geist fonts, AppShell / TitleBar / WindowControls, the empty main window.
2. **v2 direction (designed here, not in the repo yet):** the modern, motion-rich layer the owner asked for: glow + glass, soft radii, spring motion, WebGL shaders, loaders, reader components. Decisions were delegated ("figure it out yourself"); treat them as proposals.

## Components
**shell/** (from repo)
- **AppShell** — full-window column: title bar + scrollable `main`.
- **TitleBar**: 36px draggable bar, platform-aware. `classic` = repo. `arcane` = wordmark + breadcrumb, search pill, actions, pill controls, progress hairline.
- **WindowControls**: minimize / maximize-restore / close for Windows & Linux. `classic` or `pill`.

**core/**
- **Button** — primary (gold gradient + light sweep), secondary, ghost, danger; sm/md/lg; loading.
- **IconButton** — square, ghost/secondary/primary, `active` toggle.
- **Icon** — Lucide renderer (needs lucide UMD on the page).
- **Badge** — soft/outline/solid pills incl. heat tones.
- **Kbd** — shortcut key caps.

**forms/**
- **Input** — leading icon, trailing slot, gold focus ring. `onChange` gets the string.
- **Switch** — spring knob that stretches on press.
- **Slider** — glowing thumb, value bubble while dragging.
- **SegmentedControl** — sliding indicator.

**overlay/**
- **Tooltip** — glass bubble, optional shortcut.
- **Dialog** — glass panel, blurred backdrop, blur-in entrance.

**feedback/** (loaders)
- **WickLoader** — signature WebGL candle flame for long AI jobs.
- **Spinner** — conic ring.
- **DotPulse** — "thinking" dots.
- **TextScramble** — glyph-resolve text for AI labels.
- **Skeleton** — shimmer blocks/lines.
- **ProgressBar** — gradient fill with glowing head, or indeterminate.
- **Toast** — glass notification with depleting timer line.

**reader/**
- **HypeIndicator** — chapter intensity 0–5 (Calm, Simmer, Heated, Intense, Wild) as bars, meter or pill. Flickers at 4+.
- **BookCover** — 3D tilt, cursor glare, spine shading, progress strip, generated cover when no image.
- **ChapterRow** — TOC row with hype; read rows dim, current row glows.

**navigation/**
- **Sidebar** — sections + sliding active indicator, optional glass.

**arcana/** (fantasy layer)
- **ThemePicker**: live theme tiles. Each tile renders in its own theme. Also exports `THEMES`.
- **Ornament**: diamond-studded divider with an optional Cinzel label.
- **OrnateFrame**: corner brackets + optional crest diamond around any element.
- **MoteField**: drifting embers, starlight, fireflies or snow in theme colours (canvas 2D).
- **Wordmark**: "Talewick" in Cinzel with an accent glow. A typeset name, not a logo.

**effects/**
- **ShaderBackground** — ambient domain-warped WebGL smoke in accent/heat tones, cursor-reactive.
- **SpotlightCard** — border and surface light up under the cursor.
- Helpers (not components): `effects/shader.js` (`useShader`, `colorVec`, `NOISE` GLSL), `core/useInteract.js`.

**Intentional additions:** all non-shell components are additions requested by the owner (no source defines them yet). `Icon` exists to wrap Lucide.

## Content fundamentals
- Copy in the repo is minimal and functional: "Talewick", "Minimize", "Maximize", "Restore", "Close" (also `aria-label`/`title`). Tagline: "Advanced desktop book reader".
- Casing: Title case for button labels and nav ("Continue reading" is sentence case as a section label), sentence case for descriptions. Uppercase only for tiny 11px section labels (0.06em tracking) and the 0.3em watermark.
- Voice: plain, direct, second person ("Your saved quotes stay."). Short declarative sentences, no hype words, no exclamation marks, no emoji.
- Feature names are literal: Library, Reader, Bookshelf, Series, Comic, Wiki, Buddy, Quotes, Speed reader, Downloads, Stats.
- Hype labels: Calm, Simmer, Heated, Intense, Wild.
- AI progress copy names the job and the target: "Formatting chapter 214", "Building wiki". Success: "Chapter 214 formatted".

## Visual foundations
- **Mood:** a reading room at night lit by a candle. Near-black blue-tinted neutrals, warm gold light, and heat colours that rise toward ember and crimson when a chapter gets intense.
- **Colour:** base `--background #0e0e11`, `--surface #141418`, `--surface-raised #18181d`, `--surface-hover #1f1f25`, `--border #23232a`, `--border-strong #2e2e37`; text `--fg` / `--fg-muted` / `--fg-subtle`. Accent gold `--accent #c9a26b` with `-hi`/`-lo`/`-glow`. Heat ramp `--heat-1..5` (slate → gold → orange → ember → crimson) is reserved for intensity. Repo rule: colours come from tokens, never hex.
- **Type:** Geist for UI, Geist Mono for numbers/timers/chapter numbers, **Newsreader** (serif) for book titles and reading text, **Cinzel** (`--font-display`) for page titles, dialog titles, section labels (11px, 0.18em tracking, uppercase) and the wordmark. Never set body text or buttons in Cinzel. Headline 22/28 semibold −0.015em; body 13–14px; meta 11–12px.
- **Spacing:** 4px base. Window chrome is exact: bar 36px, 16px pad (80px mac), 48px caption buttons. Content gutters 28–36px.
- **Corners:** soft. Controls 8–10px, cards 14px, dialogs 20px, pills full. Window chrome stays square. Covers 4px spine / 10px fore-edge.
- **Borders:** 1px hairlines everywhere; `--border-glass` (8% white) on glass. Dialogs get a 1px top highlight gradient.
- **Shadows:** layered dark shadows sm→xl for elevation; colour *glow* (`--shadow-glow`, `--accent-glow`) only on the accent: primary buttons, active switch, slider thumb, progress head, hype 4+.
- **Glass:** `--surface-glass` + 24px blur + 140% saturate on overlays only (dialog, toast, tooltip, optional sidebar). Never on base content.
- **Backgrounds:** solid `--background` by default. An ambient WebGL shader (`ShaderBackground`) may sit behind headers at ≤0.6 intensity, faded into the background with a vertical gradient. No stock imagery or illustrations; covers bring the colour.
- **Motion:** quick and precise, with springs for physical controls. 140ms press, 200ms colour, 360ms layout, 600ms reveals. `--ease-out-expo` for indicators and entrances; `--ease-spring` for knobs/thumbs; loops use `--ease-in-out`. Entrances use fade + 8–16px rise, dialogs also unblur. Everything respects `prefers-reduced-motion`.
- **Hover:** surfaces step to `--surface-hover`, text muted → fg, borders → `--border-strong`; primary gains glow + light sweep; covers tilt in 3D with glare; spotlight cards light up under the cursor.
- **Press:** scale 0.97 (buttons) / 0.92 (icon buttons); switch knob stretches.
- **Focus:** 2px accent outline offset 2, or `--ring-focus` on inputs.
- **Layout:** title bar fixed top; sidebar 232px; main scrolls. Window 1280×820, min 900×600.
- **Fantasy motifs:** a 45° diamond is the one recurring shape (current chapter marker, ornament studs, dialog crest, theme selection). Hairlines fade out at both ends. One OrnateFrame per view at most. Motes and shaders sit behind headers only, never behind reading text.
- **Cards:** `--surface`, 1px border, 14px radius, `--shadow-sm` → `--shadow-lg` on hover. No coloured left borders.

## Iconography
- Repo: only the three 11×11, 1px-stroke window glyphs (reproduced verbatim in WindowControls).
- v2: **Lucide** (outline, round caps) at 1.5px stroke, 14–16px, via CDN `https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js` and the `Icon` component. This is a substitution, not a choice the repo has made. Swap when custom icons exist.
- No emoji, no unicode-as-icon (except ⌘ in Kbd).
- **No logo** exists. Set "Talewick" in Geist wherever a mark goes. `assets/` is empty until the custom assets arrive.

## Fonts
Geist, Geist Mono, Newsreader and Cinzel load from Google Fonts. No binaries are bundled. Newsreader is a v2 pick for reading text.
