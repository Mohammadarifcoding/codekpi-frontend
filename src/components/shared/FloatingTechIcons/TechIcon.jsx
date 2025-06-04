'use client';
import { useReducedMotion } from "framer-motion"
import {motion} from "framer-motion"
const TechIcon = ({ icon, className = "", delay = 0, duration = 8, size = "w-8 h-8" }) => {
  const shouldReduceMotion = useReducedMotion()

  // if (shouldReduceMotion) {
  //   return <div className={`${size} ${className} opacity-20`}>{icon}</div>
  // }

  return (
    <motion.div
      className={`${size} ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.7, 0.3, 0.8, 0.2],
        scale: [0, 1, 1.1, 0.9, 1],
        rotate: [0, 180, 360],
        y: [-20, 20, -10, 30, -20],
        x: [-10, 10, -15, 5, -10],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    >
      {icon}
    </motion.div>
  )
}

export default TechIcon