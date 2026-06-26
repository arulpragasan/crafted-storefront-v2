export type NavItem = {
  label: string
  href: string
}

export const primaryNav: NavItem[] = [
  { label: "Categories", href: "/categories" },
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/products" },
  { label: "Programs", href: "/programs" },
]

export const leftNav: NavItem[] = [
  { label: "Categories", href: "/categories" },
  { label: "Brands", href: "/brands" },
]

export const rightNav: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Programs", href: "/programs" },
]

export const guestNav: NavItem[] = [
  { label: "Sign In", href: "/sign-in" },
  { label: "Create Account", href: "/sign-up" },
]

export const authenticatedNav: NavItem[] = [
  { label: "My Dashboard", href: "/dashboard" },
  { label: "Saved Brands", href: "/dashboard/saved-brands" },
  { label: "Saved Products", href: "/dashboard/saved-products" },
  { label: "My Conversations", href: "/dashboard/conversations" },
  { label: "Quote Requests", href: "/dashboard/quotes" },
  { label: "Settings", href: "/dashboard/settings" },
  { label: "Sign Out", href: "/sign-out" },
]
