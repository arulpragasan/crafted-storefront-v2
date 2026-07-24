"use client"

import { ProgramSpotlight } from "@/features/programs/components/ProgramSpotlight"
import type { ProgramHighlightSection } from "@/types/homepage"

type FeaturedProgramSectionProps = {
  item: ProgramHighlightSection["item"]
}

export default function FeaturedProgramSection({ item }: FeaturedProgramSectionProps) {
  return (
    <ProgramSpotlight
      title="Featured Program"
      program={item}
      showBrand
      showDescription
      showSessions
    />
  )
}