# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Fitness tracker app based on Skye Mackintosh's 20-minute fitness regime. Built with React 19 + TypeScript + Vite.

## Commands

```bash
npm run dev       # Start dev server (HMR enabled)
npm run build     # Type-check then build for production (tsc -b && vite build)
npm run lint      # Lint with ESLint
npm run preview   # Preview production build locally
```

No test suite is configured yet.

## Front-end Design

For all front-end design decisions — visual style, layout, colours, typography, spacing, and component appearance — refer to [DESIGN.md](./DESIGN.md).

## Architecture

Single-page React app. Entry point is `src/main.tsx` → `src/App.tsx`. No routing or state management libraries are installed yet — the app is at an early stage with the fitness tracking functionality still to be built.

**Key config notes:**
- TypeScript strict mode with `noUnusedLocals`, `noUnusedParameters`, `noUncheckedSideEffectImports` — all must pass for `npm run build`
- ESLint uses the flat config format (`eslint.config.js`) with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- CSS uses custom properties (defined in `src/index.css`) and supports automatic dark mode via `prefers-color-scheme`
