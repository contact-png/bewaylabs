"use client"

import { motion } from "framer-motion"
import { Calendar, Mail, Globe, ArrowRight, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n-context"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)
  const [isEmailOpen, setIsEmailOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    industry: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const offices = [
    {
      city: "Dubai",
      country: language === "en" ? "UAE" : "EAU",
      flag: "🇦🇪",
      timezone: "GMT+4",
    },
    {
      city: "Paris",
      country: "France",
      flag: "🇫🇷",
      timezone: "GMT+1",
    },
    {
      city: "Chennai",
      country: language === "en" ? "India" : "Inde",
      flag: "🇮🇳",
      timezone: "GMT+5:30",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-signal/10 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-[clamp(40px,6vw,80px)] font-semibold tracking-tight leading-[0.98]">
              <span className="gradient-text">{t.contact.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {/* Schedule a Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => setIsScheduleOpen(true)}
            >
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 space-y-6 hover:border-accent-signal/50 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-accent-signal/10">
                <div className="h-16 w-16 rounded-xl bg-accent-signal/10 border border-accent-signal/20 flex items-center justify-center group-hover:bg-accent-signal/20 transition-colors duration-300">
                  <Calendar className="h-8 w-8 text-accent-signal" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent-signal transition-colors duration-300">
                    {language === "en" ? "Schedule a call" : "Planifier un appel"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "Book a 30-minute call to discuss your automation needs and see what's possible in 7 days."
                      : "Réservez un appel de 30 minutes pour discuter de vos besoins d'automatisation et voir ce qui est possible en 7 jours."}
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-accent-signal font-medium">
                  <span>{language === "en" ? "Book now" : "Réserver maintenant"}</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group cursor-pointer"
              onClick={() => setIsEmailOpen(true)}
            >
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 space-y-6 hover:border-accent-neon/50 transition-all duration-300 h-full group-hover:shadow-lg group-hover:shadow-accent-neon/10">
                <div className="h-16 w-16 rounded-xl bg-accent-neon/10 border border-accent-neon/20 flex items-center justify-center group-hover:bg-accent-neon/20 transition-colors duration-300">
                  <Mail className="h-8 w-8 text-accent-neon" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent-neon transition-colors duration-300">
                    {t.contact.emailTitle}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{t.contact.emailDesc}</p>
                </div>
                <div className="pt-4">
                  <span className="text-accent-neon font-mono text-lg">contact@bewaylabs.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Global Offices Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-signal/10 border border-accent-signal/20">
                <Globe className="h-4 w-4 text-accent-signal" />
                <span className="text-sm font-medium text-accent-signal">
                  {language === "en" ? "Global presence" : "Présence mondiale"}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="gradient-text">{language === "en" ? "Where we are" : "Où nous sommes"}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === "en"
                  ? "Operating globally with teams across three continents to serve you better."
                  : "Opérant mondialement avec des équipes sur trois continents pour mieux vous servir."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {offices.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="rounded-2xl border border-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-6 space-y-4 hover:border-primary/30 transition-all duration-300 h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-signal/5 to-accent-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl" role="img" aria-label={office.country}>
                          {office.flag}
                        </span>
                        <div>
                          <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent-signal transition-colors duration-300">
                            {office.city}
                          </h3>
                          <p className="text-sm text-muted-foreground">{office.country}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-accent-neon animate-pulse" />
                        <span className="font-mono">{office.timezone}</span>
                      </div>

                      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-accent-signal/10 to-accent-neon/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-signal/10 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-0.02em] leading-[0.98] text-balance text-foreground">
              {t.contact.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
              {t.contact.ctaSubtitle}
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 text-white font-medium shadow-lg shadow-[#00B4FF]/20 px-8 py-6 text-lg transition-all duration-300 group overflow-hidden hover:shadow-[0_0_30px_rgba(0,180,255,0.4)] hover:scale-105"
              >
                <Link href="/pricing">
                  <span className="relative z-10 flex items-center gap-2">
                    {t.contact.ctaButton}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto leading-relaxed">
              {t.contact.ctaDisclaimer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Modal */}
      <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setIsScheduleOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold gradient-text pr-8">
              {language === "en" ? "Schedule a call" : "Planifier un appel"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 pt-4">
            <p className="text-muted-foreground">
              {language === "en"
                ? "Click the button below to open our Calendly booking page and schedule your 30-minute consultation."
                : "Cliquez sur le bouton ci-dessous pour ouvrir notre page de réservation Calendly et planifier votre consultation de 30 minutes."}
            </p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-all duration-300"
              size="lg"
            >
              <a href="https://calendly.com/contact-bewaylabs" target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5 mr-2" />
                {language === "en" ? "Open Calendly" : "Ouvrir Calendly"}
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Email Modal */}
      <Dialog
        open={isEmailOpen}
        onOpenChange={(open) => {
          setIsEmailOpen(open)
          if (!open) {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              company: "",
              projectType: "",
              industry: "",
              message: "",
            })
          }
        }}
      >
        <DialogContent className="sm:max-w-2xl bg-card border-border max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => {
              setIsEmailOpen(false)
              setIsSubmitted(false)
            }}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold gradient-text pr-8">
              {language === "en" ? "Let's discuss your project" : "Discutons de votre projet"}
            </DialogTitle>
          </DialogHeader>

          {isSubmitted ? (
            <div className="space-y-6 py-8 text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-accent-neon/10 border border-accent-neon/20 flex items-center justify-center">
                <Mail className="h-8 w-8 text-accent-neon" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {language === "en" ? "Message sent!" : "Message envoyé !"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "We'll review your request and get back to you within 24 hours."
                    : "Nous examinerons votre demande et vous répondrons dans les 24 heures."}
                </p>
              </div>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setIsEmailOpen(false)
                }}
                variant="outline"
              >
                {language === "en" ? "Close" : "Fermer"}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setIsSubmitted(true)
              }}
              className="space-y-6 pt-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    {language === "en" ? "Name" : "Nom"} <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === "en" ? "John Doe" : "Jean Dupont"}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    {language === "en" ? "Email" : "Email"} <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={language === "en" ? "john@company.com" : "jean@entreprise.com"}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  {language === "en" ? "Company" : "Entreprise"}
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={language === "en" ? "Your company name" : "Nom de votre entreprise"}
                  className="bg-background border-border"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium text-foreground">
                    {language === "en" ? "What do you want to automate?" : "Que voulez-vous automatiser ?"}
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground"
                  >
                    <option value="">{language === "en" ? "Select an option" : "Sélectionnez une option"}</option>
                    <option value="sales">{language === "en" ? "Sales workflows" : "Workflows de vente"}</option>
                    <option value="support">{language === "en" ? "Customer support" : "Support client"}</option>
                    <option value="finance">
                      {language === "en" ? "Finance & invoicing" : "Finance et facturation"}
                    </option>
                    <option value="ops">{language === "en" ? "Operations" : "Opérations"}</option>
                    <option value="hr">{language === "en" ? "HR & recruiting" : "RH et recrutement"}</option>
                    <option value="marketing">{language === "en" ? "Marketing" : "Marketing"}</option>
                    <option value="other">{language === "en" ? "Other / Multiple" : "Autre / Multiple"}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="industry" className="text-sm font-medium text-foreground">
                    {language === "en" ? "Your industry" : "Votre secteur"}
                  </label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground"
                  >
                    <option value="">{language === "en" ? "Select an industry" : "Sélectionnez un secteur"}</option>
                    <option value="tech">{language === "en" ? "Technology & SaaS" : "Technologie & SaaS"}</option>
                    <option value="finance">{language === "en" ? "Finance & Banking" : "Finance & Banque"}</option>
                    <option value="healthcare">{language === "en" ? "Healthcare" : "Santé"}</option>
                    <option value="retail">{language === "en" ? "Retail & E-commerce" : "Vente & E-commerce"}</option>
                    <option value="manufacturing">{language === "en" ? "Manufacturing" : "Fabrication"}</option>
                    <option value="realestate">{language === "en" ? "Real Estate" : "Immobilier"}</option>
                    <option value="consulting">{language === "en" ? "Consulting" : "Conseil"}</option>
                    <option value="education">{language === "en" ? "Education" : "Éducation"}</option>
                    <option value="other">{language === "en" ? "Other" : "Autre"}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  {language === "en" ? "Tell us about your needs" : "Parlez-nous de vos besoins"}{" "}
                  <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    language === "en"
                      ? "What challenges are you facing? What would you like to automate?"
                      : "Quels défis rencontrez-vous ? Que souhaitez-vous automatiser ?"
                  }
                  rows={4}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:from-[#00B4FF]/90 hover:to-[#0047AB]/90 text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-all duration-300"
                size="lg"
              >
                <Mail className="h-5 w-5 mr-2" />
                {language === "en" ? "Send message" : "Envoyer le message"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {language === "en"
                  ? "We typically respond within 24 hours • Your information is kept confidential"
                  : "Nous répondons généralement dans les 24 heures • Vos informations restent confidentielles"}
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
