// types/homepage.ts

export type HomepageCategory = {
  id: number
  name: string
  slug: string
  image_url: string
}

export type HomepageBrand = {
  id: number
  name: string
  slug: string
  logo_url: string
  cover_image_url: string
  featured: boolean
  tagline: string
}

export type HomepageFeaturedSession = {
  id: number
  name: string
  slug: string
  session_type: string
  media_type: string
  status: string
  thumbnail_url?: string | null
}

export type HomepageSpeaker = {
  name: string
  slug: string
  title?: string | null
}

export type HomepageProgramSession = {
  id: number
  name: string
  slug: string
  session_type: string
  media_type: string
  status: string
  starts_at: string
  ends_at: string
  thumbnail_url?: string | null
}

export type HomepageProgram = {
  id: number
  name: string
  slug: string
  description?: string | null
  status: string

  cover_image_url?: string | null

  starts_at: string
  ends_at: string

  session_count: number
  speaker_count: number

  featured_session: HomepageFeaturedSession

  speakers: HomepageSpeaker[]

  sessions: HomepageProgramSession[]
}

export type HomepageProduct = {
  id: number
  name: string
  slug: string
  price: string
  image_url?: string | null
}

export type HomepageSponsor = {
  id: number
  name: string
  slug: string
  website?: string | null
  logo_url?: string | null
}

export type CategoriesSection = {
  type: "categories"
  items: HomepageCategory[]
}

export type FeaturedBrandsSection = {
  type: "featured_brands"
  items: HomepageBrand[]
}

export type ProgramHighlightSection = {
  type: "program_highlight"
  item: HomepageProgram
}

export type FeaturedProductsSection = {
  type: "featured_products"
  items: HomepageProduct[]
}

export type SponsorsSection = {
  type: "sponsors"
  items: HomepageSponsor[]
}

export type HomepageSection =
  | CategoriesSection
  | FeaturedBrandsSection
  | ProgramHighlightSection
  | FeaturedProductsSection
  | SponsorsSection

export interface HomepageResponse {
  sections: HomepageSection[]
}