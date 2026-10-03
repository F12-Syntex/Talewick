"use client";

import { useEffect, useState } from "react";
import type { WindowApi } from "@shared/ipc";

export function WindowControls({ api }: { api: WindowApi }) {
  const [maximized, setMaximized] = useState(false);

  useEffect(() => {
    let active = true;
    void api.isMaximized().then((value) => active && setMaximized(value));
    const unsubscribe = api.onMaximizedChange(setMaximized);
    return () => {
      active = false;
      unsubscribe();
    };
  }, [api]);

  // Bridge calls are wrapped so React's event object never crosses contextBridge.
  return (
    <div className="no-drag flex h-full items-center gap-0.5 pr-1.5">
      <ControlButton label="Minimize" onClick={() => api.minimize()}>
        <path d="M1 5.5h9" />
      </ControlButton>
      <ControlButton label={maximized ? "Restore" : "Maximize"} onClick={() => api.toggleMaximize()}>
        {maximized ? (
          <>
            <path d="M3 1.5h6.5V8" />
            <rect x="1" y="3" width="6.5" height="6.5" rx="0.5" />
          </>
        ) : (
          <rect x="1" y="1" width="9" height="9" rx="1.5" />
        )}
      </ControlButton>
      <ControlButton label="Close" onClick={() => api.close()} danger>
        <path d="M1 1l9 9M10 1l-9 9" />
      </ControlButton>
    </div>
  );
}

function ControlButton({
  label,
  onClick,
  danger,
  children,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`grid size-7 cursor-default place-items-center rounded-[8px] text-fg-muted transition-[color,background-color,transform,box-shadow] duration-[var(--dur-fast)] ease-out active:scale-90 ${
        danger
          ? "hover:bg-danger hover:text-on-danger hover:shadow-[0_0_14px_-2px_color-mix(in_srgb,var(--danger)_70%,transparent)]"
          : "hover:bg-surface-hover hover:text-fg"
      }`}
    >
      <svg width="10" height="10" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.2">
        {children}
      </svg>
    </button>
  );
}
