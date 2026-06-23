"use client"

import type { SessionMedia } from "@/features/sessions/types";

type GatewayMedia = Extract<SessionMedia, { kind: "external_link" }>;

interface GatewayStageProps {
  media: GatewayMedia;
  title: string;
}

function getImageUrl(url: string | null | undefined): string | null {
  if (!url || url.trim() === "") return null;
  return url;
}

export function GatewayStage({ media, title }: GatewayStageProps) {
  const poster =
    getImageUrl(media.poster_url) || "/images/placeholder.png";

  return (
    <div className="stage stage--gateway">
      <div className="stage__gateway-card">
        <img
          className="stage__gateway-poster"
          src={poster}
          alt={title}
        />
        <p className="stage__gateway-helper">
          This experience lives outside the application.
        </p>
        <a
          className="stage__cta"
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Experience ↗
        </a>
      </div>
    </div>
  );
}
