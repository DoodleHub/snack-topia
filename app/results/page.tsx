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

function Lantern({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 60 110" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd9a0" />
          <stop offset="100%" stopColor="#f0965a" />
        </linearGradient>
      </defs>
      <line x1="30" y1="0" x2="30" y2="14" stroke="#c9a86a" strokeWidth="1.5" />
      <rect x="21" y="12" width="18" height="6" rx="2" fill="#c9a86a" />
      <ellipse
        cx="30"
        cy="46"
        rx="23"
        ry="30"
        fill={`url(#${id}-body)`}
        stroke="#d97b3f"
        strokeWidth="1.5"
      />
      <path
        d="M11 30q19 -9 38 0M9 46h42M11 62q19 9 38 0"
        stroke="#d97b3f"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <rect x="21" y="75" width="18" height="6" rx="2" fill="#c9a86a" />
      <line x1="30" y1="81" x2="30" y2="96" stroke="#c9a86a" strokeWidth="1.5" />
      <path d="M24 96h12l-3 12h-6z" fill="#d97b3f" />
    </svg>
  );
}

function CherryBranch({ className }: { className?: string }) {
  const clusters = [
    { cx: 78, cy: 14, r: 8 },
    { cx: 54, cy: 8, r: 6 },
    { cx: 30, cy: 22, r: 7 },
    { cx: 12, cy: 10, r: 5 },
  ];
  return (
    <svg viewBox="0 0 90 40" className={className} aria-hidden>
      <path
        d="M2 38C20 30 40 14 88 2"
        stroke="#8a6a4a"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      {clusters.map((c, i) => (
        <g key={i}>
          {[0, 72, 144, 216, 288].map((deg) => (
            <circle
              key={deg}
              cx={c.cx + c.r * 0.55 * Math.cos((deg * Math.PI) / 180)}
              cy={c.cy + c.r * 0.55 * Math.sin((deg * Math.PI) / 180)}
              r={c.r * 0.55}
              fill="#f9a8d4"
              fillOpacity={0.85}
            />
          ))}
          <circle cx={c.cx} cy={c.cy} r={c.r * 0.28} fill="#fde68a" />
        </g>
      ))}
    </svg>
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
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ddc5ec] bg-[#f4e9fb] text-[#7a4f9c]">
        {icon}
      </div>
      <div>
        <h3 className={`${playfairDisplay.className} mb-1 text-lg font-semibold text-[#3d2452]`}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#6b5478] sm:text-base">{children}</p>
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
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide ${toneClass}`}
    >
      <Blossom className="text-[10px] opacity-70" />
      {children}
      <Blossom className="text-[10px] opacity-70" />
    </span>
  );
}

function CompatAvatar({ id }: { id: SpiritId }) {
  const spirit = SNACK_SPIRITS[id];
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[#ddc5ec] bg-[#f8ecf9] shadow-sm sm:h-20 sm:w-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={spirit.image} alt={spirit.name} className="h-full w-full object-cover" />
      </div>
      <span className="text-center text-xs font-medium text-[#3d2452] sm:text-sm">
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
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-gradient-to-b from-[#fdf5e9] to-[#f6e8d6] px-6 py-14 sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f7c94812_0%,_transparent_55%),radial-gradient(ellipse_at_bottom,_#c084fc12_0%,_transparent_55%)]"
      />

      <Lantern
        id="lantern-left"
        className="pointer-events-none absolute -left-1 top-0 h-28 w-16 opacity-90 sm:left-6 sm:h-36 sm:w-20"
      />
      <Lantern
        id="lantern-right"
        className="pointer-events-none absolute -right-1 top-0 h-28 w-16 opacity-90 sm:right-6 sm:h-36 sm:w-20"
      />
      <CherryBranch className="pointer-events-none absolute right-2 top-2 h-16 w-28 opacity-90 sm:right-10 sm:h-24 sm:w-40" />

      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#8a6a9c]">
            <Sparkle className="text-[#c9a86a]" />
            <Sparkle className="text-[#3d2452]" />
            Your Snack Spirit Is
            <Sparkle className="text-[#3d2452]" />
            <Sparkle className="text-[#c9a86a]" />
          </p>
          <h1
            className={`${playfairDisplay.className} mb-4 text-4xl font-bold text-[#3d2452] sm:text-6xl`}
          >
            {spirit.name}
          </h1>
          <div className="mb-5 flex justify-center">
            <span className="rounded-full border border-[#ddc5ec] bg-[#ece0f6] px-5 py-2 text-sm font-medium tracking-wide text-[#5b3a75] sm:text-base">
              {traitLine}
            </span>
          </div>
          <p className="flex items-center justify-center gap-2 text-base text-[#5b4066] sm:text-lg">
            <Blossom className="text-[#e39fc2]" />
            {spirit.tagline}
            <Blossom className="text-[#e39fc2]" />
          </p>
        </div>

        {/* Main card */}
        <div className="mb-16 grid gap-14 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] sm:items-center sm:gap-10">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[3rem] rounded-t-[7rem] border border-[#ddc5ec] bg-gradient-to-b from-[#efe1f7] to-[#f8ecf9] px-8 pb-10 pt-12 shadow-inner">
              <Sparkle className="absolute left-6 top-8 text-sm text-[#c9a86a]/70" />
              <Sparkle className="absolute right-8 top-14 text-xs text-[#7a4f9c]/60" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={spirit.image}
                alt={spirit.name}
                className="relative z-10 mx-auto h-44 w-44 object-contain drop-shadow-xl sm:h-52 sm:w-52"
              />
            </div>

            {/* Hanging emoji tag */}
            <div className="absolute -left-3 top-8 z-20 flex flex-col items-center sm:-left-5">
              <span className="h-3 w-px bg-[#8a6a4a]/60" />
              <div className="flex h-14 w-11 flex-col items-center justify-center gap-1 rounded-md border border-[#c9a86a]/60 bg-[#fdf3df] shadow-md">
                <span className="text-xl" aria-hidden>
                  {spirit.emoji}
                </span>
                <Blossom className="text-[10px] text-[#e39fc2]" />
              </div>
            </div>

            {/* Quote ribbon */}
            <div className="absolute inset-x-6 bottom-0 z-20 flex translate-y-1/2 justify-center px-2">
              <div className="rounded-full bg-[#3d2452] px-6 py-3 text-center shadow-lg shadow-[#3d2452]/25">
                <p className="text-sm italic leading-snug text-[#fdf3df] sm:text-base">
                  &ldquo;{spirit.quote}&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
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
        <div className="rounded-3xl border border-[#e7d5ef] bg-[#fffaf1]/80 px-6 pb-8 pt-10 shadow-sm sm:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            <div className="flex flex-col items-center gap-5 sm:border-r sm:border-dashed sm:border-[#e2cdee] sm:pr-6">
              <PillHeader tone="purple">Best With</PillHeader>
              <div className="flex items-start gap-6">
                {spirit.bestWith.map((id) => (
                  <CompatAvatar key={id} id={id} />
                ))}
              </div>
              {spirit.bestWith.length > 1 && (
                <span aria-hidden className="text-[#e39fc2]">
                  ♥
                </span>
              )}
            </div>

            <div className="flex flex-col items-center gap-5 sm:border-r sm:border-dashed sm:border-[#e2cdee] sm:px-6">
              <PillHeader tone="tan">Not So Good With</PillHeader>
              <div className="flex items-start gap-6">
                {spirit.notSoGoodWith.map((id) => (
                  <CompatAvatar key={id} id={id} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:items-start sm:pl-6">
              <PillHeader tone="purple">You Shine When...</PillHeader>
              <ul className="w-full space-y-3">
                {spirit.shineWhen.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#5b4066] sm:text-[15px]"
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
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3d2452] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#fdf3df] shadow-lg shadow-[#3d2452]/20 transition-transform hover:scale-105"
          >
            <UploadIcon />
            {shareState === 'copied' ? 'Copied!' : 'Share Your Result'}
          </button>
          <Link
            href="/story"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3d2452]/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#3d2452] transition-colors hover:bg-[#3d2452]/5"
          >
            Take the Quiz Again
          </Link>
        </div>

        {/* Footer flourish */}
        <div className="mt-14 flex items-center justify-center gap-4 text-[#c9a86a]">
          <span className="h-px w-16 bg-[#e2cdee]" />
          <Blossom className="text-[#e39fc2]" />
          <Lantern id="lantern-footer" className="h-8 w-5" />
          <Blossom className="text-[#e39fc2]" />
          <span className="h-px w-16 bg-[#e2cdee]" />
        </div>
      </main>
    </div>
  );
}
