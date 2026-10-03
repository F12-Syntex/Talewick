import { FeaturePlaceholder } from "@/components/layout/feature-placeholder";
import { MAIN_NAV } from "@/lib/nav";

export const metadata = { title: "Quotes · Talewick" };

export default function QuotesPage() {
  return <FeaturePlaceholder item={MAIN_NAV[1]} />;
}
