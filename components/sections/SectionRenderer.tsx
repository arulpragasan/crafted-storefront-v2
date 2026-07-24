import type { HomepageSection } from "@/types/homepage"
import CategoriesSection from "@/components/sections/CategoriesSection"
import BrandsSection from "@/components/sections/BrandsSection"
import ProductsSection from "@/components/sections/ProductsSection"
import FeaturedProgramSection from "@/components/sections/FeaturedProgramSection"
import SponsorsSection from "@/components/sections/SponsorsSection"

type Props = {
  sections: HomepageSection[]
}

export default function SectionRenderer({ sections }: Props) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "categories":
            return <CategoriesSection key={index} items={section.items} />

          case "featured_brands":
            return <BrandsSection key={index} items={section.items} />

          case "program_highlight":
            return <FeaturedProgramSection key={index} item={section.item} />

          case "featured_products":
            return <ProductsSection key={index} items={section.items} />

          case "sponsors":
            return <SponsorsSection key={index} items={section.items} />
        }
      })}
    </>
  )
}
