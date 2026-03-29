# DRIPD — Premium Vape Shop Website

A full Next.js 14 website for DRIPD, a premium vape shop in Mill Woods, Edmonton AB.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3 + Custom CSS (globals.css)
- **Animations:** GSAP + ScrollTrigger
- **Smooth Scroll:** Lenis (120fps)
- **Icons:** Lucide React
- **Fonts:** Syne (display) + DM Sans (body) via Google Fonts
- **State:** React Context (Cart with localStorage)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, marquee, categories, featured products, about preview, testimonials, FAQ, newsletter, CTA |
| Products | `/products` | Full catalogue with category filter, sort, product modals |
| About | `/about` | Brand story, values, timeline, product preview, FAQ, CTA |
| Contact | `/contact` | Contact form, map embed, info, FAQ, CTA |

## Key Features

- ✅ Floating pill nav (exactly like Vertdure reference)
- ✅ SVG draw preloader with brand name animation (session-based — only shows once)
- ✅ GSAP ScrollTrigger reveal animations
- ✅ Lenis smooth scroll at 120fps
- ✅ Product modal with variant selector, quantity, and add to cart
- ✅ Cart context with localStorage persistence
- ✅ Slide-in cart sidebar
- ✅ Category filter pills on products page
- ✅ Scrolling tag marquee (3 rows, alternating direction)
- ✅ FAQ accordion on every page
- ✅ CTA section on every page
- ✅ Newsletter section on homepage
- ✅ Testimonials on homepage
- ✅ Google Maps embed on contact page
- ✅ Centralised SEO (metadata in layout.tsx)
- ✅ Centralised site config (src/lib/site-config.ts)
- ✅ Fully responsive (mobile, tablet, desktop)

## Customisation

### Change site name, address, hours, social links
Edit `src/lib/site-config.ts` — everything is in one place.

### Add/edit products
Edit `src/lib/products.ts` — products array with full type support.

### Colours and tokens
Edit `:root` variables in `src/styles/globals.css`.

### SEO per page
Each page folder has a `layout.tsx` with its own `metadata` export.

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Fonts

Loaded from Google Fonts in `globals.css`. No additional setup needed.

## GSAP

GSAP is registered and connected to Lenis in `SmoothScroll.tsx`. ScrollTrigger is registered globally. Each page registers its own context and reverts on unmount.

## Age Gate

Not included by default. You can add a simple localStorage-based age gate component and mount it in `layout.tsx` if needed.

## Deployment

Deploy to Vercel with zero config — it's a standard Next.js app.

```bash
npx vercel
```

---

Built by Xtoic Studio.
