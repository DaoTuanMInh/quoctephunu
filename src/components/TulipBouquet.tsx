"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface TulipItem {
  id: string;
  x: number; // offset px from center
  y: number; // offset px from base
  rotate: number; // degrees
  scale: number;
  delay: number;
  zIndex: number;
}

// 11 Tulips arranged in a dense, lush, rounded bouquet matching the user's reference photo
const tulips: TulipItem[] = [
  // Top center crown tulip
  { id: "t1", x: 0, y: -210, rotate: 0, scale: 1.05, delay: 0.1, zIndex: 12 },
  // Upper left & right
  { id: "t2", x: -44, y: -195, rotate: -8, scale: 1.02, delay: 0.16, zIndex: 11 },
  { id: "t3", x: 44, y: -195, rotate: 8, scale: 1.02, delay: 0.16, zIndex: 11 },
  // Mid center pair
  { id: "t4", x: -28, y: -150, rotate: -4, scale: 1.04, delay: 0.22, zIndex: 15 },
  { id: "t5", x: 28, y: -150, rotate: 4, scale: 1.04, delay: 0.22, zIndex: 15 },
  // Mid outer flank pair
  { id: "t6", x: -80, y: -155, rotate: -20, scale: 0.98, delay: 0.28, zIndex: 10 },
  { id: "t7", x: 80, y: -155, rotate: 20, scale: 0.98, delay: 0.28, zIndex: 10 },
  // Lower side pair
  { id: "t8", x: -105, y: -115, rotate: -32, scale: 0.94, delay: 0.34, zIndex: 14 },
  { id: "t9", x: 105, y: -115, rotate: 32, scale: 0.94, delay: 0.34, zIndex: 14 },
  // Lower front pair
  { id: "t10", x: -55, y: -105, rotate: -14, scale: 1.0, delay: 0.38, zIndex: 16 },
  { id: "t11", x: 55, y: -105, rotate: 14, scale: 1.0, delay: 0.38, zIndex: 16 },
];

// Botanical lush green leaves fanning out behind and between the tulips
const leaves = [
  { id: "l1", d: "M 0 0 C -35 -40, -45 -110, -25 -170 C -10 -120, -5 -60, 0 0", fill: "#15803d", rotate: -25, delay: 0.15, zIndex: 5 },
  { id: "l2", d: "M 0 0 C 35 -40, 45 -110, 25 -170 C 10 -120, 5 -60, 0 0", fill: "#16a34a", rotate: 25, delay: 0.15, zIndex: 5 },
  { id: "l3", d: "M 0 0 C -50 -30, -85 -80, -90 -140 C -60 -95, -25 -50, 0 0", fill: "#22c55e", rotate: -38, delay: 0.25, zIndex: 4 },
  { id: "l4", d: "M 0 0 C 50 -30, 85 -80, 90 -140 C 60 -95, 25 -50, 0 0", fill: "#22c55e", rotate: 38, delay: 0.25, zIndex: 4 },
  { id: "l5", d: "M 0 0 C -20 -30, -15 -80, 0 -130 C 15 -80, 10 -30, 0 0", fill: "#166534", rotate: 0, delay: 0.1, zIndex: 3 },
  { id: "l6", d: "M 0 0 C -15 -20, -30 -60, -20 -95 C -10 -65, -5 -35, 0 0", fill: "#4ade80", rotate: -12, delay: 0.3, zIndex: 13 },
  { id: "l7", d: "M 0 0 C 15 -20, 30 -60, 20 -95 C 10 -65, 5 -35, 0 0", fill: "#4ade80", rotate: 12, delay: 0.3, zIndex: 13 },
];

interface TulipBouquetProps {
  isOpened: boolean;
  onOpen: () => void;
}

