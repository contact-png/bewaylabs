"use client"

import { motion } from "framer-motion"

export function HowItWorks() {
  return (
    <section className="py-48 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">How it works</h2>
          <p className="text-2xl text-muted-foreground">Three steps. Seven days. Real results.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-32">
          {[
            {
              step: "01",
              title: "Build",
              description: "We map your workflows, design the AI, and configure everything. You review, we refine.",
              duration: "Days 1-3",
            },
            {
              step: "02",
              title: "Deploy",
              description: "We launch to production and train your team. You're up and running with full monitoring.",
              duration: "Days 4-6",
            },
            {
              step: "03",
              title: "Operate",
              description:
                "We monitor, optimize, and handle issues. You get weekly reports and monthly strategy reviews.",
              duration: "Day 7+",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-12 items-start"
            >
              <div className="space-y-2">
                <div className="text-7xl font-bold text-muted-foreground/30">{item.step}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">{item.duration}</div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-4xl font-bold">{item.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
