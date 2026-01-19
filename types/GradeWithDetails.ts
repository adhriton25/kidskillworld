// types/index.ts
export interface GradeWithDetails {
  id: number;
  name: string;
  skills: Array<{
    id: number;
    name: string;
    subject: { id: number; name: string };
    category: { id: number; name: string };
    _count: { topics: number };
  }>;
}