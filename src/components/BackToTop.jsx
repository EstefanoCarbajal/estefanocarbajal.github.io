import { useEffect, useState } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const skillsSection = document.getElementById('skills');
      setIsVisible(Boolean(skillsSection) && window.scrollY >= skillsSection.offsetTop - 80);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyanGlow/35 bg-night/80 text-2xl font-bold leading-none text-cyanGlow shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-mintGlow/60 hover:bg-cyanGlow hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-mintGlow focus:ring-offset-2 focus:ring-offset-night sm:bottom-7 sm:right-7 ${
        isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

export default BackToTop;
