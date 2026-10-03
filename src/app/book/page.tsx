import { Suspense } from "react";
import { BookDetail } from "@/features/book/book-detail";

export const metadata = { title: "Book · Talewick" };

export default function BookPage() {
  // useSearchParams needs a Suspense boundary in a static export.
  return (
    <Suspense>
      <BookDetail />
    </Suspense>
  );
}
