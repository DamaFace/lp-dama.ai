"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    // Se a rota mudar
    if (children !== displayChildren) {
      // Inicia a transição
      setIsTransitioning(true)

      // Depois de 300ms (tempo da animação de saída), atualize o conteúdo
      const timeout = setTimeout(() => {
        setDisplayChildren(children)

        // Reset da transição para animação de entrada
        setIsTransitioning(false)
      }, 300)

      return () => clearTimeout(timeout)
    }
  }, [children, displayChildren])

  return (
    <div className={`page-transition ${isTransitioning ? "transitioning-out" : "transitioning-in"}`}>
      {displayChildren}
    </div>
  )
}
