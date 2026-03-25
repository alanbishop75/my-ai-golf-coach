import ExampleReportCard from "../components/ExampleReportCard";

export default function ExampleReportPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-5 py-8 md:py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Direct Example Report</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Premium Driver Diagnosis Preview</h1>
          <p className="mt-2 text-sm text-gray-600 md:text-base">Use this page to jump straight into the report sample without taking the assessment flow.</p>
        </div>

        <ExampleReportCard showIntro={false} />
      </div>
    </main>
  );
}
