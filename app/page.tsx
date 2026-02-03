"use client"
import { GradeCard } from "@/components/common/GradeCard";
import { useCurriculum } from "@/hooks/useCurriculum";
import { layout } from "@/styles/theme";

export default function Learning() {
  const { data, loading } = useCurriculum();

  if (loading) {
    return (
      <div className="p-6 text-center text-slate-500">
        Loading your learning Curriculum...
      </div>
    );
  }

  return (
    <div className={layout.page}>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Curriculum by Grade
      </h1>

      <div className="flex flex-wrap gap-8 max-w-7xl mx-auto justify-center">
        {data?.map((grade) => (
          <GradeCard key={grade.id} grade={grade} />
        ))}
      </div>
    </div>
  );
}
