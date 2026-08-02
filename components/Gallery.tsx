import type { GalleryGroup, ProjectVideo } from "@/lib/data";
import { GalleryCarousel } from "./GalleryCarousel";

export function Gallery({
  groups,
  videos,
}: {
  groups: GalleryGroup[];
  videos?: ProjectVideo[];
}) {
  return (
    <section className="gallery">
      {groups.map((group) => (
        <GalleryCarousel
          key={group.label}
          label={group.label}
          images={group.images}
          framed={group.framed}
          captions={group.captions}
        />
      ))}
      {videos && videos.length > 0 && (
        <div className="gallery-group">
          <h2 className="gallery-head">Demo</h2>
          <div className="gallery-videos">
            {videos.map((video) => (
              <figure key={video.src} className="gallery-video-wrap">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="gallery-video"
                />
                <figcaption className="gallery-caption">
                  {video.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
