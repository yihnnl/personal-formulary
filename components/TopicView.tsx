import Link from "next/link";
import type { Topic } from "@/lib/topics";
import { drugsForTopic, topicTypeLabel } from "@/lib/topics";
import { toYearParam, yearLabel } from "@/lib/drugs";
import Breadcrumb from "@/components/Breadcrumb";

/**
 * One reusable template for every topic page — drug class, condition,
 * therapeutic area or clinical concept. Content blocks show or hide based on
 * what the topic data provides; the matching drugs are always computed live
 * from the drug dataset and grouped by academic year.
 */
export default function TopicView({ topic }: { topic: Topic }) {
  const groups = drugsForTopic(topic);

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <Breadcrumb
        items={[{ label: "Topics", href: "/topics" }, { label: topic.name }]}
      />

      <p className="mt-6 text-[13px] font-medium tracking-wide text-muted uppercase">
        {topicTypeLabel(topic.type)}
      </p>
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink mt-1">
        {topic.name}
      </h1>

      {topic.summary && (
        <p className="mt-4 text-[15px] text-ink leading-relaxed">
          {topic.summary}
        </p>
      )}

      {topic.commonUses && topic.commonUses.length > 0 && (
        <section className="mt-8">
          <h2 className="text-[13px] font-medium tracking-wide text-muted uppercase">
            Common uses
          </h2>
          <ul className="mt-3 space-y-2 pl-1">
            {topic.commonUses.map((u, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-[15px] text-ink leading-relaxed"
              >
                <span className="text-muted select-none">–</span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {topic.drugApproach && topic.drugApproach.length > 0 && (
        <section className="mt-8">
          <h2 className="text-[13px] font-medium tracking-wide text-muted uppercase">
            Common drug approaches
          </h2>
          <ul className="mt-3 space-y-2 pl-1">
            {topic.drugApproach.map((u, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-[15px] text-ink leading-relaxed"
              >
                <span className="text-muted select-none">–</span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-[13px] font-medium tracking-wide text-muted uppercase">
          Formulary drugs
        </h2>

        {groups.length === 0 ? (
          <p className="mt-3 text-[14px] text-muted">
            No formulary drugs currently match this topic.
          </p>
        ) : (
          <div className="mt-4 space-y-6">
            {groups.map((g) => (
              <div key={g.year}>
                <p className="text-[13px] font-medium tracking-wide text-olive-dark uppercase">
                  {yearLabel(g.year)}
                </p>
                <ul className="mt-2 divide-y divide-line rounded-card border border-line bg-surface">
                  {g.drugs.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={`/formulary/${toYearParam(g.year)}/${d.slug}`}
                        className="flex items-center justify-between gap-3 px-4 py-3.5 text-[15px] text-ink hover:bg-champagne-light/40 transition-colors focus-ring rounded-card"
                      >
                        <span className="font-medium break-words min-w-0">{d.name}</span>
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
              </div>
            ))}
          </div>
        )}
      </section>

      {topic.sources.length > 0 && (
        <>
          <hr className="mt-10 border-line" />
          <div className="pt-6">
            <p className="text-[13px] font-medium tracking-wide text-muted uppercase mb-2.5">
              Sources
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[14px] text-ink/80">
              {topic.sources.map((s, i) => (
                <span key={s} className="flex items-center gap-3">
                  {s}
                  {i < topic.sources.length - 1 && (
                    <span className="text-line">·</span>
                  )}
                </span>
              ))}
            </div>
            <p className="mt-2 text-[13px] text-muted leading-relaxed">
              Short revision summary, paraphrased from standard UK references.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
