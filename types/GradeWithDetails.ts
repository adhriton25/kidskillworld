
// -----------------------------
// Output Types
// -----------------------------
export type SkillType = {
  id: number;
  name: string;
  description: string | null;
};

export type CategoryType = {
  id: number;
  name: string;
  skills: SkillType[];
};

export type SubjectType = {
  id: number;
  name: string;
  categories: CategoryType[];
};

export type GradeType = {
  id: number;
  name: string;
  subjects: SubjectType[];
};