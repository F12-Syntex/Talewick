import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const SIZE: Record<Size, string> = {
  sm: "h-7 px-2.5 text-xs rounded-[8px] gap-1.5",
  md: "h-[34px] px-3.5 text-[13px] rounded-[10px] gap-2",
  lg: "h-[42px] px-[18px] text-sm rounded-[12px] gap-2",
};

const VARIANT: Record<Variant, string> = {
  primary:
    "text-on-accent border border-[color-mix(in_srgb,var(--accent-hi)_55%,transparent)] bg-[linear-gradient(180deg,var(--accent-hi),var(--accent)_55%,var(--accent-lo))] shadow-[inset_0_1px_0_rgba(255,255,255,.3),0_1px_2px_rgba(0,0,0,.4)] hover:brightness-[1.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_0_0_1px_var(--accent-glow),0_10px_28px_-8px_var(--accent-glow)]",
  secondary:
    "text-fg border border-border bg-surface-raised shadow-[var(--shadow-inset-top),var(--shadow-sm)] hover:bg-surface-hover hover:border-border-strong",
  ghost: "text-fg-muted border border-transparent hover:bg-surface-hover hover:text-fg",
  danger:
    "text-danger-fg border border-[color-mix(in_srgb,var(--danger)_40%,transparent)] bg-[color-mix(in_srgb,var(--danger)_16%,transparent)] hover:bg-[color-mix(in_srgb,var(--danger)_28%,transparent)]",
};

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

/** Design system Button. Primary gets a gold gradient and a light sweep on hover. */
export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "group relative shrink-0 items-center justify-center overflow-hidden font-medium whitespace-nowrap",
        "cursor-pointer transition-[transform,box-shadow,background-color,border-color,color,filter] duration-(--dur-base) ease-out",
        "active:scale-[0.97] active:duration-(--dur-fast) disabled:cursor-not-allowed disabled:opacity-45",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        fullWidth ? "flex w-full" : "inline-flex",
        SIZE[size],
        VARIANT[variant],
        className,
      )}
      {...props}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-[-60%] w-[45%] bg-[linear-gradient(100deg,transparent,rgba(255,255,255,.4),transparent)] group-hover:left-[130%] group-hover:transition-[left] group-hover:duration-750 group-hover:ease-out"
        />
      )}
      <span className="relative inline-flex items-center gap-[inherit]">
        {icon}
        {children}
        {iconRight}
      </span>
    </button>
  );
}
