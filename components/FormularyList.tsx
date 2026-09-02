"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Year } from "@/lib/types";
import { getDrugsForYear, toYearParam, yearLabel } from "@/lib/drugs";
import {
  getTopic,
  drugMatchesTopicSlug,
  LIBRARY_QUICK_FILTERS,
} from "@/lib/topics";
import { useProgress } from "@/lib/useProgress";
import ProgressBar from "@/components/ProgressBar";
import SearchBar from "@/components/SearchBar";
import DrugListItem from "@/components/DrugListItem";

/**
 * The Formulary Library for a single academic year. Text search, the tag /
 * topic filter (`?topic=` in the URL) and per-year progress are all driven by
 * props + URL, so Years 1-3 reuse this one component.
 */
export default function FormularyList({ year }: { year: Year }) {
  const [query, setQuery] = useState("");
  const drugs = useMemo(() => getDrugsForYear(year), [year]);
  const yearParam = toYearParam(year);

  const searchParams = useSearchParams();
  const topicSlug = searchParams.get("topic");
  const activeTopic = topicSlug ? getTopic(topicSlug) : null;

  const { isKnown, toggleDrugKnown, hydrated, known } = useProgress(year);

  const knownCount = useMemo(
    () => drugs.filter((d) => known[d.slug]).length,
    [drugs, known]
  );

  // Quick-filter chips: only those that match at least one drug this year.
  const quickFilters = useMemo(
    () =>
      LIBRARY_QUICK_FILTERS.map((slug) => ({ slug, topic: getTopic(slug) }))
        .filter(
          (q) =>
            q.topic && drugs.some((d) => drugMatchesTopicSlug(d, q.slug))
        )
        .map((q) => ({ slug: q.slug, name: q.topic!.name })),
    [drugs]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return drugs.filter((d) => {
      if (!drugMatchesTopicSlug(d, topicSlug)) return false;
      if (!q) return true;
      return (
        d.name.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [drugs, query, topicSlug]);

  const chipBase =
    "inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-full text-[13px] font-medium border transition-colors focus-ring";

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <div className="flex items-end justify-between gap-3 flex-wrap">
        <div className="min-w-0">
          <p className="text-[13px] font-medium tracking-wide text-muted uppercase">
            {yearLabel(year)} · Formulary
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-ink mt-1">
            Your drugs
          </h1>
        </div>
        <p className="text-sm font-medium text-ink tabular-nums shrink-0">
          {hydrated ? knownCount : "–"} / {drugs.length} known
        </p>
      </div>

      <div className="mt-4">
        <ProgressBar value={hydrated ? knownCount : 0} total={drugs.length} />
      </div>

      {/* Quick tag filters — horizontal touch-scroll on mobile, wraps from sm up */}
      <div className="mt-7 -mx-5 sm:mx-0">
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-5 sm:px-0 sm:flex-wrap">
          <Link
            href={`/formulary/${yearParam}`}
            className={`${chipBase} ${
              topicSlug
                ? "bg-surface border-line text-muted hover:text-ink hover:border-olive/50"
                : "bg-ink border-ink text-warmbg"
            }`}
          >
            All
          </Link>
          {quickFilters.map((q) => {
            const active = q.slug === topicSlug;
            return (
              <Link
                key={q.slug}
                href={`/formulary/${yearParam}?topic=${q.slug}`}
                className={`${chipBase} ${
                  active
                    ? "bg-ink border-ink text-warmbg"
                    : "bg-surface border-line text-muted hover:text-ink hover:border-olive/50"
                }`}
              >
                {q.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Active filter (covers filters set from a Topic page too) */}
      {activeTopic && (
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-muted">
          <span>
            Filtered by{" "}
            <Link
              href={`/topics/${activeTopic.slug}`}
              className="text-ink font-medium hover:underline underline-offset-4"
            >
              {activeTopic.name}
            </Link>
          </span>
          <Link
            href={`/formulary/${yearParam}`}
            className="inline-flex items-center gap-1 py-1 text-muted hover:text-ink transition-colors focus-ring rounded"
            aria-label="Clear filter"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
            Clear
          </Link>
        </div>
      )}

      <div className="mt-6">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by name or tag..."
        />
      </div>

      <div className="mt-6 rounded-card border border-line bg-surface px-2">
        {filtered.length === 0 ? (
          <p className="text-sm text-muted text-center py-10">
            {query
              ? `No drugs match "${query}".`
              : "No drugs match this filter."}
          </p>
        ) : (
          filtered.map((drug) => (
            <DrugListItem
              key={drug.slug}
              drug={drug}
              yearParam={yearParam}
              known={isKnown(drug.slug)}
              onToggle={() => toggleDrugKnown(drug.slug)}
            />
          ))
        )}
      </div>
    </div>
  );
}
