# GodSpeed Academy App

Youth sports, literacy, leadership, and athlete-development platform built with Next.js 14, Tailwind CSS, Supabase, and an optional Express API.

## Features
- Role-based portals for athletes, parents, coaches, and admins
- XP, ranks, badges, streaks, and leaderboards
- Metrics, literacy, leadership, attendance, and behavior tracking
- Practice schedules, tournaments, messaging, notifications, and media uploads
- Supabase-auth ready (magic link + password)

## Quickstart
```bash
npm install
npm run dev
# app at http://localhost:3000
```

If npm install is blocked in your environment, add `@supabase/supabase-js` manually in your lockfile or install when network access is available.

## Deployment (Vercel + Supabase)
1. Create a Supabase project and apply `db/schema.sql` plus `supabase/functions/increment_xp.sql`.
2. Add environment variables in Vercel: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. Deploy the Next.js app to Vercel (or run `npm run build && npm start`).
4. Optionally deploy `server/index.ts` as a standalone Express service for custom APIs (set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`).
5. Seed starter data with `ts-node db/seed.ts` using a service role key.
