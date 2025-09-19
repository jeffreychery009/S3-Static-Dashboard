# {APP_NAME} — SaaS Lite Starter (Next.js + Supabase)

Production‑ready **SaaS starter** with authentication, protected routes, a clean dashboard shell, settings page, and one example CRUD entity. Built for rapid client delivery and easy customization.

> **Tokens you replace per project:** `{APP_NAME}`, `{CLIENT_NAME}`, `{DEMO_URL}`, `{PRIMARY_COLOR_HEX}`, `{TEMPLATE_VERSION}`

---

## What’s Included

- ✅ **Auth**: Supabase email/password (sign up, sign in, password reset)
- ✅ **Protected routes**: Redirect unauthenticated users to login
- ✅ **Dashboard shell**: Topbar, sidebar, breadcrumbs, empty states
- ✅ **Settings**: Profile basics + light/dark theme toggle
- ✅ **Example CRUD**: “Projects” list + create/edit/delete (RLS-safe)
- ✅ **Docs**: Owner’s Manual (PDF), Quick Start, Deploy guide
- ✅ **Vercel‑ready**: Zero‑config build & deploy

**Not included (available as add‑ons):** Stripe billing, Google Calendar/GA, roles/permissions, multi‑tenant workspaces, email/SMS, complex analytics.

---

## Tech Stack

- **Framework:** Next.js (App Router) • **Language:** TypeScript
- **Auth/DB:** Supabase (RLS on) • **UI:** Tailwind CSS + shadcn/ui • **State/Data:** React Query
- **Icons:** lucide-react • **Hosting:** Vercel

---

## Live Demo

- Demo URL: `{DEMO_URL}`
- Demo login: `demo@example.com` / `••••••••` _(optional)_

---

## Quick Start

1. **Clone** this repo or click **Use this template** on GitHub.
2. **Copy envs:** duplicate `.env.local.example` → `.env.local` and paste your Supabase URL + anon key.
3. **Install deps:** `npm install`
4. **Run dev:** `npm run dev` → open [http://localhost:3000](http://localhost:3000)
5. **Auth test:** sign up, sign in, test password reset link.

> **Never** commit real secrets. `.env*` is git‑ignored.

---

## Environment Variables

Create `.env.local` from the example and fill the placeholders:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

> Do **not** expose a Supabase **service_role** key in the browser.

---

## Project Scripts

- `npm run dev` – start local dev server
- `npm run build` – production build
- `npm start` – run production build locally
- `npm run lint` – lint/format (if configured)

---

## Directory Map (high level)

```
app/              # App Router pages/layouts
components/       # UI + dashboard shell
lib/              # client/server helpers (Supabase, utils)
public/           # logo, icons, static assets
styles/           # Tailwind styles
/docs             # QuickStart, Deploy, Owner’s Manual (source)
/demo             # screenshots + sample data (optional)
```

---

## Security & RLS Notes

- Supabase **Row Level Security** is enabled; example tables include owner‑scoped policies.
- Keep secrets out of client code; use only the **anon** key in the browser.
- Rotate keys and revoke sessions when migrating between environments.

---

## Customization (5‑minute branding pass)

- **Logo:** replace `/public/logo.*` (PNG/SVG)
- **App title & metadata:** edit head metadata in `app/layout`
- **Primary color:** set `{PRIMARY_COLOR_HEX}` in your theme/tokens
- **Sidebar links:** update `nav.config` (labels, paths, icons)

> See `/docs/Customize.md` for optional deeper theming.

---

## Deploy to Vercel

1. Create a new Vercel project from this repo.
2. Add env vars (same as `.env.local`).
3. Deploy → Vercel will detect Next.js automatically.
4. Set your custom domain (optional).

> Full steps in `/docs/Deploy.md`.

---

## Owner’s Manual (PDF)

A one‑page guide is provided in your delivery: **`/docs/OwnersManual.pdf`**.

- Quick Start, customization basics, deploy steps, and available add‑ons.
- For support/custom work, contact `{CLIENT_NAME}`’s project thread on Fiverr.

---

## FAQ

**Does this include payments/roles/multi‑tenant?** No, those are add‑ons.

**Will you set up my Supabase/Vercel?** Not in Lite. Purchase the “Deploy & Env Setup” add‑on (screenshare or guided steps).

**Can I use this commercially?** Yes—MIT license.

---

## Changelog

- `{TEMPLATE_VERSION}` – Initial public template.

---

## License

MIT © {CLIENT_NAME}
