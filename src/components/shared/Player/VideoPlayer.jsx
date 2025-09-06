'use client';
import { useReducedMotion } from 'framer-motion';
import {useState} from 'react'
import React from 'react';
import {motion} from "framer-motion"
import { Play } from 'lucide-react';
import Image from 'next/image';

const VideoPlayer = ({ videoId = "8RpdeCi9V6M", image }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      {/* Video Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
        {!isPlaying ? (
          <>
            {/* Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-teal-500/20">
              <Image
                src={image}
                 placeholder="blur"
                alt="CodeKPI Introduction Video"
                className="w-full h-full object-cover opacity-80"
                width={800}
                height={400}
                priority={false}
                quality={100}
              />
            </div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={ { scale: 1.1 }}
                whileTap={ { scale: 0.95 }}
                onClick={() => setIsPlaying(true)}
                className="group/play relative"
              >
                {/* Outer Ring */}

                {/* Play Button */}
                <div className="relative w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center group-hover/play:bg-secondary transition-all duration-300">
                  <Play className="w-8 h-8 text-gray-900 group-hover/play:text-white ml-1" fill="currentColor" />
                </div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
              </motion.button>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:block hidden">
              <div className="bg-black/50  rounded-lg p-4">
                <h3 className="text-white font-semibold text-lg mb-1">Welcome to CodeKPI</h3>
                <p className="text-white/80 text-sm">Discover our journey, mission, and community</p>
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="CodeKPI Introduction Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400/30 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500" />
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-400/30 rounded-full group-hover:scale-125 transition-transform duration-500" />
    </motion.div>
  )
};

export default VideoPlayer;


