import { Grid } from "@/components/layout/Grid"
import { ProgramCard } from "./ProgramCard"

export function ProgramGrid({ programs }: { programs: any[] }) {
  return (
    <Grid variant="catalog">
      {programs.map((program) => (
        <ProgramCard
          key={program.id}
          program={program}
        />
      ))}
    </Grid>
  )
}