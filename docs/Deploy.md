# {APP_NAME} — Deploy to Vercel

This guide walks you (or your teammate) through deploying the **SaaS Lite** starter to Vercel and connecting Supabase. Total time: \~10–15 minutes.

> Replace tokens like `{APP_NAME}`, `{CLIENT_NAME}`, `{DEMO_URL}`, `{TEMPLATE_VERSION}` as needed.

---

## Prerequisites

- GitHub (or GitLab/Bitbucket) repo for your project
- Vercel account
- Supabase project with **URL** and **Anon Key**

---

## 1) Prep your repository

1. Ensure **no secrets** are committed. `.env*` must be git‑ignored.
2. Confirm `.env.local.example` exists with placeholders.
3. Push your latest changes to `main`.

---

## 2) Create a Vercel project

1. In Vercel, click **New Project** → **Import Git Repository** → select your repo.
2. Framework auto‑detects as **Next.js**. Keep defaults (Build Command `next build`, Output `Next.js`).
3. Click **Environment Variables** and add the following (see next section), then **Deploy**.

---

## 3) Add environment variables (Vercel)

Add in **Project → Settings → Environment Variables** for both **Production** and **Preview**:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

Optional (if your template uses them):

```
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

> Tip: Add the same variables to the **Preview** environment so preview deploys work.

---

## 4) Configure Supabase Auth URLs

In Supabase: **Authentication → URL Configuration**

- **Site URL:** set to your Vercel production URL (e.g., `https://your-app.vercel.app` or your custom domain).
- **Additional Redirect URLs:** add each on its own line:
  - `http://localhost:3000`
  - `https://your-app.vercel.app`
  - `https://*.vercel.app` _(for previews)_
  - `https://your-domain.com` _(if using custom domain)_

> This ensures email links (sign‑in/reset) and redirects succeed on local, preview, and production.

---

## 5) First deploy

- Click **Deploy** in Vercel. The build should complete in a couple of minutes.
- Open the Vercel URL → visit **/signup** to create a user → verify you land on **/dashboard** after sign‑in.

---

## 6) Post‑deploy checks

- **Auth flow:** sign up, sign in, sign out. Test **reset password** email.
- **Protected routes:** visiting `/dashboard` when logged out should redirect to `/login`.
- **RLS policies:** confirm you can only see your own demo data.
- **Console errors:** open DevTools → fix any missing envs or 401 responses.

> If emails don’t arrive, configure SMTP in Supabase **Authentication → SMTP** (or use a provider like SendGrid). For dev, you can test password reset by copying the link from Supabase Auth Logs.

---

## 7) Add a custom domain (optional)

1. In Vercel **Project → Settings → Domains**, add your domain.
2. Follow DNS instructions (CNAME or A/ALIAS records via your registrar).
3. Update **Supabase Site URL** and **Additional Redirect URLs** to include the custom domain.

---

## 8) Preview & environments (best practices)

- Use **Preview Deployments** for pull requests/branches.
- Keep the same env vars in **Preview** as Production (or separate Supabase projects if required).
- Protect `main` with branch rules and reviews.

---

## 9) Rollbacks & promotions

- In Vercel **Deployments**, you can **Promote** a working preview to production or **Rollback** to a prior build with one click.

---

## 10) Troubleshooting

**Redirect loops on login**

- Ensure Supabase **Site URL** matches the exact Vercel/custom domain. Add preview URLs to **Additional Redirect URLs**.

**401/403 from Supabase**

- Check `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel.
- Verify RLS policies exist for your tables and your user owns the rows.

**Emails not sending**

- Configure SMTP (Authentication → SMTP). Verify the project email address and domain settings.

**Local works, prod fails**

- Re‑add envs in Vercel (typos are common). Rebuild. Confirm no service_role key is used in the browser.

---

## Done 🎉

Your app is live. For help with **custom domain setup, Stripe, roles, or calendar integrations**, request a custom upgrade.

**Version:** `{TEMPLATE_VERSION}` • **Contact:** via your Fiverr order thread
