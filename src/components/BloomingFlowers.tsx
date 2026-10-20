"use client";

import React from "react";
import { motion } from "framer-motion";

interface FlowerData {
  id: string;
  type: "rose" | "peony" | "tulip" | "cherry";
  x: string; // e.g., '5%', '15%', '85%'
  bottom: string; // e.g. '0px', '-10px'
  height: number; // Stem height in px
  flowerSize: number;
  stemCurve: "left" | "right" | "straight";
  colorTheme: "pastelPink" | "deepRose" | "creamWhite" | "blushCoral" | "champagnePink";
  delay: number; // Staggered delay for garden awakening
  swayType: "sway-left" | "sway-right";
  zIndex: number;
}

const flowers: FlowerData[] = [
  // Left Garden Cluster (Foreground & Midground)
  {
    id: "flower-left-1",
    type: "rose",
    x: "2%",
    bottom: "0px",
    height: 320,
    flowerSize: 95,
    stemCurve: "right",
    colorTheme: "deepRose",
    delay: 0.2,
    swayType: "sway-right",
    zIndex: 15,
  },
  {
    id: "flower-left-2",
    type: "peony",
    x: "8%",
    bottom: "-15px",
    height: 380,
    flowerSize: 110,
    stemCurve: "left",
    colorTheme: "pastelPink",
    delay: 0.6,
    swayType: "sway-left",
    zIndex: 14,
  },
  {
    id: "flower-left-3",
    type: "tulip",
    x: "16%",
    bottom: "0px",
    height: 270,
    flowerSize: 80,
    stemCurve: "right",
    colorTheme: "blushCoral",
    delay: 1.0,
    swayType: "sway-right",
    zIndex: 16,
  },
  {
    id: "flower-left-4",
    type: "cherry",
    x: "22%",
    bottom: "-25px",
    height: 220,
    flowerSize: 70,
    stemCurve: "left",
    colorTheme: "creamWhite",
    delay: 1.4,
    swayType: "sway-left",
    zIndex: 12,
  },

  // Right Garden Cluster (Foreground & Midground)
  {
    id: "flower-right-1",
    type: "peony",
    x: "88%",
    bottom: "-10px",
    height: 370,
    flowerSize: 115,
    stemCurve: "left",
    colorTheme: "pastelPink",
    delay: 0.4,
    swayType: "sway-left",
    zIndex: 15,
  },
  {
    id: "flower-right-2",
    type: "rose",
    x: "80%",
    bottom: "0px",
    height: 310,
    flowerSize: 92,
    stemCurve: "right",
    colorTheme: "deepRose",
    delay: 0.8,
    swayType: "sway-right",
    zIndex: 16,
  },
  {
    id: "flower-right-3",
    type: "tulip",
    x: "72%",
    bottom: "-15px",
    height: 260,
    flowerSize: 78,
    stemCurve: "left",
    colorTheme: "champagnePink",
    delay: 1.2,
    swayType: "sway-left",
    zIndex: 13,
  },
  {
    id: "flower-right-4",
    type: "cherry",
    x: "65%",
    bottom: "-20px",
    height: 210,
    flowerSize: 68,
    stemCurve: "right",
    colorTheme: "creamWhite",
    delay: 1.5,
    swayType: "sway-right",
    zIndex: 11,
  },

  // Bottom Center Border (Low profile so card remains easy to read)
  {
    id: "flower-bot-1",
    type: "cherry",
    x: "33%",
    bottom: "-10px",
    height: 150,
    flowerSize: 65,
    stemCurve: "straight",
    colorTheme: "pastelPink",
    delay: 1.7,
    swayType: "sway-left",
    zIndex: 10,
  },
  {
    id: "flower-bot-2",
    type: "tulip",
    x: "48%",
    bottom: "-20px",
    height: 140,
    flowerSize: 60,
    stemCurve: "right",
    colorTheme: "creamWhite",
    delay: 1.9,
    swayType: "sway-right",
    zIndex: 9,
  },
  {
    id: "flower-bot-3",
    type: "cherry",
    x: "56%",
    bottom: "-15px",
    height: 160,
    flowerSize: 62,
    stemCurve: "left",
    colorTheme: "blushCoral",
    delay: 1.8,
    swayType: "sway-left",
    zIndex: 10,
  },
];

