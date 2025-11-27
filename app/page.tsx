"use client"

import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { LiveDashboard } from "@/components/live-dashboard"
import { Outcomes } from "@/components/outcomes"
import { WhyBeway } from "@/components/why-beway"
import { Proof } from "@/components/proof"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <LiveDashboard />
      <Outcomes />
      <WhyBeway />
      <Proof />
      <CTA />
    </main>
  )
}
