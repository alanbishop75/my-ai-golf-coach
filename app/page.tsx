import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 px-5 py-8 md:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-140px)] w-full max-w-3xl flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Golf AI Coach</p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Personalised Coaching Report</h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Get a fast diagnosis of your current ball-flight pattern and preview how a premium personalised report is structured.
          </p>

          <div className="mt-6">
            <Link
              href="/assessment"
              className="inline-flex rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Start Assessment
            </Link>
          </div>
        </div>

        <div className="mt-auto border-t border-gray-200 pt-4">
          <Link href="/example-report" className="text-sm font-semibold text-green-700 hover:text-green-800">
            View Example Report
          </Link>
        </div>
      </div>
    </main>
  );
}