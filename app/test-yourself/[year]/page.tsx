import Link from "next/link";
import { notFound } from "next/navigation";
import {
  parseYearParam,
  getDrugsForYear,
  YEARS,
  toYearParam,
  yearLabel,
} from "@/lib/drugs";
import Breadcrumb from "@/components/Breadcrumb";

export function generateStaticParams() {
  return YEARS.map((y) => ({ year: toYearParam(y) }));
}

const MODES = [
  {
    slug: "random",
    title: "Random Drug",
    blurb:
      "See a drug name and recall its class, indications, mechanism, ADRs and counselling points before revealing the answer.",
  },
  {
    slug: "patient-case",
    title: "Patient Case",
    blurb:
      "Short multiple-choice scenarios generated from this year's dataset, built around class, indications, mechanism, ADRs and counselling.",
  },
] as const;

export default function TestYourselfYearPage({
  params,
}: {
  params: { year: string };
}) {
  const year = parseYearParam(params.year);
  if (!year) notFound();
  const yearParam = toYearParam(year);

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <Breadcrumb
        items={[
          { label: "Test Yourself", href: "/test-yourself" },
          { label: yearLabel(year) },
        ]}
      />

      <h1 className="text-2xl font-semibold tracking-tight text-ink mt-6">
        {yearLabel(year)}
      </h1>
      <p className="mt-2 text-[15px] text-muted">
        {getDrugsForYear(year).length} drugs · this study set only uses{" "}
        {yearLabel(year)} data.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {MODES.map((mode) => (
          <Link
            key={mode.slug}
            href={`/test-yourself/${yearParam}/${mode.slug}`}
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
    </div>
  );
}
