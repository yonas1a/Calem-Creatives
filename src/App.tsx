import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TikTokShowcase } from './components/TikTokShowcase';
import { PricingOverview } from './components/PricingOverview';
import { Deliverables } from './components/Deliverables';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';

export default function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <TikTokShowcase />
        <PricingOverview />
        <Deliverables />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}

