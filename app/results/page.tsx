"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useQuiz } from "@/lib/quiz-context";
import { getSpiritName, getTopSnackSpirit } from "@/lib/quiz-utils";

function TraitPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-[#f7c948]/30 bg-[#f7c948]/10 px-3 py-1 text-xs font-medium tracking-wide text-[#f7c948]">
      {label.trim()}
    </span>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-[#c084fc]/15 bg-[#0f0618]/60 p-5">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-[#d4c4e8]">{children}</div>
    </div>
  );
}

function SpiritChip({ name }: { name: string }) {
  return (
    <span className="rounded-lg border border-[#c084fc]/20 bg-[#1a0a2e] px-3 py-1.5 text-sm text-[#e9d5ff]">
      {name}
    </span>
  );
}

export default function ResultsPage() {
  const { weights } = useQuiz();
  const spirit = useMemo(() => getTopSnackSpirit(weights), [weights]);
  const hasCompletedQuiz = Object.keys(weights).length > 0;

  if (!hasCompletedQuiz) {
    return (
      <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-[#1a0a2e] px-6 py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#7c3aed20_0%,transparent_60%)]"
        />
        <main className="relative z-10 flex max-w-md flex-col items-center text-center">
          <p className="mb-4 text-4xl" aria-hidden>
            🌀
          </p>
          <h1 className="mb-4 text-2xl font-semibold text-[#e9d5ff]">
            No Snack Spirit Yet
          </h1>
          <p className="mb-8 text-[#d4c4e8]">
            Complete your quest through Snacktopia to discover which snack
            matches your soul.
          </p>
          <Link
            href="/story"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#f7c948] px-6 py-3 text-sm font-semibold text-[#1a0a2e] transition-all hover:scale-105"
          >
            Start Your Quest
          </Link>
        </main>
      </div>
    );
  }

  if (!spirit) {
    return null;
  }

  const traits = spirit.traits.split(",").map((trait) => trait.trim());

  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-[#0f0618] px-6 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#f7c94818_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,#7c3aed20_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,#ff6b3515_0%,transparent_50%)]"
      />

      <main className="relative z-10 mx-auto flex w-full max-w-2xl flex-col">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-[#a78bfa]">
          Your Snack Spirit Revealed
        </p>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#f7c948]/40 bg-[#f7c948]/10 text-5xl shadow-lg shadow-[#f7c948]/10">
            <span aria-hidden>{spirit.emoji}</span>
          </div>
          <h1 className="mb-3 bg-gradient-to-br from-[#fff5e6] via-[#f7c948] to-[#ff6b35] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            {spirit.name}
          </h1>
          <p className="mb-4 text-lg text-[#c4b5fd]">{spirit.tagline}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {traits.map((trait) => (
              <TraitPill key={trait} label={trait} />
            ))}
          </div>
        </div>

        <div className="relative mb-8 rounded-2xl border border-[#c084fc]/20 bg-[#1a0a2e]/80 p-8 shadow-2xl shadow-[#7c3aed]/10 backdrop-blur-sm sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-px top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-[#c084fc] via-[#f7c948] to-[#ff6b35]"
          />
          <p className="text-base leading-[1.9] text-[#d4c4e8] sm:text-lg">
            {spirit.description}
          </p>
        </div>

        <blockquote className="mb-8 rounded-2xl border border-[#f7c948]/20 bg-[#f7c948]/5 px-6 py-5 text-center">
          <p className="text-lg italic leading-relaxed text-[#fff5e6] sm:text-xl">
            &ldquo;{spirit.quote}&rdquo;
          </p>
        </blockquote>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <InfoCard title="Strengths">{spirit.strengths}</InfoCard>
          <InfoCard title="Quirks">{spirit.quirks}</InfoCard>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <InfoCard title="Best With">
            <div className="flex flex-wrap gap-2">
              {spirit.bestWith.map((spiritId) => (
                <SpiritChip key={spiritId} name={getSpiritName(spiritId)} />
              ))}
            </div>
          </InfoCard>
          <InfoCard title="Not So Good With">
            <div className="flex flex-wrap gap-2">
              {spirit.notSoGoodWith.map((spiritId) => (
                <SpiritChip key={spiritId} name={getSpiritName(spiritId)} />
              ))}
            </div>
          </InfoCard>
        </div>

        <InfoCard title="Why This Spirit?">
          <p>{spirit.why}</p>
        </InfoCard>

        <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/story"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#c084fc] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#7c3aed]/25 transition-all hover:scale-105 hover:from-[#c084fc] hover:to-[#7c3aed] sm:flex-1"
          >
            Take the Quest Again
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c084fc]/30 px-8 py-3.5 text-sm font-semibold text-[#a78bfa] transition-colors hover:border-[#c084fc]/50 hover:text-[#c4b5fd] sm:flex-1"
          >
            Start Over
          </Link>
        </div>
      </main>
    </div>
  );
}
