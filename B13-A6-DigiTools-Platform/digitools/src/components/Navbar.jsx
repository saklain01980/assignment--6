import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cartCount }) => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #f3f4f6',
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '2rem',
              height: '2rem',
              background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>D</span>
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827' }}>
              Digi<span style={{ color: '#7c3aed' }}>Tools</span>
            </span>
          </div>

          {/* Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {[
              { label: 'Products', href: '#products' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'How It Works', href: '#steps' },
              { label: 'Contact', href: '#footer' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#4b5563',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Cart + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              style={{
                position: 'relative',
                padding: '0.5rem',
                color: '#4b5563',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Shopping cart"
            >
              <FiShoppingCart style={{ width: '1.25rem', height: '1.25rem' }} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-0.25rem',
                  right: '-0.25rem',
                  width: '1.25rem',
                  height: '1.25rem',
                  background: '#7c3aed',
                  color: 'white',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href="#products"
              className="btn-gradient"
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
