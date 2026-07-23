'use client';

import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { useMemo, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
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
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#f7c948] sm:h-9 sm:w-9">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className={`${playfairDisplay.className} text-xs font-semibold leading-tight text-[#fdf6ec] sm:text-base`}>
          {title}
        </h3>
        <p className="text-[11px] leading-snug text-[#c9bcd9] sm:text-sm">{children}</p>
      </div>
    </div>
  );
}

function PillHeader({ tone, children }: { tone: 'purple' | 'tan'; children: React.ReactNode }) {
  const toneClass =
    tone === 'purple'
      ? 'border-white/15 bg-white/5 text-[#c4b5fd]'
      : 'border-[#f7c948]/30 bg-[#f7c948]/10 text-[#f7c948]';
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-[9px] font-semibold uppercase tracking-wide sm:px-4 sm:py-1.5 sm:text-[11px] ${toneClass}`}
    >
      <Blossom className="text-[9px] text-[#f9a8d4] opacity-70" />
      {children}
      <Blossom className="text-[9px] text-[#f9a8d4] opacity-70" />
    </span>
  );
}

function CompatAvatar({ id }: { id: SpiritId }) {
  const spirit = SNACK_SPIRITS[id];
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="h-9 w-9 rounded-xl border-2 border-white/15 bg-white/5 shadow-sm sm:h-14 sm:w-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={spirit.image} alt={spirit.name} className="h-full w-full object-contain" />
      </div>
      <span className="text-center text-[9px] font-medium leading-tight text-[#d4c4e8] sm:text-xs">
        {spirit.name}
      </span>
    </div>
  );
}

async function addImagePadding(
  dataUrl: string,
  padding: number,
  backgroundColor: string,
): Promise<string> {
  const img = new Image();
  img.src = dataUrl;
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = reject;
  });

  const canvas = document.createElement('canvas');
  canvas.width = img.width + padding * 2;
  canvas.height = img.height + padding * 2;
  const ctx = canvas.getContext('2d');
  if (!ctx) return dataUrl;

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, padding, padding);

  return canvas.toDataURL('image/png');
}

export default function ResultsPage() {
  const { weights } = useQuiz();
  const spirit = useMemo(() => getTopSnackSpirit(weights), [weights]);
  const hasCompletedQuiz = Object.keys(weights).length > 0;
  const [shareState, setShareState] = useState<'idle' | 'copied' | 'downloaded'>('idle');
  const shareCardRef = useRef<HTMLDivElement>(null);

  async function captureResultImage(): Promise<File | null> {
    if (!shareCardRef.current || !spirit) return null;
    const node = shareCardRef.current;

    // backdrop-filter isn't rasterized correctly by html-to-image, so it's
    // disabled inline just for the snapshot, then restored afterward.
    const blurredEls = Array.from(
      node.querySelectorAll<HTMLElement>('[class*="backdrop-blur"]'),
    );
    const previousFilters = blurredEls.map((el) => el.style.backdropFilter);
    blurredEls.forEach((el) => {
      el.style.setProperty('backdrop-filter', 'none', 'important');
      el.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
    });

    try {
      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#0f0618',
      });
      const paddedDataUrl = await addImagePadding(dataUrl, 48, '#0f0618');
      const blob = await (await fetch(paddedDataUrl)).blob();
      return new File([blob], `snacktopia-${spirit.id}.png`, { type: 'image/png' });
    } catch {
      return null;
    } finally {
      blurredEls.forEach((el, i) => {
        el.style.backdropFilter = previousFilters[i];
      });
    }
  }

  async function handleShare() {
    if (!spirit) return;
    const shareText = `My snack spirit is ${spirit.name}! ${spirit.tagline}`;
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const file = await captureResultImage();

    if (typeof navigator !== 'undefined' && navigator.share) {
      const canShareFile = !!file && navigator.canShare?.({ files: [file] });
      try {
        if (canShareFile && file) {
          await navigator.share({ title: 'Snacktopia', text: shareText, files: [file] });
        } else {
          await navigator.share({ title: 'Snacktopia', text: shareText, url });
        }
      } catch {
        // user cancelled share, nothing to do
      }
      return;
    }

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = file.name;
      link.click();
      URL.revokeObjectURL(objectUrl);
      setShareState('downloaded');
      setTimeout(() => setShareState('idle'), 2000);
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
      <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-[#0f0618] px-6 py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#3d1f6b30_0%,_transparent_60%)]"
        />
        <main className="relative z-10 flex max-w-md flex-col items-center text-center">
          <p className="mb-4 text-4xl" aria-hidden>
            🌀
          </p>
          <h1 className={`${playfairDisplay.className} mb-4 text-2xl font-semibold text-[#fdf6ec]`}>
            No Snack Spirit Yet
          </h1>
          <p className="mb-8 text-[#cdbfe0]">
            Complete your quest through Snacktopia to discover which snack
            matches your soul.
          </p>
          <Link
            href="/story"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f7c948] to-[#ff8a3d] px-6 py-3 text-sm font-bold text-[#2a1140] shadow-lg shadow-[#ff8a3d]/25 transition-all hover:scale-105"
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
    <div className="relative flex h-dvh flex-col overflow-hidden bg-[#0f0618] px-4 py-2 sm:px-6 sm:py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f7c94812_0%,_transparent_55%),radial-gradient(ellipse_at_bottom,_#7c3aed20_0%,_transparent_55%)]"
      />

      <main className="relative z-10 mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-2 sm:max-w-xl sm:gap-3">
        <div ref={shareCardRef} className="flex flex-col gap-2 sm:gap-3">
          {/* Header */}
          <div className="text-center">
            <p className="mb-0.5 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f7c948] sm:text-xs sm:tracking-[0.25em]">
              <Sparkle className="text-[#f7c948]" />
              Your Snack Spirit Is
              <Sparkle className="text-[#f7c948]" />
            </p>
            <h1
              className={`${playfairDisplay.className} text-xl font-bold leading-tight text-[#fdf6ec] sm:text-4xl`}
            >
              {spirit.name}
            </h1>
            <div className="my-1 flex justify-center sm:my-1.5">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-[10px] font-medium tracking-wide text-[#d8cce8] backdrop-blur-sm sm:px-4 sm:py-1 sm:text-sm">
                {traitLine}
              </span>
            </div>
            <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#cdbfe0] sm:text-base">
              <Blossom className="text-[#f9a8d4]" />
              {spirit.tagline}
              <Blossom className="text-[#f9a8d4]" />
            </p>
          </div>

          {/* Main card */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-3 sm:gap-6">
            <div className="flex flex-col items-center">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a0a2e]/70 px-3 py-2 shadow-lg shadow-black/30 backdrop-blur-sm sm:rounded-4xl sm:px-5 sm:py-3">
                <span
                  className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#f7c948]/50 bg-[radial-gradient(circle,_#fde68a_0%,_#f7c948_55%,_#ff8a3d_100%)] text-[11px] shadow-[0_0_12px_2px_rgba(247,201,72,0.35)] sm:right-2 sm:top-2 sm:h-6 sm:w-6 sm:text-sm"
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
              <p className="mt-1 max-w-28 text-center text-[9px] italic leading-snug text-[#a89bc0] sm:mt-1.5 sm:max-w-32 sm:text-xs">
                &ldquo;{spirit.quote}&rdquo;
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-2">
              <SectionRow icon={<HeartIcon />} title="Strengths">
                {spirit.strengths}
              </SectionRow>
              <hr className="hidden border-t border-dashed border-white/10 sm:block" />
              <SectionRow icon={<CloudIcon />} title="Quirks">
                {spirit.quirks}
              </SectionRow>
              <hr className="hidden border-t border-dashed border-white/10 sm:block" />
              <SectionRow icon={<StarburstIcon />} title="Why This Fit?">
                {spirit.why}
              </SectionRow>
            </div>
          </div>

          {/* Compatibility + shine box */}
          <div className="rounded-2xl border border-white/10 bg-[#1a0a2e]/60 px-3 py-2 shadow-lg shadow-black/20 backdrop-blur-sm sm:rounded-3xl sm:px-6 sm:py-3">
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:gap-x-4 sm:gap-y-3">
              <div className="flex flex-col items-center gap-1 border-r border-dashed border-white/10 pr-2 sm:gap-2 sm:pr-4">
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

              <div className="col-span-2 flex flex-col items-center gap-1 border-t border-dashed border-white/10 pt-1.5 sm:gap-1.5 sm:pt-2.5">
                <PillHeader tone="purple">You Shine When...</PillHeader>
                <ul className="w-full space-y-0.5 sm:space-y-1">
                  {spirit.shineWhen.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-1 text-[9px] leading-snug text-[#c9bcd9] sm:gap-1.5 sm:text-[13px]"
                    >
                      <Blossom className="mt-0.5 shrink-0 text-[#f9a8d4]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#f7c948] to-[#ff8a3d] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#2a1140] shadow-lg shadow-[#ff8a3d]/25 transition-all hover:scale-105 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            <UploadIcon />
            {shareState === 'copied'
              ? 'Copied!'
              : shareState === 'downloaded'
                ? 'Image Saved!'
                : 'Share Your Result'}
          </button>
          <Link
            href="/story"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#fdf6ec] backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/5 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Take the Quiz Again
          </Link>
        </div>
      </main>
    </div>
  );
}
