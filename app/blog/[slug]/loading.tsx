import BlogLoading from "@/components/blog-loading"
import Header from "@/components/header"

export default function PostLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-white to-[#ededed]">
        <BlogLoading message="Carregando artigo..." />
      </main>
    </div>
  )
}
