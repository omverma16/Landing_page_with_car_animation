# ItzFizz Hero — Scroll-Driven Animation

A premium scroll-based hero animation built for the **ItzFizz** landing page. A sports car moves horizontally across the screen while revealing a headline from behind its rear bumper — fully controlled by scroll.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| **Next.js 15** | App Router framework |
| **React 19** | UI layer |
| **Tailwind CSS** | Styling |
| **GSAP + ScrollTrigger** | Scroll-driven animation |
| **Framer Motion** | Section entry animations |
| **Bebas Neue + Inter** | Typography (via `next/font/google`) |

---

## Animation Logic

```
Scroll Progress (0 → 1)
        │
        ├── Car X Position:   0vw  →  52vw
        └── Text Clip-Path:   inset(0 100% 0 0)  →  inset(0 48% 0 0)
```

- **Section is pinned** (`pin: true`) — the page doesn't scroll, scroll controls animation instead.
- **Car starts** with its rear touching the left edge (`x: 0vw`).
- **Car ends** at the resting position (`x: 52vw`), with the front near the right edge.
- **Text is hidden** behind the car using `clip-path`. As the car moves right, the visible text area grows in sync — giving the illusion the car is physically uncovering the text.
- **Fully reversible** — scrolling up moves the car back and re-hides the text.

---

## Folder Structure

```
itzfizz-hero/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx     ← Scroll animation (car + text reveal)
│   │   └── Features.tsx        ← Performance & Technology sections
│   ├── globals.css             ← Global styles + custom button utilities
│   ├── layout.tsx              ← Root layout with fonts
│   └── page.tsx                ← Page composition
├── public/
│   └── car.png                 ← Sports car image asset
└── README.md
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Key Components

### `HeroSection.tsx`
- GSAP `ScrollTrigger` with `pin: true` and `scrub: 1`
- Car layer: `z-20` (foreground)
- Text layer: `z-10` (behind car), controlled via `clip-path`
- Scroll end depth: `+=2500px` for smooth cinematic control

### `Features.tsx`
- **Performance Section** — Dark background, stats dashboard (0-100 time, V-Max, Power-to-Weight)
- **Technology Section** — White background, "The Digital Heartbeat" with action buttons
- Entry animations via Framer Motion (`whileInView`)

---

## Design Principles

- **Scroll = Control** — scroll progress directly drives animation, not time
- **Physical Masking** — car acts as a real foreground object, not a visual trick
- **Premium Feel** — Apple-inspired scrubbing, no jerk, smooth reverse
- **Dark Grid Aesthetic** — subtle 80px grid, radial dark gradient background
