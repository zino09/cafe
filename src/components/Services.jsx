import React, { useState } from 'react';

export default function Services() {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  // State for menu items
  const menuItems = [
    { id: 1, name: 'Paneer Tikka', price: 250, image: '/Images/Services/paneer-tikka.jpg' },
    { id: 2, name: 'Dal Tadka', price: 180, image: '/Images/Services/dal-tadka.jpg' },
    { id: 3, name: 'Tandoori Roti', price: 40, image: '/Images/Services/tandoori-roti.jpg' },
    { id: 4, name: 'Vegetable Biryani', price: 220, image: '/Images/Services/vegetable-biryani.jpg' },
    { id: 5, name: 'Masala Dosa', price: 120, image: '/Images/Services/masala-dosa.jpg' },
    { id: 6, name: 'Idli Sambar', price: 100, image: '/Images/Services/idli-sambar.jpg' },
    { id: 7, name: 'Palak Paneer', price: 240, image: '/Images/Services/palak-paneer.jpg' },
    { id: 8, name: 'Rajma Chawal', price: 200, image: '/Images/Services/rajma-chawal.jpg' },
    { id: 9, name: 'Aloo Paratha', price: 80, image: '/Images/Services/aloo-paratha.jpg' },
    { id: 10, name: 'Chana Masala', price: 190, image: '/Images/Services/chana-masala.jpg' },
    { id: 11, name: 'Bhindi Masala', price: 180, image: '/Images/Services/bhindi-masala.jpg' },
    { id: 12, name: 'Baingan Bharta', price: 170, image: '/Images/Services/baingan-bharta.jpg' },
    { id: 13, name: 'Kadhi Pakora', price: 160, image: '/Images/Services/kadhi-pakora.jpg' },
    { id: 14, name: 'Methi Thepla', price: 90, image: '/Images/Services/methi-thepla.jpg' },
    { id: 15, name: 'Dhokla', price: 100, image: '/Images/Services/dhokla.jpg' },
    { id: 16, name: 'Poha', price: 80, image: '/Images/Services/poha.jpg' },
    { id: 17, name: 'Upma', price: 90, image: '/Images/Services/upma.jpg' },
    { id: 18, name: 'Ragi Dosa', price: 130, image: '/Images/Services/ragi-dosa.jpg' },
    { id: 19, name: 'Vegetable Pulao', price: 200, image: '/Images/Services/vegetable-pulao.jpg' },
    { id: 20, name: 'Sprouts Salad', price: 150, image: '/Images/Services/sprouts-salad.jpg' },
    { id: 21, name: 'Fruit Salad', price: 140, image: '/Images/Services/fruit-salad.jpg' },
    { id: 22, name: 'Moong Dal Chilla', price: 120, image: '/Images/Services/moong-dal-chilla.jpg' },
    { id: 23, name: 'Vegetable Soup', price: 110, image: '/Images/Services/vegetable-soup.jpg' },
    { id: 24, name: 'Tomato Soup', price: 100, image: '/Images/Services/tomato-soup.jpg' },
    { id: 25, name: 'Sweet Corn Soup', price: 120, image: '/Images/Services/sweet-corn-soup.jpg' },
    { id: 26, name: 'Rasam', price: 90, image: '/Images/Services/rasam.jpg' },
    { id: 27, name: 'Khichdi', price: 150, image: '/Images/Services/khichdi.jpg' },
    { id: 28, name: 'Paneer Bhurji', price: 220, image: '/Images/Services/paneer-bhurji.jpg' },
    { id: 29, name: 'Vegetable Curry', price: 200, image: '/Images/Services/vegetable-curry.jpg' },
    { id: 30, name: 'Cucumber Raita', price: 60, image: '/Images/Services/cucumber-raita.jpg' },
    { id: 31, name: 'Lassi', price: 80, image: '/Images/Services/lassi.jpg' },
    { id: 32, name: 'Buttermilk', price: 50, image: '/Images/Services/buttermilk.jpg' },
    { id: 33, name: 'Pav Bhaji', price: 180, image: '/Images/Services/pav-bhaji.jpg' },
    { id: 34, name: 'Vegetable Sandwich', price: 150, image: '/Images/Services/vegetable-sandwich.jpg' },
    { id: 35, name: 'Paneer Wrap', price: 200, image: '/Images/Services/paneer-wrap.jpg' },
    { id: 36, name: 'Vegetable Frankie', price: 180, image: '/Images/Services/vegetable-frankie.jpg' },
    { id: 37, name: 'Aloo Tikki', price: 100, image: '/Images/Services/aloo-tikki.jpg' },
    { id: 38, name: 'Hara Bhara Kebab', price: 120, image: '/Images/Services/hara-bhara-kebab.jpg' },
    { id: 39, name: 'Vegetable Cutlet', price: 110, image: '/Images/Services/vegetable-cutlet.jpg' },
    { id: 40, name: 'Paneer Paratha', price: 120, image: '/Images/Services/paneer-paratha.jpg' },
    { id: 41, name: 'Matar Paneer', price: 240, image: '/Images/Services/matar-paneer.jpg' },
    { id: 42, name: 'Aloo Gobi', price: 190, image: '/Images/Services/aloo-gobi.jpg' },
    { id: 43, name: 'Jeera Rice', price: 150, image: '/Images/Services/jeera-rice.jpg' },
    { id: 44, name: 'Plain Paratha', price: 50, image: '/Images/Services/plain-paratha.jpg' },
    { id: 45, name: 'Roti', price: 20, image: '/Images/Services/roti.jpg' },
    { id: 46, name: 'Gajar Halwa', price: 150, image: '/Images/Services/gajar-halwa.jpg' },
    { id: 47, name: 'Kheer', price: 140, image: '/Images/Services/kheer.jpg' },
    { id: 48, name: 'Besan Ladoo', price: 100, image: '/Images/Services/besan-ladoo.jpg' },
    { id: 49, name: 'Coconut Barfi', price: 120, image: '/Images/Services/coconut-barfi.jpg' },
    { id: 50, name: 'Rasgulla', price: 150, image: '/Images/Services/rasgulla.jpg' },
  ];

  // Function to add item to the cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to increment quantity
  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement quantity
  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div id="services" className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Our Menu</h1>

      {/* Menu Section */}
      <section className="bg-white shadow-md rounded p-6 mb-8">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Menu</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="text-center border rounded-lg p-4 shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-24 h-24 mx-auto rounded mb-2" />
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-green-600 font-bold">₹{item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-2 bg-green-500 text-white text-sm font-bold py-1 px-3 rounded hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section className="bg-white shadow-md rounded p-6 mb-8">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                    <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
                    >
                      <span className="text-lg font-bold">-</span>
                    </button>
                    <span className="w-8 text-center text-lg font-semibold text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
                    >
                      <span className="text-lg font-bold">+</span>
                    </button>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              <button className="mt-4 w-full bg-green-500 text-white text-lg font-bold py-3 px-4 rounded hover:bg-green-600">
                Place Order
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}