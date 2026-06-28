# Clone and sync — rotherhithe-revival

**Repo:** https://github.com/KS-Rotherhithe/rotherhithe-revival (private)

## Verify Lovable GitHub connection

1. Lovable project → **Settings → GitHub**
2. Confirm connected repo is `KS-Rotherhithe/rotherhithe-revival` (not `stmarys`)
3. Push latest from Lovable if needed

## Clone locally

```bash
cd "/Users/karynasilina/Build AI Product Sense"
git clone git@github.com:KS-Rotherhithe/rotherhithe-revival.git
```

Requires SSH key added to your GitHub account.

## Merge this implementation package

Copy from this folder into the cloned repo:

```bash
cp -R src/components/WeeklyContentSection.tsx rotherhithe-revival/src/components/
cp -R src/pages/PewSheets.tsx rotherhithe-revival/src/pages/
cp -R src/hooks/useWeeklyContent.ts rotherhithe-revival/src/hooks/
cp -R src/types/weekly-content.ts rotherhithe-revival/src/types/
cp -R supabase rotherhithe-revival/
cp -R n8n rotherhithe-revival/
cp -R docs rotherhithe-revival/
```

Then apply changes in [frontend-integration.md](frontend-integration.md) (App.tsx route + nav + Community page).

## Expected repo structure (Lovable standard)

```
src/
  App.tsx
  pages/
    Index.tsx
    Community.tsx
    PewSheets.tsx          ← new
  components/
    Layout.tsx
    WeeklyContentSection.tsx  ← new
  hooks/
    useWeeklyContent.ts    ← new
  integrations/supabase/
    client.ts
supabase/migrations/
n8n/
docs/
```

## Commit and push

```bash
cd rotherhithe-revival
git add .
git commit -m "Add weekly pew sheet feature (Drive → n8n → Supabase → Community)"
git push
```

Lovable will pick up changes on next sync if bidirectional.
