import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.css';

export default function BottomNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    function onClickAway(e) {
      if (!open) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onClickAway);
    return () => document.removeEventListener('click', onClickAway);
  }, [open]);

  return (
    <nav className="bottom-fab" aria-label="Mobile Navigation">
      {open && <button className="fab-overlay" aria-hidden="true" onClick={() => setOpen(false)} />}
      <div className={`fab-menu ${open ? 'open' : ''}`} ref={menuRef} role="menu" aria-hidden={!open}>
        <Link to="/" className="fab-item" role="menuitem" onClick={() => setOpen(false)}>Home</Link>
        <a href="/#packages" className="fab-item" role="menuitem" onClick={() => setOpen(false)}>Destinations</a>
        <Link to="/packages" className="fab-item" role="menuitem" onClick={() => setOpen(false)}>Packages</Link>
        <Link to="/sri-lanka-stay" className="fab-item" role="menuitem" onClick={() => setOpen(false)}>Sri Lanka</Link>
        <a href="/#about" className="fab-item" role="menuitem" onClick={() => setOpen(false)}>Experiences</a>
        <a href="/#footer" className="fab-item" role="menuitem" onClick={() => setOpen(false)}>About</a>
        <Link to="/contact" className="fab-item" role="menuitem" onClick={() => setOpen(false)}>Contact</Link>
      </div>

      <button className="fab-button" aria-expanded={open} aria-controls="mobile-fab-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(v => !v)}>
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/></svg>
        )}
      </button>
    </nav>
  );
}
