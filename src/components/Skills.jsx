import { motion } from 'framer-motion';
import { 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaVuejs, 
  FaNodeJs, 
  FaGitAlt,
  FaCode,
  FaTerminal
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiPostgresql, 
  SiExpress, 
  SiFigma, 
  SiGooglegemini 
} from 'react-icons/si';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'Python', icon: <FaPython className="text-blue-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-cyan-400" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-300" /> },
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', icon: <FaReact className="text-[#e879f9]" /> },
        { name: 'Vue', icon: <FaVuejs className="text-emerald-400" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'VS Code', icon: <FaCode className="text-blue-400" /> },
        { name: 'PyCharm', icon: <FaTerminal className="text-green-400" /> },
        { name: 'Figma', icon: <SiFigma className="text-pink-400" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'Gemini', icon: <SiGooglegemini className="text-purple-400" /> },
      ]
    }
  ];

  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto px-6 py-20 relative font-mono text-gray-300"
    >
      
      {/* Heading & Horizontal Line Graphic */}
      <div className="flex items-center space-x-6 mb-16">
        <h2 className="text-3xl font-normal text-white tracking-wide flex items-center">
          <span className="text-[#e879f9] mr-2">#</span>Skills
        </h2>
        <div className="flex-1 h-[1px] bg-[#e879f9]/50 max-w-xs"></div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Decorative Graphics */}
        <div className="lg:col-span-5 hidden lg:flex flex-col space-y-10 relative select-none pointer-events-none -mt-6">
          
          {/* Top Dot Grid Matrix */}
          <div className="grid grid-cols-5 gap-2.5 w-max opacity-50">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white"></div>
            ))}
          </div>

          {/* Outlined Box Graphic with White Border */}
          <div className="w-24 h-24 border border-white ml-12"></div>

          {/* Interlocking Framer Motion / White Outlined Boxes */}
          <div className="relative w-40 h-40 mt-2">
            <div className="absolute top-0 left-0 w-24 h-24 border border-white"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border border-white/70"></div>
          </div>

        </div>

        {/* Right Side: Skill Tables Container with Diagonal Scale and White Borders */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 transform scale-[1.06] origin-top-left">
          {skillGroups.map((group, index) => (
            <div 
              key={index}
              className="border border-white/70 bg-transparent flex flex-col"
            >
              {/* Table Header (Not bold) */}
              <div className="px-4 py-2 border-b border-white/50 text-[#e879f9] text-xs uppercase tracking-widest font-normal bg-[#070d1d]/30">
                {group.title}
              </div>

              {/* Table Content Rows */}
              <div className="p-4 flex flex-wrap gap-2.5">
                {group.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="flex items-center space-x-2 px-3 py-1.5 bg-[#070d1d]/60 border border-cyan-500/20 text-xs text-gray-300 hover:border-[#e879f9] hover:text-white transition-colors cursor-default"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

    </motion.section>
  );
};

export default Skills;