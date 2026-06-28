import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useWeeklyContent } from "@/hooks/useWeeklyContent";

interface WeeklyContentSectionProps {
  showIntro?: boolean;
  id?: string;
}

export default function WeeklyContentSection({
  showIntro = true,
  id = "weekly-update",
}: WeeklyContentSectionProps) {
  const { content, loading, error } = useWeeklyContent();

  return (
    <section
      id={id}
      aria-labelledby="weekly-update-heading"
      className="rounded-lg border-2 border-accent bg-card p-6 md:p-8 shadow-sm"
    >
      <div className="mb-6 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          This week
        </p>
        <h2
          id="weekly-update-heading"
          className="font-serif text-2xl md:text-3xl text-foreground"
        >
          Weekly Pew Sheet
        </h2>
        {showIntro && (
          <p className="max-w-2xl text-muted-foreground leading-relaxed">
            Our latest announcements, service details, and community news —
            updated every Saturday morning.
          </p>
        )}
      </div>

      {loading && (
        <div className="space-y-4" aria-live="polite" aria-busy="true">
          <Skeleton className="h-[480px] w-full rounded-md" />
          <Skeleton className="h-11 w-48" />
        </div>
      )}

      {!loading && error && (
        <div
          role="alert"
          className="rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground"
        >
          We couldn&apos;t load this week&apos;s update right now. Please check
          back shortly or contact the church office.
        </div>
      )}

      {!loading && !error && !content && (
        <div className="rounded-md border border-dashed border-border bg-muted/40 p-8 text-center">
          <p className="text-muted-foreground">
            This week&apos;s pew sheet will be posted Saturday morning. Check
            back soon.
          </p>
        </div>
      )}

      {!loading && !error && content && (
        <div className="space-y-4">
          {content.week_label && (
            <p className="text-sm font-medium text-foreground">
              {content.week_label}
            </p>
          )}

          {content.file_type === "image" ? (
            <img
              src={content.file_url}
              alt="Weekly pew sheet"
              className="mx-auto w-full max-w-3xl rounded-md border border-border object-contain"
            />
          ) : (
            <iframe
              src={content.file_url}
              title="Weekly pew sheet PDF preview"
              className="h-[70vh] min-h-[480px] w-full rounded-md border border-border bg-background"
            />
          )}

          <Button asChild size="lg" className="gap-2">
            <a
              href={content.file_url}
              download={content.file_name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download ${content.file_name}`}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download pew sheet
            </a>
          </Button>
        </div>
      )}
    </section>
  );
}
