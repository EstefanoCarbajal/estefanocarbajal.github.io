import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const visualRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(visualRef.current, {
        y: 90,
        scale: 0.93,
        rotateX: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: '#inicio',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(layerRef.current, {
        y: -80,
        x: 24,
        ease: 'none',
        scrollTrigger: {
          trigger: '#inicio',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-28">
      <div ref={layerRef} className="pointer-events-none absolute right-8 top-28 hidden h-64 w-64 rounded-full border border-cyanGlow/20 lg:block" />
      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Portafolio profesional 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
            className="font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
          >
            Estefano Carbajal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-xl font-semibold text-cyan-100 sm:text-2xl"
          >
            Desarrollo Web, IA Aplicada & Bases de Datos SQL
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Creo sitios web, sistemas empresariales y soluciones digitales con IA aplicada, SQL y desarrollo web para resolver problemas reales de negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a href="#proyectos" className="primary-button">
              Ver proyectos
            </a>
            <a href="#contacto" className="secondary-button">
              Contactarme
            </a>
            <a href="/cv/Estefano-Carbajal-CV.pdf" className="icon-button" download>
              Descargar CV
            </a>
          </motion.div>
        </div>

        <motion.div
          ref={visualRef}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-cyanGlow/10 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[1.5rem] p-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-mintGlow" />
              <span className="ml-3 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">estefano.dev</span>
            </div>
            <div className="grid gap-4 pt-5 sm:grid-cols-[0.82fr_1.18fr]">
              <div className="rounded-2xl border border-cyanGlow/25 bg-cyanGlow/10 p-5">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-cyanGlow/30 via-white/10 to-violetGlow/30 font-display text-4xl font-bold text-white shadow-glow">
                  EC
                </div>
                <div className="mt-5 space-y-3">
                  <span className="block h-3 rounded-full bg-white/25" />
                  <span className="block h-3 w-3/4 rounded-full bg-cyanGlow/45" />
                  <span className="block h-3 w-1/2 rounded-full bg-mintGlow/45" />
                </div>
              </div>
              <div className="space-y-4">
                {['IA aplicada', 'SQL & MySQL', 'Desarrollo Web'].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{item}</span>
                      <span className="text-xs text-cyan-100">0{index + 1}</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-cyanGlow to-mintGlow" style={{ width: `${78 + index * 7}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