// Color palette mapping
const colorPalettes = {
  pastelPink: {
    outer: "#fbcfe8", // pink-200
    mid: "#f472b6",   // pink-400
    inner: "#db2777", // pink-600
    center: "#fbbf24", // warm gold
  },
  deepRose: {
    outer: "#f43f5e", // rose-500
    mid: "#e11d48",   // rose-600
    inner: "#9f1239", // rose-800
    center: "#fef08a",
  },
  creamWhite: {
    outer: "#fffbeb", // amber-50
    mid: "#fce7ed",   // rose-100
    inner: "#f4a6be", // soft blush
    center: "#f59e0b",
  },
  blushCoral: {
    outer: "#fda4af", // rose-300
    mid: "#fb7185",   // rose-400
    inner: "#be185d", // pink-700
    center: "#fde047",
  },
  champagnePink: {
    outer: "#fef3c7", // amber-100
    mid: "#fbcfe8",   // pink-200
    inner: "#e11d48", // rose-600
    center: "#fbbf24",
  },
};

export default function BloomingFlowers({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Soft Foliage & Depth Shadow */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pink-900/10 via-rose-300/10 to-transparent pointer-events-none" />

      {/* Render Each Blooming Flower System */}
      {flowers.map((fl) => (
        <SingleBloomingFlower key={fl.id} data={fl} />
      ))}
    </div>
  );
}

