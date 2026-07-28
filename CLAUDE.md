# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hetri Inc's corporate website and Professional Animal Works (PAW) platform demo, built with Next.js 14 and deployed as a static site to GitHub Pages at https://hetri.org.

## Build & Development Commands

```bash
# Development
npm run dev                    # Start development server on http://localhost:3000

# Production Build
npm run build                  # Build for production (includes sitemap, CNAME copy)

# Maintenance
npm run clean:artifacts        # Remove build artifacts (_next, out, HTML files)
npm run lint                   # Run ESLint
```

## Deployment Process

**Current Method: Manual Root Directory Deployment**

The site deploys from the root of the `main` branch (not GitHub Actions). After building:

1. `npm run build` generates static files in `out/`
2. Post-build automatically:
   - Generates sitemap via next-sitemap
   - Copies CNAME to `out/CNAME`
3. Manually copy `out/` contents to repository root
4. Commit and push to deploy

**Note:** `.github/workflows/deploy.yml.disabled` exists but is not currently used. The manual process allows fine-grained control over deployments.

## Architecture

### Route Structure

- **`(main)` route group**: Marketing pages (home, about, contact, PAW product page)
  - Uses shared Header/Footer layout
  - Client/Server component split pattern (e.g., `page.tsx` → `PageClient.tsx`)

- **`paw-demo`**: Standalone PAW platform demo
  - Separate layout without Header/Footer
  - Full-featured dashboard simulation with 40+ feature modules

### Component Organization

```
src/
├── app/
│   ├── (main)/              # Marketing site routes
│   │   ├── layout.tsx       # Shared layout with Header/Footer
│   │   ├── page.tsx         # Home page
│   │   ├── aboutus/
│   │   ├── contactus/
│   │   └── paw/             # PAW product page with interactive demos
│   └── paw-demo/            # PAW platform demo
│       ├── layout.tsx       # Standalone dashboard layout
│       └── page.tsx         # Renders DashboardApp
├── components/
│   ├── Header.tsx           # Main site navigation
│   ├── Footer.tsx
│   ├── ContactForm.tsx      # Contact form with client-side handling
│   ├── StructuredData.tsx   # JSON-LD for SEO
│   └── dashboard/           # PAW demo components
│       ├── DashboardApp.tsx          # Main dashboard container
│       ├── DashboardSidebar.tsx      # Navigation sidebar
│       ├── TopHeader.tsx             # Dashboard header
│       ├── OverviewDashboard.tsx     # Default dashboard view
│       ├── [Feature]Management.tsx   # 40+ feature modules
│       ├── ui/                       # shadcn/ui components
│       └── figma/                    # Figma-exported assets
└── styles/
    └── reveal.css           # Scroll-triggered animations
```

### Key Technologies

- **Framework**: Next.js 14 with App Router, static export (`output: 'export'`)
- **Styling**: Tailwind CSS with custom Hetri/PAW color schemes
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Typography**: Syne Mono (Google Fonts, monospace aesthetic)
- **Animations**: Framer Motion + custom Tailwind animations
- **SEO**: next-sitemap, structured data, comprehensive meta tags

### Styling System

