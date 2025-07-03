"use client"
import React from 'react';
import {motion} from "framer-motion"
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Submitted = ({onClick}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-white/20 text-center max-w-md w-full"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your review has been submitted successfully and will be reviewed soon.</p>
          <Button
            onClick={onClick}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Submit Another Review
          </Button>
        </motion.div>
      </div>
    );
};

export default Submitted;