import { motion } from 'framer-motion';
import { focusAreas, skills } from '../data/skills.js';

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">Habilidades principales</h2>
          <p className="section-copy">
            Mi perfil combina IA, desarrollo de software/web, bases de datos SQL y gestión de proyectos para construir soluciones técnicas con criterio, orden y aprendizaje continuo.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel rounded-3xl p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyanGlow/15 font-display text-sm font-bold text-cyanGlow">
                0{index + 1}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">{area.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{area.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.035 }}
                className="glass-panel rounded-2xl px-4 py-5 text-center text-sm font-bold text-slate-100 transition hover:-translate-y-1 hover:border-cyanGlow/35 hover:bg-cyanGlow/10 sm:text-base"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
