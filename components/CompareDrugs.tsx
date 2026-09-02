"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { Drug, Year } from "@/lib/types";
import { YEARS, getDrugsForYear, toYearParam, yearLabel } from "@/lib/drugs";
import { slugForTag } from "@/lib/topics";
import Tag from "@/components/Tag";
import Breadcrumb from "@/components/Breadcrumb";

interface FieldDef {
  label: string;
  /** render either a single string or a bullet list from the drug */
  get: (d: Drug) => string | string[];
}

const FIELDS: FieldDef[] = [
  { label: "Drug Class", get: (d) => d.drugClass },
  { label: "Indications", get: (d) => d.indications },
  { label: "Mechanism", get: (d) => d.mechanismSummary || d.mechanism },
  { label: "Adverse Drug Reactions", get: (d) => d.adrs },
  { label: "Contraindications", get: (d) => d.contraindications },
  { label: "Cautions", get: (d) => d.cautions },
  { label: "Counselling", get: (d) => d.counselling },
];

interface YearDrug {
  year: Year;
  drug: Drug;
}

export default function CompareDrugs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const all = useMemo<YearDrug[]>(
    () =>
      YEARS.flatMap((year) =>
        getDrugsForYear(year).map((drug) => ({ year, drug }))
      ),
    []
  );

  const findBySlug = useCallback(
    (slug: string | null) => all.find((x) => x.drug.slug === slug) ?? null,
    [all]
  );

  const a = findBySlug(searchParams.get("a"));
  const b = findBySlug(searchParams.get("b"));

  const setPair = useCallback(
    (aSlug: string | null, bSlug: string | null) => {
      const params = new URLSearchParams();
      if (aSlug) params.set("a", aSlug);
      if (bSlug) params.set("b", bSlug);
      const qs = params.toString();
      router.replace(qs ? `/compare?${qs}` : "/compare", { scroll: false });
    },
    [router]
  );

  const bothChosen = a && b && a.drug.slug !== b.drug.slug;

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <Breadcrumb
        items={[
          { label: "Formulary", href: "/formulary" },
          { label: "Compare" },
        ]}
      />

      <h1 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
        Compare drugs
      </h1>
      <p className="mt-2 text-[15px] text-muted">
        Pick two formulary drugs to see their key information side by side.
      </p>

      {/* selectors */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <DrugSelect
          label="Drug A"
          options={all}
          value={a?.drug.slug ?? ""}
          exclude={b?.drug.slug}
          onChange={(slug) => setPair(slug || null, b?.drug.slug ?? null)}
        />
        <DrugSelect
          label="Drug B"
          options={all}
          value={b?.drug.slug ?? ""}
          exclude={a?.drug.slug}
          onChange={(slug) => setPair(a?.drug.slug ?? null, slug || null)}
        />
      </div>

      {(a || b) && (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px]">
          {a && b && (
            <button
              type="button"
              onClick={() => setPair(b.drug.slug, a.drug.slug)}
              className="text-muted hover:text-ink transition-colors focus-ring rounded"
            >
              Swap A ↔ B
            </button>
          )}
          <button
            type="button"
            onClick={() => setPair(null, null)}
            className="text-muted hover:text-ink transition-colors focus-ring rounded"
          >
            Clear
          </button>
        </div>
      )}

      {!bothChosen ? (
        <p className="mt-10 text-[15px] text-muted">
          {a && b
            ? "Choose two different drugs to compare."
            : "Select a drug for each column above."}
        </p>
      ) : (
        <Comparison a={a} b={b} />
      )}
    </div>
  );
}

function DrugSelect({
  label,
  options,
  value,
  exclude,
  onChange,
}: {
  label: string;
  options: YearDrug[];
  value: string;
  exclude?: string;
  onChange: (slug: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-[13px] font-medium tracking-wide text-muted uppercase">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full h-11 rounded-card border border-line bg-surface px-3 text-base sm:text-[15px] text-ink focus-ring transition-colors focus:border-olive"
      >
        <option value="">Select a drug…</option>
        {YEARS.map((year) => (
          <optgroup key={year} label={yearLabel(year)}>
            {options
              .filter((x) => x.year === year)
              .map((x) => (
                <option
                  key={x.drug.slug}
                  value={x.drug.slug}
                  disabled={x.drug.slug === exclude}
                >
                  {x.drug.name}
                </option>
              ))}
          </optgroup>
        ))}
      </select>
    </label>
  );
}

function ColHeader({ item }: { item: YearDrug }) {
  return (
    <div>
      <Link
        href={`/formulary/${toYearParam(item.year)}/${item.drug.slug}`}
        className="text-[17px] font-semibold text-ink hover:underline underline-offset-4 focus-ring rounded break-words"
      >
        {item.drug.name}
      </Link>
      <p className="mt-0.5 text-[13px] text-muted">{yearLabel(item.year)}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {item.drug.tags.map((t) => (
          <Tag key={t} href={`/topics/${slugForTag(t)}`}>
            {t}
          </Tag>
        ))}
      </div>
    </div>
  );
}

function CellValue({ value }: { value: string | string[] }) {
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-1.5">
        {value.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 text-[14px] text-ink leading-relaxed"
          >
            <span className="text-muted select-none">–</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-[14px] text-ink leading-relaxed">{value}</p>;
}

/**
 * Responsive comparison: a two-column grid on tablet/desktop, and on narrow
 * screens it collapses to stacked "Drug A" then "Drug B" blocks per field
 * (each cell keeps a small drug-name label so it stays readable).
 */
function Comparison({ a, b }: { a: YearDrug; b: YearDrug }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        <ColHeader item={a} />
        <ColHeader item={b} />
      </div>

      <div className="mt-2 divide-y divide-line">
        {FIELDS.map((field) => (
          <section key={field.label} className="py-5">
            <h2 className="text-[13px] font-medium tracking-wide text-muted uppercase">
              {field.label}
            </h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <p className="sm:hidden text-[12px] font-medium text-olive-dark mb-1">
                  {a.drug.name}
                </p>
                <CellValue value={field.get(a.drug)} />
              </div>
              <div>
                <p className="sm:hidden text-[12px] font-medium text-olive-dark mb-1">
                  {b.drug.name}
                </p>
                <CellValue value={field.get(b.drug)} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
