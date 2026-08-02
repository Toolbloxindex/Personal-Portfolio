"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ProjectImage } from "@/lib/data";

function ProofLightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const total = images.length;
  const image = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && total > 1) onIndex((index + 1) % total);
      if (e.key === "ArrowLeft" && total > 1) onIndex((index - 1 + total) % total);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onIndex, index, total]);

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Proof"
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
      {total > 1 && (
        <>
          <button
            type="button"
            className="lightbox-prev"
            aria-label="Previous image"
            onClick={() => onIndex((index - 1 + total) % total)}
          >
            ←
          </button>
          <button
            type="button"
            className="lightbox-next"
            aria-label="Next image"
            onClick={() => onIndex((index + 1) % total)}
          >
            →
          </button>
        </>
      )}
    </div>,
    document.body
  );
}

export function ProofGallery({
  label,
  images,
}: {
  label: string;
  images: ProjectImage[];
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="link-arrow link-arrow-btn"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
      >
        {label}
        <span aria-hidden="true">→</span>
      </button>
      {open && (
        <ProofLightbox
          images={images}
          index={index}
          onClose={() => setOpen(false)}
          onIndex={setIndex}
        />
      )}
    </>
  );
}