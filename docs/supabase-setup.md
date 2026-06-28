# Supabase setup — Weekly Content

## 1. Enable Supabase in Lovable

If not already connected:

1. Open your Lovable project
2. Go to **Integrations → Supabase → Connect**
3. Create or link a Supabase project

Lovable will add `src/integrations/supabase/client.ts` and env vars automatically.

## 2. Run the migration

In **Supabase Dashboard → SQL Editor**, paste and run:

`supabase/migrations/001_weekly_content.sql`

This creates:

- `weekly_content` table (public read)
- `weekly-content` storage bucket (public read, 10 MB limit, PDF/JPEG/PNG only)

## 3. Get credentials for n8n

From **Supabase → Project Settings → API**:

| Credential | Used by |
|------------|---------|
| Project URL | n8n HTTP nodes |
| `service_role` key | n8n only — **never** put in frontend |

Storage upload URL pattern:

```
POST {SUPABASE_URL}/storage/v1/object/weekly-content/current/pewsheet.{ext}
Header: Authorization: Bearer {SERVICE_ROLE_KEY}
Header: Content-Type: {mime_type}
```

## 4. Verify public access

After a test upload, confirm:

- `SELECT * FROM weekly_content` returns a row (anon key in SQL editor)
- Storage URL opens in browser without auth

## 5. Optional: seed test data

```sql
insert into public.weekly_content (file_url, file_type, file_name, week_label)
values (
  'https://YOUR_PROJECT.supabase.co/storage/v1/object/public/weekly-content/current/pewsheet.pdf',
  'pdf',
  'pewsheet-test.pdf',
  'Test — Sunday 6 July 2026'
);
```

Delete test row before go-live.
