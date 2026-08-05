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

const MOBILE_MAX = "(max-width: 640px)";
const MOBILE_HEIGHT = (vh: number) => Math.max(240, Math.min(460, vh * 0.4));
const MOBILE_PAD = 40;

function svh() {
  const probe = document.createElement("div");
  probe.style.cssText =
    "position:fixed;height:100svh;left:-9999px;top:-9999px;visibility:hidden;pointer-events:none;";
  document.body.appendChild(probe);
  const h = probe.offsetHeight;
  probe.remove();
  return h > 0 ? h : window.innerHeight;
}

function carouselSize(image: ProjectImage) {
  const maxWidth = Math.ceil(
    (CAROUSEL_MAX_HEIGHT * image.width) / image.height
  );
  return `${maxWidth}px`;
}

function carouselHeight(images: ProjectImage[]) {
  if (typeof window === "undefined" || images.length === 0) return null;
  if (!window.matchMedia(MOBILE_MAX).matches) return null;
  const maxAspect = Math.max(...images.map((im) => im.width / im.height));
  const avail = window.innerWidth - MOBILE_PAD;
  return Math.min(MOBILE_HEIGHT(svh()), avail / maxAspect);
}

function useCarouselHeight(images: ProjectImage[]) {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const compute = () => setHeight(carouselHeight(images));
    compute();
    const mq = window.matchMedia(MOBILE_MAX);
    const onChange = () => compute();
    window.addEventListener("resize", compute);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      window.removeEventListener("resize", compute);
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, [images]);

  return height;
}

function CarouselSlide({
  image,
  caption,
  show,
  height,
  scroller,
  onOpen,
  onReveal,
}: {
  image: ProjectImage;
  caption?: string;
  show: boolean;
  height: number | null;
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

  const mobileStyle = height ? { height } : undefined;

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
            style={mobileStyle}
          />
        ) : (
          <div
            className="carousel-ph"
            style={{
              aspectRatio: `${image.width} / ${image.height}`,
              ...(height ? { height, width: "auto" } : {}),
            }}
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
  const imageHeight = useCarouselHeight(images);

  const revealFrom = (index: number) => {
    setRevealed((r) => Math.max(r, index + 2));
  };

  const scrollBySlide = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    const step = (slide?.offsetWidth ?? 240) + 20;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = Math.min(Math.max(el.scrollLeft + dir * step, 0), maxScroll);
    if (Math.abs(target - el.scrollLeft) > 1) {
      el.scrollTo({ left: target, behavior: "smooth" });
    }
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
            height={imageHeight}
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