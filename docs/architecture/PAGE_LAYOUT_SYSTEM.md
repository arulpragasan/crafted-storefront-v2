# Page Layout System

## Purpose

This document defines the spatial system of ReactEvents.

It governs:

* container widths
* page structure
* section spacing
* page rhythm
* responsive layout behavior

All pages should follow this system.

---

# Core Principle

Pages should feel related.

A user moving between pages should experience:

* consistent widths
* consistent spacing
* predictable structure

Avoid page-specific layout systems.

---

# Container System

Only three container widths are allowed.

---

## Narrow Container

Used for:

* long-form content
* articles
* reading layouts

```tsx
max-w-4xl
```

---

## Standard Container

Default application width.

Used for:

* most sections
* grids
* collections
* content areas

```tsx
max-w-[1280px]
```

This should be the primary width used throughout the application.

---

## Wide Container

Used sparingly.

Used for:

* hero sections
* immersive layouts
* special editorial moments

```tsx
max-w-[1400px]
```

Wide layouts are exceptions.

They should not become the default.

narrow
  ↓
text-first

content
  ↓
mixed content

wide
  ↓
grids

full
  ↓
rare emphasis

---

# Horizontal Padding

All containers should use consistent padding.

Mobile:

```tsx
px-5
```

Tablet:

```tsx
md:px-8
```

Desktop:

```tsx
lg:px-10
```

Avoid page-specific padding systems.

---

# Section Spacing

Three spacing variants are allowed.

---

## Compact

Used for:

* related sections
* footer-adjacent sections

```tsx
py-10 md:py-14
```

---

## Standard

Default application spacing.

```tsx
py-16 md:py-20
```

Most sections should use this spacing.

---

## Feature

Used for:

* hero transitions
* major visual moments
* landing page highlights

```tsx
py-20 md:py-28
```

Use sparingly.

Avoid consecutive feature sections.

---

# Page Structure

Pages should follow a predictable rhythm.

Container owns horizontal rhythm.

Section owns vertical rhythm.

Feature components own internal spacing.

Pages own composition order.

Common structure:

```txt
Hero
Content
Supporting Content
Footer
```

Avoid:

* excessive layout variation
* random section ordering
* inconsistent spacing patterns

---

# Homepage

Purpose:

* showcase composition
* demonstrate design principles
* create strong first impression

Suggested rhythm:

```txt
Hero
Explore
Featured Content
Collections
Partners
```

Spacing:

* Hero → Feature
* Explore → Standard
* Featured → Feature
* Collections → Standard
* Partners → Compact

---

# Listing Pages

Examples:

* products
* categories
* brands
* events

Use:

```tsx
max-w-[1280px]
```

Preferred grid density:

Desktop:

```txt
3 columns
```

Tablet:

```txt
2 columns
```

Mobile:

```txt
2 columns
```

Avoid:

* dense marketplace grids
* 4–5 column layouts

---

# Detail Pages

Examples:

* product detail
* category detail
* brand detail
* event detail

Use:

* wide hero
* standard content width

Pattern:

```txt
Hero
Primary Content
Supporting Content
Related Content
```

Avoid switching between multiple container widths unnecessarily.

---

# Responsive Principles

Responsive design should preserve:

* hierarchy
* spacing rhythm
* composition

Do not simply collapse desktop layouts.

Instead:

* reconsider hierarchy
* reconsider grouping
* preserve visual rhythm

---

# Layout Consistency Rules

Before introducing a new layout:

Ask:

1. Can an existing layout be reused?
2. Does the new layout improve understanding?
3. Does it improve composition?
4. Does it remain consistent with the system?

If not:

Reuse an existing layout.

---

# Spatial Governance

Feature components should not:

* introduce arbitrary container widths
* introduce arbitrary page spacing
* create independent layout systems

Layout decisions belong to:

* layout primitives
* container primitives
* page composition

This ensures consistent rhythm throughout the application.

---

# Learning Objective

This layout system exists to help learn:

* layout composition
* responsive design
* spatial hierarchy
* page rhythm
* frontend architecture

Consistency is preferred over novelty.

Understanding is preferred over experimentation.