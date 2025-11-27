"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Bot, TrendingUp, BookOpen, Target, BarChart3 } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function TrainingPage() {
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
              {isEn ? "Training & Optimization" : "Formation et optimisation"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Improve your AI agents' performance through continuous learning."
              : "Améliorez les performances de vos agents IA grâce à l'apprentissage continu."}
          </p>
        </div>

        <div className="space-y-12">
          <section className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{isEn ? "Knowledge Base" : "Base de connaissances"}</h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Feed your agents with relevant documents, FAQs, and business knowledge to improve accuracy."
                  : "Alimentez vos agents avec des documents pertinents, des FAQ et des connaissances métier pour améliorer la précision."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{isEn ? "Fine-tuning" : "Affinage"}</h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Adjust agent behavior based on feedback and performance metrics."
                  : "Ajustez le comportement de l'agent en fonction des retours et des métriques de performance."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{isEn ? "Continuous Learning" : "Apprentissage continu"}</h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Enable agents to learn from interactions and improve over time."
                  : "Permettez aux agents d'apprendre de leurs interactions et de s'améliorer au fil du temps."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{isEn ? "A/B Testing" : "Tests A/B"}</h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Compare different configurations to find the optimal setup."
                  : "Comparez différentes configurations pour trouver la configuration optimale."}
              </p>
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-[#0047AB]/10 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4">{isEn ? "Optimization Tips" : "Conseils d'optimisation"}</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Regularly review and update your knowledge base"
                  : "Révisez et mettez à jour régulièrement votre base de connaissances"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Analyze failed interactions to identify improvement areas"
                  : "Analysez les interactions échouées pour identifier les domaines d'amélioration"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Use feedback loops to refine agent responses"
                  : "Utilisez des boucles de rétroaction pour affiner les réponses de l'agent"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Set up automated monitoring for performance degradation"
                  : "Configurez une surveillance automatisée pour la dégradation des performances"}
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex justify-between">
          <Link
            href="/documentation/agent-config"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Agent Configuration" : "Configuration des agents"}
          </Link>
          <Link
            href="/documentation/monitoring"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            {isEn ? "Performance Monitoring" : "Suivi des performances"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
