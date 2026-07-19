"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Reveal } from "@/components/motion/Reveal"
import { ScrollDiscover } from "@/components/ui/ScrollDiscover"
import { Title, Text } from "@/components/ui/Typography"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type BrandHeroData = {
  cover_image?: string | null
  logo_url?: string | null
  name: string
  tagline?: string | null
}

type BrandHeroProps = {
  brand: BrandHeroData
}

export function BrandHero({ brand }: BrandHeroProps) {
  const { scrollY } = useScroll()

  // background parallax
  const bgY = useTransform(scrollY, [0, 600], [0, 140])

  // title animation
  const titleY = useTransform(scrollY, [0, 400], [0, -40])
  const titleScale = useTransform(scrollY, [0, 400], [1, 0.9])
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <section
      id="brand-hero"
      className="relative h-[92vh] min-h-[620px] w-full overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src={getImageUrl(brand.cover_image || brand.logo_url)}
          alt={brand.name}
          fill
          priority
          className="object-cover scale-110"
        />
      </motion.div>

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/70
          via-black/35
          to-transparent
        "
      />

      <div className="absolute bottom-28 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">
          <div className="space-y-6">
            {brand.logo_url && (
              <Reveal>
                <img
                  src={getImageUrl(brand.logo_url)}
                  alt={`${brand.name} logo`}
                  className="h-12 opacity-90"
                />
              </Reveal>
            )}

            <Reveal>
              <motion.div
                style={{
                  y: titleY,
                  scale: titleScale,
                  opacity: titleOpacity,
                }}
              >
                <Title className="text-white max-w-3xl">
                  {brand.name}
                </Title>
              </motion.div>
            </Reveal>

            {brand.tagline && (
              <Reveal>
                <Text className="text-white/90 max-w-2xl">
                  {brand.tagline}
                </Text>
              </Reveal>
            )}
          </div>
        </div>
      </div>

      <ScrollDiscover />
    </section>
  )
}
