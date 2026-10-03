/** Keyboard shortcut key caps. */
export function Kbd({ keys }: { keys: string[] }) {
  return (
    <span className="inline-flex gap-[3px]">
      {keys.map((key) => (
        <kbd
          key={key}
          className="inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-[5px] border border-border-strong bg-linear-to-b from-surface-hover to-surface-raised px-[5px] font-mono text-[11px] leading-none text-fg-muted shadow-[inset_0_-1px_0_rgba(0,0,0,.45)]"
        >
          {key}
        </kbd>
      ))}
    </span>
  );
}
