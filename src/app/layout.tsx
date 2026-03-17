import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="pl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
