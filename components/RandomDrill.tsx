"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Drug, Year } from "@/lib/types";
import { getReadyDrugs, toYearParam, yearLabel } from "@/lib/drugs";
import { slugForTag } from "@/lib/topics";
import { useProgress } from "@/lib/useProgress";
import Tag from "@/components/Tag";
import Breadcrumb from "@/components/Breadcrumb";

function pickRandom(pool: Drug[], exclude?: string): Drug {
  const candidates =
    pool.length > 1 ? pool.filter((d) => d.slug !== exclude) : pool;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

/**
 * Random Drug recall drill for a single academic year. The pool is that year's
 * drugs only, and "I knew this" writes to that year's progress bucket.
 *
 * The first drug is chosen in an effect (not during render) so the randomly
 * chosen name is identical between the prerendered HTML and the client — i.e.
 * no hydration mismatch.
 */
export default function RandomDrill({ year }: { year: Year }) {
  const pool = useMemo(() => getReadyDrugs(year), [year]);
  const [drug, setDrug] = useState<Drug | null>(null);
  const [revealed, setRevealed] = useState(false);
  const { setDrugKnown } = useProgress(year);
  const yearParam = toYearParam(year);

  useEffect(() => {
    setDrug(pickRandom(pool));
    setRevealed(false);
  }, [pool]);

  const next = useCallback(() => {
    setDrug((prev) => pickRandom(pool, prev?.slug));
    setRevealed(false);
  }, [pool]);

  const header = (
    <Breadcrumb
      items={[
        { label: "Test Yourself", href: "/test-yourself" },
        { label: yearLabel(year), href: `/test-yourself/${yearParam}` },
        { label: "Random Drug" },
      ]}
    />
  );

  if (!drug) {
    return (
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {header}
        <p className="mt-10 text-[15px] text-muted">Loading a drug…</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      {header}

      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink mt-6 break-words">
        {drug.name}
      </h1>

      {!revealed && (
        <p className="mt-4 text-[15px] text-muted leading-relaxed">
          Without looking it up, can you recall its drug class, indications,
          mechanism of action, ADRs and counselling points?
        </p>
      )}

      {!revealed ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="mt-8 w-full sm:w-auto px-5 py-3 rounded-full bg-olive text-white text-sm font-medium hover:bg-olive-dark transition-colors focus-ring"
        >
          Reveal answer
        </button>
      ) : (
        <>
          <div className="mt-4 flex flex-wrap gap-2">
            {drug.tags.map((tag) => (
              <Tag key={tag} href={`/topics/${slugForTag(tag)}`}>
                {tag}
              </Tag>
            ))}
          </div>

          <div className="mt-8 space-y-6 divide-y divide-line">
            <Field num="01" label="Drug Class" value={drug.drugClass} />
            <Field num="02" label="Indications" items={drug.indications} pad />
            <Field
              num="03"
              label="Mechanism of Action"
              value={drug.mechanism}
              secondary={drug.mechanismSummary}
              pad
            />
            <Field num="04" label="Adverse Drug Reactions" items={drug.adrs} pad />
            <Field num="05" label="Counselling Points" items={drug.counselling} pad />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                setDrugKnown(drug.slug, true);
                next();
              }}
              className="flex-1 px-5 py-3.5 rounded-full bg-olive text-white text-sm font-medium hover:bg-olive-dark transition-colors focus-ring"
            >
              I knew this
            </button>
            <button
              type="button"
              onClick={() => {
                setDrugKnown(drug.slug, false);
                next();
              }}
              className="flex-1 px-5 py-3.5 rounded-full bg-champagne-light border border-champagne text-ink text-sm font-medium hover:bg-champagne transition-colors focus-ring"
            >
              Need to review
            </button>
          </div>

          <button
            type="button"
            onClick={next}
            className="mt-3 w-full text-sm font-medium text-muted hover:text-ink transition-colors focus-ring rounded py-3"
          >
            Next drug →
          </button>
        </>
      )}
    </div>
  );
}

function Field({
  num,
  label,
  value,
  secondary,
  items,
  pad,
}: {
  num: string;
  label: string;
  value?: string;
  secondary?: string;
  items?: string[];
  pad?: boolean;
}) {
  return (
    <div className={pad ? "pt-6" : ""}>
      <div className="flex items-baseline gap-3">
        <span className="text-[13px] font-medium text-olive-dark tabular-nums">
          {num}
        </span>
        <h2 className="text-[13px] font-medium tracking-wide text-muted uppercase">
          {label}
        </h2>
      </div>
      {items ? (
        <ul className="mt-3 space-y-2 pl-1">
          {items.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-[15px] text-ink leading-relaxed">
              <span className="text-muted select-none">–</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p className="mt-3 text-[15px] text-ink leading-relaxed break-words">
            {value}
          </p>
          {secondary && (
            <p className="mt-2.5 text-[13px] text-muted leading-relaxed break-words">
              {secondary}
            </p>
          )}
        </>
      )}
    </div>
  );
}
