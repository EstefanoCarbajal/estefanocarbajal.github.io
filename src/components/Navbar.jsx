import { motion } from 'framer-motion';

const navItems = [
  { label: 'Perfil', href: '#inicio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

function Navbar() {
  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/70 backdrop-blur-2xl"
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#inicio" className="font-display text-lg font-bold text-white">
          Estefano Carbajal<span className="text-cyanGlow">.</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contacto" className="secondary-button hidden px-5 lg:inline-flex">
          Hablemos
        </a>
      </nav>
    </motion.header>
  );
}

export default Navbar;
