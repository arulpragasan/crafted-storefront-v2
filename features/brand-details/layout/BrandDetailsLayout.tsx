import { BrandHero } from "@/features/brand-details/components/hero/BrandHero"
import { SignatureLooks } from "@/features/brand-details/components/looks/SignatureLooks"
import { AboutTheMaison } from "@/features/brand-details/components/about/AboutTheMaison"
import { ThemedProducts } from "@/features/brand-details/components/collections/ThemedProducts"
import { ConversationsAndEvents } from "@/features/brand-details/components/programs/ConversationsAndEvents"
import { FromTheAtelier } from "@/features/brand-details/components/connect/FromTheAtelier"
import DesignerCarousel from "@/components/sections/DesignerCarousel"

export function BrandDetailsLayout({ data }: any) {
  const {
    brand,
    brand_story,
    featured_products = [],
    themed_products = [],
    programs = [],
    explore_brands = [],
    messages = [],
  } = data

console.log("themed_products:" , themed_products)
  return (
    <>
      {/* HERO */}
      <BrandHero brand={brand} />

      {/* ABOUT THE MAISON */}
      {brand?.description && (
        <AboutTheMaison description={brand.description} />
      )}

      {/* SIGNATURE LOOKS */}
      {featured_products.length >= 3 && (
        <SignatureLooks products={featured_products} />
      )}

      {/* COLLECTIONS (use themed_products) */}
      {themed_products.length > 0 && (
        <ThemedProducts themes={themed_products} />
      )}

      {/* CONVERSATIONS & EVENTS */}
      {programs.length > 0 && (
        <ConversationsAndEvents programs={programs} />
      )}

      {/* FROM THE ATELIER */}
      <FromTheAtelier brand={brand} messages={messages} />

      {/* RELATED (use explore_brands) */}
      {explore_brands.length > 0 && (
        <DesignerCarousel items={explore_brands} />
      )}
    </>
  )
}
