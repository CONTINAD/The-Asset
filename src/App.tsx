import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import BuyBackBot from './components/BuyBackBot';
import Chart from './components/Chart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ass-dark text-white font-sans selection:bg-ass-accent selection:text-black">
      <Hero />
      <About />
      <Tokenomics />
      <BuyBackBot />
      <Chart />
      <Footer />
    </div>
  );
}

export default App;
