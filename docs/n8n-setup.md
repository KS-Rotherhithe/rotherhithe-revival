# n8n workflow setup

## Import

1. Open n8n
2. **Workflows → Import from File**
3. Select `n8n/stmary-weekly-pewsheet-publish.json`

## Configure credentials

| Node | Credential |
|------|------------|
| Google Drive — List / Download | Google Drive OAuth2 (account with folder access) |
| Supabase HTTP nodes | Header auth: `Authorization: Bearer {SERVICE_ROLE_KEY}` |
| Email — Success / Error | Your existing email node (Gmail, SMTP, etc.) |

## Environment variables (recommended)

Set in n8n **Settings → Variables**:

| Variable | Example |
|----------|---------|
| `SUPABASE_URL` | `https://xxxxx.supabase.co` |
| `SUPABASE_SERVICE_KEY` | `eyJ...` (service role — secret) |
| `GOOGLE_DRIVE_FOLDER_ID` | From Drive folder URL |
| `ADMIN_EMAIL` | `hello@stmaryrotherhithe.com` |
| `ADMIN_EMAIL_CC` | Your email for alerts |

## Schedule

Cron: `0 11 * * 6`  
Timezone: `Europe/London`  
= Every Saturday at 11:00am

## Google Drive folder ID

Open the folder in Google Drive. URL format:

```
https://drive.google.com/drive/folders/FOLDER_ID_HERE
```

Copy `FOLDER_ID_HERE` into the workflow.

## Manual test

1. Upload test PDF to folder
2. Click **Execute Workflow**
3. Check Supabase table + Pew Sheets page
4. Check success email (if enabled)

## Notes

- Workflow picks **newest file by modified time** among PDF/JPEG/PNG
- Skips publish if same `drive_file_id` already in latest DB row
- Error branch sends alert but **does not delete** existing live content
