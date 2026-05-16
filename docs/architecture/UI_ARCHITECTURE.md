# UI Architecture

## Architectural Layers

The frontend architecture follows layered ownership.

Each layer has a clearly defined responsibility.

```txt
app/
  → page composition and routing

features/
  → domain-specific behavior and rendering

components/
  → shared reusable UI structures

styles/design-system/
  → visual tokens and semantic design values

lib/
  → shared technical utilities

theme/
  → application-level theme configuration
```

Dependencies should flow downward only.

Pages compose features.

Features consume shared UI primitives.

UI primitives consume design tokens.

Design tokens should not depend on application features.

---

# Core Ownership Model

## Pages (`app/*`)

Pages are orchestration layers.

Pages:

* compose layouts
* fetch page-level data
* connect feature modules
* coordinate rendering flow

Pages should avoid:

* detailed UI implementation
* repeated visual styling
* feature business logic
* typography styling decisions

---

## Features (`features/*`)

Features own domain behavior.

A feature may contain:

* components
* hooks
* API integration
* feature-local context
* feature-local types

Features should remain self-contained.

Prefer colocating feature logic inside the feature boundary.

Avoid leaking feature-specific logic into:

* components/ui
* lib/
* theme/
* shared hooks

---

## Shared Components (`components/*`)

Shared components provide reusable visual structure.

Shared components must remain domain-agnostic.

Shared components should not contain:

* business logic
* feature-specific assumptions
* API orchestration
* domain terminology

---

# Application Structure

## app/

```txt
app/
  (storefront)/
```

Responsible for:

* route composition
* page orchestration
* route-level data coordination

Avoid:

* visual implementation details
* deeply nested rendering logic
* reusable UI abstractions

---

# Feature Module Structure

## features/*

Each feature module owns its internal rendering structure.

Typical structure:

```txt
features/*
  components/
  hooks/
  api/
  context/
  types/
```

Feature modules may internally organize components using semantic groupings.

Examples:

* filters/
* grid/
* layout/
* navigation/
* toolbar/
* card/
* sections/

These groupings should communicate:

* responsibility
* semantic ownership

NOT:

* temporary implementation convenience

Avoid ambiguous folders such as:

* misc/
* shared2/
* temp/
* left/
* right/

Folder structure should communicate ownership, not layout coincidence.

---

# UI Layer Structure

## components/ui/

Reusable visual primitives only.

Examples:

* Typography
* Card
* ImageTile
* EditorialDivider

Responsibilities:

* semantic variants
* reusable visual behavior
* token consumption
* consistent styling patterns

Avoid:

* feature-specific rendering
* business terminology
* API logic
* domain assumptions

---

## components/layout/

Structural layout primitives only.

Examples:

* Container
* Grid
* Section
* Page
* PageSection

Responsibilities:

* spacing structure
* responsive layout behavior
* compositional alignment
* page-level editorial rhythm
* section-to-section pacing

Layout primitives may own:

* vertical page rhythm
* compositional spacing
* responsive alignment structure

Layout primitives should avoid:

* domain rendering
* cinematic storytelling logic
* feature ownership
* content-specific presentation behavior

Page-level spacing between sections should be owned by layout composition primitives rather than individual sections.

Sections should own:

* internal composition
* internal grids
* content structure
* internal spacing rhythm

Pages/layouts should own:

* spacing between sections
* editorial pacing
* vertical composition rhythm

---

## components/motion/

Shared motion primitives only.

Examples:

* Reveal
* AnimatedGrid
* RevealOnView

Responsibilities:

* reusable animation behavior
* motion orchestration primitives
* viewport reveal utilities
* restrained editorial motion rhythm

Shared motion primitives may consume centralized motion tokens for:

* timing
* easing
* transition rhythm
* repeated cinematic interaction pacing

Motion primitives should avoid:

* feature choreography
* page-specific motion sequences
* domain-specific transitions
* generalized animation frameworks
* speculative motion abstractions

Feature components should continue owning:

* when motion occurs
* cinematic sequencing
* storytelling composition

Avoid:

* feature choreography
* page-specific motion sequences
* domain-specific transitions

---

## components/sections/

Reusable page-composition sections only.

Used primarily for:

* landing pages
* editorial page composition
* CMS-driven assembly

Reusable sections should prioritize:

* editorial composition
* narrative flow
* content pacing
* compositional clarity

Sections should generally avoid owning page-level vertical rhythm.

External spacing between sections should be handled by layout composition primitives.

Examples:

* Hero
* ProductsSection
* BrandsSection

Avoid:

* feature-specific business logic
* deeply coupled domain rendering

Complex feature-specific editorial sections should live inside:

* features/*

---

# Design System Structure

## styles/design-system/

The design-system layer owns semantic visual values.

Examples:

* spacing
* typography
* colors
* shadows
* motion
* presentation
* radius

The design-system layer may own:

* semantic typography scales
* editorial spacing rhythm
* cinematic presentation behavior
* restrained motion timing
* reusable overlay treatments
* shared surface styling

All reusable visual values should originate from:

```txt
styles/design-system/*
```

Avoid:

* duplicated Tailwind values
* repeated spacing patterns
* scattered visual constants
* feature-owned visual duplication
* composition-owning abstractions

Feature components should consume tokens through:

* UI primitives
* semantic variants
* centralized utilities
* restrained presentation tokens

---

# Theme Structure

## theme/

Theme-level configuration only.

Examples:

* theme providers
* visual presets
* font configuration
* high-level theme mapping

Avoid:

* feature-specific styling
* component implementation logic
* duplicated design tokens

Core visual values belong in:

```txt
styles/design-system/*
```

---

# Shared Library Structure

## lib/api/

Low-level shared API utilities only.

Examples:

* API clients
* fetch wrappers
* serializers
* request helpers

Avoid:

* feature rendering logic
* feature orchestration
* UI transformation logic

Feature-specific API integration belongs inside:

```txt
features/*/api/
```

---

## lib/utils/

Pure reusable utility functions only.

Examples:

* formatting
* query parsing
* URL construction
* class merging

Avoid:

* rendering logic
* feature ownership
* application orchestration

Utilities should remain stateless and reusable.

---

## lib/motion/

Shared motion utilities only.

Examples:

* motion presets
* animation helpers
* reusable transitions

Avoid:

* page-specific choreography
* feature-specific cinematic behavior

---

# Context Ownership

## Feature Context

Feature-specific context belongs inside:

```txt
features/*/context/
```

Examples:

* product filters
* gallery state
* feature interactions

---

## Global Context

Application-wide context belongs inside:

```txt
theme/
or
lib/context/
```

Only create global context when state truly spans multiple application areas.

Avoid unnecessary global state.

---

# Hooks Ownership

## Feature Hooks

Feature-specific hooks belong inside:

```txt
features/*/hooks/
```

Examples:

* filtering logic
* feature state orchestration
* feature query synchronization

---

## Shared Hooks

Reusable hooks belong inside:

```txt
lib/hooks/
```

Examples:

* media queries
* intersection observers
* viewport utilities
* debouncing

Avoid placing feature-specific behavior in shared hooks.

---

# Type Ownership

## Shared Types

Shared cross-feature contracts may live in:

```txt
types/
```

Examples:

* common API contracts
* shared UI contracts
* reusable primitives

---

## Feature Types

Feature-specific types should remain colocated:

```txt
features/*/types/
```

Prefer local ownership unless a type is genuinely shared.

Avoid creating large global type registries.

---

# Dependency Direction

Preferred dependency direction:

```txt
app
  → features
    → shared components
      → design system
        → utilities
```

Avoid reverse dependencies.

Shared layers must not depend on features.

---

# Approved Patterns

GOOD:

* semantic component variants
* token-driven styling
* colocated feature logic
* constrained reusable primitives
* incremental refactors
* semantic presentation tokens
* centralized editorial rhythm
* page-owned section spacing
* restrained motion tokenization
* composition-preserving abstractions

GOOD:

* feature-owned hooks
* feature-owned API integration
* reusable shared primitives
* semantic folder grouping

---

# Anti-Patterns

Avoid:

* feature logic inside shared UI primitives
* duplicated visual values
* global dumping-ground utilities
* page-level styling decisions
* uncontrolled abstraction layers
* parallel design systems
* large generic helper frameworks
* generalized card systems
* universal media wrappers
* layout engine abstractions
* generalized animation frameworks
* component-owned page rhythm
* speculative spacing systems

Avoid:

* overly flexible component APIs
* speculative abstractions
* implementation-driven folder naming

---

# Refactor Boundaries

Refactors should:

* preserve visual direction
* preserve ownership boundaries
* improve semantic clarity
* reduce design leakage
* centralize reusable behavior

Prefer:

* incremental migration
* localized architectural improvements
* constrained semantic abstractions

Avoid:

* broad rewrites
* simultaneous architecture redesign
* uncontrolled component expansion
* replacing stable primitives unnecessarily

# Editorial Rhythm Ownership

The storefront emphasizes cinematic pacing and editorial whitespace rhythm.

Ownership should remain layered:

```txt
Design system
  → spacing tokens and motion rhythm

Layout primitives
  → page-level section cadence

Sections
  → internal composition rhythm

Features
  → storytelling structure
```

Editorial rhythm should remain:

* restrained
* spacious
* compositional
* intentional

Avoid:

* mechanically uniform layouts
* dense stacking systems
* auto-generated spacing behavior
* utility-driven page composition

---

# Responsive Architecture

Responsive behavior should preserve compositional hierarchy rather than mechanically compress layouts.

Mobile and tablet layouts should maintain:

* editorial rhythm
* visual pacing
* hierarchy clarity
* imagery importance
* compositional breathing room

Responsive adaptation should prioritize:

* stacking clarity
* spacing rhythm
* readable typography
* intentional sequencing

Avoid:

* dense mobile compression
* overly tight spacing
* collapsing all sections into uniform blocks
* dashboard-like responsive behavior

Desktop, tablet, and mobile layouts may differ structurally when necessary to preserve editorial quality.

Responsive behavior should remain:

* compositional
* intentional
* restrained
* content-first