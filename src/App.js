import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import About from './components/About/About';
import SafariBeach from './components/SafariBeach/SafariBeach';
import OurWorlds from './components/OurWorlds/OurWorlds';
import SafariCelebrate from './components/SafariCelebrate/SafariCelebrate';
import OurService from './components/OurService/OurService';
import SafariStyle from './components/SafariStyle/SafariStyle';
import Packages from './components/Packages/Packages';
import PackagesPage from './components/Packages/PackagesPage';
import PackageDetail from './components/PackageDetail/PackageDetail';
import ContactUs from './components/ContactUs/ContactUs';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import BottomNav from './components/BottomNav/BottomNav';
import HotelDetail from './components/HotelDetail/HotelDetail';
import SriLankaStay from './components/SriLankaStay/SriLankaStay';
import AboutPage from './components/AboutPage/AboutPage';
import HireVehicle from './components/HireVehicle/HireVehicle';

function HomePage() {
  return (
    <>
      <HeroBanner />
      <About />
      <SafariCelebrate />
      <SafariBeach />
      <OurService />
      <Packages />
      <OurWorlds />
      <SafariStyle />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <div className="navbar-fixed-spacer" />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/package/:packageId" element={<PackageDetail />} />
            <Route path="/hotel/:slug" element={<HotelDetail />} />
            <Route path="/sri-lanka-stay" element={<SriLankaStay />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/hire-vehicle" element={<HireVehicle />} />
          </Routes>
        </main>
        <div className="bottom-nav-spacer" />
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
