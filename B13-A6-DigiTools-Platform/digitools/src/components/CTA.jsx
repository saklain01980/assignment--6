const CTA = () => {
  return (
    <section style={{ padding: '4rem 0 5rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 40%, #06b6d4 100%)',
          borderRadius: '1.5rem',
          padding: '3.5rem 2.5rem',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '10rem', height: '10rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }}></div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '14rem', height: '14rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', transform: 'translate(33%, 33%)' }}></div>

          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, marginBottom: '1rem', position: 'relative' }}>
            Ready To Transform Your Workflow?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem', position: 'relative', lineHeight: 1.6 }}>
            Join 50,000+ professionals already using DigiTools to create faster, design better, and accomplish more.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', position: 'relative' }}>
            <a
              href="#products"
              style={{
                background: 'white',
                color: '#6d28d9',
                fontWeight: 600,
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'background 0.2s',
              }}
            >
              Get Started for Free
            </a>
            <a
              href="#pricing"
              style={{
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                fontWeight: 500,
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                textDecoration: 'none',
                background: 'transparent',
                transition: 'background 0.2s',
              }}
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
