"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAllDrugs,
  getYearForDrug,
  toYearParam,
  yearLabel,
} from "@/lib/drugs";
import type { Drug, Year } from "@/lib/types";

/**
 * Site-wide drug search shown in the top nav. Matches across all years at
 * once (unlike the per-year search in FormularyList) since the whole point
 * is not needing to know which year a drug lives in.
 */
export default function NavSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const drugs = useMemo(() => getAllDrugs(), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const starts: Drug[] = [];
    const rest: Drug[] = [];
    for (const d of drugs) {
      if (d.name.toLowerCase().startsWith(q)) {
        starts.push(d);
      } else if (
        d.name.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q))
      ) {
        rest.push(d);
      }
    }
    return [...starts, ...rest].slice(0, 8);
  }, [drugs, query]);

  useEffect(() => {
    setHighlight(0);
  }, [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function goToDrug(drug: Drug) {
    const year = getYearForDrug(drug.slug) as Year;
    router.push(`/formulary/${toYearParam(year)}/${drug.slug}`);
    setQuery("");
    setOpen(false);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      goToDrug(results[highlight]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <svg
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        type="text"
        inputMode="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck={false}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder="Search drugs..."
        aria-label="Search drugs"
        className="w-full h-9 pl-8 pr-3 rounded-full border border-line bg-surface text-[13px] text-ink placeholder:text-muted focus-ring transition-colors focus:border-olive"
      />

      {open && query.trim() && (
        <div className="absolute left-0 top-full mt-1.5 w-full min-w-[16rem] rounded-card border border-line bg-surface shadow-lg overflow-hidden z-30">
          {results.length === 0 ? (
            <p className="px-3.5 py-3 text-[13px] text-muted">
              No drugs match &quot;{query}&quot;.
            </p>
          ) : (
            <ul className="max-h-80 overflow-y-auto py-1">
              {results.map((drug, i) => {
                const year = getYearForDrug(drug.slug);
                return (
                  <li key={drug.slug}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => goToDrug(drug)}
                      onMouseEnter={() => setHighlight(i)}
                      className={`w-full text-left px-3.5 py-2 flex items-center justify-between gap-3 transition-colors ${
                        i === highlight ? "bg-champagne-light" : "hover:bg-warmbg"
                      }`}
                    >
                      <span className="min-w-0">
                        <span className="block text-[13px] font-medium text-ink truncate">
                          {drug.name}
                        </span>
                        <span className="block text-[12px] text-muted truncate">
                          {drug.tags.join(" · ")}
                        </span>
                      </span>
                      {year && (
                        <span className="shrink-0 text-[11px] font-medium text-muted uppercase tracking-wide">
                          {yearLabel(year)}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
