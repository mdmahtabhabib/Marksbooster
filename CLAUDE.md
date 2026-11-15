# MarksBooster

Paid study site for school exams (live now: CBSE Class 9). Students buy a class, then use 4 tools per chapter: flashcards, short notes, Concept Check (MCQs), Important Questions. Live at https://www.marksbooster.com (always use the www address).

## Stack
React 19 + Vite, **JavaScript only (no TypeScript)**, Tailwind CSS v4, React Router v7, Supabase (auth + Postgres), Vercel. Package manager: **npm**.

## Commands
- `npm run dev` – local server (http://localhost:5173)
- `npm run build` – production build; run it to check a change compiles
- `npm run lint` – ESLint
- No test setup exists yet. Don't invent other scripts.

## Where things live
- `src/App.jsx` – all routes + auth/purchase loading
- `src/auth/` – login, signup, verify email, Google button, route guards (`ProtectedRoute`, `PurchaseRoute`)
- `src/app/` – dashboard, subject list, chapter list, `ToolLeaf` (picks the tool page)
- `src/Features/` – the tools (Flashcard, shortnotes, Conceptcheck, Importantquestion …)
- `src/Components/home/` – homepage sections; `src/Components/ui/` – small shared UI
- `src/Pages/` – whole standalone pages (NotFound, ComingSoon, legal pages)
- `src/data/` – navigation lists in code (classes, subjects, chapter names, slugs, icons)
- `src/lib/supabase.js` – the one Supabase client
- `database/schema/` – numbered SQL files (`01_…` to `09_…`); `database/migrations/` – later changes
- Import alias: `@/` = `src/`

## Conventions
- Function components + hooks. Tailwind classes for styling.
- Paid content (flashcards, notes, MCQs, questions) lives in Supabase, never in the bundle. Navigation lists stay in `src/data/`.
- A chapter's `slug` is its database key; code and DB slugs must match.
- Fetching in `useEffect` uses a `cancelled` flag in cleanup to avoid stale responses.

## Supabase rules
- Every table has RLS on. Paid tables are readable only via `has_class_access` (see `06_access.sql`).
- Students can never insert into `purchases`; only a server-side Edge Function will.
- Only `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` go in `.env`. **Never** put the service_role key in frontend code or `.env`.
- There is only ONE Supabase project and it is production. Claude writes SQL for the developer to review and run; Claude never runs SQL itself.

## Safety
- Never print or edit `.env` values.
- Never run destructive SQL, deploy, push, or change Vercel/Supabase settings without explicit approval.
- Never delete or rewrite a working feature unless asked. Keep changes small and in the existing style.

## How to work with the developer
- The developer is learning React for a job and **writes the code themselves**. Explain the problem, then guide with small steps and exact lines; don't write whole files unless asked.
- Do only what's asked; keep answers short.
- When giving a code change: one block to delete + one block to add, with the file and line.
