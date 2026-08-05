import type { GalleryGroup, ProjectVideo } from "@/lib/data";
import { GalleryCarousel } from "./GalleryCarousel";

function youtubeId(url: string) {
  const m = url.match(/[?&]v=([\w-]{6,})/);
  return m ? m[1] : null;
}

export function Gallery({
  note,
  groups,
  videos,
  youtube,
}: {
  note?: string;
  groups: GalleryGroup[];
  videos?: ProjectVideo[];
  youtube?: ProjectVideo[];
}) {
  return (
    <section className="gallery">
      {note && <p className="gallery-note">{note}</p>}
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
      {youtube && youtube.length > 0 && (
        <div className="gallery-group">
          <h2 className="gallery-head">Watch</h2>
          <div className="gallery-embeds">
            {youtube.map((video) => (
              <figure key={video.src} className="gallery-embed-wrap">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId(video.src)}`}
                  title={video.caption}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="gallery-embed"
                />
                <figcaption className="gallery-embed-label">
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
