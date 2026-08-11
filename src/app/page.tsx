import Link from "next/link";
import Image from "next/image";
import { RetroButton } from "@/components/RetroButton";

export default function Home() {
  return (
    <main className="w-full bg-deep-forest min-h-screen flex flex-col pt-20">
      {/* Hero Section */}
      <div className="flex flex-col w-full relative min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Sun rise background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/Sun_rise.png" 
            alt="Sunrise" 
            fill 
            className="object-cover object-top opacity-50 mix-blend-overlay"
            priority
          />
        </div>
        
        {/* Subtle Hacker House overlay in the background */}
        <div className="absolute inset-0 z-0 flex justify-center items-center opacity-5 pointer-events-none">
          <Image 
            src="/assets/Hacker_house.png" 
            alt="Hacker House Background" 
            width={1400} 
            height={300} 
            className="w-[120%] max-w-none"
          />
        </div>

        <div className="max-w-container-max mx-auto w-full px-margin-mobile lg:px-margin-desktop py-12 lg:py-24 flex flex-col items-center justify-center relative z-10 flex-grow">
          {/* Top Left Logo Accent */}
          <div className="absolute left-4 top-4 md:left-8 md:top-8 hidden md:block">
            <Image 
              src="/assets/2-47.svg" 
              alt="2:47 pm Studio" 
              width={113} 
              height={99} 
              className="w-16 md:w-24 opacity-80"
            />
          </div>

          <div className="flex flex-col items-center text-center space-y-8 max-w-5xl w-full">
            <div className="inline-flex items-center gap-3 px-6 py-2 border-2 border-dashed border-hot-pink bg-surface-container-highest transform -rotate-1 cursor-default">
              <span className="material-symbols-outlined text-golden-yellow text-sm">arrow_back_ios_new</span>
              <span className="font-label-caps text-hot-pink uppercase tracking-widest text-sm md:text-base">System Online // v26.0</span>
              <span className="material-symbols-outlined text-golden-yellow text-sm">arrow_back_ios_new</span>
            </div>
            
            <div className="relative">
              <h1 className="font-display-lg text-[64px] leading-[60px] md:text-[100px] md:leading-[90px] lg:text-[140px] lg:leading-[120px] text-golden-yellow uppercase tracking-normal drop-shadow-[4px_4px_0_var(--color-hot-pink)] z-10 relative">
                Builder ID<br/>Generator
              </h1>
              {/* Hindi SVG Accent */}
              <div className="absolute -right-8 -top-8 md:-right-16 md:-top-12 z-20 rotate-12">
                <Image 
                  src="/assets/goa_hindi.svg" 
                  alt="Goa in Hindi" 
                  width={154} 
                  height={152} 
                  className="w-16 md:w-32 drop-shadow-lg"
                />
              </div>
            </div>
            
            <p className="font-body-md md:text-xl text-white max-w-2xl border-l-4 border-hot-pink pl-6 text-left opacity-90 leading-relaxed mt-8">
              Forge your digital credentials for <span className="text-golden-yellow font-bold">HH Goa 2026</span>. Join the ranks of the 247. The ultimate workstation for high-performance builders.
            </p>
            
            <div className="pt-10 w-full flex flex-col md:flex-row items-center justify-center gap-6">
              <RetroButton href="/upload" className="w-full md:w-auto h-[70px]">
                Start Generating
              </RetroButton>
            </div>
            
            <div className="mt-4 md:mt-8 font-label-caps text-golden-yellow/80 uppercase tracking-widest text-xs md:text-sm">
              Developed by the Syntax-Squad Team
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section (Hanging Signs) */}
      <div className="w-full relative bg-deep-forest pt-16 pb-32 overflow-hidden border-t-2 border-dashed border-golden-yellow/30">
         
         {/* Palm Tree Left */}
         <div className="absolute top-0 -left-10 md:-left-32 w-[300px] md:w-[600px] h-full z-0 pointer-events-none flex items-end">
             <Image 
                 src="/assets/palm_tree.png" 
                 alt="Palm Tree" 
                 width={1024} 
                 height={1024} 
                 className="w-full h-auto object-contain"
             />
         </div>

         {/* Palm Tree Right */}
         <div className="absolute top-0 -right-10 md:-right-32 w-[300px] md:w-[600px] h-full z-0 pointer-events-none flex items-end scale-x-[-1]">
             <Image 
                 src="/assets/palm_tree.png" 
                 alt="Palm Tree" 
                 width={1024} 
                 height={1024} 
                 className="w-full h-auto object-contain"
             />
         </div>

         <h2 className="font-headline-lg text-5xl md:text-6xl text-white uppercase tracking-wider mb-20 text-center relative z-30">
            How It Works
         </h2>

         {/* Bamboo Bar */}
         <div className="w-full relative h-10 md:h-12 bg-golden-yellow border-y-4 border-black z-20 flex flex-row items-center justify-between shadow-2xl">
            {[...Array(20)].map((_, i) => (
               <div key={i} className="h-full border-r-4 border-black/20 w-4 md:w-12"></div>
            ))}
         </div>
         
         <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin-desktop w-full relative z-10">
            {/* House Graphic Background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
                <Image 
                    src="/assets/Hacker_house.png" 
                    alt="HH Goa Hacker House" 
                    width={800} 
                    height={800} 
                    className="object-contain w-full max-w-[800px] drop-shadow-2xl translate-y-12"
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10 items-start justify-center">
               
               {/* Sign 1: Authenticate Identity */}
               <div className="flex flex-col items-center justify-start pt-24 md:pt-32">
                 <div className="relative w-full max-w-[380px] group">
                    <div className="absolute -top-24 md:-top-32 left-12 w-2 h-24 md:h-32 border-l-4 border-dashed border-golden-yellow"></div>
                    <div className="absolute -top-24 md:-top-32 right-12 w-2 h-24 md:h-32 border-l-4 border-dashed border-golden-yellow"></div>
                    <div className="bg-golden-yellow border-[6px] border-black p-2 md:p-3 shadow-[12px_12px_0_#000000] hover:-rotate-2 transition-transform duration-500 origin-top z-10 relative">
                      <div className="border-[6px] border-white h-full p-8 md:p-10 flex flex-col items-center justify-center text-center gap-6 bg-golden-yellow">
                        <span className="material-symbols-outlined text-[60px] text-black">fingerprint</span>
                        <h3 className="font-body-md text-2xl md:text-3xl font-bold text-black uppercase tracking-widest leading-tight">01<br/>Authenticate<br/>Identity</h3>
                      </div>
                    </div>
                 </div>
               </div>

               {/* Sign 2: Configure Specs */}
               <div className="flex flex-col items-center justify-start pt-32 md:pt-48">
                 <div className="relative w-full max-w-[380px] group">
                    <div className="absolute -top-32 md:-top-48 left-12 w-2 h-32 md:h-48 border-l-4 border-dashed border-hot-pink"></div>
                    <div className="absolute -top-32 md:-top-48 right-12 w-2 h-32 md:h-48 border-l-4 border-dashed border-hot-pink"></div>
                    <div className="bg-hot-pink border-[6px] border-black p-2 md:p-3 shadow-[12px_12px_0_#000000] hover:rotate-2 transition-transform duration-500 origin-top z-10 relative">
                      <div className="border-[6px] border-white h-full p-8 md:p-10 flex flex-col items-center justify-center text-center gap-6 bg-hot-pink">
                        <span className="material-symbols-outlined text-[60px] text-white">terminal</span>
                        <h3 className="font-body-md text-2xl md:text-3xl font-bold text-white uppercase tracking-widest leading-tight">02<br/>Configure<br/>Specs</h3>
                      </div>
                    </div>
                 </div>
               </div>

               {/* Sign 3: Mint Credential */}
               <div className="flex flex-col items-center justify-start pt-20 md:pt-28">
                 <div className="relative w-full max-w-[380px] group">
                    <div className="absolute -top-20 md:-top-28 left-12 w-2 h-20 md:h-28 border-l-4 border-dashed border-golden-yellow"></div>
                    <div className="absolute -top-20 md:-top-28 right-12 w-2 h-20 md:h-28 border-l-4 border-dashed border-golden-yellow"></div>
                    <div className="bg-golden-yellow border-[6px] border-black p-2 md:p-3 shadow-[12px_12px_0_#000000] hover:-rotate-1 transition-transform duration-500 origin-top z-10 relative">
                      <div className="border-[6px] border-white h-full p-8 md:p-10 flex flex-col items-center justify-center text-center gap-6 bg-golden-yellow">
                        <span className="material-symbols-outlined text-[60px] text-black">print</span>
                        <h3 className="font-body-md text-2xl md:text-3xl font-bold text-black uppercase tracking-widest leading-tight">03<br/>Mint<br/>Credential</h3>
                      </div>
                    </div>
                 </div>
               </div>

            </div>
         </div>
      </div>

      {/* Objective Section */}
      <section className="w-full bg-surface-container-lowest py-16 relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="bg-surface-container-highest border-l-8 border-golden-yellow p-8 flex items-center gap-6">
            <span className="material-symbols-outlined text-hot-pink text-5xl">emoji_events</span>
            <div>
              <h3 className="font-headline-lg text-[32px] text-white uppercase tracking-tighter mb-2">Claim Your Spot</h3>
              <p className="font-body-md text-on-surface text-lg font-bold">Use the hashtag <span className="text-hot-pink">#FrameInGoa</span> to secure your chance at exclusive physical drops. Build fast, break things.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
