"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Zap, Send, Database, FileText, Bell, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function ActionsPage() {
  const { lang } = useI18n()
  const isEn = lang === "en"


  const actions = [
    { icon: Send, name: isEn ? "Send Email" : "Envoyer un email", category: isEn ? "Communication" : "Communication" },
    { icon: Database, name: isEn ? "Database Query" : "Requête base de données", category: isEn ? "Data" : "Données" },
    {
      icon: FileText,
      name: isEn ? "Generate Document" : "Générer un document",
      category: isEn ? "Documents" : "Documents",
    },
    {
      icon: Bell,
      name: isEn ? "Send Notification" : "Envoyer une notification",
      category: isEn ? "Alerts" : "Alertes",
    },
    { icon: Globe, name: isEn ? "API Request" : "Requête API", category: isEn ? "Integration" : "Intégration" },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Link
            href="/documentation"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Back to Documentation" : "Retour à la documentation"}
          </Link>
        </div>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm mb-4">
            <Zap className="w-4 h-4" />
            {isEn ? "AI Workflows" : "Workflows IA"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {isEn ? "Action Templates" : "Modèles d'actions"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Pre-built action templates to accelerate your workflow development."
              : "Modèles d'actions prédéfinis pour accélérer le développement de vos workflows."}
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">{isEn ? "Popular Actions" : "Actions populaires"}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {actions.map((action, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white">
                      <action.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{action.name}</h3>
                      <p className="text-sm text-muted-foreground">{action.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-[#0047AB]/10 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4">
              {isEn ? "Creating Custom Actions" : "Créer des actions personnalisées"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {isEn
                ? "Need something specific? Create custom actions tailored to your business needs. Our team can help you design and implement custom integrations."
                : "Besoin de quelque chose de spécifique? Créez des actions personnalisées adaptées à vos besoins. Notre équipe peut vous aider à concevoir et implémenter des intégrations personnalisées."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
            >
              {isEn ? "Contact our team" : "Contacter notre équipe"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex justify-between">
          <Link
            href="/documentation/triggers"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Trigger Configuration" : "Configuration des déclencheurs"}
          </Link>
          <Link
            href="/documentation/agent-config"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            {isEn ? "Agent Configuration" : "Configuration des agents"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
