import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProductSection from './components/ProductSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

import products from './data/products.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  const handleAddToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (alreadyInCart) {
      toast.warn(`"${product.name}" is already in your cart!`, {
        position: 'top-right',
        autoClose: 2000,
      });
      return false;
    }
    setCartItems([...cartItems, product]);
    toast.success(`"${product.name}" added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
    return true;
  };

  const handleRemoveFromCart = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    setCartItems(cartItems.filter((item) => item.id !== productId));
    if (item) {
      toast.info(`"${item.name}" removed from cart.`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setCartItems([]);
    toast.success('🎉 Checkout successful! Thank you for your purchase.', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cartItems.length} />
      <main>
        <Hero />
        <Stats />
        <ProductSection
          products={products}
          cartItems={cartItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
        <Steps />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
