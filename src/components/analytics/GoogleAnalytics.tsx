import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type GtagCommand =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["consent", "default" | "update", Record<string, unknown>]
  | ["event", string, Record<string, unknown>?];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: GtagCommand) => void;
  }
}

function canTrack(): boolean {
  return typeof window !== "undefined" && Boolean(GA_ID) && typeof window.gtag === "function";
}

export function gaEvent(action: string, params?: Record<string, unknown>): void {
  if (!canTrack()) return;
  window.gtag!("event", action, params);
}

export function gaPageView(url: string): void {
  if (!canTrack() || !GA_ID) return;
  window.gtag!("config", GA_ID, {
    page_location: window.location.href,
    page_path: url,
    page_title: document.title,
  });
}

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-consent-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('consent', 'default', {
            region: ['DE','AT','CH','FR','IT','ES','NL','BE','LU','IE','PT','SE','NO','DK','FI','PL','CZ','SK','HU','SI','HR','RO','BG','GR','CY','MT','EE','LV','LT','IS','LI','UK'],
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            ads_data_redaction: true,
            wait_for_update: 500
          });
          gtag('config', '${GA_ID}', {
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
