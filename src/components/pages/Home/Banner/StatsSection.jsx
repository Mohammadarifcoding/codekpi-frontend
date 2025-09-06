'use client';

import BannerVariants from '@/components/shared/animation/AnimationVariants/BannerVariants'
import { useReducedMotion, motion } from 'framer-motion'
import { Code, Trophy, Users } from 'lucide-react'
import React from 'react'

const StatsSection = () => {
  const shouldReduceMotion = useReducedMotion()
  const variants = BannerVariants(shouldReduceMotion)

  const stats = [
    { icon: Users, value: "100+", label: "Active Coders" },
    { icon: Trophy, value: "5+", label: "Workshops" },
    { icon: Code, value: "24/7", label: "Code Support" },
  ]
   

  return (
    <motion.div
      variants={variants.item}
      className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={variants.item}
          whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -4 }}
          className="group relative flex flex-col items-center justify-center text-center gap-2 rounded-xl p-6 border border-white/10 bg-white/10  shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-semibold text-primary">{stat.value}</div>
            <div className="text-sm text-gray-700">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StatsSection
