Talewick's frameless 36px title bar; put it at the top of every window. `classic` matches the repo, `arcane` is the v2 bar.

```jsx
<TitleBar variant="arcane" context="The Ashen Lantern · Ch. 213" search="Search books, chapters, wiki" progress={0.42}
  actions={<IconButton size="sm" label="Buddy" icon={<Icon name="sparkles" size={14} />} />} />
<TitleBar platform="darwin" variant="arcane" />
```

- Whole bar is a drag region; search, actions and controls opt out with no-drag.
- `progress` fills the bottom hairline with an accent glow and a diamond head.
- Keep actions to 2–3 small IconButtons.
