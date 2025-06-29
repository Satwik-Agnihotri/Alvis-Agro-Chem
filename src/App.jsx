import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OurOffice from './components/OurOffice';
import bgImage from './assets/20250605_1330_Nature-Inspired Website Background_remix_01jwzhk9fxeywrvyyqhq9myzrc.webp';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      {/* ✅ Background Layer Fix for iOS */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Content */}
      <div className="layout-container flex flex-col flex-grow bg-transparent relative z-10">
        <Helmet>
  <title>Alvis Agro Chem | Organic Fertilizers & Plant Growth Boosters</title>
  <meta name="description" content="Alvis Agro Chem is a leading manufacturer of organic fertilizers and soil conditioners based in Lucknow. Discover Protax, Wonder Combi, Black Diamond & more." />
  <link rel="canonical" href="https://www.alvisagrochem.com/" />
  
  {/* Open Graph for sharing */}
  <meta property="og:title" content="Alvis Agro Chem" />
  <meta property="og:description" content="Explore innovative organic solutions like Gel Black Diamond, Protax, Sparkle & more." />
  <meta property="og:image" content="https://www.alvisagrochem.com/cover.jpg" />
  <meta property="og:url" content="https://www.alvisagrochem.com/" />
  <meta property="og:type" content="website" />

  {/* Mobile Meta */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Helmet>

        <Header />
        <HeroSection />
        <ProductsSection />
        <AboutUs />
        <OurOffice />
        <ContactSection bgImage={bgImage} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
