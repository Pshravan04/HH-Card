"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RetroButton } from "@/components/RetroButton";
import { IDCard } from "@/components/IDCard";

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
              <RetroButton 
                onClick={handleFinalize}
                className="w-full"
              >
                FINALIZE CREDENTIALS
              </RetroButton>
            </div>
          </form>
        </div>
        
        {/* Right Column: Live Preview Card */}
        <div className="w-full flex justify-center items-center lg:pl-10">
          
          <IDCard 
            name={name} 
            role={role} 
            team={team} 
            photo={imageSrc} 
            builderId="HHGOA2026-0001" 
          />
        </div>

      </div>
    </main>
  );
}
