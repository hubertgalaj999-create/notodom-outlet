import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'notoDOM Outlet - Wyprzedaż Mebli Kuchennych i Salonowych | Zielona Góra',
  description: 'Ekskluzywne meble kuchenne, narożniki i stoły z ekspozycji. Rabaty do -70%! Sprawdź ofertę outletową notoDOM w Zielonej Górze. Własny transport i gwarancja.',
  keywords: ['outlet meblowy Zielona Góra', 'meble z ekspozycji', 'tanie kuchnie na wymiar', 'wyprzedaż mebli kuchennych', 'narożniki outlet'],
  openGraph: {
    title: 'notoDOM Outlet – Wyprzedaż Mebli Premium do -70%',
    description: 'Najlepsze okazje na meble z ekspozycji i końcówki kolekcji. Sprawdź ofertę online!',
    url: 'https://outlet.notodom.pl',
    siteName: 'notoDOM Outlet',
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
