import { Suspense } from "react";
import CompareDrugs from "@/components/CompareDrugs";

export const metadata = {
  title: "Compare drugs · Personal Formulary",
};

export default function ComparePage() {
  return (
    <Suspense>
      <CompareDrugs />
    </Suspense>
  );
}
