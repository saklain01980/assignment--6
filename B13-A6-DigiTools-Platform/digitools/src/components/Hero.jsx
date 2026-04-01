import bannerImg from '../assets/banner.png';
import playIcon from '../assets/Play.png';

const Hero = () => {
  return (
    <section
      className="bg-gradient-purple text-white overflow-hidden relative"
      style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      {/* Subtle decorative elements */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '24rem', height: '24rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', transform: 'translate(33%, -50%)', filter: 'blur(48px)' }}></div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '18rem', height: '18rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', transform: 'translate(-25%, 50%)', filter: 'blur(48px)' }}></div>

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem' }}>
          {/* Left Content */}
          <div style={{ flex: '1 1 480px' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.375rem 1rem',
              borderRadius: '9999px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              🚀 #1 Digital Tools Platform
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Supercharge Your{' '}
              <span style={{ color: '#67e8f9' }}>Digital</span>{' '}
              Workflow
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', maxWidth: '32rem', lineHeight: 1.65 }}>
              Discover AI-powered tools, design assets, templates, and productivity software to supercharge your workflow and boost creativity.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#products"
                style={{
                  background: 'white',
                  color: '#6d28d9',
                  fontWeight: 600,
                  padding: '0.75rem 1.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  boxShadow: '0 10px 25px -5px rgba(88, 28, 135, 0.2)',
                  transition: 'background 0.2s',
                }}
              >
                Browse Tools
              </a>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500,
                fontSize: '0.875rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}>
                <span style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img src={playIcon} alt="Play" style={{ width: '1rem', height: '1rem', marginLeft: '2px' }} />
                </span>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-1.5rem', background: 'rgba(255,255,255,0.08)', borderRadius: '1.5rem', filter: 'blur(32px)' }}></div>
              <img
                src={bannerImg}
                alt="Premium digital tools illustration"
                style={{ position: 'relative', width: '100%', maxWidth: '30rem', borderRadius: '1rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
