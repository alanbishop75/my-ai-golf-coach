"use client";

import Link from "next/link";
import GolfAILogo from "./GolfAILogo";

export default function ChildPageHeader() {
  return (
    <header className="w-full border-b border-gray-100 bg-white px-4 py-3" data-header-version="centered-home-only-v2">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="flex justify-center" aria-label="Go to homepage">
          <GolfAILogo />
        </Link>
      </div>
    </header>
  );
}
