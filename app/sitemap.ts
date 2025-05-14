import type { MetadataRoute } from "next"

const blogPosts = [
  { id: "reducao-faltas-consultas-medicas", lastModified: new Date() },
  { id: "chatbots-atendimento-clinicas", lastModified: new Date() },
  { id: "integracao-whatsapp-sistemas-clinicas", lastModified: new Date() },
  { id: "beneficios-automacao-clinicas-pequenas", lastModified: new Date() },
  { id: "ia-diagnostico-medico", lastModified: new Date() },
  { id: "lgpd-clinicas-saude", lastModified: new Date() },
  { id: "experiencia-paciente-digital", lastModified: new Date() },
  { id: "telemedicina-futuro", lastModified: new Date() },
]

const categories = [
  "automacao",
  "inteligencia-artificial",
  "gestao-de-clinicas",
  "experiencia-do-paciente",
  "tecnologia",
  "telemedicina",
  "legislacao",
  "integracoes",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inteligencia.damaface.com.br"

  // URLs estáticas
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/obrigado`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ]

  // URLs de posts do blog
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // URLs de categorias
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/blog/categoria/${category}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...blogUrls, ...categoryUrls]
}
