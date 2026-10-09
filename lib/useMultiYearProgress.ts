"use client";

import { useCallback } from "react";
import { getYearForDrug } from "@/lib/drugs";
import { useProgress } from "@/lib/useProgress";

/**
 * Like useProgress, but for drill pools that span every year (e.g. a
 * Favorites drill mixing drugs from Year 1-3). Looks up which year a slug
 * belongs to and writes into that year's own progress bucket, so "I knew
 * this" still lands in the right place.
 */
export function useMultiYearProgress() {
  const year1 = useProgress(1);
  const year2 = useProgress(2);
  const year3 = useProgress(3);

  const setDrugKnown = useCallback(
    (slug: string, value: boolean) => {
      const year = getYearForDrug(slug);
      if (year === 1) year1.setDrugKnown(slug, value);
      else if (year === 2) year2.setDrugKnown(slug, value);
      else if (year === 3) year3.setDrugKnown(slug, value);
    },
    [year1.setDrugKnown, year2.setDrugKnown, year3.setDrugKnown]
  );

  return { setDrugKnown };
}
