# Pruebas con Astro

clona el repo y ejecuta `npm install`

```sh
npm install
```

## 🚀 estructura basica del proyecto

La siguiente estructura básica del proyecto:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página es expuesta como una ruta basada en su nombre de archivo.

No hay nada especial sobre `src/components/`, pero es aquí donde podemos poner cualquier componente de Astro/React/Vue/Svelte/Preact.

Cualquier recurso estático, como imágenes, se puede colocar en el directorio `public/`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Si queres mas info sobre astro

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
