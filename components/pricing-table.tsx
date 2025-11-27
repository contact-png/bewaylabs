"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n-context"

export function PricingTable() {
  const { t, language } = useLanguage()

  const plans = [
    {
      name: language === "en" ? "Automate" : "Automatiser",
      subtitle:
        language === "en"
          ? "AI Workflow Automation (Fully Managed)"
          : "Automatisation de Workflows IA (Entièrement Géré)",
      price: "$249",
      period: "/mo",
      tagline:
        language === "en"
          ? "For businesses that want repetitive work handled reliably and without maintenance."
          : "Pour les entreprises qui veulent que le travail répétitif soit géré de manière fiable et sans maintenance.",
      roi: language === "en" ? "ROI: 3–5×" : "ROI: 3–5×",
      delivery: language === "en" ? "Setup: 48h" : "Configuration: 48h",
      features:
        language === "en"
          ? [
              "1 fully managed workflow (built, monitored, optimized)",
              "Up to 2,000 automated actions per month",
              "Error handling and incident fixes",
              "Weekly monitoring and health checks",
              "48h deployment",
              "Basic tool integrations (Zapier, Make, n8n)",
              "Monthly performance optimization",
              "Usage analytics and reporting",
              "Operated and maintained by our AI Ops team",
            ]
          : [
              "1 workflow entièrement géré (construit, surveillé, optimisé)",
              "Jusqu'à 2 000 actions automatisées par mois",
              "Gestion des erreurs et corrections d'incidents",
              "Surveillance hebdomadaire et vérifications de santé",
              "Déploiement en 48h",
              "Intégrations d'outils de base (Zapier, Make, n8n)",
              "Optimisation mensuelle des performances",
              "Analyses d'utilisation et rapports",
              "Exploité et maintenu par notre équipe AI Ops",
            ],
      bestFor:
        language === "en"
          ? "Solopreneurs, small ops teams, agencies."
          : "Solopreneurs, petites équipes opérationnelles, agences.",
    },
    {
      name: language === "en" ? "Copilot" : "Copilot",
      subtitle:
        language === "en"
          ? "AI Insights and Decision Support (Fully Managed)"
          : "Insights IA et Support Décisionnel (Entièrement Géré)",
      price: "$499",
      period: "/mo",
      tagline:
        language === "en"
          ? "Your AI layer for dashboards, alerts, forecasting, and smarter decisions."
          : "Votre couche IA pour tableaux de bord, alertes, prévisions et décisions plus intelligentes.",
      roi: language === "en" ? "ROI: 4–7×" : "ROI: 4–7×",
      delivery: language === "en" ? "Setup: 5 days" : "Configuration: 5 jours",
      features:
        language === "en"
          ? [
              "1 AI dashboard and 1 managed workflow",
              "KPI ingestion and data modeling",
              "Predictive alerts and insights",
              "Priority support",
              "Bi-weekly optimization",
              "API-level integrations",
              "Custom business logic",
              "Performance monitoring and reporting",
              "Secure data handling",
              "Supervised and maintained by our AI Ops team",
            ]
          : [
              "1 tableau de bord IA et 1 workflow géré",
              "Ingestion de KPI et modélisation de données",
              "Alertes prédictives et insights",
              "Support prioritaire",
              "Optimisation bihebdomadaire",
              "Intégrations au niveau API",
              "Logique métier personnalisée",
              "Surveillance des performances et rapports",
              "Gestion sécurisée des données",
              "Supervisé et maintenu par notre équipe AI Ops",
            ],
      bestFor:
        language === "en" ? "Managers, founders, revenue ops, finance." : "Managers, fondateurs, revenue ops, finance.",
      featured: true,
      badge: language === "en" ? "Recommended" : "Recommandé",
    },
    {
      name: language === "en" ? "Agent" : "Agent",
      subtitle:
        language === "en" ? "Autonomous AI Operations (Fully Managed)" : "Opérations IA Autonomes (Entièrement Géré)",
      price: "$999",
      period: "/mo",
      tagline:
        language === "en"
          ? "Full AI autonomy for your operations, with monitoring, controls, and human override."
          : "Autonomie IA complète pour vos opérations, avec surveillance, contrôles et override humain.",
      roi: language === "en" ? "ROI: 8–12×" : "ROI: 8–12×",
      delivery: language === "en" ? "Setup: 7 days" : "Configuration: 7 jours",
      features:
        language === "en"
          ? [
              "1 autonomous AI agent (fully operated)",
              "Unlimited workflows triggered by the agent",
              "CRM, ERP, and API orchestration",
              "Weekly strategy sessions",
              "Human override via Slack or email",
              "Dedicated success manager",
              "Advanced monitoring and analytics",
              "SLA guarantees",
              "Security and access controls",
              "Incident management and rapid fixes",
              "Autonomous operations monitored, controlled, and optimized",
            ]
          : [
              "1 agent IA autonome (entièrement exploité)",
              "Workflows illimités déclenchés par l'agent",
              "Orchestration CRM, ERP et API",
              "Sessions stratégiques hebdomadaires",
              "Override humain via Slack ou email",
              "Gestionnaire de succès dédié",
              "Surveillance et analyses avancées",
              "Garanties SLA",
              "Sécurité et contrôles d'accès",
              "Gestion des incidents et corrections rapides",
              "Opérations autonomes surveillées, contrôlées et optimisées",
            ],
      bestFor:
        language === "en"
          ? "Scaling companies: e-commerce, SaaS, ops-heavy businesses."
          : "Entreprises en croissance: e-commerce, SaaS, entreprises à forte charge opérationnelle.",
      badge: language === "en" ? "High Impact" : "Impact Élevé",
    },
  ]

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group"
            >
              <div
                className={`rounded-2xl border p-8 h-full flex flex-col transition-all ${
                  plan.featured
                    ? "border-accent-signal/50 bg-gradient-to-b from-accent-signal/5 to-transparent shadow-lg shadow-accent-signal/10"
                    : "border-border bg-gradient-to-b from-secondary/50 to-background/50 hover:border-accent-signal/20 hover:shadow-lg hover:shadow-accent-signal/5"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="rounded-full bg-accent-signal px-4 py-1 text-xs font-bold text-white">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <div className="min-h-[80px]">
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground/70 mt-1 font-medium">{plan.subtitle}</p>
                  </div>
                  <div className="flex items-baseline gap-2 min-h-[60px]">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <div className="min-h-[80px]">
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{plan.tagline}</p>
                  </div>
                </div>

                <div className="space-y-2 py-4 border-y border-border/50 mb-6 min-h-[80px] flex flex-col justify-center">
                  <p className="text-center text-sm font-bold gradient-text">{plan.roi}</p>
                  <p className="text-center text-xs text-muted-foreground">{plan.delivery}</p>
                </div>

                <div className="mb-6 min-h-[60px] flex items-center">
                  <Button
                    asChild
                    className={`w-full rounded-full h-12 text-base font-medium transition-all duration-300 hover:scale-105 ${
                      plan.featured
                        ? "bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 text-white shadow-xl shadow-[#00B4FF]/30 dark:shadow-[#00B4FF]/40 hover:shadow-2xl hover:shadow-[#00B4FF]/50 dark:hover:shadow-[#00B4FF]/60 border-0"
                        : "bg-background/50 dark:bg-background/30 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#00B4FF]/20 hover:to-[#0047AB]/20 dark:hover:from-[#00B4FF]/30 dark:hover:to-[#0047AB]/30 border-2 border-[#00B4FF]/40 dark:border-[#00B4FF]/60 hover:border-[#00B4FF] text-foreground hover:text-foreground shadow-md hover:shadow-lg hover:shadow-[#00B4FF]/20 dark:hover:shadow-[#00B4FF]/30"
                    }`}
                  >
                    <Link href="/start">{language === "en" ? "Get Started" : "Commencer"}</Link>
                  </Button>
                </div>

                <div className="flex-1 space-y-4 mb-6 min-h-[400px]">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {language === "en" ? "Includes:" : "Inclus:"}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent-neon shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-border/50 min-h-[80px]">
                  <p className="text-xs font-semibold text-muted-foreground/70 mb-2">
                    {language === "en" ? "Best for:" : "Idéal pour:"}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{plan.bestFor}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
