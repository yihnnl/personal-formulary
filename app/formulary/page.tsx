import Link from "next/link";
import { YEARS, getDrugsForYear, toYearParam, yearLabel, YEAR_BLURB } from "@/lib/drugs";

export default function FormularyIndex() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <h1 className="text-2xl font-semibold tracking-tight text-ink">Formulary</h1>
      <p className="mt-2 text-[15px] text-muted">
        Choose an academic year. Each year is its own study set.
      </p>

      <div className="mt-8 space-y-4">
        {YEARS.map((year) => (
          <Link
            key={year}
            href={`/formulary/${toYearParam(year)}`}
            className="group block rounded-card border border-line bg-surface p-5 sm:p-6 hover:border-olive/50 transition-colors focus-ring"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[13px] font-medium tracking-wide text-muted uppercase">
                  {yearLabel(year)}
                </p>
                <p className="mt-1 text-lg font-medium text-ink">
                  {getDrugsForYear(year).length} drugs
                </p>
                <p className="mt-1 text-[14px] text-muted leading-relaxed">
                  {YEAR_BLURB[year]}
                </p>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-olive-dark transition-transform group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
