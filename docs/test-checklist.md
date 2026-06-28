# Test checklist — Weekly Content feature

Run before enabling the Saturday schedule.

## Prerequisites

- [ ] Supabase migration applied
- [ ] n8n workflow imported and credentials configured
- [ ] Google Drive folder created and shared with Fr Mark
- [ ] Frontend deployed with Pew Sheets page + nav link

## Manual publish test

1. Upload a test PDF to the Google Drive folder (name: `pewsheet-TEST.pdf`)
2. Run n8n workflow **manually** (Execute Workflow)
3. Verify:
   - [ ] File appears in Supabase Storage (`weekly-content/current/`)
   - [ ] Row inserted in `weekly_content` table
   - [ ] Pew Sheets page shows PDF preview
   - [ ] Download button works
4. Upload a test PNG — repeat steps 2–3 for image preview

## Test matrix

| # | Scenario | Steps | Expected | Pass |
|---|----------|-------|----------|------|
| 1 | Valid PDF, Friday upload | Upload PDF Friday; run workflow Saturday (or manual) | Live by 11:05; preview + download work | |
| 2 | Valid PNG | Upload PNG; run workflow | Image preview renders | |
| 3 | No file in folder | Empty folder; run workflow | Admin email; previous content unchanged | |
| 4 | Wrong type (.docx) | Upload Word doc; run workflow | Admin email; file ignored | |
| 5 | Two files uploaded | Upload PDF then PNG (newer); run workflow | Newest file wins | |
| 6 | Same file re-run | Run workflow twice without new upload | No duplicate; skips or no-op | |
| 7 | Mobile Safari | Open Pew Sheets on iPhone | Preview responsive; download works | |
| 8 | Mobile Chrome | Open Pew Sheets on Android | Same as above | |
| 9 | Accessibility | Tab through page | Download button focusable; iframe has title | |
| 10 | Drive unreachable | Disconnect Drive creds; run workflow | Admin alert; site shows fallback or previous content | |

## Launch sequence

1. [ ] Complete manual publish test with real pew sheet PDF
2. [ ] Enable n8n schedule: Saturday 11:00 Europe/London
3. [ ] Monitor first run (Saturday)
4. [ ] Monitor second and third runs
5. [ ] Share admin guide with Fr Mark
6. [ ] Update WordPress links to point to Lovable when site cutover happens

## Rollback

If publish fails: previous `weekly_content` row and storage file remain. Fix Drive/Supabase issue and re-run workflow manually.

## Success criteria (from PRD)

- [ ] Content live by 11:30 Saturday when file uploaded by Friday
- [ ] Admin effort under 5 minutes (drag to Drive)
- [ ] Community/Pew Sheets page shows preview + download
- [ ] Fallback message when no content
