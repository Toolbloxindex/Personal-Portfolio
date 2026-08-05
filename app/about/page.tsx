import type { Metadata } from "next";
import Image from "next/image";
import { Gallery } from "@/components/Gallery";
import { QuoteModal } from "@/components/QuoteModal";
import { aboutGallery, aboutStory, photography, photo } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tomás Correia — a letter about technology, science, endurance sport, space, and the pursuit of abundance.",
};

export default function About() {
  return (
    <main id="main" className="main container">
      <header className="page-head">
        <h1 className="page-title">About</h1>
      </header>

      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="(max-width: 600px) 90vw, 340px"
        className="about-photo"
      />

      <div className="prose about-story">
        {aboutStory.map((block, i) =>
          block.type === "quote" ? (
            <blockquote key={i} className="about-quote">
              {block.text}
              <cite>— {block.cite}</cite>
            </blockquote>
          ) : block.type === "modal" ? (
            <QuoteModal
              key={i}
              label={block.label}
              body={block.body}
              cite={block.cite}
              href={block.href}
            />
          ) : (
            <p key={i}>{block.text}</p>
          )
        )}
      </div>

      {aboutGallery.length > 0 && (
        <Gallery
          note="A few photos"
          groups={[{ label: "Photos", images: aboutGallery, captions: false }]}
        />
      )}

      {photography.length > 0 && (
        <Gallery
          note="Photography, just for fun"
          groups={[{ label: "Photos", images: photography }]}
        />
      )}
    </main>
  );
}