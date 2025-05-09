'use client'

import { motion } from 'framer-motion';

const ZoomOut = ({ children, scale = 1.1, once = true, duration = 1 }) => {
    return (
        <motion.div
            initial={{ scale: scale }}
            whileInView={{ scale: 1 }}
            
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    );
};

export default ZoomOut;