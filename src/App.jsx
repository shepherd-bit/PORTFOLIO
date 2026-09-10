import Background from './Tools/Background';
import Socials from './components/Socials';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';

export default function App() {
  return (
    <div className="min-h-screen text-white relative">
      <Background />
      <Navbar />
      <Socials />
      <Hero />
      <AboutMe />
    </div>
  );
}