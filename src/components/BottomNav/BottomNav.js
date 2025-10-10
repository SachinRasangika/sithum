import React from 'react';
import './BottomNav.css';

export default function BottomNav() {
  const handleClick = () => {
    window.dispatchEvent(new Event('open-mobile-menu'));
  };

  return (
    <nav className="bottom-fab" aria-label="Mobile Navigation">
      <button
        className="fab-button"
        aria-controls="mobile-drawer"
        aria-label="Open menu"
        onClick={handleClick}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"></path>
        </svg>
      </button>
    </nav>
  );
}
