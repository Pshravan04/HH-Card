"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import Image from "next/image";
import { RetroButton } from "@/components/RetroButton";

function VerifyContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("n") || "Unknown Builder";
  const role = searchParams.get("r") || "GUEST";
  const team = searchParams.get("t") || "No Team";
  const builderId = searchParams.get("i") || "HHGOA2026-XXXX";

  return (
    <div className="relative w-full max-w-[360px] mx-auto bg-[#F5F2E9] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0E3623] animate-in fade-in zoom-in duration-500 mt-8">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/assets/Sun_rise.png"
          alt="Background"
          fill
          className="object-cover object-bottom mix-blend-multiply sepia opacity-80"
          priority
        />
      </div>

      <div className="relative z-10 p-8 flex flex-col items-center">
        {/* Verification Badge */}
        <div className="w-16 h-16 bg-[#0E3623] rounded-full flex items-center justify-center mb-6 shadow-md border-2 border-white">
          <span className="material-symbols-outlined text-white text-[32px]">
            verified
          </span>
        </div>

        <h1 className="font-label-caps text-hot-pink font-bold tracking-[0.2em] text-xs uppercase mb-2">
          Verified Builder
        </h1>

        {/* Profile Silhouette */}
        <div className="w-32 h-32 rounded-full border-[2px] border-dashed border-hot-pink p-2 mb-4">
          <div className="w-full h-full rounded-full bg-[#14452F] overflow-hidden flex items-center justify-center relative shadow-inner">
            <span className="material-symbols-outlined text-white/50 text-[60px]">
              person
            </span>
          </div>
        </div>

        {/* Info */}
        <h2 className="font-headline-lg font-bold text-4xl text-[#14452F] uppercase tracking-tighter truncate w-full text-center mb-1">
          {name}
        </h2>
        <span className="font-label-caps text-hot-pink font-bold tracking-[0.2em] text-sm uppercase mb-6">
          {role}
        </span>

        {/* Details Grid */}
        <div className="w-full grid grid-cols-2 gap-4 border-t border-b border-[#14452F]/20 py-4 mb-8">
          <div className="flex flex-col items-center border-r border-[#14452F]/20">
            <span className="material-symbols-outlined text-hot-pink text-xl mb-1">
              group
            </span>
            <span className="font-label-caps text-[#14452F]/50 text-[9px] uppercase tracking-wider">
              TEAM
            </span>
            <span className="font-label-caps text-[#14452F] text-xs uppercase font-bold tracking-wider truncate w-full text-center px-1">
              {team}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-hot-pink text-xl mb-1">
              tag
            </span>
            <span className="font-label-caps text-[#14452F]/50 text-[9px] uppercase tracking-wider">
              ID
            </span>
            <span className="font-label-caps text-[#14452F] text-xs uppercase font-bold tracking-wider">
              {builderId}
            </span>
          </div>
        </div>

        <RetroButton href="/" className="w-full">
          Get Your ID Card
        </RetroButton>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-deep-forest text-on-surface flex flex-col items-center justify-center p-4">
      {/* Back button */}
      <div className="w-full max-w-[360px] flex justify-start">
        <a href="/" className="flex items-center text-white/70 hover:text-white transition-colors">
          <span className="material-symbols-outlined mr-1">arrow_back</span>
          <span className="font-label-caps text-sm tracking-widest uppercase">Home</span>
        </a>
      </div>

      <Suspense fallback={
        <div className="w-full max-w-[360px] h-[500px] bg-[#F5F2E9] rounded-3xl animate-pulse flex items-center justify-center mt-8">
          <span className="material-symbols-outlined text-[#14452F] animate-spin text-4xl">refresh</span>
        </div>
      }>
        <VerifyContent />
      </Suspense>
    </div>
  );
}
