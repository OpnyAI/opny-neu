import Image from "next/image";

type MediaStageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  mobileSrc?: string;
  label?: string;
  status?: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function MediaStage({
  src,
  alt,
  width,
  height,
  mobileSrc,
  label,
  status,
  caption,
  priority = false,
  sizes = "100vw",
  className,
  imageClassName,
}: MediaStageProps) {
  return (
    <figure className={cn("media-stage", className)}>
      {label || status ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.07] px-5 py-4 text-xs font-semibold text-text-muted-light sm:px-7">
          <span>{label}</span>
          {status ? (
            <span className="rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1.5">
              {status}
            </span>
          ) : null}
        </div>
      ) : null}
      <picture>
        {mobileSrc ? <source media="(max-width: 639px)" srcSet={mobileSrc} /> : null}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={cn("h-auto w-full", imageClassName)}
        />
      </picture>
      {caption ? (
        <figcaption className="border-t border-black/[0.07] px-5 py-4 text-xs leading-relaxed text-text-muted-light sm:px-7">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
