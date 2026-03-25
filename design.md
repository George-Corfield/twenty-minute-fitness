# DailyReps — Design System

## Overview

Dark-first mobile PWA. The aesthetic sits between a premium fitness tracker and a focused productivity tool — serious, typographically strong, with restraint on decoration. Colour is used sparingly and purposefully: one primary blue accent, one warm secondary for alerts/PRs, the rest is surface depth.

---

## Colour Palette

All colours are defined as Tailwind custom tokens. Use the token names throughout, never raw hex in component code.

| Token | Hex | Usage |
|---|---|---|
| `background` | `#0e0e0e` | Page/app background |
| `surface` | `#0e0e0e` | Base surface (same as bg) |
| `surface-container-low` | `#131313` | Cards, panels |
| `surface-container` | `#1a1a1a` | Elevated cards |
| `surface-container-high` | `#20201f` | Nested elements |
| `surface-container-highest` | `#262626` | Highest elevation, nav bar, chips |
| `surface-bright` | `#2c2c2c` | Hover states |
| `primary` | `#85adff` | Primary accent — active states, highlights, key numbers |
| `primary-container` | `#6c9fff` | Gradient pair for CTAs |
| `on-primary` | `#002c65` | Text/icons on primary backgrounds |
| `secondary` | `#ff7354` | PRs, warnings, streaks, urgent states |
| `on-secondary` | `#460700` | Text on secondary backgrounds |
| `tertiary` | `#fab0ff` | Recovery, supplementary highlights |
| `on-surface` | `#ffffff` | Primary text |
| `on-surface-variant` | `#adaaaa` | Secondary/muted text, labels |
| `outline` | `#767575` | Borders, dividers |
| `outline-variant` | `#484847` | Subtle borders |
| `error` | `#ff716c` | Error states |

### Glow Effects
Primary glow: `drop-shadow-[0_0_8px_rgba(133,173,255,0.4)]` — used on active nav items and key metrics.
Secondary glow: `drop-shadow-[0_0_8px_rgba(255,115,84,0.4)]` — used on PR/milestone moments.

---

## Typography

Two typefaces. Never mix roles.

| Family | Token | Role |
|---|---|---|
| Manrope | `font-headline` | All headings, large numbers, workout names, screen titles |
| Inter | `font-body` / `font-label` | All body copy, labels, navigation, metadata |

### Scale

| Use | Class |
|---|---|
| Screen title (hero) | `font-headline text-4xl md:text-5xl font-extrabold tracking-tighter` |
| Section heading | `font-headline text-xl font-bold tracking-tight` |
| Card title | `font-headline text-lg font-bold` |
| Large metric number | `font-headline text-4xl–6xl font-black tracking-tighter` |
| Small metric number | `font-headline text-2xl font-bold` |
| Navigation label | `font-['Inter'] text-[10px] font-bold uppercase tracking-widest` |
| Eyebrow / category label | `font-label text-[10px] font-bold uppercase tracking-[0.2em]` |
| Body / metadata | `font-label text-xs–sm text-on-surface-variant` |

**Note:** The app name "DAILYREPS" always renders as `uppercase italic` in Manrope — this is a deliberate brand treatment, not a general heading style.

---

## Spacing & Layout

- Max content width: `max-w-lg mx-auto` on mobile-primary screens, `max-w-5xl` on history/dashboard
- Top padding (below fixed header): `pt-24`
- Bottom padding (above fixed nav): `pb-32`
- Horizontal padding: `px-6`
- Card gap grid: `gap-4`
- Section spacing: `mb-10` to `mb-12`

---

## Border Radius

Defined in Tailwind config — notably tighter than default Tailwind:

| Token | Value | Use |
|---|---|---|
| `DEFAULT` | `0.125rem` | Base (almost none) |
| `rounded-lg` | `0.25rem` | Subtle rounding |
| `rounded-xl` | `0.5rem` | Cards, exercise rows, stat panels |
| `rounded-2xl` | Tailwind default `1rem` | Large cards, nav bar |
| `rounded-full` | `0.75rem` | Pills, tags, circular buttons |

---

## Components

### Header (Fixed)
```
Fixed, full-width, z-50
Height: h-16
Background: bg-[#0e0e0e]/70 backdrop-blur-xl
Gradient: bg-gradient-to-b from-[#131313] to-transparent
Layout: flex justify-between items-center px-6
Left: hamburger menu icon (text-zinc-500)
Centre: DAILYREPS wordmark (Manrope, uppercase, italic, font-black)
Right: circular avatar (w-8 h-8, rounded-full, border border-outline-variant/20)
```

### Bottom Navigation (Fixed)
```
Fixed, full-width, bottom-0, z-50
Height: h-20, padding: px-4 pb-4
Background: bg-[#262626]/70 backdrop-blur-lg
Border radius top: rounded-t-2xl
Shadow: shadow-[0_-10px_30px_rgba(0,0,0,0.5)]
4 tabs: Dashboard | Builder | Workout | History
```

**Tab — Inactive:**
```
text-zinc-500 opacity-60
hover:opacity-100 transition-all
active:scale-90
Icon (outlined fill=0) + label below
```

**Tab — Active:**
```
text-[#85adff] (primary)
scale-110
drop-shadow-[0_0_8px_rgba(133,173,255,0.4)]
Icon (filled, font-variation-settings: 'FILL' 1) + label below
```

**Tab labels** always: `font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1`

### Cards
```
Base card: bg-surface-container-low rounded-xl p-5
Hover: hover:bg-surface-container-highest transition-all
Accent left border variant: border-l-4 border-primary
```

