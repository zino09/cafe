import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('header-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-black text-white shadow-md">
      <h1 className="text-xl font-bold text-green-500">TASTE TERRITORY</h1>
      <nav className="space-x-6">
        <button onClick={handleHomeClick} className="hover:text-green-500">
          Home
        </button>
        <Link to="/services" className="hover:text-green-500">Menu</Link> {/* Navigate to Services */}
        <Link to="/pizza" className="hover:text-green-500">Special Offers</Link>
        <Link to="/contact" className="hover:text-green-500">Contact Us</Link>
      </nav>
    </header>
  );
}