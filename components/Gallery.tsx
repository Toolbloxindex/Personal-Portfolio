import type { GalleryGroup, ProjectVideo } from "@/lib/data";
import { GalleryCarousel } from "./GalleryCarousel";

export function Gallery({
  groups,
  video,
}: {
  groups: GalleryGroup[];
  video?: ProjectVideo;
}) {
  return (
    <section className="gallery">
      {groups.map((group) => (
        <GalleryCarousel
          key={group.label}
          label={group.label}
          images={group.images}
          framed={group.framed}
        />
      ))}
      {video && (
        <div className="gallery-group">
          <h2 className="gallery-head">Demo</h2>
          <figure className="gallery-video-wrap">
            <video
              src={video.src}
              controls
              playsInline
              preload="metadata"
              className="gallery-video"
            />
            <figcaption className="gallery-caption">{video.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
