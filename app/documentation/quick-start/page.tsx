"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Terminal, Code, Zap, Settings } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function QuickStartPage() {
  const { lang } = useI18n()
  const isEn = lang === "en"

  const steps = [
    {
      icon: Settings,
      title: isEn ? "Schedule Your Discovery Call" : "Planifiez votre appel découverte",
      description: isEn
        ? "Book a 30-minute call with our team to discuss your automation needs and identify the best workflows for your business."
        : "Réservez un appel de 30 minutes avec notre équipe pour discuter de vos besoins d'automatisation et identifier les meilleurs workflows pour votre entreprise.",
      duration: isEn ? "30 minutes" : "30 minutes",
    },
    {
      icon: Terminal,
      title: isEn ? "We Design Your Workflow" : "Nous concevons votre workflow",
      description: isEn
        ? "Our experts analyze your processes and design a custom AI workflow tailored to your specific requirements."
        : "Nos experts analysent vos processus et conçoivent un workflow IA personnalisé adapté à vos besoins spécifiques.",
      duration: isEn ? "2-3 days" : "2-3 jours",
    },
    {
      icon: Code,
      title: isEn ? "Build & Test" : "Construction et test",
      description: isEn
        ? "We build and thoroughly test your AI workflow, ensuring it integrates seamlessly with your existing tools."
        : "Nous construisons et testons minutieusement votre workflow IA, en nous assurant qu'il s'intègre parfaitement à vos outils existants.",
      duration: isEn ? "3-4 days" : "3-4 jours",
    },
    {
      icon: Zap,
      title: isEn ? "Go Live" : "Mise en production",
      description: isEn
        ? "Your workflow goes live with full monitoring. We handle everything while you focus on growing your business."
        : "Votre workflow est mis en production avec une surveillance complète. Nous gérons tout pendant que vous vous concentrez sur la croissance de votre entreprise.",
      duration: isEn ? "Day 7" : "Jour 7",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link
          href="/documentation"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {isEn ? "Back to Documentation" : "Retour à la documentation"}
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {isEn ? "Quick Start Guide" : "Guide de démarrage rapide"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Get your first AI workflow running in just 7 days. Here's how it works."
              : "Lancez votre premier workflow IA en seulement 7 jours. Voici comment ça fonctionne."}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4FF] to-[#0047AB] flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">{step.duration}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                <step.icon className="w-6 h-6 text-primary flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 via-[#0047AB]/10 to-transparent border border-border/50 mb-16">
          <h2 className="text-2xl font-bold mb-6">{isEn ? "What's Included" : "Ce qui est inclus"}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              isEn ? "Custom workflow design" : "Conception de workflow personnalisé",
              isEn ? "Integration with your tools" : "Intégration avec vos outils",
              isEn ? "24/7 monitoring" : "Surveillance 24/7",
              isEn ? "Ongoing optimization" : "Optimisation continue",
              isEn ? "Dedicated support" : "Support dédié",
              isEn ? "Performance reports" : "Rapports de performance",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{isEn ? "Ready to get started?" : "Prêt à commencer?"}</h2>
          <p className="text-muted-foreground mb-8">
            {isEn
              ? "Book your discovery call and have your first AI workflow running within a week."
              : "Réservez votre appel découverte et lancez votre premier workflow IA en une semaine."}
          </p>
          <Link
            href="/start"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white hover:opacity-90 transition-opacity font-medium"
          >
            {isEn ? "Get Started" : "Commencer"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
