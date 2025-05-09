'use client'

import { motion } from 'framer-motion'


const FadeIn = ({ children, once = true, duration = 0.5 }) => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
  
            transition={{ duration: duration }}>
            {children}
        </motion.div>
    );
};

export default FadeIn;