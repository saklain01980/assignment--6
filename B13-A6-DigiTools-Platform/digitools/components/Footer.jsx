import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="footer"
      style={{
        background: '#030712',
        color: 'white',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        borderTop: '3px solid',
        borderImage: 'linear-gradient(90deg, #7c3aed 0%, #6366f1 50%, #06b6d4 100%) 1',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>D</span>
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                Digi<span style={{ color: '#a78bfa' }}>Tools</span>
              </span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Your one-stop platform for premium digital tools, templates, and creative assets.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon style={{ width: '1rem', height: '1rem' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: '#d1d5db' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['Products', 'Pricing', 'About Us', 'Blog', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: '#d1d5db' }}>
              Support
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {['Help Center', 'Documentation', 'API Reference', 'Community', 'Status'].map((link) => (
                <li key={link}>
                  <a href="#" style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: '#d1d5db' }}>
              Contact Us
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#9ca3af', fontSize: '0.85rem' }}>
                <FiMail style={{ width: '1rem', height: '1rem', color: '#a78bfa', flexShrink: 0 }} />
                support@digitools.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#9ca3af', fontSize: '0.85rem' }}>
                <FiPhone style={{ width: '1rem', height: '1rem', color: '#a78bfa', flexShrink: 0 }} />
                +1 (555) 123-4567
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#9ca3af', fontSize: '0.85rem' }}>
                <FiMapPin style={{ width: '1rem', height: '1rem', color: '#a78bfa', flexShrink: 0, marginTop: '0.125rem' }} />
                123 Digital Ave, San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
        }}>
          <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
            © 2026 DigiTools. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
              <a key={link} href="#" style={{ color: '#6b7280', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
