import Link from "next/link";
import { browseGroups, unauthoredTags, slugifyTag, topicDrugCount } from "@/lib/topics";

export const metadata = {
  title: "Topics · Personal Formulary",
};

export default function TopicsPage() {
  const groups = browseGroups();
  const others = unauthoredTags();

  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <h1 className="text-2xl font-semibold tracking-tight text-ink">Topics</h1>
      <p className="mt-2 text-[15px] text-muted">
        Short explanations of the tags used across the formulary. Open a topic to
        read it and see its matching drugs grouped by year.
      </p>

      <div className="mt-10 space-y-10">
        {groups.map((group) => (
          <section key={group.type}>
            <p className="text-[13px] font-medium tracking-wide text-muted uppercase">
              {group.heading}
            </p>
            {/* one column on phones, two from sm up */}
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {group.topics.map((topic) => (
                <li key={topic.slug}>
                  <Link
                    href={`/topics/${topic.slug}`}
                    className="flex h-full items-center justify-between gap-3 rounded-card border border-line bg-surface px-4 py-3.5 focus-ring hover:border-olive/50 hover:bg-champagne-light/40 transition-colors"
                  >
                    <span className="text-[15px] font-medium text-ink break-words min-w-0">
                      {topic.name}
                    </span>
                    <span className="shrink-0 text-[13px] text-muted tabular-nums">
                      {topicDrugCount(topic)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {others.length > 0 && (
          <section>
            <p className="text-[13px] font-medium tracking-wide text-muted uppercase">
              Other tags
            </p>
            <p className="mt-1.5 text-[13px] text-muted">
              More specific descriptors — each still opens a page listing its
              formulary drugs.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
              {others.map((tag) => (
                <Link
                  key={tag}
                  href={`/topics/${slugifyTag(tag)}`}
                  className="text-[14px] text-ink/70 hover:text-ink hover:underline underline-offset-4 focus-ring rounded"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
