"use client"

import { EditorialCTA } from "@/components/ui/EditorialCTA"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { Reveal } from "@/components/motion/Reveal"
import { Title, Text } from "@/components/ui/Typography"
import {
  imagePresentationClass,
  overlayPresentationClass,
  surfacePresentationClass,
} from "@/styles/design-system/presentation"
import Image from "next/image"

export default function RunwayHighlightSection({ item }) {
  return (
    <Section variant="feature">

      <Container size="full">

        <div className={`relative ${surfacePresentationClass.imageHero}`}>

          <div className="relative aspect-[16/9]">

            <Image
              src={
                "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000"
              }
              alt={item.title}
              fill
              className={imagePresentationClass.cover}
            />

            {/* overlay */}
            <div className={overlayPresentationClass.runwayScrim} />

            {/* content */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-10">

              <Reveal>
                <div className="max-w-xl text-white space-y-6">

                  <Title className="leading-tight text-white">
                    {item.title}
                  </Title>

                  {item.description && (
                    <Text className="text-white/90">
                      {item.description}
                    </Text>
                  )}

                  <EditorialCTA href={`/program/${item.slug}`}>
                    View Runway
                  </EditorialCTA>

                </div>
              </Reveal>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  )
}
