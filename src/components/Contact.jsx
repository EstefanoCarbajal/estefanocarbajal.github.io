import { motion } from 'framer-motion';

const contactLinks = [
  { label: 'Correo', href: 'mailto:tuclickweb.agencia@gmail.com' },
  { label: 'WhatsApp', href: 'https://wa.me/51961323642' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
];

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
          <div className="relative max-w-3xl">
            <span className="eyebrow">Contacto</span>
            <h2 className="section-title">Construyamos una solucion digital que trabaje por tu negocio.</h2>
            <p className="section-copy">
              Estoy disponible para proyectos web, tiendas virtuales, landing pages y sistemas internos con enfoque practico.
            </p>
          </div>

          <div className="relative mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className={index === 0 ? 'primary-button' : 'secondary-button'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
