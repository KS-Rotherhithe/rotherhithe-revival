# Frontend integration

Apply these changes in the Lovable project (or copy files from this package into your cloned repo).

## 1. Copy new files

| Source (this package) | Destination in repo |
|-----------------------|---------------------|
| `src/components/WeeklyContentSection.tsx` | same path |
| `src/pages/PewSheets.tsx` | same path |
| `src/hooks/useWeeklyContent.ts` | same path |
| `src/types/weekly-content.ts` | same path |

## 2. Add route in `src/App.tsx`

```tsx
import PewSheets from "@/pages/PewSheets";

// Inside <Routes>:
<Route path="/community/pew-sheets" element={<PewSheets />} />
```

Adjust path if your Community routes use a different pattern (e.g. `/pew-sheets`).

## 3. Add nav item under Community

In your nav config (often `src/components/Layout.tsx` or `src/components/Header.tsx`), add a child under **Community**:

```tsx
{
  label: "Community",
  href: "/community",
  children: [
    // ... existing items (Events & News, Hall Hire, etc.)
    { label: "Pew Sheets", href: "/community/pew-sheets" },
  ],
}
```

If nav uses a flat array with dropdown components, match the existing pattern for other Community sub-items.

## 4. Add section to Community page

In `src/pages/Community.tsx` (or equivalent), import and place **above** Events & News:

```tsx
import WeeklyContentSection from "@/components/WeeklyContentSection";

// Inside the page body, after hero / intro:
<WeeklyContentSection id="weekly-update" showIntro={false} />
```

Use `showIntro={false}` on Community page if the page already has intro copy — avoids duplication.

## 5. Supabase types (optional)

If Lovable generates types from Supabase, regenerate after migration. Otherwise add to your types file:

```ts
weekly_content: {
  Row: {
    id: string;
    file_url: string;
    file_type: "pdf" | "image";
    file_name: string;
    drive_file_id: string | null;
    published_at: string;
    week_label: string | null;
    created_at: string;
  };
};
```

## 6. Deploy

- Push to GitHub → Lovable auto-deploys, or
- Publish from Lovable dashboard

Verify `/community/pew-sheets` loads and nav link works on mobile.
