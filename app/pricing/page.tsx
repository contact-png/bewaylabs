"use client"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { PricingTable } from "@/components/pricing-table"
import { ROICalculator } from "@/components/roi-calculator"
import { FAQ } from "@/components/faq"
import { useLanguage } from "@/lib/i18n-context"
import Link from "next/link"

export default function PricingPage() {
  const { t } = useLanguage()

  const addOns = [
    {
      title: t.pricing.addOn1Title,
      description: t.pricing.addOn1Desc,
      badge: t.pricing.addOn1Badge,
    },
    {
      title: t.pricing.addOn2Title,
      description: t.pricing.addOn2Desc,
      badge: t.pricing.addOn2Badge,
    },
    {
      title: t.pricing.addOn3Title,
      description: t.pricing.addOn3Desc,
      badge: t.pricing.addOn3Badge,
    },
    {
      title: t.pricing.addOn4Title,
      description: t.pricing.addOn4Desc,
      badge: t.pricing.addOn4Badge,
    },
    {
      title: t.pricing.addOn5Title,
      description: t.pricing.addOn5Desc,
      badge: t.pricing.addOn5Badge,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-neon/10 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              <span className="gradient-text">{t.pricing.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">{t.pricing.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* ROI Calculator */}
      <ROICalculator />

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="gradient-text">{t.pricing.addOnsTitle}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.pricing.addOnsSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {addOns.map((addon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                <div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-background/80 via-secondary/10 to-background/60 backdrop-blur-sm p-10 space-y-6 h-full transition-all duration-500 hover:border-accent-signal/30 hover:shadow-2xl hover:shadow-accent-signal/5 hover:-translate-y-1">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-neon/10 border border-accent-neon/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-neon animate-pulse" />
                    <span className="text-xs font-medium text-accent-neon">{addon.badge}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground tracking-tight">{addon.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{addon.description}</p>
                  </div>

                  {/* Subtle accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-signal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA below add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-6">{t.pricing.addOnsCtaText}</p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent-signal/30 hover:bg-accent-signal/10 hover:border-accent-signal/50 transition-all duration-300 bg-transparent"
            >
              <Link href="/contact" className="flex items-center gap-2">
                {t.pricing.addOnsCtaButton}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-neon/10 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-0.02em] leading-[0.98] text-balance text-foreground">
              {t.pricing.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
              {t.pricing.ctaSubtitle}
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Button
                asChild
                size="lg"
                className="relative bg-accent-neon hover:bg-accent-neon/90 text-primary-foreground font-medium shadow-lg shadow-accent-neon/20 px-8 py-6 text-lg transition-all duration-300 group overflow-hidden"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    {t.pricing.ctaButton}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-neon to-accent-signal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto leading-relaxed">
              {t.pricing.ctaDisclaimer}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
