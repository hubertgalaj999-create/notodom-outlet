'use client'

import { useEffect, useRef } from 'react'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

// ═══════ TOP BAR ═══════
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

// ═══════ HEADER ═══════
function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="logo">notoDOM <em>Outlet</em></a>
        <nav className="nav-links">
          <a href="#kategorie">Salon</a>
          <a href="#kategorie">Jadalnia</a>
          <a href="#kategorie">Sypialnia</a>
          <a href="#galeria">Galeria</a>
          <a href="#kontakt" className="nav-cta">Kontakt</a>
        </nav>
        <button className="menu-toggle" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

// ═══════ HERO ═══════
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

// ═══════ TRUST ═══════
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

// ═══════ CATEGORIES ═══════
function Categories() {
  const cats = [
    { emoji: '🛋️', name: 'Salon', desc: 'Sofy, narożniki, meble RTV', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { emoji: '🍽️', name: 'Jadalnia', desc: 'Stoły, krzesła, dąb naturalny', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80' },
    { emoji: '🛏️', name: 'Sypialnia', desc: 'Łóżka, materace, szafy', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80' },
  ]

  return (
    <section className="categories" id="kategorie">
      <div className="container">
        <span className="section-label">Wybierz pomieszczenie</span>
        <h2 className="section-title">Czego dziś szukasz?</h2>
        <div className="cat-grid">
          {cats.map((cat, i) => (
            <div key={i} className={`cat-card fade-up delay-${i * 2}`}>
              <img src={cat.img} alt={cat.name} />
              <div className="cat-overlay" />
              <div className="cat-info">
                <span className="cat-emoji">{cat.emoji}</span>
                <div className="cat-name">{cat.name}</div>
                <div className="cat-desc">{cat.desc}</div>
              </div>
              <div className="cat-arrow"><ArrowIcon /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════ PRODUCTS ═══════
function Products() {
  const products = [
    {
      badge: 'Ostatnia sztuka!', badgeClass: 'badge-last',
      origin: 'Końcówka serii', name: 'Narożnik Modena z funkcją spania',
      oldPrice: '9 420 zł', newPrice: '4 800 zł', save: '-49%',
      img: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600&q=80',
    },
    {
      badge: 'Dostępne od ręki', badgeClass: 'badge-ready',
      origin: 'Z ekspozycji', name: 'Stół dębowy Bergen 180×90',
      oldPrice: '5 200 zł', newPrice: '2 490 zł', save: '-52%',
      img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80',
    },
    {
      badge: 'Z ekspozycji', badgeClass: 'badge-expo',
      origin: 'Model poekspozycyjny', name: 'Łóżko tapicerowane Velvet 160',
      oldPrice: '7 800 zł', newPrice: '3 290 zł', save: '-58%',
      img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
    },
  ]

  return (
    <section className="products" id="okazje">
      <div className="container">
        <span className="section-label">Tylko pojedyncze sztuki</span>
        <h2 className="section-title">Okazje dnia</h2>
        <div className="products-grid">
          {products.map((p, i) => (
            <div key={i} className={`product-card fade-up delay-${i * 2}`}>
              <span className={`product-badge ${p.badgeClass}`}>{p.badge}</span>
              <div className="product-img">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="product-body">
                <div className="product-origin">{p.origin}</div>
                <h3 className="product-name">{p.name}</h3>
                <div className="product-pricing">
                  <span className="price-old">{p.oldPrice}</span>
                  <span className="price-new">{p.newPrice}</span>
                  <span className="price-save">{p.save}</span>
                </div>
                <button className="product-btn">Zarezerwuj teraz</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="#" className="btn-primary btn-dark">
            Zobacz wszystkie okazje <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

// ═══════ GALLERY ═══════
function Gallery() {
  const items = [
    { img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80', tag: 'Salon · Narożnik Milano', large: true },
    { img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&q=80', tag: 'Jadalnia' },
    { img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80', tag: 'Sypialnia' },
    { img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=80', tag: 'Sofa Premium' },
    { img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80', tag: 'Krzesła tapicerowane' },
    { img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', tag: 'Komplet salonowy', large: true },
  ]

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <span className="section-label">Nasze meble u klientów</span>
        <h2 className="section-title">Galeria inspiracji</h2>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div key={i} className={`gallery-item${item.large ? ' large' : ''}`}>
              <img src={item.img} alt={item.tag} />
              <span className="gallery-tag">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════ LOGISTICS ═══════
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

// ═══════ REVIEWS ═══════
function Reviews() {
  const reviews = [
    { text: '„Kupiłam narożnik z ekspozycji za połowę ceny. Wygląda jak nowy, zero śladów użytkowania. Transport własny, panowie wnieśli na 3. piętro. Polecam!"', author: 'Katarzyna M.', date: 'Zielona Góra · 2 tygodnie temu' },
    { text: '„Stół dębowy Bergen — jakość rewelacyjna, cena śmieszna. Przyjechałem obejrzeć osobiście, od razu zabrałem. Żona zachwycona."', author: 'Marcin W.', date: 'Nowa Sól · tydzień temu' },
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

// ═══════ FOOTER ═══════
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
            <a href="#">Salon</a>
            <a href="#">Jadalnia</a>
            <a href="#">Sypialnia</a>
            <a href="#">Wszystkie okazje</a>
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
            <a href="tel:+48601654605">📞 601 654 605</a>
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

// ═══════ MAIN PAGE ═══════
export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).style.animationPlayState = 'running'
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

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
      <Categories />
      <Products />
      <Gallery />
      <Logistics />
      <Reviews />
      <Footer />
    </>
  )
}
