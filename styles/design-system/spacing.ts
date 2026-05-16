/**
 * Spacing Tokens — Crafted Design System
 *
 * Extracted from:
 *   components/layout/Section.tsx   → section vertical rhythm
 *   components/layout/Container.tsx → horizontal padding + max-width scale
 *   components/layout/Grid.tsx      → gap scale
 *   ui-system.md §3                 → base unit 8px, allowed values
 *
 * Rule: Do not add values without a matching usage in the codebase.
 * Rule: Consumers must not inline Tailwind spacing classes that duplicate these.
 */

// ─── Section vertical rhythm ─────────────────────────────────────────────────
// These map 1-to-1 to Section variant spacing in Section.tsx.
// Applied only via <Section variant="…"> — never set manually on a section.

export const sectionSpacing = {
  /** py-28 md:py-36 — standard editorial sections */
  default: { mobile: "7rem",  desktop: "9rem"  },
  /** py-24 md:py-32 — light-background sections */
  muted:   { mobile: "6rem",  desktop: "8rem"  },
  /** py-36 md:py-44 — storytelling / wide cinematic moments */
  feature: { mobile: "9rem",  desktop: "11rem" },
  /** py-16 md:py-20 — compact utility sections */
  tight:   { mobile: "4rem",  desktop: "5rem"  },
  /** no padding */
  flush:   { mobile: "0",     desktop: "0"     },
} as const

// ─── Page section rhythm classes ─────────────────────────────────────────────
// Vertical rhythm between page sections. Applied by page/layout composition.
// Values mirror the existing section variants and raw page-level py-* usage.

export const pageSectionSpacingClass = {
  /** py-28 md:py-36 — standard editorial sections */
  default: "py-28 md:py-36",
  /** py-24 md:py-32 — light-background sections */
  muted: "py-24 md:py-32",
  /** py-36 md:py-44 — storytelling / cinematic sections */
  feature: "py-36 md:py-44",
  /** py-16 md:py-20 — compact sections */
  tight: "py-16 md:py-20",
  /** py-24 — category detail editorial modules */
  editorial: "py-24",
  /** no vertical padding */
  flush: "",
} as const

// ─── Container max-width scale ───────────────────────────────────────────────
// Canonical definition — all max-w-* constraints must flow through Container.
// Inline max-w-* in feature components are violations of this token.

export const containerWidth = {
  /** ~768px — reading / text-heavy content */
  narrow:  "860px",
  /** ~1100px — default editorial pages */
  content: "1100px",
  /** ~1280px — discovery grids: brands, products, categories */
  wide:    "1280px",
  /** ~1800px — near full-bleed, rare intentional use only */
  full:    "1800px",
} as const

// ─── Container horizontal padding ────────────────────────────────────────────
// Applied inside Container only — px-5 md:px-16.
// Must not be reproduced inline on feature components.

export const containerPadding = {
  mobile:  "1.25rem", // px-5  → 20px
  desktop: "4rem",    // px-16 → 64px
} as const

// ─── Component-level padding ─────────────────────────────────────────────────
// Mandated default per ui-system.md §3.
// Forbidden values: p-4 (16px), p-5 (20px), p-7 (28px), arbitrary steps.

export const componentPadding = {
  /** p-6 — the only allowed card/block padding value */
  card: "1.5rem",
} as const

// ─── Gap scale ────────────────────────────────────────────────────────────────
// Extracted from Grid.tsx gap variants and observed editorial grid patterns.

export const gap = {
  /** gap-4 — dense / tight grids */
  tight:  "1rem",
  /** gap-6 — standard (mobile default) */
  normal: "1.5rem",
  /** gap-10 — editorial breathing room (desktop) */
  loose:  "2.5rem",
  /** gap-14 — wide-format feature grids (desktop loose) */
  wide:   "3.5rem",
} as const

// ─── Editorial interior rhythm ───────────────────────────────────────────────
// Spacing used for intra-component layout (mb, mt, space-y).
// Extracted from observed patterns. Not Tailwind classes — raw rem values.

export const editorialRhythm = {
  /** Caption label → content gap  (mb-10) */
  labelToContent: "2.5rem",
  /** Title → body text gap  (mb-6) */
  titleToBody:    "1.5rem",
  /** Section title → grid  (mb-14) */
  titleToGrid:    "3.5rem",
  /** Card interior vertical stack  (space-y-4) */
  cardStack:      "1rem",
  /** EditorialDivider margin  (my-16) */
  divider:        "4rem",
  /** Programs/list item vertical separation  (space-y-8) */
  listItem:       "2rem",
} as const

// ─── Semantic spacing class bridges ──────────────────────────────────────────
// Tailwind class combinations that recur with the same editorial meaning.
// These are not layout abstractions; they only name repeated rhythm ownership.

export const cardContentSpacingClass = {
  /** Image/media → card copy rhythm used by discovery cards. */
  mediaToCopy: "space-y-4",
  /** Tight stack for card title, metadata, and value text. */
  copyStack: "space-y-1",
} as const

export const sectionHeaderSpacingClass = {
  /** Section heading → discovery grid rhythm. */
  toGrid: "mb-14",
  /** Category-detail section heading → editorial link grid rhythm. */
  toEditorialGrid: "mb-12",
} as const

export type SectionSpacingKey   = keyof typeof sectionSpacing
export type ContainerWidthKey   = keyof typeof containerWidth
