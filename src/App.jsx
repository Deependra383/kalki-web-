import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function App() {
  const handleContact = () => {
    window.location.assign('mailto:kalkiconsulting.main@gmail.com');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar onContact={handleContact} />
      <main className="flex-grow">
        <HeroSection onContact={handleContact} />
        <StatsBar />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer onContact={handleContact} />
    </div>
  );
}
