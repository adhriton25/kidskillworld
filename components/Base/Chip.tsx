"use client";

import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';


interface ChipProps {
  label: string;
  variant?: 'default' | 'outline' | 'filter' | 'choice';
  color?: string; // For solid colored chips like Apple/Google
  isActive?: boolean;
  avatar?: string; // For Input Chips with images
  iconLeft?: React.ReactNode; // For choice chips (e.g., Email, Game icons)
  onRemove?: () => void; // Shows the X button if provided
  onClick?: () => void;
  className?: string;
}

export const Chip = ({
  label,
  variant = 'default',
  color,
  isActive = false,
  avatar,
  iconLeft,
  onRemove,
  onClick,
  className,
}: ChipProps) => {
  
  // Dynamic base styles based on variant
  const variantStyles = {
    default: "bg-gray-100 text-gray-700 border-transparent",
    outline: "bg-white border-blue-400 text-blue-600",
    filter: isActive 
      ? "bg-gray-300 text-gray-900 border-transparent font-semibold" 
      : "bg-gray-100 text-gray-600 border-transparent",
    choice: "bg-white border-gray-200 text-gray-700 hover:border-gray-400",
  };

  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: color && !isActive ? color : undefined }}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm transition-all cursor-pointer select-none",
        variantStyles[variant],
        color && "text-white border-none", // Auto-white text for solid background colors
        isActive && variant === 'choice' && "bg-rose-500 border-rose-500 text-white",
        className
      )}
    >
      {/* Left Icon or Avatar */}
      {avatar && (
        <img src={avatar} alt={label} className="w-6 h-6 rounded-full -ml-1.5" />
      )}
      {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
      
      {/* Label */}
      <span className="leading-none">{label}</span>

      {/* Close Button */}
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="hover:bg-black/10 rounded-full p-0.5 transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};