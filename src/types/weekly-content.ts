export type WeeklyContentFileType = "pdf" | "image";

export interface WeeklyContent {
  id: string;
  file_url: string;
  file_type: WeeklyContentFileType;
  file_name: string;
  drive_file_id: string | null;
  published_at: string;
  week_label: string | null;
  created_at: string;
}
