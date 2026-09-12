import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="Home" className="relative w-full min-h-screen text-white pt-20 pb-12 px-6 md:px-16 flex flex-col justify-between overflow-hidden">
      
      {/* Top / Main Hero Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10 pt-4">
        
        {/* Left Text Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 lg:pl-6 flex flex-col items-start"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
            Hi, I am Titus Oluoch, a full <br />
            Stack <span className="text-[#d946ef]">web developer.</span> <br />
            Equipped and Ready for <span className="text-[#d946ef]">Team</span> <br />
            or <span className="text-[#d946ef]">Solo</span> Projects
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
            Guarantees: Performance & Speed, SEO, Top UX (Visual Appeal), Device responsiveness, Scalability, Security & Data Privacy, and Reliability & Uptime
          </p>

          <a 
            href="#contacts"
            className="px-6 py-3 border border-[#d946ef] text-white font-medium hover:bg-[#d946ef]/10 transition-all duration-300 shadow-[4px_4px_0px_0px_#d946ef]"
          >
            Contact me !!
          </a>
        </motion.div>

        {/* Right Image / Graphic Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 relative flex justify-center items-center"
        >
          {/* Decorative Thicker White Outline Shapes */}
          <div className="absolute top-2 -left-6 w-36 h-36 border-2 border-white pointer-events-none hidden sm:block"></div>
          <div className="absolute top-12 left-10 w-28 h-28 border-2 border-white pointer-events-none hidden sm:block"></div>

          {/* Dot Grid Decoration */}
          <div className="absolute bottom-16 right-10 grid grid-cols-5 gap-2.5 z-20 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
            ))}
          </div>

          {/* Main Image Container */}
          <div className="relative z-10 w-full max-w-md border border-gray-700 bg-transparent p-2">
            <img 
              src="./hero/me.png" 
              alt="Titus - Full Stack Web Developer" 
              className="w-full h-auto object-cover grayscale contrast-125"
            />
            
            {/* Currently Working Badge */}
            <div className="absolute -bottom-5 right-2 z-30 border border-gray-600 bg-[#121824] px-4 py-2 flex items-center gap-3 shadow-lg whitespace-nowrap">
              <span className="w-3 h-3 bg-[#d946ef] inline-block shrink-0"></span>
              <p className="text-xs sm:text-sm font-mono text-gray-200">
                Currently working on <span className="text-white font-semibold">Python backend frameworks</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Quote Banner Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="max-w-3xl mx-auto w-full mt-12 mb-4 relative px-4"
      >
        {/* Main Quote Box with Thick White Border & clean floating quote marks */}
        <div className="border-2 border-white px-8 py-6 relative inline-block w-full bg-transparent">
          {/* Clean Top-Left Quote Mark (No black background wrap) */}
          <span className="absolute -top-8 left-6 text-white text-6xl font-serif leading-none select-none">
            “
          </span>

          <p className="text-base sm:text-lg text-gray-100 font-medium tracking-wide text-center">
            Look, AI can build stuff. But those ruthless industry level <br />
            details is where I come in – Sign Me Up!!
          </p>

          {/* Clean Bottom-Right Quote Mark (No black background wrap) */}
          <span className="absolute -bottom-8 right-12 text-white text-6xl font-serif leading-none select-none">
            ”
          </span>
        </div>

        {/* Author Tag Box with Thick White Border */}
        <div className="flex justify-end mt-4">
          <div className="border-2 border-white px-5 py-2 bg-transparent text-sm font-mono text-gray-200 inline-block">
            - Eng. Me
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;