"use client"

import type { SessionMedia } from "@/features/sessions/types";

type InstagramMedia = Extract<SessionMedia, { kind: "instagram_post" }>;

interface InstagramStageProps {
  media: InstagramMedia;
  title: string;
}

function getImageUrl(url: string | null | undefined): string | null {
  if (!url || url.trim() === "") return null;
  return url;
}

export function InstagramStage({ media, title }: InstagramStageProps) {
  const poster =
    getImageUrl(media.poster_url) || "/images/placeholder.png";

  return (
    <div className="stage stage--instagram">
      <div className="stage__instagram-card">
        <img
          className="stage__instagram-poster"
          src={poster}
          alt={title}
        />
        <a
          className="stage__cta"
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Instagram ↗
        </a>
      </div>
    </div>
  );
}
