import Link from "next/link";
import type { Drug } from "@/lib/types";
import { toYearParam, yearLabel } from "@/lib/drugs";
import { getRelatedDrugs } from "@/lib/related";

/**
 * "Related Drugs" — a short list of formulary drugs connected to this one by
 * shared class, condition or therapeutic area. Computed live from tags +
 * indications (see {@link getRelatedDrugs}); nothing is hand-maintained.
 */
export default function RelatedDrugs({ drug }: { drug: Drug }) {
  const related = getRelatedDrugs(drug);
  if (related.length === 0) return null;

  return (
    <section className="pt-6">
      <h2 className="text-[13px] font-medium tracking-wide text-muted uppercase">
        Related Drugs
      </h2>
      <ul className="mt-3 divide-y divide-line rounded-card border border-line bg-surface">
        {related.map(({ drug: d, year, label }) => (
          <li key={`${year}-${d.slug}`}>
            <Link
              href={`/formulary/${toYearParam(year)}/${d.slug}`}
              className="flex items-center justify-between gap-3 px-4 py-3 focus-ring rounded-card hover:bg-champagne-light/40 transition-colors"
            >
              <span className="min-w-0">
                <span className="block text-[15px] font-medium text-ink break-words">
                  {d.name}
                </span>
                <span className="block text-[13px] text-muted mt-0.5">
                  {yearLabel(year)} · {label}
                </span>
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-muted"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
