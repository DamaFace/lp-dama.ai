import type { Metadata } from "next"
import { getPostBySlug } from "@/lib/blog-data"
import BlogPostPageClient from "./BlogPostPageClient"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post não encontrado | Blog Dama.AI",
      description: "O artigo que você está procurando não foi encontrado.",
    }
  }

  return {
    title: `${post.title} | Blog Dama.AI`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://dama.ai/blog/${post.id}`,
      siteName: "Dama.AI",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "pt_BR",
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostPageClient post={post} />
}
