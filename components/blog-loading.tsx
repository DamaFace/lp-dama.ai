interface BlogLoadingProps {
  message?: string
}

export default function BlogLoading({ message = "Carregando conteúdo..." }: BlogLoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-[#fa1571]/20 border-t-[#fa1571] animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 rounded-full bg-white"></div>
        </div>
      </div>
      <p className="mt-6 text-lg text-gray-600 animate-pulse">{message}</p>
    </div>
  )
}
