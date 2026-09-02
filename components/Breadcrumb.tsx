import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Minimal breadcrumb, e.g.  Test Yourself / Year 2 / Random Drug
 * Items with an href are links; the last item is the current page.
 */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm font-medium">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="-my-1 py-1 hover:text-ink transition-colors focus-ring rounded"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-ink" : undefined}>{item.label}</span>
              )}
              {!last && (
                <span className="text-line select-none" aria-hidden>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