function SingleBloomingFlower({ data }: { data: FlowerData }) {
  const { height, flowerSize, stemCurve, colorTheme, delay, swayType, zIndex } = data;
  const colors = colorPalettes[colorTheme];

  // Stem curve path geometry
  let stemD = `M 20 ${height} Q 20 ${height / 2} 20 0`;
  if (stemCurve === "left") {
    stemD = `M 20 ${height} Q 5 ${height / 2} 20 0`;
  } else if (stemCurve === "right") {
    stemD = `M 20 ${height} Q 35 ${height / 2} 20 0`;
  }

  return (
    <div
      className={`absolute ${swayType === "sway-left" ? "animate-sway-left" : "animate-sway-right"}`}
      style={{
        left: data.x,
        bottom: data.bottom,
        zIndex,
        animationDelay: `${delay + 2.5}s`,
      }}
    >
      {/* 1. Stem growing upward from bottom (scaleY from bottom) */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1.5,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "bottom center",
          height: `${height}px`,
          width: "40px",
        }}
        className="relative"
      >
        <svg
          viewBox={`0 0 40 ${height}`}
          className="h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id={`stem-grad-${data.id}`} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="60%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#86efac" />
            </linearGradient>
          </defs>

          {/* Stem path */}
          <path
            d={stemD}
            fill="none"
            stroke={`url(#stem-grad-${data.id})`}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Leaf 1 (Left side, unrolling with delay) */}
          <g transform={`translate(${stemCurve === "left" ? 10 : 20}, ${height * 0.55})`}>
            <motion.path
              d="M 0 0 C -25 -10, -35 -25, -25 -40 C -15 -35, -5 -20, 0 0"
              fill="#4ade80"
              stroke="#16a34a"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.95 }}
              transition={{
                duration: 0.8,
                delay: delay + 0.6,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "0px 0px" }}
            />
          </g>

          {/* Leaf 2 (Right side, unrolling with delay) */}
          <g transform={`translate(${stemCurve === "right" ? 30 : 20}, ${height * 0.35})`}>
            <motion.path
              d="M 0 0 C 25 -10, 35 -25, 25 -40 C 15 -35, 5 -20, 0 0"
              fill="#86efac"
              stroke="#22c55e"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 0.9, opacity: 0.95 }}
              transition={{
                duration: 0.8,
                delay: delay + 0.9,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "0px 0px" }}
            />
          </g>
        </svg>

        {/* 2. Flower Head (Positioned at the tip of the stem) */}
        <div
          className="absolute -top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ width: `${flowerSize}px`, height: `${flowerSize}px` }}
        >
          {/* A. Flower Bud Phase -> Blossoming Phase */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.4,
              delay: delay + 1.1,
              ease: [0.34, 1.3, 0.64, 1], // Gentle spring burst
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Sparkling halo around blooming flower */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.7, 0.4], scale: [0.5, 1.2, 1] }}
              transition={{
                duration: 2,
                delay: delay + 1.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-300/30 to-amber-200/30 blur-md pointer-events-none"
            />

            {/* Botanical Flower Type Renderer */}
            {data.type === "rose" && (
              <RoseBlossom colors={colors} delay={delay + 1.1} size={flowerSize} />
            )}
            {data.type === "peony" && (
              <PeonyBlossom colors={colors} delay={delay + 1.1} size={flowerSize} />
            )}
            {data.type === "tulip" && (
              <TulipBlossom colors={colors} delay={delay + 1.1} size={flowerSize} />
            )}
            {data.type === "cherry" && (
              <CherryBlossom colors={colors} delay={delay + 1.1} size={flowerSize} />
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Subcomponent: Multi-layered Realistic Blooming Rose
function RoseBlossom({
  colors,
  delay,
  size,
}: {
  colors: { outer: string; mid: string; inner: string; center: string };
  delay: number;
  size: number;
}) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-md">
      {/* Outer Petals Layer (Unfurls first, rotates wide) */}
      {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
        <motion.path
          key={`outer-${angle}`}
          d="M 50 50 C 35 15, 65 15, 50 10 C 25 15, 30 45, 50 50"
          fill={colors.outer}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.8"
          initial={{ scale: 0.2, rotate: angle, opacity: 0 }}
          animate={{ scale: 1, rotate: angle, opacity: 0.95 }}
          transition={{
            duration: 1.2,
            delay: delay + idx * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "50px 50px" }}
        />
      ))}

      {/* Mid Petals Layer (Unfurls next, velvety depth) */}
      {[30, 90, 150, 210, 270, 330].map((angle, idx) => (
        <motion.path
          key={`mid-${angle}`}
          d="M 50 50 C 40 25, 60 25, 50 20 C 35 25, 35 45, 50 50"
          fill={colors.mid}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="0.6"
          initial={{ scale: 0.1, rotate: angle, opacity: 0 }}
          animate={{ scale: 0.85, rotate: angle, opacity: 0.98 }}
          transition={{
            duration: 1.1,
            delay: delay + 0.3 + idx * 0.07,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "50px 50px" }}
        />
      ))}

      {/* Inner Petals (Spiral Heart of the Rose) */}
      {[15, 75, 135, 195, 255, 315].map((angle, idx) => (
        <motion.ellipse
          key={`inner-${angle}`}
          cx="50"
          cy="38"
          rx="11"
          ry="15"
          fill={colors.inner}
          initial={{ scale: 0, rotate: angle, opacity: 0 }}
          animate={{ scale: 0.65, rotate: angle, opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: delay + 0.6 + idx * 0.05,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "50px 50px" }}
        />
      ))}

      {/* Gold Heart Stamen Center */}
      <motion.circle
        cx="50"
        cy="50"
        r="6"
        fill={colors.center}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 1.1 }}
      />
    </svg>
  );
}

