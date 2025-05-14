"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ChevronLeft, Share2, Bookmark, MessageSquare } from "lucide-react"
import Header from "@/components/header"
import CommentSystem from "@/components/comment-system"
import type { BlogPost } from "@/lib/blog-data"
import { toSafeUrl } from "@/lib/utils-text"

export default function BlogPostPageClient({ post }: { post: BlogPost }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-[#ededed] py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-[#fa1571] mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar para o blog
            </Link>

            <div className="flex items-center mb-4">
              <Link
                href={`/blog/categoria/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-[#fa1571] text-white text-sm font-medium py-1 px-3 rounded-full hover:bg-opacity-90 transition-colors"
              >
                {post.category}
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime} de leitura</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[500px] w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-8">
              {/* Social Sharing Sidebar */}
              <div className="hidden md:block md:col-span-1">
                <div className="sticky top-24 flex flex-col items-center space-y-4">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.excerpt,
                          url: window.location.href,
                        })
                      } else {
                        navigator.clipboard.writeText(window.location.href)
                        alert("Link copiado para a área de transferência!")
                      }
                    }}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#fa1571] transition-colors"
                    aria-label="Compartilhar"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#fa1571] transition-colors"
                    aria-label="Salvar"
                  >
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <a
                    href="#comentarios"
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#fa1571] transition-colors"
                    aria-label="Ir para comentários"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-8">
                <div
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#fa1571] prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${toSafeUrl(tag)}`}
                        className="bg-gray-100 hover:bg-[#fa1571] hover:text-white text-gray-700 text-sm rounded-full px-3 py-1 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={post.author.image || "/placeholder.svg"}
                        alt={post.author.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Sobre {post.author.name}</h3>
                      <p className="text-gray-600 text-sm">{post.author.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div id="comentarios">
                  <CommentSystem postId={post.id} />
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-3">
                <div className="sticky top-24">
                  {/* CTA */}
                  <div className="bg-gradient-to-br from-[#fa1571] to-[#d8a8a1] rounded-xl shadow-lg p-6 text-white mb-8">
                    <h3 className="text-xl font-bold mb-3">Reduza faltas na sua clínica</h3>
                    <p className="text-white/90 mb-4 text-sm">
                      Descubra como a Dama.AI pode ajudar sua clínica a reduzir faltas e otimizar agendamentos.
                    </p>
                    <Link
                      href="/#contato"
                      className="block w-full px-4 py-2 bg-white text-[#fa1571] rounded-lg font-medium hover:bg-opacity-90 transition-colors text-center"
                    >
                      Falar com especialista
                    </Link>
                  </div>

                  {/* Related Posts */}
                  {post.relatedPosts && post.relatedPosts.length > 0 && (
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-xl font-bold mb-6">Artigos relacionados</h3>
                      <div className="space-y-4">
                        {post.relatedPosts.map((relatedPost) => (
                          <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group block">
                            <div className="grid grid-cols-3 gap-3">
                              <div className="col-span-1 relative h-16 rounded-lg overflow-hidden">
                                <Image
                                  src={relatedPost.image || "/placeholder.svg"}
                                  alt={relatedPost.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="col-span-2">
                                <h4 className="text-sm font-medium group-hover:text-[#fa1571] transition-colors line-clamp-2">
                                  {relatedPost.title}
                                </h4>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter */}
        <section className="py-12 bg-[#ededed]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Receba mais conteúdo como este</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Assine nossa newsletter e receba artigos, dicas e novidades sobre automação e IA para clínicas de saúde.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa1571]"
              />
              <button className="px-6 py-3 bg-[#fa1571] text-white rounded-lg hover:bg-opacity-90 transition-colors whitespace-nowrap">
                Assinar
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#fa1571] to-[#d8a8a1]">
                Dama.AI
              </h3>
              <p className="text-sm text-gray-400">
                Assistente de inteligência artificial para clínicas e consultórios de saúde.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-[#fa1571]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#fa1571]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#fa1571]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    Integrações
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#fa1571]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    Termos de Serviço
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Dama.AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
