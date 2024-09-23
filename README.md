## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── components/
│       └── astro/
│           └── Highlights.astro
│           └── Navigation.astro
│       └── react/
│           └── BrandLogo.tsx
│           └── Menu.tsx
│           └── MenuButton.tsx
│           └── StaggeredText.tsx
│           └── TypeWriterText.tsx
│   └── generated/
│       └── sanity.types.ts
│   └── layouts/
│       └── PageLayout.astro
│   └── pages/
│       └── post/
│           └── [slug].astro
│       └── index.astro
│   └── sanity/
│       └── lib/
│           └── useLoadQuery.ts
│           └── useUrlForImage.ts
│       └── schemaTypes/
│           └── author.ts
│           └── blockContent.ts
│           └── category.ts
│           └── images.ts
│           └── index.ts
│           └── post.ts
│   └── styles/
│       └── BrandLogo.css
│       └── Highlights.css
│       └── index.css
│       └── Menu.css
│       └── MenuButton.css
│       └── Navigation.css
│       └── PageLayout.css
│   └── utils/
│       └── useStateStore.ts
│   └── env.d.ts
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

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
