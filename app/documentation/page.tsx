"use client"

import { useState } from "react"
import Link from "next/link"
import { Book, Search, ChevronRight, Code, Zap, Database, Shield, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function DocumentationPage() {
  const { t } = useI18n()
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    {
      icon: Zap,
      title: t.documentation?.categories?.gettingStarted?.title || "Getting Started",
      description:
        t.documentation?.categories?.gettingStarted?.description || "Learn the basics and get up and running quickly.",
      guides: [
        {
          title: t.documentation?.categories?.gettingStarted?.guides?.quickStartGuide || "Quick Start Guide",
          href: "/documentation/quick-start",
        },
        {
          title: t.documentation?.categories?.gettingStarted?.guides?.firstAIWorkflow || "Your First AI Workflow",
          href: "/documentation/first-workflow",
        },
        {
          title: t.documentation?.categories?.gettingStarted?.guides?.integrationSetup || "Integration Setup",
          href: "/documentation/integration-setup",
        },
      ],
    },
    {
      icon: Code,
      title: t.documentation?.categories?.aiWorkflows?.title || "AI Workflows",
      description:
        t.documentation?.categories?.aiWorkflows?.description || "Build and manage powerful automation workflows.",
      guides: [
        {
          title: t.documentation?.categories?.aiWorkflows?.guides?.workflowBuilder || "Workflow Builder",
          href: "/documentation/workflow-builder",
        },
        {
          title: t.documentation?.categories?.aiWorkflows?.guides?.triggerConfiguration || "Trigger Configuration",
          href: "/documentation/triggers",
        },
        {
          title: t.documentation?.categories?.aiWorkflows?.guides?.actionTemplates || "Action Templates",
          href: "/documentation/actions",
        },
      ],
    },
    {
      icon: Database,
      title: t.documentation?.categories?.aiAgents?.title || "AI Agents",
      description: t.documentation?.categories?.aiAgents?.description || "Configure and optimize autonomous AI agents.",
      guides: [
        {
          title: t.documentation?.categories?.aiAgents?.guides?.agentConfiguration || "Agent Configuration",
          href: "/documentation/agent-config",
        },
        {
          title: t.documentation?.categories?.aiAgents?.guides?.trainingOptimization || "Training & Optimization",
          href: "/documentation/training",
        },
        {
          title: t.documentation?.categories?.aiAgents?.guides?.performanceMonitoring || "Performance Monitoring",
          href: "/documentation/monitoring",
        },
      ],
    },
    {
      icon: Shield,
      title: t.documentation?.categories?.securityCompliance?.title || "Security & Compliance",
      description:
        t.documentation?.categories?.securityCompliance?.description ||
        "Keep your data safe and meet compliance requirements.",
      guides: [
        {
          title: t.documentation?.categories?.securityCompliance?.guides?.dataProtection || "Data Protection",
          href: "/documentation/data-protection",
        },
        {
          title: t.documentation?.categories?.securityCompliance?.guides?.accessControl || "Access Control",
          href: "/documentation/access-control",
        },
        {
          title: t.documentation?.categories?.securityCompliance?.guides?.auditLogs || "Audit Logs",
          href: "/documentation/audit-logs",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Book className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t.footer.documentation}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {t.documentation?.title || "Everything you need to build with AI"}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.documentation?.subtitle ||
              "Comprehensive guides, tutorials, and references to help you build powerful AI workflows and agents."}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.documentation?.searchPlaceholder || "Search documentation..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,180,255,0.15)]"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white">
                  <category.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {category.guides.map((guide, gidx) => (
                  <li key={gidx}>
                    <Link
                      href={guide.href}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group/link"
                    >
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      <span>{guide.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00B4FF]/10 via-[#0047AB]/10 to-transparent border border-border/50 p-12">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.documentation?.cta?.title || "Can't find what you're looking for?"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t.documentation?.cta?.subtitle || "Our team is here to help. Get personalized support and guidance."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/help-center"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white hover:opacity-90 transition-opacity font-medium"
              >
                {t.documentation?.cta?.helpCenter || "Visit Help Center"}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors font-medium"
              >
                {t.documentation?.cta?.contactSupport || "Contact Support"}
              </Link>
            </div>
          </div>

          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20 blur-3xl" />
        </div>
      </div>
    </div>
  )
}
