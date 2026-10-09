import { notFound } from "next/navigation";
import { parseYearParam, YEARS, toYearParam } from "@/lib/drugs";
import YearRandomDrill from "@/components/YearRandomDrill";

export function generateStaticParams() {
  return YEARS.map((y) => ({ year: toYearParam(y) }));
}

export default function RandomDrugPage({
  params,
}: {
  params: { year: string };
}) {
  const year = parseYearParam(params.year);
  if (!year) notFound();
  return <YearRandomDrill year={year} />;
}
