import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
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
          <span className="text-[#e879f9] mr-2">#</span>contacts
        </h2>
        <div className="flex-1 h-[1px] bg-[#e879f9]/50 max-w-xs"></div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Dot Matrix & Descriptive Text */}
        <div className="lg:col-span-6 flex flex-col sm:flex-row items-start gap-8">
          
          {/* Dot Grid Matrix Graphic */}
          <div className="grid grid-cols-5 gap-2.5 w-max opacity-50 select-none pointer-events-none hidden sm:grid">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white"></div>
            ))}
          </div>

          {/* Descriptive Text */}
          <p className="text-sm text-gray-300 leading-relaxed max-w-md">
            I’m am on my computer and phone 24/7 – Anytime and you will find me. Reach out for any Freelance opportunity, Full or Part-time On-Premise or Remote position. I am flexible if our negotiations go well
          </p>

        </div>

        {/* Right Side: Message Me Here Box */}
        <div className="lg:col-span-6 flex justify-end">
          <div className="w-full max-w-md border border-white/70 bg-transparent flex flex-col">
            
            {/* Box Header */}
            <div className="px-6 py-4 border-b border-white/50 text-white font-bold text-sm bg-[#070d1d]/30">
              Message me here
            </div>

            {/* Contact Items */}
            <div className="p-6 space-y-4">
              
              {/* Phone Number */}
              <a 
                href="tel:+254112470926" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <FaPhone className="text-cyan-400 group-hover:text-[#e879f9] transition-colors" />
                <span className="text-sm">+254112470926</span>
              </a>

              {/* WhatsApp (Masked text) */}
              <a 
                href="https://wa.me/254112470926" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <FaWhatsapp className="text-emerald-400 group-hover:text-[#e879f9] transition-colors" />
                <span className="text-sm">WhatsApp</span>
              </a>

              {/* Email (Masked text) */}
              <a 
                href="mailto:titusaoluoch@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <FaEnvelope className="text-[#e879f9] transition-colors" />
                <span className="text-sm">Gmail</span>
              </a>

            </div>

          </div>
        </div>

      </div>

    </motion.section>
  );
};

export default Contacts;