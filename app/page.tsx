import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm md:p-10">
          <h1 className="mb-4 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
            Stop guessing. Start fixing.
          </h1>

          <div className="space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
            <p>
              If you&apos;ve found this page, you&apos;re probably watching YouTube golf tips, hoping one of them finally clicks.
            </p>

            <p>
              Problem is, most of them aren&apos;t built for your swing. So you try something new, it sort of works, then something else breaks.
            </p>

            <p className="font-bold text-green-600">That&apos;s where MyAIGolfCoach is different.</p>

            <p>
              We take what actually works in golf and tailor it to you. No generic advice. No rabbit holes.
            </p>

            <p>
              Just a clear plan: what&apos;s wrong, how to fix it, and how to practise it. We&apos;ll even layer in swing thoughts, TrackMan numbers,
              training aids, and equipment checks if they&apos;re part of the problem.
            </p>
          </div>

          <Link
            href="/assessment"
            className="mx-auto mt-7 block w-fit rounded-xl bg-green-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-700 md:text-base"
          >
            Let&apos;s Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}