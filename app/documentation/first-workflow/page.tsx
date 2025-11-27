"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Mail, Database, Bell, Check } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function FirstWorkflowPage() {
  const { lang } = useI18n()
  const isEn = lang === "en"

  const useCases = [
    {
      icon: Mail,
      title: isEn ? "Email Automation" : "Automatisation des emails",
      description: isEn
        ? "Automatically classify, prioritize, and respond to incoming emails based on content and sender."
        : "Classifiez, priorisez et répondez automatiquement aux emails entrants en fonction du contenu et de l'expéditeur.",
    },
    {
      icon: Database,
      title: isEn ? "Data Processing" : "Traitement des données",
      description: isEn
        ? "Extract, transform, and load data from multiple sources into your systems automatically."
        : "Extrayez, transformez et chargez automatiquement des données de plusieurs sources dans vos systèmes.",
    },
    {
      icon: Bell,
      title: isEn ? "Lead Follow-up" : "Suivi des prospects",
      description: isEn
        ? "Automatically engage with new leads, qualify them, and route to the right team member."
        : "Engagez automatiquement avec les nouveaux prospects, qualifiez-les et dirigez-les vers le bon membre de l'équipe.",
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
              {isEn ? "Your First AI Workflow" : "Votre premier workflow IA"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Discover the most popular AI workflows and find the perfect fit for your business."
              : "Découvrez les workflows IA les plus populaires et trouvez celui qui correspond parfaitement à votre entreprise."}
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert mb-12">
          <p className="text-muted-foreground leading-relaxed">
            {isEn
              ? "Your first AI workflow should address a clear pain point in your business. We recommend starting with a high-impact, low-complexity workflow that delivers quick wins and builds confidence in AI automation."
              : "Votre premier workflow IA devrait résoudre un point de douleur clair dans votre entreprise. Nous recommandons de commencer par un workflow à fort impact et faible complexité qui génère des gains rapides et renforce la confiance dans l'automatisation IA."}
          </p>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            {isEn ? "Popular First Workflows" : "Premiers workflows populaires"}
          </h2>
          <div className="space-y-6">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#00B4FF]/10 to-[#0047AB]/10">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 via-[#0047AB]/10 to-transparent border border-border/50 mb-16">
          <h2 className="text-2xl font-bold mb-6">{isEn ? "Best Practices" : "Meilleures pratiques"}</h2>
          <div className="space-y-4">
            {[
              isEn ? "Start with a single, well-defined process" : "Commencez par un processus unique et bien défini",
              isEn
                ? "Choose a workflow with measurable outcomes"
                : "Choisissez un workflow avec des résultats mesurables",
              isEn
                ? "Ensure you have clear data inputs available"
                : "Assurez-vous d'avoir des données d'entrée claires disponibles",
              isEn ? "Define success metrics before starting" : "Définissez les métriques de succès avant de commencer",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-border/50">
          <Link
            href="/documentation/quick-start"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Quick Start Guide" : "Guide de démarrage rapide"}
          </Link>
          <Link
            href="/documentation/integration-setup"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            {isEn ? "Integration Setup" : "Configuration des intégrations"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
