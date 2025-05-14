"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "A Dama.AI funciona com qualquer clínica?",
    answer: "Sim! A Dama.AI pode ser personalizada para se adaptar a qualquer clínica ou consultório da área da saúde.",
  },
  {
    question: "Preciso de equipe técnica para usar?",
    answer: "Não. A nossa equipe cuida de toda a configuração e integração. Você só precisa acompanhar os resultados.",
  },
  {
    question: "Como funciona a integração com minha agenda?",
    answer: "A Dama.AI se conecta com sua agenda via Google Calendar, n8n, ou sistemas personalizados.",
  },
  {
    question: "Quanto tempo leva para começar a usar?",
    answer: "Em poucos dias após a contratação, sua clínica já pode estar com a automação rodando.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre como a Dama.AI pode transformar seu atendimento
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className={`flex items-center justify-between w-full px-6 py-4 text-left font-medium transition-colors ${
                  openIndex === index 
                    ? "bg-gray-50 text-indigo-600" 
                    : "text-gray-800 hover:bg-gray-50"
                }`}  style={openIndex === index ? { color: '#fa1571' } : {}}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { 
                        opacity: 1, 
                        height: "auto",
                        transition: { 
                          opacity: { duration: 0.2, delay: 0.1 },
                          height: { duration: 0.3 }
                        }
                      },
                      collapsed: { 
                        opacity: 0, 
                        height: 0,
                        transition: { 
                          opacity: { duration: 0.15 },
                          height: { duration: 0.25 }
                        }
                      },
                    }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-6 pt-2 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}