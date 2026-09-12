import { FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/30 bg-[#070d1d] font-mono text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo/Name & Email */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-8 gap-4">
          <div className="flex items-center space-x-2 text-white font-bold">
            <FaCode className="text-[#e879f9]" />
            <span>Titus</span>
          </div>
          <span className="text-sm text-gray-300">
            titusaoluoch@gmail.com
          </span>
        </div>

        {/* Right: Copyright & Attribution */}
        <div className="text-xs text-gray-400 text-center md:text-right">
          © Copyright 2026. Made by Titus
        </div>

      </div>
    </footer>
  );
};

export default Footer;