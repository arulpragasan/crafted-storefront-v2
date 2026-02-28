// theme/weddingAtelier.ts

export const WeddingAtelierTheme = {
  id: "wedding-atelier",

  meta: {
    name: "Wedding Atelier",
    intent: "editorial-event",
    mood: "ceremonial",
  },

  /* ----------------------------------------
   * TYPOGRAPHY & TONE
   * ------------------------------------- */
  typography: {
    headingStyle: "serif",
    bodyStyle: "neutral",
    emphasis: "quiet", // no loud accents
  },

  copyTone: {
    voice: "poetic",
    ctaStyle: "inviting", // never aggressive
    labels: {
      live: "Live Now",
      upcoming: "Upcoming",
      featured: "Featured",
    },
  },

  /* ----------------------------------------
   * SPACING (breathing room)
   * ------------------------------------- */
  spacing: {
    section: {
      tight: "py-16 md:py-20",
      normal: "py-24 md:py-32",
      loose: "py-32 md:py-40",
    },

    sectionGap: {
      primaryToSecondary: "mt-space-20",
      headerToContent: "mb-space-12",
      dividerToHeading: "mb-space-6",
    },
  },

  /* ----------------------------------------
   * MOTION SYSTEM
   * ------------------------------------- */
  motion: {
    pageEntry: {
      enabled: true,
      type: "fade-rise",
      duration: 0.8,
      ease: "easeOut",
    },

    grid: {
      stagger: {
        enabled: true,
        amount: 0.12,
        ease: "easeOut",
      },
    },

    cardHover: {
      scale: 1.03,
      duration: 0.4,
      ease: "easeOut",
    },

    filterReveal: {
      type: "slide-fade",
      offset: -8,
      duration: 0.25,
    },
  },

  /* ----------------------------------------
   * EVENT AWARENESS
   * ------------------------------------- */
  eventMode: {
    enabled: true,

    openingNight: {
      heroMood: "slower",
      showCountdown: true,
      emphasizePrograms: true,
      suppressNoise: true, // hides less important sections
    },

    liveIndicators: {
      pulse: true,
      pulseSpeed: "slow",
      color: "neutral",
    },
  },

  /* ----------------------------------------
   * VISUAL RITUALS (micro-interactions)
   * ------------------------------------- */
  rituals: {
    gallery: {
      focusTransition: "crossfade",
      videoReveal: "tap-to-reveal",
    },

    dividers: {
      style: "hairline",
      width: "w-12",
      color: "neutral-300",
    },
  },

  /* ----------------------------------------
   * CONTENT PRIORITY
   * ------------------------------------- */
  hierarchy: {
    categoryPage: [
      "header",
      "brands",
      "featured-products",
      "programs-optional",
    ],

    brandPage: [
      "hero",
      "signature-look",
      "products",
      "story",
    ],
  },
} as const
