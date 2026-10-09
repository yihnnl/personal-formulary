"use client";

import type { Drug, Year } from "@/lib/types";
import { toYearParam, yearLabel } from "@/lib/drugs";
import { useProgress } from "@/lib/useProgress";
import { useFavorites } from "@/lib/useFavorites";
import DrugListItem from "@/components/DrugListItem";

/**
 * One year's worth of favorited drugs on the Favorites page. Pulled out as
 * its own component so each year can call useProgress(year) unconditionally
 * — Favorites spans all years, but each section only ever cares about one.
 */
export default function FavoritesYearSection({
  year,
  drugs,
}: {
  year: Year;
  drugs: Drug[];
}) {
  const yearParam = toYearParam(year);
  const { isKnown, toggleDrugKnown } = useProgress(year);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (drugs.length === 0) return null;

  return (
    <div className="mt-6">
      <p className="text-[13px] font-medium tracking-wide text-muted uppercase">
        {yearLabel(year)}
      </p>
      <div className="mt-2 rounded-card border border-line bg-surface px-2">
        {drugs.map((drug) => (
          <DrugListItem
            key={drug.slug}
            drug={drug}
            yearParam={yearParam}
            known={isKnown(drug.slug)}
            onToggle={() => toggleDrugKnown(drug.slug)}
            favorite={isFavorite(drug.slug)}
            onToggleFavorite={() => toggleFavorite(drug.slug)}
          />
        ))}
      </div>
    </div>
  );
}
