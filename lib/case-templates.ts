import { Drug } from "@/lib/types";

export type CaseTemplate =
  | "adr"
  | "counselling"
  | "class"
  | "mechanism"
  | "indication";

export interface CaseQuestion {
  template: CaseTemplate;
  prompt: string;
  options: string[];
  correctIndex: number;
  drug: Drug;
}

const TEMPLATES: CaseTemplate[] = [
  "adr",
  "counselling",
  "class",
  "mechanism",
  "indication",
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Builds `count` MCQ options (correct + distractors), pre-shuffled, returning the correct index. */
function buildOptions(
  correct: string,
  distractorPool: string[],
  count = 4
): { options: string[]; correctIndex: number } {
  const uniqueDistractors = Array.from(new Set(distractorPool)).filter(
    (v) => v !== correct
  );
  const chosen = shuffle(uniqueDistractors).slice(0, count - 1);
  const options = shuffle([correct, ...chosen]);
  return { options, correctIndex: options.indexOf(correct) };
}

/**
 * Generates a single deterministic (template-based, non-AI) patient case
 * question from the drug dataset it is handed.
 *
 * The caller passes the drug list for ONE academic year, so the correct
 * answer AND every distractor come from that year only — a Year 2 case can
 * never pull a Year 1 or Year 3 fact.
 */
export function generateCase(
  drugs: Drug[],
  forceTemplate?: CaseTemplate
): CaseQuestion | null {
  if (drugs.length < 4) return null; // need at least 4 drugs for a fair MCQ

  const template = forceTemplate ?? pick(TEMPLATES);
  const drug = pick(drugs);
  const others = drugs.filter((d) => d.slug !== drug.slug);

  switch (template) {
    case "adr": {
      // Prefer a high-yield ADR so the question stays clinically meaningful.
      const adr = drug.keyADRs[0] ?? drug.adrs[0];
      const distractorPool = others.map((d) => d.name);
      const { options, correctIndex } = buildOptions(drug.name, distractorPool);
      return {
        template,
        prompt: `A patient has recently started treatment and now reports ${adr.toLowerCase()}. Which of the following medicines is the most likely cause?`,
        options,
        correctIndex,
        drug,
      };
    }
    case "counselling": {
      const point = drug.counselling[0];
      const distractorPool = others
        .map((d) => d.counselling[0])
        .filter(Boolean);
      const { options, correctIndex } = buildOptions(point, distractorPool);
      return {
        template,
        prompt: `A patient has been prescribed ${drug.name}. Which counselling point would be most appropriate?`,
        options,
        correctIndex,
        drug,
      };
    }
    case "class": {
      const distractorPool = others.map((d) => d.drugClass);
      const { options, correctIndex } = buildOptions(drug.drugClass, distractorPool);
      return {
        template,
        prompt: `A patient is taking ${drug.name}. Which drug class does this medicine belong to?`,
        options,
        correctIndex,
        drug,
      };
    }
    case "mechanism": {
      const distractorPool = others.map((d) => d.mechanism);
      const { options, correctIndex } = buildOptions(drug.mechanism, distractorPool);
      return {
        template,
        prompt: `Which mechanism best describes how ${drug.name} works?`,
        options,
        correctIndex,
        drug,
      };
    }
    case "indication": {
      const indication = pick(drug.indications);
      const distractorPool = others.flatMap((d) => d.indications);
      const { options, correctIndex } = buildOptions(indication, distractorPool);
      return {
        template,
        prompt: `A prescriber asks what ${drug.name} is used for. Which of the following is an appropriate indication?`,
        options,
        correctIndex,
        drug,
      };
    }
  }
}
