import Credo from './Credo';
import Techline from './Techline';
import Vortex from './Vortex';

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-transparent text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Section Title Header - Perfectly aligned with AboutMe */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono tracking-wider whitespace-nowrap font-normal">
            <span className="text-[#e879f9]">#</span>Projects
          </h2>
          <div className="h-[1px] bg-[#e879f9] w-24 sm:w-48 md:w-96 opacity-70"></div>
        </div>
      </div>

      {/* Project Cards Container */}
      <div className="max-w-7xl mx-auto space-y-16">
        <Credo />
        <Techline />
        <Vortex />
      </div>
    </section>
  );
}