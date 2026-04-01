import ProductCard from './ProductCard';
import Cart from './Cart';

const ProductSection = ({
  products,
  cartItems,
  activeTab,
  setActiveTab,
  onAddToCart,
  onRemoveFromCart,
  onCheckout,
}) => {
  return (
    <section id="products" style={{ padding: '4rem 0 5rem', background: '#f9fafb' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#111827', marginBottom: '0.75rem' }}>
            Premium Digital Tools
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '36rem', margin: '0 auto' }}>
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>
        </div>

        {/* Bordered Container */}
        <div style={{
          border: '1px solid #e5e7eb',
          borderRadius: '1.5rem',
          padding: '2.5rem',
          background: '#ffffff',
        }}>
          {/* Toggle Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <button
              onClick={() => setActiveTab('products')}
              className={activeTab === 'products' ? 'btn-gradient' : ''}
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'products' ? 'var(--gradient-primary)' : 'transparent',
                color: activeTab === 'products' ? '#ffffff' : '#6b7280',
                boxShadow: activeTab === 'products' ? '0 4px 12px rgba(124, 58, 237, 0.3)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={activeTab === 'cart' ? 'btn-gradient' : ''}
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'cart' ? 'var(--gradient-primary)' : 'transparent',
                color: activeTab === 'cart' ? '#ffffff' : '#6b7280',
                boxShadow: activeTab === 'cart' ? '0 4px 12px rgba(124, 58, 237, 0.3)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              Cart {cartItems.length > 0 ? `(${cartItems.length})` : '(0)'}
            </button>
          </div>

          {/* Content */}
          {activeTab === 'products' ? (
            <div className="section-fade" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  isInCart={cartItems.some((item) => item.id === product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="section-fade" style={{ maxWidth: '40rem', margin: '0 auto' }}>
              <Cart
                cartItems={cartItems}
                onRemoveFromCart={onRemoveFromCart}
                onCheckout={onCheckout}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
