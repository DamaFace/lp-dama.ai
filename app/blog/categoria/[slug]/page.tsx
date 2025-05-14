import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import SearchForm from "@/components/search-form"
import { getPostsByCategory, categories, blogPosts } from "@/lib/blog-data"
import { normalizeText, compareNormalized, containsNormalized, toSafeUrl } from "@/lib/utils-text"
import { debugCategories } from "@/lib/debug"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug

  // Debug para ajudar a identificar o problema
  debugCategories(categorySlug)

  // Tenta decodificar o slug (para casos de URL-encoded)
  let decodedSlug = categorySlug
  try {
    decodedSlug = decodeURIComponent(categorySlug)
  } catch (e) {
    console.error("Erro ao decodificar slug:", e)
  }

  // Tenta encontrar a categoria exata pelo slug normalizado
  let categoryName = categories.find(
    (cat) => compareNormalized(cat, decodedSlug) || compareNormalized(cat, decodedSlug.replace(/-/g, " ")),
  )

  // Se não encontrar a categoria, tenta uma correspondência parcial
  if (!categoryName) {
    categoryName = categories.find(
      (cat) => containsNormalized(cat, decodedSlug) || containsNormalized(decodedSlug, cat),
    )
  }

  // Se ainda não encontrou, usa o slug formatado como nome
  if (!categoryName) {
    categoryName = decodedSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Busca posts pela categoria
  let posts = []

  // Primeiro tenta buscar pela categoria encontrada
  if (typeof categoryName === "string") {
    posts = getPostsByCategory(categoryName)
  }

  // Se não encontrou posts, tenta buscar pelo slug diretamente
  if (posts.length === 0) {
    posts = getPostsByCategory(decodedSlug)
  }

  // Se ainda não encontrou posts, tenta buscar pelo slug com espaços
  if (posts.length === 0 && decodedSlug.includes("-")) {
    posts = getPostsByCategory(decodedSlug.replace(/-/g, " "))
  }

  // Busca mais flexível: procura em todas as categorias
  if (posts.length === 0) {
    // Tenta encontrar posts que contenham a categoria no título ou conteúdo
    posts = blogPosts.filter((post) => {
      const normalizedSlug = normalizeText(decodedSlug)
      const normalizedCategory = normalizeText(post.category)

      return normalizedCategory.includes(normalizedSlug) || normalizedSlug.includes(normalizedCategory)
    })
  }

  // Se ainda não encontrou posts, retorna 404
  if (posts.length === 0) {
    notFound()
  }

  // Usa a categoria do primeiro post encontrado para exibição
  const displayCategory = typeof categoryName === "string" ? categoryName : posts[0].category

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-[#ededed] py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Link href="/blog" className="text-[#fa1571] hover:underline mb-4 inline-block">
                ← Voltar para o blog
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Categoria: {displayCategory}</h1>
              <p className="text-lg text-gray-700 mb-8">
                Artigos, dicas e novidades sobre {displayCategory.toLowerCase()} para clínicas e consultórios de saúde.
              </p>

              <SearchForm />
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
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
              ))}
            </div>
          </div>
        </section>

        {/* Other Categories */}
        <section className="py-12 bg-[#ededed]">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Outras categorias</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories
                .filter((cat) => !compareNormalized(cat, displayCategory))
                .map((category) => (
                  <Link
                    key={category}
                    href={`/blog/categoria/${toSafeUrl(category)}`}
                    className="bg-white hover:bg-[#fa1571] hover:text-white text-gray-700 text-sm rounded-full px-4 py-2 transition-colors shadow-sm"
                  >
                    {category}
                  </Link>
                ))}
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
export const dynamic = "force-dynamic"