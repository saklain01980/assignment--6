const stats = [
  { value: '50K+', label: 'Active Users', bg: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)' },
  { value: '200+', label: 'Premium Tools', bg: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)' },
  { value: '4.9', label: 'Average Rating', bg: 'linear-gradient(135deg, #818cf8 0%, #06b6d4 100%)' },
];

const Stats = () => {
  return (
    <section style={{ padding: '3.5rem 0', background: '#fff' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                background: stat.bg,
                borderRadius: '1rem',
                padding: '1.75rem 1.5rem',
                textAlign: 'center',
                color: 'white',
                boxShadow: '0 4px 15px -3px rgba(124, 58, 237, 0.25)',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
            >
              <span style={{ fontSize: '2rem', fontWeight: 800, display: 'block', marginBottom: '0.25rem' }}>
                {stat.value}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
