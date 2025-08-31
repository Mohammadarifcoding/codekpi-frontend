'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const HeadingBadge = ({children,type}) => {
       
    return (
         <motion.div variants={{
    hidden: { opacity: 0, y:  30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }} className="mb-6">
            <Badge
              variant="secondary"
              className={`inline-flex items-center gap-2 px-4 py-2 ${type == "green" ? "bg-green-100 text-green-700 border border-green-200 hover:bg-green-200 transition-colors" : "bg-orange-100 text-orange-700 border border-orange-200 hover:bg-orange-200 transition-colors"}`}
            >
             {children}
            </Badge>
          </motion.div>
    );
};

export default HeadingBadge;