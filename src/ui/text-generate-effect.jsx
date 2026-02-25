"use client";

import { motion } from 'framer-motion';

export function TextGenerateEffect({ words, className = '' }) {
  const wordList = words.split(' ').filter(Boolean);

  return (
    <motion.h1
      className={`text-generate-effect ${className}`.trim()}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.032,
          },
        },
      }}
    >
      {wordList.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="generated-word"
          variants={{
            hidden: { opacity: 0, filter: 'blur(9px)', y: 7 },
            show: {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              transition: { duration: 0.55, ease: 'easeOut' },
            },
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
}
