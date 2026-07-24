export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-6 w-full shrink-0 px-4 py-4 flex justify-center sm:px-6">
      <span className="rounded-full bg-[#0f0618] px-5 py-2 text-xs text-[#7c6f92]">
        © {year} OddlyMade. All rights reserved.
      </span>
    </footer>
  );
}
