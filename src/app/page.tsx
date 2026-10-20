"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import GardenExperience from "@/components/GardenExperience";

function PageContent() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to")?.toLowerCase();

  const target = to === "me" ? "me" : to === "both" || to === "all" ? "both" : "phuong";

  return <GardenExperience target={target} />;
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#16030d] text-pink-200 font-serif">
          Đang chuẩn bị khu vườn hoa 20/10...
        </div>
      }
    >
      <PageContent />
    </Suspense>
  );
}
