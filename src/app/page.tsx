import Link from "next/link";
import Image from "next/image";

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
            className="object-cover object-top opacity-30 mix-blend-screen"
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
              <Link href="/upload" className="relative group w-full md:w-auto">
                <div className="bg-hot-pink text-deep-forest px-10 py-5 flex items-center justify-center border-2 border-transparent group-hover:bg-golden-yellow transition-all duration-300">
                  <span className="font-button text-xl md:text-2xl uppercase tracking-widest font-bold">
                    Start Generating
                  </span>
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-golden-yellow border-2 border-deep-forest group-hover:scale-125 transition-transform"></span>
                </div>
              </Link>
            </div>
            
            <div className="mt-4 md:mt-8 font-label-caps text-golden-yellow/80 uppercase tracking-widest text-xs md:text-sm">
              Developed by the Syntax-Squad Team
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full bg-surface-container-lowest border-t-2 border-dashed border-hot-pink/30 py-24 relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop w-full flex flex-col items-center">
          
          {/* Objective Box */}
          <div className="w-full max-w-4xl bg-surface-container-highest border-l-4 border-golden-yellow p-8 md:p-12 mb-24 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <span className="material-symbols-outlined text-hot-pink text-[80px]">emoji_events</span>
              <div className="flex flex-col gap-4">
                <h3 className="font-headline-lg text-4xl text-golden-yellow uppercase tracking-wide">Claim Your Spot</h3>
                <p className="font-body-md text-white/80 text-lg leading-relaxed">
                  Use <span className="text-hot-pink font-bold">#FrameInGoa</span> to get featured on the W Celeb Radar. Reaching the top of the ladder wins you an exclusive physical HH Goa ID at the event.
                </p>
              </div>
            </div>
          </div>

          <h2 className="font-headline-lg text-5xl md:text-6xl text-white uppercase tracking-wider mb-16 text-center">
            How It Works
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 border-2 border-solid border-hot-pink p-8 flex flex-col items-center justify-center gap-6 bg-deep-forest relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <span className="font-step-number text-deep-forest font-bold bg-golden-yellow px-3 py-1 absolute top-4 left-4 text-xl">01</span>
              <span className="material-symbols-outlined text-[80px] text-hot-pink mt-6">fingerprint</span>
              <h3 className="font-body-md text-xl font-bold text-white uppercase text-center tracking-widest">Authenticate<br/>Identity</h3>
            </div>
            
            <div className="col-span-1 border-2 border-solid border-golden-yellow p-8 flex flex-col items-center justify-center gap-6 bg-deep-forest relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <span className="font-step-number text-deep-forest font-bold bg-hot-pink px-3 py-1 absolute top-4 left-4 text-xl">02</span>
              <span className="material-symbols-outlined text-[80px] text-golden-yellow mt-6">terminal</span>
              <h3 className="font-body-md text-xl font-bold text-white uppercase text-center tracking-widest">Configure<br/>Specs</h3>
            </div>
            
            <div className="col-span-1 border-2 border-solid border-hot-pink p-8 flex flex-col items-center justify-center gap-6 bg-deep-forest relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <span className="font-step-number text-deep-forest font-bold bg-golden-yellow px-3 py-1 absolute top-4 left-4 text-xl">03</span>
              <span className="material-symbols-outlined text-[80px] text-hot-pink mt-6">print</span>
              <h3 className="font-body-md text-xl font-bold text-white uppercase text-center tracking-widest">Mint<br/>Credential</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
