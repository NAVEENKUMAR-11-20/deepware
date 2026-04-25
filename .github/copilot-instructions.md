# DenveX Frontend Project Instructions

This workspace is a Vite + React + TypeScript frontend project with Tailwind CSS, Framer Motion, and React Router v6.

## Key commands

- `npm install` — install dependencies
- `npm run dev` — run Vite development server
- `npm run build` — build for production
- `npm run lint` — run ESLint across the project

## Project structure

- `src/App.tsx` — application routes
- `src/main.tsx` — React entry point with `BrowserRouter`
- `src/pages/` — page views (`HomePage`, `About`, `Contact`, `RegistrationPage`, `TermsAndConditions`)
- `src/components/` — reusable UI components and layout pieces
- `src/hooks/useScrollEffects.ts` — custom scroll effects hook
- `index.html`, `vite.config.ts`, and Tailwind/PostCSS config are standard Vite app setup files

## Conventions

- Use React Router v6 route definitions and nested layout under `Layout`
- Keep existing animations, responsive styles, and visual design intact when editing pages
- Prefer component reuse in `src/components/` for shared UI patterns
- Use TypeScript types and JSX semantics consistently

## When editing

- For page-level changes, update `src/pages/*`
- For layout or navigation changes, update `src/components/Layout.tsx` and `src/components/Navbar.tsx`
- When adding sections, preserve mobile-first responsive behavior and Tailwind utility conventions

## Existing workspace custom agents

See `.github/agents/team-hierarchy-modifier.agent.md` for a specialized agent that modifies React team section layouts.
