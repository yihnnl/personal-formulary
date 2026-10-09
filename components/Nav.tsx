"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/formulary", label: "Formulary" },
  { href: "/topics", label: "Topics" },
  { href: "/test-yourself", label: "Test Yourself" },
  { href: "/favorites", label: "Favorites" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-warmbg/95 backdrop-blur supports-[backdrop-filter]:bg-warmbg/80 sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Stacks into two rows on phones, single row from sm up */}
        <div className="flex flex-col sm:h-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex h-12 items-center sm:h-auto">
            <Link
              href="/"
              className="text-[15px] font-semibold tracking-tight text-ink focus-ring rounded"
            >
              Personal Formulary
            </Link>
          </div>
          <nav className="-mx-1 flex items-center gap-1 overflow-x-auto no-scrollbar px-1 pb-2.5 sm:pb-0">
            {links.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors focus-ring ${
                    active ? "bg-ink text-warmbg" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
