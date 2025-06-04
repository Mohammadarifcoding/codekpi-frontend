"use client"


import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Code, Sparkles, Users, Trophy, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GitIcon, JavaScriptIcon, NodeIcon, PythonIcon, ReactIcon, techIcons, TypeScriptIcon } from "@/components/shared/technologyIcon/TechnologyIcon"
import BannerVariants from "@/components/shared/animation/AnimationVariants/BannerVariants"
import StatsSection from "./StatsSection"
import CodeParticles from "@/components/shared/animation/CodeParticles"
import FloatingTechIcons from "@/components/shared/FloatingTechIcons/FloatingTechIcons"


const Banner = ({ className = "" }) => {
  const shouldReduceMotion = useReducedMotion()
  const variants = BannerVariants(shouldReduceMotion)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <section
      className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 ${className}`}
      aria-labelledby="banner-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Primary gradient orbs */}
        <motion.div
          style={{ y: y1 }}
          variants={variants.glow}
          animate="animate"
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          variants={variants.glow}
          animate="animate"
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-emerald-400/30 via-teal-400/20 to-cyan-400/30 blur-3xl"
        />

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
        <div className="w-full px-4 py-20 sm:px-6 lg:px-8">
          <motion.div variants={variants.container} initial="hidden" animate="visible" className="mx-auto max-w-5xl">
            <div className="text-center">
              {/* Premium Badge */}
              <motion.div variants={variants.item} className="mb-8">
                <Badge
                  variant="secondary"
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 text-primary shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </motion.div>
                  <span className="font-semibold">Empowering Tech Innovation</span>
                  <Code className="h-4 w-4" />
                </Badge>
              </motion.div>

              {/* Hero Heading with Programming Theme */}
              <motion.div variants={variants.item} className="mb-8">
                <h1
                  id="banner-heading"
                  className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
                >
                  <span className="block text-gray-900">Welcome to</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Code KPI
                  </span>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 mt-2">
                    Where Programming
                  </span>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Meets Innovation
                  </span>
                </h1>
              </motion.div>

              {/* Enhanced Description */}
              <motion.p
                variants={variants.item}
                className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 sm:text-2xl lg:text-2xl font-light"
              >
                Join <span className="font-semibold text-primary">Khulna Polytechnic Institute&apos;s</span> premier
                programming community. Master <span className="font-mono text-blue-600">Python</span>,{" "}
                <span className="font-mono text-yellow-600">JavaScript</span>,{" "}
                <span className="font-mono text-blue-500">React</span> and more with passionate developers under expert
                guidance.
              </motion.p>

              {/* Premium CTA Buttons */}
              <motion.div
                variants={variants.item}
                className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="group relative h-14 px-10 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Coding Journey
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Code className="h-5 w-5" />
                      </motion.div>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="group h-14 px-10 text-lg font-bold bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats Section */}
              <StatsSection />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
    </section>
  )
}

export default Banner