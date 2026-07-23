import { notFound } from "next/navigation";
import { FindSpiritLink } from "@/components/find-spirit-link";
import { QuizBackLink } from "@/components/quiz-back-link";
import { SpiritDetailCard } from "@/components/spirit-detail-card";
import { playfairDisplay } from "@/lib/fonts";
import { SNACK_SPIRITS, SPIRIT_IDS, type SpiritId } from "@/lib/constants";

type SpiritPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return Object.values(SPIRIT_IDS).map((id) => ({ id }));
}

export default async function SpiritPage({ params }: SpiritPageProps) {
  const { id } = await params;
  const spirit = SNACK_SPIRITS[id as SpiritId];

  if (!spirit) {
    notFound();
  }

  return (
    <div className="relative flex min-h-full flex-col overflow-hidden bg-[#0f0618] px-4 py-6 sm:px-6 sm:py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f7c94812_0%,_transparent_55%),radial-gradient(ellipse_at_bottom,_#7c3aed20_0%,_transparent_55%)]"
      />

      <main className="relative z-10 mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-3 sm:max-w-xl sm:gap-4">
        <SpiritDetailCard spirit={{ ...spirit, id: id as SpiritId }} />

        <div className="rounded-2xl border border-white/10 bg-[#1a0a2e]/60 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-sm sm:px-6 sm:py-4">
          <h2
            className={`${playfairDisplay.className} mb-1 text-xs font-semibold uppercase tracking-wide text-[#f7c948] sm:text-sm`}
          >
            About This Spirit
          </h2>
          <p className="text-[12px] leading-relaxed text-[#c9bcd9] sm:text-sm">{spirit.description}</p>
          <p className="mt-2 text-[11px] italic leading-relaxed text-[#a89bc0] sm:text-[13px]">
            {spirit.marketRole}
          </p>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3">
          <FindSpiritLink
            href="/"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#f7c948] to-[#ff8a3d] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#2a1140] shadow-lg shadow-[#ff8a3d]/25 transition-all hover:scale-105 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Find Your Own Spirit
          </FindSpiritLink>
        </div>

        <QuizBackLink
          href="/spirits"
          className="inline-flex items-center gap-1.5 self-center text-xs font-semibold uppercase tracking-wide text-[#c9bcd9] transition-colors hover:text-[#fdf6ec]"
        >
          ← All Spirits
        </QuizBackLink>
      </main>
    </div>
  );
}
