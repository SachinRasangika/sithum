import React from 'react';
import './MapContainer.css';

const DEFAULT_SRC = 'https://frozilla-design.travelmap.net';

export default function MapContainer({ src = DEFAULT_SRC, height = 550, title = 'Interactive travel map', className = '' }) {
  return (
    <div className={`map-container ${className}`} style={{ '--map-height': `${height}px` }}>
      <div className="map-embed" role="region" aria-label={title}>
        <iframe
          src={src}
          title={title}
          className="map-iframe"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <noscript>
        <div className="map-noscript">Enable JavaScript to view the interactive map.</div>
      </noscript>
    </div>
  );
}
