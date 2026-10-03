import { FeaturePlaceholder } from "@/components/layout/feature-placeholder";
import { MAIN_NAV } from "@/lib/nav";

export const metadata = { title: "Buddy · Talewick" };

export default function BuddyPage() {
  return <FeaturePlaceholder item={MAIN_NAV[3]} />;
}
