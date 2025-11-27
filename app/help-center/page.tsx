"use client"

import { useState } from "react"
import Link from "next/link"
import {
  HelpCircle,
  Search,
  MessageCircle,
  BookOpen,
  Video,
  Mail,
  ChevronRight,
  Clock,
  CheckCircle,
} from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export default function HelpCenterPage() {
  const { t } = useI18n()
  const [searchQuery, setSearchQuery] = useState("")

  const faqs = [
    {
      question: t.helpCenter?.faq?.questions?.q1,
      answer: t.helpCenter?.faq?.questions?.a1,
    },
    {
      question: t.helpCenter?.faq?.questions?.q2,
      answer: t.helpCenter?.faq?.questions?.a2,
    },
    {
      question: t.helpCenter?.faq?.questions?.q3,
      answer: t.helpCenter?.faq?.questions?.a3,
    },
    {
      question: t.helpCenter?.faq?.questions?.q4,
      answer: t.helpCenter?.faq?.questions?.a4,
    },
  ]

  const supportChannels = [
    {
      icon: MessageCircle,
      title: t.helpCenter?.channels?.liveChat?.title,
      description: t.helpCenter?.channels?.liveChat?.description,
      availability: t.helpCenter?.channels?.liveChat?.availability,
      cta: t.helpCenter?.channels?.liveChat?.cta,
      href: "#chat",
    },
    {
      icon: Mail,
      title: t.helpCenter?.channels?.email?.title,
      description: t.helpCenter?.channels?.email?.description,
      availability: t.helpCenter?.channels?.email?.availability,
      cta: t.helpCenter?.channels?.email?.cta,
      href: "/contact",
    },
    {
      icon: BookOpen,
      title: t.footer.documentation,
      description: t.helpCenter?.channels?.documentation?.description,
      availability: t.helpCenter?.channels?.documentation?.availability,
      cta: t.helpCenter?.channels?.documentation?.cta,
      href: "/documentation",
    },
    {
      icon: Video,
      title: t.helpCenter?.channels?.videos?.title,
      description: t.helpCenter?.channels?.videos?.description,
      availability: t.helpCenter?.channels?.videos?.availability,
      cta: t.helpCenter?.channels?.videos?.cta,
      href: "#videos",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t.footer.helpCenter}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-[#00B4FF] to-[#0047AB] bg-clip-text text-transparent">
              {t.helpCenter?.title}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.helpCenter?.subtitle}</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.helpCenter?.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">{t.helpCenter?.getSupport}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, idx) => (
            <Link
              key={idx}
              href={channel.href}
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,180,255,0.1)]"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#00B4FF]/10 to-[#0047AB]/10 w-fit mb-4">
                <channel.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {channel.availability}
                </span>
                <span className="text-sm text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  {channel.cta}
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">{t.helpCenter?.faq?.title}</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00B4FF]/10 via-[#0047AB]/10 to-transparent border border-border/50 p-12 text-center">
          <div className="relative z-10 max-w-2xl mx-auto">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.helpCenter?.cta?.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t.helpCenter?.cta?.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00B4FF] to-[#0047AB] text-white hover:opacity-90 transition-opacity font-medium text-lg"
              >
                {t.helpCenter?.cta?.contactSupport}
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors font-medium text-lg"
              >
                {t.helpCenter?.cta?.scheduleCall}
              </Link>
            </div>
          </div>

          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20 blur-3xl" />
        </div>
      </div>
    </div>
  )
}
