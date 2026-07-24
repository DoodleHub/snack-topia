import Image from 'next/image';
import Link from 'next/link';
import { BeginQuestButton } from '@/components/begin-quest-button';

export default function StoryPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-start px-6 pb-16 pt-6 sm:justify-center sm:py-16 bg-[#0f0618]">
      <div aria-hidden className="fixed inset-0 overflow-hidden">
        <Image
          src="/images/questions/quiz-background.PNG"
          alt=""
          fill
          priority
          className="object-cover brightness-[0.7] saturate-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#1a0a2e]/50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.4)_100%)]" />
        {/* Portal glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7c3aed25_0%,_transparent_70%)]" />
      </div>

      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        <div className="relative mb-8 rounded-2xl border border-[#c084fc]/20 bg-[#1a0a2e]/80 p-8 shadow-2xl shadow-[#7c3aed]/10 backdrop-blur-sm sm:p-10">
          <p className="text-base leading-[1.9] text-[#d4c4e8] sm:text-lg">
                Late one evening, you open your pantry in search of a snack and discover a glowing lantern hidden between the shelves.
                  The moment you touch it, a portal opens and sweeps you into <b>Snacktopia</b>, a magical world.
                  Tonight, your journey begins at the <b>Moonlight Night Market</b>.
                     </p>
                     <br></br>
                     <p className="text-base leading-[1.9] text-[#d4c4e8] sm:text-lg">
            Waiting at the entrance is <b>Grand Guardian Nibble</b>, the ruler and protector of <b>Snacktopia</b>. He explains that somewhere in the market lives a <b>Snack Spirit</b> whose personality reflects your own.
            Explore the stalls, face challenges, and follow your instincts.    <br></br>   <br></br>Your <b>Snack Spirit</b> is waiting.
                             </p>
        </div>

        <div className="flex w-full items-center justify-between">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1.5 rounded-full border border-white/15 bg-[#1a0a2e]/60 px-4 py-2 text-sm font-bold text-[#fdf6ec] backdrop-blur-sm transition-colors hover:border-white/25 hover:text-[#c4b5fd]"
          >
            <span aria-hidden>←</span>
            Back
          </Link>

          <BeginQuestButton />
        </div>
      </main>
    </div>
  );
}
