"use client";

import { useState, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import QRCode from "qrcode";
import { RetroButton } from "@/components/RetroButton";
import Link from "next/link";
import Image from "next/image";
import { IDCard } from "@/components/IDCard";

export default function Result() {
  const [name, setName] = useState("ALEX.WAV");
  const [team, setTeam] = useState("");
  const [activeTech, setActiveTech] = useState<string[]>([]);
  const [role, setRole] = useState("DEVELOPER");
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  const [isFlipped, setIsFlipped] = useState(false);
  const [exportMode, setExportMode] = useState<"none" | "front" | "back">("none");

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  useEffect(() => {
    setName(sessionStorage.getItem("hhgoa_builder_name") || "ALEX.WAV");
    
    const techStr = sessionStorage.getItem("hhgoa_builder_tech");
    if (techStr) setActiveTech(JSON.parse(techStr));
    
    setRole(sessionStorage.getItem("hhgoa_builder_role") || "DEVELOPER");
    setTeam(sessionStorage.getItem("hhgoa_builder_team") || "");
    setImageSrc(sessionStorage.getItem("hhgoa_user_image"));

    const generateQR = async () => {
      try {
        const url = await QRCode.toDataURL(
          `https://hhgoa.com/verify/HHGOA2026-0001`,
          {
            color: { dark: "#0E3623", light: "#FFFFFF" },
            margin: 1,
            width: 200,
          }
        );
        setQrCodeUrl(url);
      } catch (err) {
        console.error("Error generating QR code", err);
      }
    };
    generateQR();

  }, []);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    
    try {
      const options = { 
        cacheBust: true,
        pixelRatio: 2,
        quality: 1,
        fontEmbedCSS: '',
      };

      // 1. Force Front Mode
      setExportMode("front");
      // Wait for React to re-render the DOM
      await new Promise(resolve => setTimeout(resolve, 300)); 
      
      const frontDataUrl = await toPng(cardRef.current, options);
      const frontLink = document.createElement('a');
      frontLink.download = `HH_Goa_2026_ID_${name.replace(/\s+/g, '_')}_Front.png`;
      frontLink.href = frontDataUrl;
      frontLink.click();

      // 2. Force Back Mode
      setExportMode("back");
      // Wait for React to re-render the DOM
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const backDataUrl = await toPng(cardRef.current, options);
      const backLink = document.createElement('a');
      backLink.download = `HH_Goa_2026_ID_${name.replace(/\s+/g, '_')}_Back.png`;
      backLink.href = backDataUrl;
      backLink.click();

      // 3. Restore Normal Mode
      setExportMode("none");
    } catch (err) {
      console.error('Failed to download image', err);
      setExportMode("none"); // Restore on failure
    }
  };

  const handleShareX = () => {
    const text = encodeURIComponent(`I just forged my HH Goa 2026 Builder ID. \nJoin the ranks. @247pmstudio #FrameInGoa`);
    const url = encodeURIComponent(window.location.origin);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`I just forged my HH Goa 2026 Builder ID. Join the ranks: ${window.location.origin}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <main className="w-full pt-32 pb-20 bg-deep-forest min-h-screen relative overflow-hidden">
      
      {/* Background Overlay (Moody Tropical) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
        <Image 
          src="/assets/Sun_rise.png" 
          alt="Tropical Background" 
          fill 
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-deep-forest/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-golden-yellow px-4 py-1">
            <span className="font-step-number text-deep-forest text-xl font-bold">03 IDENTITY_VERIFIED</span>
          </div>
          <h1 className="font-display-lg text-6xl md:text-7xl text-white uppercase tracking-wider">
            Access Granted.
          </h1>
          <p className="font-body-md text-white/80 text-sm max-w-md">
            Your builder credentials have been securely logged into the HH GOA protocol. Distribute your identity across networks.
          </p>
        </div>

        {/* Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: ID Card */}
          <div className="w-full flex flex-col items-center lg:items-end justify-center">
            
            {/* Container for live preview & download export */}
            <div 
              className="w-full max-w-[420px] h-[720px] relative cursor-pointer" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={cardRef}
            >
               <IDCard 
                 name={name}
                 role={role}
                 team={team}
                 photo={imageSrc}
                 builderId="HHGOA2026-0001"
                 flipped={isFlipped && exportMode === "none"}
                 exportMode={exportMode}
               />
            </div>
            <p className="font-label-caps text-white/50 text-xs tracking-widest mt-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">3d_rotation</span> HOVER TO FLIP
            </p>
          </div>

          {/* Right Column: Actions */}
          <div className="w-full max-w-md flex flex-col gap-6 lg:items-start">
            
            {/* Box 1: ACTIONS */}
            <div className="bg-[#0f1f1a] w-full p-8 border border-white/5 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="font-label-caps text-white tracking-widest text-xs font-bold">ACTIONS_</span>
              </div>

              <div className="flex flex-col gap-5">
                <RetroButton 
                  onClick={handleDownload}
                  className="w-full"
                >
                  <div className="flex items-center gap-2 text-[20px] sm:text-[24px]">
                    <span>DOWNLOAD PNG</span>
                    <span className="text-[12px] sm:text-[14px] opacity-70 mt-1">2.4MB</span>
                    <span className="material-symbols-outlined text-[24px]">download</span>
                  </div>
                </RetroButton>
              </div>
            </div>

            {/* Box 2: TEAM & CREDENTIALS */}
            <div className="bg-[#0f1f1a] w-full p-8 border border-white/5 flex flex-col gap-6">
              
              {/* Team Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-white tracking-widest text-xs font-bold">TEAM_ROSTER</span>
                  <span className="text-hot-pink font-bold opacity-90 text-sm uppercase">{team || "NO TEAM ASSIGNED"}</span>
                </div>
                
                <div className="flex flex-col gap-2">
                  {/* Self */}
                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-hot-pink/20 flex items-center justify-center border border-hot-pink/50">
                         <span className="material-symbols-outlined text-hot-pink text-[16px]">person</span>
                      </div>
                      <span className="font-label-caps text-white text-xs uppercase">{name}</span>
                    </div>
                    <span className="font-label-caps text-hot-pink text-[10px]">LEAD</span>
                  </div>

                  {/* Mock Teammates if team exists */}
                  {team && (
                    <>
                      <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5 opacity-70">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white/50 text-[16px]">person</span>
                          </div>
                          <span className="font-label-caps text-white/70 text-xs">AWAITING_MEMBER</span>
                        </div>
                        <span className="font-label-caps text-white/30 text-[10px]">PENDING</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5 opacity-70">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                             <span className="material-symbols-outlined text-white/50 text-[16px]">person</span>
                          </div>
                          <span className="font-label-caps text-white/70 text-xs">AWAITING_MEMBER</span>
                        </div>
                        <span className="font-label-caps text-white/30 text-[10px]">PENDING</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="w-full border-t border-white/10"></div>

              {/* QR Code Section */}
              <div className="flex flex-col gap-4">
                <span className="font-label-caps text-white tracking-widest text-xs font-bold">DIGITAL_ID_QR</span>
                <div className="flex items-center gap-6 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-24 h-24 bg-white rounded-lg p-1 flex items-center justify-center flex-shrink-0">
                    {qrCodeUrl ? (
                       <img src={qrCodeUrl} alt="QR Code" className="w-full h-full object-contain" />
                    ) : (
                       <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-label-caps text-hot-pink text-xs">SCAN TO VERIFY</span>
                    <p className="font-body-md text-white/60 text-[11px] leading-relaxed">
                      Present this QR code at checkpoints to verify your builder identity and team affiliation.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
