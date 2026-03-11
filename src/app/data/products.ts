export type Product = {
  id: string
  name: string
  fullName: string
  category: 'narozniki' | 'stoly' | 'zestawy' | 'lawy'
  categoryLabel: string
  oldPrice: number
  newPrice: number
  images: string[]
  description: string
  flaws: string[]
  badge?: string
  badgeClass?: string
  dimensions?: string
  available: boolean
}

export const products: Product[] = [
  {
    id: 'giovanni-naroznik',
    name: 'Giovanni',
    fullName: 'Narożnik Giovanni',
    category: 'narozniki',
    categoryLabel: 'Narożniki',
    oldPrice: 9650,
    newPrice: 4900,
    images: ['/giovanni_naroznik.jpg'],
    description: 'Opis produktu pojawi się wkrótce.',
    flaws: [],
    badge: 'Mega Okazja',
    badgeClass: 'badge-last',
    available: true,
  },
  {
    id: 'karato-naroznik',
    name: 'Karato',
    fullName: 'Narożnik Karato',
    category: 'narozniki',
    categoryLabel: 'Narożniki',
    oldPrice: 17276,
    newPrice: 8900,
    images: ['/karato_naroznik.jpg'],
    description: 'Opis produktu pojawi się wkrótce.',
    flaws: [],
    badge: 'Ostatnia sztuka',
    badgeClass: 'badge-last',
    available: true,
  },
  {
    id: 'laurent-naroznik',
    name: 'Laurent',
    fullName: 'Narożnik Laurent',
    category: 'narozniki',
    categoryLabel: 'Narożniki',
    oldPrice: 10999,
    newPrice: 6900,
    images: ['/laurent_naroznik.jpg'],
    description: 'Opis produktu pojawi się wkrótce.',
    flaws: [],
    badge: 'Wyprzedaż',
    badgeClass: 'badge-expo',
    available: true,
  },
  {
    id: 'pola-naroznik',
    name: 'Pola',
    fullName: 'Narożnik Pola',
    category: 'narozniki',
    categoryLabel: 'Narożniki',
    oldPrice: 3069,
    newPrice: 2549,
    images: ['/pola_naroznik.jpg'],
    description: 'Opis produktu pojawi się wkrótce.',
    flaws: [],
    badge: 'Wyprzedaż',
    badgeClass: 'badge-expo',
    available: true,
  },
  {
    id: 'simba-naroznik',
    name: 'Simba',
    fullName: 'Narożnik Simba',
    category: 'narozniki',
    categoryLabel: 'Narożniki',
    oldPrice: 2499,
    newPrice: 1700,
    images: ['/simba_naroznik.jpg'],
    description: 'Opis produktu pojawi się wkrótce.',
    flaws: [],
    badge: 'Wyprzedaż',
    badgeClass: 'badge-expo',
    available: true,
  },
  {
    id: 'monolit-stol',
    name: 'Monolit',
    fullName: 'Stół Monolit',
    category: 'stoly',
    categoryLabel: 'Stoły',
    oldPrice: 8790,
    newPrice: 6290,
    images: ['/stol_monolit.jpg'],
    description: 'Opis produktu pojawi się wkrótce.',
    flaws: [],
    badge: 'Dostępne od ręki',
    badgeClass: 'badge-ready',
    dimensions: '160×82×90 cm',
    available: true,
  },
  {
    id: 'salvador-stol',
    name: 'Salvador',
    fullName: 'Stół Salvador',
    category: 'stoly',
    categoryLabel: 'Stoły',
    oldPrice: 2109,
    newPrice: 999,
    images: ['/salvador_stol.jpg'],
    description: 'Opis produktu pojawi się wkrótce.',
    flaws: [],
    badge: 'Wyprzedaż',
    badgeClass: 'badge-expo',
    dimensions: '160–200×90 cm',
    available: true,
  },
  {
    id: 'gladiolus-zestaw',
    name: 'Gladiolus 3R+1TV+1TV',
    fullName: 'Zestaw Gladiolus 3R+1TV+1TV',
    category: 'zestawy',
    categoryLabel: 'Zestawy',
    oldPrice: 19983,
    newPrice: 13799,
    images: ['/gladiolus_zestaw.jpg'],
    description: 'Opis produktu pojawi się wkrótce.',
    flaws: [],
    badge: 'Wyprzedaż',
    badgeClass: 'badge-expo',
    available: true,
  },
  {
    id: 'pik-zestaw',
    name: 'PIK',
    fullName: 'Zestaw PIK – Barek, Komoda, Witryna, Półka',
    category: 'zestawy',
    categoryLabel: 'Zestawy',
    oldPrice: 17900,
    newPrice: 8350,
    images: ['/zestaw_pik.jpg'],
    description: 'Opis produktu pojawi się wkrótce.',
    flaws: [],
    badge: 'Wyprzedaż',
    badgeClass: 'badge-expo',
    available: true,
  },
  {
    id: 'gki-lawa',
    name: 'GKI Drewno',
    fullName: 'Ława GKI Drewno',
    category: 'lawy',
    categoryLabel: 'Ławy',
    oldPrice: 1499,
    newPrice: 699,
    images: ['/laurent_naroznik.jpg'], // placeholder - podmień na właściwe zdjęcie
    description: 'Opis produktu pojawi się wkrótce.',
    flaws: [],
    badge: 'Wyprzedaż',
    badgeClass: 'badge-expo',
    available: true,
  },
]

export const categories = [
  { id: 'wszystkie', label: 'Wszystkie' },
  { id: 'narozniki', label: 'Narożniki' },
  { id: 'stoly', label: 'Stoły' },
  { id: 'zestawy', label: 'Zestawy' },
  { id: 'lawy', label: 'Ławy' },
]

export function formatPrice(price: number): string {
  return price.toLocaleString('pl-PL') + ' zł'
}

export function calcDiscount(oldPrice: number, newPrice: number): string {
  return '-' + Math.round((1 - newPrice / oldPrice) * 100) + '%'
}
