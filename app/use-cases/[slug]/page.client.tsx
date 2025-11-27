"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { useLanguage } from "@/lib/i18n-context"
import { GradientText } from "@/components/gradient-text"

const useCaseData = {
  sales: {
    title: "Sales Automation",
  },
  support: {
    title: "Customer Support Enhancement",
  },
  finance: {
    title: "Financial Insights",
  },
  ops: {
    title: "Operations Optimization",
  },
  hr: {
    title: "Human Resources Management",
  },
  marketing: {
    title: "Marketing Campaign Success",
  },
}

export default function UseCaseDetailPageClient({ slug }: { slug: string }) {
  const { language, t } = useLanguage()
  const ctaRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3])

  const data = useCaseData[slug as keyof typeof useCaseData]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        ref={ctaRef}
        style={{ scale, opacity }}
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <GradientText>{data.title}</GradientText>
        <div className="mt-4">
          <Button asChild>
            <Link href="/contact">
              {t("use-case-detail-page.cta-button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8">
          <Button variant="outline" asChild>
            <Link href="/use-cases">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("use-case-detail-page.back-button")}
            </Link>
          </Button>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}
