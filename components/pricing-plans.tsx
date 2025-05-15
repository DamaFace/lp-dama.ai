import { Check } from "lucide-react"
import { redirect } from "next/dist/server/api-utils"
import Link from "next/link"

const plans = [
  {
    name: "Mensal",
    price: "R$ 399,90",
    period: "/mês",
    description: "Ideal para clínicas pequenas",
    features: [  
      "Mensagens ilimitadas",
      "Agendamento automático",
      "Lembretes de consulta",
      "Suporte 24/7 dedicado",
      "Números ilimitados",
      "Integrações avançadas",
      "Relatórios personalizados",
      "API exclusiva",
      "Treinamento da equipe",
      "+ 40 funcionalidades",
    ],
    cta: "Escolher Mensal",
    highlighted: false,
    redirect: 'https://pay.kiwify.com.br/RZURqTD'
  },
  {
    name: "Semestral",
    price: "R$ 1.599,90",
    period: "/semestre",
    description: "Perfeito para clínicas em crescimento",
    features: [
      "Mensagens ilimitadas",
      "Agendamento automático",
      "Lembretes de consulta",
      "Suporte 24/7 dedicado",
      "Números ilimitados",
      "Integrações avançadas",
      "Relatórios personalizados",
      "API exclusiva",
      "Treinamento da equipe",
      "+ 40 funcionalidades",
    ],
    cta: "Escolher Semestral",
    highlighted: true,
    redirect: 'https://pay.kiwify.com.br/X60udJN'
  },
  {
    name: "Anual",
    price: "R$ 2.278,80",
    period: "/ano",
    description: "Para redes de clínicas",
    features: [
      "Mensagens ilimitadas",
      "Agendamento automático",
      "Lembretes de consulta",
      "Suporte 24/7 dedicado",
      "Números ilimitados",
      "Integrações avançadas",
      "Relatórios personalizados",
      "API exclusiva",
      "Treinamento da equipe",
      "+ 40 funcionalidades",
    ],
    cta: "Escolher Anual",
    highlighted: false,
    redirect: 'https://pay.kiwify.com.br/30APqv0',
  },
]

export default function PricingPlans() {
  return (
    <section id="planos" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#ededed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos que se adaptam ao seu negócio</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Escolha o plano ideal para as necessidades da sua clínica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "bg-white shadow-2xl shadow-[#fa1571]/10 border-2 border-[#fa1571] scale-105 z-10"
                  : "bg-white shadow-xl hover:shadow-2xl"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-[#fa1571] text-white text-center py-2 font-medium">Mais popular</div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#fa1571] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={plan.redirect}
                  className={`block w-full py-3 rounded-lg text-center font-medium transition-all ${
                  plan.highlighted
                    ? "bg-[#fa1571] text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl hover:shadow-[#fa1571]/20"
                    : "bg-white border-2 border-gray-200 text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
