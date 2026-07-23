'use client';

import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { useMemo, useState } from 'react';
import { useQuiz } from '@/lib/quiz-context';
import { getTopSnackSpirit } from '@/lib/quiz-utils';
import { SNACK_SPIRITS, type SpiritId } from '@/lib/constants';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
});

function Sparkle({ className }: { className?: string }) {
  return (
    <span aria-hidden className={className}>
      ✦
    </span>
  );
}

function Blossom({ className }: { className?: string }) {
  return (
    <span aria-hidden className={className}>
      ✿
    </span>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20s-7-4.35-9.5-8.5C.75 8 2.3 4.5 5.8 4.5c2 0 3.5 1.2 4.5 2.7C11.3 5.7 12.8 4.5 14.8 4.5c3.5 0 5.05 3.5 3.3 7C15.6 15.65 12 20 12 20z"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16 8.5a4.5 4.5 0 0 1-1 8.9v.1H7z"
      />
    </svg>
  );
}

function StarburstIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2c.7 4 2.3 6.7 6 7.5-3.7.8-5.3 3.5-6 7.5-.7-4-2.3-6.7-6-7.5 3.7-.8 5.3-3.5 6-7.5z" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4M7 9l5-5 5 5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

function SectionRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2 sm:gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#ddc5ec] bg-[#f4e9fb] text-[#7a4f9c] sm:h-9 sm:w-9">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className={`${playfairDisplay.className} text-xs font-semibold leading-tight text-[#3d2452] sm:text-base`}>
          {title}
        </h3>
        <p className="text-[11px] leading-snug text-[#6b5478] sm:text-sm">{children}</p>
      </div>
    </div>
  );
}

