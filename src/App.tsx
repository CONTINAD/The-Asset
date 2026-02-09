import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ass-dark text-white font-sans selection:bg-ass-orange selection:text-black">
      <Hero />
      <About />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;
