import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Nie znaleziono strony | outlet notoDOM' },
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="logo">notoDOM <em>Outlet</em></a>
        </div>
      </header>

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '520px' }}>
          <span className="section-label">Błąd 404</span>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, lineHeight: 1.15,
            color: 'var(--charcoal)', margin: '8px 0 16px',
          }}>
            Nie znaleziono strony
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--stone)', marginBottom: '32px' }}>
            Ta strona nie istnieje albo adres jest nieprawidłowy. Aktualne okazje znajdziesz na stronie głównej outletu.
          </p>
          <a href="/" className="btn-primary">Przejdź do strony głównej outletu</a>
        </div>
      </main>
    </div>
  )
}
