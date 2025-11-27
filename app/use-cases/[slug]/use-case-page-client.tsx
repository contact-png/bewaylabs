"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { useLanguage } from "@/lib/i18n-context"
import { GradientText } from "@/components/gradient-text"

// Use case data structure
const useCaseData = {
  sales: {
    hero: {
      en: {
        title: "Automate your sales pipeline.",
        titleHighlight: "Close deals faster.",
        subtitle:
          "Transform your sales process in 7 days. AI-powered lead qualification, follow-ups, and deal tracking that never miss an opportunity.",
      },
      fr: {
        title: "Automatisez votre pipeline de ventes.",
        titleHighlight: "Concluez plus vite.",
        subtitle:
          "Transformez votre processus de vente en 7 jours. Qualification de prospects, suivis et suivi des affaires pilotés par l'IA qui ne manquent jamais une opportunité.",
      },
    },
    metrics: [
      { value: "+35%", label: { en: "pipeline growth", fr: "croissance du pipeline" } },
      { value: "−50%", label: { en: "manual follow-up time", fr: "temps de suivi manuel" } },
      { value: "2×", label: { en: "faster deal cycle", fr: "cycle d'affaires plus rapide" } },
      { value: "+28%", label: { en: "conversion rate", fr: "taux de conversion" } },
    ],
    workflow: [
      {
        step: { en: "Discover", fr: "Découvrir" },
        description: {
          en: "Map your sales process and identify automation opportunities",
          fr: "Cartographier votre processus de vente et identifier les opportunités d'automatisation",
        },
      },
      {
        step: { en: "Setup", fr: "Configurer" },
        description: {
          en: "Connect your CRM and configure intelligent lead scoring",
          fr: "Connecter votre CRM et configurer le scoring intelligent des prospects",
        },
      },
      {
        step: { en: "Optimize", fr: "Optimiser" },
        description: {
          en: "Launch automated follow-ups and deal tracking workflows",
          fr: "Lancer les suivis automatisés et les workflows de suivi des affaires",
        },
      },
      {
        step: { en: "Scale", fr: "Évoluer" },
        description: {
          en: "Expand automation across your entire sales funnel",
          fr: "Étendre l'automatisation à l'ensemble de votre entonnoir de vente",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "Our sales team now spends time selling, not chasing leads. The AI handles qualification and follow-ups flawlessly.",
        fr: "Notre équipe commerciale passe maintenant du temps à vendre, pas à courir après les prospects. L'IA gère la qualification et les suivis sans faille.",
      },
      author: { en: "Marcus Chen", fr: "Marcus Chen" },
      role: { en: "Head of Sales, RetailCo", fr: "Directeur des Ventes, RetailCo" },
    },
    image: "/modern-sales-dashboard-with-pipeline-metrics-and-a.jpg",
  },
  support: {
    hero: {
      en: {
        title: "Support that scales.",
        titleHighlight: "Without adding headcount.",
        subtitle:
          "Handle 10× more inquiries in 7 days. AI-powered routing, instant responses, and intelligent escalation that keeps customers happy.",
      },
      fr: {
        title: "Support qui évolue.",
        titleHighlight: "Sans augmenter les effectifs.",
        subtitle:
          "Gérez 10× plus de demandes en 7 jours. Routage piloté par l'IA, réponses instantanées et escalade intelligente qui garde les clients satisfaits.",
      },
    },
    metrics: [
      { value: "−50%", label: { en: "response time", fr: "temps de réponse" } },
      { value: "+65%", label: { en: "customer satisfaction", fr: "satisfaction client" } },
      { value: "24/7", label: { en: "automated coverage", fr: "couverture automatisée" } },
      { value: "−40%", label: { en: "support costs", fr: "coûts de support" } },
    ],
    workflow: [
      {
        step: { en: "Discover", fr: "Découvrir" },
        description: {
          en: "Analyze support tickets and identify common patterns",
          fr: "Analyser les tickets de support et identifier les patterns communs",
        },
      },
      {
        step: { en: "Setup", fr: "Configurer" },
        description: {
          en: "Build AI response templates and routing rules",
          fr: "Créer les modèles de réponse IA et les règles de routage",
        },
      },
      {
        step: { en: "Optimize", fr: "Optimiser" },
        description: {
          en: "Deploy intelligent ticketing and auto-responses",
          fr: "Déployer la ticketisation intelligente et les réponses automatiques",
        },
      },
      {
        step: { en: "Scale", fr: "Évoluer" },
        description: {
          en: "Expand to multi-channel support automation",
          fr: "Étendre à l'automatisation du support multi-canal",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "We went from drowning in tickets to responding in minutes. Our team can finally focus on complex issues that need human touch.",
        fr: "Nous sommes passés de noyés sous les tickets à répondre en minutes. Notre équipe peut enfin se concentrer sur les problèmes complexes qui nécessitent une touche humaine.",
      },
      author: { en: "Sarah Williams", fr: "Sarah Williams" },
      role: { en: "VP Customer Success, TechStart", fr: "VP Succès Client, TechStart" },
    },
    image: "/customer-support-dashboard-with-ticket-management-.jpg",
  },
  finance: {
    hero: {
      en: {
        title: "Finance workflows that run themselves.",
        titleHighlight: "Focus on strategy.",
        subtitle:
          "Eliminate manual data entry in 7 days. Automated invoice processing, expense management, and financial reporting that's always accurate.",
      },
      fr: {
        title: "Workflows financiers qui fonctionnent seuls.",
        titleHighlight: "Concentrez-vous sur la stratégie.",
        subtitle:
          "Éliminez la saisie manuelle en 7 jours. Traitement automatisé des factures, gestion des dépenses et rapports financiers toujours précis.",
      },
    },
    metrics: [
      { value: "−60%", label: { en: "manual work", fr: "travail manuel" } },
      { value: "99.8%", label: { en: "accuracy rate", fr: "taux de précision" } },
      { value: "−75%", label: { en: "processing time", fr: "temps de traitement" } },
      { value: "$85K", label: { en: "saved annually", fr: "économisés annuellement" } },
    ],
    workflow: [
      {
        step: { en: "Discover", fr: "Découvrir" },
        description: {
          en: "Map your financial processes and data flows",
          fr: "Cartographier vos processus financiers et flux de données",
        },
      },
      {
        step: { en: "Setup", fr: "Configurer" },
        description: {
          en: "Connect your accounting systems and define rules",
          fr: "Connecter vos systèmes comptables et définir les règles",
        },
      },
      {
        step: { en: "Optimize", fr: "Optimiser" },
        description: {
          en: "Automate invoice processing and expense tracking",
          fr: "Automatiser le traitement des factures et le suivi des dépenses",
        },
      },
      {
        step: { en: "Scale", fr: "Évoluer" },
        description: {
          en: "Expand to full financial reporting automation",
          fr: "Étendre à l'automatisation complète des rapports financiers",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "Month-end close used to take 2 weeks. Now it's done in 3 days. Our finance team finally has time for analysis, not just data entry.",
        fr: "La clôture de fin de mois prenait 2 semaines. Maintenant c'est fait en 3 jours. Notre équipe financière a enfin du temps pour l'analyse, pas juste la saisie.",
      },
      author: { en: "David Park", fr: "David Park" },
      role: { en: "CFO, GrowthCorp", fr: "Directeur Financier, GrowthCorp" },
    },
    image: "/financial-dashboard-with-invoice-automation-and-ex.jpg",
  },
  ops: {
    hero: {
      en: {
        title: "Operations at peak efficiency.",
        titleHighlight: "Every single day.",
        subtitle:
          "Streamline your workflows in 7 days. Automated inventory management, vendor coordination, and process optimization that eliminates bottlenecks.",
      },
      fr: {
        title: "Opérations à l'efficacité maximale.",
        titleHighlight: "Chaque jour.",
        subtitle:
          "Rationalisez vos workflows en 7 jours. Gestion automatisée des stocks, coordination des fournisseurs et optimisation des processus qui éliminent les goulots d'étranglement.",
      },
    },
    metrics: [
      { value: "+40%", label: { en: "operational efficiency", fr: "efficacité opérationnelle" } },
      { value: "−55%", label: { en: "coordination time", fr: "temps de coordination" } },
      { value: "−30%", label: { en: "inventory costs", fr: "coûts de stock" } },
      { value: "100%", label: { en: "process visibility", fr: "visibilité des processus" } },
    ],
    workflow: [
      {
        step: { en: "Discover", fr: "Découvrir" },
        description: {
          en: "Map operational workflows and identify inefficiencies",
          fr: "Cartographier les workflows opérationnels et identifier les inefficacités",
        },
      },
      {
        step: { en: "Setup", fr: "Configurer" },
        description: {
          en: "Connect systems and configure automation rules",
          fr: "Connecter les systèmes et configurer les règles d'automatisation",
        },
      },
      {
        step: { en: "Optimize", fr: "Optimiser" },
        description: {
          en: "Launch automated coordination and tracking",
          fr: "Lancer la coordination et le suivi automatisés",
        },
      },
      {
        step: { en: "Scale", fr: "Évoluer" },
        description: {
          en: "Expand automation across all operations",
          fr: "Étendre l'automatisation à toutes les opérations",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "Supply chain bottlenecks that used to halt production now resolve automatically. Our operations run like clockwork.",
        fr: "Les goulots d'étranglement de la chaîne d'approvisionnement qui arrêtaient la production se résolvent maintenant automatiquement. Nos opérations fonctionnent comme une horloge.",
      },
      author: { en: "Jennifer Lee", fr: "Jennifer Lee" },
      role: { en: "VP Operations, ManufactureCo", fr: "VP Opérations, ManufactureCo" },
    },
    image: "/operations-dashboard-with-workflow-automation-and-.jpg",
  },
  hr: {
    hero: {
      en: {
        title: "HR that focuses on people.",
        titleHighlight: "Not paperwork.",
        subtitle:
          "Transform HR workflows in 7 days. Automated onboarding, time tracking, and performance reviews that give your team time to build culture.",
      },
      fr: {
        title: "RH qui se concentre sur les personnes.",
        titleHighlight: "Pas la paperasse.",
        subtitle:
          "Transformez les workflows RH en 7 jours. Intégration automatisée, suivi du temps et évaluations de performance qui donnent à votre équipe le temps de construire la culture.",
      },
    },
    metrics: [
      { value: "−70%", label: { en: "admin time", fr: "temps administratif" } },
      { value: "+85%", label: { en: "onboarding satisfaction", fr: "satisfaction d'intégration" } },
      { value: "3 days", label: { en: "onboarding time", fr: "temps d'intégration" } },
      { value: "100%", label: { en: "compliance rate", fr: "taux de conformité" } },
    ],
    workflow: [
      {
        step: { en: "Discover", fr: "Découvrir" },
        description: {
          en: "Map HR processes and compliance requirements",
          fr: "Cartographier les processus RH et les exigences de conformité",
        },
      },
      {
        step: { en: "Setup", fr: "Configurer" },
        description: {
          en: "Build automated workflows and templates",
          fr: "Créer des workflows et modèles automatisés",
        },
      },
      {
        step: { en: "Optimize", fr: "Optimiser" },
        description: {
          en: "Launch onboarding and performance automation",
          fr: "Lancer l'automatisation de l'intégration et de la performance",
        },
      },
      {
        step: { en: "Scale", fr: "Évoluer" },
        description: {
          en: "Expand to full employee lifecycle automation",
          fr: "Étendre à l'automatisation complète du cycle de vie des employés",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "New hires are productive on day one. Our HR team finally has time to focus on culture and employee development, not forms.",
        fr: "Les nouveaux employés sont productifs dès le premier jour. Notre équipe RH a enfin le temps de se concentrer sur la culture et le développement, pas les formulaires.",
      },
      author: { en: "Michael Torres", fr: "Michael Torres" },
      role: { en: "Head of HR, InnovateTech", fr: "Directeur RH, InnovateTech" },
    },
    image: "/hr-dashboard-with-onboarding-automation-and-employ.jpg",
  },
  marketing: {
    hero: {
      en: {
        title: "Marketing that scales impact.",
        titleHighlight: "Not just volume.",
        subtitle:
          "Launch smarter campaigns in 7 days. Automated lead scoring, content distribution, and performance tracking that drives real growth.",
      },
      fr: {
        title: "Marketing qui fait croître l'impact.",
        titleHighlight: "Pas juste le volume.",
        subtitle:
          "Lancez des campagnes plus intelligentes en 7 jours. Scoring de prospects automatisé, distribution de contenu et suivi de performance qui génèrent une vraie croissance.",
      },
    },
    metrics: [
      { value: "+45%", label: { en: "lead quality", fr: "qualité des prospects" } },
      { value: "−60%", label: { en: "campaign setup time", fr: "temps de configuration des campagnes" } },
      { value: "+38%", label: { en: "conversion rate", fr: "taux de conversion" } },
      { value: "3×", label: { en: "content velocity", fr: "vélocité du contenu" } },
    ],
    workflow: [
      {
        step: { en: "Discover", fr: "Découvrir" },
        description: {
          en: "Analyze campaigns and identify automation opportunities",
          fr: "Analyser les campagnes et identifier les opportunités d'automatisation",
        },
      },
      {
        step: { en: "Setup", fr: "Configurer" },
        description: {
          en: "Build intelligent lead scoring and workflows",
          fr: "Créer le scoring intelligent des prospects et les workflows",
        },
      },
      {
        step: { en: "Optimize", fr: "Optimiser" },
        description: {
          en: "Launch automated campaigns and distribution",
          fr: "Lancer les campagnes et la distribution automatisées",
        },
      },
      {
        step: { en: "Scale", fr: "Évoluer" },
        description: {
          en: "Expand to full marketing automation suite",
          fr: "Étendre à la suite complète d'automatisation marketing",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "We went from launching one campaign per month to four. The AI handles segmentation, timing, and optimization automatically.",
        fr: "Nous sommes passés d'une campagne par mois à quatre. L'IA gère la segmentation, le timing et l'optimisation automatiquement.",
      },
      author: { en: "Emma Rodriguez", fr: "Emma Rodriguez" },
      role: { en: "CMO, ScaleUp", fr: "Directrice Marketing, ScaleUp" },
    },
    image: "/marketing-dashboard-with-campaign-automation-and-l.jpg",
  },
}

export default function UseCasePageClient({ slug }: { slug: string }) {
  const { language, t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const data = useCaseData[slug as keyof typeof useCaseData]

  if (!data) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              {language === "en" ? "Back to use cases" : "Retour aux cas d'usage"}
            </Link>

            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-5xl font-bold tracking-tight capitalize">{slug} Automation</h1>
              <p className="text-xl text-gray-400">
                {language === "en"
                  ? `Detailed information about ${slug} automation workflows coming soon.`
                  : `Informations détaillées sur les workflows d'automatisation ${slug} à venir bientôt.`}
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  const hero = data.hero[language]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Deep Trust Blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D12] via-[#0F1729] to-[#0A0D12]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#5CA9FF]/10 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Back link */}
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === "en" ? "Back to use cases" : "Retour aux cas d'usage"}
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-[clamp(32px,7vw,40px)] sm:text-[clamp(40px,6vw,80px)] font-semibold tracking-tight leading-[0.98]">
                  <GradientText>
                    {hero.title}
                    <br />
                    {hero.titleHighlight}
                  </GradientText>
                </h1>
                <p className="text-xl text-[#8A93A2] leading-relaxed max-w-2xl text-pretty">{hero.subtitle}</p>
              </div>

              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-semibold rounded-full bg-[#5CA9FF] hover:bg-[#5CA9FF]/90 text-white shadow-2xl transition-all duration-300"
              >
                <Link href="/pricing">
                  {language === "en" ? "See Pricing" : "Voir les Tarifs"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Right: Product visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-[#1E293B] shadow-2xl">
                <Image
                  src={data.image || "/placeholder.svg"}
                  alt={`${slug} dashboard`}
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
                {/* Subtle lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#5CA9FF]/5 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {language === "en" ? "Measurable impact" : "Impact mesurable"}
            </h2>
            <p className="text-xl text-[#8A93A2]">
              {language === "en" ? "Real results from day one" : "Résultats réels dès le premier jour"}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center space-y-3"
              >
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#5CA9FF]/10 border border-[#5CA9FF]/20">
                  <span className="text-3xl font-bold text-[#5CA9FF]">{metric.value}</span>
                </div>
                <p className="text-gray-400 font-medium">{metric.label[language]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#0F172A]/30 to-transparent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {language === "en" ? "How it works" : "Comment ça marche"}
            </h2>
            <p className="text-xl text-[#8A93A2]">
              {language === "en" ? "From discovery to scale in 4 steps" : "De la découverte à l'échelle en 4 étapes"}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {data.workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#5CA9FF]/10 border border-[#5CA9FF]/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#5CA9FF]">{i + 1}</span>
                </div>
                <div className="space-y-2 pt-2">
                  <h3 className="text-2xl font-semibold">{step.step[language]}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description[language]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Storytelling Block */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#1E293B] shadow-2xl">
              <Image
                src={data.image || "/placeholder.svg"}
                alt={`${slug} workflow visualization`}
                width={1200}
                height={700}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mini-Testimonial Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="text-6xl text-[#5CA9FF]/20 font-serif leading-none">"</div>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-pretty">
              {data.testimonial.quote[language]}
            </blockquote>
            <div className="pt-4">
              <p className="font-semibold text-lg">{data.testimonial.author[language]}</p>
              <p className="text-gray-400">{data.testimonial.role[language]}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 md:py-48 px-6 relative overflow-hidden">
        {/* Cinematic gradient background matching use cases page */}
        <div className="absolute inset-0">
          <motion.div
            style={{ scale, opacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-[#5CA9FF]/20 via-[#24E1A8]/20 to-[#5CA9FF]/20 rounded-full blur-[150px]"
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
              className="absolute w-2 h-2 rounded-full bg-[#5CA9FF]/30"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 15}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-16"
          >
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.02em] leading-[1.05] text-balance">
                {language === "en"
                  ? "Start your 7-day automation journey"
                  : "Commencez votre parcours d'automatisation en 7 jours"}
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl text-[#8A93A2] font-light leading-relaxed max-w-3xl mx-auto text-balance">
                {language === "en"
                  ? "Launch in 7 days, pay monthly, no setup cost."
                  : "Lancez en 7 jours, payez mensuellement, aucun coût de configuration."}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <div className="relative inline-block group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#5CA9FF]/50 via-[#24E1A8]/50 to-[#5CA9FF]/50 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />

                <Button
                  asChild
                  size="lg"
                  className="relative h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-semibold rounded-full bg-[#5CA9FF] hover:bg-[#5CA9FF]/90 text-white shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(92,169,255,0.3)]"
                >
                  <Link href="/pricing">
                    {t.cta.button}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="pt-12">
              <p className="text-sm text-[#8A93A2]/60 font-light max-w-2xl mx-auto leading-relaxed">
                {t.cta.disclaimer}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
