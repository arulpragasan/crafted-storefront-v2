"use client"

import Image from "next/image";
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
    <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="relative w-full aspect-video">
        <Image
          className="object-cover"
          src={poster}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
          priority
        />
      </div>
      <div className="flex items-center justify-center px-6 py-5">
        <a
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Instagram
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
