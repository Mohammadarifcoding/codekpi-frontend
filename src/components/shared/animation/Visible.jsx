'use client'

import { motion } from 'framer-motion';

const Visible = ({ children, once = true, duration = 0.5 }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    );
};

export default Visible;