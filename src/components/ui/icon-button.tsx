import { cn } from "@/lib/cn";

type Variant = "ghost" | "secondary" | "primary";
type Size = "sm" | "md" | "lg";

const SIZE: Record<Size, string> = {
  sm: "size-7 rounded-[8px]",
  md: "size-[34px] rounded-[10px]",
  lg: "size-[42px] rounded-[12px]",
};

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: React.ReactNode;
  label: string;
  variant?: Variant;
  size?: Size;
  active?: boolean;
}

/** Square icon-only button. `label` is required: it becomes the accessible name. */
export function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  active = false,
  className,
  ...props
}: IconButtonProps) {
  const variantClass = {
    ghost: active
      ? "border border-transparent bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] text-accent"
      : "border border-transparent text-fg-muted hover:bg-surface-hover hover:text-fg",
    secondary: cn(
      "border border-border bg-surface-raised shadow-(--shadow-inset-top) hover:border-border-strong hover:bg-surface-hover",
      active ? "text-accent" : "text-fg",
    ),
    primary:
      "border border-[color-mix(in_srgb,var(--accent-hi)_55%,transparent)] bg-[linear-gradient(180deg,var(--accent-hi),var(--accent)_55%,var(--accent-lo))] text-on-accent shadow-[inset_0_1px_0_rgba(255,255,255,.3)] hover:shadow-[0_0_0_1px_var(--accent-glow),0_8px_22px_-6px_var(--accent-glow)]",
  }[variant];

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active || undefined}
      className={cn(
        "grid shrink-0 cursor-pointer place-items-center p-0",
        "transition-[transform,background-color,color,box-shadow,border-color] duration-(--dur-base) ease-out",
        "active:scale-[0.92] active:duration-(--dur-fast) disabled:cursor-not-allowed disabled:opacity-45",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        SIZE[size],
        variantClass,
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
