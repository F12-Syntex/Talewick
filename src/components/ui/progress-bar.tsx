/** Gradient progress bar with a glowing head. `value` is 0 to 1. */
export function ProgressBar({
  value,
  height = 4,
  glow = true,
  label,
}: {
  value: number;
  height?: number;
  glow?: boolean;
  label?: string;
}) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      className="relative w-full rounded-full bg-surface-hover"
      style={{ height }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div
          className="h-full rounded-full bg-linear-to-r from-accent-lo to-accent-hi transition-[width] duration-(--dur-slower) ease-out-expo"
          style={{ width: `${pct}%` }}
        />
      </div>
      {glow && pct > 0 && (
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 rounded-full bg-accent-hi opacity-90 transition-[left] duration-(--dur-slower) ease-out-expo"
          style={{
            left: `${pct}%`,
            width: height * 2,
            height: height * 2,
            marginLeft: -height,
            marginTop: -height,
            boxShadow: `0 0 ${height * 3}px ${height}px var(--accent)`,
          }}
        />
      )}
    </div>
  );
}
