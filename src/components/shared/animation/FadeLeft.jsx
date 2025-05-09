'use client'

import { motion } from 'framer-motion'

const FadeLeft = ({ children, once = true, duration = 1 }) => {
    return (
        <motion.div
            initial={{ opacity: 0.2, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: duration }}>
            {children}
        </motion.div>
    );
};

export default FadeLeft;