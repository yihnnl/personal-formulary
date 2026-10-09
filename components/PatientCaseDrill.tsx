"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Drug } from "@/lib/types";
import { getYearForDrug, toYearParam } from "@/lib/drugs";
import { generateCase, CaseQuestion } from "@/lib/case-templates";
import Breadcrumb, { Crumb } from "@/components/Breadcrumb";

const TEMPLATE_LABELS: Record<CaseQuestion["template"], string> = {
  adr: "ADR recognition",
  counselling: "Counselling",
  class: "Drug class",
  mechanism: "Mechanism",
  indication: "Indication",
};

/**
 * Patient Case MCQ drill over any drug pool — the caller decides what's in it
 * (one year's drugs, or a cross-year favorites set). Every question — the
 * correct drug and all distractors — is generated from that pool only, via
 * the shared template-based `generateCase` (no AI).
 *
 * Question generation runs in an effect (not during render) so the random
 * question is created only on the client and never disagrees with the
 * prerendered HTML (no hydration mismatch).
 */
export default function PatientCaseDrill({
  pool,
  crumbs,
}: {
  pool: Drug[];
  crumbs: Crumb[];
}) {
  const [question, setQuestion] = useState<CaseQuestion | null>(null);
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setQuestion(generateCase(pool));
    setSelected(null);
    setReady(true);
  }, [pool]);

  const next = useCallback(() => {
    setQuestion(generateCase(pool));
    setSelected(null);
  }, [pool]);

  const header = <Breadcrumb items={crumbs} />;

  if (!ready) {
    return (
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {header}
        <p className="mt-10 text-[15px] text-muted">Loading a case…</p>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {header}
        <p className="mt-10 text-center text-muted">
          Not enough drugs in this set to generate patient cases yet (need at
          least 4).
        </p>
      </div>
    );
  }

  const answered = selected !== null;
  const isCorrect = selected === question.correctIndex;

  return (
    <div className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      {header}

      <p className="mt-6 text-[13px] font-medium tracking-wide text-muted uppercase">
        Patient Case · {TEMPLATE_LABELS[question.template]}
      </p>

      <p className="mt-3 text-[17px] text-ink leading-relaxed break-words">
        {question.prompt}
      </p>

      <div className="mt-6 space-y-2.5">
        {question.options.map((option, i) => {
          const isSelected = selected === i;
          const isCorrectOption = i === question.correctIndex;

          let stateClasses = "border-line bg-surface hover:border-olive/50";
          if (answered && isCorrectOption) {
            stateClasses = "border-olive bg-champagne-light";
          } else if (answered && isSelected && !isCorrectOption) {
            stateClasses = "border-ink/30 bg-warmbg";
          }

          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => setSelected(i)}
              className={`w-full text-left px-4 py-3.5 rounded-card border text-[15px] text-ink leading-relaxed break-words transition-colors focus-ring disabled:cursor-default ${stateClasses}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-6 rounded-card border border-line bg-surface p-4 sm:p-5">
          <p
            className={`text-sm font-medium ${
              isCorrect ? "text-olive-dark" : "text-ink"
            }`}
          >
            {isCorrect ? "Correct" : "Not quite"}
          </p>
          <p className="mt-1.5 text-[14px] text-muted leading-relaxed">
            The answer relates to{" "}
            <span className="text-ink font-medium">{question.drug.name}</span>.
            {" "}Review its formulary page for the full drug class, indications,
            mechanism, ADRs and counselling points.
          </p>
          {(() => {
            const drugYear = getYearForDrug(question.drug.slug);
            if (!drugYear) return null;
            return (
              <Link
                href={`/formulary/${toYearParam(drugYear)}/${question.drug.slug}`}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-olive-dark hover:underline underline-offset-4"
              >
                View {question.drug.name}
              </Link>
            );
          })()}
        </div>
      )}

      <button
        type="button"
        onClick={next}
        className="mt-6 w-full sm:w-auto px-5 py-3 rounded-full bg-olive text-white text-sm font-medium hover:bg-olive-dark transition-colors focus-ring"
      >
        {answered ? "Next case" : "Skip"}
      </button>
    </div>
  );
}
