import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "HH Goa 2026 - Builder ID Generator",
  description: "Forge your digital credentials for HH Goa 2026.",
};

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-deep-forest/90 backdrop-blur-md border-b-2 border-hot-pink/20">
      <div className="h-20 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-headline-lg text-[32px] lg:text-[40px] tracking-tighter text-on-surface cursor-pointer flex items-center gap-2">
              HH 
              <img src="/assets/goa_hindi.svg" alt="Goa in Hindi" className="h-8 md:h-12 w-auto inline-block drop-shadow-sm mx-2" />
              2026
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-gutter">
          <Link href="/" className="font-label-caps transition-all uppercase text-hot-pink border-b-2 border-hot-pink">Home</Link>
          <Link href="/upload" className="bg-hot-pink text-deep-forest border border-hot-pink/50 rounded-full px-6 py-2 font-button uppercase hover:bg-hot-pink/90 hover:-translate-y-[1px] transition-all">Build</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t-2 border-dashed border-hot-pink/30 py-16 mt-margin-desktop">
      <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="col-span-1 lg:col-span-2">
            <span className="font-headline-lg text-[32px] text-on-surface block mb-4">HH GOA 2026</span>
            <p className="font-body-md text-on-surface-variant max-w-md">The ultimate builder workstation for the Goa 2026 hackers. Precision, grit, and tropical high-performance.</p>
          </div>
          <div className="flex flex-col gap-unit">
            <span className="font-label-caps text-hot-pink mb-2">Links</span>
            <a className="font-body-md text-on-surface-variant hover:text-golden-yellow" href="https://hhgoa.com">Official Site</a>
            <a className="font-body-md text-on-surface-variant hover:text-golden-yellow" href="https://hacker-house-goa-2026.devfolio.co/">Devfolio App</a>
          </div>
          <div className="flex flex-col gap-unit">
            <span className="font-label-caps text-hot-pink mb-2">Social</span>
            <a className="font-body-md text-on-surface-variant hover:text-golden-yellow" href="https://x.com/247pmstudio">Twitter / X</a>
            <a className="font-body-md text-on-surface-variant hover:text-golden-yellow" href="#">Github</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-surface-container-highest flex justify-between items-center">
          <span className="font-label-caps text-on-tertiary-fixed-variant">© 2026 HH GOA. ALL SYSTEMS GO.</span>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-hot-pink">arrow_back_ios_new</span>
            <span className="material-symbols-outlined text-golden-yellow">markdown_copy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100..900&family=Victor+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" crossOrigin="anonymous" />
      </head>
      <body className="bg-deep-forest text-on-surface font-body-md" suppressHydrationWarning>
        {/* Global UI Frame */}
        <div className="fixed inset-0 z-[100] pointer-events-none border-[6px] md:border-[10px] border-golden-yellow">
          <div className="absolute inset-1 border-[2px] md:border-[3px] border-dotted border-hot-pink"></div>
        </div>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
