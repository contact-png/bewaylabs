import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/lib/i18n-context"
import { ThemeProvider } from "@/lib/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "Beway Labs — AI That Delivers Results",
    template: "%s | Beway Labs",
  },
  description:
    "Your business. Automated. Measurable impact in 7 days. We build, deploy, and operate AI workflows that deliver real ROI. No upfront cost. You own everything.",
  keywords: [
    "AI automation",
    "managed AI workflows",
    "business automation",
    "AI operations",
    "ROI-driven AI",
    "AI agents",
    "workflow automation",
    "7-day deployment",
    "AI consulting",
    "enterprise AI",
  ],
  authors: [{ name: "Beway Labs", url: "https://bewaylabs.com" }],
  creator: "Beway Labs",
  publisher: "Beway Labs",
  openGraph: {
    title: "Beway Labs — AI That Delivers Results",
    description: "Your business. Automated. Measurable impact in 7 days.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    siteName: "Beway Labs",
    images: [
      {
        url: "/images/reacdre-20sans-20background.png",
        width: 1200,
        height: 630,
        alt: "Beway Labs - AI Workflows That Deliver Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beway Labs — AI That Delivers Results",
    description: "Your business. Automated. Measurable impact in 7 days.",
    creator: "@bewaylabs",
    images: ["/images/reacdre-20sans-20background.png"],
  },
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/favicon.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bewaylabs.com",
    languages: {
      en: "https://bewaylabs.com",
      fr: "https://bewaylabs.com/fr",
    },
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141417" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <ScrollToTop />
            {children}
            <Footer />
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
