# Achal Gandhi — Portfolio

A founder-focused portfolio for **Achal Gandhi**, cofounder of [AD Tech AI](https://adtechai.ca/)
and Senior GenAI program leader at Scale AI. Built with Next.js 16, TypeScript,
Tailwind CSS v4, and Motion.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # production build
npm start        # serve the production build
```

## Edit content

All site content lives in **one file** — `src/lib/data.ts`. Update your profile,
venture details, experience, metrics, and skills there; every section reads from it.

| Section            | Component                      |
| ------------------ | ------------------------------ |
| Nav                | `src/components/Nav.tsx`       |
| Hero               | `src/components/Hero.tsx`      |
| AD Tech AI / Iris  | `src/components/Venture.tsx`   |
| About              | `src/components/About.tsx`     |
| Experience         | `src/components/Experience.tsx`|
| Impact metrics     | `src/components/Impact.tsx`    |
| Skills             | `src/components/Skills.tsx`    |
| Contact / footer   | `src/components/Contact.tsx`   |

## Deploy

The fastest path is **Vercel** (made by the Next.js team):

```bash
npm i -g vercel
vercel              # follow the prompts; deploys a preview
vercel --prod       # promote to production
```

Then point a custom domain (e.g. `achalgandhi.com`) at it in the Vercel dashboard.
Update `metadataBase` in `src/app/layout.tsx` to match your final domain for correct
SEO / social-share metadata.
