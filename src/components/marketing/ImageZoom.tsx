"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
  status?: string;
  caption?: string;
  children: ReactNode;
};

type ScrollState = {
  x: number;
  y: number;
  bodyOverflow: string;
  rootOverflow: string;
};

export default function ImageZoom({
  src,
  alt,
  width,
  height,
  label,
  status,
  caption,
  children,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<ScrollState | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [enlarged, setEnlarged] = useState(false);
  const titleId = useId();
  const captionId = useId();

  const restoreScroll = useCallback(() => {
    const previous = scrollRef.current;
    if (!previous) return;
    scrollRef.current = null;
    document.body.style.overflow = previous.bodyOverflow;
    document.documentElement.style.overflowY = previous.rootOverflow;
    window.scrollTo({ left: previous.x, top: previous.y, behavior: "instant" });
  }, []);

  useEffect(() => restoreScroll, [restoreScroll]);

  function open() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    scrollRef.current = {
      x: window.scrollX,
      y: window.scrollY,
      bodyOverflow: document.body.style.overflow,
      rootOverflow: document.documentElement.style.overflowY,
    };
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowY = "hidden";
    setEnlarged(false);
    setIsOpen(true);
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });
  }

  function closed() {
    setIsOpen(false);
    setEnlarged(false);
    restoreScroll();
    triggerRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="media-zoom-trigger"
        onClick={open}
        aria-label={`${alt} – vergrößern`}
        aria-haspopup="dialog"
      >
        {children}
        <span className="media-zoom-hint" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="10" cy="10" r="6" />
            <path d="m15 15 5 5M7 10h6m-3-3v6" />
          </svg>
          Vergrößern
        </span>
      </button>
      <dialog
        ref={dialogRef}
        className="image-dialog"
        aria-labelledby={titleId}
        aria-describedby={caption ? captionId : undefined}
        onClose={closed}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const targets = event.currentTarget.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [tabindex="0"]',
          );
          const first = targets[0];
          const last = targets[targets.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <div className="image-dialog-panel">
          <div className="image-dialog-toolbar">
            <div className="image-dialog-heading">
              <h2 id={titleId}>{label || "Produktansicht"}</h2>
              {status ? <span className="media-status">{status}</span> : null}
            </div>
            <div className="image-dialog-actions">
              <button
                type="button"
                className="button button-secondary button-small"
                aria-pressed={enlarged}
                onClick={() => {
                  setEnlarged(!enlarged);
                  viewportRef.current?.scrollTo({ top: 0, left: 0 });
                }}
              >
                {enlarged ? "Einpassen" : "Vergrößern"}
              </button>
              <button
                ref={closeRef}
                type="button"
                className="button button-primary button-small"
                onClick={() => dialogRef.current?.close()}
              >
                Schließen <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <div
            ref={viewportRef}
            className="image-dialog-viewport"
            tabIndex={0}
            aria-label="Bildansicht; bei Vergrößerung scrollbar"
          >
            {isOpen ? (
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                unoptimized
                className={`image-dialog-image${enlarged ? " is-enlarged" : ""}`}
                style={enlarged ? { width: `${width}px` } : undefined}
              />
            ) : null}
          </div>
          {caption ? (
            <p id={captionId} className="image-dialog-caption">
              {caption}
            </p>
          ) : null}
        </div>
      </dialog>
    </>
  );
}
