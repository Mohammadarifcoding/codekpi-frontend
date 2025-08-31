
import { ArrowRight, Bot, Code, Sparkles } from "lucide-react"
import CustomButton from "@/components/shared/Button/CustomButton"
import HeadingBadge from "@/components/shared/Heading/HeadingBadge"
import FloatingTechIcons from "@/components/shared/FloatingTechIcons/FloatingTechIcons"
import CodeParticles from "@/components/shared/animation/CodeParticles"

import Link from "next/link"
import StatsSection from "../Home/Banner/StatsSection"

const AiWorkshopBanner = () => {




  return (
    <section
      className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50`}
      aria-labelledby="banner-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Primary gradient orbs */}

        {/* Programming-themed background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* Code-like mesh pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      {/* Floating Technology Icons */}
      <FloatingTechIcons />

      {/* Code Particles */}
      <CodeParticles /> 

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-4 sm:pb-20 pb-4  sm:pt-36 pt-24  sm:px-6 lg:px-8">
          <div initial="hidden" animate="visible" className="mx-auto max-w-5xl">
            <div className="text-center">
              {/* Premium Badge */}


<HeadingBadge>
<div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <Bot className="h-4 w-4" />
    </div>

    <span>Ultimate AI Workshop</span>


</HeadingBadge>

              <div  className="sm:mb-8 mb-4 text-center  ">
<h1
  id="banner-heading"
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
>
  <span className="flex sm:gap-2 gap-1 flex-col sm:flex-row text-center items-center justify-center"> 
    <span className="block text-gray-900">AI Workshop by</span>
    <span className="block bg-secondary bg-clip-text  text-transparent">
       CodeKPI
    </span>
  </span>

  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 mt-2">
    Learn Next-Gen AI Tools & Innovation
  </span>
</h1>
</div>

{/* Description */}
<p

  className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-gray-600 font-base leading-relaxed text-center"
>
  Explore <span className="font-semibold text-primary">ChatGPT</span>, 
  <span className="font-semibold text-primary"> Claude</span>, 
  <span className="font-semibold text-primary"> Gemini</span> & more.  
  Unlock the future of AI with CodeKPI’s exclusive workshop.
</p>

{/* CTA */}
<div
 
  className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row "
>
 
<Link href={'/ai-workshop/join'}>
<CustomButton
    type="primary"
    className="h-10 md:h-12 px-4 md:px-8 text-sm md:text-base w-full "
    icon={<Code className="h-5 w-5" />}
  >
    Register Free
  </CustomButton> 

</Link>

<Link href={'#about'}><CustomButton
  type="secondary"
  className="h-10 md:h-12 px-4 md:px-8 text-sm md:text-base"
 icon={<ArrowRight
          className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
        />}
>
About Workshop
</CustomButton></Link>

 

</div>

              {/* Stats Section */}
              <StatsSection />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
    </section>
  )
};

export default AiWorkshopBanner;