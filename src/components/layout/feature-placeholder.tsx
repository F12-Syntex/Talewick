import { Ornament } from "@/components/arcana/ornament";
import { OrnateFrame } from "@/components/arcana/ornate-frame";
import { PageHeader } from "@/components/layout/page-header";
import type { NavItem } from "@/lib/nav";

/** Page for a section that is planned but not built yet. */
export function FeaturePlaceholder({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <div className="h-full overflow-y-auto">
      <div className="animate-[tw-fade-up_var(--dur-slower)_var(--ease-out-expo)] px-9 pt-7 pb-10">
        <PageHeader title={item.label} />
        <OrnateFrame crest glow offset={-6} size={16} className="mx-auto mt-16 max-w-[520px]">
          <div className="rounded-lg border border-border bg-surface px-10 py-12 text-center shadow-sm">
            <div className="mx-auto grid size-12 place-items-center rounded-[14px] border border-border-strong bg-surface-raised text-accent shadow-(--shadow-inset-top)">
              <Icon size={22} strokeWidth={1.5} />
            </div>
            <p className="mx-auto mt-5 max-w-[360px] text-sm leading-6 text-fg-muted">{item.description}</p>
            <Ornament className="mt-7" />
            <p className="mt-4 text-xs text-fg-subtle">Arrives in a later version.</p>
          </div>
        </OrnateFrame>
      </div>
    </div>
  );
}
