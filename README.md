# Portafolio Profesional - Estefano Carbajal

Portafolio web moderno, responsive e interactivo creado con React, Vite, Tailwind CSS, GSAP ScrollTrigger y Framer Motion. El enfoque profesional resalta IA aplicada, bases de datos SQL y desarrollo web. Esta version esta preparada para publicarse gratis en GitHub Pages en `https://estefanocarbajal.github.io`.

## Tecnologias usadas

- React
- Vite
- Tailwind CSS
- GSAP
- ScrollTrigger
- Framer Motion
- JavaScript
- GitHub Pages

## Caracteristicas

- Proyectos separados en sistemas empresariales, sitios web y agencia digital.
- Previews reales en imagen para los proyectos, incluyendo captura del Mini-ERP y sitios publicos.
- Secciones enfocadas en IA aplicada, SQL/MySQL y desarrollo web.
- Animaciones suaves con GSAP ScrollTrigger y Framer Motion.

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Generar build

```bash
npm run build
```

## Desplegar en GitHub Pages

```bash
npm run deploy
```

El proyecto incluye `homepage` en `package.json` y `base: '/'` en `vite.config.js` para funcionar correctamente en `https://estefanocarbajal.github.io`.

## Estructura de carpetas

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    Skills.jsx
    Projects.jsx
    Contact.jsx
    Footer.jsx
  data/
    projects.js
    skills.js
  assets/
    images/
    cv/
  App.jsx
  main.jsx
  index.css
```

Tambien se incluye `public/cv/` para colocar el archivo descargable del CV que usa el boton "Descargar CV".
