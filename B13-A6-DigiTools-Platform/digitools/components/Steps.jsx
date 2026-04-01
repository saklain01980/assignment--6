import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const steps = [
  {
    step: '01',
    icon: userIcon,
    title: 'Create Your Account',
    description:
      'Sign up in seconds and explore our complete catalog of premium digital tools and resources.',
  },
  {
    step: '02',
    icon: packageIcon,
    title: 'Choose Your Tools',
    description:
      'Browse and select from 200+ curated tools, templates, and assets that match your needs.',
  },
  {
    step: '03',
    icon: rocketIcon,
    title: 'Start Creating',
    description:
      'Download instantly and start using your tools right away. No setup, no waiting.',
  },
];

const Steps = () => {
  return (
    <section id="steps" style={{ padding: '5rem 0', background: '#ffffff' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#111827', marginBottom: '0.75rem' }}>
            Get Started in 3 Steps
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '32rem', margin: '0 auto' }}>
            Getting started with DigiTools is quick and easy. Follow these simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {steps.map((item, index) => (
            <div
              key={index}
              className="step-card"
              style={{
                position: 'relative',
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid #f3f4f6',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
              }}
            >
              {/* Step Number */}
              <span style={{
                position: 'absolute',
                top: '1rem',
                right: '1.25rem',
                fontSize: '3rem',
                fontWeight: 800,
                color: '#f3f4f6',
                lineHeight: 1,
              }}>
                {item.step}
              </span>

              {/* Icon */}
              <div style={{
                width: '4rem',
                height: '4rem',
                background: '#f5f3ff',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
              }}>
                <img src={item.icon} alt={item.title} style={{ width: '2rem', height: '2rem' }} />
              </div>

              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
