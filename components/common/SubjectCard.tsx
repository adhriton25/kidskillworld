import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;      // Tailwind hex or class: e.g., '#A855F7' or 'bg-purple-500'
  href?: string;
  className?: string;
}

export const SubjectCard = ({
  title,
  description,
  icon: Icon,
  color,
  href = "#",
  className,
}: SubjectCardProps) => {
  return (
    <div className={`relative w-72 overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-transform hover:scale-[1.02]"
       ${className}`}>
      {/* Top Border Color Strip */}
      <div 
        className="absolute top-0 left-0 h-4 w-full" 
        style={{ backgroundColor: color }}
      />

      <div className="flex flex-col gap-6 pt-4">
        {/* Icon Container */}
        <div 
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-slate-900 font-serif">
            {title}
          </h3>
          <p className="text-lg text-slate-500 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Action Link */}
        <a 
          href={href}
          className="group flex items-center gap-2 text-lg font-medium text-slate-600 transition-colors hover:text-slate-900"
        >
          View All Grades
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};