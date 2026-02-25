const plans = [
  {
    name: 'Starter',
    price: '₹12,999',
    points: ['4 short-form edits / month', 'Basic motion graphics', '2 rounds of revisions'],
  },
  {
    name: 'Growth',
    price: '₹29,999',
    featured: true,
    points: ['12 short-form edits / month', 'Advanced pacing + sound design', 'Priority turnaround'],
  },
  {
    name: 'Scale',
    price: 'Custom',
    points: ['YouTube + ads + reels package', 'Dedicated editor support', 'Brand-level post-production'],
  },
];

function Pricing() {
  return (
    <section className="section-shell content-section">
      <h2 className="section-title reveal">Pricing</h2>
      <div className="grid cards-3">
        {plans.map((plan) => (
          <article key={plan.name} className={`glass-card reveal price-card ${plan.featured ? 'featured' : ''}`}>
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <ul>
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#" className="btn btn-outline">Choose Plan</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;