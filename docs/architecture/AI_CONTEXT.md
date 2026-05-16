# AI Context

## Project Nature

Crafted is a content-driven storefront application built with:

* Next.js App Router
* React
* Tailwind CSS
* feature-first frontend architecture

The application emphasizes:

* narrative presentation
* restrained visual design
* cinematic imagery
* editorial browsing flow
* whitespace rhythm
* semantic UI architecture

This is NOT:

* a dashboard application
* an admin panel
* a generic SaaS UI
* a utility-first visual playground
* a component-library showcase

---

# Architectural Philosophy

The frontend architecture follows layered ownership.

Pages compose layouts and editorial rhythm.

Feature modules own domain behavior.

UI primitives own reusable visual behavior.

Layout primitives own compositional spacing and page cadence.

Design tokens own semantic visual values.

The system should evolve through:

* semantic abstractions
* constrained reusable primitives
* governed design decisions
* incremental refactors

Avoid:

* large uncontrolled rewrites
* visual redesigns during refactors
* excessive abstractions
* generic enterprise UI patterns

---

# Visual Direction

The visual system should remain:

* restrained
* spacious
* typography-led
* image-led
* editorial in rhythm
* cinematic in pacing
* minimal in decoration

Prefer:

* semantic spacing
* compositional whitespace
* clean hierarchy
* restrained motion rhythm
* cinematic presentation
* compositional clarity

Avoid:

* glassmorphism
* excessive gradients
* decorative effects
* aggressive animations
* dashboard-style layouts
* visually noisy UI
* mechanically uniform spacing

---

# Refactor Philosophy

Refactors should:

* preserve existing visuals
* preserve behavior
* reduce design leakage
* centralize visual decisions
* improve semantic clarity
* improve ownership boundaries
* improve maintainability

Prefer:

* incremental migration
* local architectural improvements
* constrained semantic variants
* token-driven styling

Avoid:

* broad rewrites
* speculative abstractions
* premature optimization
* introducing parallel systems permanently

---

# Design System Direction

The application uses:

* semantic typography primitives
* semantic spacing tokens
* restrained motion tokens
* centralized presentation behavior
* centralized design tokens
* class-variance-authority (CVA)
* feature-first ownership

Visual values should originate from:

* styles/design-system/*

Feature components should avoid:

* raw typography styling
* duplicated spacing values
* duplicated overlay logic
* repeated surface styling
* repeated motion timing
* component-owned page rhythm

---

# Layering Philosophy

Pages:

* compose layouts
* orchestrate sections
* coordinate editorial pacing
* avoid visual styling decisions

Features:

* own domain rendering
* own feature-specific hooks
* own feature-specific API integration
* own storytelling composition

UI primitives:

* own reusable visual behavior
* own semantic variants
* consume design tokens

Layout primitives:

* own page-level spacing rhythm
* own compositional cadence
* own structural alignment

Design tokens:

* own spacing values
* own typography values
* own motion rhythm
* own color values
* own presentation behavior
* own elevation/radius values

---

# AI Collaboration Rules

When assisting with refactors:

* preserve current visuals unless explicitly requested otherwise
* prefer minimal safe changes
* avoid introducing generic UI-library abstractions
* avoid dashboard-oriented patterns
* avoid uncontrolled component explosion
* preserve editorial rhythm and hierarchy
* preserve compositional pacing
* prefer semantic naming over implementation naming
* preserve ownership boundaries

Avoid introducing:

* generalized framework-style abstractions
* universal wrapper systems
* speculative reusable APIs
* implementation-driven component systems
* generalized layout engines
* excessive tokenization

When uncertain:

* preserve the existing architectural direction
* prefer stability over cleverness
* prefer constrained systems over flexible generic systems
* prefer compositional clarity over abstraction density