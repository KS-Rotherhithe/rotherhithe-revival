# n8n workflow setup

## Import

1. Open n8n
2. **Workflows → Import from File**
3. Select `n8n/stmary-weekly-pewsheet-publish.json`

## Configure credentials

| Node | Credential |
|------|------------|
| Google Drive — Search / Download | Google Drive OAuth2 (account with access to pew sheet files) |
| Supabase HTTP nodes | Manual headers: `apikey` + `Authorization: Bearer {SERVICE_ROLE_KEY}` |
| Email — Success / Error | Your existing email node (Gmail, SMTP, etc.) |

## Workflow variables (not server env vars)

Set in n8n **Settings → Variables** (left sidebar). Code nodes use **`$vars`**, not `$env`.

| Variable | Example |
|----------|---------|
| `SUPABASE_URL` | `https://xxxxx.supabase.co` |
| `ADMIN_EMAIL` | `hello@stmaryrotherhithe.com` |
| `ADMIN_EMAIL_CC` | Your email for alerts |

**Do not use `$env` in Code nodes** — n8n 2.0 blocks it and you get `access to env vars denied`.

Supabase auth keys go in the **HTTP Request credential headers**, not as variables.

## Email notifications (optional)

Email nodes are **not required** for publishing — pew sheet upload + website update work without them.

### 1. Add variables

| Variable | Value |
|----------|-------|
| `ADMIN_EMAIL` | `hello@stmaryrotherhithe.com` |
| `ADMIN_EMAIL_CC` | Your personal email (optional) |

### 2. Enable third-party access (Titan)

`hello@stmaryrotherhithe.com` on **HostGator Professional Email** is hosted by **Titan**, not cPanel mail.

1. Log in at [titan.email](https://titan.email) (or HostGator → Email → Manage)
2. Open account settings → **Enable on other apps** / third-party access
3. Without this, SMTP from n8n will fail even with correct settings

### 3. Create SMTP credential (Titan)

**Credentials → Add → SMTP**

| Field | Value |
|-------|-------|
| Host | `smtp.titan.email` |
| Port | `465` |
| SSL/TLS | **On** |
| User | `hello@stmaryrotherhithe.com` |
| Password | Titan mailbox password |
| Client Host Name | Leave empty |

**UK / EU accounts** (if `smtp.titan.email` fails): use `smtp0101.titan.email` instead.

**Alternative:** Port `587`, SSL/TLS **Off**, Disable STARTTLS **Off**.

Do **not** use `mail.stmaryrotherhithe.com` — that is cPanel hosting mail, not Titan.

Use **Test** on the credential before running the workflow.

### 4. Configure both email nodes

On **Email Success** and **Email Error — No File**:

| Field | Value |
|-------|-------|
| Credential | Your SMTP credential |
| From Email | `={{ $vars.ADMIN_EMAIL }}` |
| To Email | `={{ $vars.ADMIN_EMAIL }}` |
| Email Format | Text |
| Body field | **Text** (not "Message") |

CC (optional): Options → CC Email → `={{ $vars.ADMIN_EMAIL_CC }}`

### 5. If email still fails

- Open the failed node → read the exact error (auth, connection, invalid from address)
- Enable **Continue On Fail** on email nodes so Saturday publish still succeeds
- Or **disconnect** email nodes until SMTP is sorted — publishing is unaffected

Common errors:

| Error | Fix |
|-------|-----|
| `Missing credentials` | Attach SMTP credential to both email nodes |
| `Invalid login` | Wrong Titan password; or third-party access not enabled |
| `Connection refused` | Wrong host — use `smtp.titan.email`, not HostGator cPanel |
| Empty from/to | Set From Email and To Email (required fields) |

## Schedule

Cron: `0 11 * * 6`  
Timezone: `Europe/London`  
= Every Saturday at 11:00am

## List Drive Files node (critical)

This node uses **Search**, not folder listing.

| Setting | Value |
|---------|-------|
| Resource | File/Folder |
| Operation | **Search** |
| Search Method | **Search File/Folder Name** |
| Search Query | `pewsheet` |
| Return All | On |

**Pick Newest Valid File** only filters by file type (PDF/JPEG/PNG) and picks the newest by modified time. The `pewsheet` name filter happens in the Search node above.

## Filename requirement

Uploads **must include `pewsheet` in the filename**, e.g.:

```
pewsheet-2026-07-06.pdf
```

Without this, **List Drive Files** returns no data and the workflow stops.

The date in the name (Sunday the pew sheet applies to) also sets the **week label** on the website.

## Upload To Supabase Storage (critical)

| Setting | Value |
|---------|-------|
| Method | POST |
| URL | `={{ $vars.SUPABASE_URL }}/storage/v1/object/weekly-content/{{ $('Skip If Already Published').first().json.storage_path }}` |
| Send Body | On |
| Body Content Type | **n8n Binary File** |
| Input Data Field Name | `data` (must match Download node's binary key — check its output) |
| Header `x-upsert` | `true` |
| Header `Content-Type` | `={{ mime_type from previous node }}` |
| Header `apikey` | service role key |
| Header `Authorization` | `Bearer {service role key}` |

After a successful upload, output should include `"Key": "weekly-content/current/pewsheet.pdf"` (or `.jpg`).

**Where to look in Supabase:** Storage → bucket `weekly-content` → folder `current` → `pewsheet.pdf`

## Manual test

1. Upload a test PDF named `pewsheet-TEST.pdf` to Google Drive
2. **Delete or change** any existing `weekly_content` row with the same `drive_file_id` (or rename/re-upload Drive file so it gets a new ID)
3. Run the **whole workflow** from **Manual Test Trigger** — not a single node
4. Open each node in the execution log and confirm:
   - **Skip If Already Published** → `skip: false`
   - **Download From Drive** → Binary tab shows file data
   - **Upload To Supabase Storage** → status 200, `Key` in response
   - **Insert DB Row** → new row returned
5. Check Storage `weekly-content/current/` and Pew Sheets page

## Troubleshooting

| Symptom | Likely cause |
|---------|----------------|
| `access to env vars denied` in Code node | Use `$vars.SUPABASE_URL` not `$env`; set variable in Settings → Variables |
| List Drive Files returns no data | Filename missing `pewsheet`, or Search Query not set to `pewsheet` |
| Pick Newest Valid File errors | File is Word/Google Doc — must be PDF, JPEG, or PNG |
| DB row exists but no file in Storage | Re-ran only **Build DB Payload** / **Insert DB Row** without **Upload**; run full workflow |
| Upload node green but Storage empty | **Should Publish?** took false branch (`skip: true` — same Drive file already published) |
| Upload node green but file missing/wrong | Binary field name wrong — open Download output, use exact binary key in Input Data Field Name |
| Upload returns 401/403 | Add both `apikey` and `Authorization: Bearer` headers with service role key |
| Upload succeeds but site unchanged | Check `weekly_content` row; refresh local dev server |

## Notes

- Workflow picks **newest file by modified time** among PDF/JPEG/PNG results from the Drive search
- Skips publish if same `drive_file_id` already in latest DB row
- Error branch sends alert but **does not delete** existing live content
