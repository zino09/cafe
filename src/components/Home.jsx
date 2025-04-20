// filepath: [Home.jsx](http://_vscodecontentref_/0)
import React from 'react';

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div
        id="header-section"
        className="bg-cover bg-center min-h-screen text-white"
        style={{
          backgroundImage: "url('/Images/back.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#000", // Fallback color
        }}
      >
        <div className="bg-black bg-opacity-50 min-h-screen flex flex-col justify-center items-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Fresh and Hot Food Delivered in 40 Minutes
          </h1>
          <p className="text-lg md:text-xl text-center mb-6">
            Delivery from 10:00 AM to 7:00 PM | Address: 126 Gorkogo St. | Call: 8-800-100-10-20
          </p>
          <button className="bg-green-500 text-white font-bold py-3 px-6 rounded hover:bg-green-600">
            Order Now
          </button>
        </div>
      </div>

      {/* Business Lunch Section */}
      <section className="bg-gray-50 text-gray-800 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Business Lunch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Menu</h3>
              <ul className="space-y-2 text-lg">
                <li>Soup of the Day</li>
                <li>Grilled Vegetables</li>
                <li>Chicken Curry</li>
                <li>Rice or Bread</li>
                <li>Fresh Juice</li>
              </ul>
            </div>
            <div>
              <img
                src="/Images/business-lunch.jpg"
                alt="Business Lunch"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <img
                src="/Images/vege.png"
                alt="Fresh Ingredients"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Fresh Ingredients</h3>
              <p className="text-gray-600">We use only the freshest ingredients for our dishes.</p>
            </div>
            <div>
              <img
                src="/Images/chef.png"
                alt="Chef"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Expert Chefs</h3>
              <p className="text-gray-600">Our chefs are highly skilled and experienced.</p>
            </div>
            <div>
              <img
                src="/Images/delivery.png"
                alt="Delivery"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Quick Delivery</h3>
              <p className="text-gray-600">Get your food delivered in under 40 minutes.</p>
            </div>
            <div>
              <img
                src="/Images/extra-feature.png"
                alt="Customizable Orders"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Customizable Orders</h3>
              <p className="text-gray-600">Customize your meals to suit your taste and preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Taste Territory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}