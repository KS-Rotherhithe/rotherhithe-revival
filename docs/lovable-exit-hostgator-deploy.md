# Lovable exit — HostGator deploy guide

St Mary's site: **no Lovable hosting required.** Edit in Cursor, build locally, deploy static files to HostGator. Backend = your Supabase. Automation = n8n.

---

## Architecture (after exit)

```
Cursor / local dev  →  GitHub  →  npm run build  →  HostGator (public_html)
                                                          ↓
                                              Supabase (API + storage)
                                                          ↑
                                              n8n (Saturday pew sheet)
```

---

## Prerequisites

- [ ] GitHub repo cloned locally (`rotherhithe-revival-clone`)
- [ ] Node.js + npm installed on your Mac
- [ ] Own Supabase project (not Lovable Cloud) — see detach steps in chat / update `.env`
- [ ] HostGator cPanel access for `stmaryrotherhithe.com`
- [ ] Migration `supabase/migrations/001_weekly_content.sql` run on your Supabase project

---

## 1. Environment variables

Create or edit **`.env`** in the repo root (same values as Supabase → Settings → API):

```
VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...or-anon-key...
```

**Never put `service_role` / secret key here** — n8n only.

These are baked into the JS at build time. Rebuild after any change.

---

## 2. Local development (replaces Lovable preview)

```bash
cd rotherhithe-revival-clone
npm install
npm run dev
```

Open http://localhost:8080 — test `/community`, `/community/pew-sheets`.

---

## 3. Production build

```bash
npm run build
```

Output: **`dist/`** folder — upload everything inside this folder to HostGator.

Quick local check before upload:

```bash
npm run preview
```

---

## 4. Upload to HostGator

### Via cPanel File Manager

1. Log in to **HostGator cPanel**
2. **File Manager** → `public_html` (or subdomain folder for the site)
3. **Delete or backup** old WordPress files if replacing the live site
4. Upload **all contents** of `dist/` (not the `dist` folder itself):
   - `index.html`
   - `assets/` folder
   - `.htaccess` (included via `public/.htaccess` in repo)
   - `robots.txt`, etc.

**Important — keep WordPress images:** Many history pages still load images from `/wp-content/uploads/...`. After removing WordPress, restore that folder from your backup:

```
public_html/wp-content/uploads/   ← restore from WordPress backup zip
```

Without this, history/interior pages show broken images (Apache serves `index.html` instead).

5. Upload contents of local `dist/`

### Via FTP (FileZilla, etc.)

- Host: your domain or FTP hostname from cPanel
- Remote path: `/public_html/`
- Upload contents of local `dist/`

---

## 5. SPA routing (React Router)

Apache must serve `index.html` for routes like `/community/pew-sheets`.

The repo includes **`public/.htaccess`** — Vite copies it into `dist/` on build. Confirm it uploaded.

If routes 404 on refresh, re-upload `.htaccess` or paste into `public_html`:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## 6. Domain cutover (WordPress → new site)

1. Deploy new site to `public_html` (or test in subdirectory first, e.g. `public_html/new/`)
2. Test all main routes and pew sheet preview
3. Update DNS only if domain points elsewhere (usually already on HostGator)
4. Optional redirects in `.htaccess` for old WordPress URLs, e.g.:
   ```apache
   Redirect 301 /pewsheets/ /community/pew-sheets
   ```

---

## 7. Optional — remove Lovable dev dependency

Not required for production; keeps repo clean.

**`vite.config.ts`** — remove `lovable-tagger` import and plugin line.

**`package.json`** — remove `"lovable-tagger"` from devDependencies.

```bash
npm install
```

**Disconnect Lovable from GitHub** (when ready): Lovable → Settings → GitHub → Disconnect. GitHub + Cursor become source of truth.

---

## 8. Deploy checklist (every update)

1. Edit code in Cursor
2. Test: `npm run dev`
3. Commit + push to GitHub
4. `npm run build`
5. Upload `dist/` contents to HostGator
6. Hard-refresh browser / clear cache if needed
7. Spot-check: Home, Community, Pew Sheets, Contact

---

## 9. Related docs

| Doc | Purpose |
|-----|---------|
| [supabase-setup.md](supabase-setup.md) | Database + storage bucket |
| [n8n-setup.md](n8n-setup.md) | Saturday automation |
| [admin-guide-pew-sheet-upload.md](admin-guide-pew-sheet-upload.md) | For Fr Mark |
| [test-checklist.md](test-checklist.md) | QA before go-live |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Blank page after upload | Ensure `index.html` is in `public_html` root, not nested in `dist/` |
| `/community/pew-sheets` 404 on refresh | Add/fix `.htaccess` |
| Pew sheet empty | Check `.env` values; rebuild; verify Supabase row + public Storage URL |
| History images broken | Restore `public_html/wp-content/uploads/` from WordPress backup |
| Old WordPress still shows | Clear browser cache; confirm files in correct `public_html` |
| Build fails | Run `npm install`; check Node version (18+ recommended) |

---

## What you no longer need

- Lovable subscription (optional — keep only if you want AI UI edits)
- Lovable Cloud / preview hosting
- WordPress for this site (after cutover)
