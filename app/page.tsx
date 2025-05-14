import Link from "next/link"
import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import PricingPlans from "@/components/pricing-plans"
import Integrations from "@/components/integrations"
import DemoVideo from "@/components/vsl-demovideo"
import ContactForm from "@/components/contact-form"
import FAQ from "@/components/faq"
import { MessageSquare, Calendar, Users, BarChart3, Clock, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Carousel */}
        <HeroCarousel />

        {/* Como Funciona */}
        <section id="como-funciona" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como a Dama.AI funciona</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Automatize o atendimento da sua clínica em apenas três passos simples
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 bg-[#ededed] rounded-full flex items-center justify-center mb-6 text-[#fa1571]">
                  <MessageSquare size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Recebe mensagens no WhatsApp</h3>
                <p className="text-gray-700">
                  Seus pacientes conversam com a Dama.AI através do WhatsApp, o canal que eles já usam diariamente.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 bg-[#ededed] rounded-full flex items-center justify-center mb-6 text-[#fa1571]">
                  <Calendar size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Conversa e agenda automaticamente</h3>
                <p className="text-gray-700">
                  A IA entende as necessidades do paciente e agenda consultas diretamente na sua agenda.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 bg-[#ededed] rounded-full flex items-center justify-center mb-6 text-[#fa1571]">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Sua equipe foca no que importa</h3>
                <p className="text-gray-700">
                  Enquanto a Dama.AI cuida das tarefas repetitivas, sua equipe pode focar no atendimento personalizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="py-16 md:py-24 bg-[#ededed]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios para sua clínica</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Transforme o atendimento da sua clínica com a Dama.AI
              </p>
            </div>
            

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#fa1571]/10 rounded-full flex items-center justify-center mb-4 text-[#fa1571]">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Aumento de agendamentos</h3>
                <p className="text-gray-700 text-sm">
                  Aumente em até 30% o número de consultas agendadas com atendimento 24/7.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#fa1571]/10 rounded-full flex items-center justify-center mb-4 text-[#fa1571]">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Redução de faltas</h3>
                <p className="text-gray-700 text-sm">
                  Lembretes automáticos e confirmações reduzem em até 40% as faltas às consultas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#fa1571]/10 rounded-full flex items-center justify-center mb-4 text-[#fa1571]">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Atendimento humanizado</h3>
                <p className="text-gray-700 text-sm">
                  IA treinada para oferecer atendimento acolhedor e personalizado para cada paciente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 bg-[#fa1571]/10 rounded-full flex items-center justify-center mb-4 text-[#fa1571]">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">Integração completa</h3>
                <p className="text-gray-700 text-sm">
                  Integre facilmente com seu sistema atual, CRM, n8n e outras ferramentas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vídeo de Demonstração */}
        {/*  <DemoVideo /> */}

        {/* Planos */}
        <PricingPlans />

        {/* Integrações */}
        <Integrations />

        {/* Depoimentos */}
        <section id="depoimentos" className="py-16 md:py-24 bg-[#ededed]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Veja como a Dama.AI está transformando clínicas por todo o Brasil
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#d8a8a1] mr-4"></div>
                  <div>
                    <h4 className="font-bold">Dra. Carla Mendes</h4>
                    <p className="text-sm text-gray-600">Clínica Saúde Total</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "A Dama.AI transformou o atendimento da nossa clínica. Reduzimos o tempo gasto com agendamentos em 70%
                  e aumentamos nossa taxa de ocupação."
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#d8a8a1] mr-4"></div>
                  <div>
                    <h4 className="font-bold">Dr. Ricardo Alves</h4>
                    <p className="text-sm text-gray-600">Centro Médico Bem Estar</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Nossos pacientes adoram a facilidade de agendar consultas a qualquer hora do dia. A Dama.AI entende
                  exatamente o que eles precisam."
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#d8a8a1] mr-4"></div>
                  <div>
                    <h4 className="font-bold">Ana Paula Silva</h4>
                    <p className="text-sm text-gray-600">Gerente - Clínica Vida</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "A integração foi simples e o suporte é excelente. Em apenas um mês, já vimos um retorno significativo
                  do investimento."
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}

        <FAQ />

        {/* CTA Final */}
        <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-[#000000] to-[#333333] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme sua clínica hoje mesmo</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Automatize seu atendimento, aumente seus agendamentos e ofereça uma experiência superior aos seus
              pacientes.
            </p>

            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-10 rounded-2xl">
              <ContactForm />
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
                <a href="#" className="text-gray-400 hover:text-[#fa1571]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#hero" className="hover:text-[#fa1571]">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#integrations" className="hover:text-[#fa1571]">
                    Integrações
                  </Link>
                </li>
                <li>
                  <Link href="#planos" className="hover:text-[#fa1571]">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="https://damaface.com.br/" className="hover:text-[#fa1571]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="https://damaface.com.br/" className="hover:text-[#fa1571]">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#fa1571]">
                    Blog
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
