"use client";

import { useMemo, useState, useEffect, ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { Brain } from "lucide-react";
import SkillCard from "@/components/common/SkillCard";
import { GradeType } from "@/types/GradeWithDetails";
import { getSubjectIcon, SUBJECTS } from "@/constant/subjects";
import { GRADE } from "@/constant/grade";
import { useCurriculum } from "@/hooks/useCurriculum";
import { Button } from "@/components/base/Button";
import SkillCategoryFilter from "@/components/common/SkillCategoryFilter";
import { RadioList } from "@/components/base/RadioList";

export const getUniqueSubjects = (grade: GradeType) => {
  const subject = new Map<
    number,
    { value: number; label: string; icon: ReactNode }
  >();
  grade.subjects.forEach((subj) => {
    if (!subject.has(subj.id)) {
      subject.set(subj.id, {
        value: subj.id,
        label: subj.name,
        icon: getSubjectIcon(subj.id),
      });
    }
  });
  return Array.from(subject.values());
};

export default function LearnPage() {
  const searchParams = useSearchParams();
  const { data, loading } = useCurriculum();

  // DEFAULT VALUES
  const defaultGrade = GRADE["Pre-K"].id;
  const defaultSubject = SUBJECTS.MATH.id;

  const [gradeId, setGradeId] = useState<number>(defaultGrade);
  const [subjectId, setSubjectId] = useState<number>(defaultSubject);
  const [categoryId, setCategoryId] = useState<number | null>(null);

  // ⬇️ APPLY QUERY PARAMS ONCE WHEN PAGE LOADS
  useEffect(() => {
    const gradeParam = searchParams.get("grade");
    const subjectParam = searchParams.get("subject");
    const categoryParam = searchParams.get("category");

    if (gradeParam) setGradeId(Number(gradeParam));
    if (subjectParam) setSubjectId(Number(subjectParam));
    if (categoryParam) setCategoryId(Number(categoryParam));
  }, []); // run only once

  const filterData = useMemo(() => {
    return data
      ?.find((grd) => grd.id === gradeId)
      ?.subjects.find((sub) => sub.id === subjectId)
      ?.categories.filter((cat) => (categoryId ? cat.id === categoryId : true));
  }, [categoryId, data, gradeId, subjectId]);

  if (loading) {
    return (
      <div className="p-6 text-center text-slate-500">
        Loading your learning dashboard...
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* LEFT SIDEBAR */}
      <aside className="w-full md:w-64  p-6 border-r border-gray-100">
        <div className="mb-8">
          <h2 className="mb-2 text-sm font-semibold text-slate-700">Subject</h2>
          <div className="space-y-2">
            <RadioList<number>
              name="subject"
              options={getUniqueSubjects((data || [])[0])}
              value={subjectId}
              onChange={(id) => {
                setSubjectId(id);
                setCategoryId(null);
              }}
              orientation="vertical"
              showCheckIcon={false}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-bold text-slate-700 mb-4 uppercase text-xs tracking-widest">
            Grade Level
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {(data || []).map((grd) => (
              <Button
                size="sm"
                shape="rounded"
                variant={gradeId === grd.id ? "sky" : "skyLight"}
                key={grd.id}
                onClick={() => {
                  setGradeId(grd.id);
                  const validCategory = grd.subjects
                    .find((sub) => sub.id === subjectId)
                    ?.categories.find((cat) => cat.id === categoryId);

                  if (!validCategory) setCategoryId(null);
                }}
              >
                {grd.name}
              </Button>
            ))}
          </div>
        </div>
      </aside>

      <div className="w-full md:w-[75%] mx-auto px-4 py-6 bg-slate-50/30">
        <div className="mb-6 flex items-center gap-3">
          <Brain className="h-8 w-8 text-sky-500" />
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Learn & Practice
            </h1>
            <p className="text-sm text-slate-600">
              Choose your grade, subject, and category.
            </p>
          </div>
        </div>

        {data && (
          <div className="mb-6">
            <SkillCategoryFilter
              grades={data}
              gradeId={gradeId}
              subjectId={subjectId}
              categoryId={categoryId}
              onCategoryChange={setCategoryId}
            />
          </div>
        )}

        <section>
          {filterData?.map((category) => (
            <div
              key={category.id}
              className="mb-6 bg-sky-50  rounded-2xl p-4 shadow-sm"
            >
              <h3 className="mb-3 font-bold text-2xl text-sky-500">
                {category.name}
              </h3>

              <div className="grid gap-6 md:grid-cols-3">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
