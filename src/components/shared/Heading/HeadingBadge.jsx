'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const HeadingBadge = ({children}) => {
      const shouldReduceMotion = useReducedMotion()
       
    return (
         <motion.div variants={{
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.3 : 0.6, ease: "easeOut" },
    },
  }} className="mb-6">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 border border-orange-200 hover:bg-orange-200 transition-colors"
            >
             {children}
            </Badge>
          </motion.div>
    );
};

export default HeadingBadge;