import { cn } from "@/lib/cn";

/** Page title row: Cinzel title with an accent glow, actions on the right. */
export function PageHeader({ title, children, className }: { title: string; children?: React.ReactNode; className?: string }) {
  return (
    <header className={cn("flex min-w-0 items-center gap-3", className)}>
      <h1
        className="shrink-0 font-display text-2xl leading-7 font-semibold tracking-(--tracking-display) text-fg"
        style={{ textShadow: "0 0 22px var(--accent-glow)" }}
      >
        {title}
      </h1>
      <div className="min-w-0 flex-1" />
      {children}
    </header>
  );
}
