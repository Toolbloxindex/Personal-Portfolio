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
  videoBeforeImages,
  youtube,
}: {
  note?: string;
  groups: GalleryGroup[];
  videos?: ProjectVideo[];
  videoBeforeImages?: boolean;
  youtube?: ProjectVideo[];
}) {
  const videoGroup = videos && videos.length > 0 && (
    <div className="gallery-group">
      <h2 className="gallery-head">Demo</h2>
      <div className="gallery-videos">
        {videos.map((video) => (
          <figure key={video.src} className="gallery-video-wrap">
            <video
              src={video.src}
              poster={video.poster}
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
  );

  return (
    <section className="gallery">
      {videoBeforeImages && videoGroup}
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
      {!videoBeforeImages && videoGroup}
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
