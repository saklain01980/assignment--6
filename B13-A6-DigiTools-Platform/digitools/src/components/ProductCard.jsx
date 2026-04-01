import { FiCheck } from 'react-icons/fi';

// Import product icons
import writingIcon from '../assets/products/writing_2327400 1.png';
import designIcon from '../assets/products/design-tool.png';
import portfolioIcon from '../assets/products/portfolio.png';
import operationIcon from '../assets/products/operation.png';
import socialMediaIcon from '../assets/products/social-media.png';

const iconMap = {
  'writing': writingIcon,
  'design-tool': designIcon,
  'portfolio': portfolioIcon,
  'operation': operationIcon,
  'social-media': socialMediaIcon,
};

const tagColors = {
  'best-seller': { bg: '#fef3c7', color: '#b45309' },
  'popular': { bg: '#ede9fe', color: '#6d28d9' },
  'new': { bg: '#d1fae5', color: '#047857' },
};

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const handleBuy = () => {
    onAddToCart(product);
  };

  const tagStyle = tagColors[product.tagType] || { bg: '#f3f4f6', color: '#4b5563' };

  return (
    <div
      className="product-card"
      style={{
        background: 'white',
        borderRadius: '1rem',
        border: '1px solid #f3f4f6',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Card Header */}
      <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{
            width: '3rem',
            height: '3rem',
            background: '#f5f3ff',
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src={iconMap[product.icon] || portfolioIcon}
              alt={product.name}
              style={{ width: '1.5rem', height: '1.5rem' }}
            />
          </div>
          {product.tag && (
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              background: tagStyle.bg,
              color: tagStyle.color,
            }}>
              {product.tag}
            </span>
          )}
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
          {product.name}
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '1rem', minHeight: '2.7rem' }}>
          {product.description}
        </p>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.875rem', fontWeight: 800, color: '#111827' }}>${product.price}</span>
          <span style={{ fontSize: '0.85rem', color: '#9ca3af', fontWeight: 500 }}>/{product.period}</span>
        </div>

        {/* Features */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {product.features.map((feature, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.85rem', color: '#4b5563' }}>
              <span style={{
                width: '1.25rem',
                height: '1.25rem',
                background: '#ede9fe',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <FiCheck style={{ width: '0.75rem', height: '0.75rem', color: '#7c3aed' }} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Buy Button */}
      <div style={{ marginTop: 'auto', padding: '0 1.5rem 1.5rem' }}>
        <button
          onClick={handleBuy}
          disabled={isInCart}
          className={isInCart ? '' : 'btn-gradient'}
          style={{
            width: '100%',
            padding: '0.625rem 0',
            borderRadius: '9999px',
            fontWeight: 500,
            fontSize: '0.875rem',
            cursor: isInCart ? 'not-allowed' : 'pointer',
            border: 'none',
            transition: 'opacity 0.2s',
            ...(isInCart ? { background: '#f3f4f6', color: '#9ca3af' } : {}),
          }}
        >
          {isInCart ? '✓ Added to Cart' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
