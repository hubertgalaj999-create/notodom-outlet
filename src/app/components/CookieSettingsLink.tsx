'use client'

import { openCookieSettings } from './consent'

export default function CookieSettingsLink({ style }: { style?: React.CSSProperties }) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      style={{
        background: 'none', border: 'none', padding: 0, cursor: 'pointer',
        font: 'inherit', color: 'inherit', textAlign: 'left', ...style,
      }}
    >
      Ustawienia cookies
    </button>
  )
}
