// Talewick Library — CONCEPT screen (not in the repo yet). Composes DS components only.
const TW = window.TalewickDesignSystem_fc8a08;

const BOOKS = [
  { id: 1, title: "The Ashen Lantern", author: "M. Ravel", progress: 0.42, ch: 213, total: 520 },
  { id: 2, title: "Hollow Crown Ascendant", author: "Kei Doran", progress: 0.08, ch: 31, total: 380 },
  { id: 3, title: "Saltglass", author: "Ines Kort", progress: 0.9, ch: 88, total: 97 },
  { id: 4, title: "A Cartography of Small Gods", author: "T. Wren", progress: 0, ch: 0, total: 64 },
  { id: 5, title: "Nightwick", author: "Ada Sorrel", progress: 0.61, ch: 140, total: 230 },
  { id: 6, title: "Ironbloom", author: "J. Halloway", progress: 0.23, ch: 47, total: 205 },
  { id: 7, title: "The Ninth Bell", author: "Oren Vale", progress: 1, ch: 120, total: 120 },
];

const CHAPTERS = [
  [209, "Smoke Over Calder", "16 min", 2, "read"], [210, "A Debt in Silver", "12 min", 1, "read"], [211, "What the River Kept", "19 min", 3, "read"],
  [212, "Ash on the Water", "14 min", 2, "read"], [213, "The Bell Tolls Twice", "18 min · 41%", 4, "current"], [214, "Nine Lanterns Burning", "22 min", 5, "unread"],
  [215, "Aftermath", "11 min", 1, "unread"], [216, "The Quiet Ledger", "15 min", 2, "unread"],
];

function LibraryView({ onOpen, motes }) {
  const { SegmentedControl, Input, Kbd, Icon, Button, IconButton, Tooltip, BookCover, SpotlightCard, ProgressBar, HypeIndicator, ShaderBackground, MoteField, OrnateFrame, Ornament } = TW;
  const [q, setQ] = React.useState("");
  const list = BOOKS.filter((b) => b.title.toLowerCase().includes(q.toLowerCase()));
  const cur = BOOKS[0];
  return (
    <div style={{ position: "relative", height: "100%", overflowY: "auto", overflowX: "hidden" }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 360, pointerEvents: "none" }}>
        <ShaderBackground intensity={0.45} interactive={false} />
        <MoteField mode={motes} density={44} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 30%, var(--background))" }}></div>
      </div>
      <div style={{ position: "relative", padding: "28px 36px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
          <h1 style={{ margin: 0, flexShrink: 0, fontFamily: "var(--font-display)", fontSize: 24, lineHeight: "28px", fontWeight: 600, letterSpacing: "var(--tracking-display)", textShadow: "0 0 22px var(--accent-glow)" }}>Library</h1>
          <div style={{ flexShrink: 0 }}><SegmentedControl size="sm" options={["Bookshelf", "Series", "Comic"]} /></div>
          <div style={{ flex: 1, minWidth: 0 }}></div>
          <Input width="auto" style={{ flex: "0 1 260px", minWidth: 90 }} value={q} onChange={setQ} icon={<Icon name="search" size={15} />} placeholder="Search library" trailing={<Kbd keys={["⌘", "K"]} />} />
          <Tooltip content="Scan folders" side="bottom"><IconButton variant="secondary" label="Scan folders" icon={<Icon name="folder-open" size={16} />} /></Tooltip>
          <Button icon={<Icon name="plus" size={15} />} style={{ flexShrink: 0 }}>Import</Button>
        </div>
        <OrnateFrame crest glow offset={-6} size={16} style={{ marginTop: 28 }}><SpotlightCard padding={18} onClick={() => onOpen(cur)}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <BookCover width={84} title={cur.title} author={cur.author} showMeta={false} tilt={false} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 600, letterSpacing: "var(--tracking-rune)", textTransform: "uppercase", color: "var(--ornament)" }}>Continue reading</div>
              <div style={{ marginTop: 6, fontFamily: "var(--font-serif)", fontSize: 26, lineHeight: "30px", color: "var(--fg)" }}>{cur.title}</div>
              <div style={{ marginTop: 4, display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "var(--fg-muted)" }}>Chapter 213 · The Bell Tolls Twice <span style={{ color: "var(--fg-subtle)" }}>·</span> Next: <HypeIndicator level={5} variant="pill" /></div>
              <div style={{ marginTop: 14, maxWidth: 420, display: "flex", alignItems: "center", gap: 12 }}><ProgressBar value={cur.progress} /><span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)" }}>42%</span></div>
            </div>
            <Button size="lg" iconRight={<Icon name="arrow-right" size={16} />} onClick={() => onOpen(cur)}>Resume</Button>
          </div>
        </SpotlightCard></OrnateFrame>
        <Ornament label={"Bookshelf · " + list.length} style={{ marginTop: 34, marginBottom: 20 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))", gap: "26px 22px" }}>
          {list.map((b) => <BookCover key={b.id} width={132} title={b.title} author={b.author} progress={b.progress || undefined} onClick={() => onOpen(b)} />)}
        </div>
      </div>
    </div>
  );
}

