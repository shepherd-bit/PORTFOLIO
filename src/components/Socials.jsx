
import { motion } from 'framer-motion';

const Socials = () => {
  const iconClass = "w-6 h-6 object-contain";

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com",
      icon: <img src="./socials/github.svg" alt="GitHub" className={iconClass} />,
    },
    {
      label: "Peerlist",
      href: "https://peerlist.io",
      icon: <img src="./socials/peerlist.svg" alt="Peerlist" className={iconClass} />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: <img src="./socials/linkin.svg" alt="LinkedIn" className={iconClass} />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: <img src="./socials/insta.svg" alt="Instagram" className={iconClass} />,
    },
    {
      label: "WhatsApp",
      href: "https://whatsapp.com",
      icon: <img src="./socials/whatsapp.svg" alt="WhatsApp" className={iconClass} />,
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center"
    >
      {/* Top Line */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[1px] h-24 bg-gray-500/40 mb-5 origin-top"
      />

      {/* Thinner glassmorphic container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="backdrop-blur-md bg-white/5 border border-white/10 px-1.5 py-3 rounded-full flex flex-col gap-4 shadow-2xl"
      >
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center items-center w-8 h-8"
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Bottom Line */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[1px] h-24 bg-gray-500/40 mt-5 origin-bottom"
      />
    </motion.div>
  );
};

export default Socials;