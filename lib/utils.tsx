import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes without style conflicts.
 * Allows for conditional classes and clean class merging.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { Calculator, BookOpen, FlaskRound, Globe } from "lucide-react";

// Color mapping for grades
export const getGradeColor = (gradeId: number) => {
  const GRADE_COLORS: Record<number, string> = {
  0: "bg-[var(--sky-blue)]",
  1: "bg-[var(--sunshine-yellow)]",
  2: "bg-[var(--leaf-green)]",
  3: "bg-[var(--coral-orange)]",
  4: "bg-[var(--grape-purple)]",
  5: "bg-[var(--bubblegum-pink)]",
  6: "bg-[var(--ocean-teal)]",
  7: "bg-[var(--deep-orange)]",
};
  return GRADE_COLORS[gradeId] || GRADE_COLORS[0];
};


// Unique icons for each subject
export const getSubjectIcon = (subjectId: number) => {
  switch (subjectId) {
    case 1: // Math
      return <Calculator className="text-green-700 w-6 h-6" />;
    case 2: // English
      return <BookOpen className="text-purple-700 w-6 h-6" />;
    case 3: // Science
      return <FlaskRound className="text-blue-700 w-6 h-6" />;
    case 4: // Social Studies
      return <Globe className="text-yellow-700 w-6 h-6" />;
    default: // Default icon
      return <BookOpen className="text-gray-700 w-6 h-6" />;
  }
};