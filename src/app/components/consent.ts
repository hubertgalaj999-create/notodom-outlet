// Wspólne stałe i pomocnicze funkcje zgody na cookies outletu.

export const GA_ID = 'G-HGZW20QJTT'
export const CONSENT_KEY = 'notodom-outlet-cookie-consent'
export const OPEN_SETTINGS_EVENT = 'outlet:cookie-settings'

export type ConsentChoice = 'granted' | 'denied'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const { choice } = JSON.parse(raw)
    return choice === 'granted' || choice === 'denied' ? choice : null
  } catch {
    return null
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, date: new Date().toISOString() }))
  } catch {
    // Brak dostępu do localStorage – wybór obowiązuje tylko do końca wizyty.
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))
}
