"use client"

import { motion } from "framer-motion"
import { Lock, Shield, Key, FileCheck, AlertCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n-context"
import { GradientText } from "@/components/gradient-text"

export default function SecurityPage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Lock,
      title: t.security.section1Title,
      description: t.security.section1Content,
    },
    {
      icon: Key,
      title: t.security.section2Title,
      description: t.security.section2Content,
    },
    {
      icon: Shield,
      title: t.security.section3Title,
      description: t.security.section3Content,
    },
    {
      icon: FileCheck,
      title: t.security.section4Title,
      description: t.security.section4Content,
    },
    {
      icon: AlertCircle,
      title: t.security.section5Title,
      description: t.security.section5Content,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-neon/10 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-2xl bg-accent-neon/10 border border-accent-neon/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-accent-neon" />
              </div>
            </div>
            <h1 className="text-[clamp(40px,6vw,80px)] font-semibold tracking-tight leading-[0.98]">
              <GradientText>{t.security.title}</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              {t.security.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">{t.security.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 flex gap-6 items-start hover:border-primary/30 transition-all duration-300"
                >
                  <div className="h-14 w-14 rounded-xl bg-accent-neon/10 border border-accent-neon/20 flex items-center justify-center shrink-0">
                    <Icon className="h-7 w-7 text-accent-neon" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

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
              {t.security.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
              {t.security.ctaSubtitle}
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20 px-8 py-6 text-lg transition-all duration-300"
              >
                <Link href="/contact">{t.security.ctaButton}</Link>
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto leading-relaxed">
              {t.security.ctaDisclaimer}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
