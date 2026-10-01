'use client'

import { useState } from 'react'
import Image from 'next/image'

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
  </svg>
)

type Props = {
  images: string[]
  alt: string
  badge?: string
  badgeClass?: string
}

export default function ProductGallery({ images, alt, badge, badgeClass }: Props) {
  const [activeImg, setActiveImg] = useState(0)
  const [lightbox, setLightbox] = useState(false)

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
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh', width: '900px', height: '675px' }}>
            <Image
              src={images[activeImg]}
              alt={alt}
              fill
              style={{ objectFit: 'contain' }}
              sizes="90vw"
            />
          </div>
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
          <Image
            src={images[activeImg]}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'contain' }}
            priority
          />
          {badge && (
            <span className={`product-badge ${badgeClass}`} style={{ top: '16px', left: '16px' }}>
              {badge}
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
        {images.length > 1 && (
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px', flexWrap: 'wrap' }}>
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  position: 'relative',
                  width: '80px', height: '60px', borderRadius: '3px', overflow: 'hidden',
                  cursor: 'pointer', border: i === activeImg ? '2px solid var(--gold)' : '2px solid transparent',
                  transition: 'border-color .2s',
                }}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  sizes="80px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
