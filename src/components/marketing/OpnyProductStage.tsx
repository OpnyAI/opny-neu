import Image from "next/image";
import Link from "next/link";

const nodeXControls = [
  ["Modelle", "Freigaben statt Wildwuchs"],
  ["Daten", "Zulässige Pfade je Rolle"],
  ["Betrieb", "Nutzung und Kosten im Blick"],
];

export default function OpnyProductStage() {
  return (
    <figure className="media-stage mx-auto mt-14 w-full max-w-6xl overflow-hidden bg-[#f1f1f3] 2xl:max-w-[1400px]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.07] px-5 py-4 text-xs font-semibold text-text-muted-light sm:px-7">
        <span>Opny Kontrollarchitektur</span>
        <span>Organisation · Technik · Kompetenz</span>
      </div>

      <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch lg:p-8">
        <Link
          href="/produkte/trustarch"
          className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.7rem] border border-black/[0.08] bg-white shadow-[0_24px_70px_-45px_rgba(0,0,0,0.35)]"
        >
          <div className="flex items-center justify-between gap-3 border-b border-black/[0.07] px-5 py-4">
            <div>
              <div className="text-sm font-semibold text-text-primary-light">
                TrustArch
              </div>
              <div className="mt-1 text-xs text-text-muted-light">
                Compliance und Nachweise organisieren
              </div>
            </div>
            <span className="rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1.5 text-[11px] font-semibold text-text-muted-light">
              Produktansicht
            </span>
          </div>
          <Image
            src="/media/trustarch/trustarch-dashboard-1600x1000.jpg"
            alt="TrustArch-Produktansicht mit Reifegradübersicht und offenen Feststellungen"
            width={1600}
            height={1000}
            priority
            sizes="(min-width: 1536px) 680px, (min-width: 1024px) 560px, 92vw"
            className="aspect-[8/5] w-full object-contain object-top"
          />
        </Link>

        <Link
          href="/produkte/nodex#produktvideo"
          className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#151517] text-white shadow-[0_24px_70px_-45px_rgba(0,0,0,0.7)]"
        >
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
            <div>
              <div className="text-sm font-semibold">NodeX</div>
              <div className="mt-1 text-xs text-white/70">
                KI-Zugänge und Datenwege kontrollieren
              </div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold text-white/70">
              Produkteinblick
            </span>
          </div>

          <div className="grid flex-1 gap-5 p-5 sm:grid-cols-[minmax(0,1fr)_160px] sm:items-center sm:p-6 2xl:grid-cols-[minmax(0,1fr)_210px]">
            <div className="min-w-0 space-y-3">
              {nodeXControls.map(([label, text]) => (
                <div
                  key={label}
                  className="grid grid-cols-[64px_1fr] gap-3 border-t border-white/10 pt-3 text-xs"
                >
                  <span className="font-semibold text-white/85">{label}</span>
                  <span className="text-white/70">{text}</span>
                </div>
              ))}
            </div>

            <div className="relative order-first mx-auto w-full max-w-[190px] overflow-hidden rounded-[1.2rem] border border-white/10 sm:order-none sm:max-w-none">
              <Image
                src="/media/nodex/marketing-opny-nodex-poster.jpg"
                alt="NodeX-Produkteinblick mit maskierter Projektbezeichnung und lokal wiederhergestellter Antwort"
                width={440}
                height={744}
                sizes="(min-width: 1536px) 210px, (min-width: 640px) 160px, 190px"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.012]"
              />
              <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-[10px] font-semibold backdrop-blur">
                22 Sek. Produktvideo
              </span>
            </div>
          </div>
        </Link>

        <div className="rounded-[1.7rem] border border-black/[0.08] bg-white p-6 sm:p-7 lg:col-span-2 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.1em] text-text-muted-light">
              Beratung & Befähigung
            </div>
            <div className="mt-3 text-xl font-semibold tracking-[-0.03em] text-text-primary-light">
              KI in Entscheidungen, Rollen und Arbeitsabläufen verankern.
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold text-text-muted-light">
              {["ChatGPT", "Gemini", "Copilot", "AI Act"].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-black/[0.08] bg-black/[0.025] px-3 py-1.5"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
            <Link
              href="/loesungen/ki-beratung-automotive"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#151517] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              KI-Beratung
            </Link>
            <Link
              href="/loesungen/ki-schulungen-automotive"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-black/[0.1] bg-white px-4 py-2.5 text-xs font-semibold text-text-primary-light transition hover:bg-black/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              KI-Schulungen
            </Link>
          </div>
        </div>
      </div>

      <figcaption className="border-t border-black/[0.07] px-5 py-4 text-xs leading-relaxed text-text-muted-light sm:px-7">
        TrustArch wird mit freigegebenen Beispieldaten gezeigt. NodeX wird mit
        einem freigegebenen Produkteinblick dargestellt.
      </figcaption>
    </figure>
  );
}
