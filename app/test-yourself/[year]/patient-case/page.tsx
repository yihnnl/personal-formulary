import { notFound } from "next/navigation";
import { parseYearParam, YEARS, toYearParam } from "@/lib/drugs";
import YearPatientCaseDrill from "@/components/YearPatientCaseDrill";

export function generateStaticParams() {
  return YEARS.map((y) => ({ year: toYearParam(y) }));
}

export default function PatientCasePage({
  params,
}: {
  params: { year: string };
}) {
  const year = parseYearParam(params.year);
  if (!year) notFound();
  return <YearPatientCaseDrill year={year} />;
}
