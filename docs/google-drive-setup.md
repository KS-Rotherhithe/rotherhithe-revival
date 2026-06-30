# Google Drive setup

## 1. Create folder

1. In Google Drive, create folder: **St Mary — Weekly Pew Sheet**
2. Share with:
   - Fr Mark (upload access)
   - Your Google account (admin)
   - n8n service account or OAuth user (read access)

## 2. Naming convention (required)

Every file **must include `pewsheet` in the filename**.

Format: `pewsheet-YYYY-MM-DD.pdf` where date = Sunday it applies to.

Examples:
- `pewsheet-2026-07-06.pdf`
- `pewsheet-2026-07-13.png`

Files without `pewsheet` in the name are not picked up by n8n.

## 3. Allowed file types

- `.pdf`
- `.jpg` / `.jpeg`
- `.png`

Max size: 10 MB (Supabase bucket limit).

## 4. Deadline

Upload by **Friday 11:59pm** for Saturday 11:00am publish.

## 5. How n8n finds files

The workflow **searches Google Drive by filename** — it does not use a folder ID.

- Search query: `pewsheet`
- Only files whose name contains `pewsheet` are returned
- See [n8n-setup.md](n8n-setup.md) for node settings

The shared folder is still useful for Fr Mark (one clear place to upload), but n8n discovers files by name across the connected Drive account.

## 6. Share admin guide

Send [admin-guide-pew-sheet-upload.md](admin-guide-pew-sheet-upload.md) to Fr Mark.
