"use client"

import { useState } from "react";
import Image from "next/image";
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
    const parsed = new URL(url);

    const videoId =
      parsed.searchParams.get("v") ||
      parsed.pathname.split("/").pop();

    if (!videoId) return null;

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return null;
  }
}

export function PlayerStage({ media, title }: PlayerStageProps) {
  const [playing, setPlaying] = useState(false);

  const poster =
    getImageUrl(media.poster_url) || "/images/placeholder.png";

  const isLive = media.kind === "youtube_live";

  if (media.kind === "uploaded_video") {
    return (
      <div className="relative w-full overflow-hidden rounded-3xl bg-black aspect-video">
        {!playing ? (
          <button
            className="relative flex w-full h-full items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            type="button"
          >
            <Image
              className="object-cover"
              src={poster}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
              priority
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-3xl text-gray-900 shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
                ▶
              </span>
            </span>
          </button>
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-contain"
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

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-black aspect-video">
      {!playing ? (
        <button
          className="relative flex w-full h-full items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          type="button"
        >
          <Image
            className="object-cover"
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
            priority
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-3xl text-gray-900 shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
              ▶
            </span>
          </span>
          {isLive && (
            <span className="absolute top-4 left-4 rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
              LIVE
            </span>
          )}
        </button>
      ) : embedUrl ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-sm text-gray-400">Unable to load video.</p>
        </div>
      )}
    </div>
  );
}
