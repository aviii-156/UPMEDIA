const testimonials = [
  {
    quote: 'UPEVIN transformed our casual footage into premium content that actually converts.',
    name: 'Aarav Sharma',
    role: 'Founder, FitLaunch',
  },
  {
    quote: 'Our watch time jumped significantly after switching to their edit style and pacing.',
    name: 'Naina Verma',
    role: 'Creator, 500K+ followers',
  },
  {
    quote: 'From scripting support to final delivery, the quality and speed are unmatched.',
    name: 'Rohit Mehta',
    role: 'Marketing Lead, Nova Brands',
  },
];

function Testimonials() {
  return (
    <section className="section-shell content-section">
      <h2 className="section-title reveal">Testimonials</h2>
      <div className="grid cards-3">
        {testimonials.map((item) => (
          <article key={item.name} className="glass-card reveal testimonial-card">
            <p>“{item.quote}”</p>
            <h4>{item.name}</h4>
            <span>{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;