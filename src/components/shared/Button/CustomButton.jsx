'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const CustomButton = ({size ="sm" , type="primary", children, className, Icon}) => {
   const shouldReduceMotion = useReducedMotion()
    
    return (
       <>
       
       {type == 'primary' ?   <motion.div
  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 20 }}>

   <Button
   size={size}
  className={cn("group relative overflow-hidden h-12 px-8 text-base font-semibold bg-gradient-to-r from-secondary to-secondary transition-all duration-500 ease-in-out",className)}
>
  <span className="relative z-10 flex items-center">
    {children}
    {Icon && <motion.div
      className="ml-2"
      animate={{ x: [0, 4, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
    
        <Icon className="h-5 w-5" />
      
    </motion.div>}
    
  </span>

  {/* Gliding Gradient Layer */}
  <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
</Button> 
  </motion.div> :  <motion.div
    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    <Button
       size={size}
      variant="outline"
      className={cn("group relative h-12 px-8 text-base font-semibold border-gray-300 hover:border-gray-400 transition-all duration-300 ease-in-out",className)}
    >
      <span className="flex items-center">
      {children}
      {Icon && <Icon
          className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
        />}
        
      </span>
    </Button>
  </motion.div>}</>
    );
};

export default CustomButton;