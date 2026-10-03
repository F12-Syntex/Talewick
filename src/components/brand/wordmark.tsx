/** "Talewick" set in Cinzel with a soft accent glow. There is no logo; use this wherever a mark goes. */
export function Wordmark({ size = 20, glow = true }: { size?: number; glow?: boolean }) {
  return (
    <span
      className="font-display leading-none font-semibold tracking-[0.08em] whitespace-nowrap text-fg"
      style={{
        fontSize: size,
        textShadow: glow ? `0 0 ${Math.round(size * 0.9)}px var(--accent-glow)` : undefined,
      }}
    >
      Talewick
    </span>
  );
}
