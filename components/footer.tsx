"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n-context"

export function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 py-20 px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-16 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/reacdre-20sans-20background.png"
                alt="Beway Labs"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="gradient-text text-xl font-semibold">Beway Labs</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">{t.footer.product}</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="/use-cases" className="hover:text-foreground transition-colors">
                  {t.nav.useCases}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  {t.nav.pricing}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">{t.footer.company}</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  {t.footer.careers}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">{t.footer.legal}</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-foreground transition-colors">
                  {t.footer.security}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider">{t.footer.resources}</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="/documentation" className="hover:text-foreground transition-colors">
                  {t.footer.documentation}
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="hover:text-foreground transition-colors">
                  {t.footer.helpCenter}
                </Link>
              </li>
              <li>
                <Link href="/api-reference" className="hover:text-foreground transition-colors">
                  {t.footer.apiReference}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>{t.footer.copyright}</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
