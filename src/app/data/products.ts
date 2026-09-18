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
  { id: 'simba-naroznik', name: 'Simba', fullName: 'Narożnik Simba', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 2499, newPrice: 1700, images: ['/simba_naroznik.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'martinez-naroznik', name: 'Martinez 260-90-215', fullName: 'Narożnik Martinez 260-90-215', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 3399, newPrice: 2900, images: ['/naroznik_martinez.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '260×90×215 cm', available: true },
  { id: 'polipol-naroznik', name: 'Polipol EM22001', fullName: 'Narożnik Polipol EM22001', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 30207, newPrice: 12900, images: ['/naroznik-polipol-em2201.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'tulipano-naroznik', name: 'Tulipano', fullName: 'Narożnik Tulipano', category: 'narozniki', categoryLabel: 'Narożniki', oldPrice: 22524, newPrice: 9500, images: ['/narożnik_tulipano.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  // SOFY
  { id: 'tosca-sofa', name: 'Tosca 3FS', fullName: 'Sofa Tosca 3FS', category: 'sofy', categoryLabel: 'Sofy', oldPrice: 4313, newPrice: 3350, images: ['/sofa-tosca.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'palermo-sofa', name: 'Palermo', fullName: 'Sofa Palermo', category: 'sofy', categoryLabel: 'Sofy', oldPrice: 5440, newPrice: 2499, images: ['/sofa-palermo.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'szara-rozkladana-sofa', name: 'Sofa Rozkładana (szara)', fullName: 'Sofa Rozkładana (szara)', category: 'sofy', categoryLabel: 'Sofy', oldPrice: 3567, newPrice: 1800, images: ['/sofa-szara-rozkladana.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'evora-sofa', name: 'Evora', fullName: 'Sofa Evora', category: 'sofy', categoryLabel: 'Sofy', oldPrice: 3999, newPrice: 3399, images: ['/sofa-evora.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'lora-sofa', name: 'Lora Lux', fullName: 'Sofa Lora Lux', category: 'sofy', categoryLabel: 'Sofy', oldPrice: 2199, newPrice: 1600, images: ['/sofa-lora.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: 'Pow. spania: 140–209 cm', available: true },
  { id: 'como-sofa', name: 'Como 2FBKA', fullName: 'Sofa Como 2FBKA', category: 'sofy', categoryLabel: 'Sofy', oldPrice: 1999, newPrice: 1599, images: ['/sofa_como.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  // WERSALKI
  { id: 'sula-wersalka', name: 'Sula', fullName: 'Wersalka Sula', category: 'wersalki', categoryLabel: 'Wersalki', oldPrice: 1499, newPrice: 1099, images: ['/wersalka-sula.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  // LEŻANKI
  { id: 'venice-lezanka', name: 'Venice', fullName: 'Leżanka Venice', category: 'lezanki', categoryLabel: 'Leżanki', oldPrice: 8266, newPrice: 2250, images: ['/leżanka_venice.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  // FOTELE
  { id: 'capella-fotel', name: 'Capella Szezlong', fullName: 'Capella Szezlong', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 4229, newPrice: 3000, images: ['/fotel_capella.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'royal-fotel', name: 'Royal', fullName: 'Fotel Royal', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 5409, newPrice: 1199, images: ['/fotel_royal.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'tve-notos-fotel', name: 'TVE Notos', fullName: 'Fotel TVE Notos', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 1499, newPrice: 850, images: ['/fotel-tve-notos.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'victus-fotel', name: 'Victus', fullName: 'Fotel Victus', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 1259, newPrice: 899, images: ['/fotel-victus.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'wind-fotel', name: 'Wind TV', fullName: 'Fotel TV Wind', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 4229, newPrice: 2099, images: ['/fotel-wind.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '76×114×96 cm', available: true },
  { id: 'tve-uranos-fotel', name: 'TVE Uranos', fullName: 'Fotel TVE Uranos', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 1329, newPrice: 999, images: ['/fotel_tve_uranos.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'ultra-fotel', name: 'Ultra ES', fullName: 'Fotel Ultra ES', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 1599, newPrice: 999, images: ['/fotel_ultra.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'duo-ever-fotel', name: 'Dou Ever', fullName: 'Fotel Dou Ever', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 2155, newPrice: 1400, images: ['/fotel-duo-ever.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'limone-fotel', name: 'Limone', fullName: 'Fotel Limone', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 1499, newPrice: 599, images: ['/fotel-limone.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'modern-fotel', name: 'Modern', fullName: 'Fotel Modern', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 1699, newPrice: 550, images: ['/fotel-modern.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'york-fotel', name: 'York', fullName: 'Fotel York', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 2699, newPrice: 1110, images: ['/fotel-york.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'sensmore-fotel', name: 'Sensmore Relax', fullName: 'Fotel Relax Sensmore', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 5029, newPrice: 3299, images: ['/fotel_sensmore.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '80×117×90 cm', available: true },
  { id: 'maks-fotel', name: 'Maks', fullName: 'Fotel Maks', category: 'fotele', categoryLabel: 'Fotele', oldPrice: 429, newPrice: 299, images: ['/fotel_maks.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  // KRZESŁA
  { id: 'august-krzesla', name: 'August (zestaw 4 szt.)', fullName: 'Zestaw 4 Krzeseł August', category: 'krzesla', categoryLabel: 'Krzesła', oldPrice: 1960, newPrice: 1499, images: ['/krzeslo_august.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  { id: 'moreno-krzesla', name: 'Moreno (zestaw 4 szt.)', fullName: 'Zestaw 4 Krzeseł Moreno', category: 'krzesla', categoryLabel: 'Krzesła', oldPrice: 3328, newPrice: 2600, images: ['/krzeslo_moreno.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  // STOŁY
  { id: 'monolit-stol', name: 'Monolit', fullName: 'Stół Monolit', category: 'stoly', categoryLabel: 'Stoły', oldPrice: 8790, newPrice: 6290, images: ['/stol_monolit.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Dostępne od ręki', badgeClass: 'badge-ready', dimensions: '160×82×90 cm', available: true },
  { id: 'orion-stol', name: 'Orion', fullName: 'Stół Orion', category: 'stoly', categoryLabel: 'Stoły', oldPrice: 3700, newPrice: 2349, images: ['/stol_orion.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', dimensions: '120–220 cm', available: true },
  { id: 'salvador-stol', name: 'Salvador', fullName: 'Stół Salvador', category: 'stoly', categoryLabel: 'Stoły', oldPrice: 2109, newPrice: 999, images: ['/salvador_stol.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160–200×90 cm', available: true },
  // STOLIKI I ŁAWY
  { id: 'ditra-stolik', name: 'Ditra', fullName: 'Stolik Ditra', category: 'stoliki-i-lawy', categoryLabel: 'Stoliki i Ławy', oldPrice: 499, newPrice: 260, images: ['/stolik_ditra.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'tc221-lawa', name: 'TC.221', fullName: 'Ława TC.221', category: 'stoliki-i-lawy', categoryLabel: 'Stoliki i Ławy', oldPrice: 1059, newPrice: 750, images: ['/stolik_tc221.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'tt252-lawa', name: 'TT.252', fullName: 'Ława TT.252', category: 'stoliki-i-lawy', categoryLabel: 'Stoliki i Ławy', oldPrice: 919, newPrice: 749, images: ['/stolik_tt.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'halmar-selena-lawa', name: 'Halmar Selena FI65', fullName: 'Ława Halmar Selena FI65', category: 'stoliki-i-lawy', categoryLabel: 'Stoliki i Ławy', oldPrice: 799, newPrice: 529, images: ['/ława-halmar-selena.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  // ŁÓŻKA
  { id: 'fiore-lozko', name: 'Fiore 06', fullName: 'Łóżko Fiore 06 160×200', category: 'lozka', categoryLabel: 'Łóżka', oldPrice: 6259, newPrice: 4599, images: ['/lozko_stokholm.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200 cm', available: true },
  { id: 'preppy-lozko', name: 'Preppy', fullName: 'Łóżko Hilding Preppy 160×200', category: 'lozka', categoryLabel: 'Łóżka', oldPrice: 5600, newPrice: 2500, images: ['/łóżko_preppy.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200 cm', available: true },
  { id: 'stokholm-lozko', name: 'Stokholm', fullName: 'Łóżko Stokholm 160×200', category: 'lozka', categoryLabel: 'Łóżka', oldPrice: 4279, newPrice: 3279, images: ['/lozko_stokholm.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200 cm', available: true },
  { id: 'lira-lozko', name: 'Lira 160', fullName: 'Łóżko Lira 160×200', category: 'lozka', categoryLabel: 'Łóżka', oldPrice: 2849, newPrice: 2499, images: ['/łóżko_lira.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200 cm', available: true },
  { id: 'theo-lozko', name: 'Theo', fullName: 'Łóżko Theo', category: 'lozka', categoryLabel: 'Łóżka', oldPrice: 4329, newPrice: 3199, images: ['/łóżko_theo.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  // MATERACE
  { id: 'aida-materac', name: 'Aida Deluxe Hilding', fullName: 'Materac Aida Deluxe Hilding 160×200', category: 'materace', categoryLabel: 'Materace', oldPrice: 6990, newPrice: 5250, images: ['/materac_aida.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200 cm', available: true },
  { id: 'fika-materac', name: 'Fika', fullName: 'Materac Fika 160×200', category: 'materace', categoryLabel: 'Materace', oldPrice: 4500, newPrice: 2600, images: ['/materac_fika.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', dimensions: '160×200 cm', available: true },
  { id: 'fandango-materac', name: 'Hilding Fandango', fullName: 'Materac Hilding Fandango 160×200', category: 'materace', categoryLabel: 'Materace', oldPrice: 2500, newPrice: 1539, images: ['/materac_hilding_fandango.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '160×200×21 cm', available: true },
  { id: 'tempur-materac', name: 'Tempur Plus Medium', fullName: 'Materac Tempur Plus Medium 180×200', category: 'materace', categoryLabel: 'Materace', oldPrice: 16100, newPrice: 12100, images: ['/materac_tempur_plus_medium.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', dimensions: '180×200×25 cm', available: true },
  { id: 'figaro-materac', name: 'Figaro Hilding', fullName: 'Materac Figaro Hilding', category: 'materace', categoryLabel: 'Materace', oldPrice: 8590, newPrice: 6590, images: ['/materac_figaro.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'rumba-materac', name: 'Rumba 160/200', fullName: 'Materac Rumba 160/200', category: 'materace', categoryLabel: 'Materace', oldPrice: 4839, newPrice: 3800, images: ['/materac_aida.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', dimensions: '160×200 cm', available: true },
  // ZESTAWY
  { id: 'sersey-zestaw', name: 'Sersey', fullName: 'Zestaw Mebli Sersey', category: 'zestawy', categoryLabel: 'Zestawy', oldPrice: 9420, newPrice: 6400, images: ['/zestaw_sersey.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'forn-zestaw', name: 'Forn Stół + 4 Krzesła', fullName: 'Zestaw Forn – Stół + 4 Krzesła', category: 'zestawy', categoryLabel: 'Zestawy', oldPrice: 2415, newPrice: 1100, images: ['/zestaw_stół+krzesła_forn.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  // PUFY
  { id: 'livia-pufa', name: 'Livia', fullName: 'Pufa Livia', category: 'pufy', categoryLabel: 'Pufy', oldPrice: 670, newPrice: 359, images: ['/pufa_livia.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Mega Okazja', badgeClass: 'badge-last', available: true },
  // AGD
  { id: 'beko-pralka', name: 'Beko HITV 8733 B0', fullName: 'Pralko-suszarka Beko HITV 8733 B0', category: 'agd', categoryLabel: 'AGD', oldPrice: 2399, newPrice: 1950, images: ['/pralka_beko.jpg'], description: 'Pralko-suszarka do zabudowy. Pranie 8 kg, suszenie 5 kg.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '57.5×60×82 cm', available: true },
  { id: 'elektrolux-lodowka', name: 'Elektrolux LNT7ME32M1', fullName: 'Lodówka Elektrolux LNT7ME32M1', category: 'agd', categoryLabel: 'AGD', oldPrice: 3799, newPrice: 3299, images: ['/lodowka_elektrolux.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  { id: 'liebherr-lodowka', name: 'Liebherr DNML 43/13', fullName: 'Lodówka Liebherr DNML 43/13', category: 'agd', categoryLabel: 'AGD', oldPrice: 3599, newPrice: 2199, images: ['/lodowka_liebherr.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', available: true },
  // RTV I MEBLE
  { id: 'eliston-rtv', name: 'Eliston Szafka RTV', fullName: 'Szafka RTV Eliston', category: 'rtv', categoryLabel: 'RTV i Meble', oldPrice: 839, newPrice: 600, images: ['/rtv_eliston.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '174.3×56.1×41.5 cm', available: true },
  { id: 'falam-polka', name: 'Falam Półka', fullName: 'Półka Falam', category: 'rtv', categoryLabel: 'RTV i Meble', oldPrice: 259, newPrice: 180, images: ['/falam_półka.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '174.1×22×21 cm', available: true },
  { id: 'kassel-komoda', name: 'Kassel Komoda', fullName: 'Komoda Kassel', category: 'rtv', categoryLabel: 'RTV i Meble', oldPrice: 1419, newPrice: 600, images: ['/komoda-kassel.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '150×90×41 cm', available: true },
  { id: 'falam-witryna', name: 'Falam Witryna + oświetlenie', fullName: 'Witryna Falam z Oświetleniem', category: 'rtv', categoryLabel: 'RTV i Meble', oldPrice: 1799, newPrice: 1100, images: ['/witryna_falam.jpg'], description: 'Opis produktu pojawi się wkrótce.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '99.4×167.6×42 cm', available: true },
  // KUCHNIE
  { id: 'rustica-kuchnia', name: 'Rustica Lakier Mat', fullName: 'Meble Kuchenne Rustica Lakier Mat', category: 'kuchnie', categoryLabel: 'Kuchnie', oldPrice: 19800, newPrice: 8900, images: ['/kuchnia-rustica-lakier-mat.jpg'], description: 'Zabudowa kuchenna z lakierem matowym. Wymiary ekspozycji: 184×329 cm.', flaws: [], badge: 'Wyprzedaż', badgeClass: 'badge-expo', dimensions: '184×329 cm', available: true },
]

export const categories = [
  { id: 'wszystkie', label: 'Wszystkie' },
  { id: 'narozniki', label: 'Narożniki' },
  { id: 'sofy', label: 'Sofy' },
  { id: 'wersalki', label: 'Wersalki' },
  { id: 'lezanki', label: 'Leżanki' },
  { id: 'fotele', label: 'Fotele' },
  { id: 'krzesla', label: 'Krzesła' },
  { id: 'stoly', label: 'Stoły' },
  { id: 'stoliki-i-lawy', label: 'Stoliki i Ławy' },
  { id: 'lozka', label: 'Łóżka' },
  { id: 'materace', label: 'Materace' },
  { id: 'zestawy', label: 'Zestawy' },
  { id: 'pufy', label: 'Pufy' },
  { id: 'agd', label: 'AGD' },
  { id: 'rtv', label: 'RTV i Meble' },
  { id: 'kuchnie', label: 'Kuchnie' },
]

export function formatPrice(price: number): string {
  if (price === 0) return 'Cena na zapytanie'
  return price.toLocaleString('pl-PL') + ' zł'
}

export function calcDiscount(oldPrice: number, newPrice: number): string {
  if (oldPrice === 0) return ''
  return '-' + Math.round((1 - newPrice / oldPrice) * 100) + '%'
}