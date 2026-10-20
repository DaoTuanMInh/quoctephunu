"use client";

import React, { useState, useEffect } from "react";
import NightGardenScene from "@/components/NightGardenScene";
import RomanticAudio from "@/components/RomanticAudio";

interface GardenExperienceProps {
  target?: "phuong" | "me" | "both";
}

export default function GardenExperience({ target = "phuong" }: GardenExperienceProps) {
  const [hasInteracted, setHasInteracted] = useState(false);

  // Handle first user interaction to unlock audio
  useEffect(() => {
    const handleFirstClick = () => {
      setHasInteracted(true);
      window.removeEventListener("click", handleFirstClick);
      window.removeEventListener("touchstart", handleFirstClick);
    };
    window.addEventListener("click", handleFirstClick, { once: true });
    window.addEventListener("touchstart", handleFirstClick, { once: true });
    return () => {
      window.removeEventListener("click", handleFirstClick);
      window.removeEventListener("touchstart", handleFirstClick);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden select-none">
      <NightGardenScene target={target} />
      <RomanticAudio autoStartOnInteract={hasInteracted} />
    </main>
  );
}
