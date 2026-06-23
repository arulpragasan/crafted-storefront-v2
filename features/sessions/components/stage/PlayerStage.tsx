"use client"

import { useState } from "react";
import type { SessionMedia } from "@/features/sessions/types";

type PlayerMedia = Extract<
  SessionMedia,
  { kind: "youtube_video" } | { kind: "youtube_live" } | { kind: "uploaded_video" }
>;

interface PlayerStageProps {
  media: PlayerMedia;
  title: string;
}

function getImageUrl(url: string | null | undefined): string | null {
  if (!url || url.trim() === "") return null;
  return url;
}

function youtubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url)

    const videoId =
      parsed.searchParams.get("v") ||
      parsed.pathname.split("/").pop()

    if (!videoId) return null

    return `https://www.youtube.com/embed/${videoId}`
  } catch {
    return null
  }
}

export function PlayerStage({ media, title }: PlayerStageProps) {
  const [playing, setPlaying] = useState(false);

  const poster =
    getImageUrl(media.poster_url) || "/images/placeholder.png";

  if (media.kind === "uploaded_video") {
    return (
      <div className="stage stage--player">
        {!playing ? (
          <button
            className="stage__poster-btn"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            type="button"
          >
            <img
              className="stage__poster"
              src={poster}
              alt={title}
            />
            <span className="stage__play-icon" aria-hidden="true">
              ▶
            </span>
          </button>
        ) : (
          <video
            className="stage__video"
            src={media.video_url || undefined}
            controls
            autoPlay
            poster={poster}
            aria-label={title}
          />
        )}
      </div>
    );
  }

  // youtube_video or youtube_live
  const embedUrl = youtubeEmbedUrl(media.url);
  const isLive = media.kind === "youtube_live";

  return (
    <div className="stage stage--player">
      {!playing ? (
        <button
          className="stage__poster-btn"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          type="button"
        >
          <img
            className="stage__poster"
            src={poster}
            alt={title}
          />
          <span className="stage__play-icon" aria-hidden="true">
            ▶
          </span>
          {isLive && (
            <span className="stage__live-badge" aria-label="Live">
              LIVE
            </span>
          )}
        </button>
      ) : embedUrl ? (
        <iframe
          className="stage__iframe"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="stage__error">
          <p>Unable to load video.</p>
        </div>
      )}
      {!playing && isLive && null}
    </div>
  );
}
