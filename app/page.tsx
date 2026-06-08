import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-[#1a0a2e] px-6 py-16">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#ff6b3520_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_right,_#f7c94818_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_left,_#c084fc15_0%,_transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ff6b35]/10 blur-3xl"
      />

      {/* Floating decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="absolute left-[8%] top-[18%] text-4xl opacity-50 animate-bounce [animation-duration:3s]">
          🍿
        </span>
        <span className="absolute right-[12%] top-[28%] text-3xl opacity-45 animate-bounce [animation-duration:4s] [animation-delay:0.5s]">
          🍪
        </span>
        <span className="absolute bottom-[22%] left-[15%] text-3xl opacity-40 animate-bounce [animation-duration:3.5s] [animation-delay:1s]">
          🍫
        </span>
        <span className="absolute bottom-[30%] right-[10%] text-4xl opacity-45 animate-bounce [animation-duration:4.5s] [animation-delay:0.3s]">
          🍩
        </span>
      </div>

      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f7c948]/30 bg-[#f7c948]/10 px-4 py-1.5 text-sm font-medium tracking-wide text-[#f7c948]">
          <span aria-hidden>✨</span>
          Welcome to Snacktopia
        </p>

        <h1 className="mb-6 bg-gradient-to-br from-[#fff5e6] via-[#f7c948] to-[#ff6b35] bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Find Your Snack Spirit!
        </h1>

        <p className="mb-12 max-w-lg text-lg leading-relaxed text-[#d4c4e8] sm:text-xl">
          Set out on a delightful journey to uncover the snack that suits you
          best!
        </p>

        <Link
          href="/story"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#f7c948] px-8 py-4 text-lg font-semibold text-[#1a0a2e] shadow-lg shadow-[#ff6b35]/25 transition-all hover:scale-105 hover:from-[#f7c948] hover:to-[#ff6b35] hover:shadow-xl hover:shadow-[#ff6b35]/35 active:scale-100"
        >
          Begin the Adventure
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </main>
    </div>
  );
}
