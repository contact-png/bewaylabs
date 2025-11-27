"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"

export function WhyBeway() {
  const { t } = useI18n()

  const pillars = [
    {
      title: t.whyBeway.pillar1Title,
      description: t.whyBeway.pillar1Desc,
      emotional: t.whyBeway.pillar1Emotional,
    },
    {
      title: t.whyBeway.pillar2Title,
      description: t.whyBeway.pillar2Desc,
      emotional: t.whyBeway.pillar2Emotional,
    },
    {
      title: t.whyBeway.pillar3Title,
      description: t.whyBeway.pillar3Desc,
      emotional: t.whyBeway.pillar3Emotional,
    },
  ]

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#00B4FF]/25 via-[#0047AB]/15 to-transparent dark:from-[#00B4FF]/35 dark:via-[#0047AB]/20 dark:to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-[clamp(40px,5vw,56px)] font-semibold tracking-tight leading-[1.1] mb-4">
            {t.whyBeway.title}
          </h2>
          <p className="text-[clamp(17px,2vw,20px)] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.whyBeway.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card/40 dark:bg-card/20 backdrop-blur-sm border border-border/50 dark:border-border/30 transition-all duration-500 hover:bg-card/60 dark:hover:bg-card/30 hover:border-border dark:hover:border-border/50 hover:shadow-xl hover:shadow-[#00B4FF]/5 dark:hover:shadow-[#00B4FF]/10 hover:-translate-y-1">
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#00B4FF]/60 to-transparent dark:via-[#00B4FF]/80 rounded-full" />
                
                <h3 className="text-[clamp(22px,3vw,28px)] font-semibold tracking-tight leading-tight mb-4 mt-6">
                  {pillar.title}
                </h3>

                <p className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed mb-4">
                  {pillar.description}
                </p>

                <p className="text-[14px] md:text-[15px] italic text-foreground/60 dark:text-foreground/50 leading-relaxed pt-4 border-t border-border/30 dark:border-border/20">
                  {pillar.emotional}
                </p>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00B4FF]/0 to-[#0047AB]/0 group-hover:from-[#00B4FF]/8 group-hover:to-[#0047AB]/8 dark:group-hover:from-[#00B4FF]/10 dark:group-hover:to-[#0047AB]/10 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-[clamp(16px,2vw,19px)] text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            {t.whyBeway.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
