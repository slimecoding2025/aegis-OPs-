# Developer Portfolio

Next.js 14 (App Router) + Tailwind CSS + Framer Motion + React Three Fiber.
Dark, neon-accented, bilingual (EN/DE), and built so new projects or skills
are a one-line data edit, not a code change.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Add your own assets

Put these two files in `public/` (see `public/PLACE_YOUR_ASSETS_HERE.md`):

- `profile.jpg` — your photo. Falls back to a styled placeholder automatically
  if missing.
- `cv.pdf` — your CV. The "Download CV" button already links to `/cv.pdf`.

## 3. Edit your content — no component code required

| What | File |
|---|---|
| Projects (add/remove/reorder) | `data/projects.js` |
| Skills, grouped by category | `data/skills.js` |
| Hero, About, section copy (EN + DE) | `data/translations.js` |
| Contact email & social links | `components/Contact.jsx` (top of file) |

To add a 6th project, append one object to the array in `data/projects.js` —
the alternating layout, tags, and language switching all update automatically.

## 4. Design tokens

Colors, fonts, and the grid-overlay background live in `tailwind.config.js`
and `app/globals.css`. The three signal colors (`signal.cyan`, `signal.violet`,
`signal.amber`) are the only accent colors used across the site — change them
there to re-theme everything at once.

## 5. Deploy to Vercel

**Option A — CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts (link or create a project, accept the defaults — Next.js
is auto-detected). Then `vercel --prod` to ship the production build.

**Option B — Git**

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables
   are required for this project. Click **Deploy**.

Every subsequent push to your main branch redeploys automatically.

## Project structure

```
app/            Root layout, global styles, the single page route
components/     One component per UI section (Navbar, Hero, About, ...)
context/        LanguageContext — the EN/DE toggle's shared state
data/           projectsData, skillsData, translations — edit these, not code
hooks/          useScrollReveal — shared Framer Motion presets
public/         Static assets (profile.jpg, cv.pdf go here)
```

## Notes

- The hero's 3D scene (`components/HeroScene.jsx`) uses a low-poly wireframe
  icosahedron + torus + orbiting nodes — cheap enough to stay at 60fps on
  integrated GPUs, and is loaded client-side only via `next/dynamic`.
- Scroll reveals fire once per section (`viewport: { once: true }`), so
  re-scrolling past a section doesn't re-trigger the animation.
- Reduced-motion users get near-instant transitions (see the
  `prefers-reduced-motion` block in `app/globals.css`).
