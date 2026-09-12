import { motion } from 'framer-motion';

const Socials = () => {
  const iconClass = "w-8 h-8 object-contain"; // Increased from w-6 h-6 to make them larger

  const socials = [
    { 
      label: "GitHub", 
      href: "https://github.com/shepherd-bit", 
      icon: <img src="./socials/github.svg" alt="GitHub" className={iconClass} /> 
    },
    { 
      label: "Peerlist", 
      href: "https://peerlist.io/shepherd", 
      icon: <img src="./socials/peerlist.svg" alt="Peerlist" className={iconClass} /> 
    },
    { 
      label: "Instagram", 
      href: "https://www.instagram.com/___.shepherd.___?utm_source=qr&stkn=MWtqY2NjcGVzdmNvdw==", 
      icon: <img src="./socials/insta.svg" alt="Instagram" className={iconClass} /> 
    },
    { 
      label: "WhatsApp", 
      href: "https://wa.me/254112470926", 
      icon: <img src="./socials/whatsapp.svg" alt="WhatsApp" className={iconClass} /> 
    },
  ];

  // Variants for the vertical (desktop) panel fade-in
  const desktopPanelVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut", delayChildren: 0.2, staggerChildren: 0.1 }
    },
  };

  // Variants for the individual icons inside the desktop panel
  const desktopIconVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Variants for the horizontal (mobile) bar slide-up
  const mobileBarVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 } 
    },
  };

  return (
    <>
      {/* --- DESKTOP SOCIAL PANEL (Hidden on Mobile) --- */}
      <motion.div 
        variants={desktopPanelVariants}
        initial="hidden"
        animate="visible"
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden flex-col items-center md:flex gap-6"
      >
        {/* Top Line */}
        <div className="w-[1px] h-24 bg-gray-400/60 mb-1"></div>

        {/* Floating Icons with Hover Tooltips */}
        {socials.map((social, index) => (
          <motion.a
            key={index}
            variants={desktopIconVariants}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="relative group flex justify-center items-center w-10 h-10 text-gray-300 hover:text-white transition-colors"
          >
            {social.icon}

            {/* Tooltip naming each app upon hover */}
            <span className="absolute left-14 px-2.5 py-1 bg-[#070d1d] border border-white/40 text-white text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
              {social.label}
            </span>
          </motion.a>
        ))}

        {/* Bottom Line */}
        <div className="w-[1px] h-24 bg-gray-400/60 mt-1"></div>
      </motion.div>


      {/* --- MOBILE SOCIAL BAR (Visible only on Mobile) --- */}
      <motion.div
        variants={mobileBarVariants}
        initial="hidden"
        animate="visible"
        className="fixed bottom-4 left-0 right-0 z-50 px-6 md:hidden"
      >
        {/* Floating row without card housing */}
        <div className="flex items-center justify-around w-full">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex justify-center items-center w-12 h-12 active:scale-110 transition-transform"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Socials;