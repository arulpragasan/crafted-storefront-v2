# UI Architecture

## Purpose

This document defines how the ReactEvents frontend is organized.

The architecture emphasizes:

* clear ownership
* predictable dependencies
* maintainability
* composability
* feature isolation

---

# Architectural Layers

```txt
app/
  → routing and page composition

features/
  → domain behavior

components/
  → reusable UI

styles/design-system/
  → design tokens

lib/
  → shared technical utilities

theme/
  → application configuration
```

Dependencies should flow downward only.

```txt
app
  → features
    → components
      → design-system
        → lib
```

Shared layers must never depend on feature layers.

---

# Ownership Model

## Pages

Location:

```txt
app/*
```

Pages are orchestration layers.

Pages should:

* compose layouts
* fetch page-level data
* connect features
* coordinate rendering

Pages should not:

* contain large UI implementations
* contain reusable styling
* contain domain logic
* contain design system decisions

---

## Features

Location:

```txt
features/*
```

Features own domain behavior.

A feature may contain:

```txt
components/
hooks/
api/
types/
context/
```

Features should:

* own rendering logic
* own state management
* own API integration
* own feature composition

Features should remain self-contained.

---

## Shared Components

Location:

```txt
components/*
```

Shared components provide reusable UI behavior.

Shared components should:

* remain domain agnostic
* consume design tokens
* expose semantic APIs

Shared components should not:

* know business rules
* know feature behavior
* fetch data
* contain domain assumptions

---

# Component Categories

## components/ui

Reusable visual primitives.

Examples:

```txt
Button
Typography
Card
SectionTitle
ImageTile
```

Responsibilities:

* semantic styling
* reusable variants
* token consumption

---

## components/layout

Layout primitives.

Examples:

```txt
Container
Section
Page
Grid
```

Responsibilities:

* spacing structure
* alignment
* responsive layout
* page rhythm

Layout components own:

* page composition
* section spacing
* structural alignment

---

## components/motion

Reusable motion primitives.

Examples:

```txt
Reveal
FadeIn
AnimatedGrid
```

Responsibilities:

* reusable animation behavior
* transition consistency
* motion primitives

Motion should remain:

* restrained
* reusable
* compositional

---

# Design System

Location:

```txt
styles/design-system/
```

The design system owns:

* spacing tokens
* typography tokens
* color tokens
* motion tokens
* radius tokens
* elevation tokens

All reusable visual values should originate here.

Avoid:

* duplicated visual constants
* scattered spacing values
* repeated styling logic

---

# Hooks Ownership

Feature hooks:

```txt
features/*/hooks/
```

Shared hooks:

```txt
lib/hooks/
```

Avoid placing feature-specific behavior in shared hooks.

---

# API Ownership

Feature APIs:

```txt
features/*/api/
```

Shared APIs:

```txt
lib/api/
```

Feature orchestration should remain inside features.

---

# Type Ownership

Shared contracts:

```txt
types/
```

Feature contracts:

```txt
features/*/types/
```

Prefer local ownership unless genuinely shared.

---

# Approved Patterns

Prefer:

* composition over inheritance
* semantic component APIs
* feature-first ownership
* design-token driven styling
* explicit dependencies
* colocated feature logic

---

# Anti Patterns

Avoid:

* god components
* shared dumping grounds
* global state by default
* overly flexible component APIs
* speculative abstractions
* duplicated ownership
* generic framework-style architectures

---

# Refactor Rule

Before creating a new abstraction, ask:

1. Is the pattern reused?
2. Does it improve clarity?
3. Does it improve ownership?
4. Does it reduce duplication?

If the answer is no, keep the implementation local.

Prefer duplication over premature abstraction.