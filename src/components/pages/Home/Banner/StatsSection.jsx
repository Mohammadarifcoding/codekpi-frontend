import BannerVariants from '@/components/shared/animation/AnimationVariants/BannerVariants';
import { useReducedMotion } from 'framer-motion';
import React from 'react';
import {motion} from 'framer-motion'
import { Code, Trophy, Users } from 'lucide-react';

const StatsSection = () => {
 const shouldReduceMotion = useReducedMotion()
  const variants = BannerVariants(shouldReduceMotion)

  const stats = [
    { icon: Users, value: "100+", label: "Active Coders" },
    { icon: Trophy, value: "5+", label: "Workshops" },
    { icon: Code, value: "24/7", label: "Code Support" },
  ]

  return (
    <motion.div variants={variants.item} className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={variants.item}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
          className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
};

export default StatsSection;