// Subcomponent: Lush Blooming Peony (Hoa Mẫu Đơn)
function PeonyBlossom({
  colors,
  delay,
  size,
}: {
  colors: { outer: string; mid: string; inner: string; center: string };
  delay: number;
  size: number;
}) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-lg">
      {/* Ruffled Broad Outer Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
        <motion.path
          key={`peony-outer-${angle}`}
          d="M 50 50 C 30 10, 70 10, 50 15 C 20 25, 35 45, 50 50"
          fill={colors.outer}
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="0.8"
          initial={{ scale: 0.2, rotate: angle, opacity: 0 }}
          animate={{ scale: 1.05, rotate: angle, opacity: 0.95 }}
          transition={{
            duration: 1.3,
            delay: delay + idx * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "50px 50px" }}
        />
      ))}

      {/* Lush Ruffled Mid Layer */}
      {[22, 67, 112, 157, 202, 247, 292, 337].map((angle, idx) => (
        <motion.path
          key={`peony-mid-${angle}`}
          d="M 50 50 C 35 20, 65 20, 50 25 C 30 32, 40 45, 50 50"
          fill={colors.mid}
          initial={{ scale: 0.1, rotate: angle, opacity: 0 }}
          animate={{ scale: 0.85, rotate: angle, opacity: 0.98 }}
          transition={{
            duration: 1.1,
            delay: delay + 0.35 + idx * 0.05,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "50px 50px" }}
        />
      ))}

      {/* Golden Pistils & Warm Center */}
      <motion.circle
        cx="50"
        cy="50"
        r="8"
        fill={colors.center}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.9 }}
      />
    </svg>
  );
}

// Subcomponent: Graceful Blooming Tulip
function TulipBlossom({
  colors,
  delay,
  size,
}: {
  colors: { outer: string; mid: string; inner: string; center: string };
  delay: number;
  size: number;
}) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-md">
      {/* Back petal */}
      <motion.path
        d="M 50 65 C 38 40, 42 20, 50 12 C 58 20, 62 40, 50 65"
        fill={colors.inner}
        initial={{ scaleY: 0.3, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.0, delay: delay + 0.2 }}
        style={{ transformOrigin: "50px 65px" }}
      />

      {/* Left opening petal */}
      <motion.path
        d="M 50 65 C 28 50, 20 28, 38 18 C 45 28, 48 48, 50 65"
        fill={colors.outer}
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.8"
        initial={{ scale: 0.2, rotate: 10, opacity: 0 }}
        animate={{ scale: 1, rotate: -8, opacity: 0.95 }}
        transition={{ duration: 1.2, delay: delay + 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "50px 65px" }}
      />

      {/* Right opening petal */}
      <motion.path
        d="M 50 65 C 72 50, 80 28, 62 18 C 55 28, 52 48, 50 65"
        fill={colors.mid}
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.8"
        initial={{ scale: 0.2, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 8, opacity: 0.95 }}
        transition={{ duration: 1.2, delay: delay + 0.5, ease: "easeOut" }}
        style={{ transformOrigin: "50px 65px" }}
      />

      {/* Front center petal with smooth sheen */}
      <motion.path
        d="M 50 65 C 35 48, 38 28, 50 20 C 62 28, 65 48, 50 65"
        fill={colors.outer}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 0.95, opacity: 1 }}
        transition={{ duration: 1.1, delay: delay + 0.7 }}
        style={{ transformOrigin: "50px 65px" }}
      />
    </svg>
  );
}

// Subcomponent: Delicate Cherry Blossom (Sakura)
function CherryBlossom({
  colors,
  delay,
  size,
}: {
  colors: { outer: string; mid: string; inner: string; center: string };
  delay: number;
  size: number;
}) {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow">
      {/* 5 Classic Cherry Blossom Petals with notched tip */}
      {[0, 72, 144, 216, 288].map((angle, idx) => (
        <motion.path
          key={`cherry-${angle}`}
          d="M 50 50 C 35 25, 42 12, 48 10 C 50 13, 50 13, 52 10 C 58 12, 65 25, 50 50"
          fill={colors.outer}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.6"
          initial={{ scale: 0, rotate: angle }}
          animate={{ scale: 1, rotate: angle }}
          transition={{
            duration: 1.0,
            delay: delay + idx * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "50px 50px" }}
        />
      ))}

      {/* Stamens radiating from center */}
      <motion.circle
        cx="50"
        cy="50"
        r="5"
        fill={colors.center}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.6 }}
      />
    </svg>
  );
}
