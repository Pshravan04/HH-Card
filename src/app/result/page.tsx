"use client";

import { useState, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
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

  const [isFlipped, setIsFlipped] = useState(false);

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

  }, []);

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        const dataUrl = await toPng(cardRef.current, { 
          cacheBust: true,
          pixelRatio: 2,
          quality: 1,
          fontEmbedCSS: '',
        });
        const link = document.createElement('a');
        link.download = `HH_Goa_2026_ID_${name.replace(/\s+/g, '_')}.png`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Failed to download image', err);
      }
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
            
            {/* Container for download export */}
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
                 flipped={isFlipped}
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

                <RetroButton className="w-full">
                  <div className="flex items-center gap-2 text-[18px] sm:text-[22px]">
                    <span>ADD TO APPLE WALLET</span>
                    <span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
                  </div>
                </RetroButton>
              </div>
            </div>

            {/* Box 2: SHARE STATUS */}
            <div className="bg-[#0f1f1a] w-full p-8 border border-white/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-white tracking-widest text-xs font-bold">SHARE_STATUS</span>
                <span className="text-hot-pink font-bold opacity-90 text-sm">अपना आईडी प्राप्त करें</span>
              </div>

              <div className="flex gap-4 w-full">
                <button 
                  onClick={handleShareX}
                  className="flex-1 bg-white text-black border border-white py-3 font-label-caps font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 rounded-full hover:-translate-y-[1px] hover:shadow-lg"
                >
                  POST TO X
                  <span className="material-symbols-outlined text-sm">share</span>
                </button>
                <button 
                  onClick={handleShareWhatsApp}
                  className="flex-1 bg-[#25D366] text-white border border-[#25D366] py-3 font-label-caps font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 rounded-full hover:-translate-y-[1px] hover:shadow-lg"
                >
                  WHATSAPP
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <span className="font-label-caps text-white/50 text-[10px] uppercase tracking-widest">REFERRAL LINK</span>
                <div className="flex items-center w-full rounded-full border border-white/20 overflow-hidden">
                  <div className="bg-transparent py-3 px-4 flex-grow text-white/70 font-body-md text-xs truncate">
                    https://hhgoa.com/builder/{name ? name.replace(/\s+/g, '_').toUpperCase() : 'ALEX.WAV'}
                  </div>
                  <button className="bg-hot-pink text-deep-forest py-3 px-6 font-label-caps font-bold text-xs tracking-widest uppercase transition-all hover:bg-golden-yellow">
                    COPY
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
