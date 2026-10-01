import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { products, formatPrice, calcDiscount } from '../../data/products'
import { productTitle, productDescription } from '../../lib/seo'
import ProductGallery from './ProductGallery'
import CookieSettingsLink from '../../components/CookieSettingsLink'

type Params = { params: { id: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return products.map(p => ({ id: p.id }))
}

export function generateMetadata({ params }: Params): Metadata {
  const product = products.find(p => p.id === params.id)
  if (!product) return {}

  const title = productTitle(product)
  const description = productDescription(product)
  const url = `/produkt/${product.id}`

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
    ...(product.available ? {} : { robots: { index: false, follow: true } }),
  }
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

export default function ProductPage({ params }: Params) {
  const product = products.find(p => p.id === params.id)
  if (!product) notFound()

  const sold = !product.available
  const discount = calcDiscount(product.oldPrice, product.newPrice)
  const similar = sold
    ? products.filter(p => p.available && p.category === product.category && p.id !== product.id).slice(0, 3)
    : []

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>

      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="logo">notoDOM <em>Outlet</em></a>
          <nav className="nav-links">
            <a href="/#kategorie">Salon</a>
            <a href="/#kategorie">Jadalnia</a>
            <a href="/#kategorie">Sypialnia</a>
            <a href="/#kontakt" className="nav-cta">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div style={{ background: 'var(--cream-light)', borderBottom: '1px solid rgba(138,130,120,.12)', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--stone)' }}>
          <a href="/" style={{ color: 'var(--stone)', transition: 'color .2s' }}>Strona główna</a>
          <span>›</span>
          <a href="/#okazje" style={{ color: 'var(--stone)' }}>Okazje</a>
          <span>›</span>
          <span style={{ color: 'var(--charcoal)' }}>{product.fullName}</span>
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="container" style={{ paddingTop: '28px' }}>
        <a
          href="/#okazje"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontSize: '13px', fontWeight: 500, color: 'var(--stone)',
            transition: 'color .2s', letterSpacing: '.02em',
          }}
        >
          <BackIcon /> Wróć do oferty
        </a>
      </div>

      {/* MAIN CONTENT */}
      <div className="container" style={{ padding: '32px 24px 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}>

          <ProductGallery
            images={product.images}
            alt={product.fullName}
            badge={sold ? 'Sprzedane' : product.badge}
            badgeClass={sold ? 'badge-expo' : product.badgeClass}
          />

          {/* DETAILS */}
          <div>
            <div style={{ marginBottom: '8px' }}>
              <span style={{
                fontSize: '11px', fontWeight: 600, letterSpacing: '.1em',
                textTransform: 'uppercase', color: 'var(--gold)',
              }}>
                {product.categoryLabel} · Model poekspozycyjny
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400, lineHeight: 1.15,
              color: 'var(--charcoal)', marginBottom: '24px',
            }}>
              {product.fullName}
            </h1>

            {sold ? (
              <>
                {/* SOLD BANNER */}
                <div role="status" style={{
                  background: 'var(--charcoal)', color: '#fff',
                  borderRadius: '4px', padding: '20px 24px', marginBottom: '24px',
                }}>
                  <div style={{
                    fontSize: '14px', fontWeight: 700, letterSpacing: '.12em',
                    textTransform: 'uppercase', marginBottom: '6px',
                  }}>
                    Sprzedane
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,.75)' }}>
                    Ten egzemplarz znalazł już nowego właściciela.{' '}
                    {similar.length > 0 ? 'Zobacz podobne meble dostępne teraz w outlecie.' : 'Zobacz meble dostępne teraz w outlecie.'}
                  </p>
                </div>

                <a href="/#okazje" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Zobacz aktualną ofertę <ArrowIcon />
                </a>
              </>
            ) : (
              <>
                {product.dimensions && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(138,130,120,.1)', padding: '6px 14px',
                    borderRadius: '2px', marginBottom: '24px',
                    fontSize: '13px', color: 'var(--stone)',
                  }}>
                    📐 {product.dimensions}
                  </div>
                )}

                {/* PRICING */}
                <div style={{
                  background: '#fff', borderRadius: '4px', padding: '24px',
                  boxShadow: '0 2px 16px rgba(0,0,0,.06)', marginBottom: '24px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '15px', color: 'var(--stone)', textDecoration: 'line-through' }}>
                      {formatPrice(product.oldPrice)}
                    </span>
                    <span style={{
                      background: 'var(--red)', color: '#fff',
                      fontSize: '12px', fontWeight: 700, padding: '3px 8px',
                      borderRadius: '2px', letterSpacing: '.04em',
                    }}>
                      {discount}
                    </span>
                  </div>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2.6rem', fontWeight: 500,
                    color: 'var(--charcoal)', lineHeight: 1,
                  }}>
                    {formatPrice(product.newPrice)}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--stone)', marginTop: '8px' }}>
                    Najniższa cena z 30 dni przed obniżką
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{
                    fontSize: '13px', fontWeight: 600, letterSpacing: '.06em',
                    textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '12px',
                  }}>
                    Opis produktu
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--charcoal)' }}>
                    {product.description}
                  </p>
                </div>

                {/* FLAWS */}
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{
                    fontSize: '13px', fontWeight: 600, letterSpacing: '.06em',
                    textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '12px',
                  }}>
                    Stan i ewentualne wady
                  </h3>
                  {product.flaws.length === 0 ? (
                    <div style={{
                      background: 'rgba(46,125,86,.08)', border: '1px solid rgba(46,125,86,.2)',
                      borderRadius: '3px', padding: '14px 16px',
                      fontSize: '14px', color: 'var(--green)',
                    }}>
                      ✓ Informacje o stanie produktu pojawią się wkrótce
                    </div>
                  ) : (
                    <ul style={{ paddingLeft: '16px' }}>
                      {product.flaws.map((flaw, i) => (
                        <li key={i} style={{ fontSize: '14px', color: 'var(--charcoal)', marginBottom: '6px', lineHeight: 1.5 }}>
                          {flaw}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* CTA BUTTONS */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a
                    href="tel:+48887535955"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                      background: 'var(--charcoal)', color: '#fff',
                      padding: '16px 24px', borderRadius: '2px',
                      fontSize: '14px', fontWeight: 600, letterSpacing: '.04em',
                      textTransform: 'uppercase', transition: 'background .3s',
                    }}
                  >
                    <PhoneIcon /> Zadzwoń i zarezerwuj
                  </a>
                  <a
                    href="mailto:outlet@notodom.pl"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                      background: 'transparent', color: 'var(--charcoal)',
                      padding: '15px 24px', borderRadius: '2px',
                      fontSize: '14px', fontWeight: 500, letterSpacing: '.04em',
                      border: '1px solid rgba(28,28,30,.2)', transition: 'all .3s',
                    }}
                  >
                    <MailIcon /> Zapytaj e-mailem
                  </a>
                </div>

                {/* TRUST */}
                <div style={{
                  display: 'flex', gap: '16px', marginTop: '24px',
                  paddingTop: '24px', borderTop: '1px solid rgba(138,130,120,.15)',
                  flexWrap: 'wrap',
                }}>
                  {['🚚 Własny transport', '📍 Odbiór osobisty', '🤝 Kontakt bezpośredni'].map(item => (
                    <span key={item} style={{ fontSize: '12px', color: 'var(--stone)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* SIMILAR (tylko dla sprzedanych) */}
        {sold && similar.length > 0 && (
          <section style={{ marginTop: '72px' }}>
            <span className="section-label">{product.categoryLabel}</span>
            <h2 className="section-title">Podobne, dostępne od ręki</h2>
            <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
              {similar.map(p => (
                <a
                  key={p.id}
                  href={`/produkt/${p.id}`}
                  className="product-card"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  {p.badge && <span className={`product-badge ${p.badgeClass}`}>{p.badge}</span>}
                  <div className="product-img" style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                    <Image
                      src={p.images[0]}
                      alt={p.fullName}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="product-body">
                    <div className="product-origin">{p.categoryLabel}</div>
                    <h3 className="product-name">{p.fullName}</h3>
                    <div className="product-pricing">
                      <span className="price-old">{formatPrice(p.oldPrice)}</span>
                      <span className="price-new">{formatPrice(p.newPrice)}</span>
                      <span className="price-save">{calcDiscount(p.oldPrice, p.newPrice)}</span>
                    </div>
                    <div className="product-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      Zobacz szczegóły <ArrowIcon />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
        {sold && (
          <div style={{ marginTop: similar.length > 0 ? '40px' : '56px', textAlign: 'center' }}>
            <a href="/" style={{ color: 'var(--gold)', fontWeight: 500 }}>← Przejdź do strony głównej outletu</a>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer style={{
        background: 'var(--charcoal)', color: 'rgba(255,255,255,.6)',
        padding: '40px 0', textAlign: 'center', fontSize: '13px',
      }}>
        <div className="container">
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: '#fff', marginBottom: '8px' }}>
            notoDOM <em style={{ color: 'var(--gold)' }}>Outlet</em>
          </div>
          <p>ul. Sienkiewicza 9, Zielona Góra · 📞 887 535 955 · outlet@notodom.pl</p>
          <p style={{ marginTop: '12px', fontSize: '12px' }}>
            <a href="/polityka-prywatnosci" style={{ color: 'rgba(255,255,255,.6)' }}>Polityka prywatności</a>
            {' · '}
            <CookieSettingsLink />
          </p>
        </div>
      </footer>
    </div>
  )
}
