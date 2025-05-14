import { blogPosts } from "@/lib/blog-data"
import { normalizeText } from "@/lib/utils-text"

export default function DebugTagsPage() {
  // Teste para "ia-na-saúde"
  const testSlug = "ia-na-saúde"
  const normalizedTestSlug = normalizeText(testSlug)

  // Extrai todas as tags únicas de todos os posts
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  // Normaliza todas as tags para comparação
  const normalizedTags = allTags.map((tag) => ({
    original: tag,
    normalized: normalizeText(tag),
  }))

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Debug de Tags</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Teste de Slug</h2>
        <p>
          <strong>Slug original:</strong> {testSlug}
        </p>
        <p>
          <strong>Slug normalizado:</strong> {normalizedTestSlug}
        </p>
        <p>
          <strong>Slug com espaços:</strong> {testSlug.replace(/-/g, " ")}
        </p>
        <p>
          <strong>Slug com espaços normalizado:</strong> {normalizeText(testSlug.replace(/-/g, " "))}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Tags</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Original</th>
              <th className="border p-2 text-left">Normalizado</th>
              <th className="border p-2 text-left">Corresponde ao Teste?</th>
            </tr>
          </thead>
          <tbody>
            {normalizedTags.map((tag, index) => (
              <tr key={index} className={tag.normalized === normalizedTestSlug ? "bg-green-100" : ""}>
                <td className="border p-2">{tag.original}</td>
                <td className="border p-2">{tag.normalized}</td>
                <td className="border p-2">{tag.normalized === normalizedTestSlug ? "✅ Sim" : "❌ Não"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Comparações Diretas</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {allTags
            .map((tag, index) => {
              const normalized = normalizeText(tag)
              return `${index + 1}. "${tag}" => "${normalized}" | Corresponde: ${normalized === normalizedTestSlug ? "Sim" : "Não"}\n`
            })
            .join("")}
        </pre>
      </div>
    </div>
  )
}
