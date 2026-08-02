"use client";

import Image from "next/image";
import { useRef } from "react";
import type { ProjectImage } from "@/lib/data";

export function GalleryCarousel({
  label,
  images,
  framed = true,
}: {
  label: string;
  images: ProjectImage[];
  framed?: boolean;
}) {
  const scroller = useRef<HTMLDivElement>(null);

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
            <Image
              src={image.src}
              alt={image.caption}
              width={image.width}
              height={image.height}
              sizes="(max-width: 860px) 180px, 240px"
            />
            <figcaption className="gallery-caption">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