export default function TulipBouquet({ isOpened, onOpen }: TulipBouquetProps) {
  return (
    <div className="relative flex flex-col items-center justify-center select-none">
      {/* Radiant Floral Halo Glow behind flowers */}
      <motion.div
        animate={{
          scale: isOpened ? [1, 1.15, 1.05] : 0.8,
          opacity: isOpened ? [0.65, 0.9, 0.7] : 0.2,
        }}
        transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-36 w-96 h-96 rounded-full bg-gradient-to-tr from-pink-600/35 via-rose-500/30 to-fuchsia-600/25 blur-3xl pointer-events-none"
      />

      {/* TULIP FLOWERS CONTAINER (Hiệu ứng bung hoa) */}
      <div className="relative w-80 h-72 flex items-center justify-center">
        {/* Leaves Sprouting Outwards */}
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            initial={false}
            animate={{
              scale: isOpened ? 1 : 0.2,
              opacity: isOpened ? 0.95 : 0,
              y: isOpened ? 0 : 50,
            }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 14,
              delay: isOpened ? leaf.delay : 0,
            }}
            style={{
              position: "absolute",
              bottom: "40px",
              transformOrigin: "bottom center",
              transform: `rotate(${leaf.rotate}deg)`,
              zIndex: leaf.zIndex,
            }}
            className="pointer-events-none drop-shadow-sm"
          >
            <svg viewBox="-100 -180 200 180" className="w-36 h-36 overflow-visible">
              <path d={leaf.d} fill={leaf.fill} opacity="0.95" />
            </svg>
          </motion.div>
        ))}

        {/* 11 Tulips with Stems & Radiant Blooms */}
        {tulips.map((tulip) => (
          <TulipFlower
            key={tulip.id}
            item={tulip}
            isOpened={isOpened}
          />
        ))}

        {/* Central Burst Aura when opened */}
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{ scale: 0.2, opacity: 1 }}
              animate={{ scale: [0.2, 1.6, 2], opacity: [1, 0.7, 0] }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute -top-32 w-48 h-48 rounded-full bg-gradient-to-r from-pink-400/50 via-rose-300/40 to-amber-200/50 blur-xl pointer-events-none z-20"
            />
          )}
        </AnimatePresence>
      </div>

      {/* KRAFT BOUQUET WRAPPER & ENVELOPE (At the base) */}
      <div className="relative -mt-16 z-20 flex flex-col items-center">
        {/* Kraft Paper Fan Wrapping (Pleated bouquet paper from reference image) */}
        <div className="relative w-72 sm:w-80 h-52 flex items-center justify-center">
          {/* Back fan pleats */}
          <div
            className="absolute -top-6 inset-x-4 h-32 origin-bottom z-0"
            style={{
              clipPath: "polygon(0 40%, 15% 15%, 35% 0%, 65% 0%, 85% 15%, 100% 40%, 80% 100%, 20% 100%)",
              background: "linear-gradient(180deg, #f5c78e 0%, #e0a364 50%, #c58645 100%)",
              boxShadow: "0 -4px 15px rgba(0,0,0,0.25)",
            }}
          />

          {/* Left Kraft paper fold */}
          <div
            className="absolute left-2 bottom-6 w-36 h-48 origin-bottom-right z-10"
            style={{
              clipPath: "polygon(0 15%, 100% 40%, 100% 100%, 20% 100%)",
              background: "linear-gradient(135deg, #f6cf9c 0%, #e0a364 50%, #b87532 100%)",
              boxShadow: "-4px 6px 18px rgba(0,0,0,0.35)",
            }}
          />

          {/* Right Kraft paper fold */}
          <div
            className="absolute right-2 bottom-6 w-36 h-48 origin-bottom-left z-10"
            style={{
              clipPath: "polygon(0 40%, 100% 15%, 80% 100%, 0 100%)",
              background: "linear-gradient(225deg, #f6cf9c 0%, #e0a364 50%, #b87532 100%)",
              boxShadow: "4px 6px 18px rgba(0,0,0,0.35)",
            }}
          />

          {/* Lyrical Subtitle from Reference Image: 'HÃY ĐỂ CON TIM NÀY ĐƯỢC NƯƠNG NÁU' */}
          <div className="absolute top-2 inset-x-0 text-center z-25 pointer-events-none">
            <motion.div
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="lyric-glow text-[11px] sm:text-xs font-serif font-bold tracking-[0.22em] uppercase leading-snug">
                HÃY ĐỂ CON TIM
              </p>
              <p className="lyric-glow text-[11px] sm:text-xs font-serif font-bold tracking-[0.22em] uppercase leading-snug">
                NÀY ĐƯỢC NƯƠNG NÁU
              </p>
            </motion.div>
          </div>

          {/* Center Front Envelope */}
          <motion.div
            whileHover={!isOpened ? { scale: 1.04 } : {}}
            whileTap={!isOpened ? { scale: 0.97 } : {}}
            onClick={!isOpened ? onOpen : undefined}
            className={`relative z-30 w-56 sm:w-64 h-32 mt-12 rounded-xl bg-gradient-to-b from-[#fff0f3] to-[#fed7e2] border-2 border-rose-300/90 shadow-2xl flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 ${
              !isOpened ? "animate-pulse" : ""
            }`}
            style={{
              boxShadow: "0 12px 30px -5px rgba(225, 29, 72, 0.4), 0 0 20px rgba(251, 207, 232, 0.5)",
            }}
          >
            {/* Triangular Flap dotted fold lines */}
            <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden">
              <svg viewBox="0 0 256 128" className="w-full h-full">
                <path
                  d={
                    isOpened
                      ? "M 0 0 L 128 42 L 256 0"
                      : "M 0 0 L 128 68 L 256 0"
                  }
                  fill="none"
                  stroke="#f472b6"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  className="transition-all duration-700"
                />
              </svg>
            </div>

            {/* Glowing Heart Wax Seal Button */}
            <div className="relative z-40 my-auto flex flex-col items-center">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen();
                }}
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 0.92 }}
                className="relative group p-1 focus:outline-none"
                aria-label="Nhấn để mở thiệp và bung hoa"
              >
                {/* Radiant Neon Heart Glow */}
                <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-300 blur-md opacity-85 group-hover:opacity-100 animate-pulse" />

                {/* Wax Stamp Body */}
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-rose-700 via-pink-600 to-rose-500 border-2 border-pink-200 flex items-center justify-center shadow-xl">
                  <Heart className="w-6 h-6 text-white fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.95)] group-hover:scale-115 transition-transform" />
                </div>
              </motion.button>
            </div>

            {/* Hint text if not opened */}
            {!isOpened && (
              <span className="text-[11px] font-sans font-semibold text-rose-800 tracking-wide mt-1 animate-pulse">
                Chạm để mở thiệp 💗
              </span>
            )}
          </motion.div>

          {/* Kraft wrapping paper bottom cone point */}
          <div
            className="absolute -bottom-10 w-24 h-16 z-20"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: "linear-gradient(180deg, #e0a364 0%, #b87532 100%)",
            }}
          />

          {/* Cute Pink Ribbon Bow at bottom */}
          <div className="absolute -bottom-6 z-40 flex items-center justify-center">
            <div className="w-8 h-6 bg-pink-400 rounded-full rotate-[-25deg] shadow-md border border-pink-300" />
            <div className="w-5 h-5 bg-pink-600 rounded-full shadow-lg border border-pink-200 z-10 mx-[-4px]" />
            <div className="w-8 h-6 bg-pink-400 rounded-full rotate-[25deg] shadow-md border border-pink-300" />
          </div>

          {/* Ribbon tails hanging down */}
          <div className="absolute -bottom-12 z-30 flex gap-2">
            <div
              className="w-5 h-9 bg-gradient-to-b from-pink-500 to-pink-400 rotate-[-15deg]"
              style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 85%)" }}
            />
            <div
              className="w-5 h-9 bg-gradient-to-b from-pink-500 to-pink-400 rotate-[15deg]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 30% 100%)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Subcomponent: High-fidelity Individual Tulip Flower (matching the user photo)
