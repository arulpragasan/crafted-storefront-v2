"use client"

import { motion } from "framer-motion"

type AnimatedGridProps = {
  children: React.ReactNode
  stagger?: number
}

export function AnimatedGrid({
  children,
  stagger = 0.12,
}: AnimatedGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}