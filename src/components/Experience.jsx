import { motion } from 'framer-motion';
import { 
  FaNetworkWired, 
  FaStar, 
  FaFileCode, 
  FaRocket 
} from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      version: 'v1.0-release',
      period: '2022 – 2024',
      role: 'Freelance Web Developer',
      platforms: 'Upwork, Fiverr & Private Clients',
      badge: '4.55 ★ Rating',
      icon: <FaRocket className="text-[#e879f9]" />,
      statusColor: 'text-[#e879f9]',
      description: 'Delivered high-performance custom web solutions and client-side applications with consistent top-rated client satisfaction.',
      tags: ['React', 'TypeScript', 'Client Communication', 'Full-Stack Integration']
    },
    {
      version: 'research-module',
      period: '2024 – 2025',
      role: 'Freelance Research Writer',
      platforms: 'Technical Papers & Architecture Deep-Dives',
      badge: 'Peer-Level Insights',
      icon: <FaFileCode className="text-cyan-400" />,
      statusColor: 'text-cyan-400',
      description: 'Researched and authored comprehensive technical papers exploring foundational and advanced engineering paradigms:',
      papers: [
        'Rendering Paradigms',
        'WebAssembly',
        'Edge Computing',
        'Database Evolution',
        'Caching & State',
        'Cloud Native Infrastructure'
      ],
      tags: ['System Architecture', 'Technical Writing', 'Performance Optimization']
    },
    {
      version: 'active-deployment',
      period: '2025 – Present',
      role: 'Scaling Scope & Strategy',
      platforms: 'System Architecture, DevOps & Business',
      badge: 'Live Status',
      icon: <FaNetworkWired className="text-emerald-400" />,
      statusColor: 'text-emerald-400',
      description: 'Scaling architectural depth and strategic competence across modern engineering ecosystems.',
      tags: ['System Architecture', 'CI/CD & DevOps', 'Technical Communication', 'Product & Strategy Business']
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto px-6 py-20 relative font-mono text-gray-300"
    >
      
      {/* Heading & Horizontal Line Graphic */}
      <div className="flex items-center space-x-6 mb-16">
        <h2 className="text-3xl font-normal text-white tracking-wide flex items-center">
          <span className="text-[#e879f9] mr-2">#</span>Experience
        </h2>
        <div className="flex-1 h-[1px] bg-[#e879f9]/50 max-w-xs"></div>
      </div>

      {/* Main Container Layout */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* Vertical Pipeline Connecting Line */}
        <div className="absolute left-6 md:left-8 top-6 bottom-6 w-[2px] border-l-2 border-dashed border-white/30 hidden sm:block"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col sm:flex-row items-start sm:space-x-8 group"
            >
              
              {/* Pipeline Node Indicator */}
              <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-none bg-[#070d1d] border border-white/70 text-white shrink-0 z-10 group-hover:border-[#e879f9] transition-colors">
                {exp.icon}
              </div>

              {/* Experience Card */}
              <div className="w-full border border-white/70 bg-transparent flex flex-col transition-colors group-hover:border-[#e879f9]">
                
                {/* Header Bar */}
                <div className="px-5 py-3 border-b border-white/50 flex flex-wrap items-center justify-between gap-2 bg-[#070d1d]/30 text-xs">
                  <div className="flex items-center space-x-3">
                    <span className={`${exp.statusColor} font-bold tracking-wider uppercase`}>
                      [{exp.version}]
                    </span>
                    <span className="text-gray-400">|</span>
                    <span className="text-white">{exp.period}</span>
                  </div>
                  <div className="px-2.5 py-1 bg-[#070d1d]/80 border border-white/30 text-white flex items-center space-x-1.5">
                    {exp.version === 'v1.0-release' && <FaStar className="text-yellow-400 w-3 h-3" />}
                    {exp.version === 'active-deployment' && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>}
                    <span>{exp.badge}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[#e879f9] mt-1">
                      {exp.platforms}
                    </p>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Optional Papers List for Research Module */}
                  {exp.papers && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {exp.papers.map((paper, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center space-x-2 px-3 py-1.5 bg-[#070d1d]/60 border border-cyan-500/20 text-xs text-gray-300"
                        >
                          <span className="text-cyan-400">#</span>
                          <span>{paper}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags Footer */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {exp.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-[#070d1d]/40 border border-white/20 text-[11px] text-gray-300 group-hover:border-white/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </motion.section>
  );
};

export default Experience;