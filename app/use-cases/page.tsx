"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, Headphones, DollarSign, TrendingUp, Users, Megaphone, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { useLanguage } from "@/lib/i18n-context"

export default function UseCasesPage() {
  const { t } = useLanguage()

  const ctaRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3])

  const useCases = [
    {
      slug: "sales",
      icon: Briefcase,
      title: t.useCases.sales.title,
      kpi: t.useCases.sales.kpi,
      description: t.useCases.sales.description,
      image: "/modern-sales-dashboard-with-pipeline-metrics.jpg",
    },
    {
      slug: "support",
      icon: Headphones,
      title: t.useCases.support.title,
      kpi: t.useCases.support.kpi,
      description: t.useCases.support.description,
      image: "/customer-support-dashboard-with-tickets.jpg",
    },
    {
      slug: "finance",
      icon: DollarSign,
      title: t.useCases.finance.title,
      kpi: t.useCases.finance.kpi,
      description: t.useCases.finance.description,
      image: "/financial-dashboard.png",
    },
    {
      slug: "ops",
      icon: TrendingUp,
      title: t.useCases.ops.title,
      kpi: t.useCases.ops.kpi,
      description: t.useCases.ops.description,
      image: "/operations-dashboard-with-workflow-metrics.jpg",
    },
    {
      slug: "hr",
      icon: Users,
      title: t.useCases.hr.title,
      kpi: t.useCases.hr.kpi,
      description: t.useCases.hr.description,
      image: "/hr-dashboard-with-employee-metrics.jpg",
    },
    {
      slug: "marketing",
      icon: Megaphone,
      title: t.useCases.marketing.title,
      kpi: t.useCases.marketing.kpi,
      description: t.useCases.marketing.description,
      image: "/marketing-dashboard-with-campaign-analytics.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-signal/10 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">{t.useCases.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">{t.useCases.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {useCases.map((useCase, i) => {
              const Icon = useCase.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <Link
                    href={`/use-cases/${useCase.slug}`}
                    className="block rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-accent-signal/30 transition-all"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                      {/* KPI Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="rounded-full bg-accent-neon/90 backdrop-blur-sm border border-accent-neon/20 px-4 py-2 text-sm font-bold text-primary-foreground">
                          {useCase.kpi}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg flex items-center justify-center border border-accent-signal/20 bg-accent-signal/10">
                            <Icon className="h-6 w-6 text-accent-signal" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{useCase.title}</h3>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent-signal group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 md:py-48 px-6 relative overflow-hidden bg-background">
        {/* Cinematic gradient background with depth */}
        <div className="absolute inset-0">
          <motion.div
            style={{ scale, opacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-accent-signal/20 via-accent-neon/20 to-accent-signal/20 rounded-full blur-[150px]"
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
              className="absolute w-2 h-2 rounded-full bg-accent-signal/30"
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
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.02em] leading-[1.05] text-balance text-foreground">
                {t.useCases.ctaTitle}
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto text-balance">
                {t.useCases.ctaSubtitle}
              </p>
            </div>

            {/* CTA button with premium interaction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <div className="relative inline-block group">
                {/* Glow effect on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-signal/50 via-accent-neon/50 to-accent-signal/50 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />

                <Button
                  asChild
                  size="lg"
                  className="relative h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl transition-all duration-300 group-hover:scale-105"
                >
                  <Link href="/pricing">
                    {t.useCases.ctaButton}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Trust disclaimer text only */}
            <div className="pt-12">
              <p className="text-sm text-muted-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">
                {t.useCases.ctaDisclaimer}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
