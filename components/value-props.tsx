"use client"

import { motion } from "framer-motion"
import { Zap, Shield, TrendingUp } from "lucide-react"

export function ValueProps() {
  const benefits = [
    {
      icon: Zap,
      title: "Launch in 7 days",
      description: "From kickoff to live workflows. No endless setup, no technical debt.",
    },
    {
      icon: Shield,
      title: "We operate it",
      description: "Full management and monitoring. You own the assets, we run them.",
    },
    {
      icon: TrendingUp,
      title: "Measurable ROI",
      description: "Track time saved, costs reduced, and revenue gained in real-time.",
    },
  ]

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop configuring. Start growing.</h2>
          <p className="text-lg text-muted-foreground">AI workflows built, deployed, and operated for you.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
