import Image from 'next/image';
import Link from 'next/link';
import { BeginQuestButton } from '@/components/begin-quest-button';

export default function StoryPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center bg-[#0f0618] px-6 py-16">
      <div aria-hidden className="fixed inset-0 overflow-hidden">
        <Image
          src="/images/questions/quiz-background.PNG"
          alt=""
          fill
          priority
          className="object-cover brightness-[0.88] saturate-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#1a0a2e]/30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.4)_100%)]" />
        {/* Portal glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7c3aed25_0%,_transparent_70%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c084fc]/20 bg-[radial-gradient(circle,_#7c3aed15_0%,_transparent_70%)]" />
      </div>

      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        <Link
          href="/"
          className="mb-10 flex cursor-pointer items-center gap-1.5 self-start rounded-full border border-white/15 bg-[#1a0a2e]/60 px-4 py-2 text-sm font-bold text-[#fdf6ec] backdrop-blur-sm transition-colors hover:border-white/25 hover:text-[#c4b5fd]"
        >
          <span aria-hidden>←</span>
          Back
        </Link>

        <div className="relative mb-12 rounded-2xl border border-[#c084fc]/20 bg-[#1a0a2e]/80 p-8 shadow-2xl shadow-[#7c3aed]/10 backdrop-blur-sm sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-px top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-[#c084fc] via-[#f7c948] to-[#ff6b35]"
          />
          <p className="text-base leading-[1.9] text-[#d4c4e8] sm:text-lg">
                Late one evening, you open your pantry in search of a snack and discover a tiny glowing lantern hidden between the shelves. 
                  The moment you touch it, a portal opens and sweeps you into <b>Snacktopia</b>, a magical world. 
                  Tonight, your journey begins at the <b>Moonlight Night Market</b>. 
            Waiting at the entrance is <b>Grand Guardian Nibble</b>, the ruler and protector of Snacktopia. He explains that somewhere in the market lives a Snack Spirit whose personality reflects your own.
            Explore the stalls, face whimsical challenges, and follow your instincts. <b>Your Snack Spirit is waiting.</b>
                     </p>
        </div>

        <BeginQuestButton />
      </main>
    </div>
  );
}
