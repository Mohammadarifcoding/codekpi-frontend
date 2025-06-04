import { useReducedMotion } from "framer-motion"
import TechIcon from "./TechIcon"
import { techIcons } from "../technologyIcon/TechnologyIcon"
import { Code } from "lucide-react"

const FloatingTechIcons = () => {
  const shouldReduceMotion = useReducedMotion()


  if (shouldReduceMotion) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {techIcons.map((tech, index) => (
        <div key={index} className="absolute" style={tech.position}>
          <TechIcon
            icon={tech.icon}
            delay={tech.delay}
            duration={8 + Math.random() * 4}
            size="w-12 h-12 md:w-16 md:h-16"
            className="drop-shadow-lg"
          />
        </div>
      ))}

      {/* Additional smaller floating icons */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`small-${i}`}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <TechIcon
            icon={<Code className="w-full h-full text-gray-400" />}
            delay={Math.random() * 3}
            duration={6 + Math.random() * 6}
            size="w-6 h-6 md:w-8 md:h-8"
            className="opacity-30"
          />
        </div>
      ))}
    </div>
  )
}



export default FloatingTechIcons