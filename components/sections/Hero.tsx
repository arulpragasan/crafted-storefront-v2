"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { heroZoom, fadeRise } from "@/lib/motion/presets"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Display, Body, Caption } from "@/components/ui/Typography"
import { EditorialCTA } from "@/components/ui/EditorialCTA"
import { imagePresentationClass } from "@/styles/design-system/presentation"

const heroMedia = {
  type: "video" as const, // "image" | "video"

  image:
    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000",

  poster:
    "",

  video: "/videos/hero.mp4",
}

export function Hero() {
  const isVideo = heroMedia.type === "video"

  const overlayClass = isVideo
    ? "bg-gradient-to-br from-white/40 via-white/8 to-white/30"
    : "bg-gradient-to-b from-white/65 via-white/25 to-white/70"

  return (
    <Section variant="hero" className="overflow-hidden">
  {/* Background */}
  <motion.div
    {...(!isVideo && {
      variants: heroZoom,
      initial: "hidden",
      animate: "show",
    })}
    className="absolute inset-0 -z-10"
  >
    {isVideo ? (
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroMedia.poster}
        disablePictureInPicture
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src={heroMedia.video}
          type="video/mp4"
        />
      </video>
    ) : (
      <Image
        src={heroMedia.image}
        alt="Luxury fashion event by Crafted"
        fill
        priority
        sizes="100vw"
        className={imagePresentationClass.cover}
      />
    )}

    {/* Editorial Overlay */}
    <div
      className={`
        absolute inset-0
        ${overlayClass}
      `}
    />
  </motion.div>

  <Container size="narrow">
    <div className="relative -mt-12 md:-mt-20">
      <motion.div
        variants={fadeRise}
        initial="hidden"
        animate="show"
        className="space-y-10 md:space-y-12 text-center"
      >
        {/* Label */}
        <Caption
          className="
            block
            tracking-[0.35em]
            uppercase
            text-stone-500
            font-medium
          "
        >
          Luxury Fashion Events 2026
        </Caption>

        {/* Headline */}
        <Display
          align="center"
          className="
            mx-auto
            max-w-[13ch]
            leading-[0.96]
          "
        >
          Where Fashion
          <br />
          Comes to Life
        </Display>

        {/* Description */}
        <Body
          className="
            mx-auto
            max-w-xl
            leading-8
            text-neutral-800
          "
        >
          Explore curated fashion events, discover visionary designers, and experience the stories shaping luxury fashion through an editorial destination.
        </Body>

        {/* Actions */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            pt-2
          "
        >
          <EditorialCTA href="/events">
            Explore Events
          </EditorialCTA>

          <EditorialCTA href="/designers">
            Featured Designers
          </EditorialCTA>
        </div>
      </motion.div>
    </div>
  </Container>
</Section>
  )
}