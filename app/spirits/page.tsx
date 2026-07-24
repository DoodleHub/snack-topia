import Link from "next/link";
import { QuizBackLink } from "@/components/quiz-back-link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { playfairDisplay } from "@/lib/fonts";
import { SNACK_SPIRITS, SPIRIT_IDS } from "@/lib/constants";

export default function SpiritsPage() {
  const spirits = Object.values(SPIRIT_IDS).map((id) => ({
    id,
    ...SNACK_SPIRITS[id],
  }));

  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-[#0f0618] pb-4 pt-4 sm:pb-6 sm:pt-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f7c94812_0%,_transparent_55%),radial-gradient(ellipse_at_bottom,_#7c3aed20_0%,_transparent_55%)]"
      />

      <Nav className="max-w-4xl" />

      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center gap-8 px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-1 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f7c948]">
            <span aria-hidden>✦</span>
            The Moonlight Night Market
            <span aria-hidden>✦</span>
          </p>
          <h1 className={`${playfairDisplay.className} text-2xl font-bold text-[#fdf6ec] sm:text-4xl`}>
            Meet the Snack Spirits
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#cdbfe0] sm:text-base">
            Sixteen spirits wander the market. Tap one to learn their story.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {spirits.map((spirit) => (
            <Link
              key={spirit.id}
              href={`/spirits/${spirit.id}`}
              className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#1a0a2e]/60 px-3 py-4 text-center shadow-lg shadow-black/20 backdrop-blur-sm transition-all hover:scale-105 hover:border-white/25 hover:bg-[#1a0a2e]/80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={spirit.image}
                alt={spirit.name}
                className="h-14 w-14 object-contain drop-shadow-lg sm:h-20 sm:w-20"
              />
              <span
                className={`${playfairDisplay.className} text-xs font-semibold leading-tight text-[#fdf6ec] sm:text-base`}
              >
                {spirit.name}
              </span>
              <span className="text-[10px] leading-snug text-[#a89bc0] sm:text-xs">{spirit.tagline}</span>
            </Link>
          ))}
        </div>

        <QuizBackLink
          href="/results"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#c9bcd9] transition-colors hover:text-[#fdf6ec]"
        >
          ← Back to Your Result
        </QuizBackLink>
      </main>

      <Footer />
    </div>
  );
}
