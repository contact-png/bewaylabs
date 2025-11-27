"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Zap, Clock, Mail, Webhook, Calendar, MousePointer } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function TriggersPage() {
  const { lang } = useI18n()
  const isEn = lang === "en"

  const triggers = [
    {
      icon: Clock,
      name: isEn ? "Schedule" : "Planification",
      description: isEn
        ? "Run workflows at specific times or intervals"
        : "Exécutez des workflows à des heures ou intervalles spécifiques",
    },
    {
      icon: Webhook,
      name: "Webhook",
      description: isEn ? "Trigger from external HTTP requests" : "Déclenchez à partir de requêtes HTTP externes",
    },
    {
      icon: Mail,
      name: "Email",
      description: isEn ? "Trigger when emails are received" : "Déclenchez lorsque des emails sont reçus",
    },
    {
      icon: Calendar,
      name: isEn ? "Calendar Events" : "Événements calendrier",
      description: isEn ? "Trigger based on calendar events" : "Déclenchez en fonction des événements du calendrier",
    },
    {
      icon: MousePointer,
      name: isEn ? "Manual" : "Manuel",
      description: isEn ? "Trigger workflows manually" : "Déclenchez les workflows manuellement",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/documentation"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Back to Documentation" : "Retour à la documentation"}
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm mb-4">
            <Zap className="w-4 h-4" />
            {isEn ? "AI Workflows" : "Workflows IA"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {isEn ? "Trigger Configuration" : "Configuration des déclencheurs"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Learn how to configure different types of triggers to start your workflows."
              : "Apprenez à configurer différents types de déclencheurs pour démarrer vos workflows."}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Trigger Types */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              {isEn ? "Available Trigger Types" : "Types de déclencheurs disponibles"}
            </h2>
            <div className="grid gap-4">
              {triggers.map((trigger, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white">
                      <trigger.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{trigger.name}</h3>
                      <p className="text-muted-foreground">{trigger.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Configuration Example */}
          <section className="p-8 rounded-2xl bg-card/50 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4">
              {isEn ? "Configuration Example" : "Exemple de configuration"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isEn
                ? "Here's an example of configuring a schedule trigger to run every day at 9 AM:"
                : "Voici un exemple de configuration d'un déclencheur planifié pour s'exécuter tous les jours à 9h:"}
            </p>
            <div className="p-4 rounded-xl bg-background/50 border border-border/30 font-mono text-sm">
              <pre className="text-muted-foreground">
                {`{
  "type": "schedule",
  "config": {
    "frequency": "daily",
    "time": "09:00",
    "timezone": "Europe/Paris"
  }
}`}
              </pre>
            </div>
          </section>

          {/* Best Practices */}
          <section className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-[#0047AB]/10 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4">{isEn ? "Best Practices" : "Bonnes pratiques"}</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Use webhooks for real-time integrations"
                  : "Utilisez des webhooks pour les intégrations en temps réel"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Set appropriate rate limits to avoid overload"
                  : "Définissez des limites de débit appropriées pour éviter la surcharge"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Always validate incoming data from triggers"
                  : "Validez toujours les données entrantes des déclencheurs"}
              </li>
            </ul>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-border/50 flex justify-between">
          <Link
            href="/documentation/workflow-builder"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Workflow Builder" : "Constructeur de workflows"}
          </Link>
          <Link
            href="/documentation/actions"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            {isEn ? "Action Templates" : "Modèles d'actions"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
