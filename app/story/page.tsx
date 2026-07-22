import Image from 'next/image';
import Link from 'next/link';
import { BeginQuestButton } from '@/components/begin-quest-button';

export default function StoryPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-[#0f0618] px-6 py-16">
      <Image
        src="/images/questions/quiz-background.PNG"
        alt=""
        fill
        priority
        className="object-cover"
      />
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

        <div className="relative mb-10 h-40 w-40 overflow-hidden rounded-full border border-[#c084fc]/40 shadow-lg shadow-[#7c3aed]/20 sm:h-48 sm:w-48">
          <Image
            src="/images/intro/story.png"
            alt="A glowing portal opening into Snacktopia"
            fill
            className="object-cover"
            priority
          />
        </div>

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
