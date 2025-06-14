# Hetri Inc. - Next.js Website

Modern, responsive website for Hetri Inc., built with Next.js and TypeScript.

## About Hetri

We develop intelligent embedded systems that integrate seamlessly into everyday life. Our first innovation is a **streaming-enabled smart collar** for doggy daycares, providing pet owners real-time video access to their pets.

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI + Heroicons
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Available Scripts

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Create static export for deployment

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── aboutus/        # About Us page
│   ├── contactus/      # Contact page
│   ├── faq/           # FAQ page
│   └── waitlist/      # Waitlist page
├── components/         # Reusable components
│   ├── Header.tsx     # Navigation header
│   ├── Footer.tsx     # Site footer
│   └── FloatingCTA.tsx # Floating call-to-action
public/                # Static assets
├── favicon.ico        # Site favicon
├── manifest.json      # Web app manifest
└── images/           # Image assets
```

## Features

- 🚀 **Modern Performance**: Next.js 14 with App Router
- 📱 **Responsive Design**: Mobile-first with Tailwind CSS
- ♿ **Accessibility**: WCAG compliant components
- 🎨 **Interactive UI**: Smooth animations with Framer Motion
- 🔍 **Voice Search**: Built-in voice navigation
- 📧 **Contact Forms**: Direct email integration
- 🎯 **SEO Optimized**: Meta tags and structured data

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch.

**Live Site**: [hetri.org](https://hetri.org)

## Contact

- **Website**: [hetri.org](https://hetri.org)
- **Email**: [hello@hetri.org](mailto:hello@hetri.org)
- **LinkedIn**: [Hetri Inc.](https://www.linkedin.com/company/hetri)

---

© 2024 Hetri Inc. All rights reserved.
