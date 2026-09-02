import { notFound } from "next/navigation";
import { parseYearParam, getDrugsForYear, YEARS, toYearParam } from "@/lib/drugs";
import DrugDetail from "@/components/DrugDetail";

export function generateStaticParams() {
  return YEARS.flatMap((y) =>
    getDrugsForYear(y).map((d) => ({ year: toYearParam(y), drug: d.slug }))
  );
}

export default function DrugDetailPage({
  params,
}: {
  params: { year: string; drug: string };
}) {
  const year = parseYearParam(params.year);
  if (!year) notFound();
  return <DrugDetail year={year} slug={params.drug} />;
}
