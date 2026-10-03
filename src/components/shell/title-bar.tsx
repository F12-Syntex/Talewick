"use client";

import { useBridge } from "@/lib/bridge";
import { WindowControls } from "./window-controls";

export function TitleBar() {
  const bridge = useBridge();
  const isMac = bridge?.platform === "darwin";

  return (
    <header className="drag flex h-9 shrink-0 items-center justify-between border-b border-border bg-surface select-none">
      {/* macOS keeps native traffic lights on the left; leave room for them. */}
      <div className={`flex items-center gap-2 text-xs font-medium tracking-wide text-fg-muted ${isMac ? "pl-20" : "pl-4"}`}>
        Talewick
      </div>
      {bridge && !isMac && <WindowControls api={bridge.window} />}
    </header>
  );
}
