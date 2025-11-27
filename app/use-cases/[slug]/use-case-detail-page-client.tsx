"use client"

import { useLanguage } from "@/lib/i18n-context"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, TrendingUp } from "lucide-react"
import { GradientText } from "@/components/gradient-text"

export default function UseCaseDetailPageClient({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { t, language } = useLanguage()

  // Get use case data from translations with fallback
  const useCaseData = t.useCases.details[slug as keyof typeof t.useCases.details]

  if (!useCaseData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4 text-foreground">Use case not found</h1>
          <Link href="/use-cases">
            <Button>Back to Use Cases</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.useCases.backToUseCases}
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.35_0.08_250)] to-background opacity-50" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-[0.98] tracking-tight">
              <GradientText>{useCaseData.title}</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              {useCaseData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {useCaseData.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/30 border border-border/30 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-signal/5 to-accent-neon/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-signal/10 text-accent-signal text-xs font-medium mb-4">
                    <TrendingUp className="w-3 h-3" />
                    {metric.label}
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-br from-accent-signal to-accent-neon bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={useCaseData.image || "/placeholder.svg"}
              alt={useCaseData.title}
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
              {language === "fr" ? "Comment ça marche" : "How it works"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Un processus simple en 4 étapes pour transformer vos workflows"
                : "A simple 4-step process to transform your workflows"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCaseData.workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card/30 border border-border/30 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-signal to-accent-neon opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-signal to-accent-neon flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Storytelling */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
              {useCaseData.storytelling.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{useCaseData.storytelling.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCaseData.storytelling.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-signal/20 to-accent-neon/20 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-accent-signal" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-card/30 border border-border/30 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-signal/10 to-accent-neon/10 blur-3xl" />
            <div className="relative">
              <div className="text-6xl text-accent-signal/20 mb-6">"</div>
              <p className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed">
                {useCaseData.testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-signal to-accent-neon flex items-center justify-center text-white font-semibold text-xl">
                  {useCaseData.testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{useCaseData.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{useCaseData.testimonial.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.25_0.08_250)] via-[oklch(0.20_0.06_240)] to-[oklch(0.15_0.04_250)]" />

        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-signal/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-white leading-[1.1] tracking-tight">
              {t.cta.title}
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">{t.cta.subtitle}</p>

            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-white text-[oklch(0.25_0.08_250)] hover:bg-white/90 shadow-2xl group relative overflow-hidden"
            >
              <Link href="/contact">
                <span className="relative z-10">{t.cta.button}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-signal/20 to-accent-neon/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>

            <p className="text-sm text-white/50 mt-6">{t.cta.disclaimer}</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
