"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Shield, Users, Key, UserCheck, Settings } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function AccessControlPage() {
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
            <Shield className="w-4 h-4" />
            {isEn ? "Security & Compliance" : "Sécurité et conformité"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {isEn ? "Access Control" : "Contrôle d'accès"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Manage user permissions and secure access to your AI resources."
              : "Gérez les permissions des utilisateurs et sécurisez l'accès à vos ressources IA."}
          </p>
        </div>

        <div className="space-y-12">
          <section className="p-8 rounded-2xl bg-card/50 border border-border/50">
            <h2 className="text-2xl font-semibold mb-6">
              {isEn ? "Role-Based Access Control (RBAC)" : "Contrôle d'accès basé sur les rôles (RBAC)"}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: Users,
                  role: isEn ? "Admin" : "Administrateur",
                  desc: isEn ? "Full access to all features" : "Accès complet à toutes les fonctionnalités",
                },
                {
                  icon: Settings,
                  role: isEn ? "Manager" : "Gestionnaire",
                  desc: isEn ? "Configure workflows and agents" : "Configurer les workflows et agents",
                },
                {
                  icon: UserCheck,
                  role: isEn ? "Viewer" : "Lecteur",
                  desc: isEn ? "Read-only access to dashboards" : "Accès en lecture seule aux tableaux de bord",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-background/50 border border-border/30 text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="font-medium mb-1">{item.role}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              {isEn ? "Security Features" : "Fonctionnalités de sécurité"}
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: Key,
                  title: isEn ? "API Key Management" : "Gestion des clés API",
                  desc: isEn
                    ? "Create and manage API keys with granular permissions"
                    : "Créez et gérez des clés API avec des permissions granulaires",
                },
                {
                  icon: UserCheck,
                  title: isEn ? "Single Sign-On (SSO)" : "Authentification unique (SSO)",
                  desc: isEn
                    ? "Integrate with your existing identity provider"
                    : "Intégrez avec votre fournisseur d'identité existant",
                },
                {
                  icon: Shield,
                  title: isEn ? "Two-Factor Authentication" : "Authentification à deux facteurs",
                  desc: isEn
                    ? "Add an extra layer of security to user accounts"
                    : "Ajoutez une couche de sécurité supplémentaire aux comptes utilisateurs",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex justify-between">
          <Link
            href="/documentation/data-protection"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Data Protection" : "Protection des données"}
          </Link>
          <Link
            href="/documentation/audit-logs"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            {isEn ? "Audit Logs" : "Journaux d'audit"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
