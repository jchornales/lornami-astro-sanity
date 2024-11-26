## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
└── 📁src
    └── 📁components
        └── 📁astro
            └── Footer.astro
            └── Hero.astro
            └── Highlights.astro
        └── 📁react
            └── 📁about
                └── ImagesCarousel.tsx
                └── TestimonialCarousel.tsx
            └── 📁common
                └── BookingForm.tsx
                └── CategoryFilter.tsx
                └── EmbeddedMap.tsx
                └── ImageLists.tsx
                └── OtherPostsCarousel.tsx
                └── PostCard.tsx
                └── SeeMore.tsx
                └── Sort.tsx
                └── StaggeredText.tsx
                └── TypeWriterText.tsx
            └── 📁contact
                └── ContactForm.tsx
            └── 📁home
                └── Banner.tsx
                └── Questions.tsx
            └── 📁navigation
                └── BrandLogo.tsx
                └── Menu.tsx
                └── MenuButton.tsx
                └── Navigation.tsx
            └── 📁services
                └── Pricing.tsx
    └── 📁layouts
        └── PageLayout.astro
    └── 📁lib
        └── 📁constants
            └── bookingFormFields.ts
            └── formFields.ts
        └── 📁enums
            └── sortValue.ts
        └── 📁generated
            └── sanity.types.ts
        └── 📁hooks
            └── useIsAtViewportTop.ts
            └── useStateStore.ts
        └── 📁icons
            └── 📁brands
                └── ActivityPub.astro
                └── AIB.astro
                └── AlliedModders.astro
                └── FourChan.astro
                └── Pelican.astro
                └── PetsAtHome.astro
                └── TheBoringCompany.astro
                └── TietoEVRY.astro
                └── Toyota.astro
                └── Virgin.astro
                └── Zenodo.astro
            └── ArrowRight.astro
            └── ChatBubble.astro
            └── ChatBubble.tsx
            └── ChevronDoubleDown.astro
            └── ChevronDown.astro
            └── Envelope.astro
            └── MapPin.astro
            └── Phone.astro
        └── 📁schema
            └── BookingFormSchema.ts
            └── ContactFormSchema.ts
        └── 📁ui
            └── accordion.tsx
            └── aspect-ratio.tsx
            └── breadcrumb.tsx
            └── button.tsx
            └── calendar.tsx
            └── card.tsx
            └── carousel.tsx
            └── dialog.tsx
            └── form.tsx
            └── input.tsx
            └── label.tsx
            └── popover.tsx
            └── select.tsx
            └── separator.tsx
            └── sonner.tsx
            └── textarea.tsx
        └── main.ts
        └── utils.ts
    └── 📁pages
        └── 📁gallery
            └── [slug].astro
            └── index.astro
        └── about-us.astro
        └── contact-us.astro
        └── index.astro
        └── services.astro
    └── 📁sanity
        └── 📁lib
            └── useCompileImages.ts
            └── useCompilePosts.ts
            └── useLoadQuery.ts
            └── useUrlForImage.ts
        └── 📁schemaTypes
            └── aboutUs.ts
            └── author.ts
            └── blockContent.ts
            └── brandInformation.ts
            └── category.ts
            └── content.ts
            └── faqs.ts
            └── index.ts
            └── post.ts
            └── pricing.ts
            └── testimonials.ts
    └── 📁styles
        └── AboutUs.css
        └── Banner.css
        └── BrandLogo.css
        └── Footer.css
        └── Hero.css
        └── ImageLists.css
        └── index.css
        └── Menu.css
        └── MenuButton.css
        └── Navigation.css
        └── PageLayout.css
        └── Pricing.css
        └── Questions.css
        └── Services.css
    └── env.d.ts
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
