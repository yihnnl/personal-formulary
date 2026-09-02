"use client";

import { useCallback, useEffect, useState } from "react";
import type { Year } from "@/lib/types";

const KEY_PREFIX = "personal-formulary:known-drugs";
/** Original (pre year-split) key — held Year 1 progress only. Migrated once. */
const LEGACY_KEY = "personal-formulary:known-drugs";

function storageKey(year: Year) {
  return `${KEY_PREFIX}:year-${year}`;
}

function readKey(key: string): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeKey(key: string, data: Record<string, boolean>) {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch {
    // localStorage unavailable (e.g. private browsing quota) - fail silently
  }
}

/**
 * Tracks which drug slugs the user has marked as "known", **scoped to one
 * academic year**. Each year keeps its own localStorage bucket, so progress
 * is never mixed between Year 1, 2 and 3. Shared by every part of the app for
 * that year (Formulary checkboxes + Random Drug "I knew this").
 */
export function useProgress(year: Year) {
  const [known, setKnown] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const key = storageKey(year);
    let current = readKey(key);

    // One-time migration: the very first version stored Year 1 progress under
    // an unsuffixed key. Fold it into the Year 1 bucket, once.
    if (year === 1) {
      const legacy = readKey(LEGACY_KEY);
      if (Object.keys(legacy).length && !Object.keys(current).length) {
        current = { ...legacy, ...current };
        writeKey(key, current);
      }
    }

    setKnown(current);
    setHydrated(true);

    function onStorage(e: StorageEvent) {
      if (e.key === key) setKnown(readKey(key));
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [year]);

  const setDrugKnown = useCallback(
    (slug: string, value: boolean) => {
      setKnown((prev) => {
        const next = { ...prev, [slug]: value };
        writeKey(storageKey(year), next);
        return next;
      });
    },
    [year]
  );

  const toggleDrugKnown = useCallback(
    (slug: string) => {
      setKnown((prev) => {
        const next = { ...prev, [slug]: !prev[slug] };
        writeKey(storageKey(year), next);
        return next;
      });
    },
    [year]
  );

  const isKnown = useCallback((slug: string) => !!known[slug], [known]);

  return { known, hydrated, isKnown, setDrugKnown, toggleDrugKnown };
}
