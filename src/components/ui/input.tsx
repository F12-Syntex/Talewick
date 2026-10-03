import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  size?: Size;
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
  /** Receives the string value, not the event. */
  onValueChange?: (value: string) => void;
  wrapperClassName?: string;
}

/** Text input with leading icon, trailing slot and a gold focus ring. */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = "md", icon, trailing, onValueChange, wrapperClassName, className, disabled, ...props },
  ref,
) {
  return (
    <label
      className={cn(
        "group/input flex cursor-text items-center gap-2 border border-border bg-surface-raised shadow-[inset_0_1px_2px_rgba(0,0,0,.25)]",
        "transition-[border-color,box-shadow] duration-(--dur-base) ease-out hover:border-border-strong",
        "focus-within:border-[color-mix(in_srgb,var(--accent)_70%,transparent)] focus-within:shadow-(--ring-focus) focus-within:hover:border-[color-mix(in_srgb,var(--accent)_70%,transparent)]",
        size === "sm" && "h-7 rounded-[8px] px-[9px]",
        size === "md" && "h-[34px] rounded-[10px] px-[11px]",
        size === "lg" && "h-10 rounded-[10px] px-[11px]",
        disabled && "opacity-50",
        wrapperClassName,
      )}
    >
      {icon && (
        <span className="grid text-fg-subtle transition-colors duration-(--dur-base) group-focus-within/input:text-accent">
          {icon}
        </span>
      )}
      <input
        ref={ref}
        disabled={disabled}
        onChange={(event) => onValueChange?.(event.target.value)}
        className={cn(
          "h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-fg caret-accent outline-none placeholder:text-fg-subtle",
          size === "lg" ? "text-sm" : "text-[13px]",
          className,
        )}
        {...props}
      />
      {trailing && <span className="inline-flex items-center text-fg-subtle">{trailing}</span>}
    </label>
  );
});
