"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TrustBar() {
  const logos = [
    { name: "AWS", src: "/media/logos/aws.svg" },
    { name: "OpenAI", src: "/media/logos/openai.svg" },
    { name: "Mistral", src: "/media/logos/mistral.svg" },
    { name: "Slack", src: "/media/logos/slack.svg" },
    { name: "HubSpot", src: "/media/logos/hubspot.svg" },
  ]

  return (
    <section className="py-16 border-y border-[#1E293B]/40 bg-[#0F172A]/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider">Powered by industry leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60">
            {logos.map((logo) => (
              <div key={logo.name} className="h-8 flex items-center grayscale hover:grayscale-0 transition-all">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
