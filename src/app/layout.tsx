import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'notoDOM Outlet – Ekskluzywne Meble w Niewyobrażalnych Cenach | Zielona Góra',
  description: 'Końcówki kolekcji i modele poekspozycyjne od sprawdzonych producentów. Rabaty do -70%. Magazyn w Zielonej Górze, własny transport w woj. lubuskim. Działamy od 2000 roku.',
  openGraph: {
    title: 'notoDOM Outlet – Ekskluzywne Meble | Zielona Góra',
    description: 'Meble premium z rabatami do -70%. Końcówki kolekcji, modele poekspozycyjne. Magazyn Zielona Góra.',
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
