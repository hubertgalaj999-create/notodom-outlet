'use client'

import { useEffect, useRef, useState } from 'react'
import { GA_ID, OPEN_SETTINGS_EVENT, readConsent, saveConsent, type ConsentChoice } from './consent'

let gaLoaded = false

// gtag.js wstawiany dopiero po zgodzie. Funkcję gtag i consent default (denied)
// definiuje skrypt beforeInteractive w layout.tsx.
function loadGoogleAnalytics() {
  if (gaLoaded) return
  gaLoaded = true
  window.gtag('consent', 'update', { analytics_storage: 'granted' })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
}

function removeGaCookies() {
  const host = window.location.hostname
  const domains = ['', host, '.' + host, '.' + host.split('.').slice(-2).join('.')]
  document.cookie.split(';').map(c => c.split('=')[0].trim()).filter(n => n === '_ga' || n.startsWith('_ga_')).forEach(name => {
    domains.forEach(d => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}`
    })
  })
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false)
  const [bottom, setBottom] = useState(0)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const choice = readConsent()
    if (choice === 'granted') loadGoogleAnalytics()
    if (choice === null) setOpen(true)

    const onOpen = () => setOpen(true)
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen)
  }, [])

  // Baner stoi nad mobilnym paskiem „Zadzwoń / Trasa”, a strona dostaje dolny margines,
  // żeby baner nie zasłaniał końca treści.
  useEffect(() => {
    if (!open) {
      document.body.style.paddingBottom = ''
      return
    }
    const update = () => {
      const sticky = document.querySelector<HTMLElement>('.sticky-cta')
      const stickyH = sticky && getComputedStyle(sticky).display !== 'none' ? sticky.offsetHeight : 0
      setBottom(stickyH)
      document.body.style.paddingBottom = `${(bannerRef.current?.offsetHeight ?? 0) + stickyH}px`
    }
    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
      document.body.style.paddingBottom = ''
    }
  }, [open])

  const choose = (choice: ConsentChoice) => {
    const wasLoaded = gaLoaded
    saveConsent(choice)
    setOpen(false)
    if (choice === 'granted') {
      loadGoogleAnalytics()
    } else if (wasLoaded) {
      // Cofnięcie zgody w trakcie wizyty: blokujemy dalszy pomiar, usuwamy pliki _ga
      // i przeładowujemy stronę, żeby gtag.js nie był już załadowany.
      window.gtag('consent', 'update', { analytics_storage: 'denied' })
      removeGaCookies()
      window.location.reload()
    }
  }

  if (!open) return null

  const btn: React.CSSProperties = {
    flex: 1, minHeight: '44px', padding: '12px 20px', borderRadius: '2px',
    fontSize: '14px', fontWeight: 600, letterSpacing: '.04em', cursor: 'pointer',
    background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.6)',
    fontFamily: 'inherit',
  }

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-live="polite"
      aria-label="Zgoda na pliki cookies"
      style={{
        position: 'fixed', left: 0, right: 0, bottom: `${bottom}px`, zIndex: 300,
        background: 'var(--charcoal)', color: 'rgba(255,255,255,.85)',
        boxShadow: '0 -4px 24px rgba(0,0,0,.2)', padding: '16px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px 24px' }}>
        <p style={{ flex: '1 1 420px', fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
          Używamy Google Analytics do statystyk odwiedzin. Skrypt ładuje się tylko po Twojej zgodzie.
          Szczegóły w{' '}
          <a href="/polityka-prywatnosci" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>polityce prywatności</a>.
        </p>
        <div style={{ display: 'flex', gap: '12px', flex: '1 1 280px', maxWidth: '420px' }}>
          <button type="button" style={btn} onClick={() => choose('denied')}>Odrzucam</button>
          <button type="button" style={btn} onClick={() => choose('granted')}>Akceptuję</button>
        </div>
      </div>
    </div>
  )
}
