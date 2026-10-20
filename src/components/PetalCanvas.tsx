"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  tilt: number;
  tiltSpeed: number;
  opacity: number;
  color: string;
}

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  hue: number;
}

export default function PetalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Color palette for petals
    const petalColors = [
      "rgba(251, 207, 232, 0.85)", // soft pastel pink
      "rgba(244, 114, 182, 0.75)", // rose pink
      "rgba(253, 230, 238, 0.9)",  // cream rose
      "rgba(249, 168, 212, 0.8)",  // cherry blossom pink
      "rgba(255, 228, 235, 0.85)", // blush pink
    ];

    const petalCount = window.innerWidth < 768 ? 20 : 35;
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 10 + 9,
      speedY: Math.random() * 1.2 + 0.8,
      speedX: Math.random() * 1.5 - 0.7,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      tilt: Math.random() * Math.PI,
      tiltSpeed: Math.random() * 0.03 + 0.015,
      opacity: Math.random() * 0.4 + 0.5,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
    }));

    // Ambient twinkling fairy sparkles
    const sparkleCount = window.innerWidth < 768 ? 25 : 45;
    const sparkles: Sparkle[] = Array.from({ length: sparkleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random(),
      maxOpacity: Math.random() * 0.7 + 0.3,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      hue: Math.random() > 0.5 ? 45 : 340, // Champagne gold or soft rose
    }));

    let windTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      windTime += 0.01;
      const windForce = Math.sin(windTime) * 0.8;

      // 1. Draw Sparkles
      sparkles.forEach((s) => {
        s.opacity += s.pulseSpeed;
        if (s.opacity > s.maxOpacity || s.opacity < 0.1) {
          s.pulseSpeed = -s.pulseSpeed;
        }

        ctx.save();
        ctx.beginPath();
        const glowColor =
          s.hue === 45
            ? `rgba(254, 240, 138, ${s.opacity})`
            : `rgba(251, 207, 232, ${s.opacity})`;
        ctx.fillStyle = glowColor;
        ctx.shadowBlur = 8;
        ctx.shadowColor = glowColor;
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Cross flare on brightest sparkles
        if (s.opacity > 0.6 && s.size > 2) {
          ctx.strokeStyle = glowColor;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(s.x - s.size * 2, s.y);
          ctx.lineTo(s.x + s.size * 2, s.y);
          ctx.moveTo(s.x, s.y - s.size * 2);
          ctx.lineTo(s.x, s.y + s.size * 2);
          ctx.stroke();
        }
        ctx.restore();
      });

      // 2. Draw Falling / Floating Petals
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + windForce * 0.4;
        p.rotation += p.rotationSpeed;
        p.tilt += p.tiltSpeed;

        // Reset if off-screen
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.scale(1, Math.sin(p.tilt)); // 3D flipping effect

        // Draw organic petal shape
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
          -p.size * 0.8,
          -p.size * 0.6,
          -p.size * 0.6,
          -p.size * 1.4,
          0,
          -p.size * 1.5
        );
        ctx.bezierCurveTo(
          p.size * 0.6,
          -p.size * 1.4,
          p.size * 0.8,
          -p.size * 0.6,
          0,
          0
        );

        ctx.fillStyle = p.color;
        ctx.shadowColor = "rgba(244, 114, 182, 0.3)";
        ctx.shadowBlur = 4;
        ctx.fill();

        // Subtle petal vein
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.1);
        ctx.lineTo(0, -p.size * 1.1);
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 h-full w-full"
      aria-hidden="true"
    />
  );
}
