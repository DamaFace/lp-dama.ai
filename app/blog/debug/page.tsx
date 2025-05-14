import { categories } from "@/lib/blog-data"
import { normalizeText } from "@/lib/utils-text"

export default function DebugPage() {
  // Teste para "gestão-de-clínicas"
  const testSlug = "gestão-de-clínicas"
  const normalizedTestSlug = normalizeText(testSlug)

  // Normaliza todas as categorias para comparação
  const normalizedCategories = categories.map((cat) => ({
    original: cat,
    normalized: normalizeText(cat),
  }))

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Debug de Categorias</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Teste de Slug</h2>
        <p>
          <strong>Slug original:</strong> {testSlug}
        </p>
        <p>
          <strong>Slug normalizado:</strong> {normalizedTestSlug}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Categorias</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Original</th>
              <th className="border p-2 text-left">Normalizado</th>
              <th className="border p-2 text-left">Corresponde ao Teste?</th>
            </tr>
          </thead>
          <tbody>
            {normalizedCategories.map((cat, index) => (
              <tr key={index} className={cat.normalized === normalizedTestSlug ? "bg-green-100" : ""}>
                <td className="border p-2">{cat.original}</td>
                <td className="border p-2">{cat.normalized}</td>
                <td className="border p-2">{cat.normalized === normalizedTestSlug ? "✅ Sim" : "❌ Não"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Comparações Diretas</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          {categories
            .map((cat, index) => {
              const normalized = normalizeText(cat)
              return `${index + 1}. "${cat}" => "${normalized}" | Corresponde: ${normalized === normalizedTestSlug ? "Sim" : "Não"}\n`
            })
            .join("")}
        </pre>
      </div>
    </div>
  )
}
