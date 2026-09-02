import Link from "next/link";
import { YEARS, toYearParam, yearLabel } from "@/lib/drugs";

const MODES = [
  {
    slug: "random",
    title: "Random Drug",
    blurb: "Recall a drug's class, indications, mechanism, ADRs and counselling.",
  },
  {
    slug: "patient-case",
    title: "Patient Case",
    blurb: "Template-generated multiple-choice scenarios from that year's dataset.",
  },
] as const;

export default function TestYourselfPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <h1 className="text-2xl font-semibold tracking-tight text-ink">
        Test yourself
      </h1>
      <p className="mt-2 text-[15px] text-muted">
        Each academic year is its own study set — Random Drug and Patient Case
        only use drugs from the year you pick.
      </p>

      <div className="mt-10 space-y-10">
        {YEARS.map((year) => {
          const yearParam = toYearParam(year);
          return (
            <section key={year}>
              <p className="text-[13px] font-medium tracking-wide text-muted uppercase">
                {yearLabel(year)}
              </p>
              <div className="mt-3 grid sm:grid-cols-2 gap-4">
                {MODES.map((mode) => (
                  <Link
                    key={mode.slug}
                    href={`/test-yourself/${yearParam}/${mode.slug}`}
                    className="group rounded-card border border-line bg-surface p-5 sm:p-6 flex flex-col justify-between hover:border-olive/50 transition-colors focus-ring"
                  >
                    <div>
                      <p className="text-[15px] font-medium text-ink">
                        {mode.title}
                      </p>
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
            </section>
          );
        })}
      </div>
    </div>
  );
}
