"use client";

import { useMemo } from "react";
import { getReadyDrugs } from "@/lib/drugs";
import { useFavorites } from "@/lib/useFavorites";
import PatientCaseDrill from "@/components/PatientCaseDrill";

/** Patient Case drill over just the starred drugs, mixed across years. */
export default function FavoritesPatientCaseDrill() {
  const { favorites, hydrated } = useFavorites();

  const pool = useMemo(
    () => getReadyDrugs().filter((d) => favorites[d.slug]),
    [favorites]
  );

  if (!hydrated) {
    return (
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <p className="text-[15px] text-muted">Loading…</p>
      </div>
    );
  }

  return (
    <PatientCaseDrill
      pool={pool}
      crumbs={[
        { label: "Favorites", href: "/favorites" },
        { label: "Patient Case" },
      ]}
    />
  );
}
