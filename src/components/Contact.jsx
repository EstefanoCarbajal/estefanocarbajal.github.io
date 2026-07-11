import { motion } from 'framer-motion';

const contactLinks = [
  {
    label: 'Correo',
    detail: 'Enviar mensaje',
    href: 'mailto:tefa3099@gmail.com',
    icon: 'mail',
    primary: true,
  },
  {
    label: 'WhatsApp',
    detail: 'Coordinar entrevista',
    href: 'https://wa.me/51970949338',
    icon: 'message',
  },
  {
    label: 'LinkedIn',
    detail: 'Ver perfil',
    href: '#',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    detail: 'Ver codigo',
    href: '#',
    icon: 'github',
  },
];

function ContactIcon({ name }) {
  const paths = {
    mail: (
      <>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    message: (
      <>
        <path d="M5 6.5A6.5 6.5 0 0 1 11.5 0h1A6.5 6.5 0 0 1 19 6.5v.8a6.5 6.5 0 0 1-6.5 6.5H9l-4 3v-4.4A6.5 6.5 0 0 1 1 6.5z" transform="translate(2 3)" />
        <path d="M8 10h8M8 13h5" />
      </>
    ),
    linkedin: (
      <>
        <path d="M6.5 9.5V18" />
        <path d="M6.5 6.2v.1" />
        <path d="M11 18v-4.8a3.2 3.2 0 0 1 6.4 0V18" />
        <path d="M3.5 3.5h17v17h-17z" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4 1.2-4-2-5.5-2.5" />
        <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 18.7 6c.1-.3.6-1.7-.1-3.5 0 0-1.1-.3-3.6 1.3a12.4 12.4 0 0 0-6.5 0C6 2.2 4.9 2.5 4.9 2.5 4.2 4.3 4.7 5.7 4.8 6A4.6 4.6 0 0 0 3.5 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Contact() {
  return (
    <section id="contacto" className="py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="glass-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-12"
        >
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyanGlow/15 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <span className="eyebrow">Contacto</span>
            <h2 className="section-title">Datos de Contacto</h2>
            <h3 className="mt-2 text-lg font-semibold text-slate-200 sm:text-xl">✉️: tefa3099@gmail.com</h3>
            <h3 className="mt-2 text-lg font-semibold text-slate-200 sm:text-xl">📞: +51 970 949 338</h3>
            <p className="section-copy mx-auto">
              Disponible para oportunidades laborales en tecnologia.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={`group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border p-5 transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyanGlow focus:ring-offset-2 focus:ring-offset-night ${
                    link.primary
                      ? 'border-cyanGlow/35 bg-cyanGlow text-slate-950 shadow-glow'
                      : 'border-white/10 bg-white/[0.055] text-slate-100 hover:border-cyanGlow/45 hover:bg-white/[0.09]'
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      link.primary ? 'bg-slate-950/10 text-slate-950' : 'bg-cyanGlow/12 text-cyanGlow'
                    }`}
                  >
                    <ContactIcon name={link.icon} />
                  </span>
                  <span>
                    <span className="block text-base font-extrabold">{link.label}</span>
                    <span className={`mt-1 block text-xs ${link.primary ? 'text-slate-800' : 'text-slate-400'}`}>
                      {link.detail}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
