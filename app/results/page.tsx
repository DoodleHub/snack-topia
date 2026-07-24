'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { useQuiz } from '@/lib/quiz-context';
import { getTopSnackSpirit, hasCompletedQuiz as checkHasCompletedQuiz } from '@/lib/quiz-utils';
import { SpiritDetailCard } from '@/components/spirit-detail-card';
import { Footer } from '@/components/footer';
import { Nav } from '@/components/nav';

const APP_URL = 'https://snacktopia-quiz.vercel.app/';


function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4M7 9l5-5 5 5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}


async function addImagePadding(
  dataUrl: string,
  padding: number,
  backgroundColor: string,
): Promise<string> {
  const img = new window.Image();
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
  const router = useRouter();
  const { weights } = useQuiz();
  const spirit = useMemo(() => getTopSnackSpirit(weights), [weights]);
  const hasCompletedQuiz = checkHasCompletedQuiz(weights);
  const [shareState, setShareState] = useState<'idle' | 'copied' | 'downloaded'>('idle');
  const shareCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasCompletedQuiz) {
      router.replace('/');
    }
  }, [hasCompletedQuiz, router]);

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
    const shareText = `My snack spirit is ${spirit.name}! ${spirit.tagline} See what your snack spirit is:`;
    const url = APP_URL;
    const file = await captureResultImage();

    if (typeof navigator !== 'undefined' && navigator.share) {
      const canShareFile = !!file && navigator.canShare?.({ files: [file] });
      try {
        if (canShareFile && file) {
          // url isn't included as a separate field here because share sheets
          // commonly drop it when files are attached, so it's folded into text.
          await navigator.share({ title: 'Snacktopia', text: `${shareText} ${url}`, files: [file] });
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

  if (!hasCompletedQuiz || !spirit) {
    return <div className="min-h-full bg-[#0f0618]" />;
  }

  return (
    <div className="relative flex min-h-dvh flex-col bg-[#0f0618] py-4 sm:py-4">
      <div aria-hidden className="fixed inset-0 overflow-hidden">
        <Image
          src="/images/questions/quiz-background.PNG"
          alt=""
          fill
          priority
          className="object-cover brightness-[0.7] saturate-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#1a0a2e]/50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(0,0,0,0.4)_100%)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f7c94812_0%,_transparent_55%),radial-gradient(ellipse_at_bottom,_#7c3aed20_0%,_transparent_55%)]"
      />

      <Nav className="max-w-sm sm:max-w-xl" />

      <main className="relative z-10 mx-auto flex w-full max-w-sm flex-col gap-1.5 px-4 sm:max-w-xl sm:flex-1 sm:justify-center sm:gap-3 sm:px-6">
        <div className="rounded-[28px] border border-white/10 bg-[#1a0a2e]/60 p-2 shadow-2xl shadow-black/40 backdrop-blur-md sm:rounded-4xl sm:p-5">
          <SpiritDetailCard spirit={spirit} eyebrow="Your Snack Spirit Is" innerRef={shareCardRef} />
        </div>

        {/* Actions */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3">
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
            href="/spirits"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#fdf6ec] backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/5 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            See All Spirits
          </Link>
          <a
            href="https://buymeacoffee.com/oddlymade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#fdf6ec] backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/5 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Support Us 🧋
          </a>
        </div>

        {/* Support us */}
        <p className="mx-auto max-w-xs text-center text-[9px] leading-snug text-[#a89bc0] sm:max-w-md sm:text-[11px]">
          Enjoyed your Snack Spirit result? This quiz was lovingly made as a playful little side
          project. If it made you smile, you can{' '}
          <a
            href="https://buymeacoffee.com/oddlymade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6ab0f3] underline underline-offset-2 hover:text-[#8cc4f7]"
          >
            support future cozy creations with a cup of tea.
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
