import Image from "next/image";
import ImageZoom from "./ImageZoom";

type MediaStageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  mobileSrc?: string;
  zoom?: boolean;
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
  zoom = false,
  label,
  status,
  caption,
  priority = false,
  sizes = "100vw",
  className,
  imageClassName,
}: MediaStageProps) {
  const picture = (
    <picture>
      {mobileSrc ? (
        <source media="(max-width: 639px)" srcSet={mobileSrc} />
      ) : null}
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
  );
  return (
    <figure className={cn("media-stage", className)}>
      {label || status ? (
        <div className="media-label">
          <span>{label}</span>
          {status ? <span className="media-status">{status}</span> : null}
        </div>
      ) : null}
      {zoom ? (
        <ImageZoom
          src={src}
          alt={alt}
          width={width}
          height={height}
          label={label}
          status={status}
          caption={caption}
        >
          {picture}
        </ImageZoom>
      ) : (
        picture
      )}
      {caption ? (
        <figcaption className="media-caption">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
