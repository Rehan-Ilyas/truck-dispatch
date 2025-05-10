import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Home = () => (
  <>
  
    <Hero />
    <About />
    <Services />
    <Pricing />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/box-truck" element={<ServiceDetail />} />
            <Route path="/services/dry-van" element={<ServiceDetail />} />
            <Route path="/services/reefer" element={<ServiceDetail />} />
            <Route path="/services/power-only" element={<ServiceDetail />} />
            <Route path="/services/hotshot" element={<ServiceDetail />} />
            <Route path="/services/flatbed" element={<ServiceDetail />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
