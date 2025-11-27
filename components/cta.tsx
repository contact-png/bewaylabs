"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { useI18n } from "@/lib/i18n-context"
import { useRef } from "react"
import Link from "next/link"

export function CTA() {
  const { t } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3])

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 relative overflow-hidden">
      {/* Cinematic gradient background with depth */}
      <div className="absolute inset-0">
        <motion.div
          style={{ scale, opacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-primary/20 via-[var(--color-accent-neon)]/20 to-[var(--color-accent-signal)]/20 rounded-full blur-[150px]"
        />
      </div>

      {/* Floating particles for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-16"
        >
          {/* Hero title with refined typography */}
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.02em] leading-[1.05] text-balance">
              {t.cta.title}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto text-balance">
              {t.cta.subtitle}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4"
          >
            <div className="relative inline-block group">
              {/* Enhanced glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00B4FF]/50 to-[#0047AB]/50 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />

              <Button
                asChild
                size="lg"
                className="relative h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 text-white shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(0,180,255,0.5)]"
              >
                <Link href="/contact">
                  {t.cta.button}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Trust disclaimer text only */}
          <div className="pt-12">
            <p className="text-sm text-muted-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">
              {t.cta.disclaimer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
