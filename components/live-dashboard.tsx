"use client"

import { motion } from "framer-motion"
import { TrendingUp, FileText, CheckCircle2 } from 'lucide-react'
import { useLanguage } from "@/lib/i18n-context"

export function LiveDashboard() {
  const { language } = useLanguage()
  
  const workflows = [
    {
      icon: TrendingUp,
      title: language === "en" ? "Sales Follow-Up Automation" : "Automatisation des Suivis Vente",
      stats: language === "en" ? "342 leads processed • 89% accuracy" : "342 prospects traités • 89% de précision",
      progress: 89
    },
    {
      icon: FileText,
      title: language === "en" ? "Invoice Processing" : "Traitement des Factures",
      stats: language === "en" ? "127 invoices processed" : "127 factures traitées",
      progress: 100
    }
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 opacity-0 dark:opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#00B4FF]/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {language === "en" ? (
              <>
                Your AI works <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">while you focus</span>
              </>
            ) : (
              <>
                Votre IA travaille <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">pendant que vous vous concentrez</span>
              </>
            )}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {language === "en" 
              ? "Watch your AI agents handle repetitive tasks in real-time. From lead follow-ups to invoice processing, everything runs automatically—24/7."
              : "Regardez vos agents IA gérer les tâches répétitives en temps réel. Des suivis de prospects au traitement des factures, tout fonctionne automatiquement—24h/24 et 7j/7."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/40">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#00B4FF] animate-pulse" />
                <span className="text-lg font-semibold text-foreground">
                  {language === "en" ? "AI Workflow Engine • Live" : "Moteur de Workflow IA • En Direct"}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                {language === "en" ? "Updated just now" : "Mis à jour à l'instant"}
              </span>
            </div>

            {/* Workflow items */}
            <div className="space-y-6">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#00B4FF]/30 bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/10 flex items-center justify-center group-hover:border-[#00B4FF]/50 transition-all duration-300">
                      <workflow.icon className="w-5 h-5 md:w-6 md:h-6 text-[#00B4FF]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                            {workflow.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {workflow.stats}
                          </p>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-[#00B4FF] flex-shrink-0" />
                      </div>

                      {/* Progress bar */}
                      <div className="relative h-2 bg-border/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${workflow.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00B4FF] to-[#0047AB] rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
