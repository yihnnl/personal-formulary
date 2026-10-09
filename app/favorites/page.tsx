"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { YEARS, getDrugsForYear } from "@/lib/drugs";
import { useFavorites } from "@/lib/useFavorites";
import SearchBar from "@/components/SearchBar";
import FavoritesYearSection from "@/components/FavoritesYearSection";

const MODES = [
  {
    slug: "random",
    title: "Random Drug",
    blurb: "Recall a starred drug's class, indications, mechanism, ADRs and counselling.",
  },
  {
    slug: "patient-case",
    title: "Patient Case",
    blurb: "Multiple-choice scenarios generated from just your starred drugs.",
  },
] as const;

/**
 * A personal collection of starred drugs, pulled from every year. Unlike the
 * per-year Formulary list, this is just "the ones I picked" — filtering by
 * favorite slug, grouped by year for readability.
 */
export default function FavoritesPage() {
  const [query, setQuery] = useState("");
  const { favorites, hydrated } = useFavorites();

  const favoriteCount = Object.values(favorites).filter(Boolean).length;

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return YEARS.map((year) => {
      const drugs = getDrugsForYear(year).filter((d) => {
        if (!favorites[d.slug]) return false;
        if (!q) return true;
        return (
          d.name.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
      return { year, drugs };
    });
  }, [query, favorites]);

  const hasAnyFavorites = sections.some((s) => s.drugs.length > 0);

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <p className="text-[13px] font-medium tracking-wide text-muted uppercase">
        Your collection
      </p>
      <h1 className="text-2xl font-semibold tracking-tight text-ink mt-1">
        Favorites
      </h1>
      <p className="mt-1 text-sm text-muted">
        {hydrated ? favoriteCount : "–"} drug
        {favoriteCount === 1 ? "" : "s"} starred
      </p>

      {hydrated && favoriteCount > 0 && (
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {MODES.map((mode) => (
            <Link
              key={mode.slug}
              href={`/favorites/${mode.slug}`}
              className="group rounded-card border border-line bg-surface p-5 sm:p-6 flex flex-col justify-between hover:border-olive/50 transition-colors focus-ring"
            >
              <div>
                <p className="text-[15px] font-medium text-ink">{mode.title}</p>
                <p className="mt-2 text-[14px] text-muted leading-relaxed">
                  {mode.blurb}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-olive-dark">
                Start
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-6">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search your favorites..."
        />
      </div>

      {hydrated && !hasAnyFavorites ? (
        <div className="mt-6 rounded-card border border-line bg-surface px-5 py-10 text-center">
          <p className="text-sm text-muted">
            {favoriteCount === 0
              ? "No favorites yet. Tap the star on any drug to add it here."
              : `No favorites match "${query}".`}
          </p>
        </div>
      ) : (
        sections.map(({ year, drugs }) => (
          <FavoritesYearSection key={year} year={year} drugs={drugs} />
        ))
      )}
    </div>
  );
}
