"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Sua clínica atendendo 24h com inteligência",
    subtitle:
      "A Dama.AI automatiza conversas, agenda consultas e melhora o atendimento da sua equipe — tudo com um toque humano.",
    image: "/placeholder.svg?height=500&width=500",
    alt: "Dama.AI em ação",
  },
  {
    id: 2,
    title: "Reduza faltas e aumente agendamentos",
    subtitle:
      "Lembretes automáticos e confirmações reduzem em até 40% as faltas às consultas e aumentam a ocupação da sua agenda.",
    image: "/placeholder.svg?height=500&width=500",
    alt: "Dashboard de agendamentos",
  },
  {
    id: 3,
    title: "Integração com os principais sistemas",
    subtitle: "Conecte a Dama.AI com seu sistema de gestão, CRM, agenda e outras ferramentas que você já utiliza.",
    image: "/placeholder.svg?height=500&width=500",
    alt: "Integrações Dama.AI",
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  return (
    <div id="hero" className="relative h-[500px] md:h-[600px] w-full overflow-hidden bg-gradient-to-br from-[#000000]/5 to-[#fa1571]/10">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-12 items-center h-full py-12">
              <div className="space-y-6 md:space-y-8 z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{slide.title}</h1>
                <p className="text-lg md:text-xl text-gray-700">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#planos"
                    className="px-8 py-3 bg-[#fa1571] text-white rounded-full text-center hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-[#fa1571]/20 font-medium"
                  >
                    Comece Agora
                  </Link>
                  <Link
                    href="#como-funciona"
                    className="px-8 py-3 bg-white text-gray-800 border border-gray-200 rounded-full text-center hover:bg-gray-50 transition-all font-medium"
                  >
                    Saiba mais
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#000000]/10 to-[#fa1571]/10 z-10 rounded-2xl"></div>
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                {index === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 z-20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#fa1571] flex items-center justify-center text-white">
                        D
                      </div>
                      <div>
                        <p className="font-medium">Dama.AI</p>
                        <p className="text-sm text-gray-600">
                          Olá! Como posso ajudar com o agendamento da sua consulta hoje?
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-[#fa1571] w-6" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg z-20 hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg z-20 hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  )
}
