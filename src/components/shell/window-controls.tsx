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

  return (
    <div className="no-drag flex h-full">
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
          <rect x="1" y="1" width="9" height="9" rx="0.5" />
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
      className={`grid h-full w-12 place-items-center text-fg-muted transition-colors duration-150 hover:text-fg ${
        danger ? "hover:bg-[#c42b1c] hover:text-white" : "hover:bg-surface-hover"
      }`}
    >
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1">
        {children}
      </svg>
    </button>
  );
}
