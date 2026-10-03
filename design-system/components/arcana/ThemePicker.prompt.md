Grid of live theme tiles; each tile renders in its own theme. Set data-theme on <html> from onChange.

~~~jsx
<ThemePicker value={theme} onChange={id => { document.documentElement.dataset.theme = id; setTheme(id); }} />
~~~

- THEMES export lists ember, arcane, verdant, frost, bloodmoon, parchment.
