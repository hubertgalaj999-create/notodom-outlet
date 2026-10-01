import type { Product } from '../data/products'

export const SITE_URL = 'https://outlet.notodom.pl'

const TITLE_MAX = 60
const DESC_MIN = 130
const DESC_MAX = 155
const PLACEHOLDER_DESC = 'Opis produktu pojawi się wkrótce.'

// Cena do meta description: separator tysięcy (spacja) dopiero od 5 cyfr.
export function metaPrice(price: number): string {
  const s = String(price)
  return (s.length >= 5 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : s) + ' zł'
}

// Nazwa + najdłuższy sufiks, który mieści się w limicie; w ostateczności skrócona nazwa.
function fitTitle(name: string, suffixes: string[]): string {
  for (const suffix of suffixes) {
    const t = `${name} – ${suffix}`
    if (t.length <= TITLE_MAX) return t
  }
  const last = ` – ${suffixes[suffixes.length - 1]}`
  return name.slice(0, TITLE_MAX - last.length - 1).trimEnd() + '…' + last
}

// Dokłada kolejne zdania, aż opis osiągnie minimum. Każda pozycja to zdanie albo lista
// wariantów od najdłuższego – bierzemy pierwszy, który mieści się w limicie.
function fitDescription(parts: (string | string[])[]): string {
  let desc = ''
  for (const part of parts) {
    if (desc.length >= DESC_MIN) break
    for (const variant of Array.isArray(part) ? part : [part]) {
      const next = desc ? `${desc} ${variant}` : variant
      if (next.length <= DESC_MAX) {
        desc = next
        break
      }
    }
  }
  return desc
}

export function productTitle(p: Product): string {
  return p.available
    ? fitTitle(p.fullName, ['outlet notoDOM Zielona Góra', 'outlet notoDOM', 'notoDOM'])
    : fitTitle(p.fullName, ['sprzedane | outlet notoDOM', 'sprzedane | notoDOM', 'sprzedane'])
}

export function productDescription(p: Product): string {
  if (!p.available) {
    return fitDescription([
      `Produkt ${p.fullName} został już sprzedany.`,
      'Zapraszamy do aktualnej oferty outletu notoDOM w Zielonej Górze.',
      ['Sprawdź dostępne modele poekspozycyjne.', 'Pojedyncze sztuki z ekspozycji.', 'Zobacz inne okazje.'],
    ])
  }
  const parts: (string | string[])[] = [`${p.fullName} w outlecie notoDOM w Zielonej Górze.`, `Kategoria: ${p.categoryLabel}.`]
  if (p.dimensions) parts.push(`Wymiary: ${p.dimensions}.`)
  parts.push(`Cena: ${metaPrice(p.newPrice)}.`)
  if (p.description && p.description !== PLACEHOLDER_DESC) parts.push(p.description)
  parts.push(
    ['Model poekspozycyjny, pojedyncza sztuka.', 'Model poekspozycyjny.', 'Pojedyncza sztuka.'],
    ['Odbiór osobisty lub własny transport.', 'Odbiór osobisty.'],
    ['Zobacz zdjęcia i zarezerwuj.', 'Zadzwoń i zarezerwuj.'],
  )
  return fitDescription(parts)
}
