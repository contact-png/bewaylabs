"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, Clock } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10)
  const [avgSalary, setAvgSalary] = useState(75000)
  const [repetitivePercent, setRepetitivePercent] = useState(40)

  // Calculate ROI
  const hourlyRate = avgSalary / 2080 // 2080 working hours per year
  const hoursPerWeek = 40
  const repetitiveHours = (hoursPerWeek * repetitivePercent) / 100
  const hoursSavedPerPerson = repetitiveHours * 0.7 // 70% automation rate
  const totalHoursSaved = hoursSavedPerPerson * teamSize
  const monthlySavings = Math.round((totalHoursSaved * hourlyRate * 52) / 12)

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00B4FF]/10 via-[#0047AB]/10 to-[#00B4FF]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Calculate Your Potential Savings</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how much time and money your team could save with AI automation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-background/80 via-muted/10 to-background/60 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
            {/* Premium accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00B4FF] to-transparent opacity-60" />
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <Label htmlFor="teamSize" className="text-sm font-medium text-foreground/90 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B4FF]" />
                    Team Size
                  </Label>
                  <Input
                    id="teamSize"
                    type="number"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="h-12 bg-background/50 border-border/50 focus:border-[#00B4FF]/50 transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="avgSalary" className="text-sm font-medium text-foreground/90 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B4FF]" />
                    Average Salary ($)
                  </Label>
                  <Input
                    id="avgSalary"
                    type="number"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="h-12 bg-background/50 border-border/50 focus:border-[#00B4FF]/50 transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="repetitive" className="text-sm font-medium text-foreground/90 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B4FF]" />
                    % Time on Repetitive Work
                  </Label>
                  <Input
                    id="repetitive"
                    type="number"
                    value={repetitivePercent}
                    onChange={(e) => setRepetitivePercent(Number(e.target.value))}
                    max="100"
                    className="h-12 bg-background/50 border-border/50 focus:border-[#00B4FF]/50 transition-colors"
                  />
                </div>
              </div>

              {/* Results - Premium cards */}
              <div className="flex flex-col justify-center space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-[#00B4FF]/20 bg-gradient-to-br from-[#00B4FF]/10 via-[#00B4FF]/5 to-transparent backdrop-blur-sm p-6 space-y-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#00B4FF]/20"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-[#00B4FF]" />
                    Hours saved per week
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
                    {totalHoursSaved.toFixed(0)}h
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-[#0047AB]/20 bg-gradient-to-br from-[#0047AB]/10 via-[#0047AB]/5 to-transparent backdrop-blur-sm p-6 space-y-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#0047AB]/20"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 text-[#0047AB]" />
                    Estimated monthly savings
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#0047AB] to-[#00B4FF] bg-clip-text text-transparent">
                    ${monthlySavings.toLocaleString()}
                  </div>
                </motion.div>

                <p className="text-xs text-muted-foreground/60 leading-relaxed pt-2">
                  * Assumes 70% automation rate for repetitive tasks
                </p>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0047AB] to-transparent opacity-40" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
