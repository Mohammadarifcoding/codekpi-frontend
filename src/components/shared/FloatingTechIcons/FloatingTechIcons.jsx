
import TechIcon from "./TechIcon"
// import { techIcons } from "../technologyIcon/TechnologyIcon"
import { Code } from "lucide-react"
import { AiIcons } from "../AiIcon/AiIcon"

const FloatingTechIcons = () => {



  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {AiIcons.map((tech, index) => (
        <div key={index} className="absolute" style={tech.position}>
          <TechIcon
            icon={tech.icon}
            delay={tech.delay}
            duration={8 + Math.random() * 4}
            size="sm:w-12 w-8 sm:h-12 h-8 md:w-16 md:h-16"
            className=""
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
            size="sm:w-6 w-4 sm:h-6 h-4 md:w-8 md:h-8"
            className="opacity-30"
          />
        </div>
      ))}
    </div>
  )
}



export default FloatingTechIcons