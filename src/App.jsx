import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const parallaxItems = gsap.utils.toArray('[data-parallax]');

    parallaxItems.forEach((item) => {
      const speed = Number(item.dataset.parallax) || 0.2;

      gsap.to(item, {
        yPercent: speed * -80,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-slate-100">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(56,223,248,0.14),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(143,123,255,0.13),transparent_25%),linear-gradient(135deg,#070914_0%,#0b1020_50%,#060712_100%)]" />
      <div className="fixed inset-0 -z-10 bg-tech-grid bg-[length:54px_54px] opacity-[0.16]" />
      <div data-parallax="0.35" className="pointer-events-none fixed left-[-8rem] top-28 h-80 w-80 rounded-full bg-cyanGlow/15 blur-3xl" />
      <div data-parallax="-0.25" className="pointer-events-none fixed bottom-8 right-[-10rem] h-96 w-96 rounded-full bg-violetGlow/15 blur-3xl" />

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
