import { useState } from 'react';
import { 
  FaNodeJs, 
  FaReact, 
  FaJs,
  FaGithub
} from 'react-icons/fa';
import { 
  SiPostgresql, 
  SiTailwindcss, 
  SiExpress, 
  SiAxios 
} from 'react-icons/si';
import { Layers, FileText, Cpu, Play, X } from 'lucide-react';

const Credo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tools = [
    { name: 'React', icon: <FaReact className="text-[#e879f9]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Framer Motion', icon: <Layers className="text-purple-400" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'OpenAI API', icon: <Cpu className="text-emerald-400" /> },
    { name: 'PDF-lib', icon: <FileText className="text-red-400" /> },
    { name: 'Multer', icon: <FileText className="text-orange-400" /> },
    { name: 'pdf-parse', icon: <FileText className="text-blue-300" /> },
    { name: 'Lucide React', icon: <Layers className="text-pink-400" /> },
    { name: 'Axios', icon: <SiAxios className="text-indigo-400" /> },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 md:p-10 bg-[#0b1329] border border-[#e879f9]/40 rounded-none shadow-[0_0_25px_rgba(232,121,249,0.15)] relative animate-in fade-in zoom-in-95 duration-700 ease-out">
      
      {/* Dossier Top Tab Accent */}
      <div className="absolute -top-3 left-10 px-4 py-1 bg-[#0b1329] border border-[#e879f9]/40 text-[#e879f9] text-xs font-mono uppercase tracking-widest">
        Project // 01
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        
        {/* LEFT COLUMN: Multimedia Frame & Hardware Specs (Tools) */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          
          {/* App Preview Image Container */}
          <div className="relative w-full h-72 sm:h-80 bg-[#070d1d] border border-[#e879f9]/30 rounded-none overflow-hidden flex items-center justify-center group shadow-inner">
            <img 
              src="./projects/credo-preview.png" 
              alt="Credo App Preview" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
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
                <span className="text-[#e879f9] mr-2">#</span> Credo
              </h2>
              <div className="inline-block px-3 py-1 bg-[#1a1d26] border border-[#e879f9]/40 text-xs font-mono text-[#e879f9] uppercase tracking-widest">
                Category: SaaS (Software as a Service)
              </div>
            </div>

            {/* Workflow */}
            <div className="border-l-2 border-[#e879f9] pl-4 py-1 space-y-1 bg-[#070d1d]/40">
              <h3 className="text-xs font-semibold text-[#e879f9] uppercase tracking-wider">
                Workflow
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 font-sans">
                Users upload internal policy PDFs, which the app scans against pre-loaded regulatory frameworks (like GDPR, SOC 2, and ISO 27001) using a hybrid rule-engine and AI model to flag missing or outdated clauses, calculate a compliance score, and generate an annotated, audit-ready PDF with suggested fixes.
              </p>
            </div>

            {/* Scenario */}
            <div className="border-l-2 border-cyan-500 pl-4 py-1 space-y-1 bg-[#070d1d]/40">
              <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Scenario
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 font-sans">
                A company facing a tight acquisition deadline or external audit must quickly review its outdated employee handbook or security policy against strict compliance standards without spending weeks or thousands of dollars on manual legal consultants.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 min-w-[140px] flex items-center justify-center space-x-2 bg-[#1a1d26] hover:bg-[#222633] text-white border border-[#e879f9] px-4 py-3 text-xs tracking-wider uppercase transition-colors shadow-lg cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#e879f9]" />
              <span>Video Demo</span>
            </button>

            <a
              href="https://github.com/shepherd-bit/credo"
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

      {/* YouTube Video Modal Popup with Quantum Zoom */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#0b1329] border border-[#e879f9] p-4 shadow-[0_0_40px_rgba(232,121,249,0.3)] animate-in zoom-in-90 duration-300 ease-out">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-mono text-[#e879f9] uppercase tracking-widest">// Credo - Live Demonstration</span>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative w-full aspect-video bg-black border border-cyan-500/30">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/oBJ98xe8n18" 
                title="Credo Video Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Credo;