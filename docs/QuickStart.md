# {APP_NAME} — Quick Start

A 10‑minute setup to run the SaaS Lite starter locally. Keep real secrets out of Git.

---

## Prerequisites

- Node.js **≥ 18.17** (LTS recommended)
- Git
- Supabase project (URL + **anon** key)
- (Optional) Vercel account for deploy

---

## 1) Create your project

- Click **Use this template** on GitHub, or clone the repo.
- Rename the project/repo as needed.

```
# If cloning
git clone <your-new-repo-url>
cd <your-new-repo>
```

---

## 2) Environment variables

- Duplicate `.env.local.example` → `.env.local` and paste your Supabase values.

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

> Never commit `.env.local`. The **service_role** key must **not** be used in the browser.

---

## 3) Install & run

```
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 4) Smoke test (auth)

1. Go to **/signup** and create a user.
2. Sign in → you should land on **/dashboard**.
3. Use **/reset-password** to verify the reset flow (email must be enabled in Supabase).

---

## 5) Example data (Projects)

- From the dashboard, create a sample **Project**.
- Confirm it appears in the list.
- (If included) toggle **Use sample data** to prefill demo rows.

---

## 6) Branding pass (2–3 minutes)

- Replace `/public/logo.*` with your logo.
- Update app title/metadata in `app/layout`.
- Set `{PRIMARY_COLOR_HEX}` in your theme/tokens.

---

## 7) Deploy (summary)

- Import the repo into **Vercel**.
- Add the same env vars in Project Settings → Environment Variables.
- Deploy. Set a custom domain (optional).

> Full steps: see `/docs/Deploy.md`.

---

## Troubleshooting

- **401/403 from Supabase** → check URL/anon key; confirm Row Level Security policies exist.
- **No auth emails** → configure email provider or use Supabase dev SMTP.
- **Redirect loops** → verify middleware and site URL (Supabase settings) match your local or deploy domain.

---

**Version:** `{TEMPLATE_VERSION}` • **Contact:** via your Fiverr order thread
