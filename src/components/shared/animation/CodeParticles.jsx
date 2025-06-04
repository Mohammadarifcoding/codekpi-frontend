'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CodeParticles = () => {
  const codeSymbols = ["</", "{}", "()", "[]", "=>", "&&", "||", "++", "--", "===", "!==", "var", "let", "const", "0", "1"];

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  // Prevent rendering until window size is known
  if (!windowSize.width || !windowSize.height) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {codeSymbols.map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-xs md:text-sm font-mono text-gray-400/30 font-bold"
          initial={{
            x: Math.random() * windowSize.width,
            y: windowSize.height + 50,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 0.7, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default CodeParticles;
