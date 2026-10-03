// Talewick main window, recreated from src/app/page.tsx + app-shell.tsx.
function HomeScreen() {
  return (
    <div style={{ display: "grid", height: "100%", placeItems: "center" }}>
      <p style={{ margin: 0, fontSize: 14, lineHeight: "20px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--text-faint)" }}>Talewick</p>
    </div>
  );
}

function TalewickWindow({ platform, maximized, setMaximized, onMinimize, onClose }) {
  const { AppShell, TitleBar } = window.TalewickDesignSystem_fc8a08;
  return (
    <AppShell titleBar={<TitleBar platform={platform} maximized={maximized} onMinimize={() => onMinimize()} onToggleMaximize={() => setMaximized(m => !m)} onClose={() => onClose()} />}>
      <HomeScreen />
    </AppShell>
  );
}

Object.assign(window, { HomeScreen, TalewickWindow });
