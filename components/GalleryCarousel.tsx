"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type RefObject } from "react";
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
const EAGER_SLIDES = 6;
const PRELOAD_MARGIN = "500px";

function carouselSize(image: ProjectImage) {
  const maxWidth = Math.ceil(
    (CAROUSEL_MAX_HEIGHT * image.width) / image.height
  );
  return `${maxWidth}px`;
}

function CarouselSlide({
  image,
  caption,
  show,
  scroller,
  onOpen,
  onReveal,
}: {
  image: ProjectImage;
  caption?: string;
  show: boolean;
  scroller: RefObject<HTMLDivElement | null>;
  onOpen: () => void;
  onReveal: () => void;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (show) return;
    const el = ref.current;
    const root = scroller.current;
    if (!el || !root) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onReveal();
          io.disconnect();
        }
      },
      { root, rootMargin: PRELOAD_MARGIN }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show, scroller, onReveal]);

  return (
    <figure className="carousel-item" data-slide ref={ref}>
      <button
        type="button"
        className="carousel-btn"
        aria-label={`View ${image.caption}`}
        onClick={onOpen}
      >
        {show ? (
          <Image
            src={image.src}
            alt={image.caption}
            width={image.width}
            height={image.height}
            sizes={carouselSize(image)}
            loading="eager"
          />
        ) : (
          <div
            className="carousel-ph"
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
          />
        )}
      </button>
      {caption && (
        <figcaption className="gallery-caption">{caption}</figcaption>
      )}
    </figure>
  );
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
  const [revealed, setRevealed] = useState(EAGER_SLIDES);

  const revealFrom = (index: number) => {
    setRevealed((r) => Math.max(r, index + 2));
  };

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
        {images.map((image, i) => (
          <CarouselSlide
            key={image.src}
            image={image}
            caption={captions ? image.caption : undefined}
            show={i < revealed}
            scroller={scroller}
            onOpen={() => setActive(image)}
            onReveal={() => revealFrom(i)}
          />
        ))}
      </div>
      {active && <Lightbox image={active} onClose={() => setActive(null)} />}
    </div>
  );
}