function BookView({ book, onBack, onFormat, formatting }) {
  const { Button, IconButton, Icon, BookCover, ChapterRow, Badge, ProgressBar, HypeIndicator } = TW;
  return (
    <div style={{ display: "flex", height: "100%", animation: "tw-fade-up 360ms var(--ease-out-expo)" }}>
      <div style={{ width: 300, flexShrink: 0, padding: "24px 28px", borderRight: "1px solid var(--border)", boxSizing: "border-box" }}>
        <Button variant="ghost" size="sm" icon={<Icon name="chevron-left" size={15} />} onClick={onBack}>Library</Button>
        <div style={{ marginTop: 18 }}><BookCover width={180} title={book.title} author={book.author} showMeta={false} progress={book.progress} /></div>
        <div style={{ marginTop: 18, fontFamily: "var(--font-serif)", fontSize: 24, lineHeight: "28px" }}>{book.title}</div>
        <TW.Ornament style={{ marginTop: 12 }} />
        <div style={{ marginTop: 4, fontSize: 13, color: "var(--fg-muted)" }}>{book.author}</div>
        <div style={{ marginTop: 12, display: "flex", gap: 6 }}><Badge>EPUB</Badge><Badge tone="accent" dot>Reading</Badge></div>
        <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 10 }}><ProgressBar value={book.progress} /><span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", whiteSpace: "nowrap" }}>{book.ch}/{book.total}</span></div>
        <div style={{ marginTop: 20, display: "flex", gap: 8 }}><Button fullWidth icon={<Icon name="book-open" size={15} />}>Read</Button><IconButton variant="secondary" label="Listen" icon={<Icon name="headphones" size={16} />} /></div>
      </div>
      <div style={{ flex: 1, minWidth: 0, padding: "24px 28px", overflow: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, letterSpacing: "var(--tracking-display)" }}>Chapters</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--fg-muted)" }}>Hype <HypeIndicator level={3} size="sm" animated={false} /></span>
          <div style={{ flex: 1 }}></div>
          <Button variant="secondary" size="sm" loading={formatting} icon={<Icon name="sparkles" size={14} />} onClick={onFormat}>Format next chapter</Button>
        </div>
        {CHAPTERS.map(([n, t, m, h, s]) => <ChapterRow key={n} number={n} title={t} meta={m} hype={h} state={s} trailing={s === "current" ? <Icon name="bookmark" size={15} color="var(--accent)" /> : null} />)}
      </div>
    </div>
  );
}

function SettingsDialog({ open, onClose, theme, setTheme }) {
  const { Dialog, Switch, Slider, ThemePicker, Button } = TW;
  const row = { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "10px 0", borderTop: "1px solid var(--border)", fontSize: 13 };
  return (
    <Dialog contained open={open} onClose={onClose} title="Appearance" description="Changes apply to every window." width={540}
      footer={<><Button variant="ghost" onClick={onClose}>Cancel</Button><Button onClick={onClose}>Done</Button></>}>
      <div style={{ paddingBottom: 14 }}><ThemePicker value={theme} onChange={setTheme} columns={3} /></div>
      <div style={row}><span>Glass surfaces</span><Switch defaultChecked /></div>
      <div style={row}><span>Ambient shader</span><Switch defaultChecked /></div>
      <div style={{ ...row, alignItems: "center" }}><span style={{ whiteSpace: "nowrap" }}>Corner radius</span><div style={{ width: 200 }}><Slider min={0} max={20} defaultValue={10} format={(v) => v + "px"} /></div></div>
    </Dialog>
  );
}

