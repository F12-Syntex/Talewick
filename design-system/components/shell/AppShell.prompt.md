The Talewick window frame: TitleBar plus a flexible, scrollable main area; wrap every screen in it.

```jsx
<AppShell titleBar={<TitleBar platform="win32" />}>
  <YourScreen />
</AppShell>
```

- Fills its parent's height (give the parent a fixed size, e.g. 1280×820).
- `main` is `position: relative; overflow: auto`, so overlays can be absolutely positioned inside.
