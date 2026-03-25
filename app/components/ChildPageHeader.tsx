"use client";

import Link from "next/link";
import GolfAILogo from "./GolfAILogo";

export default function ChildPageHeader() {
  return (
    <header className="w-full border-b border-gray-100 bg-white px-4 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Go to homepage">
          <GolfAILogo />
        </Link>

        <nav className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Link href="/assessment" className="rounded-full px-3 py-1.5 hover:bg-gray-100">
            Assessment
          </Link>
          <Link href="/example-report" className="rounded-full px-3 py-1.5 hover:bg-gray-100">
            Example Report
          </Link>
        </nav>
      </div>
    </header>
  );
}
