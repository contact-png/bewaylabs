"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"
import { useLanguage } from "@/lib/i18n-context"
import Image from "next/image"

export default function BlogPage() {
  const { t, language } = useLanguage()

  const ctaRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3])

  const posts = [
    {
      slug: "roi-of-ai-automation",
      title: t.blog.post1.title,
      excerpt: t.blog.post1.excerpt,
      date: t.blog.post1.date,
      readTime: t.blog.post1.readTime,
      featured: true,
    },
    {
      slug: "7-day-launch-playbook",
      title: t.blog.post2.title,
      excerpt: t.blog.post2.excerpt,
      date: t.blog.post2.date,
      readTime: t.blog.post2.readTime,
      featured: false,
    },
    {
      slug: "ai-for-sales-teams",
      title: t.blog.post3.title,
      excerpt: t.blog.post3.excerpt,
      date: t.blog.post3.date,
      readTime: t.blog.post3.readTime,
      featured: false,
    },
  ]

  const featuredPost = posts.find((p) => p.featured)
  const regularPosts = posts.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00B4FF]/5 to-transparent dark:via-[#00B4FF]/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20 rounded-full blur-3xl opacity-30 dark:opacity-50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text">{t.blog.title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/80 text-pretty leading-relaxed">
              {t.blog.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {featuredPost && (
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-6xl mx-auto"
            >
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00B4FF]/10 to-[#0047AB]/10 border border-[#00B4FF]/20 text-sm font-medium text-foreground">
                  Featured Article
                </span>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block relative rounded-3xl overflow-hidden border border-border/50 dark:border-border/30 bg-card/30 backdrop-blur-md hover:border-[#00B4FF]/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FF]/5 via-transparent to-[#0047AB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-full min-h-[400px] overflow-hidden">
                    <Image
                      src="/images/hero-ai-network.jpg"
                      alt={featuredPost.title}
                      fill
                      className="object-cover opacity-70 dark:opacity-50 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FF]/20 via-transparent to-[#0047AB]/30 dark:from-[#00B4FF]/30 dark:to-[#0047AB]/40" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 relative">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(featuredPost.date).toLocaleDateString(
                            language === "fr" ? "fr-FR" : "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00B4FF] group-hover:to-[#0047AB] transition-all duration-300 leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-[#00B4FF] font-medium pt-4">
                      <span>Read article</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-foreground mb-12"
            >
              Latest Articles
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              {regularPosts.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full rounded-2xl overflow-hidden border border-border/50 dark:border-border/30 bg-card/30 backdrop-blur-md hover:border-[#00B4FF]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#00B4FF]/5"
                  >
                    {/* Image placeholder */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/images/hero-ai-network.jpg"
                        alt={post.title}
                        fill
                        className="object-cover opacity-60 dark:opacity-40 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00B4FF]/20 to-[#0047AB]/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {new Date(post.date).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground group-hover:text-[#00B4FF] transition-colors duration-300 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center gap-2 text-sm text-[#00B4FF] font-medium pt-2">
                        <span>Read more</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="py-32 md:py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            style={{ scale, opacity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-[#00B4FF]/30 via-[#0047AB]/30 to-[#00B4FF]/30 rounded-full blur-[150px]"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2,
              }}
              className="absolute w-3 h-3 rounded-full bg-[#00B4FF]/40"
              style={{
                left: `${15 + i * 20}%`,
                top: `${25 + i * 15}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-balance">
                <span className="gradient-text">{t.blog.ctaTitle}</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-3xl mx-auto text-balance">
                {t.blog.ctaSubtitle}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                asChild
                size="lg"
                className="h-14 md:h-16 px-10 md:px-14 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-[#00B4FF] to-[#0047AB] hover:shadow-2xl hover:shadow-[#00B4FF]/30 text-white transition-all duration-300 hover:scale-105"
              >
                <Link href="/pricing" className="group">
                  {t.blog.ctaButton}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed pt-6">
              {t.blog.ctaDisclaimer}
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
