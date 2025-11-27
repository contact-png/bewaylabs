"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { Clock, TrendingUp, Zap } from 'lucide-react'

export function Outcomes() {
  const { t } = useI18n()

  return (
    <section className="py-32 px-6 relative">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B4FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0047AB]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-24"
        >
          {/* Outcome 1: Time savings - now more specific */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="text-7xl font-bold tracking-tight gradient-text">{t.outcomes.outcome1Stat}</div>
                <h2 className="text-5xl font-bold tracking-tight">{t.outcomes.outcome1Title}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">{t.outcomes.outcome1Desc}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl border border-border/30 bg-card/20 backdrop-blur-xl p-8 shadow-xl"
            >
              <div className="space-y-5">
                {[
                  { task: t.outcomes.emailTask, hours: 12 },
                  { task: t.outcomes.dataTask, hours: 10 },
                  { task: t.outcomes.reportTask, hours: 8 },
                  { task: t.outcomes.scheduleTask, hours: 6 },
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.task}</span>
                      <span className="text-sm font-bold gradient-text">{item.hours}h/month</span>
                    </div>
                    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.hours / 12) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Outcome 2: Speed/Revenue - clearer value prop */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 rounded-3xl border border-border/30 bg-card/20 backdrop-blur-xl p-8 shadow-xl"
            >
              <div className="space-y-8">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">{t.outcomes.before}</div>
                    <div className="text-3xl font-bold text-muted-foreground/60">{t.outcomes.beforeTime}</div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-wide gradient-text font-semibold">{t.outcomes.after}</div>
                    <div className="text-3xl font-bold gradient-text">{t.outcomes.afterTime}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div className="space-y-4">
                <div className="text-7xl font-bold tracking-tight gradient-text">{t.outcomes.outcome2Stat}</div>
                <h2 className="text-5xl font-bold tracking-tight">{t.outcomes.outcome2Title}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">{t.outcomes.outcome2Desc}</p>
              </div>
            </motion.div>
          </div>

          {/* Outcome 3: Speed to value - 7 days */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="text-7xl font-bold tracking-tight gradient-text">{t.outcomes.outcome3Stat}</div>
                <h2 className="text-5xl font-bold tracking-tight">{t.outcomes.outcome3Title}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">{t.outcomes.outcome3Desc}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl border border-border/30 bg-card/20 backdrop-blur-xl p-8 shadow-xl"
            >
              <div className="relative">
                {/* Vertical gradient line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-[#00B4FF]/40 via-[#00B4FF]/60 to-[#0047AB]" />

                <ul role="list" className="space-y-6">
                  {[
                    { day: t.outcomes.day1, task: t.outcomes.day1Task, active: false },
                    { day: t.outcomes.day3, task: t.outcomes.day3Task, active: false },
                    { day: t.outcomes.day6, task: t.outcomes.day6Task, active: false },
                    { day: t.outcomes.day7, task: t.outcomes.day7Task, active: true },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      role="listitem"
                      aria-current={item.active ? "step" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="relative flex items-start gap-5"
                      style={{ opacity: item.active ? 1 : 0.6 }}
                    >
                      {/* Dot */}
                      <div
                        className={`relative flex-shrink-0 h-10 w-10 rounded-full border-2 border-background flex items-center justify-center transition-all duration-300 ${
                          item.active
                            ? "bg-gradient-to-br from-[#00B4FF] to-[#0047AB] shadow-lg shadow-primary/40"
                            : "bg-primary/40"
                        }`}
                      >
                        <div className="h-2 w-2 rounded-full bg-background" />
                      </div>

                      {/* Content */}
                      <div className="pt-1.5 space-y-1 min-w-0">
                        <h3 className="font-semibold text-base">{item.day}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.task}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
