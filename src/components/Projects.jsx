import { motion } from 'framer-motion';
import { projectCategories } from '../data/projects.js';

function Projects() {
  const getGridClass = (categoryId) => {
    if (categoryId === 'sitios-web') return 'lg:grid-cols-3';
    if (categoryId === 'sistemas' || categoryId === 'agencia-digital') return 'lg:grid-cols-1';
    return 'lg:grid-cols-2';
  };

  return (
    <section id="proyectos" className="py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Proyectos</span>
          <h2 className="section-title">Proyectos</h2>
          <p className="section-copy">
            Sistemas empresariales, sitios web y agencia digital organizados para mostrar mejor mi experiencia en IA aplicada, SQL y desarrollo web.
          </p>
        </motion.div>

        <div className="mt-12 space-y-14">
          {projectCategories.map((category) => (
            <div key={category.id}>
              <div className="mb-6 flex flex-col gap-3 border-l border-cyanGlow/40 pl-5">
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{category.title}</h3>
                <p className="max-w-3xl leading-7 text-slate-300">{category.summary}</p>
              </div>

              <div className={`grid gap-6 ${getGridClass(category.id)}`}>
                {category.projects.map((project, index) => (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{ duration: 0.65, delay: index * 0.06 }}
                    className="glass-panel group overflow-hidden rounded-3xl"
                  >
                    <div
                      className={`relative bg-gradient-to-br ${project.accent} p-4 ${
                        category.id === 'sistemas' ? 'lg:p-5' : ''
                      }`}
                    >
                      <span className="absolute left-7 top-7 z-10 rounded-full border border-white/15 bg-night/70 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur-xl">
                        {project.previewLabel}
                      </span>
                      <img
                        src={project.image}
                        alt={`Preview de ${project.title}`}
                        className={`h-auto w-full rounded-2xl border border-white/10 object-top shadow-card transition duration-500 group-hover:scale-[1.015] ${
                          category.id === 'sistemas'
                            ? 'aspect-[21/9] bg-night object-cover'
                            : 'aspect-[16/10] object-cover'
                        }`}
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      {category.id === 'sistemas' ? (
                        <div>
                          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
                            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                              <span className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">{project.type}</span>
                              <h4 className="mt-3 font-display text-2xl font-bold text-white">{project.title}</h4>
                              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                              <div className="mt-6 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <span key={tech} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-200">
                                    {tech}
                                  </span>
                                ))}
                              </div>

                              <a href={project.link} target="_blank" rel="noreferrer" className="project-button mx-auto mt-7 flex w-fit">
                                Ver proyecto
                              </a>
                            </div>

                            {project.featuredStack && (
                              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                                  <div>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-mintGlow">Stack tecnico</span>
                                    <h5 className="mt-2 font-display text-xl font-bold text-white">Habilidades y herramientas usadas</h5>
                                  </div>
                                </div>
                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                  {project.featuredStack.map((item) => (
                                    <div key={item.label} className="rounded-2xl border border-white/10 bg-night/35 p-4">
                                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyanGlow">{item.label}</span>
                                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-100">{item.value}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {project.outcomes && (
                            <div className="mt-6 rounded-3xl border border-cyanGlow/15 bg-cyanGlow/[0.055] p-5 sm:p-6">
                              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Impacto funcional</span>
                              <h5 className="mt-2 font-display text-xl font-bold text-white">Que resuelve el sistema</h5>
                              <div className="mt-5 grid gap-3 lg:grid-cols-3">
                                {project.outcomes.map((outcome, outcomeIndex) => (
                                  <div key={outcome} className="rounded-2xl border border-white/10 bg-night/35 p-4">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyanGlow/15 font-display text-xs font-bold text-cyanGlow">
                                      0{outcomeIndex + 1}
                                    </span>
                                    <p className="mt-3 text-sm leading-6 text-slate-200">{outcome}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <>
                          <span className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-100">{project.type}</span>
                          <h4 className="mt-3 font-display text-2xl font-bold text-white">{project.title}</h4>
                          <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-200">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`project-button mt-7 ${category.id === 'sitios-web' ? 'mx-auto flex w-fit' : ''}`}
                          >
                            Ver proyecto
                          </a>
                        </>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
