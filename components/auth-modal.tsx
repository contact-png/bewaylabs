"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onAuth: (userData: { name: string; email: string; role?: string; company?: string }) => void
  language: "en" | "fr"
}

export default function AuthModal({ isOpen, onClose, onAuth, language }: AuthModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [company, setCompany] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    onAuth({
      name: name.trim(),
      email: email.trim(),
      role: role.trim() || undefined,
      company: company.trim() || undefined,
    })

    // Reset form
    setName("")
    setEmail("")
    setRole("")
    setCompany("")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-signal/10 via-transparent to-accent-neon/10 pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors z-10"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>

              {/* Content */}
              <div className="relative p-8 space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-foreground">
                    {language === "fr" ? "Connectez-vous pour commenter" : "Sign in to comment"}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {language === "fr"
                      ? "Partagez votre perspective avec la communauté"
                      : "Share your perspective with the community"}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name - Required */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      {language === "fr" ? "Nom" : "Name"} <span className="text-accent-signal">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder={language === "fr" ? "Votre nom complet" : "Your full name"}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-signal/50 transition-all"
                    />
                  </div>

                  {/* Email - Required */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      {language === "fr" ? "Email" : "Email"} <span className="text-accent-signal">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder={language === "fr" ? "votre@email.com" : "your@email.com"}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-signal/50 transition-all"
                    />
                    <p className="text-xs text-muted-foreground">
                      {language === "fr"
                        ? "Votre email ne sera pas affiché publiquement"
                        : "Your email will not be displayed publicly"}
                    </p>
                  </div>

                  {/* Role - Optional */}
                  <div className="space-y-2">
                    <label htmlFor="role" className="text-sm font-medium text-muted-foreground">
                      {language === "fr" ? "Rôle" : "Role"} <span className="text-xs">(optionnel)</span>
                    </label>
                    <input
                      id="role"
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder={language === "fr" ? "Ex: Product Manager" : "Ex: Product Manager"}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-signal/50 transition-all"
                    />
                  </div>

                  {/* Company - Optional */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-muted-foreground">
                      {language === "fr" ? "Entreprise" : "Company"} <span className="text-xs">(optionnel)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={language === "fr" ? "Ex: Beway Labs" : "Ex: Beway Labs"}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-signal/50 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={!name.trim() || !email.trim()}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {language === "fr" ? "Continuer" : "Continue"}
                  </Button>
                </form>

                {/* Privacy notice */}
                <p className="text-xs text-center text-muted-foreground">
                  {language === "fr"
                    ? "En continuant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité."
                    : "By continuing, you agree to our terms of service and privacy policy."}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
