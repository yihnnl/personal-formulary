import { notFound } from "next/navigation";
import { getTopic, allTopicSlugs } from "@/lib/topics";
import TopicView from "@/components/TopicView";

export function generateStaticParams() {
  return allTopicSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopic(params.slug);
  if (!topic) notFound();
  return <TopicView topic={topic} />;
}
