"use client";

import { useMemo } from "react";
import type { Year } from "@/lib/types";
import { getReadyDrugs, toYearParam, yearLabel } from "@/lib/drugs";
import { useProgress } from "@/lib/useProgress";
import RandomDrill from "@/components/RandomDrill";

/** Random Drug drill scoped to a single academic year's progress bucket. */
export default function YearRandomDrill({ year }: { year: Year }) {
  const pool = useMemo(() => getReadyDrugs(year), [year]);
  const { setDrugKnown } = useProgress(year);
  const yearParam = toYearParam(year);

  return (
    <RandomDrill
      pool={pool}
      crumbs={[
        { label: "Test Yourself", href: "/test-yourself" },
        { label: yearLabel(year), href: `/test-yourself/${yearParam}` },
        { label: "Random Drug" },
      ]}
      setDrugKnown={setDrugKnown}
    />
  );
}
