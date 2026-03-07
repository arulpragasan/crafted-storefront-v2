"use client"

import { ImageTile } from "@/components/ui/ImageTile"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"

interface RunwayStripProps {
  images: string[]
}

export function RunwayStrip({ images }: RunwayStripProps) {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // horizontal motion
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <Section className="bg-white">

      <Container>

        <SectionTitle className="mb-20">
          Runway Highlights
        </SectionTitle>

      </Container>

      <section
        ref={ref}
        className="relative h-[160vh]"
      >

        {/* Sticky viewport */}
        <div
          className="
          sticky top-0 h-screen flex items-center overflow-hidden
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          "
        >

          <motion.div
            style={{ x }}
            className="flex gap-10 px-16 will-change-transform"
          >

            {images.map((src, i) => (
              <div
                key={i}
                className="
                group relative
                w-[320px] md:w-[420px]
                aspect-[3/4]
                flex-shrink-0
                rounded-xl
                overflow-hidden
                shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]
                "
              >

                <ImageTile
                  src={src}
                  alt={`Runway look ${i + 1}`}
                  fill
                  className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                  "
                />

                {/* Look badge */}
                <div
                  className="
                  absolute bottom-6 left-6
                  text-white text-[11px]
                  tracking-[0.35em]
                  uppercase
                  bg-black/30 backdrop-blur
                  px-3 py-1 rounded-full
                  "
                >
                  LOOK {String(i + 1).padStart(2, "0")}
                </div>

              </div>
            ))}

          </motion.div>

        </div>

      </section>

    </Section>
  )
}