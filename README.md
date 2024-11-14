## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├───components
│   │   ├───astro
│   │   └───react
│   │       ├───about
│   │       ├───common
│   │       ├───contact
│   │       ├───home
│   │       └───navigation
│   ├───layouts
│   ├───lib
│   │   ├───constants
│   │   ├───enums
│   │   ├───generated
│   │   ├───hooks
│   │   ├───icons
│   │   │   └───brands
│   │   ├───schema
│   │   └───ui
│   ├───pages
│   │   └───post
│   ├───sanity
│   │   ├───lib
│   │   └───schemaTypes
│   └───styles
└── .env
└── .gitignore
└── .prettierrc.mjs
└── astro.config.ts
└── package-lock.json
└── package.json
└── README.md
└── sanity.config.ts
└── tailwind.config.ts
└── tsconfig.json
```

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
