"use client"

import { useState, useCallback, useEffect } from "react";
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
      <div className="stage stage--gallery">
        <img
          className="stage__featured"
          src="/images/placeholder.png"
          alt={title}
        />
      </div>
    );
  }

  const currentImage = images[currentIndex];
  const altText = currentImage.alt || title;

  return (
    <div className="stage stage--gallery">
      <div className="stage__featured-wrapper">
        <img
          className="stage__featured"
          src={currentImage.url}
          alt={altText}
        />
        {!isSingle && (
          <>
            <button
              className="stage__nav stage__nav--prev"
              onClick={goPrev}
              aria-label="Previous image"
              type="button"
            >
              ‹
            </button>
            <button
              className="stage__nav stage__nav--next"
              onClick={goNext}
              aria-label="Next image"
              type="button"
            >
              ›
            </button>
            <span className="stage__counter">
              {currentIndex + 1} / {total}
            </span>
          </>
        )}
      </div>

      {!isSingle && (
        <>
          {/* Desktop thumbnail strip */}
          <div className="stage__thumbnails" aria-hidden="true">
            {images.map((image, index) => (
              <button
                key={index}
                className={`stage__thumbnail ${
                  index === currentIndex ? "stage__thumbnail--active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                type="button"
                aria-label={`Go to image ${index + 1}`}
              >
                <img
                  src={image.url}
                  alt={image.alt || title}
                />
              </button>
            ))}
          </div>

          {/* Mobile dot navigation */}
          <div className="stage__dots" role="tablist" aria-label="Image navigation">
            {images.map((_, index) => (
              <button
                key={index}
                className={`stage__dot ${
                  index === currentIndex ? "stage__dot--active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
