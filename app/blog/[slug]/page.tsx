import BlogPostPageClient from "./client"

export async function generateStaticParams() {
  return [{ slug: "roi-of-ai-automation" }, { slug: "7-day-launch-playbook" }, { slug: "ai-for-sales-teams" }]
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <BlogPostPageClient slug={slug} />
}
