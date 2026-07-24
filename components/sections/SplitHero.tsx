"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { heroZoom, fadeRise } from "@/lib/motion/presets"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Title, Subtitle, Text, Muted, Caption } from "@/components/ui/Typography"
import { EditorialCTA } from "@/components/ui/EditorialCTA"
import {
  imagePresentationClass,
  surfacePresentationClass,
} from "@/styles/design-system/presentation"

type SplitHeroProps = {
  program?: {
    title: string
    brand: string
    time: string
    slug: string
  }
}

const heroImage =
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000"

export function SplitHero({ program }: SplitHeroProps) {
  return (
    <Section variant="hero" className="overflow-hidden">

      <Container size="wide">

        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">

          {/* Left — Image */}
          <motion.div
            variants={heroZoom}
            initial="hidden"
            animate="show"
            className={`relative aspect-[4/5] ${surfacePresentationClass.imageHero}`}
          >
            <Image
              src={heroImage}
              alt="Crafted Fashion Event"
              fill
              priority
              className={imagePresentationClass.cover}
              sizes="50vw"
            />
          </motion.div>

          {/* Right — Editorial */}
          <motion.div
            variants={fadeRise}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >

            <Caption className="tracking-[0.35em] block">
              Crafted Fashion Week
            </Caption>

            <Title className="leading-[1.05]">
              Where Design
              <br />
              Meets Story
            </Title>

            <Text className="text-neutral-600 max-w-md">
              Discover brands, products, and runway programs through a
              curated editorial experience crafted for modern events.
            </Text>

            {program && (
              <div className="pt-6 space-y-4 border-t border-neutral-200">

                <Caption className="block">
                  Upcoming Runway
                </Caption>

                <Subtitle>
                  {program.brand}
                </Subtitle>

                <Text>
                  {program.title}
                </Text>

                <Muted className="text-neutral-500">
                  {program.time}
                </Muted>

                <EditorialCTA href={`/program/${program.slug}`}>
                  Watch Runway
                </EditorialCTA>

              </div>
            )}

          </motion.div>

        </div>

      </Container>

    </Section>
  )
}
