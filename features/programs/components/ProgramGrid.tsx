import { Grid } from "@/components/layout/Grid"
import { ProgramCard } from "./ProgramCard"

export function ProgramGrid({ programs }: { programs: any[] }) {
  return (
    <Grid cols={3}>
      {programs.map(program => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </Grid>
  )
}