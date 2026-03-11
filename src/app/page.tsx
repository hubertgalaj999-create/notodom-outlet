'use client'

import { useEffect, useState } from 'react'
import { products, categories, formatPrice, calcDiscount } from './data/products'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <span>📍 Magazyn Zielona Góra</span>
        <span>🚚 Własny transport w woj. lubuskim</span>
        <span>⭐ Działamy nieprzerwanie od 2000 roku</span>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="logo">notoDOM <em>Outlet</em></a>
        <nav className="nav-links">
          <a href="#okazje">Narożniki</a>
          <a href="#okazje">Stoły</a>
          <a href="#okazje">Zestawy</a>
          <a href="#kontakt" className="nav-cta">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <span className="hero-badge fade-up">Outlet meblowy · Zielona Góra</span>
        <h1 className="fade-up delay-1">
          Ekskluzywne Meble<br />
          w <strong>Niewyobrażalnych Cenach.</strong><br />
          Prosto z Magazynu.
        </h1>
        <p className="hero-sub fade-up delay-2">
          Końcówki kolekcji i modele poekspozycyjne od sprawdzonych producentów.
          Wykorzystujemy nasze 25-letnie doświadczenie na rynku, by dostarczyć Ci
          jakość premium z rabatami do -70%.
        </p>
        <a href="#okazje" className="btn-primary fade-up delay-3">
          Zobacz dzisiejsze okazje
          <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

