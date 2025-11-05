import React from 'react';

interface ShinyBadgeProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyBadge: React.FC<ShinyBadgeProps> = ({
  text,
  speed = 5,
  className = '',
}) => {
  return (
    <div
      className={`group relative inline-flex items-center gap-1.5 sm:gap-2 px-2.5 min-[375px]:px-3 sm:px-4 py-1.5 min-[375px]:py-2 rounded-full border border-white/10 bg-gradient-to-r from-neutral-400/10 via-white/10 to-neutral-400/10 backdrop-blur-sm  transition-all duration-500 ${className}`}
    >
      <div className="relative flex items-center gap-1.5 sm:gap-2">
        <span className='rounded-full size-1.5 min-[375px]:size-2 bg-green-600 animate-pulse shrink-0'></span>
        <span className="relative z-10 text-[0.7rem] min-[375px]:text-xs sm:text-sm font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] leading-tight">
          {text}
        </span>

      </div>

      {/* Animated shine overlay */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundSize: '200% 100%',
          animation: `shine ${speed}s infinite linear`,
        }}
      />

      {/* Soft inner glow effect */}
      <div className="absolute inset-0 rounded-full bg-neutral-400/10 blur-md opacity-0 group-hover:opacity-60 transition-all duration-700" />
    </div>
  );
};

export { ShinyBadge };