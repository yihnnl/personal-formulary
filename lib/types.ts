export type Source = "BNF" | "NHS" | "DrugBank" | "Drugs.com";

export interface Drug {
  /** Slug used in URLs, e.g. "amlodipine" */
  slug: string;
  /** Reference number within its academic year, e.g. 1 */
  reference: number;
  name: string;
  /** 2-4 short recognition/category tags */
  tags: string[];
  drugClass: string;
  /** Principal licensed / commonly taught uses — 2-4 short items. */
  indications: string[];
  mechanism: string;
  /** One-line, arrow-form recap of the mechanism, rendered small and greyed
   * directly under the Mechanism of Action heading. English, e.g.
   * "ACE inhibition → ↓ angiotensin II → ↓ vasoconstriction + ↓ aldosterone (↓ Na/water retention); ↓ bradykinin breakdown → dry cough" */
  mechanismSummary: string;
  adrs: string[];
  /** The subset of adrs that are most "high-yield" / clinically distinctive.
   * Used to prioritise Patient Case question generation. */
  keyADRs: string[];
  counselling: string[];
  sources: Source[];
  /** "pending" until study content has been written and checked against the
   * approved sources. Omitted (or "ready") means it is complete. */
  status?: "pending" | "ready";
}

export type Year = 1 | 2 | 3;
