import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const serandibLogoUrl = 'https://cdn.builder.io/api/v1/image/assets%2Fccb662a545884d03888f6c4633f5f1ff%2F2c4028cccd904bb8bf0bb31196ab0f23?format=webp&width=800';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('USD');
  const drawerRef = useRef(null);
  const langRef = useRef(null);
  const currRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setLanguageOpen(false);
        setCurrencyOpen(false);
      }
    };
    const onOpenMobileMenu = () => setMenuOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-mobile-menu', onOpenMobileMenu);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-mobile-menu', onOpenMobileMenu);
    };
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (languageOpen && langRef.current && !langRef.current.contains(e.target)) setLanguageOpen(false);
      if (currencyOpen && currRef.current && !currRef.current.contains(e.target)) setCurrencyOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [languageOpen, currencyOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const firstFocusable = drawerRef.current?.querySelector('a,button');
    firstFocusable?.focus();
  }, [menuOpen]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (menuOpen) {
      const prevHtmlOverflow = html.style.overflow;
      const prevBodyOverflow = body.style.overflow;
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
      return () => {
        html.style.overflow = prevHtmlOverflow;
        body.style.overflow = prevBodyOverflow;
      };
    }
  }, [menuOpen]);

  return (
    <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
      <div className="navbar-top">
        <div className="navbar-top-content">
          <div className="navbar-left">

            <div className="logo-container">
              <div className="logo-icons" aria-hidden="true">
                <svg className="logo-icon" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_103_911)"><path d="M0.354492 9.20664C1.72357 9.01388 3.10387 8.8934 4.47296 8.72474C5.84203 8.55607 7.22233 8.47173 8.59142 8.37536C9.95801 8.1571 11.3406 8.07643 12.7211 8.1344C14.1372 8.26208 15.5263 8.62376 16.8395 9.20664V9.48374C15.5263 10.0666 14.1372 10.4283 12.7211 10.556C11.3406 10.614 9.95801 10.5333 8.59142 10.315C7.22233 10.2186 5.85326 10.0982 4.47296 9.9656C3.09265 9.8331 1.72357 9.67653 0.354492 9.48374L0.354492 9.20664Z" fill="#030D34"/><path d="M14.124 17.4456C14.4383 16.8553 14.7973 16.3011 15.134 15.7349C15.4707 15.1687 15.8523 14.6265 16.2562 14.0964C16.6602 13.5662 16.8734 12.8916 17.3784 12.5422C17.9854 12.1398 18.685 11.927 19.3984 11.9277L19.5442 12.0964C19.5372 12.8623 19.3185 13.6087 18.9159 14.2409C18.5904 14.8313 17.9507 15.0602 17.4457 15.4457C16.9408 15.8312 16.4246 16.2048 15.8971 16.5662C15.3697 16.9276 14.831 17.277 14.2587 17.6023L14.124 17.4456Z" fill="#030D34"/><path d="M14.3485 0.870117C14.9096 1.20745 15.4146 1.59298 15.9532 1.95441C16.4919 2.31585 16.9745 2.72547 17.4682 3.15919C17.962 3.59291 18.5905 3.82182 18.9159 4.36396C19.3005 5.01098 19.4995 5.76509 19.4882 6.53255L19.3311 6.68917C18.6171 6.68528 17.921 6.45013 17.3336 6.0145C16.7837 5.66512 16.5704 4.9784 16.2113 4.43624C15.8522 3.8941 15.4932 3.3399 15.1565 2.77366C14.8198 2.20741 14.4943 1.62912 14.1914 1.02674L14.3485 0.870117Z" fill="#030D34"/></g><defs><clipPath id="clip0_103_911"><rect width="19.19" height="17.4455" fill="white" transform="translate(0.354492 0.869141)"/></clipPath></defs></svg>
                <svg className="logo-icon" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_103_917)"><path d="M19.7244 9.26596C18.3552 9.45872 16.975 9.5792 15.6058 9.74783C14.2368 9.91653 12.8565 10.0009 11.4874 10.0973C10.1208 10.3155 8.73827 10.3962 7.35773 10.3382C5.94168 10.2105 4.55249 9.84884 3.23926 9.26596V8.98886C4.55249 8.40598 5.94168 8.04431 7.35773 7.91663C8.73827 7.85866 10.1208 7.93932 11.4874 8.15758C12.8565 8.25396 14.2256 8.37444 15.6058 8.50696C16.9862 8.63948 18.3552 8.79611 19.7244 8.98886V9.26596Z" fill="#030D34"/><path d="M5.95437 1.02674C5.64015 1.61707 5.28105 2.17126 4.94439 2.73751C4.60774 3.30374 4.22619 3.8459 3.8222 4.37599C3.41821 4.90609 3.20499 5.58076 2.70001 5.93014C2.09297 6.33253 1.39349 6.5453 0.680066 6.54458L0.53418 6.37591C0.541236 5.61004 0.759956 4.86367 1.16261 4.23141C1.48804 3.64109 2.12769 3.41218 2.63268 3.02665C3.13767 2.64112 3.65387 2.26765 4.1813 1.90621C4.70873 1.54479 5.24738 1.1954 5.81971 0.870117L5.95437 1.02674Z" fill="#030D34"/><path d="M5.72999 17.6024C5.16889 17.265 4.6639 16.8795 4.12524 16.5181C3.58658 16.1566 3.10404 15.747 2.61027 15.3133C2.1165 14.8795 1.48806 14.6506 1.16262 14.1084C0.777986 13.4615 0.578966 12.7073 0.590302 11.9399L0.747411 11.7832C1.46133 11.7871 2.15753 12.0222 2.74493 12.4579C3.29481 12.8073 3.50803 13.494 3.86713 14.0362C4.22624 14.5783 4.58534 15.1326 4.92201 15.6987C5.25867 16.265 5.58411 16.8433 5.8871 17.4457L5.72999 17.6024Z" fill="#030D34"/></g><defs><clipPath id="clip0_103_917"><rect width="19.19" height="17.4455" fill="white" transform="translate(0.53418 0.869141)"/></clipPath></defs></svg>
              </div>
              <Link to="/" className="brand-lockup" aria-label="Serandib home">
                <img
                  src={serandibLogoUrl}
                  alt="Serandib Tours logo"
                  className="main-logo"
                />
                <span className="brand-word">Serandib</span>
              </Link>
            </div>
          </div>

          <div className="navbar-right">
            <div className="pill-select-group">
              <div className={`pill-select${languageOpen ? ' is-open' : ''}`} ref={langRef}>
                <button
                  className="pill-trigger"
                  aria-haspopup="true"
                  aria-expanded={languageOpen}
                  aria-label={`Language: ${language}`}
                  onClick={() => setLanguageOpen((v) => !v)}
                >
                  <span className="pill-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#030922" strokeWidth="1.6"/>
                      <path d="M3 12H21" stroke="#030922" strokeWidth="1.6"/>
                      <path d="M12 3C14.4853 5.95539 15.8275 8.9777 15.9998 12C15.8275 15.0223 14.4853 18.0446 12 21C9.51471 18.0446 8.17251 15.0223 8.0002 12C8.17251 8.9777 9.51471 5.95539 12 3Z" stroke="#030922" strokeWidth="1.6"/>
                    </svg>
                  </span>
                  <span className="pill-caret" aria-hidden="true">▾</span>
                </button>
                <ul className="pill-menu" role="menu" aria-label="Language">
                  {['EN','FR','DE'].map((opt) => (
                    <li key={opt}>
                      <button
                        className={`pill-option${language === opt ? ' is-active' : ''}`}
                        role="menuitemradio"
                        aria-checked={language === opt}
                        onClick={() => { setLanguage(opt); setLanguageOpen(false); }}
                      >{opt}</button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`pill-select${currencyOpen ? ' is-open' : ''}`} ref={currRef}>
                <button
                  className="pill-trigger"
                  aria-haspopup="true"
                  aria-expanded={currencyOpen}
                  aria-label={`Currency: ${currency}`}
                  onClick={() => setCurrencyOpen((v) => !v)}
                >
                  <span className="pill-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4C8.68629 4 6 6.23858 6 9C6 11.7614 8.68629 14 12 14C15.3137 14 18 11.7614 18 9" stroke="#030922" strokeWidth="1.6" strokeLinecap="round"/>
                      <path d="M12 2V22" stroke="#030922" strokeWidth="1.6" strokeLinecap="round"/>
                      <path d="M8 18H16" stroke="#030922" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="pill-caret" aria-hidden="true">▾</span>
                </button>
                <ul className="pill-menu" role="menu" aria-label="Currency">
                  {['USD','EUR','LKR','GBP'].map((opt) => (
                    <li key={opt}>
                      <button
                        className={`pill-option${currency === opt ? ' is-active' : ''}`}
                        role="menuitemradio"
                        aria-checked={currency === opt}
                        onClick={() => { setCurrency(opt); setCurrencyOpen(false); }}
                      >{opt}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-bottom">
        <div className="navbar-bottom-content">
          <div className="nav-links" role="menubar">
            <Link className="nav-item" to="/" role="menuitem"><span>Home</span></Link>
            <Link className="nav-item" to="/about" role="menuitem"><span>About</span></Link>
            <Link className="nav-item" to="/packages" role="menuitem"><span>Tour Packages</span></Link>
            <Link className="nav-item" to="/sri-lanka-stay" role="menuitem"><span>Sri Lanka Stays</span></Link>
            <Link className="nav-item" to="/hire-vehicle" role="menuitem"><span>Hire a Vehicle</span></Link>
            <Link className="nav-item" to="/contact" role="menuitem"><span>Contact</span></Link>
          </div>
        </div>
      </div>

      <div className={`navbar-overlay${menuOpen ? ' is-visible' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden={!menuOpen} />

      <aside id="mobile-drawer" ref={drawerRef} className={`mobile-drawer${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="drawer-header">
          <span className="drawer-title">Menu</span>
          <button className="drawer-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <nav className="drawer-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/packages" onClick={() => setMenuOpen(false)}>Tour Packages</Link>
          <Link to="/sri-lanka-stay" onClick={() => setMenuOpen(false)}>Sri Lanka Stays</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/hire-vehicle" onClick={() => setMenuOpen(false)}>Hire a Vehicle</Link>
        </nav>
        <div className="drawer-controls">
          <div className="drawer-select-group">
            <label className="drawer-select-label" htmlFor="drawer-language">Language</label>
            <select
              id="drawer-language"
              className="drawer-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {['EN','FR','DE'].map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
            </select>
          </div>
          <div className="drawer-select-group">
            <label className="drawer-select-label" htmlFor="drawer-currency">Currency</label>
            <select
              id="drawer-currency"
              className="drawer-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {['USD','EUR','LKR','GBP'].map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
            </select>
          </div>
        </div>
      </aside>
    </nav>
  );
}
