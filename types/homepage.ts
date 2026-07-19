// types/homepage.ts

type CategoriesSection = {
  type: "categories"
  items: Category[]
}

type FeaturedBrandsSection = {
  type: "featured_brands"
  items: Brand[]
}

type ProgramHighlightSection = {
  type: "program_highlight"
  item: Program
}

type HomepageSection =
  | CategoriesSection
  | FeaturedBrandsSection
  | ProgramHighlightSection
  | FeaturedProductsSection
  | SponsorsSection

export interface HomepageResponse {
  sections: HomepageSection[]
}