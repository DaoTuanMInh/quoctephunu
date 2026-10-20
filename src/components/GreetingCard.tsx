"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, RotateCcw, Sparkles, Share2, Edit3, Check } from "lucide-react";
import confetti from "canvas-confetti";

interface GreetingCardProps {
  isVisible: boolean;
  recipientName: string;
  onOpenNameModal: () => void;
  onReplay: () => void;
  onToggleVisibility?: () => void;
}

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export default function GreetingCard({
  isVisible,
  recipientName,
  onOpenNameModal,
  onReplay,
  onToggleVisibility,
}: GreetingCardProps) {
  const [rotateCoords, setRotateCoords] = useState({ x: 0, y: 0 });
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Parallax Tilt on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = (mouseX / (rect.width / 2)) * 6;
    const rotateX = -(mouseY / (rect.height / 2)) * 6;
    setRotateCoords({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotateCoords({ x: 0, y: 0 });
  };

  // Click card to spawn delicate floating hearts & sparkles
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const heartColors = ["#f43f5e", "#ec4899", "#fb7185", "#f472b6", "#e11d48"];
    const newHeart: FloatingHeart = {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.floor(Math.random() * 12) + 16,
      color: heartColors[Math.floor(Math.random() * heartColors.length)],
    };

    setFloatingHearts((prev) => [...prev.slice(-10), newHeart]);

    try {
      confetti({
        particleCount: 16,
        spread: 50,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        },
        colors: ["#f43f5e", "#fb7185", "#fbbf24", "#fda4af"],
        ticks: 80,
        gravity: 0.9,
        scalar: 0.7,
      });
    } catch {
      // Ignore
    }

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);
  };

  const handleCopyLink = () => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (recipientName.trim()) {
      url.searchParams.set("to", recipientName.trim());
    } else {
      url.searchParams.delete("to");
    }
    navigator.clipboard.writeText(url.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="relative z-40 flex flex-col items-center justify-center w-full max-w-lg mx-auto px-4"
      style={{ perspective: "1200px" }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              rotateX: rotateCoords.x,
              rotateY: rotateCoords.y,
            }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleCardClick}
            className="relative w-full luxury-card-texture rounded-3xl p-6 sm:p-8 text-center cursor-pointer select-none shadow-2xl border border-amber-300/40 overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Fine Art Botanical Corner Flourishes */}
            <div className="absolute top-3 left-3 w-7 h-7 pointer-events-none opacity-40">
              <svg viewBox="0 0 40 40" className="w-full h-full text-amber-600">
                <path
                  d="M 5 35 C 5 15, 15 5, 35 5 M 5 20 C 12 12, 20 12, 25 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>
            <div className="absolute top-3 right-3 w-7 h-7 pointer-events-none opacity-40 -scale-x-100">
              <svg viewBox="0 0 40 40" className="w-full h-full text-amber-600">
                <path
                  d="M 5 35 C 5 15, 15 5, 35 5 M 5 20 C 12 12, 20 12, 25 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </div>

            {/* Inner Border */}
            <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-amber-300/40 pointer-events-none" />

            {/* Floating Hearts spawned on tap */}
            {floatingHearts.map((heart) => (
              <motion.div
                key={heart.id}
                initial={{ opacity: 1, scale: 0.5, y: 0, x: 0 }}
                animate={{
                  opacity: 0,
                  scale: 1.5,
                  y: -80,
                  x: (Math.random() - 0.5) * 40,
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  left: heart.x,
                  top: heart.y,
                  pointerEvents: "none",
                  zIndex: 50,
                }}
              >
                <Heart
                  style={{
                    width: heart.size,
                    height: heart.size,
                    color: heart.color,
                    fill: heart.color,
                  }}
                  className="drop-shadow-md"
                />
              </motion.div>
            ))}

            {/* Card Content Header */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-amber-700/80 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.25em]">
                  Kính Gửi Phái Đẹp
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              </div>

              {/* Title */}
              <h2 className="font-serif text-lg sm:text-2xl font-bold tracking-wide text-rose-950 uppercase leading-snug drop-shadow-sm">
                CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM
              </h2>

              {/* 20 · 10 */}
              <div className="my-1.5 sm:my-2 relative flex items-center justify-center">
                <span className="rose-gold-gradient font-serif text-4xl sm:text-5xl font-extrabold tracking-wider drop-shadow-md">
                  20 · 10
                </span>
              </div>

              {/* Salutation */}
              {recipientName && (
                <div className="mb-2.5 px-3.5 py-0.5 rounded-full bg-rose-100/70 border border-rose-200/80 text-rose-900 font-serif text-sm font-semibold">
                  Gửi tặng: <span className="text-rose-700">{recipientName}</span> 🌸
                </div>
              )}

              {/* Message Body */}
              <div className="mt-1 text-rose-900/90 text-xs sm:text-sm leading-relaxed sm:leading-loose font-sans space-y-2 px-1 sm:px-3 text-zinc-800">
                <p className="font-normal">
                  “Chúc bạn luôn xinh đẹp, hạnh phúc và rạng rỡ như những đóa hoa.
                  Mong rằng mỗi ngày trong cuộc sống đều ngập tràn yêu thương,
                  tiếng cười và những điều tốt đẹp nhất. Chúc bạn luôn tự tin, tỏa
                  sáng và được trân trọng theo cách đặc biệt nhất.”
                </p>

                <p className="font-handwriting text-base sm:text-xl text-rose-700 font-bold pt-0.5">
                  “Chúc một ngày 20/10 thật nhiều niềm vui và yêu thương! 💗”
                </p>
              </div>

              <div className="mt-2 text-[10px] text-rose-400 italic">
                (Chạm vào thiệp để thả thêm tim & hoa)
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Buttons Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 flex flex-wrap items-center justify-center gap-2.5 w-full max-w-md z-30"
      >
        {/* Toggle View Card / View Bouquet */}
        {onToggleVisibility && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleVisibility();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-rose-200 text-xs font-medium shadow-md border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          >
            <span>{isVisible ? "Ẩn thiệp để ngắm hoa" : "Xem lại thiệp chúc"}</span>
          </button>
        )}

        {/* Change Recipient Name */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenNameModal();
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-rose-200 text-xs font-medium shadow-md border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        >
          <Edit3 className="w-3 h-3 text-pink-400" />
          <span>{recipientName ? "Đổi tên" : "Ghi tên"}</span>
        </button>

        {/* Share Link */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCopyLink();
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-rose-200 text-xs font-medium shadow-md border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-amber-300" />
              <span>Đã chép link!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3 h-3 text-pink-400" />
              <span>Chia sẻ</span>
            </>
          )}
        </button>

        {/* Replay Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onReplay();
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-xs font-medium shadow-md shadow-rose-900/40 transition-all hover:scale-105 active:scale-95"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Bung hoa lại</span>
        </button>
      </motion.div>
    </div>
  );
}
