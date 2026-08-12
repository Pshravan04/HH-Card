import React from 'react';
import Link from 'next/link';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

export function RetroButton({ children, className = "", href, ...props }: RetroButtonProps) {
  const content = (
    <div className="relative w-full h-full bg-[#FDD817] flex flex-col items-center justify-between min-w-[200px] overflow-hidden">
      {/* Top Pattern */}
      <div 
        className="w-full h-[12px]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='12' viewBox='0 0 24 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='6,1 11,6 6,11 1,6' fill='%230A6A38' /%3E%3Cpolygon points='18,1 23,6 18,11 13,6' fill='%23FF3366' /%3E%3C/svg%3E")`, 
          backgroundRepeat: 'repeat-x' 
        }}
      ></div>
      
      {/* Text */}
      <div className="py-2 px-6 flex items-center justify-center">
        <span className="font-headline-lg text-[#0A6A38] uppercase tracking-wider text-2xl sm:text-3xl scale-y-125 inline-block font-black origin-center whitespace-nowrap">
          {children}
        </span>
      </div>

      {/* Bottom Pattern */}
      <div 
        className="w-full h-[12px]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='12' viewBox='0 0 24 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='6,1 11,6 6,11 1,6' fill='%230A6A38' /%3E%3Cpolygon points='18,1 23,6 18,11 13,6' fill='%23FF3366' /%3E%3C/svg%3E")`, 
          backgroundRepeat: 'repeat-x' 
        }}
      ></div>
    </div>
  );

  const disabledClasses = props.disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : "hover:scale-105 cursor-pointer";
  const containerClasses = `relative inline-flex items-center justify-center bg-[#0A6A38] p-[3px] transition-transform duration-200 ${disabledClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={containerClasses} {...props}>
      {content}
    </button>
  );
}
