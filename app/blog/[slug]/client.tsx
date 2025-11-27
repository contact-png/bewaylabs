"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Heart,
  Share2,
  MessageCircle,
  Bookmark,
  Twitter,
  Linkedin,
  Link2,
  Check,
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n-context"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import AuthModal from "@/components/auth-modal"

const blogPosts = {
  "roi-of-ai-automation": {
    en: {
      title: "The Real ROI of AI Automation",
      subtitle: "How businesses are saving 40% of their time and 3-5× their investment",
      date: "2025-01-15",
      readTime: "5 min read",
      author: "Sarah Chen",
      authorRole: "Head of Product, Beway Labs",
      heroImage: "/modern-business-dashboard-showing-roi-metrics-and-a.jpg",
      content: [
        {
          type: "intro",
          text: "AI automation isn't a future promise—it's delivering measurable ROI today. But separating hype from reality requires understanding what works, what doesn't, and what truly drives business value.",
        },
        {
          type: "heading",
          text: "The Real Numbers",
        },
        {
          type: "paragraph",
          text: "After deploying 100+ AI workflows across mid-market companies, we've tracked the actual financial impact. The data is clear: businesses see 3-5× return on their automation investment within 6 months.",
        },
        {
          type: "stat-grid",
          stats: [
            { value: "40%", label: "Average time saved on repetitive tasks" },
            { value: "3-5×", label: "ROI within 6 months" },
            { value: "30%", label: "Increase in revenue-generating activities" },
            { value: "$127K", label: "Average annual savings per workflow" },
          ],
        },
        {
          type: "heading",
          text: "Where The Value Comes From",
        },
        {
          type: "paragraph",
          text: "The ROI isn't just about cost reduction. Smart automation creates value in three ways:",
        },
        {
          type: "list",
          items: [
            "Time reclamation: Teams redirect 40% of previously manual hours to strategic work",
            "Error elimination: Automated workflows reduce mistakes by 89%, cutting costly rework",
            "Speed advantage: 10× faster response times translate directly to competitive wins",
          ],
        },
        {
          type: "heading",
          text: "The 7-Day Difference",
        },
        {
          type: "paragraph",
          text: "Traditional automation projects take 6-12 months and cost $500K+. Our 7-day deployment model changes the economics entirely. Lower upfront cost, faster payback, and minimal business disruption mean ROI starts on day 8.",
        },
        {
          type: "quote",
          text: "We saved 15 hours per week in the first month alone. That's $50K in productivity gains annually, from a single workflow.",
          author: "Michael Torres",
          role: "VP Operations, TechFlow",
        },
        {
          type: "heading",
          text: "What To Automate First",
        },
        {
          type: "paragraph",
          text: "Not all workflows deliver equal ROI. The highest-impact automations share three characteristics:",
        },
        {
          type: "numbered-list",
          items: [
            "High volume: Tasks repeated daily or weekly",
            "Clear rules: Processes with defined logic and outcomes",
            "Measurable impact: Direct connection to revenue or costs",
          ],
        },
        {
          type: "paragraph",
          text: "Sales follow-ups, invoice processing, and customer support routing consistently deliver the strongest returns.",
        },
        {
          type: "heading",
          text: "Beyond The Spreadsheet",
        },
        {
          type: "paragraph",
          text: "The financial ROI is quantifiable. But there's hidden value that doesn't show up in spreadsheets: team morale improves when people escape repetitive work, customer satisfaction rises with faster response times, and strategic initiatives finally get the attention they deserve.",
        },
        {
          type: "cta",
          text: "Calculate your automation ROI in 30 seconds",
          link: "/pricing",
        },
      ],
    },
    fr: {
      title: "Le vrai ROI de l'automatisation IA",
      subtitle: "Comment les entreprises économisent 40% de leur temps et 3-5× leur investissement",
      date: "2025-01-15",
      readTime: "5 min de lecture",
      author: "Sarah Chen",
      authorRole: "Directrice Produit, Beway Labs",
      heroImage: "/modern-business-dashboard-showing-roi-metrics-and-a.jpg",
      content: [
        {
          type: "intro",
          text: "L'automatisation IA n'est pas une promesse future - elle offre un ROI mesurable aujourd'hui. Mais séparer le battage médiatique de la réalité nécessite de comprendre ce qui fonctionne, ce qui ne fonctionne pas, et ce qui crée vraiment de la valeur commerciale.",
        },
        {
          type: "heading",
          text: "Les vrais chiffres",
        },
        {
          type: "paragraph",
          text: "Après avoir déployé plus de 100 workflows IA dans des entreprises de taille moyenne, nous avons suivi l'impact financier réel. Les données sont claires : les entreprises voient un retour de 3 à 5× sur leur investissement en automatisation dans les 6 mois.",
        },
        {
          type: "stat-grid",
          stats: [
            { value: "40%", label: "Temps moyen économisé sur les tâches répétitives" },
            { value: "3-5×", label: "ROI dans les 6 mois" },
            { value: "30%", label: "Augmentation des activités génératrices de revenus" },
            { value: "127K$", label: "Économies annuelles moyennes par workflow" },
          ],
        },
        {
          type: "heading",
          text: "D'où vient la valeur",
        },
        {
          type: "paragraph",
          text: "Le ROI ne concerne pas seulement la réduction des coûts. L'automatisation intelligente crée de la valeur de trois manières :",
        },
        {
          type: "list",
          items: [
            "Récupération du temps : Les équipes redirigent 40% des heures précédemment manuelles vers un travail stratégique",
            "Élimination des erreurs : Les workflows automatisés réduisent les erreurs de 89%, réduisant les retouches coûteuses",
            "Avantage de vitesse : Des temps de réponse 10× plus rapides se traduisent directement par des gains compétitifs",
          ],
        },
        {
          type: "heading",
          text: "La différence des 7 jours",
        },
        {
          type: "paragraph",
          text: "Les projets d'automatisation traditionnels prennent 6 à 12 mois et coûtent plus de 500K$. Notre modèle de déploiement de 7 jours change complètement l'économie. Coût initial plus faible, retour sur investissement plus rapide et perturbation minimale de l'entreprise signifient que le ROI commence le jour 8.",
        },
        {
          type: "quote",
          text: "Nous avons économisé 15 heures par semaine dès le premier mois. C'est 50K$ de gains de productivité par an, d'un seul workflow.",
          author: "Michael Torres",
          role: "VP Opérations, TechFlow",
        },
        {
          type: "heading",
          text: "Quoi automatiser en premier",
        },
        {
          type: "paragraph",
          text: "Tous les workflows ne fournissent pas un ROI égal. Les automatisations à plus fort impact partagent trois caractéristiques :",
        },
        {
          type: "numbered-list",
          items: [
            "Volume élevé : Tâches répétées quotidiennement ou hebdomadairement",
            "Règles claires : Processus avec logique et résultats définis",
            "Impact mesurable : Connexion directe aux revenus ou aux coûts",
          ],
        },
        {
          type: "paragraph",
          text: "Les suivis commerciaux, le traitement des factures et le routage du support client offrent systématiquement les meilleurs rendements.",
        },
        {
          type: "heading",
          text: "Au-delà de la feuille de calcul",
        },
        {
          type: "paragraph",
          text: "Le ROI financier est quantifiable. Mais il y a une valeur cachée qui n'apparaît pas dans les feuilles de calcul : le moral de l'équipe s'améliore lorsque les gens échappent au travail répétitif, la satisfaction client augmente avec des temps de réponse plus rapides, et les initiatives stratégiques reçoivent enfin l'attention qu'elles méritent.",
        },
        {
          type: "cta",
          text: "Calculez votre ROI d'automatisation en 30 secondes",
          link: "/pricing",
        },
      ],
    },
  },
  "7-day-launch-playbook": {
    en: {
      title: "7-Day Launch Playbook",
      subtitle: "Our proven framework for deploying production-ready AI workflows",
      date: "2025-01-10",
      readTime: "8 min read",
      author: "James Mitchell",
      authorRole: "CTO, Beway Labs",
      heroImage: "/sleek-project-timeline-visualization-showing-7-da.jpg",
      content: [
        {
          type: "intro",
          text: "Most AI projects fail not because the technology doesn't work, but because implementation drags on for months. Our 7-day playbook compresses what typically takes 6 months into one week—without sacrificing quality or reliability.",
        },
        {
          type: "heading",
          text: "Why 7 Days Works",
        },
        {
          type: "paragraph",
          text: "Traditional AI implementations fail due to scope creep, technical complexity, and organizational friction. By constraining the timeline to 7 days, we force ruthless prioritization and eliminate everything that doesn't directly impact business outcomes.",
        },
        {
          type: "heading",
          text: "The 7-Day Framework",
        },
        {
          type: "day-by-day",
          days: [
            {
              day: "Days 1-2",
              title: "Discovery & Workflow Mapping",
              description:
                "We audit your current process, identify bottlenecks, and map the ideal automated workflow. No generic templates—every workflow is designed for your specific business context.",
              deliverable: "Workflow blueprint with success metrics",
            },
            {
              day: "Days 3-4",
              title: "Build & Configuration",
              description:
                "We build the AI workflow, configure integrations, and set up monitoring. This is where our platform advantage shows: what takes others weeks, we complete in 48 hours.",
              deliverable: "Functional workflow in staging environment",
            },
            {
              day: "Days 5-6",
              title: "Testing & Refinement",
              description:
                "Rigorous testing with real data. We iterate on edge cases, optimize performance, and ensure reliability under production load.",
              deliverable: "Production-ready workflow validated by your team",
            },
            {
              day: "Day 7",
              title: "Deployment & Monitoring",
              description:
                "We deploy to production with full monitoring, alerting, and support. Day 7 is just the beginning—continuous optimization starts immediately.",
              deliverable: "Live workflow with 24/7 monitoring",
            },
          ],
        },
        {
          type: "heading",
          text: "What Makes It Possible",
        },
        {
          type: "paragraph",
          text: "Three factors enable our 7-day timeline:",
        },
        {
          type: "list",
          items: [
            "Pre-built infrastructure: We've solved the hard technical problems once, so every deployment benefits",
            "Narrow scope: We deploy one high-impact workflow, not a complete AI transformation",
            "Managed service: You don't build or maintain anything—we handle operations end-to-end",
          ],
        },
        {
          type: "quote",
          text: "We had been planning an automation project for 8 months. Beway Labs had us live in 7 days. The difference in execution speed is staggering.",
          author: "Lisa Park",
          role: "Director of Operations, CloudScale",
        },
        {
          type: "heading",
          text: "After Day 7",
        },
        {
          type: "paragraph",
          text: "Launch is just the start. We monitor performance daily, optimize based on real-world usage, and iterate on edge cases. Month 2 performance typically exceeds Month 1 by 20-30% as the system learns and improves.",
        },
        {
          type: "heading",
          text: "What This Means For You",
        },
        {
          type: "paragraph",
          text: "Instead of planning for 6 months and building for 6 more, you can be live in 7 days. See real results, validate the approach, and then expand to additional workflows. Speed reduces risk and accelerates learning.",
        },
        {
          type: "cta",
          text: "Start your 7-day automation journey",
          link: "/contact",
        },
      ],
    },
    fr: {
      title: "Guide de lancement en 7 jours",
      subtitle: "Notre cadre éprouvé pour déployer des workflows IA prêts pour la production",
      date: "2025-01-10",
      readTime: "8 min de lecture",
      author: "James Mitchell",
      authorRole: "CTO, Beway Labs",
      heroImage: "/sleek-project-timeline-visualization-showing-7-da.jpg",
      content: [
        {
          type: "intro",
          text: "La plupart des projets IA échouent non pas parce que la technologie ne fonctionne pas, mais parce que la mise en œuvre s'étire sur des mois. Notre guide de 7 jours compresse ce qui prend généralement 6 mois en une semaine - sans sacrifier la qualité ou la fiabilité.",
        },
        {
          type: "heading",
          text: "Pourquoi 7 jours fonctionnent",
        },
        {
          type: "paragraph",
          text: "Les implémentations IA traditionnelles échouent en raison de la dérive de la portée, de la complexité technique et des frictions organisationnelles. En contraignant le calendrier à 7 jours, nous forçons une priorisation impitoyable et éliminons tout ce qui n'impacte pas directement les résultats commerciaux.",
        },
        {
          type: "heading",
          text: "Le cadre des 7 jours",
        },
        {
          type: "day-by-day",
          days: [
            {
              day: "Jours 1-2",
              title: "Découverte & Cartographie des Workflows",
              description:
                "Nous auditons votre processus actuel, identifions les goulots d'étranglement et cartographions le workflow automatisé idéal. Pas de modèles génériques - chaque workflow est conçu pour votre contexte commercial spécifique.",
              deliverable: "Plan de workflow avec métriques de succès",
            },
            {
              day: "Jours 3-4",
              title: "Construction & Configuration",
              description:
                "Nous construisons le workflow IA, configurons les intégrations et mettons en place la surveillance. C'est là que notre avantage plateforme se montre : ce qui prend des semaines aux autres, nous le complétons en 48 heures.",
              deliverable: "Workflow fonctionnel en environnement de test",
            },
            {
              day: "Jours 5-6",
              title: "Tests & Raffinement",
              description:
                "Tests rigoureux avec des données réelles. Nous itérons sur les cas limites, optimisons les performances et assurons la fiabilité sous charge de production.",
              deliverable: "Workflow prêt pour la production validé par votre équipe",
            },
            {
              day: "Jour 7",
              title: "Déploiement & Surveillance",
              description:
                "Nous déployons en production avec surveillance complète, alertes et support. Le jour 7 n'est que le début - l'optimisation continue commence immédiatement.",
              deliverable: "Workflow en ligne avec surveillance 24/7",
            },
          ],
        },
        {
          type: "heading",
          text: "Ce qui le rend possible",
        },
        {
          type: "paragraph",
          text: "Trois facteurs permettent notre calendrier de 7 jours :",
        },
        {
          type: "list",
          items: [
            "Infrastructure pré-construite : Nous avons résolu les problèmes techniques difficiles une fois, donc chaque déploiement en bénéficie",
            "Portée étroite : Nous déployons un workflow à fort impact, pas une transformation IA complète",
            "Service géré : Vous ne construisez ni ne maintenez rien - nous gérons les opérations de bout en bout",
          ],
        },
        {
          type: "quote",
          text: "Nous avions planifié un projet d'automatisation pendant 8 mois. Beway Labs nous a mis en ligne en 7 jours. La différence de vitesse d'exécution est stupéfiante.",
          author: "Lisa Park",
          role: "Directrice des Opérations, CloudScale",
        },
        {
          type: "heading",
          text: "Après le jour 7",
        },
        {
          type: "paragraph",
          text: "Le lancement n'est que le début. Nous surveillons les performances quotidiennement, optimisons en fonction de l'utilisation réelle et itérons sur les cas limites. Les performances du mois 2 dépassent généralement celles du mois 1 de 20 à 30% à mesure que le système apprend et s'améliore.",
        },
        {
          type: "heading",
          text: "Ce que cela signifie pour vous",
        },
        {
          type: "paragraph",
          text: "Au lieu de planifier pendant 6 mois et de construire pendant 6 autres, vous pouvez être en ligne en 7 jours. Voir des résultats réels, valider l'approche, puis étendre à des workflows supplémentaires. La vitesse réduit les risques et accélère l'apprentissage.",
        },
        {
          type: "cta",
          text: "Commencez votre parcours d'automatisation de 7 jours",
          link: "/contact",
        },
      ],
    },
  },
  "ai-for-sales-teams": {
    en: {
      title: "AI for Sales Teams: A Complete Guide",
      subtitle: "Transform your sales process from lead to close",
      date: "2025-01-05",
      readTime: "12 min read",
      author: "Marcus Johnson",
      authorRole: "VP of Sales, Beway Labs",
      heroImage: "/modern-sales-team-dashboard-with-ai-powered-analy.jpg",
      content: [
        {
          type: "intro",
          text: "Sales teams waste 64% of their time on non-selling activities. AI automation changes that equation. This guide shows you exactly how to deploy AI across your sales process—from lead qualification to deal closing.",
        },
        {
          type: "heading",
          text: "The Sales Time Problem",
        },
        {
          type: "paragraph",
          text: "The average sales rep spends:",
        },
        {
          type: "stat-grid",
          stats: [
            { value: "21%", label: "Writing emails and follow-ups" },
            { value: "17%", label: "Entering data and updating CRM" },
            { value: "12%", label: "Researching prospects" },
            { value: "14%", label: "Scheduling and internal meetings" },
          ],
        },
        {
          type: "paragraph",
          text: "That's 64% of their time on activities that don't close deals. AI automation reclaims this time.",
        },
        {
          type: "heading",
          text: "Where AI Delivers Maximum Impact",
        },
        {
          type: "numbered-list",
          items: [
            "Lead qualification: AI scores and routes leads instantly based on fit and intent",
            "Email automation: Personalized follow-ups sent at optimal times, no manual work",
            "Meeting scheduling: AI handles back-and-forth, finds times, sends confirmations",
            "CRM hygiene: Automatic data entry and enrichment keeps your CRM current",
            "Pipeline insights: Real-time alerts on deal risks and opportunities",
          ],
        },
        {
          type: "heading",
          text: "Real Implementation: Lead Qualification",
        },
        {
          type: "paragraph",
          text: "Let's get specific. Here's how AI lead qualification works in practice:",
        },
        {
          type: "process-flow",
          steps: [
            {
              title: "Lead Capture",
              description: "New lead comes in from website, ads, or referral",
            },
            {
              title: "AI Scoring",
              description: "System analyzes company size, industry, tech stack, buying signals",
            },
            {
              title: "Automatic Enrichment",
              description: "Pulls company data, finds decision-makers, checks funding status",
            },
            {
              title: "Smart Routing",
              description: "Assigns to right rep based on territory, vertical, and availability",
            },
            {
              title: "Personalized Outreach",
              description: "Generates tailored first email based on company context",
            },
          ],
        },
        {
          type: "paragraph",
          text: "This entire process happens in under 2 minutes. Manual process: 30-45 minutes per lead.",
        },
        {
          type: "quote",
          text: "We went from qualifying 50 leads per week to 400. Same team, 8× the volume. Our close rate actually improved because reps focus on qualified conversations.",
          author: "Sarah Kim",
          role: "Head of Sales, GrowthTech",
        },
        {
          type: "heading",
          text: "Email Automation That Doesn't Feel Automated",
        },
        {
          type: "paragraph",
          text: "The key to effective sales email automation is personalization at scale. Generic blasts don't work. AI enables true 1-to-1 personalization:",
        },
        {
          type: "list",
          items: [
            "Company-specific references: Mentions recent funding, product launches, or hiring",
            "Role-based messaging: Different pitch for CFO vs CTO vs CEO",
            "Behavioral triggers: Follow-ups based on email opens, link clicks, website visits",
            "Timing optimization: Sends when recipient is most likely to engage",
          ],
        },
        {
          type: "heading",
          text: "Pipeline Intelligence",
        },
        {
          type: "paragraph",
          text: "AI doesn't just automate tasks—it provides insights humans miss:",
        },
        {
          type: "insight-grid",
          insights: [
            {
              title: "Deal Risk Detection",
              description: "Flags deals going cold before you lose them",
            },
            {
              title: "Champion Identification",
              description: "Identifies who's actually driving the deal forward",
            },
            {
              title: "Competitive Intelligence",
              description: "Surfaces when prospects are evaluating competitors",
            },
            {
              title: "Forecasting Accuracy",
              description: "Predicts close probability based on engagement patterns",
            },
          ],
        },
        {
          type: "heading",
          text: "Implementation Roadmap",
        },
        {
          type: "paragraph",
          text: "Start with the highest-impact, lowest-friction automation:",
        },
        {
          type: "roadmap",
          phases: [
            {
              phase: "Week 1",
              focus: "Lead qualification and routing",
              impact: "Immediate time savings, faster response times",
            },
            {
              phase: "Week 3",
              focus: "Email follow-up automation",
              impact: "3-5× more touchpoints without additional work",
            },
            {
              phase: "Week 5",
              focus: "CRM automation and enrichment",
              impact: "Clean data, better insights",
            },
            {
              phase: "Week 7",
              focus: "Pipeline intelligence and forecasting",
              impact: "Proactive deal management",
            },
          ],
        },
        {
          type: "heading",
          text: "The Bottom Line",
        },
        {
          type: "paragraph",
          text: "AI sales automation isn't about replacing salespeople—it's about eliminating everything that prevents them from selling. Companies that deploy AI see 35-40% pipeline growth not because they work harder, but because they work on the right things.",
        },
        {
          type: "cta",
          text: "See how AI can transform your sales process",
          link: "/use-cases/sales",
        },
      ],
    },
    fr: {
      title: "IA pour les équipes de vente : Guide complet",
      subtitle: "Transformez votre processus de vente du prospect à la conclusion",
      date: "2025-01-05",
      readTime: "12 min de lecture",
      author: "Marcus Johnson",
      authorRole: "VP des Ventes, Beway Labs",
      heroImage: "/modern-sales-team-dashboard-with-ai-powered-analy.jpg",
      content: [
        {
          type: "intro",
          text: "Les équipes de vente perdent 64% de leur temps sur des activités non-commerciales. L'automatisation IA change cette équation. Ce guide vous montre exactement comment déployer l'IA dans votre processus de vente - de la qualification des prospects à la conclusion des affaires.",
        },
        {
          type: "heading",
          text: "Le problème du temps de vente",
        },
        {
          type: "paragraph",
          text: "Le représentant commercial moyen passe :",
        },
        {
          type: "stat-grid",
          stats: [
            { value: "21%", label: "À écrire des emails et des suivis" },
            { value: "17%", label: "À saisir des données et mettre à jour le CRM" },
            { value: "12%", label: "À rechercher des prospects" },
            { value: "14%", label: "À planifier et participer à des réunions internes" },
          ],
        },
        {
          type: "paragraph",
          text: "C'est 64% de leur temps sur des activités qui ne concluent pas d'affaires. L'automatisation IA récupère ce temps.",
        },
        {
          type: "heading",
          text: "Où l'IA offre un impact maximum",
        },
        {
          type: "numbered-list",
          items: [
            "Qualification des prospects : L'IA note et achemine les prospects instantanément en fonction de l'adéquation et de l'intention",
            "Automatisation des emails : Suivis personnalisés envoyés aux moments optimaux, sans travail manuel",
            "Planification de réunions : L'IA gère les va-et-vient, trouve les horaires, envoie les confirmations",
            "Hygiène CRM : Saisie et enrichissement automatiques des données maintiennent votre CRM à jour",
            "Insights du pipeline : Alertes en temps réel sur les risques et opportunités d'affaires",
          ],
        },
        {
          type: "heading",
          text: "Implémentation réelle : Qualification des prospects",
        },
        {
          type: "paragraph",
          text: "Soyons précis. Voici comment la qualification des prospects par IA fonctionne en pratique :",
        },
        {
          type: "process-flow",
          steps: [
            {
              title: "Capture de prospect",
              description: "Nouveau prospect provenant du site web, des publicités ou de références",
            },
            {
              title: "Notation IA",
              description:
                "Le système analyse la taille de l'entreprise, l'industrie, la pile technologique, les signaux d'achat",
            },
            {
              title: "Enrichissement automatique",
              description:
                "Extrait les données de l'entreprise, trouve les décideurs, vérifie le statut de financement",
            },
            {
              title: "Routage intelligent",
              description: "Attribue au bon représentant en fonction du territoire, du secteur et de la disponibilité",
            },
            {
              title: "Sensibilisation personnalisée",
              description: "Génère le premier email personnalisé basé sur le contexte de l'entreprise",
            },
          ],
        },
        {
          type: "paragraph",
          text: "Tout ce processus se produit en moins de 2 minutes. Processus manuel : 30-45 minutes par prospect.",
        },
        {
          type: "quote",
          text: "Nous sommes passés de la qualification de 50 prospects par semaine à 400. Même équipe, 8× le volume. Notre taux de conclusion s'est en fait amélioré car les représentants se concentrent sur des conversations qualifiées.",
          author: "Sarah Kim",
          role: "Directrice des Ventes, GrowthTech",
        },
        {
          type: "heading",
          text: "Automatisation d'email qui ne semble pas automatisée",
        },
        {
          type: "paragraph",
          text: "La clé d'une automatisation efficace des emails de vente est la personnalisation à grande échelle. Les envois génériques ne fonctionnent pas. L'IA permet une vraie personnalisation 1-à-1 :",
        },
        {
          type: "list",
          items: [
            "Références spécifiques à l'entreprise : Mentionne le financement récent, les lancements de produits ou l'embauche",
            "Messagerie basée sur le rôle : Pitch différent pour CFO vs CTO vs CEO",
            "Déclencheurs comportementaux : Suivis basés sur les ouvertures d'emails, les clics sur les liens, les visites du site web",
            "Optimisation du timing : Envoie quand le destinataire est le plus susceptible de s'engager",
          ],
        },
        {
          type: "heading",
          text: "Intelligence du pipeline",
        },
        {
          type: "paragraph",
          text: "L'IA n'automatise pas seulement les tâches - elle fournit des insights que les humains manquent :",
        },
        {
          type: "insight-grid",
          insights: [
            {
              title: "Détection du risque d'affaire",
              description: "Signale les affaires qui refroidissent avant que vous ne les perdiez",
            },
            {
              title: "Identification du champion",
              description: "Identifie qui fait vraiment avancer l'affaire",
            },
            {
              title: "Intelligence concurrentielle",
              description: "Révèle quand les prospects évaluent les concurrents",
            },
            {
              title: "Précision des prévisions",
              description: "Prédit la probabilité de conclusion basée sur les modèles d'engagement",
            },
          ],
        },
        {
          type: "heading",
          text: "Feuille de route de mise en œuvre",
        },
        {
          type: "paragraph",
          text: "Commencez par l'automatisation à fort impact et faible friction :",
        },
        {
          type: "roadmap",
          phases: [
            {
              phase: "Semaine 1",
              focus: "Qualification et routage des prospects",
              impact: "Économies de temps immédiates, temps de réponse plus rapides",
            },
            {
              phase: "Semaine 3",
              focus: "Automatisation des suivis par email",
              impact: "3-5× plus de points de contact sans travail supplémentaire",
            },
            {
              phase: "Semaine 5",
              focus: "Automatisation et enrichissement du CRM",
              impact: "Données propres, meilleurs insights",
            },
            {
              phase: "Semaine 7",
              focus: "Intelligence du pipeline et prévisions",
              impact: "Gestion proactive des affaires",
            },
          ],
        },
        {
          type: "heading",
          text: "Le résultat final",
        },
        {
          type: "paragraph",
          text: "L'automatisation IA des ventes ne vise pas à remplacer les vendeurs - il s'agit d'éliminer tout ce qui les empêche de vendre. Les entreprises qui déploient l'IA voient une croissance du pipeline de 35-40% non pas parce qu'elles travaillent plus dur, mais parce qu'elles travaillent sur les bonnes choses.",
        },
        {
          type: "cta",
          text: "Voyez comment l'IA peut transformer votre processus de vente",
          link: "/use-cases/sales",
        },
      ],
    },
  },
}

