"use client"

import { useI18n } from "@/lib/i18n-context"
import { CheckCircle2, TrendingUp, Zap } from "lucide-react"

export function ProblemSolution() {
  const { t } = useI18n()

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background dark:from-[#0A1628] dark:via-[#0D1F3C] dark:to-[#0A1628] -z-10" />

      {/* Ambient blue glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B4FF]/10 dark:bg-[#00B4FF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0047AB]/10 dark:bg-[#0047AB]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Problem Section */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-foreground">Your team is </span>
              <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
                losing hours to repetitive work
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.problemSolution.problem}
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent mb-2">
                40%
              </div>
              <div className="text-sm text-muted-foreground">{t.problemSolution.painPoint1}</div>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent mb-2">
                14 days
              </div>
              <div className="text-sm text-muted-foreground">{t.problemSolution.painPoint2}</div>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent mb-2">
                $127K
              </div>
              <div className="text-sm text-muted-foreground">{t.problemSolution.painPoint3}</div>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              <span className="text-foreground">We build and run </span>
              <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
                your AI so your team doesn't have to
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.problemSolution.solutionDesc}
            </p>
          </div>

          {/* What We Do Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/60 hover:border-[#00B4FF]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6 text-[#00B4FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.problemSolution.pillar1Title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.problemSolution.pillar1Desc}</p>
            </div>

            <div className="group p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/60 hover:border-[#00B4FF]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-[#00B4FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.problemSolution.pillar2Title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.problemSolution.pillar2Desc}</p>
            </div>

            <div className="group p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-card/60 hover:border-[#00B4FF]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-[#00B4FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.problemSolution.pillar3Title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.problemSolution.pillar3Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
