import Link from "next/link";
import { playfairDisplay } from "@/lib/fonts";
import { SNACK_SPIRITS, type SnackSpirit, type SpiritId } from "@/lib/constants";

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

function PillHeader({ tone, children }: { tone: "purple" | "tan"; children: React.ReactNode }) {
  const toneClass =
    tone === "purple"
      ? "border-white/15 bg-white/5 text-[#c4b5fd]"
      : "border-[#f7c948]/30 bg-[#f7c948]/10 text-[#f7c948]";
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

const TRAIT_TONES = [
  "border-[#f7c948]/40 bg-[#f7c948]/15 text-[#f7c948]",
  "border-[#f9a8d4]/40 bg-[#f9a8d4]/15 text-[#f9a8d4]",
  "border-[#c4b5fd]/40 bg-[#c4b5fd]/15 text-[#c4b5fd]",
];

function CompatAvatar({ id }: { id: SpiritId }) {
  const spirit = SNACK_SPIRITS[id];
  return (
    <Link href={`/spirits/${id}`} className="flex flex-col items-center gap-1">
      <div className="h-9 w-9 rounded-xl border-2 border-white/15 bg-white/5 shadow-sm transition-colors hover:border-white/30 sm:h-14 sm:w-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={spirit.image} alt={spirit.name} className="h-full w-full object-contain" />
      </div>
      <span className="text-center text-[9px] font-medium leading-tight text-[#d4c4e8] sm:text-xs">
        {spirit.name}
      </span>
    </Link>
  );
}

export function SpiritDetailCard({
  spirit,
  eyebrow = "Snack Spirit Profile",
  innerRef,
}: {
  spirit: SnackSpirit & { id: SpiritId };
  eyebrow?: string;
  innerRef?: React.Ref<HTMLDivElement>;
}) {
  const traits = spirit.traits.split(",").map((trait) => trait.trim());

  return (
    <div ref={innerRef} className="flex flex-col gap-2 sm:gap-3">
      {/* Header */}
      <div className="text-center">
        <p className="mb-0.5 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f7c948] sm:text-xs sm:tracking-[0.25em]">
          <span aria-hidden>✦</span>
          {eyebrow}
          <span aria-hidden>✦</span>
        </p>
        <h1
          className={`${playfairDisplay.className} text-xl font-bold leading-tight text-[#fdf6ec] sm:text-4xl`}
        >
          {spirit.name}
        </h1>
        <div className="my-1 flex flex-wrap justify-center gap-1.5 sm:my-1.5 sm:gap-2">
          {traits.map((trait, index) => (
            <span
              key={trait}
              className={`rounded-full border px-3 py-0.5 text-[10px] font-semibold tracking-wide backdrop-blur-sm sm:px-4 sm:py-1 sm:text-sm ${TRAIT_TONES[index % TRAIT_TONES.length]}`}
            >
              {trait}
            </span>
          ))}
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
                  className="flex items-center gap-1 text-[9px] leading-snug text-[#c9bcd9] sm:gap-1.5 sm:text-[13px]"
                >
                  <Blossom className="shrink-0 text-[#f9a8d4]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
