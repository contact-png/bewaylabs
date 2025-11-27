"use client"
import { ArrowLeft, Calendar, Clock, Heart, Share2, Bookmark, Twitter, Linkedin, Link2, Check } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n-context"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import AuthModal from "@/components/auth-modal"

interface BlogPost {
  title: string
  subtitle: string
  date: string
  readTime: string
  author: string
  authorRole: string
  heroImage: string
  content: string[]
}

interface BlogPostsData {
  [key: string]: {
    en?: BlogPost
    fr?: BlogPost
  }
}

export default function BlogPostClientPage({ slug, post }: { slug: string; post: BlogPostsData[keyof BlogPostsData] }) {
  const { language } = useLanguage()
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [currentUser, setCurrentUser] = useState<{
    name: string
    provider: "google" | "linkedin"
  } | null>(null)
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyText, setReplyText] = useState("")
  const [comments, setComments] = useState([])

  const content = post?.[language as "en" | "fr"]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="flex items-center text-blue-500 hover:text-blue-600">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        {content && (
          <div>
            <h1 className="text-4xl font-bold mt-4">{content.title}</h1>
            <h2 className="text-xl font-semibold mt-2">{content.subtitle}</h2>
            <div className="flex items-center mt-4">
              <Calendar className="w-4 h-4 mr-2 text-gray-500" />
              <span className="text-gray-500">{content.date}</span>
              <Clock className="w-4 h-4 ml-4 mr-2 text-gray-500" />
              <span className="text-gray-500">{content.readTime}</span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-gray-500">{content.author}</span>
              <span className="text-gray-500 ml-2">{content.authorRole}</span>
            </div>
            <div className="mt-8">
              <Image src={content.heroImage || "/placeholder.svg"} alt={content.title} width={800} height={400} />
            </div>
            <div className="mt-8">
              {content.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex items-center mt-8">
              <Button onClick={() => setLiked(!liked)} className="mr-4">
                {liked ? <Heart className="w-4 h-4 text-red-500" /> : <Heart className="w-4 h-4" />}
                Like
              </Button>
              <Button onClick={() => setBookmarked(!bookmarked)} className="mr-4">
                {bookmarked ? <Check className="w-4 h-4 text-green-500" /> : <Bookmark className="w-4 h-4" />}
                Bookmark
              </Button>
              <Button onClick={() => setShowShareMenu(!showShareMenu)} className="mr-4">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              {showShareMenu && (
                <div className="flex items-center">
                  <Button
                    onClick={() => {
                      /* Share logic */
                    }}
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button
                    onClick={() => {
                      /* Share logic */
                    }}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    onClick={() => {
                      /* Share logic */
                    }}
                  >
                    <Link2 className="w-4 h-4 mr-2" />
                    Link
                  </Button>
                </div>
              )}
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold">Comments</h3>
              <div className="mt-4">
                {comments.map((comment, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">{comment.author}</span>
                      <Button onClick={() => setReplyingTo(index)} className="text-sm">
                        Reply
                      </Button>
                    </div>
                    <p className="text-gray-700 mt-2">{comment.text}</p>
                    {replyingTo === index && (
                      <div className="mt-4">
                        <textarea
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          className="w-full p-2 border rounded-lg"
                        />
                        <Button
                          onClick={() => {
                            /* Reply logic */
                          }}
                          className="mt-2"
                        >
                          Submit Reply
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
                <Button
                  onClick={() => {
                    /* Comment logic */
                  }}
                  className="mt-2"
                >
                  Submit Comment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </motion.div>
  )
}
