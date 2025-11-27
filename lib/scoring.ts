// Scoring engine for lead qualification
// Determines recommended plan based on user's workflow complexity, team size, volume, etc.

export type QualificationAnswers = {
  workflowsCount: number
  integrations: string[]
  teamSize: number
  volumeLevel: "low" | "medium" | "high"
  urgency: "just_exploring" | "this_quarter" | "this_month" | "this_week"
  budgetComfort: "very_tight" | "balanced" | "growth_mode"
}

export type ScoringResult = {
  score: number
  recommendedPlanId: "automate" | "augment" | "autopilot"
  recommendedPlanLabel: string
  estimatedRoiMultiplierRange: [number, number]
  estimatedHoursSavedPerMonthRange: [number, number]
  reasoning: string
}

// Plan metadata mapping
const PLAN_METADATA = {
  automate: {
    label: "Automate",
    roiRange: [3, 5] as [number, number],
    hoursSavedRange: [15, 30] as [number, number],
  },
  augment: {
    label: "Augment",
    roiRange: [4, 8] as [number, number],
    hoursSavedRange: [40, 80] as [number, number],
  },
  autopilot: {
    label: "Autopilot",
    roiRange: [8, 12] as [number, number],
    hoursSavedRange: [100, 200] as [number, number],
  },
} as const

// Scoring weights and thresholds
const SCORING_WEIGHTS = {
  workflows: {
    low: { max: 2, points: 10 },
    medium: { max: 5, points: 25 },
    high: { max: Number.POSITIVE_INFINITY, points: 40 },
  },
  integrations: {
    low: { max: 1, points: 5 },
    medium: { max: 3, points: 15 },
    high: { max: Number.POSITIVE_INFINITY, points: 30 },
  },
  teamSize: {
    tiny: { max: 5, points: 5 },
    small: { max: 20, points: 15 },
    medium: { max: 50, points: 25 },
    large: { max: Number.POSITIVE_INFINITY, points: 35 },
  },
  volume: {
    low: 5,
    medium: 15,
    high: 25,
  },
  urgency: {
    just_exploring: 0,
    this_quarter: 5,
    this_month: 10,
    this_week: 20,
  },
  budgetBonus: {
    growth_mode: 5,
  },
  budgetCap: {
    very_tight: 45,
  },
}

const PLAN_THRESHOLDS = {
  automate: { min: 0, max: 40 },
  augment: { min: 41, max: 70 },
  autopilot: { min: 71, max: 100 },
}

// Complex integrations that signal higher complexity
const COMPLEX_INTEGRATIONS = ["SAP", "NetSuite", "Salesforce", "custom API", "ERP"]

export function scoreLead(answers: QualificationAnswers): ScoringResult {
  let score = 0

  // 1. Workflow complexity
  const workflowCount = answers.workflowsCount
  if (workflowCount <= SCORING_WEIGHTS.workflows.low.max) {
    score += SCORING_WEIGHTS.workflows.low.points
  } else if (workflowCount <= SCORING_WEIGHTS.workflows.medium.max) {
    score += SCORING_WEIGHTS.workflows.medium.points
  } else {
    score += SCORING_WEIGHTS.workflows.high.points
  }

  // 2. Integration depth
  const integrationCount = answers.integrations.length
  const hasComplexIntegration = answers.integrations.some((tool) =>
    COMPLEX_INTEGRATIONS.some((complex) => tool.toLowerCase().includes(complex.toLowerCase())),
  )

  if (hasComplexIntegration) {
    score += SCORING_WEIGHTS.integrations.high.points
  } else if (integrationCount <= SCORING_WEIGHTS.integrations.low.max) {
    score += SCORING_WEIGHTS.integrations.low.points
  } else if (integrationCount <= SCORING_WEIGHTS.integrations.medium.max) {
    score += SCORING_WEIGHTS.integrations.medium.points
  } else {
    score += SCORING_WEIGHTS.integrations.high.points
  }

  // 3. Team size
  const teamSize = answers.teamSize
  if (teamSize <= SCORING_WEIGHTS.teamSize.tiny.max) {
    score += SCORING_WEIGHTS.teamSize.tiny.points
  } else if (teamSize <= SCORING_WEIGHTS.teamSize.small.max) {
    score += SCORING_WEIGHTS.teamSize.small.points
  } else if (teamSize <= SCORING_WEIGHTS.teamSize.medium.max) {
    score += SCORING_WEIGHTS.teamSize.medium.points
  } else {
    score += SCORING_WEIGHTS.teamSize.large.points
  }

  // 4. Volume level
  score += SCORING_WEIGHTS.volume[answers.volumeLevel]

  // 5. Urgency
  score += SCORING_WEIGHTS.urgency[answers.urgency]

  // 6. Budget comfort adjustments
  if (answers.budgetComfort === "growth_mode") {
    score += SCORING_WEIGHTS.budgetBonus.growth_mode
  } else if (answers.budgetComfort === "very_tight") {
    score = Math.min(score, SCORING_WEIGHTS.budgetCap.very_tight)
  }

  // Clamp score between 0 and 100
  score = Math.max(0, Math.min(100, score))

  // Determine recommended plan
  let recommendedPlanId: "automate" | "augment" | "autopilot"
  if (score <= PLAN_THRESHOLDS.automate.max) {
    recommendedPlanId = "automate"
  } else if (score <= PLAN_THRESHOLDS.augment.max) {
    recommendedPlanId = "augment"
  } else {
    recommendedPlanId = "autopilot"
  }

  // Get plan metadata
  const planMeta = PLAN_METADATA[recommendedPlanId]

  // Generate reasoning
  const reasoning = generateReasoning(answers, recommendedPlanId, workflowCount, integrationCount, teamSize)

  return {
    score,
    recommendedPlanId,
    recommendedPlanLabel: planMeta.label,
    estimatedRoiMultiplierRange: planMeta.roiRange,
    estimatedHoursSavedPerMonthRange: planMeta.hoursSavedRange,
    reasoning,
  }
}

function generateReasoning(
  answers: QualificationAnswers,
  planId: string,
  workflowCount: number,
  integrationCount: number,
  teamSize: number,
): string {
  const planLabel = PLAN_METADATA[planId as keyof typeof PLAN_METADATA].label
  const volumeText =
    answers.volumeLevel === "high"
      ? "high volume"
      : answers.volumeLevel === "medium"
        ? "medium volume"
        : "manageable volume"

  const toolsText =
    integrationCount === 0
      ? "no current integrations"
      : integrationCount === 1
        ? `${answers.integrations[0]}`
        : `${integrationCount} tools including ${answers.integrations.slice(0, 2).join(" and ")}`

  const workflowText = workflowCount === 1 ? "1 workflow" : `${workflowCount} workflows`

  const teamText =
    teamSize <= 5
      ? "a small team"
      : teamSize <= 20
        ? "a mid-sized team"
        : teamSize <= 50
          ? "a growing team"
          : "a large team"

  return `You mentioned ${workflowText} across ${toolsText}, with ${teamText} of ${teamSize} and ${volumeText}. ${planLabel} is the best fit to balance complexity and ROI.`
}
