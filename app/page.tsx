// app/grades/page.tsx

import { GradeCard } from "@/components/common/gradeCard";
import { GradeWithDetails } from "@/types/GradeWithDetails";


async function getGrades(): Promise<GradeWithDetails[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/grades`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function Learning() {
  const grades = await getGrades();

  return (
    <div >
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Curriculum by Grade</h1>
      
      <div className="flex flex-wrap gap-8 max-w-7xl mx-auto justify-center">
        {grades.map((grade) => (
          <GradeCard key={grade.id} grade={grade} />
        ))}
      </div>
    </div>
  );
}