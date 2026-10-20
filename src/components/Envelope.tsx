"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, Sparkles } from "lucide-react";

interface EnvelopeProps {
  stage: "envelope" | "opening" | "zooming" | "blooming" | "completed";
  onOpen: () => void;
}

export default function Envelope({ stage, onOpen }: EnvelopeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateCoords, setRotateCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Parallax Tilt on Mouse Move (Desktop)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (stage !== "envelope" || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Subtle tilt: max ±10 degrees
    const rotateY = (mouseX / (rect.width / 2)) * 10;
    const rotateX = -(mouseY / (rect.height / 2)) * 10;
    setRotateCoords({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotateCoords({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (stage !== "envelope") return;

    // Burst sparkles from the heart seal
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      // Heart confetti & golden fairy sparkles
      try {
        confetti({
          particleCount: 35,
          spread: 70,
          origin: { x, y },
          colors: ["#f43f5e", "#fb7185", "#fda4af", "#fbbf24", "#fbcfe8"],
          shapes: ["circle"],
          ticks: 180,
          gravity: 0.8,
          scalar: 0.9,
        });
      } catch {
        // Fallback gracefully
      }
    }

    onOpen();
  };

  const isOpening = stage !== "envelope";
  const isZooming = stage === "zooming" || stage === "blooming" || stage === "completed";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center select-none"
      style={{ perspective: "1200px" }}
    >
      {/* Zoom and tilt wrapper */}
      <motion.div
        animate={{
          scale: isZooming ? 4.2 : 1,
          opacity: stage === "blooming" || stage === "completed" ? 0 : 1,
          rotateX: isOpening ? 0 : rotateCoords.x,
          rotateY: isOpening ? 0 : rotateCoords.y,
          y: isOpening ? -20 : 0,
        }}
        transition={{
          scale: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] },
          opacity: { duration: 0.8, delay: stage === "blooming" ? 0 : 0.6 },
          rotateX: { type: "spring", stiffness: 200, damping: 20 },
          rotateY: { type: "spring", stiffness: 200, damping: 20 },
          y: { duration: 0.8, ease: "easeOut" },
        }}
        className={`relative z-20 flex flex-col items-center cursor-pointer ${
          stage === "envelope" ? "animate-float" : ""
        }`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick(e as unknown as React.MouseEvent);
          }
        }}
        aria-label="Nhấn để mở phong thư chúc mừng 20/10"
      >
        {/* Soft magical halo behind the envelope */}
        <div
          className="absolute -inset-10 rounded-full bg-gradient-to-r from-rose-300/30 via-pink-400/20 to-amber-200/30 blur-3xl pointer-events-none animate-pulse-glow"
          aria-hidden="true"
        />

        {/* 3D Envelope Container */}
        <div
          className="relative w-[310px] h-[210px] sm:w-[380px] sm:h-[250px] md:w-[420px] md:h-[270px] preserve-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* 1. Envelope Back Wall */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-200 via-pink-300 to-rose-400 shadow-2xl border border-rose-300/60 overflow-hidden">
            {/* Interior glowing lining */}
            <div className="absolute inset-2 rounded-xl bg-gradient-to-b from-rose-100/90 to-pink-200/95 flex items-center justify-center">
              {/* Subtle gold foil floral filigree texture */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, #d97706 1px, transparent 1px)`,
                  backgroundSize: "16px 16px",
                }}
              />
              {/* Warm interior radiant glow when opening */}
              <motion.div
                animate={{
                  opacity: isOpening ? [0.4, 0.9, 0.7] : 0.2,
                  scale: isOpening ? [1, 1.2, 1.1] : 1,
                }}
                transition={{ duration: 1.5, repeat: isOpening ? Infinity : 0, repeatType: "reverse" }}
                className="w-48 h-48 rounded-full bg-gradient-to-r from-amber-200 via-rose-300 to-pink-200 blur-xl"
              />
            </div>
          </div>

          {/* 2. Sliding Greeting Card Preview (slides up when opening) */}
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: isOpening ? -130 : 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-4 right-4 top-4 h-[190px] sm:h-[225px] md:h-[245px] rounded-xl bg-gradient-to-b from-amber-50/95 to-rose-50/90 border border-amber-200/70 shadow-lg p-4 flex flex-col items-center justify-center text-center z-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Delicate Card Gold Double Border */}
            <div className="absolute inset-1.5 border border-amber-300/40 rounded-lg pointer-events-none" />
            <div className="text-amber-800/80 text-[10px] sm:text-xs tracking-widest uppercase font-serif mb-1">
              Ngày Phụ Nữ Việt Nam
            </div>
            <div className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-rose-700 via-pink-600 to-amber-700 bg-clip-text text-transparent">
              20 · 10
            </div>
            <div className="text-xs sm:text-sm font-handwriting text-rose-800/80 mt-1">
              Trao gửi vạn đóa hoa yêu thương
            </div>
            <div className="mt-2 flex items-center gap-1 text-[11px] text-rose-500 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: "6s" }} />
              <span>Đang mở khu vườn hoa...</span>
            </div>
          </motion.div>

          {/* 3. Envelope Side Pockets (Left & Right folded triangles) */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Left Pocket Flap */}
            <div
              className="absolute left-0 bottom-0 top-0 w-1/2"
              style={{
                clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                background: "linear-gradient(135deg, #fbcfe8 0%, #f472b6 100%)",
                filter: "drop-shadow(2px 0 3px rgba(157, 23, 77, 0.12))",
              }}
            />

            {/* Right Pocket Flap */}
            <div
              className="absolute right-0 bottom-0 top-0 w-1/2"
              style={{
                clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                background: "linear-gradient(225deg, #fbcfe8 0%, #f472b6 100%)",
                filter: "drop-shadow(-2px 0 3px rgba(157, 23, 77, 0.12))",
              }}
            />

            {/* Bottom Pocket Flap */}
            <div
              className="absolute left-0 right-0 bottom-0 h-3/5"
              style={{
                clipPath: "polygon(0 100%, 50% 30%, 100% 100%)",
                background: "linear-gradient(180deg, #f9a8d4 0%, #f472b6 60%, #db2777 100%)",
                boxShadow: "0 -4px 10px rgba(157, 23, 77, 0.15)",
              }}
            >
              {/* Subtle gold line on bottom flap fold */}
              <div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.25) 50%, transparent)",
                }}
              />
            </div>
          </div>

          {/* 4. Top Triangular Flap (Rotates open in 3D: rotateX 0deg -> -180deg) */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{
              rotateX: isOpening ? -180 : 0,
            }}
            transition={{
              duration: 1.2,
              ease: [0.34, 1.25, 0.64, 1],
            }}
            className="absolute left-0 right-0 top-0 h-1/2 z-30"
            style={{
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Front of Flap (triangle pointing down) */}
            <div
              className="absolute inset-0 backface-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                background: "linear-gradient(180deg, #fce7ed 0%, #f4a6be 60%, #f472b6 100%)",
                boxShadow: "0 8px 18px rgba(157, 23, 77, 0.2)",
              }}
            >
              {/* Gold foil edge highlight */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  boxShadow: "inset 0 -2px 4px rgba(217, 119, 6, 0.3)",
                }}
              />
            </div>

            {/* Back of Flap (visible when folded open upward) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                background: "linear-gradient(0deg, #fce7ed 0%, #fbcfe8 100%)",
                transform: "rotateY(180deg) rotateZ(180deg)",
                backfaceVisibility: "hidden",
              }}
            />

            {/* Heart Wax Seal (Centered on the tip of the triangular flap) */}
            <AnimatePresence>
              {!isOpening && (
                <motion.div
                  initial={{ scale: 1 }}
                  exit={{
                    scale: [1, 1.4, 0],
                    opacity: [1, 1, 0],
                    filter: ["brightness(1)", "brightness(2)", "brightness(3)"],
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] sm:bottom-[-22px] z-40 pointer-events-auto"
                >
                  <div className="relative group">
                    {/* Golden glow aura around heart seal */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-rose-500 to-pink-500 rounded-full blur-md opacity-60 group-hover:opacity-90 transition-opacity animate-pulse" />

                    {/* Wax Seal Body */}
                    <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-rose-600 via-rose-700 to-rose-950 flex items-center justify-center shadow-xl border-2 border-amber-300/80 group-hover:scale-105 transition-transform duration-300">
                      {/* Wax stamp rim texture */}
                      <div className="absolute inset-1 rounded-full border border-rose-400/40 opacity-75" />

                      {/* Golden Heart Icon */}
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200 fill-amber-300 drop-shadow-md group-hover:scale-110 transition-transform" />

                      {/* Shimmer light bar across wax */}
                      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                        <div className="w-full h-full bg-gradient-to-tr from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Text & Guidance below envelope */}
      <AnimatePresence>
        {stage === "envelope" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="mt-8 sm:mt-10 text-center px-4 z-30"
          >
            <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-rose-900 tracking-wide drop-shadow-sm">
              Gửi đến những người phụ nữ tuyệt vời 💗
            </h2>

            <div className="mt-2.5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-rose-200/80 shadow-sm text-xs sm:text-sm font-medium text-rose-700 animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Chạm vào phong thư để mở lời chúc</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
