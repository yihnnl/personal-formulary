"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "personal-formulary:favorite-drugs";

function read(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function write(data: Record<string, boolean>) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // localStorage unavailable (e.g. private browsing quota) - fail silently
  }
}

/**
 * Tracks which drug slugs the user has starred as a favorite. Unlike
 * useProgress, this is a single bucket shared across all years — drug slugs
 * are unique across the whole formulary, and "favorites" is meant to be one
 * personal collection, not split per year.
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setFavorites(read());
    setHydrated(true);

    function onStorage(e: StorageEvent) {
      if (e.key === KEY) setFavorites(read());
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((prev) => {
      const next = { ...prev, [slug]: !prev[slug] };
      write(next);
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (slug: string) => !!favorites[slug],
    [favorites]
  );

  return { favorites, hydrated, isFavorite, toggleFavorite };
}
