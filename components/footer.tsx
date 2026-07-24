export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-6 w-full shrink-0 bg-[#0f0618] px-4 py-4 text-center text-xs text-[#7c6f92] sm:px-6">
      © {year} OddlyMade. All rights reserved.
    </footer>
  );
}
