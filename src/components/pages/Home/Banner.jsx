"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary-50 text-primary px-4 py-1.5 rounded-full mb-6"
          >
            <Code className="h-4 w-4" />
            <span className="text-sm font-medium">Empowering Tech Innovation</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Welcome to <span className="text-primary">Code KPI</span><br />
            Where Innovation Meets Excellence
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Join Khulna Polytechnic's premier programming community. Learn, build, and grow with passionate tech enthusiasts under the guidance of experienced mentors.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg">
                Join Code KPI
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="group">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={statsVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="font-bold text-3xl text-primary mb-1">300+</div>
              <div className="text-gray-600">Active Members</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="font-bold text-3xl text-primary mb-1">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="font-bold text-3xl text-primary mb-1">100+</div>
              <div className="text-gray-600">Workshops Hosted</div>
            </motion.div>
            
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="font-bold text-3xl text-primary mb-1">24/7</div>
              <div className="text-gray-600">Learning Support</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
};
export default Banner;