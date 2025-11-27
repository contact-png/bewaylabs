"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n-context"
import { GradientText } from "@/components/gradient-text"

export default function TermsPage() {
  const { t } = useLanguage()

  const sections = [
    {
      title: t.terms.section1Title,
      content: t.terms.section1Content,
    },
    {
      title: t.terms.section2Title,
      content: t.terms.section2Content,
    },
    {
      title: t.terms.section3Title,
      content: t.terms.section3Content,
    },
    {
      title: t.terms.section4Title,
      content: t.terms.section4Content,
    },
    {
      title: t.terms.section5Title,
      content: t.terms.section5Content,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-signal/10 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-2xl bg-accent-signal/10 border border-accent-signal/20 flex items-center justify-center">
                <FileText className="h-8 w-8 text-accent-signal" />
              </div>
            </div>
            <h1 className="text-[clamp(40px,6vw,80px)] font-semibold tracking-tight leading-[0.98]">
              <GradientText>{t.terms.title}</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{t.terms.subtitle}</p>
            <p className="text-sm text-muted-foreground/60">{t.terms.lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">{t.terms.intro}</p>
            </motion.div>

            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-signal/10 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-0.02em] leading-[0.98] text-balance text-foreground">
              {t.terms.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
              {t.terms.ctaSubtitle}
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20 px-8 py-6 text-lg transition-all duration-300"
              >
                <Link href="/pricing">{t.terms.ctaButton}</Link>
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto leading-relaxed">{t.terms.ctaDisclaimer}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
