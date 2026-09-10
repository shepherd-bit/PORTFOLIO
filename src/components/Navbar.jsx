
const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About-Me', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Skills', href: '#' },
    { name: 'Experience', href: '#' },
    { name: 'Contacts', href: '#' },
    { name: 'Resume', href: '#' },
  ];

  return (
    // Increased transparency on the background color (changed from /80 to /50 or /40)
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#1e293b]/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo Section with an image space */}
        <div className="flex items-center gap-3">
          {/* Replace src with your actual logo path */}
          <img 
            src="./logo/Logo.png" 
            alt="Logo" 
            className="w-6 h-6 object-contain" 
          />
          <span className="text-2xl font-bold text-white tracking-tight font-mono">
            Titus
          </span>
        </div>

        {/* Navigation Links Section */}
        <div className="flex items-center gap-8 font-mono text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm group transition duration-300 ease-in-out flex items-center"
            >
              {/* Hash symbol is now permanently visible */}
              <span className="text-[#c084fc] mr-1">
                #
              </span>
              {/* Link name brightens on hover */}
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;