"use client";

import type { Year } from "@/lib/types";
import { useDrugNotes } from "@/lib/useDrugNotes";

/**
 * "My Notes" — a plain textarea for personal revision notes on a single drug.
 * Autosaves to localStorage (debounced) via {@link useDrugNotes}; no backend,
 * no login, no rich text.
 */
export default function DrugNotes({ year, slug }: { year: Year; slug: string }) {
  const { value, onChange, hydrated, status } = useDrugNotes(year, slug);

  return (
    <section className="pt-6">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-[13px] font-medium tracking-wide text-muted uppercase">
          My Notes
        </h2>
        <span
          className="text-[12px] text-muted tabular-nums"
          aria-live="polite"
        >
          {status === "saving"
            ? "Saving…"
            : status === "saved"
            ? "Saved locally"
            : value
            ? "Saved locally"
            : ""}
        </span>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={!hydrated}
        rows={5}
        placeholder="Your own revision notes for this drug — saved automatically on this device."
        className="mt-3 w-full rounded-card border border-line bg-surface px-3.5 py-3 text-base sm:text-[15px] text-ink leading-relaxed placeholder:text-muted focus-ring transition-colors focus:border-olive resize-y"
      />
    </section>
  );
}