function PillHeader({ tone, children }: { tone: 'purple' | 'tan'; children: React.ReactNode }) {
  const toneClass =
    tone === 'purple'
      ? 'border-[#ddc5ec] bg-[#ece0f6] text-[#5b3a75]'
      : 'border-[#e6d1a0] bg-[#f3e3c4] text-[#8a6a35]';
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-[9px] font-semibold uppercase tracking-wide sm:px-4 sm:py-1.5 sm:text-[11px] ${toneClass}`}
    >
      <Blossom className="text-[9px] opacity-70" />
      {children}
      <Blossom className="text-[9px] opacity-70" />
    </span>
  );
}

function CompatAvatar({ id }: { id: SpiritId }) {
  const spirit = SNACK_SPIRITS[id];
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-9 w-9 rounded-xl border-2 border-[#ddc5ec] bg-[#f8ecf9] shadow-sm sm:h-14 sm:w-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={spirit.image} alt={spirit.name} className="h-full w-full object-contain" />
      </div>
      <span className="text-center text-[9px] font-medium leading-tight text-[#3d2452] sm:text-xs">
        {spirit.name}
      </span>
    </div>
  );
}

export default function ResultsPage() {
  const { weights } = useQuiz();
  const spirit = useMemo(() => getTopSnackSpirit(weights), [weights]);
  const hasCompletedQuiz = Object.keys(weights).length > 0;
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle');

  async function handleShare() {
    if (!spirit) return;
    const shareText = `My snack spirit is ${spirit.name}! ${spirit.tagline}`;
    const url = typeof window !== 'undefined' ? window.location.href : '';

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: 'Snacktopia', text: shareText, url });
      } catch {
        // user cancelled share, nothing to do
      }
      return;
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(`${shareText} ${url}`);
      setShareState('copied');
      setTimeout(() => setShareState('idle'), 2000);
    }
  }

  if (!hasCompletedQuiz) {
    return (
      <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#fdf5e9] to-[#f6e8d6] px-6 py-16">
        <main className="relative z-10 flex max-w-md flex-col items-center text-center">
          <p className="mb-4 text-4xl" aria-hidden>
            🌀
          </p>
          <h1 className={`${playfairDisplay.className} mb-4 text-2xl font-semibold text-[#3d2452]`}>
            No Snack Spirit Yet
          </h1>
          <p className="mb-8 text-[#6b5478]">
            Complete your quest through Snacktopia to discover which snack
            matches your soul.
          </p>
          <Link
            href="/story"
            className="inline-flex items-center gap-2 rounded-full bg-[#3d2452] px-6 py-3 text-sm font-semibold text-[#fdf3df] transition-all hover:scale-105"
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

  const traitLine = spirit.traits
    .split(',')
    .map((trait) => trait.trim())
    .join('  •  ');

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-gradient-to-b from-[#fdf5e9] to-[#f6e8d6] px-4 py-2 sm:px-6 sm:py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f7c94812_0%,_transparent_55%),radial-gradient(ellipse_at_bottom,_#c084fc12_0%,_transparent_55%)]"
      />

      <main className="relative z-10 mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-2 sm:max-w-xl sm:gap-3">
        {/* Header */}
        <div className="text-center">
          <p className="mb-0.5 flex items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8a6a9c] sm:text-xs sm:tracking-[0.25em]">
            <Sparkle className="text-[#c9a86a]" />
            Your Snack Spirit Is
            <Sparkle className="text-[#c9a86a]" />
          </p>
          <h1
            className={`${playfairDisplay.className} text-xl font-bold leading-tight text-[#3d2452] sm:text-4xl`}
          >
            {spirit.name}
          </h1>
          <div className="my-1 flex justify-center sm:my-1.5">
            <span className="rounded-full border border-[#ddc5ec] bg-[#ece0f6] px-3 py-0.5 text-[10px] font-medium tracking-wide text-[#5b3a75] sm:px-4 sm:py-1 sm:text-sm">
              {traitLine}
            </span>
          </div>
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#5b4066] sm:text-base">
            <Blossom className="text-[#e39fc2]" />
            {spirit.tagline}
            <Blossom className="text-[#e39fc2]" />
          </p>
        </div>

        {/* Main card */}
        <div className="grid grid-cols-[auto_1fr] items-center gap-3 sm:gap-6">
          <div className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-3xl border border-[#ddc5ec] bg-gradient-to-b from-[#efe1f7] to-[#f8ecf9] px-3 py-2 shadow-inner sm:rounded-4xl sm:px-5 sm:py-3">
              <span
                className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#c9a86a]/60 bg-[#fdf3df] text-[11px] shadow-sm sm:right-2 sm:top-2 sm:h-6 sm:w-6 sm:text-sm"
                aria-hidden
              >
                {spirit.emoji}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={spirit.image}
                alt={spirit.name}
                className="relative z-10 mx-auto h-16 w-16 object-contain drop-shadow-xl sm:h-24 sm:w-24"
              />
            </div>
            <p className="mt-1 max-w-28 text-center text-[9px] italic leading-snug text-[#6b5478] sm:mt-1.5 sm:max-w-32 sm:text-xs">
              &ldquo;{spirit.quote}&rdquo;
            </p>
          </div>

          <div className="flex flex-col gap-1 sm:gap-2">
            <SectionRow icon={<HeartIcon />} title="Strengths">
              {spirit.strengths}
            </SectionRow>
            <hr className="border-t border-dashed border-[#e2cdee]" />
            <SectionRow icon={<CloudIcon />} title="Quirks">
              {spirit.quirks}
            </SectionRow>
            <hr className="border-t border-dashed border-[#e2cdee]" />
            <SectionRow icon={<StarburstIcon />} title="Why This Fit?">
              {spirit.why}
            </SectionRow>
          </div>
        </div>

        {/* Compatibility + shine box */}
        <div className="rounded-2xl border border-[#e7d5ef] bg-[#fffaf1]/80 px-3 py-2 shadow-sm sm:rounded-3xl sm:px-6 sm:py-3">
          <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-3">
            <div className="flex flex-col items-center gap-1 border-r border-dashed border-[#e2cdee] pr-2 sm:gap-2 sm:pr-4">
              <PillHeader tone="purple">Best With</PillHeader>
              <div className="flex items-start gap-2 sm:gap-3">
                {spirit.bestWith.map((id) => (
                  <CompatAvatar key={id} id={id} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 pl-2 sm:gap-2 sm:pl-4">
              <PillHeader tone="tan">Not So Good With</PillHeader>
              <div className="flex items-start gap-2 sm:gap-3">
                {spirit.notSoGoodWith.map((id) => (
                  <CompatAvatar key={id} id={id} />
                ))}
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-center gap-1 border-t border-dashed border-[#e2cdee] pt-1.5 sm:gap-1.5 sm:pt-2.5">
              <PillHeader tone="purple">You Shine When...</PillHeader>
              <ul className="w-full space-y-0.5 sm:space-y-1">
                {spirit.shineWhen.slice(0, 3).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-1 text-[9px] leading-snug text-[#5b4066] sm:gap-1.5 sm:text-[13px]"
                  >
                    <Blossom className="mt-0.5 shrink-0 text-[#e39fc2]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#3d2452] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#fdf3df] shadow-lg shadow-[#3d2452]/20 transition-transform hover:scale-105 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            <UploadIcon />
            {shareState === 'copied' ? 'Copied!' : 'Share Your Result'}
          </button>
          <Link
            href="/story"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#3d2452]/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#3d2452] transition-colors hover:bg-[#3d2452]/5 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Take the Quiz Again
          </Link>
        </div>
      </main>
    </div>
  );
}
