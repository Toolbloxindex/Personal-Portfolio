"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ProjectImage } from "@/lib/data";

function Lightbox({
  image,
  onClose,
}: {
  image: ProjectImage;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption || "Project screenshot"}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className="lightbox-close"
        aria-label="Close"
        onClick={onClose}
      >
        ×
      </button>
      <figure className="lightbox-figure">
        <Image
          src={image.src}
          alt={image.caption}
          width={image.width}
          height={image.height}
          sizes="(max-width: 900px) 92vw, 80vw"
        />
        {image.caption && (
          <figcaption className="gallery-caption">{image.caption}</figcaption>
        )}
      </figure>
    </div>,
    document.body
  );
}

const CAROUSEL_MAX_HEIGHT = 460;

function carouselSize(image: ProjectImage) {
  const maxWidth = Math.ceil(
    (CAROUSEL_MAX_HEIGHT * image.width) / image.height
  );
  return `${maxWidth}px`;
}

export function GalleryCarousel({
  label,
  images,
  framed = true,
  captions = true,
}: {
  label: string;
  images: ProjectImage[];
  framed?: boolean;
  captions?: boolean;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<ProjectImage | null>(null);

  const scrollBySlide = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    const step = (slide?.offsetWidth ?? 240) + 20;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="gallery-group">
      <div className="gallery-head">
        <h2>
          {label} ⬩ {images.length}
        </h2>
        <div className="gallery-nav">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBySlide(-1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBySlide(1)}
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className={framed ? "carousel" : "carousel unbordered"}
      >
        {images.map((image) => (
          <figure className="carousel-item" data-slide key={image.src}>
            <button
              type="button"
              className="carousel-btn"
              aria-label={`View ${image.caption}`}
              onClick={() => setActive(image)}
            >
              <Image
                src={image.src}
                alt={image.caption}
                width={image.width}
                height={image.height}
                sizes={carouselSize(image)}
              />
            </button>
            {captions && (
              <figcaption className="gallery-caption">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      {active && <Lightbox image={active} onClose={() => setActive(null)} />}
    </div>
  );
}