import { useEffect } from 'react';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      lerp: 0.08,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const ringTween = gsap.to('.rings span', {
      rotate: 1.4,
      scale: 1.015,
      duration: 10,
      stagger: 1.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
      ringTween.kill();
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="app">
      <div className="background-glow" />
      <div className="rings" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Portfolio />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;