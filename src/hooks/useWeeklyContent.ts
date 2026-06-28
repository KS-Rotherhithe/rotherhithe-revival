import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { WeeklyContent } from "@/types/weekly-content";

interface UseWeeklyContentResult {
  content: WeeklyContent | null;
  loading: boolean;
  error: string | null;
}

export function useWeeklyContent(): UseWeeklyContentResult {
  const [content, setContent] = useState<WeeklyContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchContent() {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from("weekly_content")
        .select("*")
        .order("published_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (cancelled) return;

      if (fetchError) {
        setError(fetchError.message);
        setContent(null);
      } else {
        setContent(data as WeeklyContent | null);
      }

      setLoading(false);
    }

    fetchContent();

    return () => {
      cancelled = true;
    };
  }, []);

  return { content, loading, error };
}
