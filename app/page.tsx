import Link from "next/link";
import { YEARS, getDrugsForYear, toYearParam, yearLabel } from "@/lib/drugs";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-24">
      <div className="max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
          Personal Formulary
        </h1>
        <p className="mt-2 text-[13px] font-medium tracking-wide text-muted uppercase">
          UCL MPharm Pharmacy
        </p>
      </div>

      <div className="mt-10 sm:mt-12 grid sm:grid-cols-3 gap-4">
        {YEARS.map((year) => (
          <Link
            key={year}
            href={`/formulary/${toYearParam(year)}`}
            className="group rounded-card border border-line bg-surface p-5 sm:p-6 flex flex-col justify-between hover:border-olive/50 transition-colors focus-ring"
          >
            <div>
              <p className="text-[13px] font-medium tracking-wide text-muted uppercase">
                {yearLabel(year)}
              </p>
              <p className="mt-1 text-lg font-medium text-ink">
                {getDrugsForYear(year).length} drugs
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-olive-dark">
              View formulary
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      <Link
        href="/test-yourself"
        className="mt-4 group rounded-card border border-line bg-surface p-5 sm:p-6 flex items-center justify-between gap-3 hover:border-olive/50 transition-colors focus-ring"
      >
        <div>
          <p className="text-[15px] font-medium text-ink">Test yourself</p>
          <p className="text-[13px] text-muted mt-0.5">
            Random Drug · Patient Case — separated by year
          </p>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-olive-dark transition-transform group-hover:translate-x-0.5">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}
