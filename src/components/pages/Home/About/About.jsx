

import React from "react"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeadingBadge from "@/components/shared/Heading/HeadingBadge"
import VideoPlayer from "@/components/shared/Player/VideoPlayer"
import Link from "next/link"
import { cn } from "@/lib/utils"
import videoImage from '/src/assets/whybest/image.jpg'


const About = () => {


  return (
    <section
    id="about"
      className={`relative py-10 lg:py-20  bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden`}
      aria-labelledby="about-heading"
    >
      {/* <FloatingElements /> */}
      {/* <CodeParticles />
      <FloatingTechIcons /> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center sm:mb-16 mb-4"
        >
            <HeadingBadge>

   <Play className="w-4 h-4" />
              About CodeKPI
            </HeadingBadge>
         

          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            See Our <span className="text-secondary">Story</span> in Action
          </h2>

          <p className="md:text-xl sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch how CodeKPI is transforming programming education at Khulna Polytechnic Institute and building the
            next generation of tech entrepreneur
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video Section - Takes 2 columns */}
          <div
            initial="hidden"
            animate={"visible"}
            className="lg:col-span-2"
          >
            <VideoPlayer image={videoImage} />

            {/* Video Description */}
  <div
      className="mt-8 rounded-2xl border border-white/20 bg-white/70  shadow-xl px-6 py-8 sm:p-10"
    >
      <div className="space-y-4 text-center sm:text-left">
        <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Our <span className="text-secondary">Jounry</span> So Far
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
We started as a small group of friends who loved coding. Over time, CodeKPI became the biggest tech community at Khulna Polytechnic Institute. From workshops to projects, and helping each other grow — this is our journey, built with passion and teamwork.
        </p>

        <div className="pt-4 flex justify-center sm:justify-start">
          <Link
            href="https://www.youtube.com/channel/UCp2PaqHwu86L_xw1GY2smYA"
            target="_blank"
          >
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "border-orange-300 text-orange-600 hover:bg-orange-100 hover:border-orange-400 transition-colors duration-300"
              )}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Watch on YouTube
            </Button>
          </Link>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About