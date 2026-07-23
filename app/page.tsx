import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { HOME_PAGE_CONTENT } from '@/lib/constants';
import type { CSSProperties } from 'react';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
});

function CherryBlossom() {
  return (
    <svg viewBox="0 0 20 20" className="h-full w-full">
      <circle cx="10" cy="6" r="4.2" fill="#f9a8d4" fillOpacity={0.9} />
      <circle cx="13.8" cy="8.76" r="4.2" fill="#f9a8d4" fillOpacity={0.9} />
      <circle cx="12.35" cy="13.24" r="4.2" fill="#f9a8d4" fillOpacity={0.9} />
      <circle cx="7.65" cy="13.24" r="4.2" fill="#f9a8d4" fillOpacity={0.9} />
      <circle cx="6.2" cy="8.76" r="4.2" fill="#f9a8d4" fillOpacity={0.9} />
      <circle cx="10" cy="10" r="2" fill="#fde68a" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-[#0b0714] px-6 py-6 sm:py-16">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#3d1f6b30_0%,_transparent_60%)]"
      />

      {/* Floating lanterns and sparkles */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="absolute left-[8%] top-[8%] h-3 w-3 rounded-full bg-[#f7c948]/60 blur-[2px] shadow-[0_0_20px_6px_rgba(247,201,72,0.35)]" />
        <span className="absolute left-[28%] top-[3%] h-2 w-2 rounded-full bg-[#f7c948]/50 blur-[1px] shadow-[0_0_16px_4px_rgba(247,201,72,0.3)]" />
        <span className="absolute right-[24%] top-[5%] h-2 w-2 rounded-full bg-[#f7c948]/50 blur-[1px] shadow-[0_0_16px_4px_rgba(247,201,72,0.3)]" />
        <span className="absolute right-[8%] top-[10%] h-3 w-3 rounded-full bg-[#f7c948]/60 blur-[2px] shadow-[0_0_20px_6px_rgba(247,201,72,0.35)]" />
        <span className="absolute right-[6%] top-[35%] text-sm text-[#c084fc]/40">
          ❋
        </span>
        <span className="absolute left-[10%] top-[55%] text-xs text-[#c084fc]/30">
          ✻
        </span>
        <span className="absolute right-[12%] bottom-[24%] text-sm text-[#c084fc]/30">
          ✽
        </span>
        <span className="absolute left-[20%] bottom-[12%] text-xs text-[#c084fc]/30">
          ✦
        </span>
      </div>

      {/* Falling cherry blossom petals */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {[
          { left: '2%', size: 10, fallDuration: '13s', fallDelay: '-8s', drift: '9vw', spinDuration: '5s', spinDelay: '-2.5s' },
          { left: '8%', size: 14, fallDuration: '14s', fallDelay: '-3s', drift: '14vw', spinDuration: '6s', spinDelay: '-1s' },
          { left: '16%', size: 9, fallDuration: '11s', fallDelay: '-14s', drift: '8vw', spinDuration: '4s', spinDelay: '-3.5s' },
          { left: '24%', size: 11, fallDuration: '12s', fallDelay: '-10s', drift: '10vw', spinDuration: '5s', spinDelay: '-3s' },
          { left: '35%', size: 12, fallDuration: '15s', fallDelay: '-5.5s', drift: '15vw', spinDuration: '6.5s', spinDelay: '-2s' },
          { left: '46%', size: 13, fallDuration: '16s', fallDelay: '-2s', drift: '17vw', spinDuration: '7s', spinDelay: '-4s' },
          { left: '55%', size: 10, fallDuration: '12.5s', fallDelay: '-9s', drift: '11vw', spinDuration: '5s', spinDelay: '-1.5s' },
          { left: '64%', size: 10, fallDuration: '13s', fallDelay: '-12s', drift: '9vw', spinDuration: '5.5s', spinDelay: '-2s' },
          { left: '72%', size: 13, fallDuration: '17s', fallDelay: '-7s', drift: '16vw', spinDuration: '7.5s', spinDelay: '-4.5s' },
          { left: '81%', size: 14, fallDuration: '15s', fallDelay: '-6s', drift: '13vw', spinDuration: '6.5s', spinDelay: '-5s' },
          { left: '88%', size: 9, fallDuration: '11.5s', fallDelay: '-1s', drift: '8vw', spinDuration: '4.5s', spinDelay: '-3s' },
          { left: '93%', size: 11, fallDuration: '11s', fallDelay: '-4s', drift: '11vw', spinDuration: '4.5s', spinDelay: '-1.5s' },
          { left: '97%', size: 12, fallDuration: '14.5s', fallDelay: '-11s', drift: '10vw', spinDuration: '6s', spinDelay: '-0.5s' },
        ].map((petal, index) => (
          <span
            key={index}
            className="animate-petal-fall absolute top-0 block drop-shadow-[0_0_4px_rgba(244,114,182,0.4)]"
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size,
              animationDuration: petal.fallDuration,
              animationDelay: petal.fallDelay,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              ['--petal-drift' as string]: petal.drift,
            } as CSSProperties}
          >
            <span
              className="animate-petal-spin block h-full w-full"
              style={{
                animationDuration: petal.spinDuration,
                animationDelay: petal.spinDelay,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
              }}
            >
              <CherryBlossom />
            </span>
          </span>
        ))}
      </div>

      <main className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <div className="relative w-full rounded-3xl border border-[#f7c948]/15 bg-gradient-to-b from-[#241531]/18 to-[#180d24]/18 px-6 py-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:px-12 sm:py-14">
          <span
            aria-hidden
            className="absolute left-6 top-6 text-[#c084fc]/40"
          >
            ❋
          </span>
          <span
            aria-hidden
            className="absolute right-6 top-6 text-[#c084fc]/40"
          >
            ❋
          </span>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[radial-gradient(circle,_#fde68a_0%,_#f7c948_55%,_#ff8a3d_100%)] shadow-[0_0_40px_10px_rgba(247,201,72,0.35)]">
              <span className="text-2xl text-[#3a1b52]">✦</span>
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#f7c948]">
              {HOME_PAGE_CONTENT.eyebrow}
            </p>

            <h1
              className={`${playfairDisplay.className} mb-6 text-5xl leading-[1.05] font-bold sm:text-6xl md:text-7xl`}
            >
              <span className="block text-[#fdf6ec]">
                {HOME_PAGE_CONTENT.titleLine1}
              </span>
              <span className="block text-[#f7c948] [text-shadow:0_0_30px_rgba(247,201,72,0.4)]">
                {HOME_PAGE_CONTENT.titleLine2}
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-[#cdbfe0] sm:text-lg">
              {HOME_PAGE_CONTENT.subtitle}
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              {HOME_PAGE_CONTENT.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[#a78bfa]/20 bg-white/5 px-4 py-1.5 text-sm font-semibold text-[#d8cce8]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <Link
              href="/story"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f7c948] to-[#ff8a3d] px-8 py-4 text-lg font-bold text-[#2a1140] shadow-lg shadow-[#ff8a3d]/25 transition-all hover:scale-105 hover:from-[#ff8a3d] hover:to-[#f7c948] hover:shadow-xl hover:shadow-[#ff8a3d]/35 active:scale-100"
            >
              {HOME_PAGE_CONTENT.ctaLabel}
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#7c6f92]">
              {HOME_PAGE_CONTENT.footnote}
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-[#6b6377]">
          {HOME_PAGE_CONTENT.attribution}
        </p>
      </main>
    </div>
  );
}
