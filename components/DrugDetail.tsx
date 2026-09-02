"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Year } from "@/lib/types";
import { getDrugsForYear, toYearParam, yearLabel } from "@/lib/drugs";
import { slugForTag } from "@/lib/topics";
import { useProgress } from "@/lib/useProgress";
import Tag from "@/components/Tag";
import Breadcrumb from "@/components/Breadcrumb";
import DrugNotes from "@/components/DrugNotes";
import RelatedDrugs from "@/components/RelatedDrugs";

const SECTIONS = [
  { key: "drugClass", num: "01", label: "Drug Class" },
  { key: "indications", num: "02", label: "Indications" },
  { key: "mechanism", num: "03", label: "Mechanism of Action" },
  { key: "adrs", num: "04", label: "Adverse Drug Reactions" },
  { key: "contraindications", num: "05", label: "Contraindications" },
  { key: "cautions", num: "06", label: "Cautions" },
  { key: "counselling", num: "07", label: "Counselling Points" },
] as const;

const LIST_SECTIONS = new Set([
  "indications",
  "adrs",
  "contraindications",
  "cautions",
  "counselling",
]);

/**
 * Drug detail page body, shared by every year. Given the year + slug it reads
 * from that year's dataset and that year's progress bucket.
 */
export default function DrugDetail({ year, slug }: { year: Year; slug: string }) {
  const drug = getDrugsForYear(year).find((d) => d.slug === slug);
  const { isKnown, toggleDrugKnown } = useProgress(year);

  if (!drug) return notFound();

  const known = isKnown(drug.slug);
  const yearParam = toYearParam(year);

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <Breadcrumb
        items={[
          { label: "Formulary", href: "/formulary" },
          { label: yearLabel(year), href: `/formulary/${yearParam}` },
          { label: drug.name },
        ]}
      />

      <div className="mt-6 flex items-start justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink break-words min-w-0">
          {drug.name}
        </h1>
        <button
          type="button"
          onClick={() => toggleDrugKnown(drug.slug)}
          className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-colors focus-ring ${
            known
              ? "bg-olive border-olive text-white"
              : "bg-surface border-line text-ink hover:border-olive/50"
          }`}
        >
          {known && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          )}
          {known ? "Known" : "I know this"}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {drug.tags.map((tag) => (
          <Tag key={tag} href={`/topics/${slugForTag(tag)}`}>
            {tag}
          </Tag>
        ))}
      </div>

      <div className="mt-3">
        <Link
          href={`/compare?a=${drug.slug}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-olive-dark hover:underline underline-offset-4 focus-ring rounded"
        >
          Compare
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      <hr className="mt-8 border-line" />

      <div className="divide-y divide-line">
        {SECTIONS.map((section) => (
          <section key={section.key} className="py-6 sm:py-7">
            <div className="flex items-baseline gap-3">
              <span className="text-[13px] font-medium text-olive-dark tabular-nums">
                {section.num}
              </span>
              <h2 className="text-[13px] font-medium tracking-wide text-muted uppercase">
                {section.label}
              </h2>
            </div>

            {LIST_SECTIONS.has(section.key) ? (
              <ul className="mt-3 space-y-2 pl-1">
                {(drug[section.key] as string[]).map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-[15px] text-ink leading-relaxed">
                    <span className="text-muted select-none">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : section.key === "mechanism" ? (
              <>
                <p className="mt-3 text-[15px] text-ink leading-relaxed">
                  {drug.mechanism}
                </p>
                {drug.mechanismSummary && (
                  <p className="mt-2.5 text-[13px] text-muted leading-relaxed">
                    {drug.mechanismSummary}
                  </p>
                )}
              </>
            ) : (
              <p className="mt-3 text-[15px] text-ink leading-relaxed">
                {drug[section.key] as string}
              </p>
            )}
          </section>
        ))}
      </div>

      <hr className="border-line" />

      <DrugNotes year={year} slug={drug.slug} />

      <hr className="mt-6 border-line" />

      <RelatedDrugs drug={drug} />

      <hr className="mt-6 border-line" />

      <div className="pt-6">
        <p className="text-[13px] font-medium tracking-wide text-muted uppercase mb-2.5">
          Sources
        </p>
        {drug.sources.length > 0 ? (
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[14px] text-ink/80">
            {drug.sources.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                {s}
                {i < drug.sources.length - 1 && (
                  <span className="text-line">·</span>
                )}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-[14px] text-muted">
            Not yet verified against a public reference — check the BNF.
          </p>
        )}
      </div>
    </div>
  );
}
