"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How long does implementation take?",
      answer:
        "Most workflows launch within 5-7 days. Simple automations can be live in 48 hours. We handle everything from setup to testing.",
    },
    {
      question: "What if I need to cancel?",
      answer:
        "You can cancel anytime. No long-term contracts, no cancellation fees. You'll retain access until the end of your billing period.",
    },
    {
      question: "Do I own the workflows?",
      answer:
        "Yes. All workflows, data, and configurations belong to you. If you ever leave, you take everything with you.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We integrate with all major platforms: Salesforce, HubSpot, Slack, Gmail, Notion, Airtable, and 100+ others. Custom integrations available on Scale plan.",
    },
    {
      question: "How do you measure ROI?",
      answer:
        "We track time saved, tasks automated, and cost reduction. You'll receive monthly reports with clear metrics and ROI calculations.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight">Frequently asked questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-[#1E293B] bg-gradient-to-b from-[#0F172A]/50 to-[#0A0D12]/50 backdrop-blur-sm px-6 data-[state=open]:border-[#5CA9FF]/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
