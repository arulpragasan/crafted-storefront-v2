import { BrandHero } from "@/features/brand-details/components/hero/BrandHero"
import { SignatureLooks } from "@/features/brand-details/components/looks/SignatureLooks"
import { AboutTheMaison } from "@/features/brand-details/components/about/AboutTheMaison"
import { FromTheJournal } from "@/features/brand-details/components/journal/FromTheJournal"
import { FromTheAtelier } from "@/features/brand-details/components/connect/FromTheAtelier"
import { ProgramSpotlight } from "@/features/programs/components/ProgramSpotlight"
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
    blogs = [],
  } = data

  return (
    <>
      {/* HERO */}
      <BrandHero brand={brand} />

      {/* ABOUT THE MAISON */}
      {brand?.description && (
        <div className="pt-24 pb-28">
          <AboutTheMaison description={brand.description} />
        </div>
      )}

      {/* SIGNATURE LOOKS */}
      {featured_products.length >= 3 && (
        <div className="py-28">
          <SignatureLooks products={featured_products} />
        </div>
      )}

      {/* FROM THE JOURNAL */}
      {blogs.length > 0 && (
        <div className="py-32">
          <FromTheJournal blogs={blogs} brandSlug={brand.slug} />
        </div>
      )}

      {/* FROM THE ATELIER */}
      <div className="py-32">
        <FromTheAtelier brand={brand} messages={messages} />
      </div>

      {/* CONVERSATIONS & EVENTS */}
      {programs.length > 0 && (
        <div className="py-32">
          <ProgramSpotlight
            program={programs[0]}
            showSessions
            showBrand={false}
            showDescription
          />
        </div>
      )}

      {/* DISCOVER MORE DESIGNERS */}
      {explore_brands.length > 0 && (
        <div className="pt-36 pb-24">
          <DesignerCarousel items={explore_brands} />
        </div>
      )}
    </>
  )
}
