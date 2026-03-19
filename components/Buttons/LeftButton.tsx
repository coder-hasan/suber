import React from "react";

interface LeftButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
}

export default function LeftButton({
  onClick,
  label = "Go Back",
  className = "",
}: LeftButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`
        group relative flex items-center justify-center
        active:scale-95
        transition-all duration-300 ease-out
        cursor-pointer
        ${className}
      `}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 relative z-10 drop-shadow-[0_0_6px_rgba(0,220,240,0.9)]
                   group-hover:drop-shadow-[0_0_12px_rgba(0,220,240,1)] group-hover:-translate-x-1
                   transition-all duration-300"
      >
        <defs>
          {/* Gradient: opaque cyan on the left (arrowhead side), transparent on the right */}
          <linearGradient id="tailGradient" x1="5" y1="0" x2="25" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="1" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="tailGlowGradient" x1="5" y1="0" x2="25" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(0,220,240,0.4)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(0,220,240,0)" stopOpacity="0" />
          </linearGradient>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        {/* Tail — horizontal line with gradient fade to transparent on the right */}
        <line x1="5" y1="12" x2="25" y2="12" stroke="url(#tailGlowGradient)" strokeWidth="3.5" strokeLinecap="round" filter="url(#blur)" />
        <line x1="5" y1="12" x2="25" y2="12" stroke="url(#tailGradient)" strokeWidth="2" strokeLinecap="round" />

        {/* Arrowhead — fully opaque, glow layer + crisp layer */}
        <path d="M5 12L11 6M5 12L11 18" stroke="rgba(0,220,240,0.4)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#blur)" />
        <path d="M5 12L11 6M5 12L11 18" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}