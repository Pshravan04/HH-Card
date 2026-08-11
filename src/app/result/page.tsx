"use client";

import { useState, useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function Result() {
  const [name, setName] = useState("ALEX.WAV");
  const [team, setTeam] = useState("");
  const [activeTech, setActiveTech] = useState<string[]>([]);
  const [role, setRole] = useState("DEVELOPER");
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const cardWrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardWrapperRef.current) {
      gsap.to(cardWrapperRef.current, { rotationY: 180, duration: 0.6, ease: "power2.inOut" });
    }
  };

  const handleMouseLeave = () => {
    if (cardWrapperRef.current) {
      gsap.to(cardWrapperRef.current, { rotationY: 0, duration: 0.6, ease: "power2.inOut" });
    }
  };

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
            
            {/* GSAP Perspective Wrapper */}
            <div 
              className="w-full max-w-[420px] h-[720px] relative" 
              style={{ perspective: "1000px" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Inner animated container */}
              <div ref={cardWrapperRef} className="w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
                
                {/* Front of Card */}
                <div 
                  ref={cardRef}
                  className="w-full h-full absolute inset-0 bg-[#F7F3E3] rounded-[32px] flex flex-col shadow-[0_0_50px_rgba(255,105,180,0.3)] border-4 border-hot-pink"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Card Content Top */}
                  <div className="p-8 flex-grow flex flex-col items-center relative z-10 text-deep-forest text-center bg-transparent">
                
                {/* Faint Header */}
                <div className="absolute top-4 left-6 flex items-center gap-2 opacity-30">
                  <span className="font-label-caps text-[8px] text-deep-forest">HH GOA 2026 | Personalization | A. Singh</span>
                </div>

                {/* Hacker House Pink */}
                <div className="mt-4 px-4 py-1 bg-white/60 backdrop-blur-sm rounded-full">
                  <span className="font-label-caps text-hot-pink font-bold tracking-widest text-sm">HACKER HOUSE</span>
                </div>
                
                {/* Big GOA Text */}
                <div className="relative mt-2 flex items-center justify-center w-full h-24">
                  <span className="material-symbols-outlined text-deep-forest text-3xl absolute left-6 opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
                  <img src="/assets/goa_hindi.svg" alt="GOA" className="h-24 object-contain relative z-10" crossOrigin="anonymous" />
                  <span className="material-symbols-outlined text-deep-forest text-3xl absolute right-6 opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
                  <span className="font-display-lg text-5xl text-hot-pink absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 opacity-90 drop-shadow-md pointer-events-none">2026</span>
                </div>

                {/* Subtext */}
                <span className="font-label-caps text-[10px] tracking-widest mt-2 opacity-80 text-deep-forest">28 - 31 OCT 2026 • GOA, INDIA</span>
                
                {/* Profile Photo Area */}
                <div className="relative mt-8 mb-6">
                  <div className="w-40 h-40 rounded-full border-[3px] border-dashed border-hot-pink p-2 bg-white/50 backdrop-blur-sm">
                    <div className="w-full h-full rounded-full bg-deep-forest overflow-hidden flex items-center justify-center">
                      {imageSrc ? (
                         // eslint-disable-next-line @next/next/no-img-element
                         <img src={imageSrc} alt="Builder" className="w-full h-full object-cover grayscale contrast-125" crossOrigin="anonymous" />
                      ) : (
                        <span className="material-symbols-outlined text-white/50 text-[80px]">person</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-display-lg text-4xl text-deep-forest uppercase tracking-tight truncate w-full px-4 m-0 leading-none">{name || 'ALEX.WAV'}</h3>
                <span className="font-label-caps text-hot-pink font-bold tracking-widest text-sm mt-2 uppercase">{role}</span>

                {/* Motto */}
                <span className="font-label-caps text-[10px] font-bold tracking-[0.3em] mt-auto opacity-70 text-deep-forest">BUILD • SHIP • LAUNCH</span>
              </div>

              {/* Background Texture inside card using standard img tag for html-to-image compatibility */}
              <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src="/assets/Sun_rise.png" alt="texture" className="w-full h-full object-cover" crossOrigin="anonymous" style={{ mixBlendMode: 'multiply' }} />
              </div>

              {/* Card Footer (Dark Green) */}
              <div className="bg-[#0f1f1a] w-full p-6 relative z-10 rounded-b-[28px] border-t border-deep-forest/20">
                <div className="grid grid-cols-3 text-center divide-x divide-white/10">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-hot-pink text-xl">calendar_today</span>
                    <span className="font-label-caps text-white/50 text-[10px] uppercase">DATES</span>
                    <span className="font-label-caps text-white text-xs uppercase">28-31 OCT</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-hot-pink text-xl">location_on</span>
                    <span className="font-label-caps text-white/50 text-[10px] uppercase">LOC</span>
                    <span className="font-label-caps text-white text-xs uppercase">GOA, IN</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 max-w-[33%] px-1">
                    <span className="material-symbols-outlined text-hot-pink text-xl">group</span>
                    <span className="font-label-caps text-white/50 text-[10px] uppercase">TEAM</span>
                    <span className="font-label-caps text-white text-xs uppercase truncate w-full">{team || 'TBD'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Back of Card */}
                <div 
                  className="w-full h-full absolute inset-0 bg-deep-forest rounded-[32px] flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,105,180,0.3)] border-4 border-golden-yellow"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <img src="/assets/Hacker_house.png" alt="Hacker House" className="h-10 mb-6" />
                  <img src="/assets/goa_hindi.svg" alt="GOA" className="h-32 opacity-50" />
                  <span className="font-label-caps text-golden-yellow tracking-widest mt-12 opacity-80 text-sm">BUILD • SHIP • LAUNCH</span>
                </div>

              </div>
            <p className="font-label-caps text-white/50 text-xs tracking-widest mt-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">3d_rotation</span> HOVER TO FLIP
            </p>
            </div>
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
                <button 
                  onClick={handleDownload}
                  className="w-full bg-hot-pink text-deep-forest py-4 px-6 font-label-caps font-bold tracking-widest flex items-center justify-between uppercase transition-all border border-hot-pink rounded-full hover:-translate-y-[1px] hover:shadow-lg"
                >
                  DOWNLOAD PNG
                  <div className="flex items-center gap-2">
                    <span className="text-xs opacity-70">2.4MB</span>
                    <span className="material-symbols-outlined">download</span>
                  </div>
                </button>

                <button className="w-full bg-golden-yellow text-deep-forest py-4 px-6 font-label-caps font-bold tracking-widest flex items-center justify-between uppercase transition-all border border-golden-yellow rounded-full hover:-translate-y-[1px] hover:shadow-lg">
                  ADD TO APPLE WALLET
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </button>
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
