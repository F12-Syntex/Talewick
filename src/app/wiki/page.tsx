import { FeaturePlaceholder } from "@/components/layout/feature-placeholder";
import { MAIN_NAV } from "@/lib/nav";

export const metadata = { title: "Wiki · Talewick" };

export default function WikiPage() {
  return <FeaturePlaceholder item={MAIN_NAV[2]} />;
}
