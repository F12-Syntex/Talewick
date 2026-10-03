"use client";

import { Wordmark } from "@/components/brand/wordmark";
import { useBridge } from "@/lib/bridge";
import { WindowControls } from "./window-controls";

/** Design system TitleBar, `arcane` variant. Center column is reserved for search. */
export function TitleBar() {
  const bridge = useBridge();
  const isMac = bridge?.platform === "darwin";
  const showControls = bridge && !isMac;

  return (
    <header className="drag relative grid h-(--titlebar-height) shrink-0 grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,1fr)] items-center gap-3 bg-linear-to-b from-surface-raised to-surface select-none">
      {/* macOS keeps native traffic lights on the left; leave room for them. */}
      <div className={`flex min-w-0 items-center gap-2.5 ${isMac ? "pl-(--titlebar-pad-mac)" : "pl-3.5"}`}>
        <Wordmark size={12} />
      </div>
      <div />
      <div className="flex h-full min-w-0 items-center justify-end">
        {showControls ? <WindowControls api={bridge.window} /> : <span className="w-2" />}
      </div>
      {/* Ornament hairline: brightens toward the centre. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,var(--border),var(--border-strong)_30%,color-mix(in_srgb,var(--ornament)_60%,var(--border))_50%,var(--border-strong)_70%,var(--border))]"
      />
    </header>
  );
}
