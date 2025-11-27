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

export async function generateStaticParams() {
  return Object.keys(useCaseData).map((slug) => ({
    slug: slug,
  }))
}
