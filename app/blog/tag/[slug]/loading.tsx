import BlogLoading from "@/components/blog-loading"
import Header from "@/components/header"

export default function TagLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-white to-[#ededed]">
        <BlogLoading message="Carregando artigos desta tag..." />
      </main>
    </div>
  )
}
