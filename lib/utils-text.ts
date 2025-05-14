/**
 * Normaliza um texto para uso em URLs (slugs)
 * - Remove acentos
 * - Converte para minúsculas
 * - Substitui espaços por hífens
 * - Remove caracteres especiais
 */
export function normalizeText(text: string): string {
  if (!text) return ""

  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/[^\w-]+/g, "") // Remove caracteres especiais (mantém apenas letras, números, _ e -)
}

/**
 * Compara dois textos de forma normalizada
 * Útil para comparar strings com acentos, maiúsculas/minúsculas, etc.
 */
export function compareNormalized(a: string, b: string): boolean {
  return normalizeText(a) === normalizeText(b)
}

/**
 * Verifica se um texto contém outro, de forma normalizada
 */
export function containsNormalized(text: string, search: string): boolean {
  if (!text || !search) return false

  const normalizedText = normalizeText(text)
  const normalizedSearch = normalizeText(search)

  return normalizedText.includes(normalizedSearch)
}

/**
 * Converte um texto para um formato seguro para URLs
 * Mais restritivo que normalizeText, garantindo que não haja caracteres especiais
 */
export function toSafeUrl(text: string): string {
  if (!text) return ""

  return normalizeText(text)
    .replace(/[^a-z0-9-]/g, "") // Garante que só tenha letras minúsculas, números e hífens
    .replace(/-+/g, "-") // Remove hífens duplicados
    .replace(/^-|-$/g, "") // Remove hífens no início e fim
}
