import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// Utility function to merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// Color mapping for grades
export const getGradeColor = (gradeId: number) => {
  const GRADE_COLORS: Record<number, string> = {
  0: "bg-[var(--grade-0)]",
  1: "bg-[var(--grade-1)]",
  2: "bg-[var(--grade-2)]",
  3: "bg-[var(--grade-3)]",
  4: "bg-[var(--grade-4)]",
  5: "bg-[var(--grade-5)]",
  6: "bg-[var(--grade-6)]",
  7: "bg-[var(--grade-7)]",
};
  return GRADE_COLORS[gradeId] || GRADE_COLORS[0];
};