export default function BlogPostPageClient({ slug }: { slug: string }) {
  const { language, t } = useLanguage()
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [currentUser, setCurrentUser] = useState<{
    name: string
    email?: string
    role?: string
    company?: string
  } | null>(null)
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyText, setReplyText] = useState("")
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Alex Thompson",
      role: "Product Manager",
      avatar: "AT",
      text: "This is exactly what we needed. The ROI breakdown really helps justify the investment to our leadership team.",
      date: "2 days ago",
      likes: 12,
      replies: [] as any[],
    },
    {
      id: 2,
      author: "Maria Garcia",
      role: "Sales Director",
      avatar: "MG",
      text: "We implemented AI for our sales team last quarter. The results match everything mentioned here. Game changer.",
      date: "1 day ago",
      likes: 8,
      replies: [] as any[],
    },
  ])

  const post = blogPosts[slug as keyof typeof blogPosts]
  const content = post?.[language as "en" | "fr"]

  if (!post || !content) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <p className="text-muted-foreground">Blog post not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    const text = content.title

    switch (platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`)
        break
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
      case "copy":
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        break
    }
    setShowShareMenu(false)
  }

  const handleAuth = (userData: { name: string; email: string; role?: string; company?: string }) => {
    setIsAuthenticated(true)
    setCurrentUser({
      name: userData.name,
      email: userData.email,
      role: userData.role,
      company: userData.company,
    })
    setShowAuthModal(false)
  }

  const handleSubmitComment = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true)
      return
    }

    if (!commentText.trim()) return

    const newComment = {
      id: comments.length + 1,
      author: currentUser?.name || "Anonymous",
      role: currentUser?.role || currentUser?.company || "Reader",
      avatar:
        currentUser?.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase() || "A",
      text: commentText,
      date: "Just now",
      likes: 0,
      replies: [],
    }

    setComments([newComment, ...comments])
    setCommentText("")
  }

  const handleSubmitReply = (commentId: number) => {
    if (!isAuthenticated) {
      setShowAuthModal(true)
      return
    }

    if (!replyText.trim()) return

    const newReply = {
      id: Date.now(),
      author: currentUser?.name || "Anonymous",
      role: currentUser?.role || currentUser?.company || "Reader",
      avatar:
        currentUser?.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase() || "A",
      text: replyText,
      date: "Just now",
      likes: 0,
    }

    setComments(
      comments.map((comment) =>
        comment.id === commentId ? { ...comment, replies: [...comment.replies, newReply] } : comment,
      ),
    )

    setReplyText("")
    setReplyingTo(null)
  }

  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case "intro":
        return (
          <p key={index} className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            {item.text}
          </p>
        )

      case "heading":
        return (
          <h2 key={index} className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mt-16 mb-6">
            {item.text}
          </h2>
        )

      case "paragraph":
        return (
          <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
            {item.text}
          </p>
        )

      case "list":
        return (
          <ul key={index} className="space-y-3 my-8">
            {item.items.map((listItem: string, i: number) => (
              <li key={i} className="flex gap-3 text-lg text-muted-foreground">
                <span className="text-accent-neon mt-1.5">•</span>
                <span>{listItem}</span>
              </li>
            ))}
          </ul>
        )

      case "numbered-list":
        return (
          <ol key={index} className="space-y-4 my-8">
            {item.items.map((listItem: string, i: number) => (
              <li key={i} className="flex gap-4 text-lg text-muted-foreground">
                <span className="text-accent-signal font-semibold">{i + 1}.</span>
                <span>{listItem}</span>
              </li>
            ))}
          </ol>
        )

      case "stat-grid":
        return (
          <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            {item.stats.map((stat: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )

      case "quote":
        return (
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="my-12 pl-8 border-l-4 border-accent-signal/30"
          >
            <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-4 italic">"{item.text}"</p>
            <footer className="text-muted-foreground">
              <div className="font-semibold">{item.author}</div>
              <div className="text-sm">{item.role}</div>
            </footer>
          </motion.blockquote>
        )

      case "day-by-day":
        return (
          <div key={index} className="space-y-8 my-12">
            {item.days.map((day: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-accent-signal/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent-signal" />
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-accent-signal">{day.day}</div>
                  <h3 className="text-2xl font-bold text-foreground">{day.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                    <Check className="h-4 w-4" />
                    {day.deliverable}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )

      case "process-flow":
        return (
          <div key={index} className="my-12 space-y-4">
            {item.steps.map((step: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent-signal to-accent-neon flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )

      case "insight-grid":
        return (
          <div key={index} className="grid md:grid-cols-2 gap-6 my-12">
            {item.insights.map((insight: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">{insight.title}</h4>
                <p className="text-muted-foreground">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        )

      case "roadmap":
        return (
          <div key={index} className="space-y-6 my-12">
            {item.phases.map((phase: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm"
              >
                <div className="shrink-0">
                  <div className="text-2xl font-bold gradient-text">{phase.phase}</div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">{phase.focus}</h4>
                  <p className="text-muted-foreground text-sm">{phase.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )

      case "cta":
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-16 text-center"
          >
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            >
              <Link href={item.link}>{item.text}</Link>
            </Button>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuth={handleAuth}
        language={language}
      />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === "fr" ? "Retour au blog" : "Back to blog"}
          </Link>

          {/* Header */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">{content.title}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">{content.subtitle}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(content.date).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {content.readTime}
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="font-medium text-foreground">{content.author}</span>
                  <span>•</span>
                  <span>{content.authorRole}</span>
                </div>
              </div>
            </motion.div>

            {/* Social Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 py-6 border-y border-border"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLiked(!liked)}
                className={`gap-2 ${liked ? "text-red-500" : ""}`}
              >
                <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
                {language === "fr" ? "Aimer" : "Like"}
              </Button>

              <div className="relative">
                <Button variant="ghost" size="sm" onClick={() => setShowShareMenu(!showShareMenu)} className="gap-2">
                  <Share2 className="h-5 w-5" />
                  {language === "fr" ? "Partager" : "Share"}
                </Button>

                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 p-2 rounded-lg border border-border bg-card shadow-lg z-10"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare("twitter")}
                      className="w-full justify-start gap-2"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare("linkedin")}
                      className="w-full justify-start gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare("copy")}
                      className="w-full justify-start gap-2"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
                      {copied
                        ? language === "fr"
                          ? "Copié!"
                          : "Copied!"
                        : language === "fr"
                          ? "Copier le lien"
                          : "Copy link"}
                    </Button>
                  </motion.div>
                )}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setBookmarked(!bookmarked)}
                className={`gap-2 ${bookmarked ? "text-accent-neon" : ""}`}
              >
                <Bookmark className={`h-5 w-5 ${bookmarked ? "fill-current" : ""}`} />
                {language === "fr" ? "Sauvegarder" : "Save"}
              </Button>

              <Button variant="ghost" size="sm" className="gap-2 ml-auto">
                <MessageCircle className="h-5 w-5" />
                <span className="hidden sm:inline">{language === "fr" ? "Commentaires" : "Comments"}</span>
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-card">
              <Image src={content.heroImage || "/placeholder.svg"} alt={content.title} fill className="object-cover" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert"
          >
            {content.content.map((item, index) => renderContent(item, index))}
          </motion.div>

          {/* Comments Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-3xl mx-auto mt-20 pt-12 border-t border-border"
          >
            <div className="space-y-8">
              {/* Comments Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">
                  {language === "fr" ? "Commentaires" : "Comments"} ({comments.length})
                </h2>
                {isAuthenticated && currentUser && (
                  <div className="text-sm text-muted-foreground">
                    {language === "fr" ? "Connecté en tant que" : "Signed in as"} {currentUser.name}
                  </div>
                )}
              </div>

              {/* Add Comment Form */}
              <div className="space-y-4">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder={language === "fr" ? "Partagez vos réflexions..." : "Share your thoughts..."}
                  className="w-full min-h-[120px] p-4 rounded-xl border border-border bg-card/30 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-signal/50 resize-none"
                />
                <div className="flex justify-end">
                  <Button
                    onClick={handleSubmitComment}
                    disabled={!commentText.trim()}
                    className="h-11 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {!isAuthenticated
                      ? language === "fr"
                        ? "Se connecter pour publier"
                        : "Sign in to post"
                      : language === "fr"
                        ? "Publier"
                        : "Post Comment"}
                  </Button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment, index) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <div className="p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm space-y-3">
                      <div className="flex items-start gap-4">
                        {/* Avatar */}
                        <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent-signal to-accent-neon flex items-center justify-center text-white font-semibold text-sm">
                          {comment.avatar}
                        </div>

                        {/* Comment Content */}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{comment.author}</span>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{comment.role}</span>
                            <span className="text-sm text-muted-foreground ml-auto">{comment.date}</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{comment.text}</p>

                          {/* Comment Actions */}
                          <div className="flex items-center gap-4 pt-2">
                            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                              <Heart className="h-4 w-4" />
                              {comment.likes > 0 && <span>{comment.likes}</span>}
                            </button>
                            <button
                              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {language === "fr" ? "Répondre" : "Reply"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {replyingTo === comment.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-14 space-y-3"
                      >
                        <textarea
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder={
                            language === "fr" ? `Répondre à ${comment.author}...` : `Reply to ${comment.author}...`
                          }
                          className="w-full min-h-[100px] p-4 rounded-xl border border-border bg-card/30 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-signal/50 resize-none text-sm"
                          autoFocus
                        />
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setReplyingTo(null)
                              setReplyText("")
                            }}
                          >
                            {language === "fr" ? "Annuler" : "Cancel"}
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleSubmitReply(comment.id)}
                            disabled={!replyText.trim()}
                            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                          >
                            {!isAuthenticated
                              ? language === "fr"
                                ? "Se connecter"
                                : "Sign in"
                              : language === "fr"
                                ? "Répondre"
                                : "Reply"}
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {comment.replies.length > 0 && (
                      <div className="ml-14 space-y-4">
                        {comment.replies.map((reply: any) => (
                          <motion.div
                            key={reply.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 rounded-xl border border-border bg-card/20 backdrop-blur-sm"
                          >
                            <div className="flex items-start gap-3">
                              <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent-neon to-accent-signal flex items-center justify-center text-white font-semibold text-xs">
                                {reply.avatar}
                              </div>
                              <div className="flex-1 space-y-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-foreground text-sm">{reply.author}</span>
                                  <span className="text-xs text-muted-foreground">•</span>
                                  <span className="text-xs text-muted-foreground">{reply.role}</span>
                                  <span className="text-xs text-muted-foreground ml-auto">{reply.date}</span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{reply.text}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
