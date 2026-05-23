export default function Marquee() {
  const tools = [
    "ADOBE PREMIERE PRO",
    "AFTER EFFECTS",
    "PHOTOSHOP",
    "ILLUSTRATOR",
    "CAPCUT",
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-white/5 py-5 md:py-8">
      
      {/* Fade Effect Left */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-r from-black to-transparent" />

      {/* Fade Effect Right */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-l from-black to-transparent" />

      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {tools.map((tool, index) => (
              <div
                key={`${i}-${index}`}
                className="flex items-center"
              >
                <span className="mx-4 text-sm font-semibold tracking-[0.25em] text-transparent bg-gradient-to-r from-zinc-500 to-zinc-100 bg-clip-text sm:mx-6 sm:text-lg md:mx-10 md:text-2xl lg:text-4xl">
                  {tool}
                </span>

                {/* Dot Separator */}
                {index !== tools.length - 1 && (
                  <span className="text-zinc-600 text-lg md:text-2xl">
                    •
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}