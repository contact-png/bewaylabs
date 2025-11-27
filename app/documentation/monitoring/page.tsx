"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Bot, Activity, BarChart3, AlertTriangle, CheckCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function MonitoringPage() {
  const { lang } = useI18n()
  const isEn = lang === "en"

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
            <Bot className="w-4 h-4" />
            {isEn ? "AI Agents" : "Agents IA"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {isEn ? "Performance Monitoring" : "Suivi des performances"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Track, analyze, and optimize your AI agents' performance in real-time."
              : "Suivez, analysez et optimisez les performances de vos agents IA en temps réel."}
          </p>
        </div>

        <div className="space-y-12">
          <section className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
              <Activity className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{isEn ? "Real-time Metrics" : "Métriques en temps réel"}</h3>
              <p className="text-sm text-muted-foreground">
                {isEn ? "Live performance data" : "Données de performance en direct"}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{isEn ? "Analytics Dashboard" : "Tableau de bord analytique"}</h3>
              <p className="text-sm text-muted-foreground">{isEn ? "Comprehensive insights" : "Analyses complètes"}</p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
              <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{isEn ? "Smart Alerts" : "Alertes intelligentes"}</h3>
              <p className="text-sm text-muted-foreground">
                {isEn ? "Proactive notifications" : "Notifications proactives"}
              </p>
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-card/50 border border-border/50">
            <h2 className="text-2xl font-semibold mb-6">{isEn ? "Key Metrics" : "Métriques clés"}</h2>
            <div className="space-y-4">
              {[
                {
                  name: isEn ? "Response Time" : "Temps de réponse",
                  desc: isEn ? "Average time to complete tasks" : "Temps moyen pour compléter les tâches",
                },
                {
                  name: isEn ? "Accuracy Rate" : "Taux de précision",
                  desc: isEn ? "Percentage of correct responses" : "Pourcentage de réponses correctes",
                },
                {
                  name: isEn ? "Task Completion" : "Achèvement des tâches",
                  desc: isEn ? "Successfully completed tasks" : "Tâches terminées avec succès",
                },
                {
                  name: isEn ? "Error Rate" : "Taux d'erreur",
                  desc: isEn ? "Failed or incorrect executions" : "Exécutions échouées ou incorrectes",
                },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div>
                    <h4 className="font-medium">{metric.name}</h4>
                    <p className="text-sm text-muted-foreground">{metric.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex justify-between">
          <Link
            href="/documentation/training"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Training & Optimization" : "Formation et optimisation"}
          </Link>
          <Link
            href="/documentation/data-protection"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            {isEn ? "Data Protection" : "Protection des données"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
