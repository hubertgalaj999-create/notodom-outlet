import type { Metadata } from 'next'
import HomeClient from './HomeClient'

const title = 'Outlet mebli notoDOM Zielona Góra – fotele, narożniki, sofy'
const description =
  'Outlet notoDOM w Zielonej Górze: fotele, narożniki, sofy, materace i łóżka z ekspozycji w obniżonych cenach. Pojedyncze sztuki – sprawdź aktualną ofertę.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'notoDOM Outlet',
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function HomePage() {
  return <HomeClient />
}
