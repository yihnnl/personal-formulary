"use client";

import Link from "next/link";
import { Drug } from "@/lib/types";
import FavoriteButton from "@/components/FavoriteButton";

export default function DrugListItem({
  drug,
  yearParam,
  known,
  onToggle,
  favorite,
  onToggleFavorite,
}: {
  drug: Drug;
  /** URL segment for the drug's year, e.g. "year-2" */
  yearParam: string;
  known: boolean;
  onToggle: () => void;
  favorite: boolean;
  onToggleFavorite: () => void;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 border-b border-line last:border-b-0 group">
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={known}
        aria-label={`Mark ${drug.name} as ${known ? "not known" : "known"}`}
        className="shrink-0 -ml-1 flex h-10 w-10 items-center justify-center rounded-lg focus-ring"
      >
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-[6px] border transition-colors ${
            known
              ? "bg-olive border-olive"
              : "bg-surface border-line group-hover:border-olive/50"
          }`}
        >
          {known && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          )}
        </span>
      </button>

      <span className="w-6 shrink-0 text-[13px] tabular-nums text-muted">
        {String(drug.reference).padStart(2, "0")}
      </span>

      <Link
        href={`/formulary/${yearParam}/${drug.slug}`}
        className="flex-1 min-w-0 py-3 pr-1 focus-ring rounded"
      >
        <p className="text-[15px] font-medium text-ink truncate group-hover:underline decoration-line underline-offset-4">
          {drug.name}
        </p>
        <p className="text-[13px] text-muted truncate mt-0.5">
          {drug.tags.join(" · ")}
        </p>
      </Link>

      <FavoriteButton
        active={favorite}
        onToggle={onToggleFavorite}
        drugName={drug.name}
        size="sm"
      />
    </div>
  );
}
