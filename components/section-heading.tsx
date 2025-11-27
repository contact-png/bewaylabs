"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-4 mb-16"
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-[#5CA9FF]/10 px-4 py-2 text-sm font-medium text-[#5CA9FF] border border-[#5CA9FF]/20">
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {description && <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">{description}</p>}
    </motion.div>
  )
}
