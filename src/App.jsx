import Background from './Tools/Background';
import Socials from './components/Socials';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen text-white relative">
      <Background />
      <Navbar />
      <Socials />
    </div>
  );
}