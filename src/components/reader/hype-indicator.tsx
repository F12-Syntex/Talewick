export type HypeLevel = 0 | 1 | 2 | 3 | 4 | 5;

const LABELS = ["Unknown", "Calm", "Simmer", "Heated", "Intense", "Wild"] as const;

/**
 * Chapter intensity 0-5 on the heat ramp. 0 means not analysed yet.
 * Levels 4 and 5 glow and flicker.
 */
export function HypeIndicator({
  level,
  variant = "bars",
  showLabel = false,
  size = "md",
  animated = true,
}: {
  level: HypeLevel;
  variant?: "bars" | "meter" | "pill";
  showLabel?: boolean;
  size?: "sm" | "md";
  animated?: boolean;
}) {
  const color = level ? `var(--heat-${level})` : "var(--fg-subtle)";
  const small = size === "sm";
  const title = `Hype: ${LABELS[level]}${level ? ` (${level}/5)` : ""}`;
  const label = showLabel && (
    <span className={small ? "text-[11px] font-medium" : "text-xs font-medium"} style={{ color }}>
      {LABELS[level]}
    </span>
  );

  if (variant === "meter") {
    return (
      <span title={title} className="inline-flex items-center gap-2">
        <span className="relative rounded-full bg-surface-hover" style={{ width: small ? 48 : 64, height: small ? 4 : 6 }}>
          <span
            className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-(--dur-slower) ease-out-expo"
            style={{
              width: `${(level / 5) * 100}%`,
              background: `linear-gradient(90deg,var(--heat-1),${color})`,
              boxShadow: level >= 4 ? `0 0 10px ${color}` : undefined,
            }}
          />
        </span>
        {label}
      </span>
    );
  }

  if (variant === "pill") {
    return (
      <span
        title={title}
        className="inline-flex h-5 items-center gap-1.5 rounded-full pr-2 pl-1.5 text-[11px] font-medium"
        style={{
          color,
          background: `color-mix(in srgb,${color} 13%,transparent)`,
          border: `1px solid color-mix(in srgb,${color} 28%,transparent)`,
          boxShadow: level >= 4 ? `0 0 14px -4px ${color}` : undefined,
        }}
      >
        <Bars level={level} color={color} height={10} width={2} animated={animated} />
        {LABELS[level]}
      </span>
    );
  }

  return (
    <span title={title} className="inline-flex items-center gap-2">
      <Bars level={level} color={color} height={small ? 12 : 16} width={small ? 3 : 4} animated={animated} />
      {label}
    </span>
  );
}

function Bars({ level, color, height, width, animated }: { level: HypeLevel; color: string; height: number; width: number; animated: boolean }) {
  return (
    <span aria-hidden className="inline-flex items-end" style={{ height, gap: width > 2 ? 2 : 1.5 }}>
      {[0, 1, 2, 3, 4].map((i) => {
        const on = i < level;
        const flicker = on && animated && level >= 4;
        return (
          <span
            key={i}
            className="origin-bottom rounded-[1.5px] transition-colors duration-(--dur-base)"
            style={{
              width,
              height: ((i + 1) / 5) * height,
              background: on ? color : "var(--border-strong)",
              boxShadow: on && level >= 4 ? `0 0 6px ${color}` : undefined,
              animation: flicker ? `tw-flicker ${level === 5 ? 0.7 : 1.1}s ease-in-out infinite` : undefined,
              animationDelay: flicker ? `${i * 0.12}s` : undefined,
            }}
          />
        );
      })}
    </span>
  );
}
