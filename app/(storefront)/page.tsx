import { Hero } from "@/components/sections/Hero"
// import { SplitHero } from "@/components/sections/SplitHero"
import SectionRenderer from "@/components/sections/SectionRenderer"
import { getHomepage } from "@/lib/api/homepage"
// import { ScrollDiscover } from "@/components/ui/ScrollDiscover"

export default async function LandingPage() {
  const data = await getHomepage()

  return (
    <main>
      <Hero />
      {/*<ScrollDiscover />*/}

      <SectionRenderer sections={data.sections} />

    </main>
  )
}