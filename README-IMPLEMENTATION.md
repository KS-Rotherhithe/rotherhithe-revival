# Weekly Content Feature — Implementation Package

Drop these files into [KS-Rotherhithe/rotherhithe-revival](https://github.com/KS-Rotherhithe/rotherhithe-revival) after cloning locally.

## Quick start

1. Clone the repo (requires your GitHub access):
   ```bash
   git clone git@github.com:KS-Rotherhithe/rotherhithe-revival.git
   cd rotherhithe-revival
   ```

2. Copy this package into the repo root (merge `src/`, `supabase/`, `n8n/`, `docs/`).

3. Run Supabase migration — see [docs/supabase-setup.md](docs/supabase-setup.md).

4. Import n8n workflow — see [n8n/stmary-weekly-pewsheet-publish.json](n8n/stmary-weekly-pewsheet-publish.json).

5. Apply frontend integration — see [docs/frontend-integration.md](docs/frontend-integration.md).

6. Share admin guide with Fr Mark — [docs/admin-guide-pew-sheet-upload.md](docs/admin-guide-pew-sheet-upload.md).

7. Run tests — [docs/test-checklist.md](docs/test-checklist.md).

## Architecture

Google Drive (admin upload) → n8n (Saturday 11:00) → Supabase Storage + DB → Community / Pew Sheets page

## Files in this package

| File | Purpose |
|------|---------|
| `supabase/migrations/001_weekly_content.sql` | Table, RLS, storage bucket |
| `src/components/WeeklyContentSection.tsx` | Preview + download UI |
| `src/pages/PewSheets.tsx` | Dedicated Pew Sheets page |
| `src/hooks/useWeeklyContent.ts` | Supabase fetch hook |
| `src/types/weekly-content.ts` | TypeScript types |
| `n8n/stmary-weekly-pewsheet-publish.json` | Automation workflow |
| `docs/*` | Setup, admin, test guides |
