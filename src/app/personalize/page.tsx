"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Personalize() {
  const router = useRouter();
  const [name, setName] = useState("ALEX.WAV");
  const [team, setTeam] = useState("");
  const [activeTech, setActiveTech] = useState<string[]>(["REACT", "RUST"]);
  const [role, setRole] = useState("DEVELOPER");
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const savedImage = sessionStorage.getItem("hhgoa_user_image");
    if (savedImage) {
      setImageSrc(savedImage);
    }
  }, []);

  const toggleTech = (tech: string) => {
    if (activeTech.includes(tech)) {
      setActiveTech(activeTech.filter(t => t !== tech));
    } else {
      if (activeTech.length < 3) {
        setActiveTech([...activeTech, tech]);
      }
    }
  };

  const handleFinalize = () => {
    sessionStorage.setItem("hhgoa_builder_name", name);
    sessionStorage.setItem("hhgoa_builder_team", team);
    sessionStorage.setItem("hhgoa_builder_tech", JSON.stringify(activeTech));
    sessionStorage.setItem("hhgoa_builder_role", role);
    
    router.push("/result");
  };

  return (
    <main className="w-full pt-32 pb-20 bg-deep-forest min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Form */}
        <div className="flex flex-col gap-10">
          
          <div className="flex items-center gap-4">
            <div className="bg-golden-yellow px-3 py-1 flex-shrink-0">
              <span className="font-step-number text-deep-forest text-xl font-bold">02</span>
            </div>
            <h1 className="font-display-lg text-5xl md:text-6xl text-golden-yellow uppercase tracking-wider">
              Personalize
            </h1>
          </div>

          <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
            
            {/* Identifier */}
            <div className="flex flex-col gap-2">
              <label htmlFor="builderName" className="font-label-caps text-hot-pink font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">badge</span>
                Identifier // Alias
              </label>
              <input 
                type="text" 
                id="builderName" 
                autoComplete="off" 
                spellCheck="false" 
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}
                placeholder="ENTER HANDLE..." 
                className="bg-transparent border-b border-hot-pink text-white font-body-md py-2 focus:outline-none focus:border-golden-yellow transition-colors placeholder:text-white/30 uppercase text-xl mt-2" 
              />
            </div>

            {/* Team */}
            <div className="flex flex-col gap-2">
              <label htmlFor="builderTeam" className="font-label-caps text-hot-pink font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">group</span>
                Squad // Team
              </label>
              <input 
                type="text" 
                id="builderTeam" 
                autoComplete="off" 
                spellCheck="false" 
                value={team}
                onChange={(e) => setTeam(e.target.value.toUpperCase())}
                placeholder="ENTER TEAM NAME (OPTIONAL)..." 
                className="bg-transparent border-b border-hot-pink text-white font-body-md py-2 focus:outline-none focus:border-golden-yellow transition-colors placeholder:text-white/30 uppercase text-xl mt-2" 
              />
            </div>
            
            {/* Builder Class */}
            <div className="flex flex-col gap-4">
              <label className="font-label-caps text-hot-pink font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">category</span>
                Builder Class
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {['DESIGNER', 'DEVELOPER', 'FOUNDER', 'CREATOR'].map((r) => (
                  <button
                    key={r}
                    type="button" 
                    onClick={() => setRole(r)}
                    className={`border px-4 py-2 font-label-caps font-bold tracking-widest text-xs rounded-full transition-all hover:-translate-y-[1px] ${
                      role === r 
                        ? "border-hot-pink text-hot-pink" 
                        : "border-white/20 text-white hover:border-hot-pink/50 hover:text-hot-pink/80"
                    } transition-colors uppercase`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <label className="font-label-caps text-hot-pink font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">code</span>
                  Tech Stack
                </label>
                <span className="font-label-caps text-white/50 text-xs">[MAX 3]</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['REACT', 'RUST', 'SOLIDITY', 'FIGMA', 'PYTHON', 'CAIRO'].map((tech) => (
                  <button 
                    key={tech}
                    type="button" 
                    onClick={() => toggleTech(tech)}
                    className={`border px-4 py-2 font-label-caps font-bold tracking-widest text-xs rounded-full transition-all hover:-translate-y-[1px] ${
                      activeTech.includes(tech) 
                        ? 'border-golden-yellow text-golden-yellow' 
                        : 'border-white/20 text-white hover:border-golden-yellow/50 hover:text-golden-yellow/80'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="mt-8 pt-4">
              <button 
                type="button" 
                onClick={handleFinalize}
                className="w-full relative z-10 bg-hot-pink text-deep-forest py-5 font-label-caps font-bold tracking-widest uppercase flex justify-center items-center gap-2 border border-hot-pink rounded-full hover:-translate-y-[1px] transition-all"
              >
                FINALIZE CREDENTIALS
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
        
        {/* Right Column: Live Preview Card */}
        <div className="w-full flex justify-center items-center lg:pl-10">
          
          <div className="w-full max-w-[420px] h-[720px] bg-[#F7F3E3] rounded-[32px] flex flex-col relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            {/* Card Content Top */}
            <div className="p-8 flex-grow flex flex-col items-center relative z-10 text-deep-forest text-center">
              
              {/* Faint Header */}
              <div className="absolute top-4 left-6 flex items-center gap-2 opacity-30">
                <span className="font-label-caps text-[8px]">HH GOA 2026 | Personalization | A. Singh</span>
              </div>

              {/* Hacker House Pink */}
              <div className="mt-4 px-4 py-1 bg-white/60 backdrop-blur-sm rounded-full">
                <span className="font-label-caps text-hot-pink font-bold tracking-widest text-sm">HACKER HOUSE</span>
              </div>
              
              {/* Big GOA Text */}
              <div className="relative mt-2 flex items-center justify-center w-full h-24">
                <span className="material-symbols-outlined text-deep-forest text-3xl absolute left-6">local_florist</span>
                <img src="/assets/goa_hindi.svg" alt="GOA" className="h-24 object-contain relative z-10" />
                <span className="material-symbols-outlined text-deep-forest text-3xl absolute right-6">local_florist</span>
                <span className="font-display-lg text-5xl text-hot-pink absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 opacity-90 drop-shadow-sm pointer-events-none">2026</span>
              </div>

              {/* Subtext */}
              <span className="font-label-caps text-[10px] tracking-widest mt-2 opacity-80">28 - 31 OCT 2026 • GOA, INDIA</span>
              
              {/* Profile Photo Area */}
              <div className="relative mt-8 mb-6">
                <div className="w-40 h-40 rounded-full border-[3px] border-dashed border-hot-pink p-2">
                  <div className="w-full h-full rounded-full bg-deep-forest overflow-hidden flex items-center justify-center">
                    {imageSrc ? (
                       // eslint-disable-next-line @next/next/no-img-element
                       <img src={imageSrc} alt="Builder" className="w-full h-full object-cover grayscale" />
                    ) : (
                      <span className="material-symbols-outlined text-white/50 text-[80px]">person</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="font-display-lg text-4xl text-deep-forest uppercase tracking-tight truncate w-full px-4">{name || 'ANO_NYMOUS'}</h3>
              <span className="font-label-caps text-hot-pink font-bold tracking-widest text-sm mt-1 uppercase">{role}</span>

              {/* Motto */}
              <span className="font-label-caps text-[10px] font-bold tracking-[0.3em] mt-auto opacity-70">BUILD • SHIP • LAUNCH</span>
            </div>

              {/* Background Texture / Palm tree overlay inside card */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none rounded-[32px] overflow-hidden">
              <Image 
                src="/assets/Sun_rise.png" 
                alt="Card Background" 
                fill 
                className="object-cover mix-blend-multiply" 
              />
            </div>
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <Image 
                src="/assets/Sun_rise.png" 
                alt="Card Background" 
                fill 
                className="object-cover mix-blend-multiply" 
              />
            </div>

            {/* Card Footer (Dark Green) */}
            <div className="bg-[#0f1f1a] w-full p-6 relative z-10 rounded-b-[32px] border-t border-deep-forest/20">
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
        </div>

      </div>
    </main>
  );
}
