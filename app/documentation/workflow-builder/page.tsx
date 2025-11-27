"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Code, Layers, Settings, Zap, GitBranch, Box } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function WorkflowBuilderPage() {
  const { lang } = useI18n()
  const isEn = lang === "en"

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
            <Code className="w-4 h-4" />
            {isEn ? "AI Workflows" : "Workflows IA"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {isEn ? "Workflow Builder" : "Constructeur de Workflows"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Learn how to create powerful AI workflows using our visual builder interface."
              : "Apprenez à créer de puissants workflows IA avec notre interface visuelle."}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
          {/* Overview */}
          <section className="p-8 rounded-2xl bg-card/50 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Layers className="w-6 h-6 text-primary" />
              {isEn ? "Overview" : "Aperçu"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isEn
                ? "The Workflow Builder is a visual drag-and-drop interface that allows you to create complex automation workflows without writing code. Connect triggers, actions, and conditions to build powerful AI-driven processes."
                : "Le Constructeur de Workflows est une interface visuelle glisser-déposer qui vous permet de créer des workflows d'automatisation complexes sans écrire de code. Connectez des déclencheurs, des actions et des conditions pour créer des processus puissants pilotés par l'IA."}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-background/50 border border-border/30">
                <GitBranch className="w-5 h-5 text-primary mb-2" />
                <h4 className="font-medium mb-1">{isEn ? "Visual Design" : "Conception visuelle"}</h4>
                <p className="text-sm text-muted-foreground">
                  {isEn ? "Drag and drop components" : "Glissez-déposez des composants"}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/30">
                <Box className="w-5 h-5 text-primary mb-2" />
                <h4 className="font-medium mb-1">{isEn ? "Pre-built Blocks" : "Blocs prédéfinis"}</h4>
                <p className="text-sm text-muted-foreground">
                  {isEn ? "100+ ready-to-use components" : "100+ composants prêts à l'emploi"}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/30">
                <Zap className="w-5 h-5 text-primary mb-2" />
                <h4 className="font-medium mb-1">{isEn ? "Real-time Testing" : "Test en temps réel"}</h4>
                <p className="text-sm text-muted-foreground">
                  {isEn ? "Test as you build" : "Testez pendant la création"}
                </p>
              </div>
            </div>
          </section>

          {/* Building Your First Workflow */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              {isEn ? "Building Your First Workflow" : "Créer votre premier workflow"}
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    {isEn ? "Create a new workflow" : "Créez un nouveau workflow"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isEn
                      ? "Navigate to the Workflows section and click 'New Workflow'. Give it a descriptive name and select a category."
                      : "Allez dans la section Workflows et cliquez sur 'Nouveau Workflow'. Donnez-lui un nom descriptif et sélectionnez une catégorie."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{isEn ? "Add a trigger" : "Ajoutez un déclencheur"}</h3>
                  <p className="text-muted-foreground">
                    {isEn
                      ? "Every workflow starts with a trigger. This could be a scheduled time, a webhook, an email, or a manual trigger."
                      : "Chaque workflow commence par un déclencheur. Cela peut être une heure planifiée, un webhook, un email ou un déclencheur manuel."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{isEn ? "Configure actions" : "Configurez les actions"}</h3>
                  <p className="text-muted-foreground">
                    {isEn
                      ? "Add actions that will be executed when the trigger fires. Connect to APIs, process data, or send notifications."
                      : "Ajoutez des actions qui seront exécutées lorsque le déclencheur se déclenche. Connectez-vous à des API, traitez des données ou envoyez des notifications."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] flex items-center justify-center text-white font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{isEn ? "Test and deploy" : "Testez et déployez"}</h3>
                  <p className="text-muted-foreground">
                    {isEn
                      ? "Use the built-in testing tools to verify your workflow works correctly, then deploy it to production."
                      : "Utilisez les outils de test intégrés pour vérifier que votre workflow fonctionne correctement, puis déployez-le en production."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-[#0047AB]/10 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <Settings className="w-6 h-6 text-primary" />
              {isEn ? "Best Practices" : "Bonnes pratiques"}
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Keep workflows focused on a single task or process"
                  : "Gardez les workflows concentrés sur une seule tâche ou processus"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Use descriptive names for all components"
                  : "Utilisez des noms descriptifs pour tous les composants"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Add error handling for critical steps"
                  : "Ajoutez une gestion des erreurs pour les étapes critiques"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn ? "Document your workflows with comments" : "Documentez vos workflows avec des commentaires"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Test thoroughly before deploying to production"
                  : "Testez minutieusement avant de déployer en production"}
              </li>
            </ul>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-border/50 flex justify-between">
          <Link
            href="/documentation/integration-setup"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Integration Setup" : "Configuration des intégrations"}
          </Link>
          <Link
            href="/documentation/triggers"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            {isEn ? "Trigger Configuration" : "Configuration des déclencheurs"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
