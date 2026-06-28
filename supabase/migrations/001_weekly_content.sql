-- Weekly content for Community / Pew Sheets page
-- Run in Supabase SQL Editor or via supabase db push

-- Table: stores metadata for the current week's file (single active row pattern)
create table if not exists public.weekly_content (
  id uuid primary key default gen_random_uuid(),
  file_url text not null,
  file_type text not null check (file_type in ('pdf', 'image')),
  file_name text not null,
  drive_file_id text,
  published_at timestamptz not null default now(),
  week_label text,
  created_at timestamptz not null default now()
);

create index if not exists weekly_content_published_at_idx
  on public.weekly_content (published_at desc);

alter table public.weekly_content enable row level security;

-- Public read for website visitors
create policy "weekly_content_public_read"
  on public.weekly_content
  for select
  to anon, authenticated
  using (true);

-- No public write — n8n uses service role key (bypasses RLS)

-- Storage bucket for the current pew sheet file
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'weekly-content',
  'weekly-content',
  true,
  10485760, -- 10 MB
  array['application/pdf', 'image/jpeg', 'image/png', 'image/jpg']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- Public read on storage objects
create policy "weekly_content_storage_public_read"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'weekly-content');

-- Service role uploads via n8n (no anon insert policy needed)
