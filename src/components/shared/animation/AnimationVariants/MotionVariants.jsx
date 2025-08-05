"use client"

import React from 'react';
import { motion } from 'framer-motion';

export const MotionVariantsDiv = ({
  variants,
  className,
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={variants}
      className={className}
      {...rest} // 👈 this enables animate, transition, etc.
    >
      {children}
    </motion.div>
  );
};



export const MotionVariantsP = ({variants , className, children, ...rest}) => {
    return (
            <motion.p variants={variants} className={className} {...rest}>

           {children}
            </motion.p>
    );
};



export const MotionVariantsH2 = ({variants , className, children, ...rest}) => {
    return (
            <motion.h2 variants={variants} className={className} {...rest}>

           {children}
            </motion.h2>
    );
};
