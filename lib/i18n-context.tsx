"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language } from "@/lib/i18n"

type I18nContextType = {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof translations.en
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")

  useEffect(() => {
    const storedLang = localStorage.getItem("language") as Language
    if (storedLang && (storedLang === "en" || storedLang === "fr")) {
      setLangState(storedLang)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem("language", newLang)
  }

  return <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}

export function useLanguage() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useLanguage must be used within I18nProvider")
  }
  return {
    language: context.lang,
    setLanguage: context.setLang,
    t: context.t,
  }
}
