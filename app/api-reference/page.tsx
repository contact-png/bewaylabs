"use client"

import { useState } from "react"
import Link from "next/link"
import { Code2, Search, Zap, Shield, Terminal, Copy, Check, ChevronRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function APIReferencePage() {
  const { t } = useI18n()
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/v1/workflows",
      title: t.apiReference?.endpoints?.workflows?.trigger,
      description: t.apiReference?.endpoints?.workflows?.triggerDesc,
    },
    {
      method: "GET",
      endpoint: "/v1/workflows/{id}",
      title: t.apiReference?.endpoints?.workflows?.get,
      description: t.apiReference?.endpoints?.workflows?.getDesc,
    },
    {
      method: "POST",
      endpoint: "/v1/agents",
      title: t.apiReference?.endpoints?.agents?.deploy,
      description: t.apiReference?.endpoints?.agents?.deployDesc,
    },
    {
      method: "GET",
      endpoint: "/v1/agents/{id}/metrics",
      title: t.apiReference?.endpoints?.agents?.metrics,
      description: t.apiReference?.endpoints?.agents?.metricsDesc,
    },
  ]

  const sdks = [
    {
      name: "Node.js",
      install: "npm install @bewaylabs/sdk",
      example: `import { BewayLabs } from '@bewaylabs/sdk';

const client = new BewayLabs({
  apiKey: process.env.BEWAY_API_KEY
});

const workflow = await client.workflows.create({
  name: "Sales Follow-up",
  trigger: "new_lead",
  actions: ["classify", "respond"]
});`,
    },
    {
      name: "Python",
      install: "pip install bewaylabs",
      example: `from bewaylabs import BewayLabs

client = BewayLabs(api_key="your_api_key")

workflow = client.workflows.create(
    name="Sales Follow-up",
    trigger="new_lead",
    actions=["classify", "respond"]
)`,
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t.footer.apiReference}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {t.apiReference?.title}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.apiReference?.subtitle}</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.apiReference?.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t.apiReference?.quickStart?.title}</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t.apiReference?.quickStart?.step1?.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.apiReference?.quickStart?.step1?.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t.apiReference?.quickStart?.step2?.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t.apiReference?.quickStart?.step2?.description}
                    </p>
                    <div className="space-y-2">
                      {sdks.map((sdk, idx) => (
                        <div key={idx} className="relative">
                          <code className="block p-3 rounded-lg bg-muted/50 text-sm font-mono">{sdk.install}</code>
                          <button
                            onClick={() => copyToClipboard(sdk.install, `install-${idx}`)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-muted rounded-lg transition-colors"
                          >
                            {copiedId === `install-${idx}` ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-muted-foreground" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#00B4FF] to-[#0047AB] text-white">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t.apiReference?.quickStart?.step3?.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.apiReference?.quickStart?.step3?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{t.apiReference?.exampleCode}</h3>
            {sdks.map((sdk, idx) => (
              <div key={idx} className="relative">
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-background border border-border text-xs font-medium">
                  {sdk.name}
                </div>
                <pre className="p-6 pt-14 rounded-2xl bg-muted/50 text-sm overflow-x-auto">
                  <code>{sdk.example}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(sdk.example, `example-${idx}`)}
                  className="absolute top-4 right-4 p-2 hover:bg-background rounded-lg transition-colors"
                >
                  {copiedId === `example-${idx}` ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Endpoints */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8">{t.apiReference?.endpoints?.title}</h2>
        <div className="space-y-4">
          {apiEndpoints.map((endpoint, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold w-fit ${
                    endpoint.method === "POST" ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500"
                  }`}
                >
                  {endpoint.method}
                </span>
                <code className="text-sm font-mono flex-1">{endpoint.endpoint}</code>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="mt-4 pl-0 md:pl-20">
                <h4 className="font-semibold mb-1">{endpoint.title}</h4>
                <p className="text-sm text-muted-foreground">{endpoint.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00B4FF]/10 via-[#0047AB]/10 to-transparent border border-border/50 p-12 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.apiReference?.cta?.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t.apiReference?.cta?.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white hover:opacity-90 transition-opacity font-medium"
              >
                {t.apiReference?.cta?.getStarted}
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors font-medium"
              >
                {t.apiReference?.cta?.contactSales}
              </Link>
            </div>
          </div>

          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20 blur-3xl" />
        </div>
      </div>
    </div>
  )
}
