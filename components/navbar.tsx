"use client"

import { Moon, Sun, Menu, X, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"
import { useTheme } from "@/lib/theme-provider"
import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/use-cases", label: t.nav.useCases },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
  ]

  const handleNavClick = (href: string) => {
    if (href === "/pricing" && window.location.pathname === "/") {
      const pricingSection = document.getElementById("pricing")
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" })
      } else {
        router.push(href)
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
      router.push(href)
    }
    setMobileOpen(false)
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-full border border-border/30 dark:border-border/50 bg-background/85 dark:bg-background/40 backdrop-blur-premium px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between shadow-lg dark:shadow-[0_8px_32px_rgba(0,180,255,0.08)] transition-all duration-300 hover:border-border/50 dark:hover:border-[#00B4FF]/20">
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2 sm:gap-3 transition-opacity duration-300 hover:opacity-80 cursor-pointer bg-transparent border-0 p-0"
          >
            <Image
              src="/images/reacdre-20sans-20background.png"
              alt="Beway Labs"
              width={40}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
            <span className="text-base sm:text-lg font-semibold tracking-tight hidden sm:inline gradient-text">
              Beway Labs
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group bg-transparent border-0 p-0 cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="text-muted-foreground hover:text-foreground rounded-full h-8 sm:h-9 gap-1.5 transition-all duration-300"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold hidden sm:inline">{lang.toUpperCase()}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground rounded-full h-8 sm:h-9 w-8 sm:w-9 transition-all duration-300"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button
              asChild
              size="sm"
              className="hidden sm:flex rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 text-white h-8 sm:h-9 px-4 sm:px-5 font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] hover:scale-105"
            >
              <Link href="/start" scroll={true}>
                {t.nav.getStarted}
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-muted-foreground h-8 w-8 transition-all duration-300"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-3 rounded-3xl border border-border/30 dark:border-border/20 bg-background/95 dark:bg-background/50 backdrop-blur-premium shadow-2xl"
        >
          <nav className="px-6 py-6 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 py-2 text-left bg-transparent border-0 p-0 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Button
              asChild
              className="w-full mt-2 bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,180,255,0.4)]"
            >
              <Link href="/start" scroll={true}>
                {t.nav.getStarted}
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
