"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { heroZoom, fadeRise } from "@/lib/motion/presets"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Display, Body, Caption } from "@/components/ui/Typography"
import { EditorialCTA } from "@/components/ui/EditorialCTA"
import { imagePresentationClass } from "@/styles/design-system/presentation"

const heroImage =
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000"

export function Hero() {
  return (
    <Section variant="hero" className="overflow-hidden">

      {/* Background */}
      <motion.div
        variants={heroZoom}
        initial="hidden"
        animate="show"
        className="absolute inset-0 -z-10"
      >
        <Image
          src={heroImage}
          alt="Crafted Fashion Event"
          fill
          priority
          className={imagePresentationClass.cover}
          sizes="100vw"
        />

        {/* Editorial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </motion.div>

      <Container size="narrow">

        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate="show"
          className="space-y-10 text-center"
        >
          {/* Label */}
          <Caption className="tracking-[0.35em] block">
            Virtual Fashion Event 2026
          </Caption>

          {/* Headline */}
          <Display align="center" className="leading-[1.05]">
            Where Design
            <br />
            Meets Story
          </Display>

          {/* Description */}
          <Body className="max-w-xl mx-auto text-neutral-600">
            Discover brands, products, and runway programs through a curated
            editorial experience crafted for modern fashion events.
          </Body>

          {/* CTAs */}
          <div className="flex justify-center gap-4 pt-4">

            <EditorialCTA href="/brands">
              Explore Designers
            </EditorialCTA>

            <EditorialCTA href="/programs">
              View Runway
            </EditorialCTA>

          </div>
        </motion.div>

      </Container>
    </Section>
  )
}
