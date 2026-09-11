import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaGithub 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiRedux, 
  SiReactrouter 
} from 'react-icons/si';
import { Layers, Play } from 'lucide-react';

const Techline = () => {
  const tools = [
    { name: 'React', icon: <FaReact className="text-[#e879f9]" /> },
    { name: 'Tailwind CSS v4', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-400" /> },
    { name: 'React Router', icon: <SiReactrouter className="text-red-400" /> },
    { name: 'Framer Motion', icon: <Layers className="text-purple-400" /> },
    { name: 'Lucide React', icon: <Layers className="text-pink-400" /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto p-6 md:p-10 bg-[#0b1329] border border-[#e879f9]/40 rounded-none shadow-[0_0_25px_rgba(232,121,249,0.15)] relative"
    >
      
      {/* Dossier Top Tab Accent */}
      <div className="absolute -top-3 left-10 px-4 py-1 bg-[#0b1329] border border-[#e879f9]/40 text-[#e879f9] text-xs font-mono uppercase tracking-widest">
        Project // 02
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        
        {/* LEFT COLUMN: Multimedia Frame & Hardware Specs (Tools) */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          
          {/* App Preview Image Container - Clear Thumbnail (No Dark Overlay) */}
          <div className="relative w-full h-72 sm:h-80 bg-[#070d1d] border border-[#e879f9]/30 rounded-none overflow-hidden flex items-center justify-center group shadow-inner">
            <img 
              src="./projects/techline-preview.png" 
              alt="Techline App Preview" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Tools / Hardware Specs Grid */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#e879f9] uppercase">
              // Hardware Specs (Tools Used)
            </h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#070d1d] border border-cyan-500/20 rounded-none text-xs font-mono text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#e879f9] hover:shadow-[0_0_12px_rgba(232,121,249,0.3)] hover:text-white cursor-default"
                >
                  {tool.icon}
                  <span>{tool.name}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Classified Technical Brief (Characteristics) */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 font-mono text-gray-300">
          
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-wide mb-2 flex items-center font-mono">
                <span className="text-[#e879f9] mr-2">#</span> Techline
              </h2>
              <div className="inline-block px-3 py-1 bg-[#1a1d26] border border-[#e879f9]/40 text-xs font-mono text-[#e879f9] uppercase tracking-widest">
                Category: E-commerce
              </div>
            </div>

            {/* Workflow */}
            <div className="border-l-2 border-[#e879f9] pl-4 py-1 space-y-1 bg-[#070d1d]/40">
              <h3 className="text-xs font-semibold text-[#e879f9] uppercase tracking-wider">
                Workflow
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 font-sans">
                Users browse a tech-only product catalog, filter items by categories like smartphones and computers, use real-time search, manage items in a shopping cart and wishlist, and interact with features like flash sale countdowns and carousels entirely client-side without a backend database.
              </p>
            </div>

            {/* Scenario */}
            <div className="border-l-2 border-cyan-500 pl-4 py-1 space-y-1 bg-[#070d1d]/40">
              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Scenario
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 font-sans">
                A recruiter or hiring manager evaluating a developer's portfolio needs to assess advanced state management, complex user flows, and responsive UI design in a fully client-side application.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://techline-store.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] flex items-center justify-center space-x-2 bg-[#1a1d26] hover:bg-[#222633] text-white border border-[#e879f9] px-4 py-3 text-xs tracking-wider uppercase transition-colors shadow-lg"
            >
              <Play className="w-4 h-4 text-[#e879f9]" />
              <span>Live Demo</span>
            </a>

            <a
              href="https://github.com/shepherd-bit/techline-store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] flex items-center justify-center space-x-2 bg-[#070d1d] hover:bg-[#1a1d26] text-white border border-cyan-500/50 px-4 py-3 text-xs tracking-wider uppercase transition-colors shadow-lg"
            >
              <FaGithub className="w-4 h-4 text-cyan-400" />
              <span>Source</span>
            </a>
          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default Techline;