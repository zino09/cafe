import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/Home';
import ContactUs from './components/ContactUs';
import PizzaBuilder from './components/PizzaBuilder';
import Services from './components/Services'; // Import Services

function App() {
  return (
    <Router>
      <div className="bg-zinc-900 text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/services" element={<Services />} /> {/* Add Services route */}
            <Route path="/pizza" element={<PizzaBuilder />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;