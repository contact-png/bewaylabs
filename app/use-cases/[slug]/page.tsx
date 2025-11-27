import UseCasePageClient from "./use-case-page-client"

export async function generateStaticParams() {
  return [
    { slug: "sales" },
    { slug: "support" },
    { slug: "finance" },
    { slug: "ops" },
    { slug: "hr" },
    { slug: "marketing" },
  ]
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <UseCasePageClient slug={slug} />
}
