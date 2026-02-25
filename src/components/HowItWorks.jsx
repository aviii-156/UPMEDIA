const steps = [
  { title: 'Send Your Raw Footage', desc: 'Upload clips, references, and your content goals.' },
  { title: 'Creative Editing Workflow', desc: 'We edit, color grade, sound-design, and optimize narrative flow.' },
  { title: 'Review & Refine', desc: 'You request revisions and we polish every frame to match your brand.' },
  { title: 'Publish & Scale', desc: 'Export-ready files tailored for YouTube, Reels, Ads, and campaigns.' },
];

function HowItWorks() {
  return (
    <section className="section-shell content-section">
      <h2 className="section-title reveal">How it Works</h2>
      <div className="steps-wrap">
        {steps.map((step, index) => (
          <article key={step.title} className="step-card reveal">
            <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;