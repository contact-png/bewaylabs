"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Shield, Lock, Eye, Server, FileCheck } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function DataProtectionPage() {
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
              {isEn ? "Data Protection" : "Protection des données"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {isEn
              ? "Learn how we protect your data and ensure compliance with regulations."
              : "Découvrez comment nous protégeons vos données et assurons la conformité aux réglementations."}
          </p>
        </div>

        <div className="space-y-12">
          <section className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <Lock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{isEn ? "Encryption" : "Chiffrement"}</h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "All data is encrypted at rest and in transit using AES-256 encryption."
                  : "Toutes les données sont chiffrées au repos et en transit avec le chiffrement AES-256."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <Eye className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {isEn ? "Privacy by Design" : "Confidentialité par conception"}
              </h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Privacy considerations are built into every feature from the ground up."
                  : "Les considérations de confidentialité sont intégrées à chaque fonctionnalité dès la conception."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <Server className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{isEn ? "Data Residency" : "Résidence des données"}</h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Choose where your data is stored to meet local compliance requirements."
                  : "Choisissez où vos données sont stockées pour respecter les exigences locales de conformité."}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50">
              <FileCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{isEn ? "GDPR Compliance" : "Conformité RGPD"}</h3>
              <p className="text-muted-foreground">
                {isEn
                  ? "Full compliance with GDPR and other international data protection laws."
                  : "Conformité totale avec le RGPD et autres lois internationales sur la protection des données."}
              </p>
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-[#0047AB]/10 border border-border/50">
            <h2 className="text-2xl font-semibold mb-4">{isEn ? "Our Commitments" : "Nos engagements"}</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Your data is never used to train AI models"
                  : "Vos données ne sont jamais utilisées pour entraîner des modèles IA"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Regular security audits and penetration testing"
                  : "Audits de sécurité réguliers et tests de pénétration"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn ? "SOC 2 Type II certified infrastructure" : "Infrastructure certifiée SOC 2 Type II"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {isEn
                  ? "Data retention policies you control"
                  : "Politiques de conservation des données que vous contrôlez"}
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex justify-between">
          <Link
            href="/documentation/monitoring"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "Performance Monitoring" : "Suivi des performances"}
          </Link>
          <Link
            href="/documentation/access-control"
            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            {isEn ? "Access Control" : "Contrôle d'accès"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
