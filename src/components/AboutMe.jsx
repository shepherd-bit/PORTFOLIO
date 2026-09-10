export default function AboutMe() {
  // Helper to render the 5x5 dot grid squares
  const renderDotGrid = () => (
    <div className="grid grid-cols-5 gap-3 w-max">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="w-1 h-1 bg-gray-400 rounded-full opacity-60"></div>
      ))}
    </div>
  );

  return (
    <section id="About-Me" className="relative w-full bg-transparent text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-mono tracking-wider">
            <span className="text-[#e879f9]">#</span>About - Me
          </h2>
          <div className="h-[1px] bg-[#e879f9] w-48 md:w-96 opacity-70"></div>
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

        {/* Right Column: Image & Dot Grids */}
        <div className="lg:col-span-6 relative flex justify-center items-center mt-10 lg:mt-0">
          
          {/* Top-Left Dot Grid */}
          <div className="absolute -top-6 left-2 z-0">
            {renderDotGrid()}
          </div>

          {/* Bottom-Right Dot Grid (Upper) */}
          <div className="absolute right-6 bottom-28 z-0 hidden sm:block">
            {renderDotGrid()}
          </div>

          {/* Bottom-Right Dot Grid (Lower Edge) */}
          <div className="absolute right-0 bottom-4 z-0">
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