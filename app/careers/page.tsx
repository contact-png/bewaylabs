"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n-context"
import { GradientText } from "@/components/gradient-text"
import { useState } from "react"
import ApplicationModal from "@/components/application-modal"

export default function CareersPage() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState("")

  const jobs = [
    {
      title: "Senior AI Engineer",
      location: "Remote",
      type: "Full-time",
      description:
        "Build and optimize AI workflows for enterprise clients. Work with LLMs, automation platforms, and modern AI stack.",
    },
    {
      title: "Customer Success Manager",
      location: "Remote",
      type: "Full-time",
      description:
        "Help clients achieve ROI with AI workflows. Own relationships, drive adoption, and ensure long-term success.",
    },
    {
      title: "Product Designer",
      location: "Remote",
      type: "Full-time",
      description:
        "Design intuitive interfaces for AI workflow management. Create experiences that make complex systems simple.",
    },
  ]

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle)
    setIsModalOpen(true)
  }

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
            <h1 className="text-[clamp(40px,6vw,80px)] font-semibold tracking-tight leading-[0.98]">
              <GradientText>{t.careers.title}</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              {t.careers.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl font-semibold tracking-tight text-foreground">{t.careers.openPositions}</h2>
            <p className="text-xl text-muted-foreground">{t.careers.positionsSub}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-6 flex-col sm:flex-row">
                    <div className="space-y-4 flex-1">
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    </div>
                    <Button
                      onClick={() => handleApply(job.title)}
                      variant="outline"
                      className="border-border hover:bg-accent hover:border-primary/50 group-hover:border-primary/50 shrink-0 bg-transparent transition-all duration-300"
                    >
                      Apply
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-12 space-y-8"
          >
            <h2 className="text-3xl font-semibold text-center text-foreground">{t.careers.whyTitle}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-lg font-semibold text-accent-neon">{t.careers.remoteFirst}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.careers.remoteDesc}</p>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-accent-signal">{t.careers.competitivePay}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.careers.payDesc}</p>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-accent-neon">{t.careers.realImpact}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.careers.impactDesc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-neon/10 rounded-full blur-3xl opacity-20" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-signal/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
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
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-0.02em] leading-[0.98] text-balance text-foreground">
              {t.careers.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
              {t.careers.ctaSubtitle}
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={() => {
                  setSelectedJob("General Application")
                  setIsModalOpen(true)
                }}
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20 px-8 py-6 text-lg transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.careers.ctaButton}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-signal to-accent-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto leading-relaxed">
              {t.careers.ctaDisclaimer}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} jobTitle={selectedJob} />
    </div>
  )
}
