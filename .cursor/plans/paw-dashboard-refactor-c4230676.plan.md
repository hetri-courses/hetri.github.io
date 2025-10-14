<!-- c4230676-6b09-4bcb-b867-12ff76ddc0d3 9982f0f2-c858-4d95-9630-060e15158fa4 -->
# Fix PAW Dashboard - Standalone with Tailwind Colors

## Problem

- PAW dashboard is inheriting root layout's Header/Footer
- Using CSS variables approach when main site uses Tailwind utility classes
- Navigation conflict between Hetri and PAW headers

## Solution

### 1. Create Standalone Layout for PAW Dashboard

**File: `src/app/paw-demo/layout.tsx`**

Remove the wrapper approach and create a completely new HTML structure that bypasses the root layout:

```tsx
import type { Metadata } from 'next'
import { Toaster } from '@/components/dashboard/ui/sonner'
import './paw-demo.css'

export const metadata: Metadata = {
  title: 'PAW Facility Management Dashboard',
  description: 'Professional Animal Works facility management dashboard',
}

export default function PawDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
```

### 2. Create Minimal PAW-specific CSS

**File: `src/app/paw-demo/paw-demo.css`**

Minimal CSS with only the PAW CSS variables needed for Radix UI components (they require CSS variables):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --paw-primary: #78a18a;
  --paw-secondary: #dbe7c7;
  
  /* Minimal variables for Radix UI components */
  --background: 255 255 255;
  --foreground: 33 37 41;
  --primary: 120 161 138;
  --primary-foreground: 255 255 255;
  --border: 233 236 239;
  --ring: 120 161 138;
  --radius: 0.5rem;
}
```

### 3. Update DashboardApp Component

**File: `src/components/dashboard/DashboardApp.tsx`**

Change from CSS variable classes to Tailwind utility classes:

```tsx
// Line 154: Remove paw-theme class and use Tailwind utilities
return (
  <div className="min-h-screen bg-white">
```

### 4. Update DashboardSidebar Component

**File: `src/components/dashboard/DashboardSidebar.tsx`**

Replace CSS variable usage with Tailwind PAW colors:

- `bg-sidebar` → `bg-white`
- `text-sidebar-foreground` → `text-gray-600`
- `bg-sidebar-primary` → `bg-[#78a18a]`
- `hover:bg-sidebar-accent` → `hover:bg-gray-50`

### 5. Update Tailwind Config

**File: `tailwind.config.js`**

Add PAW colors to the theme (keep existing Hetri colors):

```js
colors: {
  hetri: { /* existing */ },
  paw: {
    primary: '#78a18a',
    'primary-dark': '#6b8f7c',
    'primary-light': '#85ae97',
    secondary: '#dbe7c7',
    'secondary-dark': '#c9d9b0',
    'secondary-light': '#e8f0d8',
    accent: '#2c3e50',
    light: '#f8f9fa',
    dark: '#1a252f',
  },
  // Keep existing color variables for backward compatibility
  border: "hsl(var(--border))",
  // ... etc
}
```

### 6. Remove Old CSS File Import

**File: `src/app/paw-demo/layout.tsx`**

Remove: `import '../dashboard-globals.css'`

### 7. Update Key Dashboard Components with Tailwind Classes

Update these files to use `bg-paw-primary`, `text-paw-dark`, etc. instead of CSS variables:

- `src/components/dashboard/OverviewDashboard.tsx` - cards and metrics
- `src/components/dashboard/PetsManagement.tsx` - buttons and badges
- `src/components/dashboard/TopHeader.tsx` - header background

## Files to Modify

1. `src/app/paw-demo/layout.tsx` - New standalone layout
2. `src/app/paw-demo/paw-demo.css` - New minimal CSS file
3. `tailwind.config.js` - Add PAW color palette
4. `src/components/dashboard/DashboardApp.tsx` - Remove theme class
5. `src/components/dashboard/DashboardSidebar.tsx` - Use Tailwind utilities
6. `src/components/dashboard/TopHeader.tsx` - Use Tailwind utilities
7. `src/components/dashboard/OverviewDashboard.tsx` - Use PAW colors

## Files to Delete

- `src/app/dashboard-globals.css` (no longer needed)

### To-dos

- [x] Add PAW color variables to src/styles/globals.css with .paw-theme wrapper
- [x] Add .paw-theme class to App.tsx root element
- [x] Rename component files: ChildrenManagement, ChildEnrollment, ChildReview, StaffManagement, StaffSchedule
- [x] Update TypeScript interfaces and types throughout (Child→Pet, Staff→Worker)
- [x] Update all variable names, function names, and parameters with new terminology
- [x] Update all user-facing text, labels, titles, and descriptions
- [x] Update DashboardSidebar navigation menu items
- [x] Update OverviewDashboard metrics and content
- [x] Update package.json, index.html, and README.md with PAW branding
- [x] Run npm install and npm run dev to test all changes locally