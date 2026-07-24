"use client"

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils/getImageUrl";
import type { SessionMedia } from "@/features/sessions/types";

type GalleryMedia = Extract<SessionMedia, { kind: "image_gallery" }>;

interface GalleryStageProps {
  media: GalleryMedia;
  title: string;
}

export function GalleryStage({ media, title }: GalleryStageProps) {
  const { images } = media;
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;
  const isSingle = total <= 1;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isSingle) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSingle, goNext, goPrev]);

  if (total === 0) {
    return (
      <div className="relative w-full overflow-hidden rounded-3xl bg-gray-100 aspect-video">
        <Image
          className="object-cover"
          src="/images/placeholder.png"
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
        />
      </div>
    );
  }

  const currentImage = images[currentIndex];
  const altText = currentImage.alt || title;

  return (
    <div className="flex flex-col gap-4">
      {/* Featured image */}
      <div className="relative w-full overflow-hidden rounded-3xl bg-gray-100 aspect-video">
        <Image
          className="object-cover"
          src={getImageUrl(currentImage.url)}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
          priority
        />

        {!isSingle && (
          <>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-xl text-gray-800 shadow backdrop-blur-sm transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              onClick={goPrev}
              aria-label="Previous image"
              type="button"
            >
              ‹
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-xl text-gray-800 shadow backdrop-blur-sm transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              onClick={goNext}
              aria-label="Next image"
              type="button"
            >
              ›
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {currentIndex + 1} / {total}
            </span>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {!isSingle && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative flex-shrink-0 h-16 w-24 overflow-hidden rounded-lg border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                index === currentIndex
                  ? "border-blue-600 opacity-100"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
              onClick={() => setCurrentIndex(index)}
              type="button"
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                className="object-cover"
                src={getImageUrl(image.url)}
                alt={image.alt || title}
                fill
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
