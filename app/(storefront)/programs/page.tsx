import { Section, Container } from "@/components/layout"
import { Display } from "@/components/ui/Typography"
import { ProgramSection } from "@/features/programs/components/ProgramSection"
import { type ProgramCardProps } from "@/features/programs/components/ProgramCard"
import { getPrograms } from "@/lib/api/programs"

type Program = ProgramCardProps["program"]

export default async function ProgramsPage() {
  const { data: allPrograms = [] }: { data: Program[] } = await getPrograms()

  const livePrograms = allPrograms.filter((p) => p.status === "live")
  const upcomingPrograms = allPrograms.filter((p) => p.status === "scheduled")
  const completedPrograms = allPrograms.filter((p) => p.status === "completed")

  // Spotlight priority: live → scheduled → completed → first available.
  const spotlightProgram =
    livePrograms[0] ??
    upcomingPrograms[0] ??
    completedPrograms[0] ??
    allPrograms[0]

  return (
    <>
      {/* Hero — minimal, editorial, centered */}
      <Section>
        <Container size="wide">
          <div className="flex flex-col items-center py-12 md:py-20 lg:py-28">
            <Display className="text-center">Programs</Display>
          </div>
        </Container>
      </Section>

      {/* Spotlight — the editorial centerpiece */}
      {spotlightProgram && (
        <ProgramSection variant="spotlight" programs={[spotlightProgram]} />
      )}

      {/* Live now */}
      {livePrograms.length > 0 && (
        <ProgramSection
          title="Live Now"
          variant="carousel"
          programs={livePrograms}
        />
      )}

      {/* Coming soon */}
      {upcomingPrograms.length > 0 && (
        <ProgramSection
          title="Coming Soon"
          variant="carousel"
          programs={upcomingPrograms}
        />
      )}

      {/* Explore — the full collection */}
      <ProgramSection
        title="Explore"
        variant="grid"
        programs={allPrograms}
      />

      {/* Previously featured */}
      {completedPrograms.length > 0 && (
        <ProgramSection
          title="Previously Featured"
          variant="carousel"
          programs={completedPrograms}
        />
      )}
    </>
  )
}
