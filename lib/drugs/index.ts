import { Drug, Year } from "@/lib/types";
import { year1Drugs } from "@/lib/drugs/year1";
import { year2Drugs } from "@/lib/drugs/year2";
import { year3Drugs } from "@/lib/drugs/year3";

const DRUGS_BY_YEAR: Record<Year, Drug[]> = {
  1: year1Drugs,
  2: year2Drugs,
  3: year3Drugs,
};

export const YEARS: Year[] = [1, 2, 3];

/** Short descriptive label shown on year cards. */
export const YEAR_BLURB: Record<Year, string> = {
  1: "Cardiovascular, respiratory, pain and endocrine essentials",
  2: "CNS, analgesia, anticoagulation, hormones and psychiatry",
  3: "Antimicrobials, antifungals, antivirals and specialist agents",
};

export function getDrugsForYear(year: Year): Drug[] {
  return DRUGS_BY_YEAR[year] ?? [];
}

export function getAllDrugs(): Drug[] {
  return YEARS.flatMap((y) => DRUGS_BY_YEAR[y]);
}

export function findDrugBySlug(slug: string): Drug | undefined {
  return getAllDrugs().find((d) => d.slug === slug);
}

export function getYearForDrug(slug: string): Year | undefined {
  return YEARS.find((y) => DRUGS_BY_YEAR[y].some((d) => d.slug === slug));
}

/** Drugs with full study content, checked against the approved sources.
 * This is what Random Drug and Patient Case draw from. */
export function getReadyDrugs(year?: Year): Drug[] {
  const pool = year ? getDrugsForYear(year) : getAllDrugs();
  return pool.filter((d) => d.status !== "pending");
}

/* ------------------------------------------------------------------ */
/*  URL <-> Year helpers                                               */
/*  The dynamic route segment is the literal string "year-1" etc. so   */
/*  Formulary and Test Yourself can share a single `[year]` route.     */
/* ------------------------------------------------------------------ */

/** "year-2" -> 2 ; anything invalid -> null */
export function parseYearParam(param: string | undefined): Year | null {
  const match = /^year-([123])$/.exec(param ?? "");
  if (!match) return null;
  return Number(match[1]) as Year;
}

/** 2 -> "year-2" */
export function toYearParam(year: Year): string {
  return `year-${year}`;
}

/** 2 -> "Year 2" */
export function yearLabel(year: Year): string {
  return `Year ${year}`;
}
