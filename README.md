# ⚽ FIFA World Cup 2026 Predictor

A full-featured World Cup 2026 prediction app built with **Next.js 16**, **Supabase**, **Framer Motion**, and **TailwindCSS**.

**Features:** Group stage predictions · Knockout bracket · Full match schedule (104 matches) · Shareable prediction reports · Dark mode

---

## 🚀 Deploy on Vercel (Free)

The easiest way to deploy — click the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**Steps:**
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Add environment variables (see below)
4. Click **Deploy** ✅

---

## 🔑 Environment Variables

Create a `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

| Variable | Where to find it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project Settings → API → anon public key |

> **Note:** If these are not set, the app automatically falls back to demo/mock data — so it works right away without Supabase!

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Database Setup (Optional)

If you want real user data/predictions saved:

1. Create a free project at [supabase.com](https://supabase.com)
2. Run the migration files in `supabase/migrations/` in order
3. Add your Supabase URL and anon key to `.env.local`

---

## 🏗️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Database:** Supabase (PostgreSQL)
- **Styling:** TailwindCSS v4
- **Animations:** Framer Motion
- **Drag & Drop:** dnd-kit
- **State:** Zustand
- **UI Components:** shadcn/ui + Lucide icons
