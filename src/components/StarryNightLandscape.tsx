"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function StarryNightLandscape() {
  // Generate random twinkling stars
  const stars = useMemo(() => {
    return Array.from({ length: 75 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 65, // upper 65% of sky
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Deep Midnight Blue Sky Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #050a24 0%, #08153e 30%, #0d235c 60%, #13337a 85%, #184294 100%)",
        }}
      />

      {/* 2. Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}

      {/* 3. Crescent Moon at Top Left (As seen in the photo) */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-14 flex items-center justify-center">
        {/* Moon glow aura */}
        <div className="absolute w-12 h-12 rounded-full bg-cyan-200/20 blur-md" />
        {/* Crescent Moon Shape */}
        <div
          className="relative w-8 h-8 rounded-full shadow-[0_0_12px_#bae6fd]"
          style={{
            boxShadow: "-3px 2px 0 2px #f8fafc, 0 0 10px rgba(186, 230, 253, 0.8)",
          }}
        />
      </div>

      {/* 4. Shooting Stars / Meteors */}
      <div className="absolute top-16 left-1/4 w-36 h-[2px] bg-gradient-to-r from-transparent via-cyan-200 to-white animate-meteor" />
      <div className="absolute top-28 left-2/3 w-48 h-[2px] bg-gradient-to-r from-transparent via-cyan-100 to-white animate-meteor-delayed" />

      {/* 5. Glowing Neon Sky Title from Reference Photo */}
      <div className="absolute top-10 sm:top-14 inset-x-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="font-handwriting text-3xl sm:text-4xl md:text-5xl neon-glow-cyan tracking-wide italic">
            Happy Vietnamese
          </span>
          <span className="font-handwriting text-3xl sm:text-4xl md:text-5xl neon-glow-cyan tracking-wide italic mt-[-4px]">
            Women&apos;s Day
          </span>
          <span className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl neon-glow-cyan tracking-wider mt-1 drop-shadow-lg">
            20/10
          </span>
        </motion.div>
      </div>

      {/* 6. Distant Twilight Rolling Mountain Silhouettes */}
      <div className="absolute bottom-0 inset-x-0 h-80 pointer-events-none">
        {/* Back Mountain Layer */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-16 w-full h-44 preserve-3d opacity-60"
          preserveAspectRatio="none"
        >
          <path
            fill="#091845"
            d="M 0 160 Q 360 80 720 160 T 1440 140 L 1440 320 L 0 320 Z"
          />
        </svg>

        {/* Mid Mountain Layer */}
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-8 w-full h-40 preserve-3d opacity-85"
          preserveAspectRatio="none"
        >
          <path
            fill="#061238"
            d="M 0 200 Q 420 120 840 210 T 1440 180 L 1440 320 L 0 320 Z"
          />
        </svg>

        {/* Foreground Meadow Grass Texture with Grass Blades (as in photo) */}
        <div
          className="absolute bottom-0 inset-x-0 h-28"
          style={{
            background:
              "linear-gradient(180deg, rgba(3, 10, 32, 0.2) 0%, #03081e 60%, #020514 100%)",
          }}
        >
          {/* Subtle blades of grass SVG */}
          <svg viewBox="0 0 1200 100" className="w-full h-full opacity-60" preserveAspectRatio="none">
            {Array.from({ length: 40 }).map((_, i) => (
              <path
                key={i}
                d={`M ${i * 30 + 10} 100 Q ${i * 30 + 15} 40 ${i * 30 + 20} 25 Q ${i * 30 + 18} 60 ${i * 30 + 25} 100`}
                fill="#0b245e"
              />
            ))}
          </svg>
        </div>

        {/* 7. Cute Glowing White Bunnies (As seen in the bottom left & right of reference photo!) */}
        {/* Left Bunny */}
        <div className="absolute bottom-4 left-6 sm:left-16 flex items-center justify-center opacity-85">
          <div className="relative w-7 h-8 flex flex-col items-center">
            {/* Bunny ears */}
            <div className="flex gap-1">
              <div className="w-1.5 h-3.5 bg-white/90 rounded-full rotate-[-12deg] shadow-[0_0_8px_#ffffff]" />
              <div className="w-1.5 h-3.5 bg-white/90 rounded-full rotate-[12deg] shadow-[0_0_8px_#ffffff]" />
            </div>
            {/* Bunny body */}
            <div className="w-5 h-5 bg-white/95 rounded-full shadow-[0_0_10px_#ffffff] -mt-1" />
          </div>
        </div>

        {/* Right Bunny with Flower/Lantern */}
        <div className="absolute bottom-4 right-6 sm:right-16 flex items-center justify-center opacity-85">
          <div className="relative w-7 h-8 flex flex-col items-center">
            {/* Bunny ears */}
            <div className="flex gap-1">
              <div className="w-1.5 h-3.5 bg-white/90 rounded-full rotate-[-10deg] shadow-[0_0_8px_#ffffff]" />
              <div className="w-1.5 h-3.5 bg-white/90 rounded-full rotate-[15deg] shadow-[0_0_8px_#ffffff]" />
            </div>
            {/* Bunny body */}
            <div className="w-5 h-5 bg-white/95 rounded-full shadow-[0_0_10px_#ffffff] -mt-1" />
            {/* Small glowing flower next to bunny */}
            <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_6px_#fde047]" />
          </div>
        </div>
      </div>
    </div>
  );
}
