import { categories } from "./blog-data"
import { normalizeText } from "./utils-text"

export function debugCategories(slug: string) {
  console.log("Debug de categorias para slug:", slug)
  console.log("Slug normalizado:", normalizeText(slug))

  categories.forEach((category) => {
    console.log(
      `Categoria: "${category}" => "${normalizeText(category)}" | Match: ${
        normalizeText(category) === normalizeText(slug) ? "✅" : "❌"
      }`,
    )
  })
}
