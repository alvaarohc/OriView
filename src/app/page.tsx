import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Features from '@/app/components/Features';
import CurrentEvents from './components/CurrentEvents';
import Cta from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CurrentEvents />
      <Cta />
      <Footer />
    </>
  );
}
