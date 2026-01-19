// app/grades/page.tsx

import { GradeCard } from "@/components/common/GradeCard";
import { GradeWithDetails } from "@/types/GradeWithDetails";


async function getGrades(): Promise<GradeWithDetails[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/grades`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function GradesSkill() {
  const grades = await getGrades();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Curriculum by Grade</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {grades.map((grade) => (
          <GradeCard key={grade.id} grade={grade} />
        ))}
      </div>
    </main>
  );
}