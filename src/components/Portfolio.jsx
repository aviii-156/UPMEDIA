const projects = [
  {
    title: 'YouTube Long-Form',
    format: 'Creator Documentary Edit',
    image:
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Instagram Reels',
    format: 'High-Retention Vertical Content',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Ad Creatives',
    format: 'Performance Marketing Visuals',
    image:
      'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Corporate Films',
    format: 'Brand Storytelling Campaigns',
    image:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
  },
];

function Portfolio() {
  return (
    <section className="section-shell content-section">
      <h2 className="section-title reveal">Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <article key={project.title} className="portfolio-item reveal">
            <div className="portfolio-thumb" style={{ backgroundImage: `url(${project.image})` }} />
            <h3>{project.title}</h3>
            <p>{project.format}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;