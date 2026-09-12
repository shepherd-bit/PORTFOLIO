import Background from './Tools/Background';
import Socials from './components/Socials';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contacts from './components/Contacts';

export default function App() {
  return (
    <div className="min-h-screen text-white relative">
      <Background />
      <Navbar />
      <Socials />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contacts />
    </div>
  );
}