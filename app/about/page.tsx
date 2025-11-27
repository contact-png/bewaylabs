"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n-context"
import { GradientText } from "@/components/gradient-text"

export default function AboutPage() {
  const { t } = useLanguage()

  const story = [
    {
      title: t.about.problem.title,
      description: t.about.problem.description,
      emotional: t.about.problem.emotional,
      chapter: t.about.chapter1,
    },
    {
      title: t.about.insight.title,
      description: t.about.insight.description,
      emotional: t.about.insight.emotional,
      chapter: t.about.chapter2,
    },
    {
      title: t.about.solution.title,
      description: t.about.solution.description,
      emotional: t.about.solution.emotional,
      chapter: t.about.chapter3,
    },
    {
      title: t.about.impact.title,
      description: t.about.impact.description,
      emotional: t.about.impact.emotional,
      chapter: t.about.chapter4,
    },
  ]

  const caseStudy = {
    company: t.about.caseStudyCompany,
    industry: t.about.caseStudyIndustry,
    metrics: [
      { label: t.about.metric1, value: t.about.metric1Value },
      { label: t.about.metric2, value: t.about.metric2Value },
      { label: t.about.metric3, value: t.about.metric3Value },
    ],
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00B4FF]/10 dark:bg-[#00B4FF]/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-8 max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
              <GradientText>{t.about.title}</GradientText>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground text-pretty leading-relaxed max-w-4xl mx-auto font-light">
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20 md:mb-32 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight">
              {t.about.storyTitle}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              {t.about.storySubtitle}
            </p>
          </motion.div>

          <div className="space-y-32 md:space-y-40 max-w-6xl mx-auto">
            {story.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <div className="relative">
                  {/* Large number indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                    className="absolute -left-4 md:-left-12 top-0"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20 border border-[#00B4FF]/30 flex items-center justify-center">
                      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
                        {i + 1}
                      </span>
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <div className="ml-8 md:ml-16 pl-8 md:pl-12 border-l-2 border-[#00B4FF]/20 space-y-6 pb-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-[#00B4FF] bg-[#00B4FF]/10 border border-[#00B4FF]/20"
                    >
                      {phase.chapter}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
                      className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                    >
                      {phase.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.5 }}
                      className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl"
                    >
                      {phase.description}
                    </motion.p>

                    <motion.blockquote
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.6 }}
                      className="relative pl-6 md:pl-8 border-l-4 border-[#00B4FF]/40 italic text-foreground/80 text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-2xl"
                    >
                      "{phase.emotional}"
                    </motion.blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center mt-32 md:mt-40 max-w-5xl mx-auto space-y-6"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-balance">
              {t.about.closingTitle}
            </h3>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed text-balance">
              {t.about.closingSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00B4FF]/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto space-y-12"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="text-sm text-[#00B4FF] font-medium uppercase tracking-wider">
                {t.about.caseStudyLabel}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {caseStudy.company} • {caseStudy.industry}
              </h2>
            </div>

            {/* Metrics grid */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 py-8">
              {caseStudy.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8 md:p-12 text-center space-y-4 transition-all duration-300 hover:border-[#00B4FF]/30 hover:shadow-lg hover:shadow-[#00B4FF]/10 min-h-[200px] flex flex-col items-center justify-center">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent leading-none pb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed px-2">
                      {metric.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center max-w-4xl mx-auto"
            >
              <blockquote className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light italic">
                "{t.about.caseStudyQuote}"
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Subtle animated accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00B4FF]/50 rounded-full"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center space-y-10"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight text-balance">
              {t.about.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance font-light">
              {t.about.ctaSubtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="relative bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:shadow-xl hover:shadow-[#00B4FF]/30 text-white font-medium px-8 py-6 text-lg transition-all duration-300 group"
                >
                  <Link href="/pricing">
                    <span className="relative z-10 flex items-center gap-2">
                      {t.about.ctaButton}
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border/50 hover:bg-[#00B4FF]/10 hover:border-[#00B4FF]/50 bg-transparent px-8 py-6 text-lg transition-all duration-300"
                >
                  <Link href="/use-cases">{t.about.ctaButton2}</Link>
                </Button>
              </motion.div>
            </div>

            <p className="text-sm text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed pt-4">
              {t.about.ctaDisclaimer}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
