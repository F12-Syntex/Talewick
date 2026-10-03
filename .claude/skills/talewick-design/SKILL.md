---
name: talewick-design
description: Talewick design system. Use before building or changing any Talewick UI (screens, components, styling, motion, copy) and for Talewick mockups or prototypes. Holds tokens, the 6 themes, component references, guidelines and voice rules.
user-invocable: true
---

The design system lives in `design-system/` at the repo root. It is the source of truth for how Talewick looks, moves and reads.

1. Read `design-system/readme.md` first (direction, themes, visual foundations, content rules).
2. For a component, read `design-system/components/<group>/<Name>.prompt.md` (usage), `.d.ts` (props) and `.jsx` (reference implementation).
3. For foundations, open the matching card in `design-system/guidelines/`.

Porting into the app (production code):
- Reference `.jsx` files use inline styles. Port them to TSX in `src/components/` with Tailwind classes bound to tokens (`bg-surface`, `text-fg-muted`, `rounded-lg`, `shadow-glow`, `font-display`, `ease-out-expo`). Keep behaviour, sizes and motion identical.
- Tokens are imported by `src/app/globals.css` straight from `design-system/tokens/`. Change a token there, never by hard-coding a value in a component.
- Port a component only when a feature needs it.
- Icons: Lucide (`lucide-react`), 1.5px stroke, 14-16px.

For throwaway mockups, copy what you need out of `design-system/` and build static HTML.
