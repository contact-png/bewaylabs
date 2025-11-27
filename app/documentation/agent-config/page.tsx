"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Bot, Settings, Brain, Sliders, Target } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function AgentConfigPage() {
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
              {isEn ? "Agent Configuration" : "Configuration des agents"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Configure and customize your AI agents for optimal performance."
              : "Configurez et personnalisez vos agents IA pour des performances optimales."}
          </p>
        </div>

        <div className="space-y-12">
          <section className="p-8 rounded-2xl bg-card/50 border border-border/50">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Settings className="w-6 h-6 text-primary" />
              {isEn ? "Core Settings" : "Paramètres principaux"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-background/50 border border-border/30">
                <Brain className="w-5 h-5 text-primary mb-2" />
                <h4 className="font-medium mb-1">{isEn ? "Model Selection" : "Sélection du modèle"}</h4>
                <p className="text-sm text-muted-foreground">
                  {isEn
                    ? "Choose the AI model that best fits your use case"
                    : "Choisissez le modèle IA qui correspond le mieux à votre cas d'usage"}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/30">
                <Sliders className="w-5 h-5 text-primary mb-2" />
                <h4 className="font-medium mb-1">{isEn ? "Parameters" : "Paramètres"}</h4>
                <p className="text-sm text-muted-foreground">
                  {isEn
                    ? "Fine-tune temperature, response length, and behavior"
                    : "Ajustez la température, la longueur des réponses et le comportement"}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/30">
                <Target className="w-5 h-5 text-primary mb-2" />
                <h4 className="font-medium mb-1">{isEn ? "Goals & Constraints" : "Objectifs et contraintes"}</h4>
                <p className="text-sm text-muted-foreground">
                  {isEn
                    ? "Define what the agent should and shouldn't do"
                    : "Définissez ce que l'agent doit et ne doit pas faire"}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/30">
                <Bot className="w-5 h-5 text-primary mb-2" />
                <h4 className="font-medium mb-1">{isEn ? "Personality" : "Personnalité"}</h4>
                <p className="text-sm text-muted-foreground">
                  {isEn
                    ? "Customize tone, style, and communication approach"
                    : "Personnalisez le ton, le style et l'approche de communication"}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">{isEn ? "Configuration Steps" : "Étapes de configuration"}</h2>
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: isEn ? "Define the agent's purpose" : "Définir l'objectif de l'agent",
                  desc: isEn
                    ? "Clearly specify what tasks the agent should handle."
                    : "Spécifiez clairement quelles tâches l'agent doit gérer.",
                },
                {
                  step: 2,
                  title: isEn ? "Set up knowledge base" : "Configurer la base de connaissances",
                  desc: isEn
                    ? "Provide relevant documents and data for the agent to reference."
                    : "Fournissez des documents et données pertinents pour que l'agent puisse s'y référer.",
                },
                {
                  step: 3,
                  title: isEn ? "Configure integrations" : "Configurer les intégrations",
                  desc: isEn
                    ? "Connect the agent to your existing tools and systems."
                    : "Connectez l'agent à vos outils et systèmes existants.",
                },
                {
                  step: 4,
                  title: isEn ? "Test and refine" : "Tester et affiner",
                  desc: isEn
                    ? "Run test scenarios and adjust based on results."
                    : "Exécutez des scénarios de test et ajustez selon les résultats.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] flex items-center justify-center text-white font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex justify-between">
          <Link
            href="/documentation/actions"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Action Templates" : "Modèles d'actions"}
          </Link>
          <Link
            href="/documentation/training"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            {isEn ? "Training & Optimization" : "Formation et optimisation"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
