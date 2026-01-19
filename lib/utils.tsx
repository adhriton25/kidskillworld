import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// Utility function to merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
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