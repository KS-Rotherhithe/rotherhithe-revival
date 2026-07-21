const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

declare global {
  interface Window {
    dataLayer?: IArguments[];
    // Must match Google's snippet shape: push(arguments), not a rest-array.
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsReady = false;
const pendingPageViews: string[] = [];

function sendPageView(path: string): void {
  if (!measurementId || !window.gtag) return;

  window.gtag("event", "page_view", {
    send_to: measurementId,
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
  // Critical: Google's gtag queue expects the Arguments object, not an Array.
  // Using (...args) => dataLayer.push(args) loads the script but sends no hits.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
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
