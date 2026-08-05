"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function QuoteModal({
  label,
  body,
  cite,
  href,
}: {
  label: string;
  body: string;
  cite: string;
  href: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="about-modal-btn"
        onClick={() => setOpen(true)}
      >
        {label}
        <span aria-hidden="true"> ↗</span>
      </button>
      {open &&
        createPortal(
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={label}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <div className="quote-modal">
              <blockquote className="quote-modal-body">{body}</blockquote>
              <p className="quote-modal-cite">― {cite}</p>
              <p className="quote-modal-source">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  Source on Goodreads
                  <span aria-hidden="true"> ↗</span>
                </a>
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}