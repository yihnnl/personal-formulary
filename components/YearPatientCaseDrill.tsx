"use client";

import { useMemo } from "react";
import type { Year } from "@/lib/types";
import { getReadyDrugs, toYearParam, yearLabel } from "@/lib/drugs";
import PatientCaseDrill from "@/components/PatientCaseDrill";

/** Patient Case drill scoped to a single academic year's dataset. */
export default function YearPatientCaseDrill({ year }: { year: Year }) {
  const pool = useMemo(() => getReadyDrugs(year), [year]);
  const yearParam = toYearParam(year);

  return (
    <PatientCaseDrill
      pool={pool}
      crumbs={[
        { label: "Test Yourself", href: "/test-yourself" },
        { label: yearLabel(year), href: `/test-yourself/${yearParam}` },
        { label: "Patient Case" },
      ]}
    />
  );
}
