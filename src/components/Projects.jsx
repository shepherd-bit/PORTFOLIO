
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-transparent text-white">
      {/* Removed container padding to match the left edge of AboutMe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono tracking-wider whitespace-nowrap">
            <span className="text-[#e879f9]">#</span>Projects
          </h2>
          <div className="h-[1px] bg-[#e879f9] w-24 sm:w-48 md:w-96 opacity-70"></div>
          
          {/* Dot Grid Decoration */}
          <div className="hidden lg:grid grid-cols-5 gap-2.5 ml-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Container */}
      <div className="max-w-7xl mx-auto">
        {/* Render your individual project files here */}
      </div>
    </section>
  );
};

export default Projects;