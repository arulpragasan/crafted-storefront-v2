# Refactor Rules

## General Principles

Refactors should:

* preserve existing visuals
* preserve behavior
* improve semantic clarity
* improve ownership boundaries
* reduce duplicated styling
* centralize reusable patterns

Prefer:

* incremental migration
* localized refactors
* semantic abstractions
* constrained reusable APIs

Avoid:

* broad rewrites
* uncontrolled abstraction growth
* speculative architecture
* parallel systems

---

# Design System Rules

## Tokens

All reusable visual values must originate from:

```txt id="5fzg0f"
styles/design-system/*
```

Avoid:

* duplicated Tailwind values
* scattered spacing values
* repeated gradients
* repeated shadow definitions

---

## Typography

Feature components must not define typography styles directly.

Avoid:

* inline font sizing
* inline tracking
* inline typography colors
* repeated typography utility combinations

Prefer:

* semantic typography primitives
* semantic variants
* token-driven typography

Examples:

* Display
* Headline
* SectionTitle
* Body
* Meta
* Caption

---

## Spacing

Spacing ownership should remain layered.

Design-system tokens own:

* reusable spacing values
* editorial rhythm tokens
* semantic spacing variants

Layout composition owns:

* page-level section cadence
* spacing between sections
* editorial pacing

Sections and features own:

* internal composition spacing
* local layout rhythm
* internal grid spacing

Prefer:

* semantic spacing variants
* token-driven section rhythm
* centralized editorial cadence
* constrained spacing abstractions

Avoid:

* repeated py-*
* repeated gap-*
* arbitrary spacing values
* component-owned page rhythm
* generalized spacing engines

---

## Surfaces

Surface and presentation styling should remain centralized.

Avoid repeated:

* shadows
* radii
* background combinations
* overlay gradients
* cinematic image treatments
* repeated hover presentation behavior

Prefer:

* semantic surface variants
* reusable overlay primitives
* token-driven surfaces
* restrained presentation tokens
* centralized cinematic presentation behavior

Avoid introducing:

* generalized media wrapper systems
* universal card abstractions
* presentation components that own composition

---

# CVA Rules

Use class-variance-authority (CVA) for:

* reusable semantic variants
* typography variants
* surface variants
* overlay variants
* layout variants

New variants should only be introduced when they are:

* semantically meaningful
* visually stable
* reused across multiple contexts
* ownership-improving

Avoid implementation-driven variant expansion.

Avoid:

* large conditional clsx chains
* duplicated variant logic
* ad-hoc styling branches

CVA usage should remain:

* constrained
* semantic
* predictable

Avoid excessive variant explosion.

---

# Component Ownership Rules

## Pages

Pages:

* compose layouts
* coordinate rendering
* orchestrate features

Pages should avoid:

* visual implementation details
* repeated styling logic
* domain rendering complexity

---

## Features

Features own:

* domain rendering
* feature hooks
* feature API integration
* feature-local context

Feature logic should remain colocated.

Avoid leaking feature behavior into:

* shared UI primitives
* shared utilities
* global contexts

---

## Shared UI Components

Shared UI components must remain:

* domain-agnostic
* reusable
* token-driven

Avoid:

* business terminology
* feature assumptions
* API orchestration

Shared UI primitives may own:

* semantic typography
* restrained presentation behavior
* reusable cinematic interaction patterns
* token-driven visual consistency

Shared UI primitives should avoid:

* feature storytelling
* page composition ownership
* domain-specific rendering flow

---

# Hooks Rules

Feature-specific hooks belong inside:

```txt id="9wn8eg"
features/*/hooks/
```

Shared reusable hooks belong inside:

```txt id="lk6o1t"
lib/hooks/
```

Avoid placing feature-specific behavior inside shared hooks.

---

# API Rules

Feature-specific API integration belongs inside:

```txt id="0v4d7w"
features/*/api/
```

Shared low-level API utilities belong inside:

```txt id="b9tp0f"
lib/api/
```

Avoid:

* UI transformation logic inside lib/api
* feature orchestration inside shared API utilities

---

# Motion Rules

Motion should remain:

* restrained
* subtle
* compositional
* editorial in pacing

Prefer:

* reveal motion
* stagger rhythm
* cinematic pacing
* centralized motion timing
* reusable easing rhythm

Shared motion layers may centralize:

* timing
* easing
* repeated transition rhythm
* cinematic interaction cadence

Feature components should continue owning:

* motion sequencing
* storytelling composition
* feature choreography
* reveal timing decisions

Avoid:

* decorative motion
* aggressive animation
* excessive choreography
* attention-seeking transitions
* generalized animation frameworks
* speculative motion abstractions

---

# Editorial Rhythm Rules

The storefront should maintain consistent cinematic pacing across pages.

Editorial rhythm should remain:

* spacious
* restrained
* compositional
* intentional

Page-level section spacing should be owned by layout composition primitives rather than individual sections.

Prefer:

* centralized page rhythm
* semantic section cadence
* compositional whitespace
* constrained layout rhythm tokens

Avoid:

* mechanically uniform layouts
* dense stacking systems
* utility-driven page composition
* component-owned vertical pacing

---

# Refactor Strategy

Refactors should happen incrementally.

Preferred workflow:

1. isolate a single concern
2. refactor locally
3. visually verify
4. validate TypeScript
5. commit
6. continue incrementally

Avoid:

* multi-system rewrites
* simultaneous architecture changes
* large uncontrolled migrations

---

# Migration Rules

During migration:

* preserve legacy compatibility temporarily when necessary
* mark transitional APIs clearly
* avoid permanent parallel systems

Temporary compatibility layers should eventually be removed.

---

# Folder Rules

Folder structure should communicate:

* ownership
* responsibility
* semantic grouping

Avoid:

* ambiguous folders
* implementation buckets
* temporary organizational structures

GOOD:

```txt id="2wkt0m"
filters/
grid/
layout/
navigation/
toolbar/
```

BAD:

```txt id="x4pjga"
misc/
temp/
shared2/
left/
right/
```

---

# AI Collaboration Rules

AI-assisted refactors should:

* preserve architectural direction
* preserve editorial rhythm
* preserve semantic layering
* minimize visual drift
* preserve ownership boundaries
* favor constrained semantic abstractions

AI-assisted refactors should avoid:

* generalized framework-style abstractions
* speculative reuse
* premature systemization
* universal component systems
* excessive tokenization
* implementation-driven APIs

When uncertain:

* prefer stability over cleverness
* prefer constrained systems over flexible generic systems
* prefer explicit ownership over abstraction
* prefer compositional clarity over reuse density