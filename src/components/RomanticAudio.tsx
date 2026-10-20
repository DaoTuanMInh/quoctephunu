"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface RomanticAudioProps {
  autoStartOnInteract?: boolean;
}

export default function RomanticAudio({ autoStartOnInteract = false }: RomanticAudioProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const noteIndexRef = useRef(0);
  const beatRef = useRef(0);

  // Cheerful, upbeat melody in C major / G major – bouncy and happy!
  // Think of a playful, sunny day vibe 🌸
  const melodyNotes = [
    // Phrase 1 – ascending joyful run
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00, // A5
    783.99, // G5
    659.25, // E5
    698.46, // F5
    // Phrase 2 – bouncy hop
    783.99, // G5
    659.25, // E5
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00, // A5
    1046.50, // C6
    // Phrase 3 – playful descent
    880.00, // A5
    783.99, // G5
    659.25, // E5
    587.33, // D5
    523.25, // C5
    587.33, // D5
    659.25, // E5
    523.25, // C5
  ];

  // Bass line – alternating root and fifth for bouncy feel
  const bassNotes = [
    261.63, // C4
    196.00, // G3
    220.00, // A3
    261.63, // C4
    196.00, // G3
    174.61, // F3
    196.00, // G3
    261.63, // C4
  ];

  // Synthesize a bright, sparkly chime sound (more cheerful than romantic)
  const playChime = useCallback((freq: number, duration = 1.2, gainLevel = 0.1) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const now = ctx.currentTime;

    // Triple oscillator: sine for warmth, triangle for brightness, square (soft) for sparkle
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = "sine";
    osc2.type = "triangle";
    osc3.type = "sine";

    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 2, now); // bright octave
    osc3.frequency.setValueAtTime(freq * 3, now); // sparkle overtone (very soft)

    // Snappy envelope: quick attack, medium sustain, then decay – bouncy feel
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.linearRampToValueAtTime(gainLevel, now + 0.02);
    gainNode.gain.linearRampToValueAtTime(gainLevel * 0.6, now + 0.15);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Brighter filter – let more high frequencies through for cheerful sparkle
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(3000, now);
    filter.Q.setValueAtTime(1, now);

    const osc3Gain = ctx.createGain();
    osc3Gain.gain.setValueAtTime(gainLevel * 0.15, now); // very subtle sparkle

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    osc3.connect(osc3Gain);
    osc3Gain.connect(gainNode);
    gainNode.connect(filter);
    filter.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);

    osc1.stop(now + duration);
    osc2.stop(now + duration);
    osc3.stop(now + duration);
  }, []);

  // Play a short percussive "tick" for rhythm
  const playTick = useCallback((gainLevel = 0.03) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

    gainNode.gain.setValueAtTime(gainLevel, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  }, []);

  const startMusic = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    isPlayingRef.current = true;
    setIsPlaying(true);

    const step = () => {
      if (!isPlayingRef.current) return;

      const melodyFreq = melodyNotes[noteIndexRef.current % melodyNotes.length];
      playChime(melodyFreq, 1.4, 0.08);

      // Bass note every 3 beats for a bouncy rhythm
      if (beatRef.current % 3 === 0) {
        const bassFreq = bassNotes[Math.floor(noteIndexRef.current / 3) % bassNotes.length];
        playChime(bassFreq, 1.8, 0.05);
      }

      // Light tick on every other beat for rhythm
      if (beatRef.current % 2 === 1) {
        playTick(0.025);
      }

      noteIndexRef.current = (noteIndexRef.current + 1) % melodyNotes.length;
      beatRef.current = (beatRef.current + 1) % 24;

      // Faster tempo for upbeat feel (280ms = ~214 BPM eighth notes)
      timerRef.current = setTimeout(step, 280);
    };

    step();
  }, [melodyNotes, bassNotes, playChime, playTick]);

  const stopMusic = useCallback(() => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "running") {
      audioCtxRef.current.suspend();
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    if (autoStartOnInteract && !isPlaying) {
      startMusic();
    }
  }, [autoStartOnInteract, isPlaying, startMusic]);

  useEffect(() => {
    return () => {
      stopMusic();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [stopMusic]);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button
        onClick={toggleMusic}
        className={`group relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 shadow-lg backdrop-blur-md border ${
          isPlaying
            ? "bg-rose-500/80 text-white border-rose-300/60 shadow-rose-500/30 hover:bg-rose-600 scale-105"
            : "bg-slate-900/60 text-rose-200 border-white/20 shadow-black/20 hover:bg-slate-900/80 hover:text-white"
        }`}
        title={isPlaying ? "Tắt âm thanh" : "Bật âm thanh"}
        aria-label={isPlaying ? "Tắt âm thanh" : "Bật âm thanh"}
      >
        {isPlaying ? (
          <div className="flex items-center justify-center relative">
            <Volume2 className="w-5 h-5 text-pink-200 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-300"></span>
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <VolumeX className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
          </div>
        )}
      </button>
    </div>
  );
}
