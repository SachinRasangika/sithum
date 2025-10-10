import React, { useEffect, useMemo, useRef, useState } from 'react';
import './HireVehicle.css';
import 'leaflet/dist/leaflet.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';
const SUBMIT_ENDPOINT = process.env.REACT_APP_HIRE_VEHICLE_ENDPOINT || '';
const AGENCY_PHONE_E164 = '441235635749';
const AGENCY_TEL = '+44 (0) 1235 635749';

export default function HireVehicle() {
  const mapRef = useRef(null);
  const mapboxRef = useRef(null);
  const leafletRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const startMarkerRef = useRef(null);
  const endMarkerRef = useRef(null);
  const routeLayerId = 'route-line';
  const [ready, setReady] = useState(false);
  const [pickStartNext, setPickStartNext] = useState(true);
  const [start, setStart] = useState(null); // {lng, lat}
  const [end, setEnd] = useState(null);   // {lng, lat}
  const [distanceKm, setDistanceKm] = useState('');
  const [durationMin, setDurationMin] = useState('');
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [suggestFrom, setSuggestFrom] = useState([]);
  const [suggestTo, setSuggestTo] = useState([]);
  const fromBoxRef = useRef(null);
  const toBoxRef = useRef(null);
  const [form, setForm] = useState({
    fullName: '',
    contactNumber: '',
    pickupDate: '',
    pickupTime: '',
    vehicleType: 'Car',
    passengers: '',
    notes: '',
    returnTrip: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const canUseMapbox = useMemo(() => Boolean(MAPBOX_TOKEN), []);

  useEffect(() => {
    let disposed = false;
    (async () => {
      if (canUseMapbox) {
        const mapboxgl = await import('mapbox-gl');
        mapboxgl.default.accessToken = MAPBOX_TOKEN;
        mapboxRef.current = mapboxgl.default;
        if (disposed) return;
        const map = new mapboxgl.default.Map({
          container: mapRef.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [80.7718, 7.8731],
          zoom: 6.5,
        });
        map.addControl(new mapboxgl.default.NavigationControl(), 'top-right');
        map.on('load', () => setReady(true));
        map.on('click', (e) => {
          const lngLat = { lng: e.lngLat.lng, lat: e.lngLat.lat };
          if (pickStartNext) { placeStart(lngLat); setPickStartNext(false); }
          else { placeEnd(lngLat); setPickStartNext(true); }
        });
        mapInstanceRef.current = map;
      } else {
        const Lmod = await import('leaflet');
        const L = Lmod.default || Lmod;
        leafletRef.current = L;
        if (disposed) return;
        const map = L.map(mapRef.current).setView([7.8731, 80.7718], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);
        map.on('click', (e) => {
          const lngLat = { lng: e.latlng.lng, lat: e.latlng.lat };
          if (pickStartNext) { placeStart(lngLat); setPickStartNext(false); }
          else { placeEnd(lngLat); setPickStartNext(true); }
        });
        mapInstanceRef.current = map;
        setReady(true);
      }
    })();
    return () => { disposed = true; if (mapInstanceRef.current) { if (mapInstanceRef.current.remove) mapInstanceRef.current.remove(); } };
  }, [canUseMapbox, pickStartNext]);

  // Hide suggestions when clicking outside
  useEffect(() => {
    const onDoc = (e) => {
      if (fromBoxRef.current && !fromBoxRef.current.contains(e.target)) setSuggestFrom([]);
      if (toBoxRef.current && !toBoxRef.current.contains(e.target)) setSuggestTo([]);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  useEffect(() => {
    if (!start || !end || !canUseMapbox) return;
    drawRoute();
  }, [start, end, canUseMapbox]);

  function placeStart(lngLat) {
    setStart(lngLat);
    if (!mapInstanceRef.current) return;
    if (startMarkerRef.current) { if (startMarkerRef.current.remove) startMarkerRef.current.remove(); else mapInstanceRef.current.removeLayer(startMarkerRef.current); }
    if (canUseMapbox && mapboxRef.current) {
      startMarkerRef.current = new mapboxRef.current.Marker({ color: '#0077ff' }).setLngLat(lngLat).addTo(mapInstanceRef.current);
    } else if (leafletRef.current) {
      const L = leafletRef.current;
      startMarkerRef.current = L.circleMarker([lngLat.lat, lngLat.lng], { radius: 8, color: '#0077ff', fillColor: '#0077ff', fillOpacity: 1 }).addTo(mapInstanceRef.current);
    }
  }

  function placeEnd(lngLat) {
    setEnd(lngLat);
    if (!mapInstanceRef.current) return;
    if (endMarkerRef.current) { if (endMarkerRef.current.remove) endMarkerRef.current.remove(); else mapInstanceRef.current.removeLayer(endMarkerRef.current); }
    if (canUseMapbox && mapboxRef.current) {
      endMarkerRef.current = new mapboxRef.current.Marker({ color: '#00a36c' }).setLngLat(lngLat).addTo(mapInstanceRef.current);
    } else if (leafletRef.current) {
      const L = leafletRef.current;
      endMarkerRef.current = L.circleMarker([lngLat.lat, lngLat.lng], { radius: 8, color: '#00a36c', fillColor: '#00a36c', fillOpacity: 1 }).addTo(mapInstanceRef.current);
    }
  }

  // Fetch autocomplete suggestions (free Nominatim when no token)
  let suggestTimer;
  async function fetchSuggestions(query, which) {
    if (!query || query.trim().length < 2) { if (which==='from') setSuggestFrom([]); else setSuggestTo([]); return; }
    clearTimeout(suggestTimer);
    suggestTimer = setTimeout(async () => {
      if (canUseMapbox) {
        const url = new URL('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(query) + '.json');
        url.searchParams.set('access_token', MAPBOX_TOKEN);
        url.searchParams.set('limit', '6');
        url.searchParams.set('country', 'lk');
        const res = await fetch(url.toString());
        const data = await res.json();
        const items = (data.features||[]).map(f => ({ label: f.place_name, lng: f.center[0], lat: f.center[1] }));
        if (which==='from') setSuggestFrom(items); else setSuggestTo(items);
      } else {
        const url = new URL('https://nominatim.openstreetmap.org/search');
        url.searchParams.set('q', query);
        url.searchParams.set('format', 'json');
        url.searchParams.set('limit', '6');
        url.searchParams.set('countrycodes', 'lk');
        url.searchParams.set('addressdetails', '1');
        const res = await fetch(url.toString(), { headers: { 'Accept': 'application/json' } });
        const data = await res.json();
        const items = (data||[]).map(f => ({ label: f.display_name, lng: parseFloat(f.lon), lat: parseFloat(f.lat) }));
        if (which==='from') setSuggestFrom(items); else setSuggestTo(items);
      }
    }, 250);
  }

  function pickSuggestion(item, which) {
    if (which==='from') { setSearchFrom(item.label); placeStart({ lng: item.lng, lat: item.lat }); setSuggestFrom([]); }
    else { setSearchTo(item.label); placeEnd({ lng: item.lng, lat: item.lat }); setSuggestTo([]); }
    if (leafletRef.current && mapInstanceRef.current?.setView) mapInstanceRef.current.setView([item.lat, item.lng], 10);
    if (mapboxRef.current?.flyTo) mapInstanceRef.current?.flyTo({ center: [item.lng, item.lat], zoom: 10 });
  }

  async function geocode(query, which) {
    if (!query) return;
    if (canUseMapbox) {
      const url = new URL('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(query) + '.json');
      url.searchParams.set('access_token', MAPBOX_TOKEN);
      url.searchParams.set('limit', '1');
      url.searchParams.set('country', 'lk');
      const res = await fetch(url.toString());
      const data = await res.json();
      const feature = data.features?.[0];
      if (feature) {
        const [lng, lat] = feature.center;
        if (which === 'from') placeStart({ lng, lat }); else placeEnd({ lng, lat });
        mapInstanceRef.current?.flyTo({ center: [lng, lat], zoom: 10 });
      }
    } else {
      const url = new URL('https://nominatim.openstreetmap.org/search');
      url.searchParams.set('q', query);
      url.searchParams.set('format', 'json');
      url.searchParams.set('limit', '1');
      url.searchParams.set('countrycodes', 'lk');
      const res = await fetch(url.toString(), { headers: { 'Accept': 'application/json' } });
      const data = await res.json();
      const feature = data?.[0];
      if (feature) {
        const lat = parseFloat(feature.lat), lng = parseFloat(feature.lon);
        if (which === 'from') placeStart({ lng, lat }); else placeEnd({ lng, lat });
        if (leafletRef.current && mapInstanceRef.current?.setView) mapInstanceRef.current.setView([lat, lng], 10);
      }
    }
  }

  async function drawRoute() {
    const from = `${start.lng},${start.lat}`;
    const to = `${end.lng},${end.lat}`;
    if (canUseMapbox) {
      const url = new URL(`https://api.mapbox.com/directions/v5/mapbox/driving/${from};${to}`);
      url.searchParams.set('geometries', 'geojson');
      url.searchParams.set('overview', 'full');
      url.searchParams.set('access_token', MAPBOX_TOKEN);
      const res = await fetch(url.toString());
      const data = await res.json();
      const route = data.routes?.[0];
      if (!route) return;
      const km = (route.distance / 1000).toFixed(1);
      const mins = Math.round(route.duration / 60);
      setDistanceKm(km);
      setDurationMin(mins.toString());
      const map = mapInstanceRef.current;
      if (!map) return;
      const sourceId = 'route-source';
      if (!map.getSource(sourceId)) {
        map.addSource(sourceId, { type: 'geojson', data: route.geometry });
      } else {
        map.getSource(sourceId).setData(route.geometry);
      }
      if (!map.getLayer(routeLayerId)) {
        map.addLayer({ id: routeLayerId, type: 'line', source: sourceId, paint: { 'line-color': '#0ea5e9', 'line-width': 5 } });
      }
      const bounds = new mapboxRef.current.LngLatBounds();
      route.geometry.coordinates.forEach(([lng, lat]) => bounds.extend([lng, lat]));
      map.fitBounds(bounds, { padding: 50, duration: 500 });
    } else {
      const url = new URL(`https://router.project-osrm.org/route/v1/driving/${from};${to}`);
      url.searchParams.set('geometries', 'geojson');
      url.searchParams.set('overview', 'full');
      const res = await fetch(url.toString());
      const data = await res.json();
      const route = data.routes?.[0];
      if (!route) return;
      const km = (route.distance / 1000).toFixed(1);
      const mins = Math.round(route.duration / 60);
      setDistanceKm(km);
      setDurationMin(mins.toString());
      if (leafletRef.current) {
        const L = leafletRef.current;
        if (mapInstanceRef.current._routeLine) {
          mapInstanceRef.current.removeLayer(mapInstanceRef.current._routeLine);
          mapInstanceRef.current._routeLine = null;
        }
        const latlngs = route.geometry.coordinates.map(([lng, lat]) => [lat, lng]);
        const line = L.polyline(latlngs, { color: '#0ea5e9', weight: 5 }).addTo(mapInstanceRef.current);
        mapInstanceRef.current._routeLine = line;
        const bounds = L.latLngBounds(latlngs);
        mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }

  const onChange = (k) => (e) => setForm((s) => ({ ...s, [k]: k === 'returnTrip' ? e.target.checked : e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmSubmit = async () => {
    setSubmitting(true);
    const payload = {
      ...form,
      start,
      end,
      distanceKm,
      durationMin,
    };
    try {
      if (SUBMIT_ENDPOINT) {
        await fetch(SUBMIT_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      }
      setSuccess(true);
    } catch (err) {
      console.error('Submission failed', err);
      setSuccess(true);
    } finally {
      setSubmitting(false);
      setShowModal(false);
    }
  };

  const disabledSearch = false;

  return (
    <section className="hire-vehicle-page">
      <header className="hv-header">
        <h1 className="hv-title">Hire Vehicle Booking</h1>
        <p className="hv-subtitle">Plan your private vehicle hire anywhere in Sri Lanka.</p>
      </header>

      <div className="hv-map-card">
        <div className="hv-map-toolbar">
          <div className="hv-search-group hv-suggest-box" ref={fromBoxRef}>
            <input className="hv-input" type="text" placeholder="Start location" value={searchFrom}
              onChange={(e) => { setSearchFrom(e.target.value); fetchSuggestions(e.target.value, 'from'); }} />
            <button className="hv-btn" disabled={disabledSearch} onClick={() => geocode(searchFrom, 'from')}>Set Start</button>
            {suggestFrom.length > 0 && (
              <ul className="hv-suggest-list" role="listbox" aria-label="Start suggestions">
                {suggestFrom.map((s, i) => (
                  <li key={i} className="hv-suggest-item" role="option" onClick={() => pickSuggestion(s, 'from')}>{s.label}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="hv-search-group hv-suggest-box" ref={toBoxRef}>
            <input className="hv-input" type="text" placeholder="End location" value={searchTo}
              onChange={(e) => { setSearchTo(e.target.value); fetchSuggestions(e.target.value, 'to'); }} />
            <button className="hv-btn" disabled={disabledSearch} onClick={() => geocode(searchTo, 'to')}>Set End</button>
            {suggestTo.length > 0 && (
              <ul className="hv-suggest-list" role="listbox" aria-label="End suggestions">
                {suggestTo.map((s, i) => (
                  <li key={i} className="hv-suggest-item" role="option" onClick={() => pickSuggestion(s, 'to')}>{s.label}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="hv-pick-hint">{pickStartNext ? 'Click map to pick Start' : 'Click map to pick End'}</div>
        </div>
        <div ref={mapRef} className="hv-map" role="application" aria-label="Trip planning map" />
        <div className="hv-metrics">
          <div className="hv-metric"><span className="hv-metric-label">Distance</span><span className="hv-metric-value">{distanceKm ? `${distanceKm} km` : '-'}</span></div>
          <div className="hv-metric"><span className="hv-metric-label">Est. Time</span><span className="hv-metric-value">{durationMin ? `${durationMin} min` : '-'}</span></div>
        </div>
      </div>

      <form className="hv-form" onSubmit={onSubmit}>
        <div className="hv-grid">
          <label className="hv-field">Full Name<input className="hv-input" value={form.fullName} onChange={onChange('fullName')} required /></label>
          <label className="hv-field">Contact Number<input className="hv-input" value={form.contactNumber} onChange={onChange('contactNumber')} required /></label>
          <label className="hv-field">Pickup Date<input className="hv-input" type="date" value={form.pickupDate} onChange={onChange('pickupDate')} required /></label>
          <label className="hv-field">Pickup Time<input className="hv-input" type="time" value={form.pickupTime} onChange={onChange('pickupTime')} required /></label>
          <label className="hv-field">Vehicle Type
            <select className="hv-input" value={form.vehicleType} onChange={onChange('vehicleType')}>
              <option>Car</option>
              <option>Van</option>
              <option>SUV</option>
              <option>Bus</option>
            </select>
          </label>
          <label className="hv-field">Number of Passengers<input className="hv-input" type="number" min="1" max="60" value={form.passengers} onChange={onChange('passengers')} required /></label>
          <label className="hv-field hv-span-2">Additional Notes (optional)<textarea className="hv-textarea" rows="3" value={form.notes} onChange={onChange('notes')} /></label>
          <label className="hv-checkbox hv-span-2"><input type="checkbox" checked={form.returnTrip} onChange={onChange('returnTrip')} /> Need a return trip?</label>
          <label className="hv-field"><span className="hv-label-inline">Distance</span><input className="hv-input" readOnly value={distanceKm ? `${distanceKm} km` : ''} /></label>
          <label className="hv-field"><span className="hv-label-inline">Time</span><input className="hv-input" readOnly value={durationMin ? `${durationMin} min` : ''} /></label>
        </div>
        <div className="hv-actions">
          <button type="submit" className="hv-submit">Submit</button>
          <a className="hv-ghost" href={`tel:+${AGENCY_PHONE_E164}`}>Call Now</a>
          <a className="hv-whatsapp" href={`https://wa.me/${AGENCY_PHONE_E164}?text=${encodeURIComponent('Hello! I want to hire a vehicle for my Sri Lanka trip.')}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        {success && <div role="status" className="hv-success">Thank you! We’ll contact you soon.</div>}
      </form>

      {showModal && (
        <div className="hv-modal-overlay" onClick={() => setShowModal(false)} aria-hidden="true" />
      )}
      {showModal && (
        <div className="hv-modal" role="dialog" aria-modal="true" aria-label="Confirm booking">
          <h2 className="hv-modal-title">Confirm your trip</h2>
          <div className="hv-modal-body">
            <div><strong>Name:</strong> {form.fullName}</div>
            <div><strong>Contact:</strong> {form.contactNumber}</div>
            <div><strong>Pickup:</strong> {form.pickupDate} {form.pickupTime}</div>
            <div><strong>Vehicle:</strong> {form.vehicleType}</div>
            <div><strong>Passengers:</strong> {form.passengers}</div>
            <div><strong>Return trip:</strong> {form.returnTrip ? 'Yes' : 'No'}</div>
            <div><strong>Distance:</strong> {distanceKm ? `${distanceKm} km` : '-'}</div>
            <div><strong>Time:</strong> {durationMin ? `${durationMin} min` : '-'}</div>
          </div>
          <div className="hv-modal-actions">
            <button className="hv-btn" onClick={() => setShowModal(false)}>Edit</button>
            <button className="hv-submit" onClick={confirmSubmit} disabled={submitting}>{submitting ? 'Submitting…' : 'Confirm & Submit'}</button>
          </div>
        </div>
      )}
    </section>
  );
}
