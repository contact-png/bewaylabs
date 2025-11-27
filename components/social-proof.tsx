"use client"

import { motion } from "framer-motion"

export function SocialProof() {
  const stats = [
    { value: "7 days", label: "to launch" },
    { value: "$0", label: "upfront cost" },
    { value: "73%", label: "time saved" },
    { value: "30%", label: "faster growth" },
  ]

  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
