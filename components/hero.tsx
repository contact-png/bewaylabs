"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"
import Link from "next/link"

function useRotatingTypewriter(texts: string[], typingSpeed = 40, pauseDuration = 3000, deletingSpeed = 25) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const currentText = texts[currentIndex]

    if (isTyping) {
      // Typing phase
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, pause before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false)
          setOpacity(0.3) // Start fade out
        }, pauseDuration)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next text
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
        setOpacity(1) // Fade in for next text
      }
    }
  }, [displayText, currentIndex, isTyping, texts, typingSpeed, pauseDuration, deletingSpeed])

  return { displayText, isTyping, opacity }
}

export function Hero() {
  const { t } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const taglines = [t.hero.description, t.hero.subTagline]
  const { displayText: rotatingTagline, isTyping, opacity: textOpacity } = useRotatingTypewriter(taglines, 40, 3500, 25)

  const partners = ["OpenAI", "Google", "Figma", "Linear", "AWS", "Stripe", "Notion", "Zapier", "Make", "n8n"]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-0 dark:opacity-30"
          style={{
            backgroundImage: "url(/images/hero-ai-network.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(0.5px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90 dark:from-[#0A1628]/80 dark:via-[#0A1628]/60 dark:to-[#0A1628]/90" />
      </div>

      <div className="absolute inset-0 bg-[url('/modern-office-workspace-blurred.jpg')] bg-cover bg-center opacity-10 dark:opacity-0 mix-blend-soft-light -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity, y }}
          className="space-y-12 text-center"
        >
          <div className="space-y-6 pt-8">
            <h1 className="text-[clamp(2rem,7vw,2.5rem)] sm:text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-tight leading-[0.98] gradient-text">
              {t.hero.title}
            </h1>

            <div className="min-h-[5rem] flex items-center justify-center">
              <motion.p
                className="text-[clamp(1.25rem,3.5vw,1.75rem)] font-light tracking-tight text-foreground/90"
                animate={{ opacity: textOpacity }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <span className="inline-block">
                  {rotatingTagline}
                  {isTyping && rotatingTagline.length > 0 && (
                    <motion.span
                      className="inline-block w-[3px] h-[1.4em] ml-1 bg-gradient-to-b from-[#00B4FF] to-[#0047AB]"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                  )}
                </span>
              </motion.p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground/80 font-medium">{t.hero.noSetupFees}</p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-12 text-base font-medium rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 text-white shadow-2xl shadow-[#00B4FF]/30 dark:shadow-[#00B4FF]/40 hover:shadow-[#00B4FF]/50 dark:hover:shadow-[#00B4FF]/60 border-0 transition-all duration-300 hover:scale-105"
              >
                <Link href="/start">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2.5 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-12 text-base font-medium rounded-full border-2 border-[#00B4FF]/40 dark:border-[#00B4FF]/60 hover:border-[#00B4FF] dark:hover:border-[#00B4FF] bg-background/50 dark:bg-background/30 backdrop-blur-sm hover:bg-[#00B4FF]/10 dark:hover:bg-[#00B4FF]/20 shadow-lg hover:shadow-xl hover:shadow-[#00B4FF]/20 dark:hover:shadow-[#00B4FF]/30 transition-all duration-300 hover:scale-105"
              >
                <Link href="https://calendly.com/contact-bewaylabs" target="_blank" rel="noopener noreferrer">
                  {t.hero.ctaSecondary}
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-3 space-y-6"
          >
            <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground/40 font-light">
              {t.proof.partnering}
            </div>

            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background dark:from-[#0A1628] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background dark:from-[#0A1628] to-transparent z-10 pointer-events-none" />

              <motion.div
                animate={{
                  x: [0, -1400],
                }}
                transition={{
                  x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                className="flex gap-12 md:gap-16"
              >
                {[...partners, ...partners].map((partner, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 text-lg md:text-xl font-medium tracking-tight text-muted-foreground/30 dark:text-muted-foreground/25 hover:text-muted-foreground/50 dark:hover:text-muted-foreground/40 transition-colors duration-500 whitespace-nowrap"
                  >
                    {partner}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
