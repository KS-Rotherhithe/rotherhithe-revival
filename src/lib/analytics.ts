const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsReady = false;
const pendingPageViews: string[] = [];

function sendPageView(path: string): void {
  if (!measurementId || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

function flushPendingPageViews(): void {
  while (pendingPageViews.length > 0) {
    const path = pendingPageViews.shift();
    if (path) sendPageView(path);
  }
}

export function initAnalytics(): void {
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.onload = () => {
    analyticsReady = true;
    flushPendingPageViews();
  };
  script.onerror = () => {
    console.warn("Google Analytics script failed to load.");
  };
  document.head.appendChild(script);
}

export function trackPageView(path: string): void {
  if (!measurementId) return;

  if (!analyticsReady) {
    pendingPageViews.push(path);
    return;
  }

  sendPageView(path);
}
