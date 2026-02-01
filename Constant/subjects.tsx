import {
  Calculator,
  BookOpen,
  FlaskRound,
  Globe,
} from "lucide-react";

export const SUBJECTS = {
  MATH: {
    id: 1,
    name: "Math",
    color: "text-green-700",
    icon: <Calculator className="w-6 h-6 text-[var(--emerald-green)]" />,
    route: "/subjects/math",
  },
  ENGLISH: {
    id: 2,
    name: "English",
    color: "text-purple-700",
    icon: <BookOpen className="w-6 h-6 text-[var(--deep-purple)]" />,
    route: "/subjects/english",
  },
  SCIENCE: {
    id: 3,
    name: "Science",
    color: "text-blue-700",
    icon: <FlaskRound className="w-6 h-6 text-[var(--deep-blue)]" />,
    route: "/subjects/science",
  },
  SOCIAL: {
    id: 4,
    name: "Social Studies",
    color: "text-yellow-700",
    icon: <Globe className="w-6 h-6 text-[var(--golden-yellow)]" />,
    route: "/subjects/social-studies",
  },
} as const;

// Array version for loops
export const SUBJECT_LIST = Object.values(SUBJECTS);

// Helper: get subject by ID
export const getSubjectById = (id: number) =>
  SUBJECT_LIST.find((s) => s.id === id);

// Helper: get icon by ID
export const getSubjectIcon = (id: number) =>
  getSubjectById(id)?.icon ?? <BookOpen className="w-6 h-6 text-gray-600" />;
