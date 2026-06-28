# Google Drive setup

## 1. Create folder

1. In Google Drive, create folder: **St Mary — Weekly Pew Sheet**
2. Share with:
   - Fr Mark (upload access)
   - Your Google account (admin)
   - n8n service account or OAuth user (read access)

## 2. Naming convention

**Recommended:** `pewsheet-YYYY-MM-DD.pdf` where date = Sunday it applies to.

Examples:
- `pewsheet-2026-07-06.pdf`
- `pewsheet-2026-07-13.png`

**Fallback:** Any filename — n8n picks the **newest file by modified time**.

## 3. Allowed file types

- `.pdf`
- `.jpg` / `.jpeg`
- `.png`

Max size: 10 MB (Supabase bucket limit).

## 4. Deadline

Upload by **Friday 11:59pm** for Saturday 11:00am publish.

## 5. Folder ID for n8n

Copy from URL when folder is open:

```
https://drive.google.com/drive/folders/1ABC...xyz
                                      ^^^^^^^^^^^
                                      FOLDER_ID
```

Set as `GOOGLE_DRIVE_FOLDER_ID` in n8n.

## 6. Share admin guide

Send [admin-guide-pew-sheet-upload.md](admin-guide-pew-sheet-upload.md) to Fr Mark.
