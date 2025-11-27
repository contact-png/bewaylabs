"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { scoreLead, type QualificationAnswers, type ScoringResult } from "@/lib/scoring"
import { useLanguage } from "@/lib/i18n-context"

export default function StartPage() {
  const { t, language } = useLanguage()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    departments: [] as string[],
    tools: [] as string[],
    problem: "",
    weeklyHours: "",
    teamSize: "",
    budget: "",
    fastTrack: false,
    email: "",
    company: "",
  })
  const [recommendedPlan, setRecommendedPlan] = useState<ScoringResult | null>(null)

  const totalSteps = 8

  const departments = [
    t.qualification.departments.sales,
    t.qualification.departments.support,
    t.qualification.departments.finance,
    t.qualification.departments.hr,
    t.qualification.departments.operations,
    t.qualification.departments.marketing,
  ]
  const tools =
    language === "en"
      ? ["HubSpot", "Salesforce", "Notion", "Stripe", "Google Sheets", "Slack", "Airtable", "Zapier", "Other"]
      : ["HubSpot", "Salesforce", "Notion", "Stripe", "Google Sheets", "Slack", "Airtable", "Zapier", "Autre"]
  const budgetOptions = ["$500-$1,000/mo", "$1,000-$2,500/mo", "$2,500-$5,000/mo", "$5,000+/mo"]
  const teamSizeOptions = ["1-5", "6-15", "16-50", "51-100", "100+"]
  const weeklyHoursOptions = [
    t.qualification.hours1,
    t.qualification.hours2,
    t.qualification.hours3,
    t.qualification.hours4,
  ]

  const toggleSelection = (field: "departments" | "tools", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter((item) => item !== value) : [...prev[field], value],
    }))
  }

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const handleBack = () => {
    if (step === 1) {
      router.push('/pricing')
    } else if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    console.log("Form submitted:", formData)

    // Map form data to scoring format
    const workflowsCount = formData.departments.length // Number of departments as proxy for workflows
    const integrations = formData.tools
    const teamSize = parseTeamSize(formData.teamSize)
    const volumeLevel = parseVolumeLevel(formData.weeklyHours)
    const urgency = parseBudgetToUrgency(formData.budget)
    const budgetComfort = parseBudgetComfort(formData.budget)

    const answers: QualificationAnswers = {
      workflowsCount,
      integrations,
      teamSize,
      volumeLevel,
      urgency,
      budgetComfort,
    }

    // Calculate recommended plan
    const result = scoreLead(answers)
    setRecommendedPlan(result)

    // Move to results step
    setStep(9)
  }

  const parseTeamSize = (teamSizeStr: string): number => {
    if (teamSizeStr === "1-5") return 3
    if (teamSizeStr === "6-15") return 10
    if (teamSizeStr === "16-50") return 33
    if (teamSizeStr === "51-100") return 75
    if (teamSizeStr === "100+") return 150
    return 10
  }

  const parseVolumeLevel = (weeklyHours: string): "low" | "medium" | "high" => {
    if (weeklyHours.includes("1-5")) return "low"
    if (weeklyHours.includes("6-10")) return "medium"
    return "high"
  }

  const parseBudgetToUrgency = (budget: string): "just_exploring" | "this_quarter" | "this_month" | "this_week" => {
    if (budget === "$500-$1,000/mo") return "just_exploring"
    if (budget === "$1,000-$2,500/mo") return "this_quarter"
    if (budget === "$2,500-$5,000/mo") return "this_month"
    return "this_week"
  }

  const parseBudgetComfort = (budget: string): "very_tight" | "balanced" | "growth_mode" => {
    if (budget === "$500-$1,000/mo") return "very_tight"
    if (budget === "$5,000+/mo") return "growth_mode"
    return "balanced"
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.departments.length > 0
      case 2:
        return formData.tools.length > 0
      case 3:
        return formData.problem.trim().length > 0
      case 4:
        return formData.weeklyHours !== ""
      case 5:
        return formData.teamSize !== ""
      case 6:
        return formData.budget !== ""
      case 7:
        return true // Fast-track is optional
      case 8:
        return formData.email.trim().length > 0 && formData.company.trim().length > 0
      default:
        return false
    }
  }

  const handleContactFromResults = () => {
    router.push("/contact?plan=" + recommendedPlan?.recommendedPlanId)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="text-2xl font-bold gradient-text">Beway Labs</span>
          </Link>
          <h1 className="text-4xl font-bold mb-2 text-foreground">{t.qualification.title}</h1>
          <p className="text-muted-foreground">{t.qualification.subtitle}</p>
        </div>

        {/* Progress Bar */}
        {step <= totalSteps && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                {t.qualification.step} {step} {t.qualification.of} {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-ocean to-accent-neon"
                initial={{ width: 0 }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        {/* Question Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl"
          >
            {/* Step 1: Departments */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">{t.qualification.step1Title}</h2>
                <p className="text-muted-foreground">{t.qualification.step1Subtitle}</p>
                <div className="grid grid-cols-2 gap-3">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => toggleSelection("departments", dept)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.departments.includes(dept)
                          ? "border-accent-neon bg-accent-neon/10 text-foreground"
                          : "border-border hover:border-accent-neon/50 text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{dept}</span>
                        {formData.departments.includes(dept) && <Check className="h-5 w-5 text-accent-neon" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Tools */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">{t.qualification.step2Title}</h2>
                <p className="text-muted-foreground">{t.qualification.step2Subtitle}</p>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool) => (
                    <button
                      key={tool}
                      onClick={() => toggleSelection("tools", tool)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.tools.includes(tool)
                          ? "border-accent-neon bg-accent-neon/10 text-foreground"
                          : "border-border hover:border-accent-neon/50 text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{tool}</span>
                        {formData.tools.includes(tool) && <Check className="h-5 w-5 text-accent-neon" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Problem */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">{t.qualification.step3Title}</h2>
                <p className="text-muted-foreground">{t.qualification.step3Subtitle}</p>
                <textarea
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder={t.qualification.step3Placeholder}
                  className="w-full h-32 p-4 rounded-xl border-2 border-border focus:border-accent-neon bg-background text-foreground resize-none transition-all"
                />
              </div>
            )}

            {/* Step 4: Weekly Hours */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">{t.qualification.step4Title}</h2>
                <p className="text-muted-foreground">{t.qualification.step4Subtitle}</p>
                <div className="space-y-3">
                  {weeklyHoursOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({ ...formData, weeklyHours: option })}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        formData.weeklyHours === option
                          ? "border-accent-neon bg-accent-neon/10 text-foreground"
                          : "border-border hover:border-accent-neon/50 text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {formData.weeklyHours === option && <Check className="h-5 w-5 text-accent-neon" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Team Size */}
            {step === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">{t.qualification.step5Title}</h2>
                <p className="text-muted-foreground">{t.qualification.step5Subtitle}</p>
                <div className="space-y-3">
                  {teamSizeOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({ ...formData, teamSize: option })}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        formData.teamSize === option
                          ? "border-accent-neon bg-accent-neon/10 text-foreground"
                          : "border-border hover:border-accent-neon/50 text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">
                          {option} {t.qualification.people}
                        </span>
                        {formData.teamSize === option && <Check className="h-5 w-5 text-accent-neon" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Budget */}
            {step === 6 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">{t.qualification.step6Title}</h2>
                <p className="text-muted-foreground">{t.qualification.step6Subtitle}</p>
                <div className="space-y-3">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setFormData({ ...formData, budget: option })}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        formData.budget === option
                          ? "border-accent-neon bg-accent-neon/10 text-foreground"
                          : "border-border hover:border-accent-neon/50 text-muted-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {formData.budget === option && <Check className="h-5 w-5 text-accent-neon" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 7: Fast Track */}
            {step === 7 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">{t.qualification.step7Title}</h2>
                <p className="text-muted-foreground">{t.qualification.step7Subtitle}</p>
                <div className="space-y-3">
                  <button
                    onClick={() => setFormData({ ...formData, fastTrack: true })}
                    className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                      formData.fastTrack
                        ? "border-accent-neon bg-accent-neon/10"
                        : "border-border hover:border-accent-neon/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-foreground">{t.qualification.step7Yes}</span>
                      {formData.fastTrack && <Check className="h-5 w-5 text-accent-neon" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{t.qualification.step7YesDesc}</p>
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, fastTrack: false })}
                    className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                      !formData.fastTrack
                        ? "border-accent-neon bg-accent-neon/10"
                        : "border-border hover:border-accent-neon/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-foreground">{t.qualification.step7No}</span>
                      {!formData.fastTrack && <Check className="h-5 w-5 text-accent-neon" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{t.qualification.step7NoDesc}</p>
                  </button>
                </div>
              </div>
            )}

            {/* Step 8: Contact Info */}
            {step === 8 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">{t.qualification.step8Title}</h2>
                <p className="text-muted-foreground">{t.qualification.step8Subtitle}</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      {t.qualification.companyLabel} {t.qualification.required}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.qualification.companyPlaceholder}
                      className="w-full p-4 rounded-xl border-2 border-border focus:border-accent-neon bg-background text-foreground transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      {t.qualification.emailLabel} {t.qualification.required}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.qualification.emailPlaceholder}
                      className="w-full p-4 rounded-xl border-2 border-border focus:border-accent-neon bg-background text-foreground transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 9 && recommendedPlan && (
              <div className="space-y-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-neon/10 mb-4">
                  <Sparkles className="w-8 h-8 text-accent-neon" />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-3">{t.qualification.resultsTitle}</h2>
                  <div className="inline-block">
                    <span className="text-5xl font-bold gradient-text">{recommendedPlan.recommendedPlanLabel}</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground max-w-md mx-auto">{recommendedPlan.reasoning}</p>

                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-4">
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">{t.qualification.resultsExpectedRoi}</div>
                    <div className="text-2xl font-bold text-foreground">
                      {recommendedPlan.estimatedRoiMultiplierRange[0]}–{recommendedPlan.estimatedRoiMultiplierRange[1]}×
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">{t.qualification.resultsHoursSaved}</div>
                    <div className="text-2xl font-bold text-foreground">
                      {recommendedPlan.estimatedHoursSavedPerMonthRange[0]}–
                      {recommendedPlan.estimatedHoursSavedPerMonthRange[1]}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={handleContactFromResults}
                    className="rounded-full h-14 px-12 text-lg font-medium bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 text-white shadow-2xl shadow-[#00B4FF]/30 dark:shadow-[#00B4FF]/40 hover:shadow-[#00B4FF]/50 dark:hover:shadow-[#00B4FF]/60 border-0 transition-all duration-300 hover:scale-105"
                  >
                    {t.qualification.resultsCtaButton}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  {t.qualification.resultsDisclaimer} <strong>{formData.email}</strong>{" "}
                  {t.qualification.resultsDisclaimer2}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {step <= totalSteps && (
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={handleBack}
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-[#00B4FF]/5 dark:hover:bg-[#00B4FF]/10 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              {step === 1 ? t.qualification.backToPricing || "Back to Pricing" : t.qualification.back}
            </Button>

            {step < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="rounded-full h-12 px-8 bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 disabled:from-muted disabled:to-muted text-white shadow-xl shadow-[#00B4FF]/30 dark:shadow-[#00B4FF]/40 hover:shadow-2xl hover:shadow-[#00B4FF]/50 dark:hover:shadow-[#00B4FF]/60 disabled:shadow-none border-0 transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t.qualification.continue}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="rounded-full h-12 px-8 bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 disabled:from-muted disabled:to-muted text-white shadow-xl shadow-[#00B4FF]/30 dark:shadow-[#00B4FF]/40 hover:shadow-2xl hover:shadow-[#00B4FF]/50 dark:hover:shadow-[#00B4FF]/60 disabled:shadow-none border-0 transition-all duration-300 hover:scale-105 disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t.qualification.seeYourPlan}
                <Sparkles className="h-5 w-5 ml-2" />
              </Button>
            )}
          </div>
        )}

        {/* Footer */}
        {step <= totalSteps && (
          <p className="text-center text-sm text-muted-foreground mt-8">{t.qualification.noCommitment}</p>
        )}
      </div>
    </div>
  )
}
