# Pokemon Browser

A responsive Pokemon browser built with React, TypeScript, Vite, React Query, Axios, Tailwind CSS, and React Router.

The application lets users browse Pokemon, switch between pagination and load-more list modes, and open a detailed Pokemon profile screen that follows the provided assessment reference design.

### [Live Link](pokemon-browser-gold.vercel.app)

## Features

- Pokemon list with responsive cards and official artwork.
- Pagination mode with page controls.
- Load-more mode powered by infinite queries.
- Pokemon details page with image, type badge, height, weight, base stats, abilities, and base experience.
- Loading, error, retry, and empty states.
- Lazy-loaded list images for better initial page performance.
- Lazy-loaded routes for list, detail, and not-found screens.
- Subtle UI animation for cards, detail sections, and animated base-stat bars.
- Accessible controls, focus states, reduced-motion support, and semantic page states.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- TanStack React Query
- Axios
- Tailwind CSS
- shadcn-style local UI components
- Lucide React

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

The project uses a feature-based structure while keeping shared application utilities separate.

```text
src/
  app/
    providers/
    router/
  features/
    pokemon/
      api/
      components/
      constants/
      hooks/
      pages/
      routes/
      types/
      utils/
  shared/
    components/
    lib/
    types/
    ui/
```

## Implementation Notes

- Data fetching is handled with React Query and Axios.
- Query functions receive the React Query `signal` and pass it to Axios, allowing requests to be cancelled when they are no longer needed.
- Lazy-loaded routes for list, detail, and not-found screens.
- List data supports both traditional pagination and infinite loading.
- Detail data is fetched by route param, so `/pokemon/:id` renders the selected Pokemon profile.
- Routes are split with React `lazy` and `Suspense` so page bundles load only when needed.
- List images use native lazy loading to reduce unnecessary network work during the initial page load.
- UI states are handled explicitly: loading indicators, user-friendly errors, retry actions, and empty states.
- Motion is intentionally light and respects `prefers-reduced-motion`.
- Shared UI primitives follow a shadcn-style setup with local components, `cva`, `clsx`, and `tailwind-merge`.
- The detail page is split into focused components for header, overview, stats, abilities, and experience.

## Assessment Coverage

- Uses a modern React setup with TypeScript.
- Fetches data from the PokeAPI.
- Implements Pokemon listing and detail views.
- Includes pagination and load-more behavior.
- Handles loading, error, retry, and empty states.
- Follows the supplied visual references closely, including the detail screen layout, typography, colors, spacing, and stat bars.
- Adds polished interactions and animation as an additional UX improvement.
