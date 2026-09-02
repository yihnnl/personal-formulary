import { Suspense } from "react";
import { notFound } from "next/navigation";
import { parseYearParam, YEARS, toYearParam } from "@/lib/drugs";
import FormularyList from "@/components/FormularyList";

export function generateStaticParams() {
  return YEARS.map((y) => ({ year: toYearParam(y) }));
}

export default function FormularyYearPage({
  params,
}: {
  params: { year: string };
}) {
  const year = parseYearParam(params.year);
  if (!year) notFound();
  return (
    <Suspense>
      <FormularyList year={year} />
    </Suspense>
  );
}
