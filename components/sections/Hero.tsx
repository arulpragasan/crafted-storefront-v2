"use client"

import { motion } from "framer-motion"
import { heroZoom, fadeRise } from "@/lib/motion/presets"
import { Container } from "@/components/layout/Container"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* Background image */}
      <motion.div
        variants={heroZoom}
        initial="hidden"
        animate="show"
        className="absolute inset-0 -z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
      </motion.div>

      {/* Content */}
      <Container variant="narrow">
        <motion.div
          variants={fadeRise}
          initial="hidden"
          animate="show"
          className="space-y-8 text-center"
        >
          {/* Small label */}
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-500">
            Virtual Fashion Event 2026
          </p>

          {/* BIG headline */}
          <h1 className="[font-family:var(--font-serif)] text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight">
            Where Design
            <br />
            Meets Story
          </h1>

          {/* Subtext */}
          <p className="text-neutral-600 text-lg max-w-xl mx-auto leading-relaxed">
            Discover brands, products, and programs through a curated
            editorial experience crafted for modern events.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="/brands"
              className="inline-block border border-black px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
            >
              Explore Brands
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}