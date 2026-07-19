"use client"

import { ProgramSpotlight } from "@/features/programs/components/ProgramSpotlight"

export default function FeaturedProgramSection({ item }) {
  return (
    <ProgramSpotlight
      sectionLabel="Featured Program"
      program={item}
      showBrand
      showDescription
      showSessions
    />
  )
}