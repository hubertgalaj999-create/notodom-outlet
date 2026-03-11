'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { products, formatPrice, calcDiscount } from '../../data/products'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
  </svg>
)

export default function ProductPage() {
  const params = useParams()
  const product = products.find(p => p.id === params.id)
  const [activeImg, setActiveImg] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--cream)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', marginBottom: '16px' }}>Produkt nie znaleziony</h1>
          <a href="/" style={{ color: 'var(--gold)' }}>← Wróć do strony głównej</a>
        </div>
      </div>
    )
  }

  const discount = calcDiscount(product.oldPrice, product.newPrice)

  return (
    <>
      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,.92)',
            zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={product.images[activeImg]}
            alt={product.fullName}
            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
          />
          <button
            onClick={() => setLightbox(false)}
            style={{
              position: 'absolute', top: '24px', right: '24px',
              background: 'rgba(255,255,255,.1)', border: 'none', color: '#fff',
              width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer',
              fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
        </div>
      )}

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

            {/* GALLERY */}
            <div>
              {/* Main image */}
              <div
                style={{
                  position: 'relative', borderRadius: '4px', overflow: 'hidden',
                  background: '#fff', aspectRatio: '4/3',
                  boxShadow: '0 4px 32px rgba(0,0,0,.08)',
                  cursor: 'zoom-in',
                }}
                onClick={() => setLightbox(true)}
              >
                <img
                  src={product.images[activeImg]}
                  alt={product.fullName}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {product.badge && (
                  <span className={`product-badge ${product.badgeClass}`} style={{ top: '16px', left: '16px' }}>
                    {product.badge}
                  </span>
                )}
                <div style={{
                  position: 'absolute', bottom: '12px', right: '12px',
                  background: 'rgba(255,255,255,.9)', borderRadius: '50%',
                  width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--charcoal)',
                }}>
                  <ZoomIcon />
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
                  {product.images.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveImg(i)}
                      style={{
                        width: '80px', height: '60px', borderRadius: '3px', overflow: 'hidden',
                        cursor: 'pointer', border: i === activeImg ? '2px solid var(--gold)' : '2px solid transparent',
                        transition: 'border-color .2s',
                      }}
                    >
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

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
                {['🛡️ Pełna gwarancja', '🚚 Własny transport', '📍 Odbiór osobisty'].map(item => (
                  <span key={item} style={{ fontSize: '12px', color: 'var(--stone)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
          </div>
        </footer>
      </div>
    </>
  )
}
