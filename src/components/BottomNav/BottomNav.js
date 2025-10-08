import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.css';

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Mobile Navigation">
      <div className="bottom-nav-inner">
        <a href="/#packages" className="bottom-nav-item" aria-label="Destinations">
          <span className="bottom-nav-label">Destinations</span>
        </a>

        <Link to="/packages" className="bottom-nav-item" aria-label="Top Packages">
          <span className="bottom-nav-label">Top Packages</span>
        </Link>

        <a href="/#about" className="bottom-nav-item" aria-label="Experiences">
          <span className="bottom-nav-label">Experiences</span>
        </a>

        <a href="/#footer" className="bottom-nav-item" aria-label="About Us">
          <span className="bottom-nav-label">About</span>
        </a>

        <Link to="/contact" className="bottom-nav-item" aria-label="Contact Us">
          <span className="bottom-nav-label">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
