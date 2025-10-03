import React from 'react';
import './Footer.css';
import sithumaWordmark from '../../assets/sithuma-wordmark.svg';

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img src={sithumaWordmark} alt="Sithuma Travel logo" className="footer-logo-image" />
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider-top"></div>

        {/* Main Navigation */}
        <nav className="footer-nav-main" aria-label="Footer Navigation">
          <a href="/destinations" className="footer-nav-link">Destinations</a>
          <a href="/inspiration" className="footer-nav-link">Inspiration</a>
          <a href="/about" className="footer-nav-link">About Us</a>
          <a href="/why-us" className="footer-nav-link">Why Us</a>
          <a href="/contact" className="footer-nav-link">Contact Us</a>
          <a href="/journal" className="footer-nav-link">Journal</a>
        </nav>

        {/* Secondary Navigation */}
        <nav className="footer-nav-secondary" aria-label="Secondary Footer Navigation">
          <a href="/booking-conditions" className="footer-nav-link">Booking Conditions</a>
          <a href="/travel-insurance" className="footer-nav-link">Travel Insurance</a>
          <a href="/pre-departure-info" className="footer-nav-link">Pre-Departure Info</a>
        </nav>

        {/* Top Pages Section */}
        <div className="footer-section-label">Top Pages</div>

        <nav className="footer-nav-pages" aria-label="Top Pages Navigation">
          <a href="/safari-honeymoons" className="footer-nav-link">Sri Lanka Honeymoons</a>
          <a href="/safari-beach-honeymoons" className="footer-nav-link">Sri Lanka &amp; Beach</a>
          <a href="/family-safaris" className="footer-nav-link">Family Tours Sri Lanka</a>
          <a href="/luxury-safaris" className="footer-nav-link">Luxury Sri Lanka Tours</a>
        </nav>

        {/* Divider */}
        <div className="footer-divider-middle"></div>

        {/* Contact Section */}
        <div className="footer-contact-section">
          <div className="footer-contact-call">
            <div className="footer-contact-label">Call us</div>
            <a href="tel:+441235635749" className="footer-contact-phone">+44 (0) 1235 635749</a>
          </div>

          <div className="footer-contact-divider"></div>

          <div className="footer-contact-email">
            <div className="footer-contact-label">Email Us</div>
            <a href="mailto:hello@sithuma.travel" className="footer-contact-email-link">hello@sithuma.travel</a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider-bottom"></div>

        {/* Social Media */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_facebook)">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.364258 8.27514C0.364258 12.2525 3.25293 15.5598 7.03093 16.2305V10.4525H5.03093V8.23047H7.03093V6.45247C7.03093 4.45247 8.31959 3.3418 10.1423 3.3418C10.7196 3.3418 11.3423 3.43047 11.9196 3.51914V5.5638H10.8976C9.91959 5.5638 9.69759 6.05247 9.69759 6.67514V8.23047H11.831L11.4756 10.4525H9.69759V16.2305C13.4756 15.5598 16.3643 12.2532 16.3643 8.27514C16.3643 3.85047 12.7643 0.230469 8.36426 0.230469C3.96426 0.230469 0.364258 3.85047 0.364258 8.27514Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_facebook">
                  <rect width="16" height="16" fill="white" transform="translate(0.364258 0.230469)" />
                </clipPath>
              </defs>
            </svg>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_instagram)">
                <path d="M4.63845 0.230469C2.50512 0.230469 0.745117 1.99047 0.745117 4.1238V12.3372C0.745117 14.4705 2.50512 16.2305 4.63845 16.2305H12.8518C14.9851 16.2305 16.7451 14.4705 16.7451 12.3372V4.1238C16.7451 1.99047 14.9851 0.230469 12.8518 0.230469H4.63845ZM4.63845 1.61714H12.8518C14.2384 1.61714 15.3584 2.73714 15.3584 4.1238V12.3372C15.3584 13.7238 14.2384 14.8438 12.8518 14.8438H4.63845C3.25179 14.8438 2.13179 13.7238 2.13179 12.3372V4.1238C2.13179 2.73714 3.25179 1.61714 4.63845 1.61714ZM13.3318 2.95047C12.8518 2.95047 12.4251 3.37714 12.4251 3.85714C12.4251 4.33714 12.8518 4.7638 13.3318 4.7638C13.8118 4.7638 14.2384 4.33714 14.2384 3.85714C14.2384 3.37714 13.8118 2.95047 13.3318 2.95047ZM8.74512 4.33714C6.61179 4.33714 4.85179 6.09714 4.85179 8.23047C4.85179 10.3638 6.61179 12.1238 8.74512 12.1238C10.8784 12.1238 12.6384 10.3638 12.6384 8.23047C12.6384 6.09714 10.8784 4.33714 8.74512 4.33714ZM8.74512 5.7238C10.1318 5.7238 11.2518 6.8438 11.2518 8.23047C11.2518 9.61714 10.1318 10.7372 8.74512 10.7372C7.35845 10.7372 6.23845 9.61714 6.23845 8.23047C6.23845 6.8438 7.35845 5.7238 8.74512 5.7238Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_instagram">
                  <rect width="16" height="16" fill="white" transform="translate(0.745117 0.230469)" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        {/* Bottom Links */}
        <div className="footer-bottom">
          <a href="/cookies" className="footer-bottom-link">Cookies</a>
          <div className="footer-copyright">©2025 Sithuma Travel</div>
          <a href="/privacy" className="footer-bottom-link">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
