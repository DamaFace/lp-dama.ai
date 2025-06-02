import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dama.AI - Assistente de IA para Clínicas e Consultórios",
  description:
    "A Dama.AI automatiza conversas, agenda consultas e melhora o atendimento da sua equipe — tudo com um toque humano.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/LOGO-DAMAFACE-HORIZONTAL.png" />
      </Head>
      <body className={inter.className}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
