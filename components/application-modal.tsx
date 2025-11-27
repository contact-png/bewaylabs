"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Linkedin, Github, Mail, User, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n-context"

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
}

export default function ApplicationModal({ isOpen, onClose, jobTitle }: ApplicationModalProps) {
  const { t, lang } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    github: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Application submitted:", { jobTitle, ...formData })
    alert(lang === "fr" ? "Application envoyée avec succès!" : "Application submitted successfully!")
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
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Ambient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent-neon/10 rounded-full blur-3xl opacity-30" />

              {/* Header */}
              <div className="relative border-b border-border bg-background/50 backdrop-blur-xl px-8 py-6">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <h2 className="text-2xl font-semibold text-foreground pr-8">
                  {lang === "fr" ? "Postuler pour" : "Apply for"}
                </h2>
                <p className="text-accent-neon font-medium mt-1">{jobTitle}</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="relative p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    {lang === "fr" ? "Nom complet" : "Full name"} <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder={lang === "fr" ? "Votre nom" : "Your name"}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder={lang === "fr" ? "votre@email.com" : "your@email.com"}
                  />
                </div>

                {/* LinkedIn */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                    LinkedIn {lang === "fr" ? "(optionnel)" : "(optional)"}
                  </label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="linkedin.com/in/yourprofile"
                  />
                </div>

                {/* GitHub */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Github className="h-4 w-4 text-muted-foreground" />
                    GitHub {lang === "fr" ? "(optionnel)" : "(optional)"}
                  </label>
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="github.com/yourusername"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    {lang === "fr" ? "Pourquoi ce poste ?" : "Why this role?"}{" "}
                    {lang === "fr" ? "(optionnel)" : "(optional)"}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder={
                      lang === "fr"
                        ? "Parlez-nous de votre intérêt pour ce rôle..."
                        : "Tell us about your interest in this role..."
                    }
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 border-border hover:bg-secondary bg-transparent"
                  >
                    {lang === "fr" ? "Annuler" : "Cancel"}
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {lang === "fr" ? "Envoyer la candidature" : "Submit application"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-signal to-accent-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  {lang === "fr"
                    ? "Nous examinerons votre candidature et vous contacterons dans les 48 heures."
                    : "We'll review your application and get back to you within 48 hours."}
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
