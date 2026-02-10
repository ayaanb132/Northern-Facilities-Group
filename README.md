# Northern Facilities Group Website

A premium, conversion-optimized Next.js marketing website with interactive 3D property models for Northern Facilities Group - commercial cleaning and facility management services.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **Animation**: Framer Motion
- **3D**: @react-three/fiber + Three.js + @react-three/drei
- **Content**: MDX for services and specialty pages
- **Forms**: Server Actions + Zod validation
- **Email**: Zoho Mail or Resend (env-var driven)
- **Deployment**: Netlify (Next.js via OpenNext) — **Live:** [northernfacilitiesgroup.ca](https://northernfacilitiesgroup.ca)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Email — Zoho (recommended) or Resend
ZOHO_EMAIL=info@northernfacilitiesgroup.ca
ZOHO_APP_PASSWORD=your_zoho_app_password
RESEND_API_KEY=
CONTACT_EMAIL=info@northernfacilitiesgroup.ca

NEXT_PUBLIC_SITE_URL=https://northernfacilitiesgroup.ca
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
```

#### Get Quote & Walkthrough (and Contact) in your inbox

**Zoho Mail:** Set `ZOHO_EMAIL`, `ZOHO_APP_PASSWORD`, and `CONTACT_EMAIL` in Netlify (and `.env.local`). Emails send via Zoho SMTP. **Alternative: Resend** (free tier is fine): sign up at [resend.com](https://resend.com), create an API key, and add your domain `northernfacilitiesgroup.ca` in the Resend dashboard so “From” is allowed. For quick testing you can use Resend’s sandbox domain first.
2. **Env vars** (locally in `.env.local`, on Netlify in **Site settings → Environment variables**):
   - `RESEND_API_KEY` = your Resend API key  
   - `CONTACT_EMAIL` = the address that receives the emails (e.g. `info@northernfacilitiesgroup.ca`)

After saving and redeploying (on Netlify), every Contact, Quote, and Walkthrough submission will be emailed to `CONTACT_EMAIL` with reply-to set to the submitter.

## Project Structure

```
/app
  /(marketing)
    page.tsx                    # Home
    services/page.tsx           # Services index
    services/[slug]/page.tsx    # Service detail
    specialty/page.tsx          # Specialty services index
    specialty/[slug]/page.tsx   # Specialty detail
    how-it-works/page.tsx
    proof/page.tsx              # Case studies
    pricing/page.tsx
    contact/page.tsx
    get-walkthrough/page.tsx    # Lead conversion page
    privacy/page.tsx
    terms/page.tsx
  /actions                      # Server actions
  layout.tsx                    # Root layout
  globals.css                   # Global styles

/components
  /layout                       # Navbar, Footer
  /sections                     # Hero, Bento, CTA, FAQ, etc.
  /3d                          # 3D scene components
  /forms                       # Form components
  /ui                          # shadcn/ui components

/content
  /services/*.mdx              # Service pages content
  /specialty/*.mdx             # Specialty pages content
  /case-studies/*.mdx          # Case study content

/lib
  site.ts                      # Site configuration
  seo.ts                       # SEO utilities
  analytics.ts                 # Analytics wrapper
  validators.ts                # Zod schemas
  mdx.ts                       # MDX utilities
  modelPipeline.ts            # 3D model configuration
  utils.ts                     # General utilities

/public
  /models                      # GLB models (with LODs)
  /images/posters             # Fallback images for 3D
  /images/og                  # OG images
  /draco                      # Draco decoder
  /basis                      # KTX2 transcoder
  /fonts                      # Custom fonts
```

## Where is the content?

| What you see | Where it’s defined |
|--------------|--------------------|
| **Homepage** (hero title, subtitle, description, badges, features, CTAs) | `app/(marketing)/page.tsx` — props passed into `<Hero />` |
| **Homepage** (Proof strip, Bento, Process, Reporting, Pricing, FAQ, CTA sections) | Same file: `<ProofStrip />`, `<Bento />`, etc. Each section’s copy is inside its component in `components/sections/`. |
| **Nav, footer, site name, stats, tiers, contact info** | `lib/site.ts` — `siteConfig` |
| **Services list & service detail pages** (e.g. Office, Medical, Condo) | `content/services/*.mdx` — one file per service; slug = URL |
| **Specialty list & specialty pages** (e.g. Deep Cleaning, Floor Care) | `content/specialty/*.mdx` |
| **Case studies / proof** | `content/case-studies/*.mdx` and `app/(marketing)/proof/page.tsx` |
| **How it works, Pricing, Contact, Get walkthrough** | `app/(marketing)/how-it-works/page.tsx`, `pricing/page.tsx`, `contact/page.tsx`, `get-walkthrough/page.tsx` — copy is in those files and in `components/sections/` (e.g. Pricing, FAQ). |
| **Privacy, Terms** | `app/(marketing)/privacy/page.tsx`, `terms/page.tsx` |

To change the **main hero headline or body** on the home page, edit the `title`, `subtitle`, `description`, `badges`, and `features` props in `app/(marketing)/page.tsx`.

## Adding Content

### Adding a New Service

1. Create a new MDX file in `/content/services/`:

```mdx
---
title: "Service Name"
slug: "service-slug"
category: "Category"
icon: "IconName"  # Lucide icon name
summary: "Brief description"
outcomes:
  - "Outcome 1"
  - "Outcome 2"
scope:
  - "Area 1"
  - "Area 2"
protocols:
  - "Protocol 1"
frequencyOptions:
  - "Daily"
  - "Weekly"
reporting:
  - "Report type 1"
tiersRecommended:
  - "Professional"
faqs:
  - question: "Question?"
    answer: "Answer."
order: 1
---

## Additional content here...
```

2. The page will be automatically generated at `/services/service-slug`

### Adding a Specialty Service

Similar process in `/content/specialty/`:

```mdx
---
title: "Specialty Name"
slug: "specialty-slug"
category: "Specialty"
summary: "Description"
whenNeeded:
  - "Scenario 1"
process:
  - "Step 1"
inclusions:
  - "Inclusion 1"
order: 1
---
```

## 3D Models

### Adding Models

1. Place GLB files in `/public/models/{property-type}/`:
   - `{property}-lod0.glb` (high detail)
   - `{property}-lod1.glb` (medium detail)
   - `{property}-lod2.glb` (low detail)

2. Add poster fallback image in `/public/images/posters/`:
   - `{property}-poster.jpg`

3. Update model configuration in `/lib/modelPipeline.ts`

### Model Optimization

#### Creating LODs

Use [gltf-transform](https://gltf-transform.dev/) to create LOD versions:

```bash
# Install gltf-transform
npm install -g @gltf-transform/cli

# Create medium LOD (50% triangles)
gltf-transform simplify model.glb model-lod1.glb --ratio 0.5

# Create low LOD (25% triangles)
gltf-transform simplify model.glb model-lod2.glb --ratio 0.25
```

#### Draco Compression

```bash
gltf-transform draco model.glb model-draco.glb
```

#### KTX2 Textures

```bash
# Install toktx
# Then convert textures
gltf-transform ktx model.glb model-ktx.glb
```

### Draco/KTX2 Decoders

Place decoders in `/public/`:
- `/public/draco/` - Draco decoder files
- `/public/basis/` - KTX2/Basis transcoder files

Get decoders from Three.js:
- [Draco Decoder](https://github.com/mrdoob/three.js/tree/dev/examples/jsm/libs/draco)
- [Basis Transcoder](https://github.com/mrdoob/three.js/tree/dev/examples/jsm/libs/basis)

## Development

### Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Linting
npm run lint
npm run lint:fix

# Type checking
npm run typecheck

# Format code
npm run format
```

### Code Quality

- ESLint with Next.js, TypeScript, and React plugins
- Prettier for formatting
- TypeScript strict mode
- Husky pre-commit hooks (optional, add if needed)

## Deployment

The site is deployed on **Netlify**. Netlify supports this Next.js app with zero config via the [OpenNext adapter](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/) (App Router, Server Actions, and Image Optimization all work).

### Netlify

1. In [Netlify](https://app.netlify.com), connect the repo **Northern-Facilities-Group** (or use **Add site → Import an existing project**).
2. Netlify will detect Next.js and set **Build command** `npm run build` and use the Next.js/OpenNext pipeline. A `netlify.toml` in the repo is optional and can override build settings.
3. Set **Environment variables** in Site settings → Environment variables (e.g. `RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL`).
4. Deploy. The site will be at `https://<your-site-name>.netlify.app` (custom domain can be added in Domain settings).

### Manual Build

```bash
npm run build
npm start
```

## Performance Targets

- Lighthouse Score: 90+ on Home, Services Index
- LCP: < 2.5s on mobile
- No CLS from navigation/footer
- 3D deferred loading, poster fallback for low-end devices

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`):
- Lint on push/PR
- Type check on push/PR
- Build verification on push/PR

## License

Proprietary - Northern Facilities Group