function TulipFlower({
  item,
  isOpened,
}: {
  item: TulipItem;
  isOpened: boolean;
}) {
  const { x, y, rotate, scale, delay, zIndex } = item;

  return (
    <motion.div
      initial={false}
      animate={{
        x: isOpened ? x : x * 0.25,
        y: isOpened ? y : y * 0.35 + 50,
        scale: isOpened ? scale : 0.25,
        rotate: isOpened ? rotate : rotate * 0.2,
        opacity: isOpened ? 1 : 0.7,
      }}
      transition={{
        type: "spring",
        stiffness: 125,
        damping: 14,
        delay: isOpened ? delay : 0.05,
      }}
      style={{
        transformOrigin: "bottom center",
        position: "absolute",
        bottom: "40px",
        zIndex,
      }}
      className="flex flex-col items-center pointer-events-none tulip-glow"
    >
      {/* 1. Tulip Blossom (SVG egg/cup curved petals with glowing highlights) */}
      <div className="relative w-14 h-16 sm:w-16 sm:h-18">
        <svg viewBox="0 0 100 120" className="w-full h-full overflow-visible drop-shadow-md">
          <defs>
            {/* Center petal gradient */}
            <linearGradient id={`tulip-center-${item.id}`} x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#fbcfe8" />
              <stop offset="65%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#9d174d" />
            </linearGradient>

            {/* Left petal gradient */}
            <linearGradient id={`tulip-left-${item.id}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="60%" stopColor="#db2777" />
              <stop offset="100%" stopColor="#831843" />
            </linearGradient>

            {/* Right petal gradient */}
            <linearGradient id={`tulip-right-${item.id}`} x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="60%" stopColor="#db2777" />
              <stop offset="100%" stopColor="#831843" />
            </linearGradient>
          </defs>

          {/* Center Petal (Inner rounded cup) */}
          <path
            d="M 50 15 C 32 15, 25 50, 32 95 C 40 108, 60 108, 68 95 C 75 50, 68 15, 50 15 Z"
            fill={`url(#tulip-center-${item.id})`}
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />

          {/* Left Wing Petal */}
          <path
            d="M 50 25 C 22 28, 8 60, 18 95 C 26 106, 40 108, 50 110 C 35 85, 30 50, 50 25 Z"
            fill={`url(#tulip-left-${item.id})`}
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          {/* Right Wing Petal */}
          <path
            d="M 50 25 C 78 28, 92 60, 82 95 C 74 106, 60 108, 50 110 C 65 85, 70 50, 50 25 Z"
            fill={`url(#tulip-right-${item.id})`}
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          {/* Soft white reflection curve on left */}
          <path
            d="M 28 40 Q 22 65 30 85"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.45"
          />

          {/* Calyx green base point */}
          <path
            d="M 44 108 Q 50 118 56 108 Z"
            fill="#15803d"
          />
        </svg>
      </div>

      {/* 2. Vibrant Green Stem */}
      <div
        className="w-1.5 bg-gradient-to-b from-emerald-500 via-green-600 to-green-800 rounded-full shadow-sm -mt-2"
        style={{
          height: `${Math.abs(y) - 20}px`,
        }}
      />
    </motion.div>
  );
}
