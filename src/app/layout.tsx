import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import CookieBanner from './components/CookieBanner'
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
  metadataBase: new URL('https://outlet.notodom.pl'),
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
  verification: {
    other: {
      'msvalidate.01': '8B60382A17FD850F0F292151B435329C',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        {/* Tryb zgody (podstawowy): domyślnie wszystko odrzucone, bez ładowania gtag.js */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
          `}
        </Script>

        {children}

        {/* Google Analytics (GA4): gtag.js ładuje CookieBanner dopiero po zgodzie */}
        <CookieBanner />
      </body>
    </html>
  )
}