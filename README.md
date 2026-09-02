# Personal Formulary

A simple, local-only study tool for the pharmacy "Top 100 Drugs" curriculum.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

- `lib/drugs/year1.ts` — the Year 1 drug dataset (25 drugs). This is the
  single source of truth used by the Formulary, Random Drug and Patient
  Case features.
- `lib/drugs/year2.ts` — does not exist yet. When your official Year 2
  list is released, create this file in the same shape as `year1.ts` and
  import it in `lib/drugs/index.ts` — no other code needs to change.
- `lib/types.ts` — the `Drug` shape (name, tags, drugClass, mechanism,
  adrs, keyADRs, counselling, sources).
- `lib/useProgress.ts` — localStorage-backed "I know this" progress,
  shared across the whole app.
- `lib/case-templates.ts` — the deterministic (non-AI) Patient Case
  question generator. Distractors are always pulled from other drugs in
  the dataset, never invented.
- `app/` — Next.js App Router pages (Home, Formulary, drug detail pages,
  Test Yourself, Random Drug, Patient Case).

## Editing drug content

Everything about a drug lives in one object in `lib/drugs/year1.ts`:

```ts
{
  slug: "ramipril",
  reference: 21,
  name: "Ramipril",
  tags: ["ACE inhibitor", "Cardiovascular"],
  drugClass: "...",
  mechanism: "...",
  adrs: ["...", "..."],
  keyADRs: ["..."],      // used to prioritise Patient Case questions
  counselling: ["...", "..."],
  sources: ["BNF", "NHS"], // only list a source you actually used
}
```

A note on the drug content included here: it was compiled from
established pharmacology knowledge consistent with the BNF, NHS,
DrugBank and Drugs.com, condensed for studying — it was not re-verified
against each live source drug-by-drug. Please check each entry against
the current BNF/NHS/DrugBank/Drugs.com before relying on it for exams,
and edit the `sources` array to reflect whatever you actually check.

## No backend, no accounts

Progress is stored only in your browser's Local Storage. Clearing your
browser data will reset your "I know this" progress.