function Trust() {
  const items = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
      title: 'Od 2000 roku na rynku',
      text: 'Znamy branżę od podszewki. Przez ćwierć wieku wyselekcjonowaliśmy dla Ciebie wyłącznie bezawaryjnych i sprawdzonych producentów.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>,
      title: 'Radykalna Szczerość',
      text: 'Nie kupujesz kota w worku. Jeśli mebel ma jakąkolwiek rysę potargową, zobaczysz ją na wyraźnym zdjęciu makro.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
      title: 'Pełna Gwarancja',
      text: 'Niska cena nie oznacza braku ochrony. Wszystkie nasze meble outletowe są w pełni użyteczne i objęte pełną opieką gwarancyjną.',
    },
  ]
  return (
    <section className="trust">
      <div className="container">
        <div className="trust-grid">
          {items.map((item, i) => (
            <div key={i} className={`trust-item fade-up delay-${i * 2}`}>
              <div className="trust-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Products() {
  const [activeCategory, setActiveCategory] = useState('wszystkie')

  const filtered = activeCategory === 'wszystkie'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section className="products" id="okazje">
      <div className="container">
        <span className="section-label">Tylko pojedyncze sztuki</span>
        <h2 className="section-title">Aktualna oferta</h2>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '9px 20px', borderRadius: '2px',
                fontSize: '13px', fontWeight: 500, letterSpacing: '.04em',
                cursor: 'pointer', transition: 'all .25s',
                border: activeCategory === cat.id ? '1px solid var(--charcoal)' : '1px solid rgba(138,130,120,.3)',
                background: activeCategory === cat.id ? 'var(--charcoal)' : 'transparent',
                color: activeCategory === cat.id ? '#fff' : 'var(--stone)',
              }}
            >
              {cat.label}
              <span style={{ marginLeft: '6px', fontSize: '11px', opacity: .6 }}>
                ({cat.id === 'wszystkie' ? products.length : products.filter(p => p.category === cat.id).length})
              </span>
            </button>
          ))}
        </div>

        <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {filtered.map((product, i) => {
            const discount = calcDiscount(product.oldPrice, product.newPrice)
            return (
              <a
                key={product.id}
                href={`/produkt/${product.id}`}
                className={`product-card fade-up delay-${(i % 3) * 2}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <span className={`product-badge ${product.badgeClass}`}>{product.badge}</span>
                <div className="product-img">
                  <img src={product.images[0]} alt={product.fullName} />
                </div>
                <div className="product-body">
                  <div className="product-origin">{product.categoryLabel}</div>
                  <h3 className="product-name">{product.fullName}</h3>
                  {product.dimensions && (
                    <div style={{ fontSize: '12px', color: 'var(--stone)', marginBottom: '8px' }}>📐 {product.dimensions}</div>
                  )}
                  <div className="product-pricing">
                    <span className="price-old">{formatPrice(product.oldPrice)}</span>
                    <span className="price-new">{formatPrice(product.newPrice)}</span>
                    <span className="price-save">{discount}</span>
                  </div>
                  <div className="product-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    Zobacz szczegóły <ArrowIcon />
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Logistics() {
  return (
    <section className="logistics">
      <div className="container">
        <span className="section-label">Wygoda na pierwszym miejscu</span>
        <h2 className="section-title">Bezpieczna dostawa lub darmowy odbiór</h2>
        <div className="logistics-grid">
          <div className="logistics-card">
            <div className="logistics-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3>Odbiór Osobisty</h3>
            <p>Zarezerwuj mebel online, przyjedź do naszego magazynu w Zielonej Górze, obejrzyj go na żywo i dopiero wtedy podejmij ostateczną decyzję. Zero ryzyka.</p>
          </div>
          <div className="logistics-card">
            <div className="logistics-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0H3m10 0h2m0 0a1 1 0 011-1V8h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V15a1 1 0 01-1 1h-1"/></svg>
            </div>
            <h3>Nasz Własny Transport</h3>
            <p>Na terenie woj. lubuskiego meble wozimy własną flotą. Żadnych zewnętrznych sortowni, rzucania paczkami i uszkodzeń w transporcie.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    { text: '„Kupiłam narożnik z ekspozycji za połowę ceny. Wygląda jak nowy, zero śladów użytkowania. Transport własny, panowie wnieśli na 3. piętro. Polecam!"', author: 'Katarzyna M.', date: 'Zielona Góra · 2 tygodnie temu' },
    { text: '„Stół — jakość rewelacyjna, cena śmieszna. Przyjechałem obejrzeć osobiście, od razu zabrałem. Żona zachwycona."', author: 'Marcin W.', date: 'Nowa Sól · tydzień temu' },
    { text: '„Trzeci raz kupuję w notoDOM Outlet. Łóżko, szafa i teraz komoda. Wszystko w idealnym stanie, a ceny 40-60% taniej niż w salonie."', author: 'Anna K.', date: 'Zielona Góra · 3 dni temu' },
  ]
  return (
    <section className="reviews">
      <div className="container">
        <span className="section-label">Co mówią klienci</span>
        <h2 className="section-title">Opinie naszych klientów</h2>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className={`review-card fade-up delay-${i * 2}`}>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">{r.text}</p>
              <div className="review-author">{r.author}</div>
              <div className="review-date">{r.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="kontakt">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">notoDOM <em>Outlet</em></div>
            <p className="footer-desc">Ekskluzywne meble outletowe w Zielonej Górze. Końcówki kolekcji, modele poekspozycyjne i wyprzedaże od sprawdzonych producentów. Działamy od 2000 roku.</p>
          </div>
          <div className="footer-col">
            <h4>Kategorie</h4>
            <a href="#okazje">Narożniki</a>
            <a href="#okazje">Stoły</a>
            <a href="#okazje">Zestawy</a>
            <a href="#okazje">Wszystkie okazje</a>
          </div>
          <div className="footer-col">
            <h4>Informacje</h4>
            <a href="#">O nas</a>
            <a href="#">Dostawa i transport</a>
            <a href="#">Gwarancja i zwroty</a>
            <a href="#">Regulamin</a>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <a href="#">📍 ul. Sienkiewicza 9, Zielona Góra</a>
            <a href="tel:+48887535955">📞 887 535 955</a>
            <a href="mailto:outlet@notodom.pl">✉️ outlet@notodom.pl</a>
            <a href="#">🕐 Pon–Pt: 9:00–17:00</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 notoDOM Outlet. Wszystkie prawa zastrzeżone.</span>
          <div className="footer-badges">
            <span>🔒 Bezpieczne płatności</span>
            <span>↩️ 14 dni na zwrot</span>
            <span>🛡️ Pełna gwarancja</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).style.animationPlayState = 'running'
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => {
      ;(el as HTMLElement).style.animationPlayState = 'paused'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Trust />
      <Products />
      <Logistics />
      <Reviews />
      <Footer />
    </>
  )
}
