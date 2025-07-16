'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Header from "@/components/header"
import HeroCarousel from "@/components/hero-carousel"
import PricingPlans from "@/components/pricing-plans"
import Integrations from "@/components/integrations"
import DemoVideo from "@/components/vsl-demovideo"
import ContactForm from "@/components/contact-form"
import FAQ from "@/components/faq"
import { MessageSquare, Calendar, Users, BarChart3, Clock, CheckCircle } from "lucide-react"
import imgGerente from '@/public/imgs-depoimentos/Ana paula - Gerente.png'
import imgMedica from '@/public/imgs-depoimentos/Dra Carla mendes - medica.png'
import imgMedico from '@/public/imgs-depoimentos/Dr Ricardo Alves - Medico.jpg'

export default function Home() {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  useEffect(() => {
  if (showTerms || showPrivacy) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [showTerms, showPrivacy]);

  return (
  <>  <div className="flex min-h-screen flex-col">
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
          
            {/* Botão centralizado */}
            <div className="text-center">
              <Link
                href="/#planos"
                className="inline-block px-6 py-3 bg-[#fa1571] text-white rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-[#fa1571]/20"
              >
                Veja o vídeo completo da plataforma
              </Link>
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
        {/* <DemoVideo /> */}

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
                  <img src={imgMedica.src} className="w-12 h-12 rounded-full mr-4" alt='Ana Paula | Gerente Clínica vida'/>
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
                  <img src={imgMedico.src} alt="Dr. Ricardo Alves" className="w-12 h-12 rounded-full mr-4" />
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
                  <img src={imgGerente.src} className="w-12 h-12 rounded-full mr-4"/>
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

        {/* CTA Final 
        <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-[#000000] to-[#333333] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme sua clínica hoje mesmo</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Automatize seu atendimento, aumente seus agendamentos e ofereça uma experiência superior aos seus
              pacientes.
            </p>*/}

            {/* CTA Final <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-10 rounded-2xl">
              <ContactForm />
            </div>
          </div>
        </section>*/}
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
                  <Link href="/blog" className="hover:text-[#fa1571]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/5519981724419?text=Ol%C3%A1%2C%20gostaria%20de%20esclharecer%20algumas%20coisas%20sobre%20o%20Dama.AI" className="hover:text-[#fa1571]">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
        <li>
          <button
            onClick={() => setShowTerms(true)}
            className="hover:text-[#fa1571] transition-colors"
          >
            Termos de Serviço
          </button>
        </li>
        <li>
          <button
            onClick={() => setShowPrivacy(true)}
            className="hover:text-[#fa1571] transition-colors"
          >
            Política de Privacidade
          </button>
        </li>
      </ul>

        {/* Modal - Termos de Serviço */}
        {showTerms && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">Termos de Serviço</h2>
              <p>
                <strong>Última atualização: 14/05/2025</strong><br /><br />
                Ao utilizar a Dama.AI, você concorda com os seguintes termos e condições:<br /><br />

                <strong>1. Sobre o serviço</strong><br />
                A Dama.AI é uma assistente inteligente para clínicas e consultórios, que automatiza atendimento e comunicação com pacientes por meio de inteligência artificial.<br /><br />

                <strong>2. Uso permitido</strong><br />
                Você concorda em usar a Dama.AI apenas para fins legais e relacionados à sua atividade profissional.<br /><br />

                <strong>3. Cadastro e acesso</strong><br />
                Para acessar certos recursos, pode ser necessário fornecer dados como nome, e-mail e dados da clínica. Você é responsável por manter esses dados atualizados.<br /><br />

                <strong>4. Responsabilidades</strong><br />
                A Dama.AI não é responsável por decisões tomadas com base nas informações fornecidas por seus assistentes. O uso é de responsabilidade do contratante.<br /><br />

                <strong>5. Modificações</strong><br />
                Podemos atualizar estes termos periodicamente. Recomendamos revisá-los com frequência.<br /><br />

                <strong>6. Cancelamento</strong><br />
                O usuário pode cancelar o uso do serviço a qualquer momento. Em planos pagos, a interrupção da cobrança depende da data do cancelamento e política de reembolso vigente.<br /><br />

                <strong>7. Contato</strong><br />
                Para mais informações, entre em contato com:<br />
                📧 <a href="mailto:contato@damaface.com.br" className="text-[#fa1571] hover:underline">contato@damaface.com.br</a>
              </p>

              <button
                onClick={() => setShowTerms(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-[#fa1571] text-xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Modal - Política de Privacidade */}
        {showPrivacy && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">Política de Privacidade</h2>
              <p>
                <strong>Última atualização: 14/05/2025</strong><br /><br />
                Na Dama.AI, levamos sua privacidade a sério. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações.<br /><br />

                <strong>1. Informações que coletamos</strong><br />
                Podemos coletar os seguintes dados:<br />
                - Nome e e-mail ao preencher formulários.<br />
                - Dados de navegação no site (cookies e analytics).<br />
                - Informações fornecidas em interações com nossos assistentes de IA.<br /><br />

                <strong>2. Uso das informações</strong><br />
                Utilizamos suas informações para:<br />
                - Entrar em contato com você a pedido.<br />
                - Oferecer uma experiência personalizada com nossos assistentes.<br />
                - Melhorar nossos serviços e entender melhor nosso público.<br /><br />

                <strong>3. Compartilhamento de dados</strong><br />
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou para operar nossos serviços (ex: plataformas de pagamento).<br /><br />

                <strong>4. Armazenamento e segurança</strong><br />
                Utilizamos práticas seguras de armazenamento de dados e criptografia sempre que possível, além de ferramentas de mercado como OpenAI e n8n, respeitando suas políticas de privacidade.<br /><br />

                <strong>5. Seus direitos</strong><br />
                Você pode solicitar:<br />
                - Acesso aos seus dados.<br />
                - Correção ou exclusão das informações armazenadas.<br />
                - Cancelamento de comunicações a qualquer momento.<br /><br />

                <strong>6. Cookies</strong><br />
                Utilizamos cookies para entender como o site é utilizado e oferecer melhorias contínuas. Você pode desativá-los no seu navegador, se preferir.<br /><br />

                <strong>7. Contato</strong><br />
                Se tiver dúvidas, entre em contato com: <br />
                📧 <a href="mailto:contato@damaface.com.br" className="text-[#fa1571] hover:underline">contato@damaface.com.br</a>
              </p>
              <button
                onClick={() => setShowPrivacy(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-[#fa1571] text-xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}
              </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Dama.AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  </> ) 
}
