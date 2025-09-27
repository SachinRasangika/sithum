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
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function HomePage() {
  return (
    <>
      <HeroBanner />
      <About />
      <SafariBeach />
      <OurWorlds />
      <SafariCelebrate />
      <OurService />
      <Packages />
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
