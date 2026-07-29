"use client";

import { useEffect, useRef, useState } from "react";

const videoPath = "/media/nodex/marketing-opny-nodex.MP4";
const posterPath = "/media/nodex/marketing-opny-nodex-poster.jpg";

export default function NodeXPreview({
  compact = false,
  autoPlay = false,
}: {
  compact?: boolean;
  autoPlay?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePlayback = () => {
      const video = videoRef.current;
      const reduceMotion = mediaQuery.matches;

      setPrefersReducedMotion(reduceMotion);

      if (!video) return;

      if (autoPlay && !reduceMotion) {
        void video.play().catch(() => {
          // Native controls remain available when browser autoplay is blocked.
        });
      } else {
        video.pause();
        video.currentTime = 0;
      }
    };

    updatePlayback();
    mediaQuery.addEventListener("change", updatePlayback);

    return () => mediaQuery.removeEventListener("change", updatePlayback);
  }, [autoPlay]);

  return (
    <figure className="media-stage overflow-hidden bg-[#080b10] text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 text-xs font-semibold text-white/65 sm:px-7">
        <span>NodeX · Produkteinblick</span>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-1.5 text-emerald-100/80">
          Geschützter Datenfluss
        </span>
      </div>
      <div
        className={`grid items-center gap-7 ${
          compact
            ? "p-5 sm:p-7"
            : "p-6 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:p-12"
        }`}
      >
        {!compact && (
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-200/70">
              Vertrauliche Angaben schützen
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              Sensible Begriffe werden vor der Modellanfrage ersetzt.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Der gezeigte Ablauf maskiert eine Projektbezeichnung, übergibt
              nur das Referenztoken an das externe KI-Modell und stellt den
              ursprünglichen Kontext anschließend lokal wieder her.
            </p>
          </div>
        )}
        <video
          ref={videoRef}
          controls
          loop={autoPlay && !prefersReducedMotion}
          muted
          playsInline
          preload="metadata"
          poster={posterPath}
          aria-label="NodeX-Produkteinblick zum Schutz einer sensiblen Projektbezeichnung"
          aria-describedby="nodex-product-video-description"
          className="mx-auto h-auto w-full max-w-[440px] rounded-[1.6rem] border border-white/10 bg-black shadow-[0_28px_90px_-42px_rgba(20,184,166,0.45)]"
        >
          <source src={videoPath} type="video/mp4" />
          <a href={videoPath}>NodeX-Produktvideo öffnen</a>
        </video>
      </div>
      <figcaption
        id="nodex-product-video-description"
        className="border-t border-white/10 px-5 py-4 text-xs leading-relaxed text-white/65 sm:px-7"
      >
        Der 22-sekündige Produkteinblick zeigt einen freigegebenen
        Beispielablauf: NodeX ersetzt eine sensible Projektbezeichnung vor der
        Anfrage an Anthropic durch ein Referenztoken und stellt die
        ursprüngliche Bezeichnung anschließend aus einem lokalen Vault wieder
        her. Zulässige Modelle und Datenwege werden je Einsatz festgelegt.
      </figcaption>
    </figure>
  );
}
