import type { Drug, Year } from "@/lib/types";
import { YEARS, getDrugsForYear, getYearForDrug } from "@/lib/drugs";

export interface RelatedDrug {
  drug: Drug;
  year: Year;
  /** one short human label for why it is related, e.g. "ACE inhibitor" */
  label: string;
}

/** Broad therapeutic-area tags — a shared one of these is a weak signal, so it
 * ranks below a shared specific class or condition. */
const BROAD_TAGS = new Set(["Cardiovascular", "Respiratory", "Thyroid"]);

function norm(s: string): string {
  return s.trim().toLowerCase();
}

function sharedIndications(a: Drug, b: Drug): string[] {
  const bInd = b.indications.map(norm);
  return a.indications.filter((ind) => {
    const n = norm(ind);
    return bInd.some((other) => other === n || other.includes(n) || n.includes(other));
  });
}

/**
 * Related drugs for a given drug, computed live from the existing tags +
 * formulary data (never a separate hand-maintained list). Works across all
 * three years. Ordered most-specific first:
 *   1. same drug class
 *   2. shared specific class/condition tag
 *   3. shared indication
 *   4. shared broad therapeutic area
 */
export function getRelatedDrugs(drug: Drug, limit = 6): RelatedDrug[] {
  const drugClass = norm(drug.drugClass);
  const tags = new Set(drug.tags);

  const scored: { rd: RelatedDrug; score: number; ref: number }[] = [];

  for (const year of YEARS) {
    for (const other of getDrugsForYear(year)) {
      if (other.slug === drug.slug) continue;

      const sameClass = norm(other.drugClass) === drugClass;
      const commonTags = other.tags.filter((t) => tags.has(t));
      const specificShared = commonTags.filter((t) => !BROAD_TAGS.has(t));
      const broadShared = commonTags.filter((t) => BROAD_TAGS.has(t));
      const commonIndications = sharedIndications(drug, other);

      let score = 0;
      if (sameClass) score += 100;
      score += specificShared.length * 40;
      score += commonIndications.length * 25;
      score += broadShared.length * 8;

      if (score === 0) continue;

      // pick the most specific available label
      let label: string;
      if (specificShared.length > 0) label = specificShared[0];
      else if (sameClass) label = other.drugClass;
      else if (commonIndications.length > 0) label = commonIndications[0];
      else label = broadShared[0];

      scored.push({
        rd: { drug: other, year, label },
        score,
        ref: other.reference,
      });
    }
  }

  scored.sort((a, b) => b.score - a.score || a.ref - b.ref);
  return scored.slice(0, limit).map((s) => s.rd);
}

/** Convenience for callers that only have a slug. */
export function getRelatedDrugsBySlug(slug: string, limit = 6): RelatedDrug[] {
  const year = getYearForDrug(slug);
  if (!year) return [];
  const drug = getDrugsForYear(year).find((d) => d.slug === slug);
  if (!drug) return [];
  return getRelatedDrugs(drug, limit);
}