**Color Schemes** (see [tailwind.config.js](tailwind.config.js)):
- `hetri.*`: Dark theme with green accents (#78a18a primary)
- `paw.*`: Light/dark variations for PAW branding
- shadcn/ui CSS variables for semantic colors

**Custom Animations**:
- `fade-in`, `slide-up`: Entry animations
- `pulse-slow`, `ambient-flow`: Ambient effects
- Scroll-based reveals via `reveal.css`

## Development Patterns

### Client/Server Component Split

Marketing pages use a consistent pattern for RSC optimization:

```typescript
// page.tsx (Server Component - handles metadata)
export const metadata: Metadata = { /* ... */ }
export default function Page() {
  return <PageClient />
}

// PageClient.tsx (Client Component - handles interactivity)
'use client'
export default function PageClient() { /* ... */ }
```

### Dashboard Architecture

The PAW demo (`DashboardApp.tsx`) is a single-page application that:
- Manages view state via `activeView` string
- Conditionally renders 40+ feature modules based on sidebar selection
- Uses shadcn/ui for consistent component design
- Implements mock data for realistic platform simulation

### Image Handling

Next.js Image component cannot be used with static export. Images use:
- Standard `<img>` tags with `unoptimized: true` in next.config.js
- `ImageWithFallback` component for dashboard images
- Icons from Lucide React

## Important Configuration

### Static Export Settings ([next.config.js](next.config.js))

```javascript
{
  output: 'export',           // Required for GitHub Pages
  trailingSlash: true,        // Required for proper routing
  images: { unoptimized: true } // Required for static export
}
```

### Custom Domain ([CNAME](CNAME))

Contains `hetri.org` - must be copied to `out/` during build (handled by postbuild script).

### SEO Configuration

- **Sitemap**: Generated via next-sitemap to `sitemap.xml` and `sitemap-0.xml`
- **Robots.txt**: Auto-generated with sitemap reference
- **.nojekyll**: Present in root to disable Jekyll processing on GitHub Pages
- **Structured Data**: JSON-LD via `StructuredData.tsx` component

## Common Tasks

### Adding a New Marketing Page

1. Create `src/app/(main)/newpage/page.tsx` (server component for metadata)
2. Create `src/app/(main)/newpage/NewPageClient.tsx` (client component)
3. Add navigation link to [Header.tsx](src/components/Header.tsx)
4. Update sitemap exclusions in [next-sitemap.config.js](next-sitemap.config.js) if needed

### Adding a Dashboard Feature Module

1. Create `src/components/dashboard/NewFeature.tsx` component
2. Import in [DashboardApp.tsx](src/components/dashboard/DashboardApp.tsx)
3. Add view case to the conditional render
4. Add navigation item to [DashboardSidebar.tsx](src/components/dashboard/DashboardSidebar.tsx)

### Modifying Colors/Theme

Edit [tailwind.config.js](tailwind.config.js):
- `hetri.*` colors for marketing site
- `paw.*` colors for PAW branding
- CSS variables in [globals.css](src/app/globals.css) for shadcn/ui theming

## Files to Never Commit

Per [.gitignore](.gitignore), source files are intentionally hidden from public repo:
- `src/` (listed in .gitignore but tracked in git)
- `package*.json` (listed in .gitignore but tracked in git)
- Config files (listed in .gitignore but tracked in git)

**Note:** Despite .gitignore entries, these files ARE tracked. The .gitignore may be intended for a different deployment workflow.

## Source Backup Repository

The source (`src/`, `public/`, configs) is intentionally untracked here, but it IS backed up to a private repo via a second git dir at `.git-src` in this same working directory:

- Remote: `git@github.com:hetri-courses/hetri-site-src.git` (private)
- Run commands as: `git --git-dir=.git-src --work-tree=. <cmd>` from the repo root
- Deploy artifacts are excluded via `.git-src/info/exclude` (not the shared `.gitignore`)
- After changing source, back it up: `git --git-dir=.git-src --work-tree=. add -A && git --git-dir=.git-src --work-tree=. commit -m "..." && git --git-dir=.git-src push`
- Note: because the shared `.gitignore` ignores `src/` etc., brand-new source files may need `add -f` the first time; already-tracked files update normally with `add -A`

## GitHub Pages Configuration

The site uses the **root directory deployment method**:
- Built files (index.html, _next/, etc.) exist in repository root
- GitHub Pages serves directly from root of `main` branch
- No GitHub Actions workflow currently active (deploy.yml.disabled exists)

To check GitHub Pages settings: Repository Settings → Pages → ensure "Deploy from a branch" with "main" and "/ (root)" selected.
