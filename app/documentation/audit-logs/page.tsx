"use client"

import Link from "next/link"
import { ArrowLeft, Shield, FileText, Search, Download, Clock } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function AuditLogsPage() {
  const {lang } = useI18n()
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
            <Shield className="w-4 h-4" />
            {isEn ? "Security & Compliance" : "Sécurité et conformité"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {isEn ? "Audit Logs" : "Journaux d'audit"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Track and review all activities within your AI platform."
              : "Suivez et examinez toutes les activités au sein de votre plateforme IA."}
          </p>
        </div>

        <div className="space-y-12">
          <section className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <FileText className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {isEn ? "Comprehensive Logging" : "Journalisation complète"}
              </h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Every action is logged with timestamps, user details, and context."
                  : "Chaque action est enregistrée avec des horodatages, des détails utilisateur et un contexte."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <Search className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{isEn ? "Advanced Search" : "Recherche avancée"}</h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Filter and search logs by user, action type, date range, and more."
                  : "Filtrez et recherchez les journaux par utilisateur, type d'action, plage de dates et plus."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <Download className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{isEn ? "Export Options" : "Options d'exportation"}</h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Export logs in CSV, JSON, or PDF format for compliance reporting."
                  : "Exportez les journaux au format CSV, JSON ou PDF pour les rapports de conformité."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {isEn ? "Retention Policies" : "Politiques de conservation"}
              </h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Configure how long logs are retained based on your requirements."
                  : "Configurez la durée de conservation des journaux selon vos besoins."}
              </p>
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-card/50 border border-border/50">
            <h2 className="text-2xl font-semibold mb-6">{isEn ? "What's Logged" : "Ce qui est enregistré"}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                isEn ? "User logins and logouts" : "Connexions et déconnexions des utilisateurs",
                isEn ? "Workflow executions" : "Exécutions de workflows",
                isEn ? "Configuration changes" : "Modifications de configuration",
                isEn ? "API key usage" : "Utilisation des clés API",
                isEn ? "Permission changes" : "Modifications des permissions",
                isEn ? "Data access events" : "Événements d'accès aux données",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-background/50">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-[#0047AB]/10 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4">
              {isEn ? "Need Help with Compliance?" : "Besoin d'aide pour la conformité?"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isEn
                ? "Our team can help you set up audit logging to meet your specific compliance requirements."
                : "Notre équipe peut vous aider à configurer la journalisation d'audit pour répondre à vos exigences de conformité spécifiques."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white hover:opacity-90 transition-opacity font-medium"
            >
              {isEn ? "Contact Us" : "Nous contacter"}
            </Link>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <Link
            href="/documentation/access-control"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Access Control" : "Contrôle d'accès"}
          </Link>
        </div>
      </div>
    </div>
  )
}
