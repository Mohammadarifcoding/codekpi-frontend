"use client"
const { useReducedMotion } = require("framer-motion")
import {motion} from 'framer-motion'




 const CodeParticles = () => {
  const shouldReduceMotion = useReducedMotion()

  const codeSymbols = ["</", "{}", "()", "[]", "=>", "&&", "||", "++", "--", "===", "!==", "var", "let", "const","0","1"]

  if (shouldReduceMotion) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {codeSymbols.map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-xs md:text-sm font-mono text-gray-400/30 font-bold"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 0.7, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  )
}


export default CodeParticles