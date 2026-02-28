// ============================================================
// Crafted – Motion Presets (FINAL CONSOLIDATED EDITION)
// ============================================================
// Single source of truth for ALL motion in Crafted.
//
// Stack: Framer Motion + Next.js
//
// Philosophy:
// - calm
// - cinematic
// - editorial
// - invisible
//
// Rules:
// - ONLY opacity + transform
// - NO bounce / spring / parallax / big scale
// - reuse presets ONLY (never inline animations)
//
// If an animation is noticeable → it's too much.
// ============================================================

import { Variants } from "framer-motion"


/* =====================================================
   GLOBAL MOTION TOKENS
===================================================== */

export const motionTokens = {
  duration: {
    instant: 0.12,
    fast: 0.32,
    medium: 0.55,
    slow: 0.85,
    xslow: 1.1,
    cinematic: 20, // hero zoom
  },

  ease: [0.16, 1, 0.3, 1] as const,

  offset: {
    xs: 6,
    sm: 10,
    md: 18,
    lg: 28,
  },

  scale: {
    subtle: 1.015,
    default: 1.02,
    image: 1.03,
  },
}


/* =====================================================
   BASE ENTRANCE ANIMATIONS
===================================================== */

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: motionTokens.duration.medium,
      ease: motionTokens.ease,
    },
  },
}


export const fadeRise: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.offset.md,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease,
    },
  },
}


export const fadeMicroRise: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.offset.sm,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.medium,
      ease: motionTokens.ease,
    },
  },
}


/* =====================================================
   STAGGER SYSTEM (editorial rhythm)
===================================================== */

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerTight: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.045,
    },
  },
}

export const staggerContainerRelaxed: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.08,
    },
  },
}

export const staggerItem = fadeRise


/* =====================================================
   HOVER INTERACTIONS
===================================================== */

export const hoverLift = {
  whileHover: {
    y: -2,
    transition: {
      duration: motionTokens.duration.fast,
      ease: motionTokens.ease,
    },
  },
}

export const hoverCard = {
  whileHover: {
    y: -2,
    scale: motionTokens.scale.default,
    transition: {
      duration: motionTokens.duration.fast,
      ease: motionTokens.ease,
    },
  },
}

export const hoverImageZoom = {
  whileHover: {
    scale: motionTokens.scale.image,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.ease,
    },
  },
}


/* =====================================================
   HERO (cinematic only)
===================================================== */

export const heroFade: Variants = fade


export const heroZoom = {
  initial: { scale: 1.03 },
  animate: { scale: 1 },
  transition: {
    duration: motionTokens.duration.cinematic,
    ease: "linear",
  },
}


export const heroTitle: Variants = {
  hidden: { opacity: 0, y: motionTokens.offset.lg },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.xslow,
      ease: motionTokens.ease,
    },
  },
}


export const heroStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.25,
    },
  },
}


/* =====================================================
   PAGE TRANSITION (magazine crossfade)
===================================================== */

export const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: motionTokens.ease,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1],
    },
  },
}


/* =====================================================
   MODAL / OVERLAY
===================================================== */

export const modalOverlay: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.985, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.medium,
      ease: motionTokens.ease,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.99,
    transition: { duration: 0.25 },
  },
}


/* =====================================================
   VIEWPORT HELPER
===================================================== */

export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: "-40px 0px -40px 0px",
}