### Exercise Row
```
bg-surface-container-low p-4 rounded-xl
flex items-center gap-4
Left: 48×48 icon container (bg-surface-container-highest, rounded-lg, border border-outline-variant/10)
Middle: name (font-label text-sm font-bold) + sub-label (text-[10px] uppercase tracking-wider text-on-surface-variant)
Right: action button (rounded-full, w-10 h-10)
  - Unselected: bg-surface-container-highest border border-outline-variant/20, icon text-primary
  - Selected: bg-primary text-on-primary, checkmark icon
```

### Primary CTA Button
```
Full-width, h-20
bg-gradient-to-r from-primary to-primary-container
rounded-xl
flex items-center justify-between px-8
Shadow: shadow-[0_10px_30px_rgba(0,0,0,0.3)]
active:scale-[0.98] transition-all
Left: small eyebrow label + headline text (text-on-primary)
Right: circular play icon (w-12 h-12, bg-on-primary/10, rounded-full)
```

### Stat/Bento Cards
```
Aspect-square small cards: bg-surface-container-highest rounded-2xl p-5
Wide cards: col-span-2 bg-surface-container-low rounded-2xl p-6
Metric label: font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant
Metric value: font-headline text-2xl–4xl font-bold tracking-tighter
```

### Circular Timer
```
Container: w-64 h-64, relative flex items-center justify-center
Outer ring: absolute inset-0 rounded-full border-[12px] border-surface-container-high
Progress: SVG circle, stroke="currentColor" (text-primary), -rotate-90 transform
  cx="128" cy="128" r="122" stroke-width="12"
  stroke-dasharray="766" (full circumference), stroke-dashoffset controls fill
Glow: drop-shadow-[0_0_8px_rgba(133,173,255,0.4)] on the SVG circle
Inner content: centred flex-col, z-10
```

### Rep Counter (Live Workout)
```
Minus button: w-16 h-16 rounded-xl bg-surface-container-highest, icon text-zinc-400 group-active:text-primary
Count display: text-6xl font-headline font-black text-primary
Plus button: w-16 h-16 rounded-xl bg-primary, shadow-[0_4px_15px_rgba(133,173,255,0.3)]
```

### Timeline (History)
```
Relative container with absolute left line:
  left-[11px], w-[2px], bg-gradient-to-b from-primary/30 via-outline-variant/20 to-transparent
Each item: relative pl-10
Dot: absolute left-0 top-1, w-6 h-6 rounded-full
  - Standard: bg-surface-container-highest border border-outline-variant
  - Active/today: bg-primary
  - PR moment: bg-secondary
Icon inside dot: material-symbols-outlined text-[14px], centred
```

---

## Iconography

Material Symbols Outlined throughout. Import:
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

Default variation settings:
```css
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
```

Filled icons (active states): `style="font-variation-settings: 'FILL' 1;"`

Key icons used:
- `dashboard` — Dashboard tab
- `add_circle` — Builder tab
- `timer` — Workout tab
- `history` — History tab
- `fitness_center` — Arms/chest exercises
- `directions_run` — Legs
- `trending_up` — Progress indicators
- `workspace_premium` — Milestones/streaks
- `bolt` — PR moments
- `play_arrow` — Start workout CTA
- `chevron_right` — Row navigation
- `add` / `remove` — Rep counter controls
- `check` — Selected exercise state

---

## Ambient Background Effect

Used on history/progress screens for visual depth. Always `pointer-events-none z-[-1] opacity-20`:
```html
<div class="fixed inset-0 pointer-events-none z-[-1] opacity-20">
  <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-dim rounded-full blur-[120px]"></div>
  <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-dim rounded-full blur-[100px] opacity-30"></div>
</div>
```

---

## Interaction Patterns

- All interactive elements: `active:scale-90 transition-all` (or `active:scale-95` for larger elements)
- No modals except the between-circuit rest overlay
- No tooltips — all UI is self-labelled
- Tap highlight disabled: `-webkit-tap-highlight-color: transparent` on body
- Swipe gestures for exercise navigation in live workout (implement via touch events)

---

## Tailwind Config (Complete)

```js
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-dim": "#e48fec",
        "on-surface-variant": "#adaaaa",
        "outline-variant": "#484847",
        "surface-container-lowest": "#000000",
        "on-background": "#ffffff",
        "primary-container": "#6c9fff",
        "on-secondary": "#460700",
        "on-surface": "#ffffff",
        "background": "#0e0e0e",
        "tertiary": "#fab0ff",
        "surface": "#0e0e0e",
        "surface-variant": "#262626",
        "error": "#ff716c",
        "surface-container-highest": "#262626",
        "surface-bright": "#2c2c2c",
        "surface-container-high": "#20201f",
        "secondary": "#ff7354",
        "surface-container": "#1a1a1a",
        "secondary-container": "#b72301",
        "inverse-surface": "#fcf9f8",
        "surface-container-low": "#131313",
        "primary-fixed-dim": "#5191ff",
        "on-primary": "#002c65",
        "outline": "#767575",
        "primary": "#85adff",
        "primary-fixed": "#6c9fff"
      },
      fontFamily: {
        "headline": ["Manrope"],
        "body": ["Inter"],
        "label": ["Inter"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
}
```

---

## Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;600;700&display=swap" rel="stylesheet"/>
```

---

## Do / Don't

| Do | Don't |
|---|---|
| Use `font-headline` (Manrope) for all numbers and titles | Mix typefaces within a single component |
| Keep primary blue (`#85adff`) as the single accent | Add a third accent colour |
| Use surface depth layering for elevation (low → highest) | Use box-shadow for card elevation |
| `active:scale-90` on all interactive elements | Rely on `:hover` only — this is touch-first |
| Use `backdrop-blur` on the header and nav | Make header/nav opaque |
| Label everything inline — no tooltips | Add tooltip overlays |
| Keep the bottom nav always visible | Hide the nav during live workout |
