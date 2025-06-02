import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-1 flex justify-start">
        </div>

        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-dama.ai.png" alt="logo Dama.ai" 
              className="h-10  w-auto object-contain scale-[4.5]"
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-end">
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#planos" className="text-gray-700 hover:text-[#fa1571] transition-colors">
              Planos
            </Link>
            <Link href="/#integrations" className="text-gray-700 hover:text-[#fa1571] transition-colors">
              Integrações
            </Link>
            <Link href="/#planos" className="text-gray-700 hover:text-[#fa1571] transition-colors">
              Contato
            </Link> */}
            {/* <Link href="/blog" className="text-gray-700 hover:text-[#fa1571] transition-colors"> */}
            {/* Blog */}
            {/* </Link> */}
            <Link
              href="/#planos"
              className="px-6 py-2 bg-[#fa1571] text-white rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-[#fa1571]/20"
            >
              Comece Agora
            </Link>
          </nav>
          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
