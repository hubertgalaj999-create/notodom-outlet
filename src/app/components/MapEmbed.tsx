'use client'

import { useState } from 'react'

const MAP_SRC = 'https://www.google.com/maps?q=ul.+Sienkiewicza+9,+Zielona+Góra&output=embed'

// Mapa Google ładowana dopiero po kliknięciu – wcześniej przeglądarka nie łączy się z Google.
export default function MapEmbed() {
  const [show, setShow] = useState(false)

  if (show) {
    return (
      <iframe
        src={MAP_SRC}
        title="Mapa dojazdu: ul. Sienkiewicza 9, Zielona Góra"
        width="100%"
        height="220"
        style={{ border: 0, display: 'block' }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <div style={{
      height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: '12px', padding: '16px', textAlign: 'center', background: 'rgba(255,255,255,.04)',
    }}>
      <button
        type="button"
        onClick={() => setShow(true)}
        style={{
          minHeight: '44px', padding: '12px 24px', borderRadius: '2px', cursor: 'pointer',
          background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.4)',
          fontSize: '14px', fontWeight: 600, letterSpacing: '.04em', fontFamily: 'inherit',
        }}
      >
        📍 Pokaż mapę
      </button>
      <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', margin: 0 }}>
        Po kliknięciu przeglądarka połączy się z serwerami Google (Mapy Google).
      </p>
    </div>
  )
}
