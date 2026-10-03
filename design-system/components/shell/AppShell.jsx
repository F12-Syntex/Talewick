import React from "react";
import { TitleBar } from "./TitleBar.jsx";

export function AppShell({ children, titleBar, style }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden", background: "var(--background)", color: "var(--fg)", fontFamily: "var(--font-sans)", ...style }}>
      {titleBar !== undefined ? titleBar : <TitleBar />}
      <main style={{ position: "relative", minHeight: 0, flex: 1, overflow: "auto" }}>{children}</main>
    </div>
  );
}
