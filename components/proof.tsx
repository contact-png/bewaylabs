"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useI18n } from "@/lib/i18n-context"
import { useRef } from "react"
import { Quote } from 'lucide-react'

export function Proof() {
  const { t } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20 dark:from-[#00B4FF]/30 dark:to-[#0047AB]/30 blur-[120px]"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-[#0047AB]/15 to-[#00B4FF]/15 dark:from-[#0047AB]/25 dark:to-[#00B4FF]/25 blur-[100px]"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div style={{ opacity }}>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00B4FF]/10 to-[#0047AB]/10 dark:from-[#00B4FF]/20 dark:to-[#0047AB]/20 border border-[#00B4FF]/20 dark:border-[#00B4FF]/30 mb-6"
            >
              <Quote className="w-4 h-4 text-[#00B4FF]" />
              <span className="text-sm font-medium text-foreground/80">Customer Success Story</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Premium card container */}
            <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-card/40 dark:bg-card/20 backdrop-blur-xl border border-border/50 dark:border-border/30 shadow-2xl shadow-[#00B4FF]/5 dark:shadow-[#00B4FF]/10">
              {/* Gradient accent line at top */}
              <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#00B4FF]/60 to-transparent dark:via-[#00B4FF]/80 rounded-full" />
              
              {/* Large quote mark icon */}
              <div className="flex justify-center mb-8">
                <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00B4FF]/10 to-[#0047AB]/10 dark:from-[#00B4FF]/20 dark:to-[#0047AB]/20">
                  <Quote className="w-8 h-8 text-[#00B4FF] dark:text-[#00B4FF]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20 dark:from-[#00B4FF]/30 dark:to-[#0047AB]/30 rounded-full blur-xl" />
                </div>
              </div>

              {/* Testimonial quote text */}
              <blockquote className="relative">
                <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-center text-balance mb-8 md:mb-12">
                  "{t.proof.quote}"
                </p>
              </blockquote>

              {/* Author information with premium styling */}
              <footer className="flex flex-col items-center gap-4 pt-8 border-t border-border/30 dark:border-border/20">
                {/* Author avatar placeholder with gradient */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00B4FF] to-[#0047AB] flex items-center justify-center text-white font-semibold text-xl shadow-lg shadow-[#00B4FF]/20">
                  {t.proof.author.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="text-center space-y-1">
                  <div className="text-lg md:text-xl font-semibold tracking-tight">{t.proof.author}</div>
                  <div className="text-sm md:text-base text-muted-foreground font-light">{t.proof.role}</div>
                </div>
              </footer>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00B4FF]/0 to-[#0047AB]/0 dark:from-[#00B4FF]/5 dark:to-[#0047AB]/5 pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
