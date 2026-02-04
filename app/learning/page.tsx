"use client";

import { useMemo, useState } from "react";
import { Brain } from "lucide-react";
import SkillCard from "@/components/common/SkillCard";
import { GradeType } from "@/types/GradeWithDetails";
import { SUBJECTS } from "@/constant/subjects";
import { GRADE } from "@/constant/grade";
import { useCurriculum } from "@/hooks/useCurriculum";
import { Button } from "@/components/base/Button";
import SkillCategoryFilter from "@/components/common/SkillCategoryFilter";

export const getUniqueSubjects = (grade: GradeType) => {
  const subject = new Map<number, { id: number; name: string }>();
  grade.subjects.forEach((subj) => {
    if (!subject.has(subj.id)) {
      subject.set(subj.id, {
        id: subj.id,
        name: subj.name,
      });
    }
  });
  return Array.from(subject.values());
};

export default function LearnPage() {
  const { data, loading } = useCurriculum();
  const [gradeId, setGradeId] = useState<number>(GRADE["Pre-K"].id);
  const [subjectId, setSubjectId] = useState<number>(SUBJECTS.MATH.id);
  const [categoryId, setCategoryId] = useState<number | null>(null);

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
      {/* LEFT SIDEBAR - FILTERS */}
      <aside className="w-full md:w-64 p-6 border-r border-gray-100">
        <div className="mb-8">
          <h3 className="font-bold text-slate-700 mb-4 uppercase text-xs tracking-widest">
            Subjects
          </h3>

          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-700">
              Subject
            </h2>
            <div className="space-y-2">
              {getUniqueSubjects((data || [])[0]).map((s) => (
                <label
                  key={s.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="subject"
                    checked={subjectId === s.id}
                    onChange={() => {
                      setSubjectId(s.id);
                      setCategoryId(null);
                    }}
                  />
                  <span className="text-sm">{s.name}</span>
                </label>
              ))}
            </div>
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
                  if (
                    grd.subjects
                      .find((sub) => sub.id === subjectId)
                      ?.categories.find((cat) => cat.id === categoryId)
                  ) {
                  } else {
                    setCategoryId(null);
                  }
                }}
              >
                {grd.name}
              </Button>
            ))}
          </div>
        </div>
      </aside>

      <div className="mx-auto max-w-6xl px-4 py-6 bg-slate-50/30">
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
          <SkillCategoryFilter
            grades={data}
            gradeId={gradeId}
            subjectId={subjectId}
            categoryId={categoryId}
            onCategoryChange={setCategoryId}
          />
        )}

        <section>
          {filterData?.map((category) => (
            <div
              key={category.id}
              className="mb-6 rounded-2xl bg-white p-4 shadow-sm"
            >
              <h3 className="mb-3 font-bold text-[27px] text-sky-500">
                {category.name}
              </h3>

              <div className="grid gap-6 sm:grid-cols-2">
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
