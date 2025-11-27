"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"

export function DeliveryTimeline() {
  const { t } = useI18n()

  const timeline = [
    { day: t.delivery.day1, task: t.delivery.day1Task },
    { day: t.delivery.day3, task: t.delivery.day3Task },
    { day: t.delivery.day5, task: t.delivery.day5Task },
    { day: t.delivery.day7, task: t.delivery.day7Task, highlight: true },
  ]

  return (
    <section className="py-48 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">{t.delivery.title}</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/60 to-[var(--color-accent-neon)] transform -translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "" : "md:text-right"}`}
              >
                {i % 2 === 0 ? (
                  <>
                    <div className="space-y-3">
                      <div className="text-lg font-bold text-primary">{item.day}</div>
                      <div className="text-xl text-muted-foreground">{item.task}</div>
                    </div>
                    <div className="flex justify-start md:justify-end">
                      <div
                        className={`h-5 w-5 rounded-full border-4 border-background ${
                          item.highlight
                            ? "bg-[var(--color-accent-neon)] shadow-lg shadow-[var(--color-accent-neon)]/50 glow-neon"
                            : "bg-primary/60"
                        }`}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-start md:justify-start order-2 md:order-1">
                      <div
                        className={`h-5 w-5 rounded-full border-4 border-background ${
                          item.highlight
                            ? "bg-[var(--color-accent-neon)] shadow-lg shadow-[var(--color-accent-neon)]/50 glow-neon"
                            : "bg-primary/60"
                        }`}
                      />
                    </div>
                    <div className="space-y-3 order-1 md:order-2">
                      <div className="text-lg font-bold text-primary">{item.day}</div>
                      <div className="text-xl text-muted-foreground">{item.task}</div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
