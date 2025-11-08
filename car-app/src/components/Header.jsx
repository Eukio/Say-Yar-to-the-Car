import React from 'react'

// Header props:
// - active: 'home' | 'preferences' | 'match'
// - onNavigate: function(page) -> sets active page
export default function Header({ active = 'home', onNavigate = () => {} }) {
  return (
    <header className="site-header">
      <div className="site-header__brand">Ignition</div>
      <nav className="site-header__nav" aria-label="Main navigation">
        <button
          className={`site-header__link ${active === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          Home
        </button>

        <button
          className={`site-header__link ${active === 'preferences' ? 'active' : ''}`}
          onClick={() => onNavigate('preferences')}
        >
          Preferences
        </button>

        <button
          className={`site-header__link ${active === 'match' ? 'active' : ''}`}
          onClick={() => onNavigate('match')}
        >
          Match
        </button>
      </nav>
    </header>
  )
}
