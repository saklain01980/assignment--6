import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'Perfect for individuals just getting started with digital tools.',
    features: [
      'Access to 50+ tools',
      'Basic templates',
      '5GB cloud storage',
      'Community support',
      'Monthly updates',
    ],
    highlight: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    price: 29,
    period: 'month',
    description: 'Best for professionals and freelancers who need more power.',
    features: [
      'Access to 150+ tools',
      'Premium templates',
      '50GB cloud storage',
      'Priority support',
      'Weekly updates',
      'API access',
      'Commercial license',
    ],
    highlight: true,
    cta: 'Get Pro Now',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 59,
    period: 'month',
    description: 'For teams and businesses that need everything we offer.',
    features: [
      'Access to all 200+ tools',
      'Custom templates',
      'Unlimited storage',
      '24/7 dedicated support',
      'Daily updates',
      'Full API access',
      'White-label option',
    ],
    highlight: false,
    cta: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" style={{ padding: '5rem 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#111827', marginBottom: '0.75rem' }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '32rem', margin: '0 auto' }}>
            Choose the plan that fits your needs. Upgrade or downgrade any time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
          maxWidth: '64rem',
          margin: '0 auto',
        }}>
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                ...(plan.highlight
                  ? {
                      background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 40%, #06b6d4 100%)',
                      color: 'white',
                      border: '1px solid transparent',
                      boxShadow: '0 20px 50px -10px rgba(124, 58, 237, 0.35)',
                      transform: 'scale(1.03)',
                    }
                  : {
                      background: 'white',
                      color: '#111827',
                      border: '1px solid #f3f4f6',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    }),
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <span style={{
                  position: 'absolute',
                  top: '-0.75rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#22d3ee',
                  color: '#083344',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.25rem 1rem',
                  borderRadius: '9999px',
                  boxShadow: '0 2px 8px rgba(6, 182, 212, 0.3)',
                  whiteSpace: 'nowrap',
                }}>
                  {plan.badge}
                </span>
              )}

              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: '0.25rem',
                color: plan.highlight ? 'white' : '#111827',
              }}>
                {plan.name}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                marginBottom: '1.25rem',
                color: plan.highlight ? 'rgba(255,255,255,0.7)' : '#6b7280',
                lineHeight: 1.5,
              }}>
                {plan.description}
              </p>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>${plan.price}</span>
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: plan.highlight ? 'rgba(255,255,255,0.6)' : '#9ca3af',
                }}>
                  /{plan.period}
                </span>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.85rem' }}>
                    <span style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      background: plan.highlight ? 'rgba(255,255,255,0.2)' : '#ede9fe',
                    }}>
                      <FiCheck style={{
                        width: '0.75rem',
                        height: '0.75rem',
                        color: plan.highlight ? 'white' : '#7c3aed',
                      }} />
                    </span>
                    <span style={{ color: plan.highlight ? 'rgba(255,255,255,0.9)' : '#4b5563' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={plan.highlight ? '' : 'btn-gradient'}
                style={{
                  width: '100%',
                  padding: '0.75rem 0',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.2s',
                  ...(plan.highlight
                    ? { background: 'white', color: '#6d28d9' }
                    : {}),
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
