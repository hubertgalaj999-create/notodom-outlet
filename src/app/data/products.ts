export type Product = {
  id: string
  name: string
  fullName: string
  category: string
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
  // NAROŻNIKI
  { id: 'aro-naroznik', name: 'Aro', fullName: 'Narożnik Aro', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 16244, newPrice: 8500, images: ['/naroznik_aro.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'giovanni-naroznik', name: 'Giovanni', fullName: 'Narożnik Giovanni', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 9650, newPrice: 4900, images: ['/giovanni_naroznik.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'heaven-naroznik', name: 'Heaven', fullName: 'Narożnik Heaven', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 9239, newPrice: 4900, images: ['/naroznik_heaven.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'karato-naroznik', name: 'Karato', fullName: 'Narożnik Karato', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 17276, newPrice: 8900, images: ['/karato_naroznik.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Ostatnia sztuka', badgeClass: 'badge-last', available: true },
  { id: 'laurent-naroznik', name: 'Laurent', fullName: 'Narożnik Laurent', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 10999, newPrice: 6900, images: ['/laurent_naroznik.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'pola-naroznik', name: 'Pola', fullName: 'Narożnik Pola', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 3069, newPrice: 2549, images: ['/pola_naroznik.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'simba-naroznik', name: 'Simba', fullName: 'Narożnik Simba', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 2499, newPrice: 1700, images: ['/simba_naroznik.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  // FOTELE
  { id: 'capella-fotel', name: 'Capella Szezlong', fullName: 'Capella Szezlong', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 4229, newPrice: 3000, images: ['/fotel_capella.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'mp-fotel', name: 'MP TV + Podnóżek', fullName: 'Fotel MP TV + Podnóżek', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 6197, newPrice: 2700, images: ['/fotel_mp.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'nidzica-fotel', name: 'Nidzica Aria', fullName: 'Fotel Nidzica Aria', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 2099, newPrice: 1199, images: ['/fotel_nidzica.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'royal-fotel', name: 'Royal', fullName: 'Fotel Royal', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 5409, newPrice: 1199, images: ['/fotel_royal.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  // KRZESŁA
  { id: 'august-krzesla', name: 'August (zestaw 4 szt.)', fullName: 'Zestaw 4 Krzeseł August', category: 'krzesla', categoryLabel: 'Krzesła', oldPrice: 1960, newPrice: 1499, images: ['/krzeslo_august.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'moreno-krzesla', name: 'Moreno (zestaw 4 szt.)', fullName: 'Zestaw 4 Krzeseł Moreno', category: 'krzesla', categoryLabel: 'Krzesła', oldPrice: 3328, newPrice: 2600, images: ['/krzeslo_moreno.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  // STOŁY
  { id: 'monolit-stol', name: 'Monolit', fullName: 'Stół Monolit', category: 'stoly', categoryLabel: 'Stoły', oldPrice: 8790, newPrice: 6290, images: ['/stol_monolit.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Dostępne od ręki', badgeClass: 'badge-ready', dimensions: '160×82×90 cm', available: true },
  { id: 'orion-stol', name: 'Orion', fullName: 'Stół Orion', category: 'stoly', categoryLabel: 'Stoły', oldPrice: 3700, newPrice: 2349, images: ['/stol_orion.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', dimensions: '120–220 cm', available: true },
  { id: 'kamienny-stol', name: 'Stół Kamienny', fullName: 'Stół Kamienny', category: 'stoly', categoryLabel: 'Stoły', oldPrice: 9900, newPrice: 6900, images: ['/stol_kamienny.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'salvador-stol', name: 'Salvador', fullName: 'Stół Salvador', category: 'stoly', categoryLabel: 'Stoły', oldPrice: 2109, newPrice: 999, images: ['/salvador_stol.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160–200×90 cm', available: true },
  // STOLIKI
  { id: 'ditra-stolik', name: 'Ditra', fullName: 'Stolik Ditra', category: 'stoliki', categoryLabel: 'Stoliki', oldPrice: 499, newPrice: 260, images: ['/stolik_ditra.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'elidoro-stolik', name: 'Elidoro Ara', fullName: 'Stolik Kamienny Elidoro Ara', category: 'stoliki', categoryLabel: 'Stoliki', oldPrice: 4689, newPrice: 2299, images: ['/stolik_elidoro.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  // ŁAWY
  { id: 'gki-lawa', name: 'GKI Drewno', fullName: 'Ława GKI Drewno', category: 'lawy', categoryLabel: 'Ławy', oldPrice: 1499, newPrice: 699, images: ['/ława_ch.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'tc221-lawa', name: 'TC.221', fullName: 'Ława TC.221', category: 'lawy', categoryLabel: 'Ławy', oldPrice: 1059, newPrice: 750, images: ['/stolik_tc221.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'tt252-lawa', name: 'TT.252', fullName: 'Ława TT.252', category: 'lawy', categoryLabel: 'Ławy', oldPrice: 919, newPrice: 749, images: ['/stolik_tt.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  // ŁÓŻKA
  { id: 'fiore-lozko', name: 'Fiore 06', fullName: 'Łóżko Fiore 06 160×200', category: 'lozka', categoryLabel: 'Łóżka', oldPrice: 6259, newPrice: 4599, images: ['/lozko_stokholm.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200 cm', available: true },
  { id: 'preppy-lozko', name: 'Preppy', fullName: 'Łóżko Hilding Preppy 160×200', category: 'lozka', categoryLabel: 'Łóżka', oldPrice: 5600, newPrice: 2500, images: ['/lozko_preppy.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200 cm', available: true },
  { id: 'stokholm-lozko', name: 'Stokholm', fullName: 'Łóżko Stokholm 160×200', category: 'lozka', categoryLabel: 'Łóżka', oldPrice: 4279, newPrice: 3279, images: ['/lozko_stokholm.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200 cm', available: true },
  // MATERACE
  { id: 'aida-materac', name: 'Aida Deluxe Hilding', fullName: 'Materac Aida Deluxe Hilding 160×200', category: 'materace', categoryLabel: 'Materace', oldPrice: 6990, newPrice: 5250, images: ['/materac_aida.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200 cm', available: true },
  { id: 'fika-materac', name: 'Fika', fullName: 'Materac Fika 160×200', category: 'materace', categoryLabel: 'Materace', oldPrice: 4500, newPrice: 2600, images: ['/materac_fika.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', dimensions: '160×200 cm', available: true },
  { id: 'fandango-materac', name: 'Hilding Fandango', fullName: 'Materac Hilding Fandango 160×200', category: 'materace', categoryLabel: 'Materace', oldPrice: 2500, newPrice: 1539, images: ['/materac_hilding_fandango.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200×21 cm', available: true },
  { id: 'tempur-materac', name: 'Tempur Plus Medium', fullName: 'Materac Tempur Plus Medium 180×200', category: 'materace', categoryLabel: 'Materace', oldPrice: 16100, newPrice: 12100, images: ['/materac_tempur_plus_medium.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', dimensions: '180×200×25 cm', available: true },
  // ZESTAWY
  { id: 'george-zestaw', name: 'George 3TV', fullName: 'Zestaw George 3TV 1V+1TTV', category: 'zestawy', categoryLabel: 'Zestawy', oldPrice: 15098, newPrice: 6800, images: ['/zestaw_george.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'giotto-zestaw', name: 'Giotto 3N+1TV', fullName: 'Zestaw Giotto 3N+1TV', category: 'zestawy', categoryLabel: 'Zestawy', oldPrice: 7495, newPrice: 2499, images: ['/zestaw_giotto.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'gladiolus-zestaw', name: 'Gladiolus 3R+1TV+1TV', fullName: 'Zestaw Gladiolus 3R+1TV+1TV', category: 'zestawy', categoryLabel: 'Zestawy', oldPrice: 19983, newPrice: 13799, images: ['/gladiolus_zestaw.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'pik-zestaw', name: 'PIK', fullName: 'Zestaw PIK – Barek, Komoda, Witryna, Półka', category: 'zestawy', categoryLabel: 'Zestawy', oldPrice: 17900, newPrice: 8350, images: ['/zestaw_pik.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'sersey-zestaw', name: 'Sersey', fullName: 'Zestaw Mebli Sersey', category: 'zestawy', categoryLabel: 'Zestawy', oldPrice: 9420, newPrice: 6400, images: ['/zestaw_sersey.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  // AGD
  { id: 'beko-pralka', name: 'Beko HITV 8733 B0', fullName: 'Pralko-suszarka Beko HITV 8733 B0', category: 'agd', categoryLabel: 'AGD', oldPrice: 2399, newPrice: 1950, images: ['/pralka_beko.jpg'], description: 'Pralko-suszarka do zabudowy. Pranie 8 kg, suszenie 5 kg.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '57.5×60×82 cm', available: true },
  { id: 'elektrolux-lodowka', name: 'Elektrolux LNT7ME32M1', fullName: 'Lodówka Elektrolux LNT7ME32M1', category: 'agd', categoryLabel: 'AGD', oldPrice: 3799, newPrice: 3299, images: ['/lodowka_elektrolux.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'liebherr-lodowka', name: 'Liebherr DNML 43/13', fullName: 'Lodówka Liebherr DNML 43/13', category: 'agd', categoryLabel: 'AGD', oldPrice: 3599, newPrice: 2199, images: ['/lodowka_liebherr.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  // RTV I MEBLE
  { id: 'eliston-witryna', name: 'Eliston Witryna', fullName: 'Witryna Eliston', category: 'rtv', categoryLabel: 'RTV i Meble', oldPrice: 1419, newPrice: 850, images: ['/witryna_eliston.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '109.3×161.7×41.5 cm', available: true },
  { id: 'eliston-rtv', name: 'Eliston Szafka RTV', fullName: 'Szafka RTV Eliston', category: 'rtv', categoryLabel: 'RTV i Meble', oldPrice: 839, newPrice: 600, images: ['/rtv_eliston.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '174.3×56.1×41.5 cm', available: true },
  { id: 'falam-polka', name: 'Falam Półka', fullName: 'Półka Falam', category: 'rtv', categoryLabel: 'RTV i Meble', oldPrice: 259, newPrice: 180, images: ['/falam_półka.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '174.1×22×21 cm', available: true },
  { id: 'aviano-lustro', name: 'Lustro Aviano MR9060', fullName: 'Lustro Łazienkowe Aviano MR9060', category: 'rtv', categoryLabel: 'RTV i Meble', oldPrice: 875, newPrice: 430, images: ['/lustro_aviano.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
]

export const categories = [
  { id: 'wszystkie', label: 'Wszystkie' },
  { id: 'narozniki', label: 'Narożniki' },
  { id: 'fotele', label: 'Fotele' },
  { id: 'krzesla', label: 'Krzesła' },
  { id: 'stoly', label: 'Stoły' },
  { id: 'stoliki', label: 'Stoliki' },
  { id: 'lawy', label: 'Ławy' },
  { id: 'lozka', label: 'Łóżka' },
  { id: 'materace', label: 'Materace' },
  { id: 'zestawy', label: 'Zestawy' },
  { id: 'agd', label: 'AGD' },
  { id: 'rtv', label: 'RTV i Meble' },
]

export function formatPrice(price: number): string {
  if (price === 0) return 'Cena na zapytanie'
  return price.toLocaleString('pl-PL') + ' zł'
}

export function calcDiscount(oldPrice: number, newPrice: number): string {
  if (oldPrice === 0) return ''
  return '-' + Math.round((1 - newPrice / oldPrice) * 100) + '%'
}