function FormattingOverlay() {
  const { WickLoader, TextScramble, ProgressBar } = TW;
  const [p, setP] = React.useState(0.05);
  React.useEffect(() => { const i = setInterval(() => setP((x) => Math.min(1, x + 0.09)), 160); return () => clearInterval(i); }, []);
  return (
    <div style={{ position: "absolute", right: 24, bottom: 24, width: 300, padding: 18, borderRadius: "var(--radius-lg)", background: "var(--surface-glass)", backdropFilter: "blur(var(--blur-glass))", border: "1px solid var(--border-glass)", boxShadow: "var(--shadow-lg)", display: "flex", gap: 14, alignItems: "center", animation: "tw-toast-in 420ms var(--ease-out-expo)", zIndex: 20 }}>
      <WickLoader size={30} heat={0.8} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <TextScramble text="Formatting chapter 214" loop style={{ fontSize: 12, color: "var(--fg)" }} />
        <div style={{ marginTop: 10 }}><ProgressBar value={p} /></div>
      </div>
    </div>
  );
}

function TalewickApp() {
  const { AppShell, TitleBar, Sidebar, Icon, Button, Toast, Wordmark, THEMES } = TW;
  const [theme, setThemeState] = React.useState(localStorage.getItem("tw-theme") || "ember");
  React.useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("tw-theme", theme); }, [theme]);
  const motes = ((THEMES || []).find((t) => t.id === theme) || { motes: "up" }).motes;
  const [nav, setNav] = React.useState("library");
  const [book, setBook] = React.useState(null);
  const [settings, setSettings] = React.useState(false);
  const [formatting, setFormatting] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [max, setMax] = React.useState(false);
  const format = () => {
    setFormatting(true);
    setTimeout(() => { setFormatting(false); setToast(Date.now()); setTimeout(() => setToast(null), 4200); }, 2200);
  };
  const items = [
    { section: "Read" },
    { id: "library", label: "Library", icon: <Icon name="library" />, badge: BOOKS.length },
    { id: "reading", label: "Reading now", icon: <Icon name="book-open" /> },
    { id: "quotes", label: "Quotes", icon: <Icon name="quote" />, badge: 42 },
    { id: "downloads", label: "Downloads", icon: <Icon name="download" /> },
    { section: "AI" },
    { id: "wiki", label: "Wiki", icon: <Icon name="network" /> },
    { id: "buddy", label: "Buddy", icon: <Icon name="sparkles" /> },
    { id: "stats", label: "Stats", icon: <Icon name="activity" /> },
  ];
  const content = nav === "library"
    ? (book ? <BookView book={book} onBack={() => setBook(null)} onFormat={format} formatting={formatting} /> : <LibraryView onOpen={setBook} motes={motes} />)
    : <div style={{ display: "grid", placeItems: "center", height: "100%", fontSize: 13, color: "var(--fg-subtle)" }}>Not designed yet</div>;
  return (
    <AppShell titleBar={<TitleBar variant="arcane" platform="win32" maximized={max} onToggleMaximize={() => setMax((m) => !m)}
      context={book ? book.title + " · Ch. " + book.ch : "Library"} search="Search books, chapters, wiki" progress={book ? book.progress : undefined}
      actions={<><TW.IconButton size="sm" label="Buddy" icon={<Icon name="sparkles" size={14} />} /><TW.IconButton size="sm" label="Appearance" icon={<Icon name="palette" size={14} />} onClick={() => setSettings(true)} /></>} />}>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar items={items} activeId={nav} onSelect={(id) => { setNav(id); if (id === "library") setBook(null); }}
          footer={<Button variant="ghost" size="sm" fullWidth icon={<Icon name="settings" size={15} />} onClick={() => setSettings(true)} style={{ justifyContent: "flex-start" }}>Settings</Button>} />
        <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
          {content}
          {formatting && <FormattingOverlay />}
          {toast && <div style={{ position: "absolute", right: 24, bottom: 24, zIndex: 20 }}><Toast key={toast} tone="success" icon={<Icon name="check" size={15} />} title="Chapter 214 formatted" description="Nine Lanterns Burning is ready to read." duration={4000} onClose={() => setToast(null)} /></div>}
        </div>
      </div>
      <SettingsDialog open={settings} onClose={() => setSettings(false)} theme={theme} setTheme={setThemeState} />
    </AppShell>
  );
}

Object.assign(window, { TalewickApp });
