import Link from 'next/link';
import { BeginQuestButton } from '@/components/begin-quest-button';

export default function StoryPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-[#0f0618] px-6 py-16">
      {/* Portal glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7c3aed25_0%,_transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c084fc]/20 bg-[radial-gradient(circle,_#7c3aed15_0%,_transparent_70%)]"
      />

      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        <Link
          href="/"
          className="mb-10 self-start text-sm text-[#a78bfa] transition-colors hover:text-[#c4b5fd]"
        >
          ← Back
        </Link>

        <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#c084fc]/40 bg-[#7c3aed]/20 text-4xl shadow-lg shadow-[#7c3aed]/20">
          <span aria-hidden>🌀</span>
        </div>

        <h1 className="mb-8 text-center text-2xl font-semibold tracking-wide text-[#e9d5ff] sm:text-3xl">
          The Portal Opens…
        </h1>

        <div className="relative mb-12 rounded-2xl border border-[#c084fc]/20 bg-[#1a0a2e]/80 p-8 shadow-2xl shadow-[#7c3aed]/10 backdrop-blur-sm sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-px top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-[#c084fc] via-[#f7c948] to-[#ff6b35]"
          />
          <p className="text-base leading-[1.9] text-[#d4c4e8] sm:text-lg">
            You open your pantry and, to your amazement, a swirling portal
            bursts open, pulling you gently forward. Before you realize it,
            you&apos;re swept inside. You arrived in the magical land of
            Snacktopia, where every path is lined with enchanted treats and
            every choice shapes your destiny. Guided by the Grand Confectioner,
            you must journey across whimsical lands, and overcome delicious
            challenges to discover your true Snack Spirit. Each choice is a step
            in your adventure—choose boldly, for the flavor of your soul awaits!
          </p>
        </div>

        <BeginQuestButton />
        <p className="mt-4 text-sm text-[#6b5b7b]">
          Your first challenge awaits just ahead…
        </p>
      </main>
    </div>
  );
}
