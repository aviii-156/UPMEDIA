import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const words =
  'we help creators, influencers, businesses, and brands turn ordinary footage into extraordinary content.';

function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero-inner reveal">
        <motion.h1
          className="hero-brand"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          UPEVIN MEDIA
        </motion.h1>
        <TextGenerateEffect words={words} className="hero-generate-sub" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: 'easeOut' }}
        >
          We don’t just edit videos.
          <br />
          We craft visual experiences that boost engagement, increase retention,
          and elevate your online presence.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;