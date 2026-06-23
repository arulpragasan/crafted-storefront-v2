"use client"

import Image from "next/image";
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
      <div className="flex flex-col items-center gap-2 px-6 py-5">
        <p className="text-sm text-gray-500">
          This experience lives outside the application.
        </p>
        <a
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Experience
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
