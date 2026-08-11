"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function UploadPhoto() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageSrc(event.target.result as string);
          processImage();
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const processImage = () => {
    setIsProcessing(true);
    setIsProcessed(false);
    
    // Simulate MediaPipe processing for now
    setTimeout(() => {
      setIsProcessing(false);
      setIsProcessed(true);
    }, 1500);
  };

  const handleConfirm = () => {
    if (imageSrc && isProcessed) {
      sessionStorage.setItem("hhgoa_user_image", imageSrc);
      router.push("/personalize");
    }
  };

  return (
    <main className="w-full pt-32 pb-20 bg-deep-forest min-h-screen">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
          <div className="flex items-start gap-4 max-w-xl">
            <div className="bg-golden-yellow px-3 py-1 flex-shrink-0 mt-2">
              <span className="font-step-number text-deep-forest text-xl font-bold">01</span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-display-lg text-5xl md:text-6xl text-cream-surface uppercase tracking-wider">
                Image Uplink
              </h1>
              <p className="font-body-md text-white/80 mt-2 text-sm leading-relaxed max-w-sm">
                Initialize your digital persona. Connect visual telemetry to commence ID fabrication for Goa Sector.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-end text-right">
            <span className="font-label-caps text-hot-pink uppercase tracking-widest text-xs font-bold mb-1">
              LOCAL_SECURE_CHANNEL
            </span>
            <span className="text-white text-3xl font-bold tracking-wider opacity-90">
              फोटो अपलोड करें
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-dashed border-hot-pink/50"></div>

        {/* Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Upload Area */}
          <div className="lg:col-span-8 bg-[#FFFFE4] border-[3px] border-hot-pink relative min-h-[500px] flex flex-col items-center justify-center p-6 group">
            <div className="absolute top-4 left-4">
              <span className="font-label-caps text-deep-forest/40 tracking-widest text-xs">SYS.INPUT.01</span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="material-symbols-outlined text-hot-pink">photo_camera</span>
            </div>

            {!imageSrc ? (
              <div className="flex flex-col items-center gap-8 z-10 w-full max-w-md">
                <div className="w-48 h-48 rounded-full border-[3px] border-dashed border-hot-pink flex flex-col items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-hot-pink text-4xl">upload_file</span>
                  <div className="text-center">
                    <span className="font-label-caps text-deep-forest text-xs font-bold block">DROP FILE HERE</span>
                    <span className="font-label-caps text-deep-forest/60 text-[10px] block">MAX 5MB . JPG/PNG</span>
                  </div>
                </div>
                
                <div className="relative w-48">
                  <button className="w-full bg-hot-pink text-deep-forest border border-hot-pink/50 rounded-full font-label-caps font-bold py-3 uppercase tracking-wider hover:bg-hot-pink/90 hover:-translate-y-[1px] transition-all">
                    Browse Local Storage
                  </button>
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-full h-[400px] flex flex-col items-center justify-center">
                <div className="relative w-64 h-64 rounded-full border-4 border-hot-pink overflow-hidden bg-deep-forest shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageSrc} alt="Preview" className="w-full h-full object-cover" />
                  
                  {isProcessing && (
                    <div className="absolute inset-0 bg-hot-pink/20 mix-blend-overlay">
                       <div className="absolute inset-0 w-full h-2 bg-golden-yellow/60 animate-[scan_2s_ease-in-out_infinite]"></div>
                    </div>
                  )}
                </div>
                
                {isProcessing ? (
                  <div className="mt-8 bg-golden-yellow px-6 py-2 shadow-md">
                    <span className="font-label-caps text-deep-forest font-bold tracking-widest">EXTRACTING BIOMETRICS...</span>
                  </div>
                ) : (
                  <div className="mt-8 flex gap-4">
                    <div className="relative">
                      <button className="bg-transparent border border-hot-pink text-hot-pink rounded-full font-label-caps font-bold px-8 py-3 hover:bg-hot-pink/10 hover:-translate-y-[1px] transition-all">
                        RETAKE
                      </button>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Box 1 */}
            <div className="bg-[#0f1f1a] p-6 border border-white/5">
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                <span className="font-label-caps text-hot-pink font-bold tracking-widest text-xs">DATA INTEGRITY</span>
                <span className="material-symbols-outlined text-golden-yellow text-sm">lock</span>
              </div>
              <h3 className="font-body-md font-bold text-white mb-3 text-sm">PRIVACY FIRST PROTOCOL</h3>
              <p className="font-body-md text-white/60 text-xs leading-relaxed">
                All visual data is processed locally within your current session. No images are transmitted to external servers. Your biometric footprint remains your property.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#0f1f1a] p-6 border border-white/5">
              <div className="pb-4 mb-2">
                <span className="font-label-caps text-golden-yellow font-bold tracking-widest text-xs">PARAMETERS</span>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-hot-pink text-base mt-0.5">check_circle</span>
                  <span className="font-body-md text-white/70 text-xs leading-tight">Clear, front-facing profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-hot-pink text-base mt-0.5">check_circle</span>
                  <span className="font-body-md text-white/70 text-xs leading-tight">Adequate lighting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-hot-pink text-base mt-0.5">check_circle</span>
                  <span className="font-body-md text-white/70 text-xs leading-tight">Neutral background preferred</span>
                </li>
              </ul>
            </div>

            {/* Action Button */}
            <div className="mt-auto pt-4">
              <button 
                onClick={handleConfirm}
                disabled={!isProcessed || !imageSrc}
                className={`w-full py-4 border border-hot-pink rounded-full font-label-caps font-bold tracking-widest flex items-center justify-center gap-2 transition-all ${
                  isProcessed && imageSrc 
                    ? "bg-transparent text-hot-pink hover:bg-hot-pink hover:text-deep-forest cursor-pointer hover:-translate-y-[1px]" 
                    : "bg-transparent text-hot-pink/30 border-hot-pink/30 cursor-not-allowed"
                }`}
              >
                NEXT SEQUENCE 
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
            
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}} />
    </main>
  );
}
