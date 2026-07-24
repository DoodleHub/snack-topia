import Link from 'next/link';

export function Nav({ className = 'max-w-xl' }: { className?: string }) {
  return (
    <div
      className={`relative z-10 mx-auto flex w-full items-center justify-between gap-2 px-4 pb-2 sm:px-6 sm:pb-4 ${className}`}
    >
      <Link href="/" className="group flex w-fit items-center gap-1.5 sm:gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[radial-gradient(circle,_#fde68a_0%,_#f7c948_55%,_#ff8a3d_100%)] shadow-[0_0_16px_4px_rgba(247,201,72,0.35)] transition-transform group-hover:scale-105 sm:h-9 sm:w-9 sm:rounded-2xl">
          <span className="text-xs text-[#3a1b52] sm:text-base">✦</span>
        </div>
        <span className="text-xs font-bold text-[#fdf6ec] transition-colors group-hover:text-[#c4b5fd] sm:text-base">
          Snacktopia
        </span>
      </Link>
      <span className="rounded-full border border-white/15 bg-[#1a0a2e]/60 px-3 py-1 text-[9px] font-bold text-[#fdf6ec] backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-xs">
        Night Market Edition
      </span>
    </div>
  );
}
