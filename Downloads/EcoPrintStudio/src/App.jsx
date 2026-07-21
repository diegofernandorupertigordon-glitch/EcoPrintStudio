import Header from './components/Header';
import Hero from './app/components/Hero';
import PiecesSection from './app/components/PiecesSection';
import ServicesSection from './app/components/ServicesSection';
import ContactSection from './app/components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <Header />

      <main>
        <Hero />
        <ServicesSection />
        <PiecesSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;



