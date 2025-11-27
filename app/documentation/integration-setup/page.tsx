"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Puzzle, Check, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function IntegrationSetupPage() {
  const { lang } = useI18n()
  const isEn = lang === "en"

  const integrations = [
    { name: "Slack", category: isEn ? "Communication" : "Communication" },
    { name: "Gmail / Google Workspace", category: isEn ? "Email" : "Email" },
    { name: "Microsoft 365", category: isEn ? "Productivity" : "Productivité" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Notion", category: isEn ? "Documentation" : "Documentation" },
    { name: "Airtable", category: isEn ? "Database" : "Base de données" },
    { name: "Zapier", category: isEn ? "Automation" : "Automatisation" },
    { name: "Make", category: isEn ? "Automation" : "Automatisation" },
    { name: "Stripe", category: isEn ? "Payments" : "Paiements" },
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
              {isEn ? "Integration Setup" : "Configuration des intégrations"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Connect your existing tools and let AI automate the workflows between them."
              : "Connectez vos outils existants et laissez l'IA automatiser les workflows entre eux."}
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {isEn ? "How Integration Works" : "Comment fonctionne l'intégration"}
          </h2>
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <p className="text-muted-foreground leading-relaxed mb-6">
              {isEn
                ? "We handle all integrations for you. Simply tell us which tools you use, and our team will securely connect them to your AI workflows. No technical setup required on your end."
                : "Nous gérons toutes les intégrations pour vous. Dites-nous simplement quels outils vous utilisez, et notre équipe les connectera en toute sécurité à vos workflows IA. Aucune configuration technique requise de votre côté."}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { num: "1", text: isEn ? "Tell us your tools" : "Dites-nous vos outils" },
                { num: "2", text: isEn ? "We connect securely" : "Nous connectons en sécurité" },
                { num: "3", text: isEn ? "AI starts working" : "L'IA commence à travailler" },
              ].map((step, idx) => (
                <div key={idx} className="text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white flex items-center justify-center mx-auto mb-3 font-bold">
                    {step.num}
                  </div>
                  <span className="text-sm">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supported Integrations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{isEn ? "Supported Integrations" : "Intégrations supportées"}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-medium">{integration.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{integration.category}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            {isEn
              ? "Don't see your tool? We can integrate with most APIs and services."
              : "Vous ne voyez pas votre outil? Nous pouvons nous intégrer à la plupart des APIs et services."}
          </p>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 via-[#0047AB]/10 to-transparent border border-border/50 text-center">
          <Puzzle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Need a custom integration?" : "Besoin d'une intégration personnalisée?"}
          </h2>
          <p className="text-muted-foreground mb-6">
            {isEn
              ? "Our team can build custom integrations for your specific tools and workflows."
              : "Notre équipe peut créer des intégrations personnalisées pour vos outils et workflows spécifiques."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white hover:opacity-90 transition-opacity font-medium"
          >
            {isEn ? "Contact Us" : "Contactez-nous"}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 mt-8 border-t border-border/50">
          <Link
            href="/documentation/first-workflow"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Your First AI Workflow" : "Votre premier workflow IA"}
          </Link>
          <Link
            href="/documentation"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            {isEn ? "All Documentation" : "Toute la documentation"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
