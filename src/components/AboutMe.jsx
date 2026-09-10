export default function AboutMe() {
  // Helper to render the larger 5x5 dot grid squares in white
  const renderDotGrid = () => (
    <div className="grid grid-cols-5 gap-4 w-max">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-white rounded-full opacity-80 shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
      ))}
    </div>
  );

  return (
    <section id="About-Me" className="relative w-full bg-transparent text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono tracking-wider whitespace-nowrap">
            <span className="text-[#e879f9]">#</span>About - Me
          </h2>
          <div className="h-[1px] bg-[#e879f9] w-24 sm:w-48 md:w-96 opacity-70"></div>
        </div>
      </div>

      {/* Main Content Grid - Centered items and balanced layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
        
        {/* Left Column: Text & CTA Card */}
        <div className="lg:col-span-6 space-y-6 relative z-10 font-mono text-base md:text-lg leading-relaxed text-white">
          {/* Decorative outline box on the far left edge */}
          <div className="absolute -left-20 top-10 w-24 h-36 border border-gray-600 opacity-40 pointer-events-none hidden xl:block"></div>

          <p className="text-gray-300 font-semibold">
            One for whoever is reading this:
          </p>

          <p className="text-white">
            Enrolled for a Bachelor of Science, Computer Science at The East African University in 2018. Spent 6 years studying, but missing exams (financial difficulties - most people in my country have them, no big deal).
          </p>

          <p className="text-white">
            After 6 years, I left school without my graduation papers, because I hadn’t paid for most of my exams. Now I decided to make a name for myself in freelance world by building stuff that help people achieve their goals, and here I am. I am deeply committed to prove myself as a productive force.
          </p>

          {/* CTA Card (Not transparent, purple border, arrow link) */}
          <div className="pt-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-between bg-[#1a1d26] border border-[#e879f9] px-6 py-4 rounded-none text-white font-mono shadow-lg hover:bg-[#222633] transition-colors w-full sm:w-auto"
            >
              <span>
                Thanks for Knowing Me - Click <span className="text-[#e879f9] underline cursor-pointer">HERE</span> for a Price
              </span>
              <span className="ml-4 text-[#e879f9]">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Image & Overlapping Dot Grids */}
        <div className="lg:col-span-6 relative flex justify-center items-center mt-10 lg:mt-0">
          
          {/* Top-Left Dot Grid (Overlapping image) */}
          <div className="absolute -top-4 left-6 sm:left-12 z-20 pointer-events-none">
            {renderDotGrid()}
          </div>

          {/* Bottom-Right Dot Grid Upper (Overlapping image) */}
          <div className="absolute right-8 bottom-32 z-20 pointer-events-none hidden sm:block">
            {renderDotGrid()}
          </div>

          {/* Bottom-Right Dot Grid Lower (Overlapping image) */}
          <div className="absolute right-4 bottom-6 z-20 pointer-events-none">
            {renderDotGrid()}
          </div>

          {/* Image Container scaled up to match text height */}
          <div className="relative z-10 w-full max-w-md">
            <div className="relative">
              <img 
                src="./about-me/hero-4-2.png" 
                alt="About Me" 
                className="w-full h-auto object-cover grayscale contrast-125"
              />
            </div>
            {/* Horizontal line underneath the image */}
            <div className="h-[2px] bg-[#e879f9] w-full mt-2"></div>
          </div>

        </div>

      </div>
    </section>
  );
}