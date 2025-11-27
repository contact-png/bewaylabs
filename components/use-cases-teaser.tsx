"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Headphones, DollarSign, TrendingUp, Users, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function UseCasesTeaser() {
  const useCases = [
    { icon: Briefcase, title: "Sales", kpi: "+35% pipeline" },
    { icon: Headphones, title: "Support", kpi: "−50% response time" },
    { icon: DollarSign, title: "Finance", kpi: "−60% manual work" },
    { icon: TrendingUp, title: "Ops", kpi: "+40% efficiency" },
    { icon: Users, title: "HR", kpi: "−70% admin time" },
    { icon: Megaphone, title: "Marketing", kpi: "+45% lead quality" },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5CA9FF]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#5CA9FF]/10 px-4 py-2 text-sm font-medium text-[#5CA9FF] border border-[#5CA9FF]/20">
            Built for real teams
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Automate where it matters</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            Choose from proven workflows for every department
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/use-cases/${useCase.title.toLowerCase()}`}
                  className="group block rounded-2xl border border-[#1E293B] bg-gradient-to-b from-[#0F172A]/50 to-[#0A0D12]/50 backdrop-blur-sm p-6 hover:border-[#5CA9FF]/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg flex items-center justify-center border border-[#5CA9FF]/20 bg-[#5CA9FF]/10">
                      <Icon className="h-6 w-6 text-[#5CA9FF]" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-[#5CA9FF] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <div className="inline-block rounded-full bg-[#24E1A8]/10 border border-[#24E1A8]/20 px-3 py-1 text-sm font-medium text-[#24E1A8]">
                    {useCase.kpi}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="border-[#1E293B] hover:bg-[#1E293B]/50 bg-transparent">
            <Link href="/use-cases">
              Explore all use cases
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
