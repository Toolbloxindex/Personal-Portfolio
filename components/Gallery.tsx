import Image from "next/image";
import type { ProjectImage } from "@/lib/data";

export function Gallery({ images }: { images: ProjectImage[] }) {
  return (
    <section className="gallery">
      <h2 className="gallery-head">
        Gallery ⬩ {images.length} screens
      </h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <figure className="gallery-item" key={image.src}>
            <Image
              src={image.src}
              alt={image.caption}
              width={image.width}
              height={image.height}
              sizes="(max-width: 860px) 100vw, 50vw"
            />
            <figcaption className="gallery-caption">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
