import { FiFilm, FiTrendingUp, FiBriefcase } from 'react-icons/fi';

const services = [
  {
    icon: <FiFilm />,
    title: 'Content Editing',
    text: 'Cinematic edits for YouTube videos, Instagram reels, and social content.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Growth-Focused Creative',
    text: 'Retention-friendly storytelling designed to increase watch time and engagement.',
  },
  {
    icon: <FiBriefcase />,
    title: 'Brand Visual Systems',
    text: 'Consistent video style that builds trust and elevates your digital brand identity.',
  },
];

function Services() {
  return (
    <section className="section-shell content-section" id="services">
      <h2 className="section-title reveal">Services / Features</h2>
      <div className="grid cards-3">
        {services.map((item) => (
          <article className="glass-card reveal" key={item.title}>
            <div className="icon-wrap">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;