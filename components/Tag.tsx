import Link from "next/link";

const BASE =
  "inline-flex items-center px-2.5 py-1 rounded-full bg-champagne-light border border-champagne text-[13px] text-ink/80 font-medium";

/**
 * Champagne tag pill. Static by default; pass `href` to make it a clickable
 * link to a topic page (keeps the same visual style, adds a hover cue).
 */
export default function Tag({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className={`${BASE} hover:border-olive/50 hover:text-ink transition-colors focus-ring`}
      >
        {children}
      </Link>
    );
  }
  return <span className={BASE}>{children}</span>;
}
