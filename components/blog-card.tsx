import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ChevronRight } from "lucide-react"

interface BlogCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    date: string
    readTime: string
    image: string
    category: string
  }
  variant?: "horizontal" | "vertical"
}

export default function BlogCard({ post, variant = "horizontal" }: BlogCardProps) {
  if (variant === "vertical") {
    return (
      <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="relative h-48">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          <div className="absolute top-4 left-4 bg-[#fa1571] text-white text-xs font-medium py-1 px-2 rounded-full">
            {post.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime} de leitura</span>
            </div>
            <Link
              href={`/blog/${post.id}`}
              className="text-[#fa1571] text-sm font-medium flex items-center hover:underline"
            >
              Ler mais <ChevronRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2 relative h-48 md:h-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          <div className="absolute top-4 left-4 bg-[#fa1571] text-white text-xs font-medium py-1 px-2 rounded-full">
            {post.category}
          </div>
        </div>
        <div className="md:col-span-3 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-3">{post.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime} de leitura</span>
            </div>
            <Link
              href={`/blog/${post.id}`}
              className="text-[#fa1571] text-sm font-medium flex items-center hover:underline"
            >
              Ler mais <ChevronRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
