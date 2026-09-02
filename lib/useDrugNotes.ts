"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Year } from "@/lib/types";

/**
 * Per-drug personal revision notes, stored locally in the browser.
 *
 * Each note lives under its own key, namespaced by academic year AND drug slug,
 * so notes never collide between drugs or years and are completely separate from
 * the "known drugs" progress buckets used by {@link useProgress}. Nothing is
 * ever sent off the device.
 *
 *   personal-formulary:notes:year-2:amitriptyline
 */
const KEY_PREFIX = "personal-formulary:notes";

function noteKey(year: Year, slug: string) {
  return `${KEY_PREFIX}:year-${year}:${slug}`;
}

function readNote(key: string): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
}

export type SaveStatus = "idle" | "saving" | "saved";

export function useDrugNotes(year: Year, slug: string) {
  const [value, setValue] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const [status, setStatus] = useState<SaveStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load the stored note once, and keep in sync if another tab edits it.
  useEffect(() => {
    const key = noteKey(year, slug);
    setValue(readNote(key));
    setHydrated(true);
    setStatus("idle");

    function onStorage(e: StorageEvent) {
      if (e.key === key) setValue(readNote(key));
    }
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [year, slug]);

  const onChange = useCallback(
    (next: string) => {
      setValue(next);
      setStatus("saving");
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        try {
          const key = noteKey(year, slug);
          if (next.trim()) {
            window.localStorage.setItem(key, next);
          } else {
            window.localStorage.removeItem(key);
          }
          setStatus("saved");
        } catch {
          // storage unavailable (private browsing / quota) — fail quietly
          setStatus("idle");
        }
      }, 500);
    },
    [year, slug]
  );

  return { value, onChange, hydrated, status };
}
