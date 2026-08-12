"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import QRCode from "qrcode";

export interface IDCardProps {
  name: string;
  role: string;
  team: string;
  photo: string | null;
  builderId: string;
  flipped?: boolean;
}

export function IDCard({
  name,
  role,
  team,
  photo,
  builderId,
  flipped = false,
}: IDCardProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    // Generate QR code pointing to a verification URL
    const generateQR = async () => {
      try {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://hhgoa.com';
        const verifyUrl = new URL('/verify', baseUrl);
        verifyUrl.searchParams.set('n', name || '');
        verifyUrl.searchParams.set('r', role || '');
        verifyUrl.searchParams.set('t', team || '');
        verifyUrl.searchParams.set('i', builderId || 'HHGOA2026-0001');

        const dataUrl = await QRCode.toDataURL(verifyUrl.toString(), {
          width: 300,
          margin: 1,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        });
        setQrCodeUrl(dataUrl);
      } catch (err) {
        console.error("Error generating QR code", err);
      }
    };
    generateQR();
  }, [builderId]);

  return (
    <div
      className="relative w-full max-w-[420px] h-[720px] mx-auto perspective-1000 group transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[24px]"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className={`w-full h-full relative preserve-3d transition-transform duration-700 rounded-[24px] ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT FACE */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-[24px] flex flex-col overflow-hidden bg-[#F5F2E9]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Lanyard Hole */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-deep-forest/20 rounded-full flex items-center justify-center z-50">
            <div className="w-10 h-2 bg-black/20 rounded-full" />
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <Image
              src="/assets/Sun_rise.png"
              alt="Card Background"
              fill
              className="object-cover object-bottom opacity-80 sepia mix-blend-multiply"
              priority
            />
          </div>
          
          <div className="absolute top-20 right-8 z-0 opacity-20 transform -scale-x-100">
            <Image
              src="/assets/palm_tree.png"
              alt="Palm"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          <div className="absolute top-24 left-4 z-0 opacity-20">
            <Image
              src="/assets/palm_tree.png"
              alt="Palm"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Content Top */}
          <div className="p-8 pt-16 flex-grow flex flex-col items-center relative z-10 text-deep-forest text-center">
            <span className="font-label-caps text-hot-pink font-bold tracking-[0.2em] text-xs uppercase mb-1">
              Hacker House
            </span>

            {/* Big GOA Text */}
            <div className="relative flex items-center justify-center w-full mt-1 mb-2">
              <span className="material-symbols-outlined text-[#14452F] text-4xl absolute left-4">
                local_florist
              </span>
              <span className="font-headline-lg text-[#14452F] text-[90px] leading-none tracking-tighter">
                GOA
              </span>
              <span className="font-script text-6xl text-hot-pink absolute z-20 top-[60%] left-[65%] -translate-x-1/2 -translate-y-1/2 -rotate-6 drop-shadow-sm pointer-events-none">
                2026
              </span>
              <span className="material-symbols-outlined text-[#14452F] text-4xl absolute right-4">
                local_florist
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-1 bg-hot-pink rounded-full"></div>
              <span className="font-label-caps text-[10px] tracking-widest uppercase font-bold text-deep-forest/80">
                Edition 2026
              </span>
              <div className="w-1 h-1 bg-hot-pink rounded-full"></div>
            </div>

            <span className="font-label-caps text-[10px] tracking-widest mb-6 opacity-70 uppercase">
              28 - 31 OCT 2026 • GOA, INDIA
            </span>

            {/* Profile Photo Area */}
            <div className="relative mb-6">
              <div className="w-40 h-40 rounded-full border-[2px] border-dashed border-hot-pink p-2">
                <div className="w-full h-full rounded-full bg-[#14452F] overflow-hidden flex items-center justify-center relative">
                  {photo ? (
                    <img
                      src={photo}
                      alt="Builder"
                      className="w-full h-full object-cover grayscale contrast-125 brightness-75 mix-blend-luminosity opacity-90"
                      crossOrigin="anonymous"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-white/50 text-[80px]">
                      person
                    </span>
                  )}
                  {/* Faint overlay on photo to match design vibe */}
                  <div className="absolute inset-0 bg-[#14452F]/10 mix-blend-color"></div>
                </div>
              </div>
            </div>

            {/* Name & Role */}
            <h3 className="font-headline-lg font-bold text-5xl text-[#14452F] uppercase tracking-tighter truncate w-full px-4 mb-1">
              {name || "YOUR NAME"}
            </h3>
            <span className="font-label-caps text-hot-pink font-bold tracking-[0.2em] text-sm uppercase">
              {role || "BUILDER"}
            </span>

            {/* Divider and Motto */}
            <div className="w-full border-t border-[#14452F]/20 mt-4 pt-4 pb-2 mb-12">
              <div className="flex items-center justify-center gap-2">
                <span className="font-label-caps text-[11px] font-bold tracking-widest text-[#14452F]">BUILD</span>
                <div className="w-1 h-1 bg-hot-pink rounded-full"></div>
                <span className="font-label-caps text-[11px] font-bold tracking-widest text-[#14452F]">SHIP</span>
                <div className="w-1 h-1 bg-hot-pink rounded-full"></div>
                <span className="font-label-caps text-[11px] font-bold tracking-widest text-[#14452F]">LAUNCH</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer (Dark Green Wave area) */}
          <div className="absolute bottom-0 w-full h-[180px] z-20">
            {/* SVG Wave */}
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 420 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 40C70 40 140 0 210 0C280 0 350 40 420 40V180H0V40Z"
                fill="#14452F"
              />
            </svg>
            
            <div className="relative z-30 h-full flex flex-col justify-end pb-4">
              <div className="grid grid-cols-3 text-center mb-4">
                <div className="flex flex-col items-center gap-1 border-r border-white/10">
                  <span className="material-symbols-outlined text-hot-pink text-[22px]">
                    calendar_today
                  </span>
                  <span className="font-label-caps text-white/50 text-[9px] uppercase tracking-wider mt-1">
                    DATES
                  </span>
                  <span className="font-label-caps text-white text-[10px] uppercase tracking-wider">
                    28-31 OCT 2026
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 border-r border-white/10">
                  <span className="material-symbols-outlined text-hot-pink text-[22px]">
                    location_on
                  </span>
                  <span className="font-label-caps text-white/50 text-[9px] uppercase tracking-wider mt-1">
                    LOCATION
                  </span>
                  <span className="font-label-caps text-white text-[10px] uppercase tracking-wider">
                    GOA, INDIA
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 max-w-[93%] mx-auto w-full px-1">
                  <span className="material-symbols-outlined text-hot-pink text-[22px]">
                    group
                  </span>
                  <span className="font-label-caps text-white/50 text-[9px] uppercase tracking-wider mt-1">
                    TEAM
                  </span>
                  <span className="font-label-caps text-white text-[10px] uppercase tracking-wider truncate w-full">
                    {team || "TEAM NAME"}
                  </span>
                </div>
              </div>

              {/* ID Badge Pill */}
              <div className="mx-auto bg-[#F5F2E9] rounded-lg px-4 py-2 flex items-center justify-center gap-2 border-2 border-deep-forest/10 shadow-lg">
                <div className="w-5 h-5 rounded-full border border-deep-forest flex items-center justify-center">
                  <span className="material-symbols-outlined text-deep-forest text-[14px]">
                    star
                  </span>
                </div>
                <span className="font-label-caps text-deep-forest text-xs font-bold tracking-widest uppercase">
                  ID: {builderId || "HHGOA2026-0001"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 w-full h-full rounded-[24px] bg-[#0E3623] flex flex-col items-center justify-between py-12 px-8 overflow-hidden text-white"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
           {/* Lanyard Hole */}
           <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/30 rounded-full flex items-center justify-center z-50">
            <div className="w-10 h-2 bg-black/40 rounded-full" />
          </div>

          <div className="w-full flex flex-col items-center z-10 relative mt-4">
            <span className="material-symbols-outlined text-hot-pink text-3xl mb-4">
              local_florist
            </span>
            <div className="w-full border-t border-white/20 mb-4"></div>
            <h4 className="font-label-caps text-sm tracking-widest mb-6 uppercase">
              BUILT BY BUILDERS. FOR BUILDERS.
            </h4>

            {/* Details Box */}
            <div className="w-full border border-white/30 rounded-xl p-5 flex flex-col gap-4 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-hot-pink w-8">
                  person
                </span>
                <span className="font-label-caps text-xs tracking-widest text-white/70 w-24 uppercase">
                  ROLE
                </span>
                <span className="font-label-caps text-xs tracking-widest uppercase truncate">
                  {role || "BUILDER"}
                </span>
              </div>
              <div className="w-full border-t border-white/10"></div>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-hot-pink w-8">
                  calendar_today
                </span>
                <span className="font-label-caps text-xs tracking-widest text-white/70 w-24 uppercase">
                  DATES
                </span>
                <span className="font-label-caps text-xs tracking-widest uppercase">
                  28 - 31 OCT 2026
                </span>
              </div>
              <div className="w-full border-t border-white/10"></div>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-hot-pink w-8">
                  location_on
                </span>
                <span className="font-label-caps text-xs tracking-widest text-white/70 w-24 uppercase">
                  LOCATION
                </span>
                <span className="font-label-caps text-xs tracking-widest uppercase">
                  GOA, INDIA
                </span>
              </div>
              <div className="w-full border-t border-white/10"></div>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-hot-pink w-8">
                  tag
                </span>
                <span className="font-label-caps text-xs tracking-widest text-white/70 w-24 uppercase">
                  HASHTAG
                </span>
                <span className="font-label-caps text-xs tracking-widest uppercase">
                  #FrameInGoa
                </span>
              </div>
              <div className="w-full border-t border-white/10"></div>
              <div className="flex items-center">
                <div className="w-8 flex items-center justify-start">
                  <div className="w-5 h-5 rounded-full border border-hot-pink flex items-center justify-center">
                    <span className="material-symbols-outlined text-hot-pink text-[14px]">
                      star
                    </span>
                  </div>
                </div>
                <span className="font-label-caps text-xs tracking-widest text-white/70 w-24 uppercase">
                  ID
                </span>
                <span className="font-label-caps text-xs tracking-widest uppercase">
                  {builderId || "HHGOA2026-0001"}
                </span>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="relative z-10 my-6 flex items-center justify-center w-full">
             
            <div className="w-48 h-48 bg-white p-2 rounded-xl relative shadow-xl overflow-hidden flex items-center justify-center">
              {qrCodeUrl ? (
                <img src={qrCodeUrl} alt="QR Code" className="w-full h-full object-contain" crossOrigin="anonymous" />
              ) : (
                <div className="w-full h-full bg-white animate-pulse rounded-lg"></div>
              )}
              
              {/* Overlay logo on QR */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#0E3623] rounded-md flex items-center justify-center border-2 border-white shadow-sm">
                <span className="material-symbols-outlined text-white text-[20px]">
                  local_florist
                </span>
              </div>
            </div>
            
          </div>

          {/* Quote & Verif */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <span className="font-body-md text-[10px] text-white/70 tracking-wide mb-3">
              Scan this QR to verify the builder's identity<br/>or visit hhgoa.com/verify
            </span>
            <div className="flex items-start gap-1">
               <span className="text-hot-pink font-display-lg text-2xl leading-none mt-1">"</span>
               <span className="font-[family-name:var(--font-script)] text-xl text-white opacity-90 leading-tight">
                 Build ideas. Ship impact.<br/>Make memories in Goa.
               </span>
               <span className="text-hot-pink font-display-lg text-2xl leading-none mt-4">"</span>
            </div>
          </div>

          {/* Footer Text */}
          <div className="w-full flex justify-between items-end relative z-10 mt-auto pt-4">
            <span className="font-label-caps text-[9px] text-hot-pink tracking-widest uppercase opacity-80">
              247 PM. STUDIO
            </span>
            <span className="font-label-caps text-[9px] text-hot-pink tracking-widest uppercase opacity-80">
              HHGOA.COM
            </span>
          </div>
          
          {/* Back Background Element */}
          <div className="absolute bottom-0 w-full h-[250px] z-0 opacity-20 pointer-events-none">
            <Image
              src="/assets/Sun_rise.png"
              alt="Card Background"
              fill
              className="object-cover object-bottom"
              priority
            />
             {/* Gradient overlay to fade it out at the top of the background area */}
             <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#0E3623]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
